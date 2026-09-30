import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackMessageResponseSchema,
  type ChargebackMessageResponse,
} from "./chargeback-message-response.js";
import {
  chargebackStatusesStatus1Schema,
  type ChargebackStatusesStatus1,
} from "./chargeback-statuses-status1.js";
import { chargebackSchema, type Chargeback } from "./chargeback.js";
import { creator18Schema, type Creator18 } from "./creator18.js";

export type ChargebackStatusesResponse = {
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
  chargeback?: Chargeback;
  chargebackMessage?: ChargebackMessageResponse;
  status?: ChargebackStatusesStatus1;
};

export const chargebackStatusesResponseSchema: Schema<ChargebackStatusesResponse> =
  s.object<ChargebackStatusesResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    chargeback: s.optional(s.lazy(() => chargebackSchema)),
    chargebackMessage: s.optional(s.lazy(() => chargebackMessageResponseSchema)),
    status: s.optional(s.lazy(() => chargebackStatusesStatus1Schema)),
  });
