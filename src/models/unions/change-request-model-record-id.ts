import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "../accounts-response.js";

/** The id of the model, only set when operation is update. */
export type ChangeRequestModelRecordId = string | AccountsResponse;

export const changeRequestModelRecordIdSchema: Schema<ChangeRequestModelRecordId> =
  s.of<ChangeRequestModelRecordId>(s.union([s.string(), s.lazy(() => accountsResponseSchema)]));
