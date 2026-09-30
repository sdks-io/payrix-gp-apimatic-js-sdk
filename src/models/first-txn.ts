import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "./accounts-response.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { merchant5Schema, type Merchant5 } from "./merchant5.js";
import { paymentSchema, type Payment } from "./payment.js";

export type FirstTxn = {
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
  /** The incoming ip address from which this Transaction was created. */
  ipCreated?: string;
  /** The incoming ip address from which this Transaction was last modified. */
  ipModified?: string;
  merchant?: Merchant5;
  token?: AccountsResponse;
  payment?: Payment;
};

export const firstTxnSchema: Schema<FirstTxn> = s.object<FirstTxn>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  ipCreated: s.optional(s.string()),
  ipModified: s.optional(s.string()),
  merchant: s.optional(s.lazy(() => merchant5Schema)),
  token: s.optional(s.lazy(() => accountsResponseSchema)),
  payment: s.optional(s.lazy(() => paymentSchema)),
});
