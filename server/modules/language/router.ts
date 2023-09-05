import { procedure, router } from '../../trpc';
import { LanguageService } from './impl';

export const languageRouter = router({
  all: procedure.query(() => {
    return LanguageService.all();
  }),
});
