import { router } from './trpc';
import { tagsRouter } from './modules/tags/router';
import { resourceRouter } from './modules/resource/router';
import { frameworkRouter } from './modules/framework/router';
import { languageRouter } from './modules/language/router';

export const appRouter = router({
  tags: tagsRouter,
  resources: resourceRouter,
  frameworks: frameworkRouter,
  languages: languageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
