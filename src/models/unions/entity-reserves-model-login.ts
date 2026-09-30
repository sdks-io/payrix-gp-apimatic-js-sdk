import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The Login that owns this resource. */
export type EntityReservesModelLogin = string | LoginsResponse;

export const entityReservesModelLoginSchema: Schema<EntityReservesModelLogin> =
  s.of<EntityReservesModelLogin>(s.union([s.string(), s.lazy(() => loginsResponseSchema)]));
