import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        //Decorator function
        @InjectRepository(Product)
        private readonly productsRepository: Repository<Product>,
    ) {}

    // async create(createProductDto: CreateProductDto): Promise<Product> {
    //     return await this.productsRepository.save(createProductDto);
    // }

    async findAll(): Promise<Product[]> {
        return await this.productsRepository.find();
    }
}
