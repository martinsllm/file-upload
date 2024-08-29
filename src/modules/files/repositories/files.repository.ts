import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import { IFilesRepository } from '../interfaces/files.interface';

@Injectable()
export class FilesRepository implements IFilesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(file: Express.Multer.File) {
    const uploadedFile = {
      filename: file.filename,
      length: file.size,
      filetype: file.mimetype,
      url: file.path,
    };

    return await this.prismaService.files.create({
      data: uploadedFile,
    });
  }

  async get() {
    return await this.prismaService.files.findMany();
  }
}
