import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

export const globalModules = [ConfigModule.forRoot(), PrismaModule];
