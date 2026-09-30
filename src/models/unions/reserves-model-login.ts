import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this Reserve. */
export type ReservesModelLogin = string | LoginsResponse;

export const reservesModelLoginSchema: Schema<ReservesModelLogin> = s.of<ReservesModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
