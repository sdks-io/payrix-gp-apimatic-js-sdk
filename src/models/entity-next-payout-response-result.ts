import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityNextPayoutResponseItemSchema,
  type EntityNextPayoutResponseItem,
} from "./entity-next-payout-response-item.js";

export type EntityNextPayoutResponseResult = {
  response?: EntityNextPayoutResponseItem;
};

export const entityNextPayoutResponseResultSchema: Schema<EntityNextPayoutResponseResult> =
  s.object<EntityNextPayoutResponseResult>({
    response: s.optional(s.lazy(() => entityNextPayoutResponseItemSchema)),
  });
