import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The Login that owns this Org. */
export type OrgsModelLogin = string | LoginsResponse;

export const orgsModelLoginSchema: Schema<OrgsModelLogin> = s.of<OrgsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
