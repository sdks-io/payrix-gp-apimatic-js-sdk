import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transaction4InternalSchema, transaction4Schema, type Transaction4 } from "./transaction4.js";

export type GenerateCryptogram3 = {
  transaction: Transaction4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const generateCryptogram3Properties: s.Shape<GenerateCryptogram3> = {
  transaction: transaction4InternalSchema,
};

export const generateCryptogram3InternalSchema: Schema<GenerateCryptogram3> = s.object<GenerateCryptogram3>(
  generateCryptogram3Properties,
  { additionalProperties: s.json() },
);

export const generateCryptogram3Schema: Schema<GenerateCryptogram3> = s.lazySchema(() =>
  s.object<GenerateCryptogram3>(
    {
      ...generateCryptogram3Properties,
      transaction: transaction4Schema,
    },
    { additionalProperties: s.json() },
  ),
);
