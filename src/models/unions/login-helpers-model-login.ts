import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The Login that owns this resource. */
export type LoginHelpersModelLogin = string | LoginsResponse;

export const loginHelpersModelLoginSchema: Schema<LoginHelpersModelLogin> = s.of<LoginHelpersModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
