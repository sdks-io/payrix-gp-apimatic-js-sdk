import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the Merchant or the Payer initiated the creation of a transaction.
 * * `PAYER` - The transaction was initiated by the customer who is paying the merchant.
 * * `MERCHANT` - The transaction was initiated by the merchant, who is getting paid by the payer.
 */
export const InitiatorVerificationsInitiator = {
  Payer: "PAYER",
  Merchant: "MERCHANT",
} as const;
export type InitiatorVerificationsInitiator =
  | (typeof InitiatorVerificationsInitiator)[keyof typeof InitiatorVerificationsInitiator]
  | (string & {});

export const initiatorVerificationsInitiatorSchema: EnumSchema<InitiatorVerificationsInitiator> =
  s.enumOf<InitiatorVerificationsInitiator>(InitiatorVerificationsInitiator);
