import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chargebacksResponseSchema, type ChargebacksResponse } from "../chargebacks-response.js";

/** ID of the related chargeback. */
export type ChargebackStatusesModelChargeback = string | ChargebacksResponse;

export const chargebackStatusesModelChargebackSchema: Schema<ChargebackStatusesModelChargeback> =
  s.of<ChargebackStatusesModelChargeback>(s.union([s.string(), s.lazy(() => chargebacksResponseSchema)]));
