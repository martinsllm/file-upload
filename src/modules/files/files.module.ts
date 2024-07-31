import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { FilesRepository } from './repositories/files.repository';

@Module({
  imports: [],
  controllers: [FilesController],
  providers: [FilesService, FilesRepository],
})
export class FilesModule {}
