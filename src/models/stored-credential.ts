import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modelAuthenticationsStoredCredentialModelSchema,
  type ModelAuthenticationsStoredCredentialModel,
} from "./model-authentications-stored-credential-model.js";

export type StoredCredential = {
  /**
   * Indicates the transaction processing model being executed when using stored credentials for
   * merchant initiated transactions:
   * * `UNSCHEDULED`
   * * `RECURRING`
   * * `SUBSCRIPTION`
   * * `ADD_PAYMENT_METHOD`
   * * `MAINTAIN_PAYMENT_METHOD`
   * * `MAINTAIN_PAYMENT_VERIFICATION`
   * * `SPLIT_OR_DELAYED_SHIPMENT`
   * * `TOP_UP`
   * * `MAIL_ORDER`
   * * `TELEPHONE_ORDER`
   * * `WHITELIST_STATUS_CHECK`
   * * `OTHER_PAYMENT`
   * * `BILLING_AGREEMENT`
   */
  model?: ModelAuthenticationsStoredCredentialModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storedCredentialSchema: Schema<StoredCredential> = s.object<StoredCredential>(
  {
    model: s.optional(s.lazy(() => modelAuthenticationsStoredCredentialModelSchema)),
  },
  { additionalProperties: s.json() },
);
