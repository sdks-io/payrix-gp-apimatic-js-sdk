import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Where the response lists multiple resources, the API splits the response into several 'pages'.
 * This object indicates the current and last available pages in the list.
 */
export type DetailsProperties = {
  /** The current page in the paginated resource list. */
  current?: number;
  /** The last available page in the paginated resource list. */
  last?: number;
  /** Indicates if another page of results is available. */
  hasMore?: boolean;
};

export const detailsPropertiesSchema: Schema<DetailsProperties> = s.object<DetailsProperties>({
  current: s.optional(s.number()),
  last: s.optional(s.number()),
  hasMore: s.optional(s.boolean()),
});
