import { Module } from '@nestjs/common';
import { ProductsController } from 'src/controllers/products/products.controller';
import { Products } from 'src/entity/product.entity';
import { ProductsService } from 'src/services/products/products.service';
// import { TypeOrmModule } from 'typeorm';


@Module({
    // imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService],
})
export class ProductsModule {}
