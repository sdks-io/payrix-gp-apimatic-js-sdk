import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { watchlistIntegration2Schema, type WatchlistIntegration2 } from "./watchlist-integration2.js";
import { watchlistsDefault2Schema, type WatchlistsDefault2 } from "./watchlists-default2.js";

export type WatchlistsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  /** The identifier of the Login associated with this Watchlist. */
  login?: string;
  integration?: WatchlistIntegration2;
  /**
   * The name of this Watchlist. This field is stored as a text string and must be between 0 and 500
   * characters long.
   */
  name?: string;
  /**
   * A description of this Watchlist. This field is stored as a text string and must be between 0
   * and 500 characters long.
   */
  description?: string;
  default?: WatchlistsDefault2;
  /**
   * A custom identifier for this Watchlist. This field is stored as a text string and must be
   * between 0 and 500 characters long.
   */
  custom?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const watchlistsResponseSchema: Schema<WatchlistsResponse> = s.object<WatchlistsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.string()),
  integration: s.optional(s.lazy(() => watchlistIntegration2Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  default: s.optional(s.lazy(() => watchlistsDefault2Schema)),
  custom: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
