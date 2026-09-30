import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The id of user who deleted the omniToken. */
export type SaferPaymentsModelDeleter = string | LoginsResponse;

export const saferPaymentsModelDeleterSchema: Schema<SaferPaymentsModelDeleter> =
  s.of<SaferPaymentsModelDeleter>(s.union([s.string(), s.lazy(() => loginsResponseSchema)]));
