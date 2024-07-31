import { Module } from '@nestjs/common';
import { globalModules } from './modules/global';

@Module({
  imports: [...globalModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
