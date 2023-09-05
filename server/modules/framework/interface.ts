import { Framework } from '@prisma/client';

export interface FrameworkServiceType {
  all: () => Promise<Framework[]>;
}
