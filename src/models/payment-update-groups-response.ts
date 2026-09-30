import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entity2Schema, type Entity2 } from "./entity2.js";
import {
  paymentExpirationUpdated2Schema,
  type PaymentExpirationUpdated2,
} from "./payment-expiration-updated2.js";
import {
  paymentNumberUpdatedModel2Schema,
  type PaymentNumberUpdatedModel2,
} from "./payment-number-updated-model2.js";

export type PaymentUpdateGroupsResponse = {
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
  entity?: Entity2;
  /** Whether payment is processing. */
  processing?: number;
  /** Whether payment is processed. */
  processed?: number;
  numberUpdated?: PaymentNumberUpdatedModel2;
  expirationUpdated?: PaymentExpirationUpdated2;
};

export const paymentUpdateGroupsResponseSchema: Schema<PaymentUpdateGroupsResponse> =
  s.object<PaymentUpdateGroupsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entity2Schema)),
    processing: s.optional(s.number()),
    processed: s.optional(s.number()),
    numberUpdated: s.optional(s.lazy(() => paymentNumberUpdatedModel2Schema)),
    expirationUpdated: s.optional(s.lazy(() => paymentExpirationUpdated2Schema)),
  });
