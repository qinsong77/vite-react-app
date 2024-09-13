// https://epicreact.dev/improve-the-performance-of-your-react-forms/
import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

declare global {
  interface Window {
    PENALTY: number
  }
}

// adjust the example by editing these values
window.PENALTY = 150_000
const FIELDS_COUNT = 10

const fieldNames = Array.from(
  { length: FIELDS_COUNT },
  (_, index) => `field${index.toString()}`
)

const initialFieldValues: Record<string, string> = {}
const initialTouchedFields: Record<string, boolean> = {}
for (const name of fieldNames) {
  initialFieldValues[name] = ''
  initialTouchedFields[name] = false
}

function getFieldError(value: string | undefined) {
  if (!value) return 'field is required'

  const valueIsLowerCase = value === value.toLowerCase()
  const valueIsLongEnough = value.length >= 3
  const valueIsShortEnough = value.length <= 10

  if (!valueIsLowerCase) {
    return 'value must be lower case'
  } else if (!valueIsLongEnough) {
    return 'value must be at least 3 characters long'
  } else if (!valueIsShortEnough) {
    return 'value must be no longer than 10 characters'
  }
  return null
}

/**
 * As this is a contrived example, I've added this to simulate components that
 * do a lot of extra work while rendering. Update the penalty variable at the
 * top to adjust how much of problem this "extra work" causes.
 */
let currentPenaltyValue = 2
function PenaltyComp() {
  for (let index = 2; index < window.PENALTY; index++) {
    currentPenaltyValue = currentPenaltyValue ** index / Math.random()
  }
  return null
}

/**
 * When managing the state higher in the tree you also have prop drilling to
 * deal with. Compare these props to the FastInput component
 */
function SlowInput({
  name,
  fieldValues,
  touchedFields,
  wasSubmitted,
  handleChange,
  handleBlur,
}: {
  name: string
  fieldValues: Record<string, string>
  touchedFields: Record<string, boolean>
  wasSubmitted: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}) {
  const value = fieldValues[name]
  const touched = touchedFields[name]
  const errorMessage = getFieldError(value)
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage

  return (
    <div key={name}>
      <PenaltyComp />
      <Label htmlFor={`${name}-input`}>{name}:</Label>{' '}
      <Input
        id={`${name}-input`}
        name={name}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        pattern="[a-z]{3,10}"
        required
        aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
      />
      {displayErrorMessage ? (
        <span
          role="alert"
          id={`${name}-error`}
          className="ml-2 inline-block text-xs text-red-500"
        >
          {errorMessage}
        </span>
      ) : null}
    </div>
  )
}

/**
 * The SlowForm component takes the approach that's most common: control all
 * fields and manage the state higher up in the React tree. This means that
 * EVERY field will be re-rendered on every keystroke. Normally this is no
 * big deal. But if you have some components that are even a little expensive
 * to re-render, add them all up together and you're toast!
 */
function SlowForm() {
  const [fieldValues, setFieldValues] = React.useReducer(
    (s: typeof initialFieldValues, a: typeof initialFieldValues) => ({
      ...s,
      ...a,
    }),
    initialFieldValues
  )
  const [touchedFields, setTouchedFields] = React.useReducer(
    (s: typeof initialTouchedFields, a: typeof initialTouchedFields) => ({
      ...s,
      ...a,
    }),
    initialTouchedFields
  )
  const [wasSubmitted, setWasSubmitted] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formIsValid = fieldNames.every(
      (name) => !getFieldError(fieldValues[name])
    )

    setWasSubmitted(true)
    if (formIsValid) {
      console.log(`Slow Form Submitted`, fieldValues)
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFieldValues({ [event.currentTarget.name]: event.currentTarget.value })
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    setTouchedFields({ [event.currentTarget.name]: true })
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {fieldNames.map((name) => (
        <SlowInput
          key={name}
          name={name}
          fieldValues={fieldValues}
          touchedFields={touchedFields}
          wasSubmitted={wasSubmitted}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

/**
 * Not much we need to pass here. The `name` is important because that's how
 * we retrieve the field's value from the form.elements when the form's
 * submitted. The wasSubmitted is useful to know whether we should display
 * all the error message even if this field hasn't been touched. But everything
 * else is managed internally which means this field doesn't experience
 * unnecessary re-renders like the SlowInput component.
 */
function FastInput({
  name,
  wasSubmitted,
}: {
  name: string
  wasSubmitted: boolean
}) {
  const [value, setValue] = React.useState('')
  const [touched, setTouched] = React.useState(false)
  const errorMessage = getFieldError(value)
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage

  return (
    <div key={name}>
      <PenaltyComp />
      <Label htmlFor={`${name}-input`}>{name}:</Label>{' '}
      <Input
        id={`${name}-input`}
        name={name}
        type="text"
        onChange={(event) => setValue(event.currentTarget.value)}
        onBlur={() => setTouched(true)}
        pattern="[a-z]{3,10}"
        required
        aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
      />
      {displayErrorMessage ? (
        <span
          role="alert"
          id={`${name}-error`}
          className="ml-2 inline-block text-xs text-red-500"
        >
          {errorMessage}
        </span>
      ) : null}
    </div>
  )
}

/**
 * The FastForm component takes the uncontrolled approach. Rather than keeping
 * track of all the values and passing the values to each field, we let the
 * fields keep track of things themselves and we retrieve the values from the
 * form.elements when it's submitted.
 */
function FastForm() {
  const [wasSubmitted, setWasSubmitted] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fieldValues = Object.fromEntries(formData.entries())

    console.log(fieldValues)
    const formIsValid = Object.values(fieldValues).every(
      (value) => !getFieldError(value as string)
    )

    setWasSubmitted(true)
    if (formIsValid) {
      event.currentTarget.reset()
      console.log(`Fast Form Submitted`, fieldValues)
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {fieldNames.map((name) => (
        <FastInput key={name} name={name} wasSubmitted={wasSubmitted} />
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export function FormDemo() {
  return (
    <div className="w-96">
      <h1>Slow Form</h1>
      <SlowForm />
      <hr />
      <h1>Fast Form</h1>
      <FastForm />
    </div>
  )
}
