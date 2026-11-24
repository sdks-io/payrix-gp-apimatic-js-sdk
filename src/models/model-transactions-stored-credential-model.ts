import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the transaction processing model being executed when using stored credentials for
 * merchant initiated transactions.
 * * `UNSCHEDULED` - the transaction is ad hoc or unscheduled. For example a payer visiting a
 *   merchant to make purchase using the payment method stored with the merchant.
 * * `RECURRING` - The transaction is a repeat transaction initiated by the merchant and taken using
 *   the payment method stored with the merchant, as part of an agreed schedule of transactions.
 * * `SUBSCRIPTION` - The transaction is a repeat transaction initiated by the merchant and taken
 *   using the payment method stored with the merchant, as part of an agreed schedule of
 *   transactions. The amount taken is based on the usage by the payer of the good or service. for
 *   example a monthly mobile phone bill.
 * * `INSTALLMENT` - The transaction is a repeat transaction initiated by the merchant and taken
 *   using the payment method stored with the merchant, as part of an agreed schedule of
 *   transactions and where the amount is known and agreed in advanced. For example the payment in
 *   full of a good in fixed installments over a defined period of time.
 * * `PARTIAL_SHIPMENT` - the transaction is initiated by the merchant to capture payment for a
 *   portion of the order that is shipped or fulfilled. Multiple transactions may occur against the
 *   same original authorization as goods or services are delivered in parts.
 * * `THIRD_PARTY_INSTALLMENT` - The transaction is initiated by the merchant as part of an
 *   installment payment plan administered by a third party provider.
 * * `ISSUER_INSTALLMENT` - The transaction is initiated by the merchant for a payment that has been
 *   converted into an installment plan by the card issuer. The merchant processes transactions
 *   according to installment terms defined by the issuer.
 */
export const ModelTransactionsStoredCredentialModel = {
  Unscheduled: "UNSCHEDULED",
  Recurring: "RECURRING",
  Subscription: "SUBSCRIPTION",
  Installment: "INSTALLMENT",
  PartialShipment: "PARTIAL_SHIPMENT",
  ThirdParty: "THIRD_PARTY",
  IssuerInstalment: "ISSUER_INSTALMENT",
} as const;
export type ModelTransactionsStoredCredentialModel =
  | (typeof ModelTransactionsStoredCredentialModel)[keyof typeof ModelTransactionsStoredCredentialModel]
  | (string & {});

export const modelTransactionsStoredCredentialModelSchema: EnumSchema<ModelTransactionsStoredCredentialModel> =
  s.enumOf<ModelTransactionsStoredCredentialModel>(ModelTransactionsStoredCredentialModel);
