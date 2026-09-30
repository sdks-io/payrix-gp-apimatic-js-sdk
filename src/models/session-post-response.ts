import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  sessionMfaAuthenticated1Schema,
  type SessionMfaAuthenticated1,
} from "./session-mfa-authenticated1.js";
import { sessionPublic1Schema, type SessionPublic1 } from "./session-public1.js";
import { sessionSso2Schema, type SessionSso2 } from "./session-sso2.js";
import { sessionToken1Schema, type SessionToken1 } from "./session-token1.js";

export type SessionPostResponse = {
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
  /** The Login that owns this resource. */
  login?: string;
  /** The cryptographically secure, randomly generated key to be used in authentication. */
  key?: string;
  public?: SessionPublic1;
  sso?: SessionSso2;
  token?: SessionToken1;
  mfaAuthenticated?: SessionMfaAuthenticated1;
  /** Effective roles for this login. */
  effectiveRoles?: number;
  /** Array of all resources the login has access to with corresponding actions. */
  effectiveResources?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const sessionPostResponseSchema: Schema<SessionPostResponse> = s.object<SessionPostResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.string()),
  key: s.optional(s.string()),
  public: s.optional(s.lazy(() => sessionPublic1Schema)),
  sso: s.optional(s.lazy(() => sessionSso2Schema)),
  token: s.optional(s.lazy(() => sessionToken1Schema)),
  mfaAuthenticated: s.optional(s.lazy(() => sessionMfaAuthenticated1Schema)),
  effectiveRoles: s.optional(s.number()),
  effectiveResources: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
