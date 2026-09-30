import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chargebacksResponseSchema, type ChargebacksResponse } from "../chargebacks-response.js";

/** The identifier of the Chargeback resource that this chargebackDocument relates to. */
export type ChargebackDocumentsModelChargeback = string | ChargebacksResponse;

export const chargebackDocumentsModelChargebackSchema: Schema<ChargebackDocumentsModelChargeback> =
  s.of<ChargebackDocumentsModelChargeback>(s.union([s.string(), s.lazy(() => chargebacksResponseSchema)]));
