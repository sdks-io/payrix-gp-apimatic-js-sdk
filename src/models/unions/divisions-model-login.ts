import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The login ID of the user that owns this division record. */
export type DivisionsModelLogin = string | LoginsResponse;

export const divisionsModelLoginSchema: Schema<DivisionsModelLogin> = s.of<DivisionsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
