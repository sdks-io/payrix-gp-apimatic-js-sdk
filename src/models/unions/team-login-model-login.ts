import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The Login that owns this resource. */
export type TeamLoginModelLogin = string | LoginsResponse;

export const teamLoginModelLoginSchema: Schema<TeamLoginModelLogin> = s.of<TeamLoginModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
