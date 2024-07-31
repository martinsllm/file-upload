import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export class FilesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(file: Express.Multer.File) {
    const uploadedFile = {
      filename: file.filename,
      length: file.size,
      filetype: file.mimetype,
      url: file.path,
    };

    return await this.prismaService.file.create({
      data: uploadedFile,
    });
  }
}
