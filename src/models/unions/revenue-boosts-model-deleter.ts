import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The id of user who deleted the revenueBoost entity. */
export type RevenueBoostsModelDeleter = string | LoginsResponse | null;

export const revenueBoostsModelDeleterSchema: Schema<RevenueBoostsModelDeleter> =
  s.of<RevenueBoostsModelDeleter>(s.nullable(s.union([s.string(), s.lazy(() => loginsResponseSchema)])));
