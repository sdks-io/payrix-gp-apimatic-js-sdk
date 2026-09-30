import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the chargebackDocument.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `created` - **The ChargebackDocument has been created.**
 *
 * - `processed` - **The ChargebackDocument integration has been successful.**
 *
 * - `failed` - **The ChargebackDocument integration has failed.**
 *
 * </details>
 */
export const ChargebackDocumentStatus2 = {
  Created: "created",
  Processed: "processed",
  Failed: "failed",
} as const;
export type ChargebackDocumentStatus2 =
  | (typeof ChargebackDocumentStatus2)[keyof typeof ChargebackDocumentStatus2]
  | (string & {});

export const chargebackDocumentStatus2Schema: EnumSchema<ChargebackDocumentStatus2> =
  s.enumOf<ChargebackDocumentStatus2>(ChargebackDocumentStatus2);
