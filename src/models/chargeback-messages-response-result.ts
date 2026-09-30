import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackMessagesResponseItemSchema,
  type ChargebackMessagesResponseItem,
} from "./chargeback-messages-response-item.js";

export type ChargebackMessagesResponseResult = {
  response?: ChargebackMessagesResponseItem;
};

export const chargebackMessagesResponseResultSchema: Schema<ChargebackMessagesResponseResult> =
  s.object<ChargebackMessagesResponseResult>({
    response: s.optional(s.lazy(() => chargebackMessagesResponseItemSchema)),
  });
