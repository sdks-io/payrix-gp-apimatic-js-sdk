import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The ID of the Login that owns this resource. */
export type EntitiesModelLogin = string | LoginsResponse;

export const entitiesModelLoginSchema: Schema<EntitiesModelLogin> = s.of<EntitiesModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
