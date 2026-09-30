import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "./accounts-response.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { firstTxnSchema, type FirstTxn } from "./first-txn.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { invoicesResponseSchema, type InvoicesResponse } from "./invoices-response.js";
import { statementEntitySchema, type StatementEntity } from "./statement-entity.js";
import { subscriptionOrigin1Schema, type SubscriptionOrigin1 } from "./subscription-origin1.js";
import {
  subscriptionTokensResponseSchema,
  type SubscriptionTokensResponse,
} from "./subscription-tokens-response.js";

export type Subscription1 = {
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
  plan?: AccountsResponse;
  statementEntity?: StatementEntity;
  firstTxn?: FirstTxn;
  /**
   * The date on which the Subscription should start. The date is specified as an eight digit string
   * in YYYYMMDD format, for example, '20160120' for January 20, 2016. The value of this field must
   * represent a date in the future.
   */
  start?: number;
  /**
   * The date on which the Subscription should finish. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016. The value of this
   * field must represent a date in the future.
   */
  finish?: number;
  /**
   * The amount of the total sum of this Subscription that is made up of tax. This field is
   * specified as an integer in cents.
   */
  tax?: number;
  /**
   * The descriptor used in this Subscription. This field is stored as a text string and must be
   * between 1 and 50 characters long. If a value is not set, an attempt is made to set a default
   * value from the merchant information.
   */
  descriptor?: string;
  /** The description of the Txn that will be created through this Subscription. */
  txnDescription?: string;
  /** The order of the Txn that will be created through this Subscription. */
  order?: string;
  origin?: SubscriptionOrigin1;
  /** Authentication token for 3D Secure transactions. */
  authentication?: string;
  /** Authentication reference ID for 3D Secure transactions. */
  authenticationId?: string;
  /** The current count of consecutive payment failures for this subscription. */
  failures?: number;
  /**
   * The maximum consecutive amount of payment failures to allow for this subscription before
   * inactivating it.
   */
  maxFailures?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
  invoices?: InvoicesResponse[];
  subscriptionTokens?: SubscriptionTokensResponse[];
};

export const subscription1Schema: Schema<Subscription1> = s.object<Subscription1>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  plan: s.optional(s.lazy(() => accountsResponseSchema)),
  statementEntity: s.optional(s.lazy(() => statementEntitySchema)),
  firstTxn: s.optional(s.lazy(() => firstTxnSchema)),
  start: s.optional(s.number()),
  finish: s.optional(s.number()),
  tax: s.optional(s.number()),
  descriptor: s.optional(s.string()),
  txnDescription: s.optional(s.string()),
  order: s.optional(s.string()),
  origin: s.optional(s.lazy(() => subscriptionOrigin1Schema)),
  authentication: s.optional(s.string()),
  authenticationId: s.optional(s.string()),
  failures: s.optional(s.number()),
  maxFailures: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  invoices: s.optional(s.array(s.lazy(() => invoicesResponseSchema))),
  subscriptionTokens: s.optional(s.array(s.lazy(() => subscriptionTokensResponseSchema))),
});
