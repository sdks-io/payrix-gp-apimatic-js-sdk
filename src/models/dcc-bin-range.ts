import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status118Schema, type Status118 } from "./status118.js";

export type DccBinRange = {
  /** Lower limit of the BIN range. */
  lowPrefixNumber?: string;
  /** Higher limit of the BIN range. */
  highPrefixNumber?: string;
  /** The status of the BIN ranges. Can be ACTIVE or INACTIVE. */
  status?: Status118;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dccBinRangeSchema: Schema<DccBinRange> = s.object<DccBinRange>(
  {
    lowPrefixNumber: s.optional(s.string()),
    highPrefixNumber: s.optional(s.string()),
    status: s.optional(s.lazy(() => status118Schema)),
    _keysMap: {
      lowPrefixNumber: "low_prefix_number",
      highPrefixNumber: "high_prefix_number",
    },
  },
  { additionalProperties: s.json() },
);
