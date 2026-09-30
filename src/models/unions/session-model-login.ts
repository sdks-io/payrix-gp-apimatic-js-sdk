import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The Login that owns this resource. */
export type SessionModelLogin = string | LoginsResponse;

export const sessionModelLoginSchema: Schema<SessionModelLogin> = s.of<SessionModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
