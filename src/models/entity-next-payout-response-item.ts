import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityNextPayoutResponseSchema,
  type EntityNextPayoutResponse,
} from "./entity-next-payout-response.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type EntityNextPayoutResponseItem = {
  /**
   * The data object that the API returns for this request. This object is omitted when the Entity
   * has no upcoming Payout.
   */
  data?: EntityNextPayoutResponse[];
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const entityNextPayoutResponseItemSchema: Schema<EntityNextPayoutResponseItem> =
  s.object<EntityNextPayoutResponseItem>({
    data: s.optional(s.array(s.lazy(() => entityNextPayoutResponseSchema))),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });
