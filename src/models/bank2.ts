import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address3InternalSchema, address3Schema, type Address3 } from "./address3.js";

export type Bank2 = {
  /** The local identifier code for the bank. */
  code?: string;
  /** The name of the bank. */
  name?: string;
  address?: Address3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bank2Properties: s.Shape<Bank2> = {
  code: s.optional(s.string()),
  name: s.optional(s.string()),
  address: s.optional(s.lazy(() => address3InternalSchema)),
};

export const bank2InternalSchema: Schema<Bank2> = s.object<Bank2>(bank2Properties, {
  additionalProperties: s.json(),
});

export const bank2Schema: Schema<Bank2> = s.lazySchema(() =>
  s.object<Bank2>(
    {
      ...bank2Properties,
      code: s.optional(s.string().check(s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      address: s.optional(s.lazy(() => address3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
