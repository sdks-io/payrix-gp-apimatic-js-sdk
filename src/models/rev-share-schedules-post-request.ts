import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { revShareScheduleEvent1Schema, type RevShareScheduleEvent1 } from "./rev-share-schedule-event1.js";

export type RevShareSchedulesPostRequest = {
  /** The Entities object which is collecting the money. */
  entity: string;
  /** The Entities object which is paying the money. */
  forentity: string;
  /** The start date of rev share. The format should be YYYY-MM-DD HH:MM:SS. */
  start: string;
  /** The end date of rev share. The format should be YYYY-MM-DD HH:MM:SS. */
  end?: string;
  /** The percentage that payrix receives. */
  share: number;
  event: RevShareScheduleEvent1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const revShareSchedulesPostRequestSchema: Schema<RevShareSchedulesPostRequest> =
  s.object<RevShareSchedulesPostRequest>({
    entity: s.string(),
    forentity: s.string(),
    start: s.string(),
    end: s.optional(s.string()),
    share: s.number(),
    event: revShareScheduleEvent1Schema,
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
