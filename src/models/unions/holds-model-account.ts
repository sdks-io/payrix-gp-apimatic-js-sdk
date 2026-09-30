import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "../accounts-response.js";

/** The identifier of the Account that owns this holds resource. */
export type HoldsModelAccount = string | AccountsResponse;

export const holdsModelAccountSchema: Schema<HoldsModelAccount> = s.of<HoldsModelAccount>(
  s.union([s.string(), s.lazy(() => accountsResponseSchema)]),
);
