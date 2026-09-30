import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { disbursement1Schema, type Disbursement1 } from "./disbursement1.js";
import { entity15Schema, type Entity15 } from "./entity15.js";
import { fee2Schema, type Fee2 } from "./fee2.js";
import { fromentitySchema, type Fromentity } from "./fromentity.js";
import { fund2Schema, type Fund2 } from "./fund2.js";
import { onentitySchema, type Onentity } from "./onentity.js";
import { opposingEntrySchema, type OpposingEntry } from "./opposing-entry.js";

export type LastNegativeEntry = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  entity?: Entity15;
  onentity?: Onentity;
  fromentity?: Fromentity;
  opposingEntry?: OpposingEntry;
  fund?: Fund2;
  fee?: Fee2;
  disbursement?: Disbursement1;
};

export const lastNegativeEntrySchema: Schema<LastNegativeEntry> = s.object<LastNegativeEntry>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity15Schema)),
  onentity: s.optional(s.lazy(() => onentitySchema)),
  fromentity: s.optional(s.lazy(() => fromentitySchema)),
  opposingEntry: s.optional(s.lazy(() => opposingEntrySchema)),
  fund: s.optional(s.lazy(() => fund2Schema)),
  fee: s.optional(s.lazy(() => fee2Schema)),
  disbursement: s.optional(s.lazy(() => disbursement1Schema)),
});
