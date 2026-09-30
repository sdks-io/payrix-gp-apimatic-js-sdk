import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that created this resource. */
export type Creator144 = string | LoginsResponse;

export const creator144Schema: Schema<Creator144> = s.of<Creator144>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
