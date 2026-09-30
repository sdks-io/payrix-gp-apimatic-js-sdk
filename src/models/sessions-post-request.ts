import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  sessionMfaAuthenticated1Schema,
  type SessionMfaAuthenticated1,
} from "./session-mfa-authenticated1.js";
import { sessionPublic1Schema, type SessionPublic1 } from "./session-public1.js";
import { sessionToken1Schema, type SessionToken1 } from "./session-token1.js";

export type SessionsPostRequest = {
  /** The Login that owns this resource. */
  login?: string;
  public?: SessionPublic1;
  token?: SessionToken1;
  mfaAuthenticated?: SessionMfaAuthenticated1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const sessionsPostRequestSchema: Schema<SessionsPostRequest> = s.object<SessionsPostRequest>({
  login: s.optional(s.string()),
  public: s.optional(s.lazy(() => sessionPublic1Schema)),
  token: s.optional(s.lazy(() => sessionToken1Schema)),
  mfaAuthenticated: s.optional(s.lazy(() => sessionMfaAuthenticated1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
