import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackMessageResultType = {
  General: "general",
  Platform: "platform",
} as const;
export type ChargebackMessageResultType =
  | (typeof ChargebackMessageResultType)[keyof typeof ChargebackMessageResultType]
  | (string & {});

export const chargebackMessageResultTypeSchema: EnumSchema<ChargebackMessageResultType> =
  s.enumOf<ChargebackMessageResultType>(ChargebackMessageResultType);
