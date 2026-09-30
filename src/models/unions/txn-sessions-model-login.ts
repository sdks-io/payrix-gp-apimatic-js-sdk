import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/**
 * The login under which to perform this action. If you do not supply a login in this field, then
 * the API defaults to the login that is currently authenticated.
 */
export type TxnSessionsModelLogin = string | LoginsResponse;

export const txnSessionsModelLoginSchema: Schema<TxnSessionsModelLogin> = s.of<TxnSessionsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
