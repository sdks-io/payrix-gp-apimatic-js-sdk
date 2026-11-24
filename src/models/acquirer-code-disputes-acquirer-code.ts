import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Contains the acquirer code which helps identify the processing gateway.
 * * `GPN` - Global gateway
 * * `HPY` - Heartland gateway.
 * * `EVO` - EVO gateway
 */
export const AcquirerCodeDisputesAcquirerCode = {
  Gpn: "GPN",
  Hpy: "HPY",
  Evo: "EVO",
} as const;
export type AcquirerCodeDisputesAcquirerCode =
  | (typeof AcquirerCodeDisputesAcquirerCode)[keyof typeof AcquirerCodeDisputesAcquirerCode]
  | (string & {});

export const acquirerCodeDisputesAcquirerCodeSchema: EnumSchema<AcquirerCodeDisputesAcquirerCode> =
  s.enumOf<AcquirerCodeDisputesAcquirerCode>(AcquirerCodeDisputesAcquirerCode);
