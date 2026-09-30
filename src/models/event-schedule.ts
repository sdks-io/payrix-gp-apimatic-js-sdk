import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entity16Schema, type Entity16 } from "./entity16.js";
import { forentity1Schema, type Forentity1 } from "./forentity1.js";

export type EventSchedule = {
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
  entity?: Entity16;
  forentity?: Forentity1;
};

export const eventScheduleSchema: Schema<EventSchedule> = s.object<EventSchedule>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity16Schema)),
  forentity: s.optional(s.lazy(() => forentity1Schema)),
});
