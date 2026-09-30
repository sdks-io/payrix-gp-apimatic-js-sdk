import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The Login that owns this EntityRoute. */
export type EntityRoutesModelLogin = string | LoginsResponse;

export const entityRoutesModelLoginSchema: Schema<EntityRoutesModelLogin> = s.of<EntityRoutesModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
