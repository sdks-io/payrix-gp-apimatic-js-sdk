import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountUpdaterEligible1Schema, type AccountUpdaterEligible1 } from "./account-updater-eligible1.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { customerSchema, type Customer } from "./customer.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { paymentUpdatesResponseSchema, type PaymentUpdatesResponse } from "./payment-updates-response.js";
import { paymentSchema, type Payment } from "./payment.js";
import {
  subscriptionTokensResponseSchema,
  type SubscriptionTokensResponse,
} from "./subscription-tokens-response.js";
import { tokenStatus1Schema, type TokenStatus1 } from "./token-status1.js";
import { txnsResponseSchema, type TxnsResponse } from "./txns-response.js";

export type Token1 = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  customer?: Customer;
  payment?: Payment;
  status?: TokenStatus1;
  /** The auto-generated token identifier. */
  token?: string;
  /** The magnetic stripe track data for the payment record for use in a transaction. */
  track?: string;
  /** The CVV (Card Verification Value) for the payment record for use in a transaction */
  cvv?: string;
  /**
   * The expiry month for the payment method associated with this Token. This field is stored as a
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
  origin?: string;
  /** Entry mode set to the token. */
  entryMode?: number;
  /**
   * The omnitoken value. If this field has a value, the whole record is treated as an omnitoken.
   */
  omnitoken?: string;
  accountUpdaterEligible?: AccountUpdaterEligible1;
  inactive?: Inactive1;
  frozen?: Frozen1;
  paymentUpdates?: PaymentUpdatesResponse[];
  subscriptionTokens?: SubscriptionTokensResponse[];
  txns?: TxnsResponse[];
};

export const token1Schema: Schema<Token1> = s.object<Token1>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  customer: s.optional(s.lazy(() => customerSchema)),
  payment: s.optional(s.lazy(() => paymentSchema)),
  status: s.optional(s.lazy(() => tokenStatus1Schema)),
  token: s.optional(s.string()),
  track: s.optional(s.string()),
  cvv: s.optional(s.string()),
  expiration: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  custom: s.optional(s.string()),
  authTokenCustomer: s.optional(s.string()),
  origin: s.optional(s.string()),
  entryMode: s.optional(s.number()),
  omnitoken: s.optional(s.string()),
  accountUpdaterEligible: s.optional(s.lazy(() => accountUpdaterEligible1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  paymentUpdates: s.optional(s.array(s.lazy(() => paymentUpdatesResponseSchema))),
  subscriptionTokens: s.optional(s.array(s.lazy(() => subscriptionTokensResponseSchema))),
  txns: s.optional(s.array(s.lazy(() => txnsResponseSchema))),
});
