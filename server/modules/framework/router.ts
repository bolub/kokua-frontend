import { procedure, router } from '../../trpc';
import { FrameworkService } from './impl';

export const frameworkRouter = router({
  all: procedure.query(() => {
    return FrameworkService.all();
  }),
});
