import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { FilesRepository } from './repositories/files.repository';
import { IFilesRepository } from './interfaces/files.interface';

@Module({
  imports: [],
  controllers: [FilesController],
  providers: [
    FilesService,
    {
      provide: IFilesRepository,
      useClass: FilesRepository,
    },
  ],
})
export class FilesModule {}
