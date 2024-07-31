import { Injectable } from '@nestjs/common';
import { FilesRepository } from './repositories/files.repository';

@Injectable()
export class FilesService {
  constructor(private readonly repository: FilesRepository) {}

  async create(file: Express.Multer.File) {
    return await this.repository.create(file);
  }
}
