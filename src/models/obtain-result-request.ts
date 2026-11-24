import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { threeDs5InternalSchema, threeDs5Schema, type ThreeDs5 } from "./three-ds5.js";

export type ObtainResultRequest = {
  threeDs?: ThreeDs5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const obtainResultRequestProperties: s.Shape<ObtainResultRequest> = {
  threeDs: s.optional(s.lazy(() => threeDs5InternalSchema)),
  _keysMap: {
    threeDs: "three_ds",
  },
};

export const obtainResultRequestInternalSchema: Schema<ObtainResultRequest> = s.object<ObtainResultRequest>(
  obtainResultRequestProperties,
  { additionalProperties: s.json() },
);

export const obtainResultRequestSchema: Schema<ObtainResultRequest> = s.lazySchema(() =>
  s.object<ObtainResultRequest>(
    {
      ...obtainResultRequestProperties,
      threeDs: s.optional(s.lazy(() => threeDs5Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
