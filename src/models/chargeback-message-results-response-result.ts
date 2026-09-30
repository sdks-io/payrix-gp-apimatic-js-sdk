import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackMessageResultsResponseItemSchema,
  type ChargebackMessageResultsResponseItem,
} from "./chargeback-message-results-response-item.js";

export type ChargebackMessageResultsResponseResult = {
  response?: ChargebackMessageResultsResponseItem;
};

export const chargebackMessageResultsResponseResultSchema: Schema<ChargebackMessageResultsResponseResult> =
  s.object<ChargebackMessageResultsResponseResult>({
    response: s.optional(s.lazy(() => chargebackMessageResultsResponseItemSchema)),
  });
