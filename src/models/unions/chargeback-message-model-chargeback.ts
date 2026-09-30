import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chargebacksResponseSchema, type ChargebacksResponse } from "../chargebacks-response.js";

/** The identifier of the Chargeback resource that this chargebackMessage relates to. */
export type ChargebackMessageModelChargeback = string | ChargebacksResponse;

export const chargebackMessageModelChargebackSchema: Schema<ChargebackMessageModelChargeback> =
  s.of<ChargebackMessageModelChargeback>(s.union([s.string(), s.lazy(() => chargebacksResponseSchema)]));
