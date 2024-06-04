import { Module } from '@nestjs/common';
import { ProductController } from 'src/controllers/product/product.controller';
import { Product } from 'src/entity/product.entity';
import { ProductService } from 'src/services/product/product.service';
// import { TypeOrmModule } from 'typeorm';


@Module({
    // imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductModule {}
