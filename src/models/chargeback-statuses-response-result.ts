import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackStatusesResponseItemSchema,
  type ChargebackStatusesResponseItem,
} from "./chargeback-statuses-response-item.js";

export type ChargebackStatusesResponseResult = {
  response?: ChargebackStatusesResponseItem;
};

export const chargebackStatusesResponseResultSchema: Schema<ChargebackStatusesResponseResult> =
  s.object<ChargebackStatusesResponseResult>({
    response: s.optional(s.lazy(() => chargebackStatusesResponseItemSchema)),
  });
