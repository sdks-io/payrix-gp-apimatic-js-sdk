import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  initiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiatorSchema,
  type InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator,
} from "./initiator-links-order-payment-method-configuration-stored-credential-initiator.js";
import {
  modelLinksOrderPaymentMethodConfigurationStoredCredentialModelSchema,
  type ModelLinksOrderPaymentMethodConfigurationStoredCredentialModel,
} from "./model-links-order-payment-method-configuration-stored-credential-model.js";
import {
  sequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequenceSchema,
  type SequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequence,
} from "./sequence-links-order-payment-method-configuration-stored-credential-sequence.js";

export type StoredCredential3 = {
  /**
   * Indicates the transaction processing model being executed when using stored credentials for
   * merchant initiated transactions.
   * * `UNSCHEDULED` - the transaction is ad hoc or unscheduled. For example a payer visiting a
   *   merchant to make purchase using the payment method stored with the merchant.
   * * `RECURRING` - The transaction is a repeat transaction initiated by the merchant and taken
   *   using the payment method stored with the merchant, as part of an agreed schedule of
   *   transactions.
   * * `INSTALLMENT` - The transaction is a repeat transaction initiated by the merchant and taken
   *   using the payment method stored with the merchant, as part of an agreed schedule of
   *   transactions and where the amount is known and agreed in advanced. For example the payment in
   *   full of a good in fixed installments over a defined period of time.
   */
  model?: ModelLinksOrderPaymentMethodConfigurationStoredCredentialModel;
  /**
   * Indicates whether the Merchant or the Payer initiated the creation of a transaction.
   * * `PAYER` - The transaction was initiated by the customer who is paying the merchant.
   * * `MERCHANT` - The transaction was initiated by the merchant, who is getting paid by the payer.
   */
  initiator?: InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator;
  /**
   * Indicates the order of this transaction in the sequence of a planned, repeating transaction
   * processing model.
   */
  sequence?: SequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequence;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storedCredential3Schema: Schema<StoredCredential3> = s.object<StoredCredential3>(
  {
    model: s.optional(s.lazy(() => modelLinksOrderPaymentMethodConfigurationStoredCredentialModelSchema)),
    initiator: s.optional(
      s.lazy(() => initiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiatorSchema),
    ),
    sequence: s.optional(
      s.lazy(() => sequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequenceSchema),
    ),
  },
  { additionalProperties: s.json() },
);
