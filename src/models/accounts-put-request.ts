import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountPrimary1Schema, type AccountPrimary1 } from "./account-primary1.js";
import { accountStatus1Schema, type AccountStatus1 } from "./account-status1.js";
import { accountType1Schema, type AccountType1 } from "./account-type1.js";
import { account4Schema, type Account4 } from "./account4.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type AccountsPutRequest = {
  account?: Account4;
  /**
   * A client-supplied name for this bank account. This field is stored as a text string and must be
   * between 0 and 100 characters long.
   */
  name?: string;
  /**
   * A client-supplied description for this bank account. This field is stored as a text string and
   * must be between 0 and 100 characters long.
   */
  description?: string;
  primary?: AccountPrimary1;
  type?: AccountType1;
  status?: AccountStatus1;
  /**
   * The expiration date of the related debit account in MMYY format, for example, `0118` for
   * January 2018 or `0225` for February 2025.
   */
  expiration?: string;
  /** The account number mask, showing the last four digits of the account number. */
  mask?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const accountsPutRequestSchema: Schema<AccountsPutRequest> = s.object<AccountsPutRequest>({
  account: s.optional(s.lazy(() => account4Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  primary: s.optional(s.lazy(() => accountPrimary1Schema)),
  type: s.optional(s.lazy(() => accountType1Schema)),
  status: s.optional(s.lazy(() => accountStatus1Schema)),
  expiration: s.optional(s.string()),
  mask: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
