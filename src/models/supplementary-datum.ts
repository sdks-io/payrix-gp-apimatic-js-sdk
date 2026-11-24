import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeTransactionsOrderSupplementaryDataTypeSchema,
  type TypeTransactionsOrderSupplementaryDataType,
} from "./type-transactions-order-supplementary-data-type.js";

export type SupplementaryDatum = {
  /** The type of supplementary data to be submitted */
  type?: TypeTransactionsOrderSupplementaryDataType;
  /** Array of additional data to support the type of supplementary data provided */
  fields?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supplementaryDatumSchema: Schema<SupplementaryDatum> = s.object<SupplementaryDatum>(
  {
    type: s.optional(s.lazy(() => typeTransactionsOrderSupplementaryDataTypeSchema)),
    fields: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
