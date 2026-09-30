import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  chargebackMessageResponseSchema,
  type ChargebackMessageResponse,
} from "../chargeback-message-response.js";

/** ID of the chargeback message associated with this chargeback. */
export type ChargebackStatusesModelChargebackMessage = string | ChargebackMessageResponse;

export const chargebackStatusesModelChargebackMessageSchema: Schema<ChargebackStatusesModelChargebackMessage> =
  s.of<ChargebackStatusesModelChargebackMessage>(
    s.union([s.string(), s.lazy(() => chargebackMessageResponseSchema)]),
  );
