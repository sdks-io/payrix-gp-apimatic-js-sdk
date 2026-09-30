import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The Login that owns this resource. */
export type PayoutsModelLogin = string | LoginsResponse;

export const payoutsModelLoginSchema: Schema<PayoutsModelLogin> = s.of<PayoutsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
