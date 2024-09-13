import { PaymentMethod } from '../models/PaymentMethod'

export const PaymentMethods = ({ options }: { options: PaymentMethod[] }) => (
  <>
    {options.map((method) => (
      <label key={method.provider} className="mb-2 mt-2 block">
        <input
          type="radio"
          name="payment"
          value={method.provider}
          defaultChecked={method.isDefaultMethod}
        />
        <span className="ml-1">{method.label}</span>
      </label>
    ))}
  </>
)
