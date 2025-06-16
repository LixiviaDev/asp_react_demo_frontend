export default class ItemData {
    id: number;
    category: string;
    name: string;

    mrp: number;
    discountPercent: number;
    availableQuantity: number;
    discountedSellingPrice: number;
    weightInGms: number;
    quantity: number;

    outOfStock: boolean;

    constructor(
        category: string = "Default category",
        name: string = "Default item",
        mrp: number = 0,
        discountPercent: number = 0,
        availableQuantity: number = 0,
        discountedSellingPrice: number = 0,
        weightInGms: number = 0,
        quantity: number = 0,
        outOfStock: boolean = false
  ) {
        this.id = -1;
        this.category = category;
        this.name = name;

        this.mrp = mrp;
        this.discountPercent = discountPercent;
        this.availableQuantity = availableQuantity;
        this.discountedSellingPrice = discountedSellingPrice;
        this.weightInGms = weightInGms;
        this.quantity = quantity;

        this.outOfStock = outOfStock;
    }
}
