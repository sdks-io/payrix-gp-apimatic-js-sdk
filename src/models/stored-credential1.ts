import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modelTransactionsStoredCredentialModelSchema,
  type ModelTransactionsStoredCredentialModel,
} from "./model-transactions-stored-credential-model.js";
import {
  reasonTransactionsStoredCredentialReasonSchema,
  type ReasonTransactionsStoredCredentialReason,
} from "./reason-transactions-stored-credential-reason.js";
import {
  sequenceTransactionsStoredCredentialSequenceSchema,
  type SequenceTransactionsStoredCredentialSequence,
} from "./sequence-transactions-stored-credential-sequence.js";

export type StoredCredential1 = {
  /**
   * This is a Merchant defined reference used to identify the recurring transaction. This is
   * required in Mexico and represents the agreement id between the merchant and the cardholder for
   * a specific subscription or recurring charge.
   */
  contractReference?: string;
  /**
   * Indicates the transaction processing model being executed when using stored credentials for
   * merchant initiated transactions.
   * * `UNSCHEDULED` - the transaction is ad hoc or unscheduled. For example a payer visiting a
   *   merchant to make purchase using the payment method stored with the merchant.
   * * `RECURRING` - The transaction is a repeat transaction initiated by the merchant and taken
   *   using the payment method stored with the merchant, as part of an agreed schedule of
   *   transactions.
   * * `SUBSCRIPTION` - The transaction is a repeat transaction initiated by the merchant and taken
   *   using the payment method stored with the merchant, as part of an agreed schedule of
   *   transactions. The amount taken is based on the usage by the payer of the good or service. for
   *   example a monthly mobile phone bill.
   * * `INSTALLMENT` - The transaction is a repeat transaction initiated by the merchant and taken
   *   using the payment method stored with the merchant, as part of an agreed schedule of
   *   transactions and where the amount is known and agreed in advanced. For example the payment in
   *   full of a good in fixed installments over a defined period of time.
   * * `PARTIAL_SHIPMENT` - the transaction is initiated by the merchant to capture payment for a
   *   portion of the order that is shipped or fulfilled. Multiple transactions may occur against
   *   the same original authorization as goods or services are delivered in parts.
   * * `THIRD_PARTY_INSTALLMENT` - The transaction is initiated by the merchant as part of an
   *   installment payment plan administered by a third party provider.
   * * `ISSUER_INSTALLMENT` - The transaction is initiated by the merchant for a payment that has
   *   been converted into an installment plan by the card issuer. The merchant processes
   *   transactions according to installment terms defined by the issuer.
   */
  model?: ModelTransactionsStoredCredentialModel;
  /** The reason stored credentials are being used to to create a transaction. */
  reason?: ReasonTransactionsStoredCredentialReason;
  /**
   * Indicates the order of this transaction in the sequence of a planned, repeating transaction
   * processing model.
   */
  sequence?: SequenceTransactionsStoredCredentialSequence;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storedCredential1Schema: Schema<StoredCredential1> = s.object<StoredCredential1>(
  {
    contractReference: s.optional(s.string()),
    model: s.optional(s.lazy(() => modelTransactionsStoredCredentialModelSchema)),
    reason: s.optional(s.lazy(() => reasonTransactionsStoredCredentialReasonSchema)),
    sequence: s.optional(s.lazy(() => sequenceTransactionsStoredCredentialSequenceSchema)),
    _keysMap: {
      contractReference: "contract_reference",
    },
  },
  { additionalProperties: s.json() },
);
