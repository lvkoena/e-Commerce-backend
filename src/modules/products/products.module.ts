import { Module } from '@nestjs/common';
import { ProductsController } from 'src/controllers/products/products.controller';
import { Products } from 'src/entity/products.entity';
import { ProductService } from 'src/services/products/products.service';
// import { TypeOrmModule } from 'typeorm';


@Module({
    // imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductsModule {}
