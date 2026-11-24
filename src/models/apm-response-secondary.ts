import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  apmResponseSecondaryFieldsInternalSchema,
  apmResponseSecondaryFieldsSchema,
  type ApmResponseSecondaryFields,
} from "./apm-response-secondary-fields.js";

export type ApmResponseSecondary = {
  /** Data associated with the response of an APM transaction. */
  apm?: ApmResponseSecondaryFields;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apmResponseSecondaryProperties: s.Shape<ApmResponseSecondary> = {
  apm: s.optional(s.lazy(() => apmResponseSecondaryFieldsInternalSchema)),
};

export const apmResponseSecondaryInternalSchema: Schema<ApmResponseSecondary> =
  s.object<ApmResponseSecondary>(apmResponseSecondaryProperties, { additionalProperties: s.json() });

export const apmResponseSecondarySchema: Schema<ApmResponseSecondary> = s.lazySchema(() =>
  s.object<ApmResponseSecondary>(
    {
      ...apmResponseSecondaryProperties,
      apm: s.optional(s.lazy(() => apmResponseSecondaryFieldsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
