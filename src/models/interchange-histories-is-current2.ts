import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether this is the most recent interchange record for the transaction. Only one record
 * per transaction will have isCurrent = 1.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **This record has been superseded by a later reclassification.**
 *
 * - `1` - **This is the current interchange record for the transaction.**
 *
 * </details>
 */
export const InterchangeHistoriesIsCurrent2 = {
  _0: 0,
  _1: 1,
} as const;
export type InterchangeHistoriesIsCurrent2 =
  | (typeof InterchangeHistoriesIsCurrent2)[keyof typeof InterchangeHistoriesIsCurrent2]
  | (number & {});

export const interchangeHistoriesIsCurrent2Schema: EnumSchema<InterchangeHistoriesIsCurrent2> =
  s.enumOf<InterchangeHistoriesIsCurrent2>(InterchangeHistoriesIsCurrent2);
