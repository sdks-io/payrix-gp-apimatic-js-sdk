import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WatchlistsDefault = {
  _0: 0,
  _1: 1,
} as const;
export type WatchlistsDefault = (typeof WatchlistsDefault)[keyof typeof WatchlistsDefault] | (number & {});

export const watchlistsDefaultSchema: EnumSchema<WatchlistsDefault> =
  s.enumOf<WatchlistsDefault>(WatchlistsDefault);
