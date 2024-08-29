import { Files } from '@prisma/client';

export interface IFilesRepository {
  create(file: Express.Multer.File): Promise<Files>;
  get(): Promise<Files[]>;
}

export const IFilesRepository = Symbol('IFilesRepository');
