import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { watchlistIntegration2Schema, type WatchlistIntegration2 } from "./watchlist-integration2.js";
import { watchlistsDefault2Schema, type WatchlistsDefault2 } from "./watchlists-default2.js";

export type WatchlistsPostRequest = {
  /** The identifier of the Login associated with this Watchlist. */
  login: string;
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
  default: WatchlistsDefault2;
  /**
   * A custom identifier for this Watchlist. This field is stored as a text string and must be
   * between 0 and 500 characters long.
   */
  custom?: string;
  inactive: Inactive1;
  frozen: Frozen1;
};

export const watchlistsPostRequestSchema: Schema<WatchlistsPostRequest> = s.object<WatchlistsPostRequest>({
  login: s.string(),
  integration: s.optional(s.lazy(() => watchlistIntegration2Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  default: watchlistsDefault2Schema,
  custom: s.optional(s.string()),
  inactive: inactive1Schema,
  frozen: frozen1Schema,
});
