import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this secret resource. */
export type SecretsModelLogin = string | LoginsResponse;

export const secretsModelLoginSchema: Schema<SecretsModelLogin> = s.of<SecretsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
