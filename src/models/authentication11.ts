import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { threeDs27InternalSchema, threeDs27Schema, type ThreeDs27 } from "./three-ds27.js";

export type Authentication11 = {
  threeDs?: ThreeDs27;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const authentication11Properties: s.Shape<Authentication11> = {
  threeDs: s.optional(s.lazy(() => threeDs27InternalSchema)),
  _keysMap: {
    threeDs: "three_ds",
  },
};

export const authentication11InternalSchema: Schema<Authentication11> = s.object<Authentication11>(
  authentication11Properties,
  { additionalProperties: s.json() },
);

export const authentication11Schema: Schema<Authentication11> = s.lazySchema(() =>
  s.object<Authentication11>(
    {
      ...authentication11Properties,
      threeDs: s.optional(s.lazy(() => threeDs27Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
