import prisma from '../../../utils/db';
import { LanguageServiceType } from './interface';

const all: LanguageServiceType['all'] = async () => {
  const data = await prisma.language.findMany();

  return await prisma.language.findMany();
};

export const LanguageService: LanguageServiceType = {
  all,
};
