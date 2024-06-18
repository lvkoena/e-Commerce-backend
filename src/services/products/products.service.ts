import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import path from 'path';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/driver/mongodb/typings';

@Injectable()
export class ProductsService {
    constructor(
        //Decorator function
        @InjectRepository(Product)
        private readonly productsRepository: Repository<Product>,) {}

    // async create(createProductDto: CreateProductDto): Promise<Product> {
    //     return await this.productsRepository.save(createProductDto);
    // }

    async findAll(): Promise<Product[]> {
        return await this.productsRepository.find();
    }

    // async findOne(id: string): Promise<Product> {
    //     return await this.productsRepository.findOne(id);
    // }

    // async update(id: string, updateProductDto: UpdateProductDto,): Promise<UpdateResult> {
    //     return await this.productsRepository.update(id, updateProductDto);
    // }
}
