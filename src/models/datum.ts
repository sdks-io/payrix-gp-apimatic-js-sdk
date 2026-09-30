import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Datum = {
  /** The opt-out status result. */
  status?: string;
};

export const datumSchema: Schema<Datum> = s.object<Datum>({
  status: s.optional(s.string()),
});
