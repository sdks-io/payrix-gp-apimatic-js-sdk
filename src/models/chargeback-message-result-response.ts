import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackMessageResponseSchema,
  type ChargebackMessageResponse,
} from "./chargeback-message-response.js";
import {
  chargebackMessageResultType2Schema,
  type ChargebackMessageResultType2,
} from "./chargeback-message-result-type2.js";
import { creator18Schema, type Creator18 } from "./creator18.js";

export type ChargebackMessageResultResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  chargebackMessage?: ChargebackMessageResponse;
  type?: ChargebackMessageResultType2;
  /** The Chargeback message itself. */
  message?: string;
};

export const chargebackMessageResultResponseSchema: Schema<ChargebackMessageResultResponse> =
  s.object<ChargebackMessageResultResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    chargebackMessage: s.optional(s.lazy(() => chargebackMessageResponseSchema)),
    type: s.optional(s.lazy(() => chargebackMessageResultType2Schema)),
    message: s.optional(s.string()),
  });
