type DonationCheckboxProps = {
  onChange: () => void
  checked: boolean
  content: string
}

const DonationCheckbox = ({
  onChange,
  checked,
  content,
}: DonationCheckboxProps) => {
  return (
    <div>
      <label className="flex items-center">
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span className="ml-2">{content}</span>
      </label>
    </div>
  )
}

export { DonationCheckbox }
