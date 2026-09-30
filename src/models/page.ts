import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Page = {
  /** The current page in the paginated resource list. */
  current?: number;
  /** The last available page in the paginated resource list. */
  last?: number;
  /** Indicates if another page of results is available. */
  hasMore?: boolean;
};

export const pageSchema: Schema<Page> = s.object<Page>({
  current: s.optional(s.number()),
  last: s.optional(s.number()),
  hasMore: s.optional(s.boolean()),
});
