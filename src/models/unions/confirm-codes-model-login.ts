import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login associated with this confirmation code. */
export type ConfirmCodesModelLogin = string | LoginsResponse;

export const confirmCodesModelLoginSchema: Schema<ConfirmCodesModelLogin> = s.of<ConfirmCodesModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
