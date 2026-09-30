import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountUpdaterEligible1Schema, type AccountUpdaterEligible1 } from "./account-updater-eligible1.js";
import { customersPostRequestSchema, type CustomersPostRequest } from "./customers-post-request.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { paymentPostRequestSchema, type PaymentPostRequest } from "./payment-post-request.js";
import {
  subscriptionTokensPostRequestSchema,
  type SubscriptionTokensPostRequest,
} from "./subscription-tokens-post-request.js";
import { tokenStatus1Schema, type TokenStatus1 } from "./token-status1.js";
import { txnsPostRequestSchema, type TxnsPostRequest } from "./txns-post-request.js";

export type TokenPostRequest = {
  customer: CustomersPostRequest;
  payment: PaymentPostRequest;
  /**
   * The expiry month for the payment method associated with this Token.In This field is stored as a
   * text string in 'MMYY' format, where 'MM' is the number of a month and 'YY' is the last two
   * digits of a year. For example, '0623' for June 2023. The value must reflect a future date.
   */
  expiration?: string;
  /**
   * The name of this Token. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  name?: string;
  /**
   * A description of this Token. This field is stored as a text string and must be between 0 and
   * 100 characters long.
   */
  description?: string;
  /**
   * Custom, free-form field for client-supplied text, must be between 0 and 1000 characters long.
   */
  custom?: string;
  /** The customer reference from the authToken used for user authentication */
  authTokenCustomer?: string;
  /** The origin of the token. */
  origin?: number;
  /** Entry mode set to the token. */
  entryMode?: number;
  /**
   * The omnitoken value. If this field has a value, the whole record is treated as an omnitoken.
   */
  omnitoken?: string;
  status: TokenStatus1;
  accountUpdaterEligible?: AccountUpdaterEligible1;
  inactive: Inactive1;
  frozen: Frozen1;
  subscriptionTokens?: SubscriptionTokensPostRequest[];
  txns?: TxnsPostRequest[];
};

export const tokenPostRequestSchema: Schema<TokenPostRequest> = s.object<TokenPostRequest>({
  customer: customersPostRequestSchema,
  payment: paymentPostRequestSchema,
  expiration: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  custom: s.optional(s.string()),
  authTokenCustomer: s.optional(s.string()),
  origin: s.optional(s.number()),
  entryMode: s.optional(s.number()),
  omnitoken: s.optional(s.string()),
  status: tokenStatus1Schema,
  accountUpdaterEligible: s.optional(s.lazy(() => accountUpdaterEligible1Schema)),
  inactive: inactive1Schema,
  frozen: frozen1Schema,
  subscriptionTokens: s.optional(s.array(s.lazy(() => subscriptionTokensPostRequestSchema))),
  txns: s.optional(s.array(s.lazy(() => txnsPostRequestSchema))),
});
