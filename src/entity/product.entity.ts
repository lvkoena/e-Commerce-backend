import { Entity } from 'typeorm';

@Entity('products')
export class Product {
    constructor(initialData: Partial<Product> = null) {
        if (initialData !== null) {
            Object.assign(this, initialData)
        }
    }
}