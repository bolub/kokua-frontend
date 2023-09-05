import { Language } from '@prisma/client';

export interface LanguageServiceType {
  all: () => Promise<Language[]>;
}
