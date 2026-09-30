import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether this is the initial interchange assignment received at settlement.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **This is an interchange reclassification record.**
 *
 * - `1` - **This is the original interchange record assigned at settlement.**
 *
 * </details>
 */
export const InterchangeHistoriesIsInitial2 = {
  _0: 0,
  _1: 1,
} as const;
export type InterchangeHistoriesIsInitial2 =
  | (typeof InterchangeHistoriesIsInitial2)[keyof typeof InterchangeHistoriesIsInitial2]
  | (number & {});

export const interchangeHistoriesIsInitial2Schema: EnumSchema<InterchangeHistoriesIsInitial2> =
  s.enumOf<InterchangeHistoriesIsInitial2>(InterchangeHistoriesIsInitial2);
