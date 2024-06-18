import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsModule } from './modules/products/products.module';
import { ProductService } from './services/products/products.service';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductService],
})
export class AppModule {}
