import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsPostRequestSchema, type DivisionsPostRequest } from "../divisions-post-request.js";

/**
 * The division that this Login belongs to. The division association opens access to division-level
 * administrators on this user and all records owned by this user. Defaults to authenticated user’s
 * division if no value is explicitly set.
 */
export type LoginsPostRequestModelDivision = string | DivisionsPostRequest;

export const loginsPostRequestModelDivisionSchema: Schema<LoginsPostRequestModelDivision> =
  s.of<LoginsPostRequestModelDivision>(s.union([s.string(), s.lazy(() => divisionsPostRequestSchema)]));
