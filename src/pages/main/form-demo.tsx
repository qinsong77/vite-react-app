import { Clock, Info, Zap } from 'lucide-react'
import * as React from 'react'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

declare global {
  interface Window {
    PENALTY: number
  }
}

// Adjust the example penalty value
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
  if (!value) return 'Field is required'

  const valueIsLowerCase = value === value.toLowerCase()
  const valueIsLongEnough = value.length >= 3
  const valueIsShortEnough = value.length <= 10

  if (!valueIsLowerCase) {
    return 'Value must be lowercase'
  } else if (!valueIsLongEnough) {
    return 'Value must be at least 3 characters'
  } else if (!valueIsShortEnough) {
    return 'Value must be no longer than 10 characters'
  }
  return null
}

/**
 * This is a mock component to simulate a lot of extra work during rendering
 * Update the penalty variable at the top to adjust how much of problem this "extra work" causes
 */
let currentPenaltyValue = 2
function PenaltyComp() {
  for (let index = 2; index < window.PENALTY; index++) {
    currentPenaltyValue = currentPenaltyValue ** index / Math.random()
  }
  return null
}

/**
 * Slow Input Component - When managing the state higher in the tree you also have prop drilling to
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
    <div key={name} className="space-y-2">
      <PenaltyComp />
      <div className="space-y-2">
        <Label htmlFor={`${name}-input`} className="text-sm font-medium">
          {name}:
        </Label>
        <Input
          id={`${name}-input`}
          name={name}
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          pattern="[a-z]{3,10}"
          required
          className={displayErrorMessage ? 'border-red-500' : ''}
          aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
        />
        {displayErrorMessage && (
          <p className="text-destructive text-xs">{errorMessage}</p>
        )}
      </div>
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
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
      </div>
      <Button type="submit" className="w-full">
        Submit Form
      </Button>
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
    <div key={name} className="space-y-2">
      <PenaltyComp />
      <div className="space-y-2">
        <Label htmlFor={`${name}-input`} className="text-sm font-medium">
          {name}:
        </Label>
        <Input
          id={`${name}-input`}
          name={name}
          type="text"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onBlur={() => setTouched(true)}
          pattern="[a-z]{3,10}"
          required
          className={displayErrorMessage ? 'border-red-500' : ''}
          aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
        />
        {displayErrorMessage && (
          <p className="text-destructive text-xs">{errorMessage}</p>
        )}
      </div>
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
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {fieldNames.map((name) => (
          <FastInput key={name} name={name} wasSubmitted={wasSubmitted} />
        ))}
      </div>
      <Button type="submit" className="w-full">
        Submit Form
      </Button>
    </form>
  )
}

export function FormDemo() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Form Performance Comparison Demo
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            This demo shows the performance differences between controlled and
            uncontrolled forms. Adjust the PENALTY value at the top to simulate
            different rendering costs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Slow Form */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <CardTitle>Slow Form (Controlled)</CardTitle>
              </div>
              <CardDescription>
                Uses traditional controlled approach, re-renders all fields on
                every keystroke
              </CardDescription>
              <div className="flex gap-2">
                <Badge variant="secondary">Controlled</Badge>
                <Badge variant="outline">Prop Drilling</Badge>
                <Badge variant="destructive">Poor Performance</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <SlowForm />
            </CardContent>
          </Card>

          {/* Fast Form */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                <CardTitle>Fast Form (Uncontrolled)</CardTitle>
              </div>
              <CardDescription>
                Uses uncontrolled approach, fields manage their own state,
                reducing unnecessary re-renders
              </CardDescription>
              <div className="flex gap-2">
                <Badge variant="secondary">Uncontrolled</Badge>
                <Badge variant="outline">Local State</Badge>
                <Badge variant="default">Better Performance</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <FastForm />
            </CardContent>
          </Card>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Performance Explanation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-600">
                  Slow Form Issues
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Re-renders all fields on every keystroke</li>
                  <li>• Requires passing many props</li>
                  <li>• State management at high level</li>
                  <li>• Easy to create performance bottlenecks</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">
                  Fast Form Advantages
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Only current field re-renders</li>
                  <li>• Minimal props passing</li>
                  <li>• Local state management</li>
                  <li>• Better performance</li>
                </ul>
              </div>
            </div>
            <Alert>
              <AlertDescription>
                Current PENALTY value:{' '}
                <strong>{window.PENALTY.toLocaleString()}</strong>. This value
                simulates the rendering cost of each field. The larger the
                value, the more obvious the performance difference.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
