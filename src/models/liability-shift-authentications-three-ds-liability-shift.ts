import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the payment has been successfully completed authentication, either by the customer
 * during 3DS or using 3RI in a merchant initiated transaction. If the value returned is YES, then
 * it's recommended to proceed and execute a card authorization. In the event of a "fraudulent"
 * chargeback from the customer, the liability for that dispute has shifted to the issuing bank and
 * away from the merchant.
 * * `YES`
 * * `NO`
 * * `UNSURE`
 */
export const LiabilityShiftAuthenticationsThreeDsLiabilityShift = {
  Yes: "YES",
  No: "NO",
  Unsure: "UNSURE",
} as const;
export type LiabilityShiftAuthenticationsThreeDsLiabilityShift =
  | (typeof LiabilityShiftAuthenticationsThreeDsLiabilityShift)[keyof typeof LiabilityShiftAuthenticationsThreeDsLiabilityShift]
  | (string & {});

export const liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema: EnumSchema<LiabilityShiftAuthenticationsThreeDsLiabilityShift> =
  s.enumOf<LiabilityShiftAuthenticationsThreeDsLiabilityShift>(
    LiabilityShiftAuthenticationsThreeDsLiabilityShift,
  );
