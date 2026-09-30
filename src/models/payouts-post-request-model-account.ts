import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountPrimary1Schema, type AccountPrimary1 } from "./account-primary1.js";
import { accountStatus1Schema, type AccountStatus1 } from "./account-status1.js";
import { accountType1Schema, type AccountType1 } from "./account-type1.js";
import { account4Schema, type Account4 } from "./account4.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { payoutPostRequestSchema, type PayoutPostRequest } from "./payout-post-request.js";

export type PayoutsPostRequestModelAccount = {
  /** The identifier of the Entity associated with this Account. */
  entity: string;
  account: Account4;
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
  /**
   * The expiration date of the related debit account. The date is specified as a four-digit string
   * in MMYY format, for example, `0118` for January 2018.
   */
  expiration?: string;
  currency: Record<string, unknown>;
  /** The token received from the Plaid account connection process. */
  publicToken?: string;
  /** The account number mask, showing the last four digits of the account number. */
  mask?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
  payouts?: PayoutPostRequest[];
};

export const payoutsPostRequestModelAccountSchema: Schema<PayoutsPostRequestModelAccount> =
  s.object<PayoutsPostRequestModelAccount>({
    entity: s.string(),
    account: account4Schema,
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    primary: s.optional(s.lazy(() => accountPrimary1Schema)),
    type: s.optional(s.lazy(() => accountType1Schema)),
    status: s.optional(s.lazy(() => accountStatus1Schema)),
    expiration: s.optional(s.string()),
    currency: s.record(s.string(), s.unknown()),
    publicToken: s.optional(s.string()),
    mask: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
    payouts: s.optional(s.array(s.lazy(() => payoutPostRequestSchema))),
  });
