import { Card } from './card.model'

enum Currency {
    EUR = "EUR",
    USD = "USD",
    JPY = "JPY"
}

enum Action {
    payment = "payment",
    credit = "credit"
}

export class Transaction {
    action: Action;
    amount: number;
    brandId: number;
    card: Card;
    currencyCode: Currency;
    id: string;
    trackingCode: string;
}