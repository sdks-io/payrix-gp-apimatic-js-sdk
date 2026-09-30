import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login associated with this ChangeRequest. */
export type ChangeRequestModelLogin = string | LoginsResponse;

export const changeRequestModelLoginSchema: Schema<ChangeRequestModelLogin> = s.of<ChangeRequestModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
