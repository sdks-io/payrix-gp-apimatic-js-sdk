import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type AuthTokensPutRequest = {
  /** Timestamp of when the AuthToken was used. */
  used?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const authTokensPutRequestSchema: Schema<AuthTokensPutRequest> = s.object<AuthTokensPutRequest>({
  used: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
