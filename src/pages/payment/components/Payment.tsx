import { usePaymentMethods } from '../hooks/usePaymentMethods'
import { useRoundUp } from '../hooks/useRoundUp'
import { PaymentStrategy } from '../models/PaymentStrategy'
import paymentLayer from '../payment-section-layer-design.png'
import {
  formatButtonLabel,
  formatCheckboxLabel,
  roundUpToNearestInteger,
} from '../utils'
import { DonationCheckbox } from './DonationCheckbox'
import { PaymentMethods } from './PaymentMethods'

export const Payment = ({
  amount,
  strategy = new PaymentStrategy('$', roundUpToNearestInteger),
}: {
  amount: number
  strategy?: PaymentStrategy
}) => {
  const { paymentMethods } = usePaymentMethods()

  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(
    amount,
    strategy
  )

  return (
    <div className="m-8">
      <div>
        <img
          src={paymentLayer}
          alt="More granular split makes the responsibility of each part cleaner"
        />
      </div>
      <section className="mt-4 border p-4">
        <h3 className="text-lg font-bold">Payment</h3>
        <PaymentMethods options={paymentMethods} />
        <hr className="m-4 border-dashed" />
        <DonationCheckbox
          onChange={updateAgreeToDonate}
          checked={agreeToDonate}
          content={formatCheckboxLabel(agreeToDonate, tip, strategy)}
        />
        <button className="mt-3 bg-red-500 px-4 py-2 text-2xl font-bold text-white">
          {formatButtonLabel(strategy, total)}
        </button>
      </section>
    </div>
  )
}
