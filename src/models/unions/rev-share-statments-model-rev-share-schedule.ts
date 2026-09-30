import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  revShareSchedulesResponseSchema,
  type RevShareSchedulesResponse,
} from "../rev-share-schedules-response.js";

/** The RevShareSchedule object defines specific income sharing rules. */
export type RevShareStatmentsModelRevShareSchedule = string | RevShareSchedulesResponse;

export const revShareStatmentsModelRevShareScheduleSchema: Schema<RevShareStatmentsModelRevShareSchedule> =
  s.of<RevShareStatmentsModelRevShareSchedule>(
    s.union([s.string(), s.lazy(() => revShareSchedulesResponseSchema)]),
  );
