import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product/product.controller';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
