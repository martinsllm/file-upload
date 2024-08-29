import { Inject, Injectable } from '@nestjs/common';
import { IFilesRepository } from './interfaces/files.interface';

@Injectable()
export class FilesService {
  constructor(
    @Inject(IFilesRepository) private readonly repository: IFilesRepository,
  ) {}

  async create(file: Express.Multer.File) {
    return await this.repository.create(file);
  }

  async get() {
    return await this.repository.get();
  }
}
