export class Order {
    constructor(
        readonly id: number,
        readonly clientId: number,
        readonly productId: number,
        readonly status: string,
        readonly totalPrice: number,
    ) { }
}
