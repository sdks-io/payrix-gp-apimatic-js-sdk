import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Filter3 = {
  /**
   * A unique identifier for the object created by Global Payments. The first 3 characters
   * identifies the resource an id relates to.
   */
  batchId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const filter3Properties: s.Shape<Filter3> = {
  batchId: s.optional(s.string()),
  _keysMap: {
    batchId: "batch_id",
  },
};

export const filter3InternalSchema: Schema<Filter3> = s.object<Filter3>(filter3Properties, {
  additionalProperties: s.json(),
});

export const filter3Schema: Schema<Filter3> = s.lazySchema(() =>
  s.object<Filter3>(
    {
      ...filter3Properties,
      batchId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
