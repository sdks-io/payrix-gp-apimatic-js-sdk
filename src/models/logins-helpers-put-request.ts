import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loginHelpersLoginAsEnabled1Schema,
  type LoginHelpersLoginAsEnabled1,
} from "./login-helpers-login-as-enabled1.js";

export type LoginsHelpersPutRequest = {
  loginAsEnabled?: LoginHelpersLoginAsEnabled1;
};

export const loginsHelpersPutRequestSchema: Schema<LoginsHelpersPutRequest> =
  s.object<LoginsHelpersPutRequest>({
    loginAsEnabled: s.optional(s.lazy(() => loginHelpersLoginAsEnabled1Schema)),
  });
