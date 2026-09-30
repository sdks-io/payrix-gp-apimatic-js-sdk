import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alertActionsResponseSchema, type AlertActionsResponse } from "./alert-actions-response.js";
import { alertTriggersResponseSchema, type AlertTriggersResponse } from "./alert-triggers-response.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { division1Schema, type Division1 } from "./division1.js";
import { forloginSchema, type Forlogin } from "./forlogin.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";
import { teamSchema, type Team } from "./team.js";

export type Alert = {
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
  forlogin?: Forlogin;
  team?: Team;
  division?: Division1;
  partition?: PartitionsResponse;
  /**
   * The name of this Alert. This field is stored as a text string and must be between 1 and 100
   * characters long.
   */
  name?: string;
  /** Description of Alerts. */
  description?: string;
  alertActions?: AlertActionsResponse[];
  alertTriggers?: AlertTriggersResponse[];
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const alertSchema: Schema<Alert> = s.object<Alert>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  forlogin: s.optional(s.lazy(() => forloginSchema)),
  team: s.optional(s.lazy(() => teamSchema)),
  division: s.optional(s.lazy(() => division1Schema)),
  partition: s.optional(s.lazy(() => partitionsResponseSchema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  alertActions: s.optional(s.array(s.lazy(() => alertActionsResponseSchema))),
  alertTriggers: s.optional(s.array(s.lazy(() => alertTriggersResponseSchema))),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
