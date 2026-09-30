import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the User who deleted the omniToken. */
export type OmniTokensModelDeleter = string | LoginsResponse;

export const omniTokensModelDeleterSchema: Schema<OmniTokensModelDeleter> = s.of<OmniTokensModelDeleter>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
