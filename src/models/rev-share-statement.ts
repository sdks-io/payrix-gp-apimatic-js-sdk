import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entity28Schema, type Entity28 } from "./entity28.js";
import { forentity3Schema, type Forentity3 } from "./forentity3.js";
import { revShareScheduleSchema, type RevShareSchedule } from "./rev-share-schedule.js";

export type RevShareStatement = {
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
  revShareSchedule?: RevShareSchedule;
  entity?: Entity28;
  forentity?: Forentity3;
  /** The billing date of rev share statement. The format should be YYYY-MM-DD HH:MM:SS. */
  billing?: string;
  /**
   * The cost to the partner for rev share enabled items, This field is specified in cents(up to
   * three decimal points)
   */
  revenueShare?: number;
};

export const revShareStatementSchema: Schema<RevShareStatement> = s.object<RevShareStatement>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  revShareSchedule: s.optional(s.lazy(() => revShareScheduleSchema)),
  entity: s.optional(s.lazy(() => entity28Schema)),
  forentity: s.optional(s.lazy(() => forentity3Schema)),
  billing: s.optional(s.string()),
  revenueShare: s.optional(s.number()),
});
