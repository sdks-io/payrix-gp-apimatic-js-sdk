import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InterchangeHistoriesIsCurrent = {
  _0: 0,
  _1: 1,
} as const;
export type InterchangeHistoriesIsCurrent =
  | (typeof InterchangeHistoriesIsCurrent)[keyof typeof InterchangeHistoriesIsCurrent]
  | (number & {});

export const interchangeHistoriesIsCurrentSchema: EnumSchema<InterchangeHistoriesIsCurrent> =
  s.enumOf<InterchangeHistoriesIsCurrent>(InterchangeHistoriesIsCurrent);
