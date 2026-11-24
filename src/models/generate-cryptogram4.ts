import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card23Schema, type Card23 } from "./card23.js";
import { transaction4InternalSchema, transaction4Schema, type Transaction4 } from "./transaction4.js";

export type GenerateCryptogram4 = {
  transaction: Transaction4;
  card: Card23;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const generateCryptogram4Properties: s.Shape<GenerateCryptogram4> = {
  transaction: transaction4InternalSchema,
  card: card23Schema,
};

export const generateCryptogram4InternalSchema: Schema<GenerateCryptogram4> = s.object<GenerateCryptogram4>(
  generateCryptogram4Properties,
  { additionalProperties: s.json() },
);

export const generateCryptogram4Schema: Schema<GenerateCryptogram4> = s.lazySchema(() =>
  s.object<GenerateCryptogram4>(
    {
      ...generateCryptogram4Properties,
      transaction: transaction4Schema,
    },
    { additionalProperties: s.json() },
  ),
);
