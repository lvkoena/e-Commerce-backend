import { Module } from '@nestjs/common';
import { ProductController } from 'src/controllers/product/product.controller';
import { ProductService } from 'src/services/product/product.service';

@Module({
    // imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductModule {}
