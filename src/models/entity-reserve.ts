import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { fund1Schema, type Fund1 } from "./fund1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { reserveEntriesResponseSchema, type ReserveEntriesResponse } from "./reserve-entries-response.js";

export type EntityReserve = {
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
  login?: Login2;
  fund?: Fund1;
  /** The amount held in this entityReserve. This field is specified as an integer in cents. */
  total?: number;
  /** The current sequentially numbered activity requested for this entityReserve. */
  requestSequence?: number;
  /** The current sequentially numbered activity processed for this entityReserve. */
  processedSequence?: number;
  /**
   * The name of this EntityReserve. This field is stored as a text string and must be between 0 and
   * 50 characters long.
   */
  name?: string;
  /**
   * A description of this EntityReserve. This field is stored as a text string and must be between
   * 0 and 100 characters long.
   */
  description?: string;
  reserveEntries?: ReserveEntriesResponse[];
};

export const entityReserveSchema: Schema<EntityReserve> = s.object<EntityReserve>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  fund: s.optional(s.lazy(() => fund1Schema)),
  total: s.optional(s.number()),
  requestSequence: s.optional(s.number()),
  processedSequence: s.optional(s.number()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  reserveEntries: s.optional(s.array(s.lazy(() => reserveEntriesResponseSchema))),
});
