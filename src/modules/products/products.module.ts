import { Module } from '@nestjs/common';
import { ProductService } from 'src/services/products/products.service';
// import { TypeOrmModule } from 'typeorm';


@Module({
    // imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductsController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductModule {}
