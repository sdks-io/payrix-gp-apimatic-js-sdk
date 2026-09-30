import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this Watchlist applies to everyone.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Non-Default**
 * - `1` - **Default**
 *
 * </details>
 */
export const WatchlistsDefault2 = {
  _0: 0,
  _1: 1,
} as const;
export type WatchlistsDefault2 = (typeof WatchlistsDefault2)[keyof typeof WatchlistsDefault2] | (number & {});

export const watchlistsDefault2Schema: EnumSchema<WatchlistsDefault2> =
  s.enumOf<WatchlistsDefault2>(WatchlistsDefault2);
