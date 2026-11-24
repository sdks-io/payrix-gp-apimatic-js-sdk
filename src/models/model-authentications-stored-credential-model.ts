import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const ModelAuthenticationsStoredCredentialModel = {
  Unscheduled: "UNSCHEDULED",
  Recurring: "RECURRING",
  Subscription: "SUBSCRIPTION",
  Installment: "INSTALLMENT",
  AddPaymentMethod: "ADD_PAYMENT_METHOD",
  MaintainPaymentMethod: "MAINTAIN_PAYMENT_METHOD",
  MaintainPaymentVerification: "MAINTAIN_PAYMENT_VERIFICATION",
  SplitOrDelayedShipment: "SPLIT_OR_DELAYED_SHIPMENT",
  TopUp: "TOP_UP",
  MailOrder: "MAIL_ORDER",
  TelephoneOrder: "TELEPHONE_ORDER",
  WhitelistStatusCheck: "WHITELIST_STATUS_CHECK",
  OtherPayment: "OTHER_PAYMENT",
  BillingAgreement: "BILLING_AGREEMENT",
} as const;
export type ModelAuthenticationsStoredCredentialModel =
  | (typeof ModelAuthenticationsStoredCredentialModel)[keyof typeof ModelAuthenticationsStoredCredentialModel]
  | (string & {});

export const modelAuthenticationsStoredCredentialModelSchema: EnumSchema<ModelAuthenticationsStoredCredentialModel> =
  s.enumOf<ModelAuthenticationsStoredCredentialModel>(ModelAuthenticationsStoredCredentialModel);
