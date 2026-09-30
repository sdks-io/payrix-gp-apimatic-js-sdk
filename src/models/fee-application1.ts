import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where the feeRule should apply.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `both` - **Both.** The rule should apply to the fee and to the calculation of collections.
 * - `fee` - **Fee.** The rule should apply only to the fee itself.
 * - `collection` - **Collection.** The fee should be only used when calculating a collection.
 *
 * </details>
 */
export const FeeApplication1 = {
  Both: "both",
  Fee: "fee",
  Collection: "collection",
} as const;
export type FeeApplication1 = (typeof FeeApplication1)[keyof typeof FeeApplication1] | (string & {});

export const feeApplication1Schema: EnumSchema<FeeApplication1> = s.enumOf<FeeApplication1>(FeeApplication1);
