import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login of this invoice resource. */
export type InvoicesModelLogin = string | LoginsResponse;

export const invoicesModelLoginSchema: Schema<InvoicesModelLogin> = s.of<InvoicesModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
