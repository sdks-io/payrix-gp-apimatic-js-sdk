import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action46Schema, type Action46 } from "./action46.js";
import { statusPayersStatusSchema, type StatusPayersStatus } from "./status-payers-status.js";

export type PayersResponse = {
  /** Unique identifier for the Payer on the platform. */
  id?: string;
  /**
   * The overall status of the payer.
   * * `DELETED` - The status is DELETED. Once returned in an action response for a resource. The
   *   resource has been removed from the platform.
   */
  status?: StatusPayersStatus;
  action?: Action46;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payersResponseProperties: s.Shape<PayersResponse> = {
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusPayersStatusSchema)),
  action: s.optional(s.lazy(() => action46Schema)),
};

export const payersResponseInternalSchema: Schema<PayersResponse> = s.object<PayersResponse>(
  payersResponseProperties,
  { additionalProperties: s.json() },
);

export const payersResponseSchema: Schema<PayersResponse> = s.lazySchema(() =>
  s.object<PayersResponse>(
    {
      ...payersResponseProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
