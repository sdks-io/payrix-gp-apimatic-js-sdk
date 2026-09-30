import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  revShareStatmentsResponseSchema,
  type RevShareStatmentsResponse,
} from "../rev-share-statments-response.js";

/**
 * If the activity that this PendingEntry refers to is a Revenue Share, then this field stores the
 * identifier of the corresponding RevShareStatement resource
 */
export type PendingEntriesModelRevShareStatement = string | RevShareStatmentsResponse;

export const pendingEntriesModelRevShareStatementSchema: Schema<PendingEntriesModelRevShareStatement> =
  s.of<PendingEntriesModelRevShareStatement>(
    s.union([s.string(), s.lazy(() => revShareStatmentsResponseSchema)]),
  );
