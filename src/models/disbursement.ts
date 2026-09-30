import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entity8Schema, type Entity8 } from "./entity8.js";

export type Disbursement = {
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
  entity?: Entity8;
  account?: Account;
  /**
   * A reference to the actual account or card data used for this disbursement. If someone changes
   * the details in their bank account within Payrix Pro, the account token will point to a new
   * account but the payment will always point to the data used for this disbursement.
   */
  payment?: string;
};

export const disbursementSchema: Schema<Disbursement> = s.object<Disbursement>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity8Schema)),
  account: s.optional(s.lazy(() => accountSchema)),
  payment: s.optional(s.string()),
});
