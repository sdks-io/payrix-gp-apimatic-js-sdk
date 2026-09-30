import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this configuration resource. */
export type ConfigurationsModelLogin = string | LoginsResponse;

export const configurationsModelLoginSchema: Schema<ConfigurationsModelLogin> =
  s.of<ConfigurationsModelLogin>(s.union([s.string(), s.lazy(() => loginsResponseSchema)]));
