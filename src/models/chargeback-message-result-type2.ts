import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of this chargebackMessageResult.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `general` - **A general type of result.**
 * - `platform` - **Platform message.**
 *
 * </details>
 */
export const ChargebackMessageResultType2 = {
  General: "general",
  Platform: "platform",
} as const;
export type ChargebackMessageResultType2 =
  | (typeof ChargebackMessageResultType2)[keyof typeof ChargebackMessageResultType2]
  | (string & {});

export const chargebackMessageResultType2Schema: EnumSchema<ChargebackMessageResultType2> =
  s.enumOf<ChargebackMessageResultType2>(ChargebackMessageResultType2);
