import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The ID of the Login that owns this resource. */
export type CustomersModelLogin = string | LoginsResponse;

export const customersModelLoginSchema: Schema<CustomersModelLogin> = s.of<CustomersModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
