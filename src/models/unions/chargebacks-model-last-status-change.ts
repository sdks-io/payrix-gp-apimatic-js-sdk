import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  chargebackStatusesResponseSchema,
  type ChargebackStatusesResponse,
} from "../chargeback-statuses-response.js";

/** The ChargebackStatus representing the latest status change for this Chargeback. */
export type ChargebacksModelLastStatusChange = string | ChargebackStatusesResponse;

export const chargebacksModelLastStatusChangeSchema: Schema<ChargebacksModelLastStatusChange> =
  s.of<ChargebacksModelLastStatusChange>(
    s.union([s.string(), s.lazy(() => chargebackStatusesResponseSchema)]),
  );
