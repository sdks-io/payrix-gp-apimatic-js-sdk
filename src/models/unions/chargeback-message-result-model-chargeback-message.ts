import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  chargebackMessageResponseSchema,
  type ChargebackMessageResponse,
} from "../chargeback-message-response.js";

/**
 * The identifier of the chargebackMessage resource that this chargebackMessageResult relates to.
 */
export type ChargebackMessageResultModelChargebackMessage = string | ChargebackMessageResponse;

export const chargebackMessageResultModelChargebackMessageSchema: Schema<ChargebackMessageResultModelChargebackMessage> =
  s.of<ChargebackMessageResultModelChargebackMessage>(
    s.union([s.string(), s.lazy(() => chargebackMessageResponseSchema)]),
  );
