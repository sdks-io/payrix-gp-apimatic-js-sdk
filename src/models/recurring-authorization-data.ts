import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecurringAuthorizationData = {
  /** Indicates the maximum number of authorizations permitted for instalment payments. */
  maxNumberOfInstalments?: string;
  /** The minimum number of days between recurring authorizations. */
  frequency?: string;
  /** Date after which no further recurring authorizations shall be performed. */
  expiryDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recurringAuthorizationDataProperties: s.Shape<RecurringAuthorizationData> = {
  maxNumberOfInstalments: s.optional(s.string()),
  frequency: s.optional(s.string()),
  expiryDate: s.optional(s.string()),
  _keysMap: {
    maxNumberOfInstalments: "max_number_of_instalments",
    expiryDate: "expiry_date",
  },
};

export const recurringAuthorizationDataInternalSchema: Schema<RecurringAuthorizationData> =
  s.object<RecurringAuthorizationData>(recurringAuthorizationDataProperties, {
    additionalProperties: s.json(),
  });

export const recurringAuthorizationDataSchema: Schema<RecurringAuthorizationData> = s.lazySchema(() =>
  s.object<RecurringAuthorizationData>(
    {
      ...recurringAuthorizationDataProperties,
      frequency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
