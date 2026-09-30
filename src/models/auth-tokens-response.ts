import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";

export type AuthTokensResponse = {
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
  login?: Login2;
  /** The auto-generated token identifier. */
  token?: string;
  /** The customer identifier from the AuthToken used during authentication. */
  customer?: string;
  /** Timestamp of when the AuthToken was used. */
  used?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const authTokensResponseSchema: Schema<AuthTokensResponse> = s.object<AuthTokensResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  token: s.optional(s.string()),
  customer: s.optional(s.string()),
  used: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
