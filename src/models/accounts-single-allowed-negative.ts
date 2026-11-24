import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { notificationsInternalSchema, notificationsSchema, type Notifications } from "./notifications.js";
import { processingLimits1Schema, type ProcessingLimits1 } from "./processing-limits1.js";

export type AccountsSingleAllowedNegative = {
  processingLimits?: ProcessingLimits1;
  notifications?: Notifications;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountsSingleAllowedNegativeProperties: s.Shape<AccountsSingleAllowedNegative> = {
  processingLimits: s.optional(s.lazy(() => processingLimits1Schema)),
  notifications: s.optional(s.lazy(() => notificationsInternalSchema)),
  _keysMap: {
    processingLimits: "processing_limits",
  },
};

export const accountsSingleAllowedNegativeInternalSchema: Schema<AccountsSingleAllowedNegative> =
  s.object<AccountsSingleAllowedNegative>(accountsSingleAllowedNegativeProperties, {
    additionalProperties: s.json(),
  });

export const accountsSingleAllowedNegativeSchema: Schema<AccountsSingleAllowedNegative> = s.lazySchema(() =>
  s.object<AccountsSingleAllowedNegative>(
    {
      ...accountsSingleAllowedNegativeProperties,
      notifications: s.optional(s.lazy(() => notificationsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
