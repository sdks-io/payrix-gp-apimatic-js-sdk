import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The person who review the hold applied. */
export type HoldsModelAnalyst = string | LoginsResponse;

export const holdsModelAnalystSchema: Schema<HoldsModelAnalyst> = s.of<HoldsModelAnalyst>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
