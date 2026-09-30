import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountUpdaterEligible1Schema, type AccountUpdaterEligible1 } from "./account-updater-eligible1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { payment6Schema, type Payment6 } from "./payment6.js";
import { tokenStatus1Schema, type TokenStatus1 } from "./token-status1.js";

export type TokenPutRequest = {
  /** The Customer that this Token is associated with. */
  customer?: string;
  payment?: Payment6;
  status?: TokenStatus1;
  /** The auto-generated token identifier. */
  token?: string;
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
  /** The customer reference from the authToken used for user authentication. */
  authTokenCustomer?: string;
  /** The origin of the token. */
  origin?: number;
  /** Entry mode set to the token. */
  entryMode?: number;
  accountUpdaterEligible?: AccountUpdaterEligible1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const tokenPutRequestSchema: Schema<TokenPutRequest> = s.object<TokenPutRequest>({
  customer: s.optional(s.string()),
  payment: s.optional(s.lazy(() => payment6Schema)),
  status: s.optional(s.lazy(() => tokenStatus1Schema)),
  token: s.optional(s.string()),
  expiration: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  custom: s.optional(s.string()),
  authTokenCustomer: s.optional(s.string()),
  origin: s.optional(s.number()),
  entryMode: s.optional(s.number()),
  accountUpdaterEligible: s.optional(s.lazy(() => accountUpdaterEligible1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
