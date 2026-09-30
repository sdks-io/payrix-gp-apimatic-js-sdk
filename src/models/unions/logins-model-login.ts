import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login. */
export type LoginsModelLogin = string | LoginsResponse;

export const loginsModelLoginSchema: Schema<LoginsModelLogin> = s.of<LoginsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
