interface ISkinExterior {
  title: string
  css_color: string
}

interface ISkin {
  id: number
  name: string
  price: number
  image: string
  exterior: ISkinExterior
}

type TPaymentMethod = 'Visa' | 'PayPal' | 'Payoneer' | 'Bitcoin' | 'TRC-20' | 'ERC-20'

interface IPayments {
  payments: Record<string, TPaymentMethod>
}
