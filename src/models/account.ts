import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountCheckStage1Schema, type AccountCheckStage1 } from "./account-check-stage1.js";
import { accountPaymentSchema, type AccountPayment } from "./account-payment.js";
import { accountPrimary1Schema, type AccountPrimary1 } from "./account-primary1.js";
import { accountStatus1Schema, type AccountStatus1 } from "./account-status1.js";
import { accountType1Schema, type AccountType1 } from "./account-type1.js";
import { accountsReserved1Schema, type AccountsReserved1 } from "./accounts-reserved1.js";
import { accountsUpdateMethod1Schema, type AccountsUpdateMethod1 } from "./accounts-update-method1.js";
import { changeRequestSchema, type ChangeRequest } from "./change-request.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entity1Schema, type Entity1 } from "./entity1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { paymentUpdatesResponseSchema, type PaymentUpdatesResponse } from "./payment-updates-response.js";
import { payoutsResponseSchema, type PayoutsResponse } from "./payouts-response.js";

export type Account = {
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
  entity?: Entity1;
  account?: AccountPayment;
  /** A unique token that can be used to refer to this Account in other parts of the API. */
  token?: string;
  /**
   * A client-supplied name for this bank account. This field is stored as a string and must be
   * between 0 and 100 characters long.
   */
  name?: string;
  /**
   * A client-supplied description for this bank account. This field is stored as a string and must
   * be between 0 and 100 characters long.
   */
  description?: string;
  primary?: AccountPrimary1;
  type?: AccountType1;
  status?: AccountStatus1;
  reserved?: AccountsReserved1;
  checkStage?: AccountCheckStage1;
  /**
   * The expiration date of the related debit account. The date is specified as a four-digit string
   * in MMYY format, for example, `0118` for January 2018.
   */
  expiration?: string;
  currency?: Record<string, unknown>;
  /** The token received from the Plaid account connection process. */
  publicToken?: string;
  /** The account number mask, showing the last four digits of the account number. */
  mask?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
  /** The account identifier that is returned by the Plaid flow. */
  plaidAccountId?: string;
  updateMethod?: AccountsUpdateMethod1;
  changeRequests?: ChangeRequest[];
  paymentUpdates?: PaymentUpdatesResponse[];
  payouts?: PayoutsResponse[];
};

export const accountSchema: Schema<Account> = s.object<Account>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity1Schema)),
  account: s.optional(s.lazy(() => accountPaymentSchema)),
  token: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  primary: s.optional(s.lazy(() => accountPrimary1Schema)),
  type: s.optional(s.lazy(() => accountType1Schema)),
  status: s.optional(s.lazy(() => accountStatus1Schema)),
  reserved: s.optional(s.lazy(() => accountsReserved1Schema)),
  checkStage: s.optional(s.lazy(() => accountCheckStage1Schema)),
  expiration: s.optional(s.string()),
  currency: s.optional(s.record(s.string(), s.unknown())),
  publicToken: s.optional(s.string()),
  mask: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  plaidAccountId: s.optional(s.string()),
  updateMethod: s.optional(s.lazy(() => accountsUpdateMethod1Schema)),
  changeRequests: s.optional(s.array(s.lazy(() => changeRequestSchema))),
  paymentUpdates: s.optional(s.array(s.lazy(() => paymentUpdatesResponseSchema))),
  payouts: s.optional(s.array(s.lazy(() => payoutsResponseSchema))),
});
