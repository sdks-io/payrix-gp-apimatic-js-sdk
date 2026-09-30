import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether it is pending a risk check.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `pending` - **Pending**
 * - `successful` - **Successful**
 * - `failed` - **Failed**
 * - `manual` - **Manual**
 *
 * </details>
 */
export const EntityPendingRiskCheck2 = {
  Pending: "pending",
  Successful: "successful",
  Failed: "failed",
  Manual: "manual",
} as const;
export type EntityPendingRiskCheck2 =
  | (typeof EntityPendingRiskCheck2)[keyof typeof EntityPendingRiskCheck2]
  | (string & {});

export const entityPendingRiskCheck2Schema: EnumSchema<EntityPendingRiskCheck2> =
  s.enumOf<EntityPendingRiskCheck2>(EntityPendingRiskCheck2);
