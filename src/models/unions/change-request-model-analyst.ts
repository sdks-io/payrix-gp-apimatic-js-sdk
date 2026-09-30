import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The person who review the request. */
export type ChangeRequestModelAnalyst = string | LoginsResponse;

export const changeRequestModelAnalystSchema: Schema<ChangeRequestModelAnalyst> =
  s.of<ChangeRequestModelAnalyst>(s.union([s.string(), s.lazy(() => loginsResponseSchema)]));
