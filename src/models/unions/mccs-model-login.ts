import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this Mccs resource. */
export type MccsModelLogin = string | LoginsResponse;

export const mccsModelLoginSchema: Schema<MccsModelLogin> = s.of<MccsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
