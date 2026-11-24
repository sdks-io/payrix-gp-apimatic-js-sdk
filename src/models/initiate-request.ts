import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { browserDataInternalSchema, browserDataSchema, type BrowserData } from "./browser-data.js";
import {
  messageCategoryAuthenticationsThreeDsMessageCategorySchema,
  type MessageCategoryAuthenticationsThreeDsMessageCategory,
} from "./message-category-authentications-three-ds-message-category.js";
import {
  methodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatusSchema,
  type MethodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatus,
} from "./method-url-completion-status-authentications-method-url-completion-status.js";
import { order5InternalSchema, order5Schema, type Order5 } from "./order5.js";
import {
  payerLoginDataInternalSchema,
  payerLoginDataSchema,
  type PayerLoginData,
} from "./payer-login-data.js";
import {
  payerPriorThreeDsAuthenticationDataInternalSchema,
  payerPriorThreeDsAuthenticationDataSchema,
  type PayerPriorThreeDsAuthenticationData,
} from "./payer-prior-three-ds-authentication-data.js";
import { payer1InternalSchema, payer1Schema, type Payer1 } from "./payer1.js";
import {
  paymentMethod6InternalSchema,
  paymentMethod6Schema,
  type PaymentMethod6,
} from "./payment-method6.js";
import {
  recurringAuthorizationDataInternalSchema,
  recurringAuthorizationDataSchema,
  type RecurringAuthorizationData,
} from "./recurring-authorization-data.js";
import { storedCredentialSchema, type StoredCredential } from "./stored-credential.js";
import { threeDs3Schema, type ThreeDs3 } from "./three-ds3.js";

export type InitiateRequest = {
  threeDs: ThreeDs3;
  /**
   * The url of the website that shows the merchant's contact details. Please note that local URLs
   * are not allowed. The URL provided has to be valid
   */
  merchantContactUrl: string;
  paymentMethod: PaymentMethod6;
  order: Order5;
  browserData: BrowserData;
  /**
   * Indicates whether the 3DS Method was completed successfully.
   * * `YES`
   * * `NO`
   */
  methodUrlCompletionStatus?: MethodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatus;
  /**
   * Indicates the reason category the authentication was initiated.
   * * `PAYMENT_AUTHENTICATION` - The authentication relates to a payment.
   * * `NON_PAYMENT_AUTHENTICATION` - non payment activity such as adding or maintaining cards or
   *   card verification (OTB).
   */
  messageCategory?: MessageCategoryAuthenticationsThreeDsMessageCategory;
  storedCredential?: StoredCredential;
  payer?: Payer1;
  payerLoginData?: PayerLoginData;
  payerPriorThreeDsAuthenticationData?: PayerPriorThreeDsAuthenticationData;
  recurringAuthorizationData?: RecurringAuthorizationData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const initiateRequestProperties: s.Shape<InitiateRequest> = {
  threeDs: threeDs3Schema,
  merchantContactUrl: s.string(),
  paymentMethod: paymentMethod6InternalSchema,
  order: order5InternalSchema,
  browserData: browserDataInternalSchema,
  methodUrlCompletionStatus: s.optional(
    s.lazy(() => methodUrlCompletionStatusAuthenticationsMethodUrlCompletionStatusSchema),
  ),
  messageCategory: s.optional(s.lazy(() => messageCategoryAuthenticationsThreeDsMessageCategorySchema)),
  storedCredential: s.optional(s.lazy(() => storedCredentialSchema)),
  payer: s.optional(s.lazy(() => payer1InternalSchema)),
  payerLoginData: s.optional(s.lazy(() => payerLoginDataInternalSchema)),
  payerPriorThreeDsAuthenticationData: s.optional(
    s.lazy(() => payerPriorThreeDsAuthenticationDataInternalSchema),
  ),
  recurringAuthorizationData: s.optional(s.lazy(() => recurringAuthorizationDataInternalSchema)),
  _keysMap: {
    threeDs: "three_ds",
    merchantContactUrl: "merchant_contact_url",
    paymentMethod: "payment_method",
    browserData: "browser_data",
    methodUrlCompletionStatus: "method_url_completion_status",
    messageCategory: "message_category",
    storedCredential: "stored_credential",
    payerLoginData: "payer_login_data",
    payerPriorThreeDsAuthenticationData: "payer_prior_three_ds_authentication_data",
    recurringAuthorizationData: "recurring_authorization_data",
  },
};

export const initiateRequestInternalSchema: Schema<InitiateRequest> = s.object<InitiateRequest>(
  initiateRequestProperties,
  { additionalProperties: s.json() },
);

export const initiateRequestSchema: Schema<InitiateRequest> = s.lazySchema(() =>
  s.object<InitiateRequest>(
    {
      ...initiateRequestProperties,
      paymentMethod: paymentMethod6Schema,
      order: order5Schema,
      browserData: browserDataSchema,
      payer: s.optional(s.lazy(() => payer1Schema)),
      payerLoginData: s.optional(s.lazy(() => payerLoginDataSchema)),
      payerPriorThreeDsAuthenticationData: s.optional(
        s.lazy(() => payerPriorThreeDsAuthenticationDataSchema),
      ),
      recurringAuthorizationData: s.optional(s.lazy(() => recurringAuthorizationDataSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
