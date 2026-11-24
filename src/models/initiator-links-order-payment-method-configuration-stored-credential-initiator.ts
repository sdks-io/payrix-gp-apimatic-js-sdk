import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the Merchant or the Payer initiated the creation of a transaction.
 * * `PAYER` - The transaction was initiated by the customer who is paying the merchant.
 * * `MERCHANT` - The transaction was initiated by the merchant, who is getting paid by the payer.
 */
export const InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator = {
  Payer: "PAYER",
  Merchant: "MERCHANT",
} as const;
export type InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator =
  | (typeof InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator)[keyof typeof InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator]
  | (string & {});

export const initiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiatorSchema: EnumSchema<InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator> =
  s.enumOf<InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator>(
    InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator,
  );
