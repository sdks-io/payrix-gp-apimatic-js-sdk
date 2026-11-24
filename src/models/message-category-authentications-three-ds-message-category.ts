import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the reason category the authentication was initiated.
 * * `PAYMENT_AUTHENTICATION` - The authentication relates to a payment.
 * * `NON_PAYMENT_AUTHENTICATION` - non payment activity such as adding or maintaining cards or card
 *   verification (OTB).
 */
export const MessageCategoryAuthenticationsThreeDsMessageCategory = {
  PaymentAuthentication: "PAYMENT_AUTHENTICATION",
  NonPaymentAuthentication: "NON_PAYMENT_AUTHENTICATION",
} as const;
export type MessageCategoryAuthenticationsThreeDsMessageCategory =
  | (typeof MessageCategoryAuthenticationsThreeDsMessageCategory)[keyof typeof MessageCategoryAuthenticationsThreeDsMessageCategory]
  | (string & {});

export const messageCategoryAuthenticationsThreeDsMessageCategorySchema: EnumSchema<MessageCategoryAuthenticationsThreeDsMessageCategory> =
  s.enumOf<MessageCategoryAuthenticationsThreeDsMessageCategory>(
    MessageCategoryAuthenticationsThreeDsMessageCategory,
  );
