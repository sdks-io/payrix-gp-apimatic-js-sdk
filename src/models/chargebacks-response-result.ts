import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargebacksResponseItemSchema, type ChargebacksResponseItem } from "./chargebacks-response-item.js";

export type ChargebacksResponseResult = {
  response?: ChargebacksResponseItem;
};

export const chargebacksResponseResultSchema: Schema<ChargebacksResponseResult> =
  s.object<ChargebacksResponseResult>({
    response: s.optional(s.lazy(() => chargebacksResponseItemSchema)),
  });
