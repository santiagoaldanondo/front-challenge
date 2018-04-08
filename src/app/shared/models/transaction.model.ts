import { Card } from './card.model'

enum CurrencyCode {
    EUR = 'EUR',
    USD = 'USD',
    JPY = 'JPY'
}

enum Action {
    payment = 'payment',
    credit = 'credit'
}

class Transaction {
    action: Action;
    amount: number;
    brandId: number;
    card: Card;
    currencyCode: CurrencyCode;
    id: string;
    trackingCode: string;
}

export { CurrencyCode, Action, Transaction}