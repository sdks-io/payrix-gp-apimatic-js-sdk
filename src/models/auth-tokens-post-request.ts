import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type AuthTokensPostRequest = {
  /** The Login that owns this resource. */
  login: string;
  /** The customer identifier from the AuthToken used during authentication. */
  customer: string;
  /** The auto-generated token identifier. */
  token: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const authTokensPostRequestSchema: Schema<AuthTokensPostRequest> = s.object<AuthTokensPostRequest>({
  login: s.string(),
  customer: s.string(),
  token: s.string(),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
