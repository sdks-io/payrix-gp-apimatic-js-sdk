import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chargebacksResponseSchema, type ChargebacksResponse } from "../chargebacks-response.js";

/** The identifier of the Chargeback that this assessment resource refers to. */
export type AssessmentsModelChargeback = string | ChargebacksResponse;

export const assessmentsModelChargebackSchema: Schema<AssessmentsModelChargeback> =
  s.of<AssessmentsModelChargeback>(s.union([s.string(), s.lazy(() => chargebacksResponseSchema)]));
