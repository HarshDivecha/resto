import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainItemService } from './main-item/main-item.service';
import { ExtraItemService } from './extra-item/extra-item.service';
import { MainItemController } from './main-item/main-item.controller';
import { ExtraItemController } from './extra-item/extra-item.controller';
import { MenuModule } from './menu/menu.module';

@Module({
  controllers: [AppController, MainItemController, ExtraItemController],
  providers: [AppService, MainItemService, ExtraItemService],
  imports: [MenuModule],
})
export class AppModule {}
