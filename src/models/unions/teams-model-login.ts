import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The Login that owns this Team. */
export type TeamsModelLogin = string | LoginsResponse;

export const teamsModelLoginSchema: Schema<TeamsModelLogin> = s.of<TeamsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
