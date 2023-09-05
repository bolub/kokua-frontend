import { procedure, router } from '../../trpc';
import { TagsService } from './impl';

export const tagsRouter = router({
  all: procedure.query((opts) => {
    return TagsService.all();
  }),
});
