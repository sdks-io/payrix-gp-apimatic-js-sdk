import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountMethod2Schema, type AccountMethod2 } from "./account-method2.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type AccountPayment = {
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
  method?: AccountMethod2;
  /**
   * For credit payment method, the card number of the credit card associated with this Transaction.
   * For eCheck payment method, the bank account number associated with this Transaction.
   */
  number?: string;
  last4?: string;
  /** The routing code for the eCheck or bank account payment associated with this Transaction. */
  routing?: string;
  bin?: string;
  payment?: string;
  /** Times timestamp with last time payment was checked. */
  lastChecked?: number | null;
  mask?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const accountPaymentSchema: Schema<AccountPayment> = s.object<AccountPayment>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  method: s.optional(s.lazy(() => accountMethod2Schema)),
  number: s.optional(s.string()),
  last4: s.optional(s.string()),
  routing: s.optional(s.string()),
  bin: s.optional(s.string()),
  payment: s.optional(s.string()),
  lastChecked: s.optionalNullable(s.number()),
  mask: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
