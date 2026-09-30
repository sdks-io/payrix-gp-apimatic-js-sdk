import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alertActionsPostRequestSchema, type AlertActionsPostRequest } from "./alert-actions-post-request.js";
import {
  alertTriggersPostRequestSchema,
  type AlertTriggersPostRequest,
} from "./alert-triggers-post-request.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { teamsPostRequestSchema, type TeamsPostRequest } from "./teams-post-request.js";

export type AlertsPostRequest = {
  /** The Login that owns this resource. */
  login: string;
  /**
   * The identifier of the Login that this Alert relates to. The Alert is triggered based on the
   * activity of this Login.
   */
  forlogin?: string;
  team?: TeamsPostRequest;
  /** The division for which this Alerts applies. */
  division?: string;
  /** The partition for which this Alerts applies. */
  partition?: string;
  /**
   * The name of this Alert. This field is stored as a text string and must be between 1 and 100
   * characters long.
   */
  name?: string;
  /** Description of Alerts. */
  description?: string;
  alertActions?: AlertActionsPostRequest[];
  alertTriggers?: AlertTriggersPostRequest[];
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const alertsPostRequestSchema: Schema<AlertsPostRequest> = s.object<AlertsPostRequest>({
  login: s.string(),
  forlogin: s.optional(s.string()),
  team: s.optional(s.lazy(() => teamsPostRequestSchema)),
  division: s.optional(s.string()),
  partition: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  alertActions: s.optional(s.array(s.lazy(() => alertActionsPostRequestSchema))),
  alertTriggers: s.optional(s.array(s.lazy(() => alertTriggersPostRequestSchema))),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
