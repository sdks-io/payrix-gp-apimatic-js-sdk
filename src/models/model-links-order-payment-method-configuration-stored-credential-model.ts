import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the transaction processing model being executed when using stored credentials for
 * merchant initiated transactions.
 * * `UNSCHEDULED` - the transaction is ad hoc or unscheduled. For example a payer visiting a
 *   merchant to make purchase using the payment method stored with the merchant.
 * * `RECURRING` - The transaction is a repeat transaction initiated by the merchant and taken using
 *   the payment method stored with the merchant, as part of an agreed schedule of transactions.
 * * `INSTALLMENT` - The transaction is a repeat transaction initiated by the merchant and taken
 *   using the payment method stored with the merchant, as part of an agreed schedule of
 *   transactions and where the amount is known and agreed in advanced. For example the payment in
 *   full of a good in fixed installments over a defined period of time.
 */
export const ModelLinksOrderPaymentMethodConfigurationStoredCredentialModel = {
  Unscheduled: "UNSCHEDULED",
  Recurring: "RECURRING",
  Installment: "INSTALLMENT",
} as const;
export type ModelLinksOrderPaymentMethodConfigurationStoredCredentialModel =
  | (typeof ModelLinksOrderPaymentMethodConfigurationStoredCredentialModel)[keyof typeof ModelLinksOrderPaymentMethodConfigurationStoredCredentialModel]
  | (string & {});

export const modelLinksOrderPaymentMethodConfigurationStoredCredentialModelSchema: EnumSchema<ModelLinksOrderPaymentMethodConfigurationStoredCredentialModel> =
  s.enumOf<ModelLinksOrderPaymentMethodConfigurationStoredCredentialModel>(
    ModelLinksOrderPaymentMethodConfigurationStoredCredentialModel,
  );
