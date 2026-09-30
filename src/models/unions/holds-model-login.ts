import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this holds resource. */
export type HoldsModelLogin = string | LoginsResponse;

export const holdsModelLoginSchema: Schema<HoldsModelLogin> = s.of<HoldsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
