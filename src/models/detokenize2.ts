import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action48Schema, type Action48 } from "./action48.js";
import { card28InternalSchema, card28Schema, type Card28 } from "./card28.js";
import {
  statusPaymentMethodsStatusSchema,
  type StatusPaymentMethodsStatus,
} from "./status-payment-methods-status.js";
import {
  UsageModePaymentMethodsUsageMode,
  usageModePaymentMethodsUsageModeSchema,
} from "./usage-mode-payment-methods-usage-mode.js";

export type Detokenize2 = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /** Global Payments time indicating when the object was created in ISO-8601 format */
  timeCreated?: Date;
  /**
   * The overall status of the payment method.
   * * `ACTIVE` - The entity is ACTIVE and can be used.
   * * `INACTIVE` - The entity is INACTIVE and cannot be used."
   * * `DELETED` - The status is DELETED. Once returned in an action response for a resource. The
   *   resource has been removed from the platform.
   */
  status?: StatusPaymentMethodsStatus;
  /** Merchant defined field to uniquely reference the stored payment method. */
  reference?: string;
  /**
   * Indicates the behaviour of the payment method token.
   * * `SINGLE` - This value must be used if using the Hosted Fields or the Drop-in UI integration
   *   types. When creating the payment method token, this option ensures the payment method token
   *   is temporary and will be removed once a transaction is executed or after a short period of
   *   time.
   * * `MULTIPLE` - When creating the payment method token, this indicates it is permanent and can
   *   be used to create many transactions.
   * * `USE_CARD_NUMBER` - When using the payment method token to transaction process, this
   *   indicates to use the card number also known as the PAN or FPAN when bothe the card number and
   *   the network token are available.
   * * `USE_NETWORK_TOKEN` - When using the payment method token to transaction process, this
   *   indicates to use the network token instead of the card number if both are available.
   *
   * @default UsageModePaymentMethodsUsageMode.Multiple
   */
  usageMode?: UsageModePaymentMethodsUsageMode;
  /** The name of the owner of the payment method. For example the cardholder's name. */
  name?: string;
  card?: Card28;
  action?: Action48;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const detokenize2Properties: s.Shape<Detokenize2> = {
  id: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => statusPaymentMethodsStatusSchema)),
  reference: s.optional(s.string()),
  usageMode: s.defaulted(usageModePaymentMethodsUsageModeSchema, UsageModePaymentMethodsUsageMode.Multiple),
  name: s.optional(s.string()),
  card: s.optional(s.lazy(() => card28InternalSchema)),
  action: s.optional(s.lazy(() => action48Schema)),
  _keysMap: {
    timeCreated: "time_created",
    usageMode: "usage_mode",
  },
};

export const detokenize2InternalSchema: Schema<Detokenize2> = s.object<Detokenize2>(detokenize2Properties, {
  additionalProperties: s.json(),
});

export const detokenize2Schema: Schema<Detokenize2> = s.lazySchema(() =>
  s.object<Detokenize2>(
    {
      ...detokenize2Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
      name: s.optional(s.string().check(s.maxLength(100))),
      card: s.optional(s.lazy(() => card28Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
