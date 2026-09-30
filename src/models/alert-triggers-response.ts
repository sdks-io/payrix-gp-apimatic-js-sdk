import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alertTriggerEvent1Schema, type AlertTriggerEvent1 } from "./alert-trigger-event1.js";
import { alertTriggerResource1Schema, type AlertTriggerResource1 } from "./alert-trigger-resource1.js";
import { alertSchema, type Alert } from "./alert.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type AlertTriggersResponse = {
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
  alert?: Alert;
  event?: AlertTriggerEvent1;
  resource?: AlertTriggerResource1;
  /**
   * The name of this alertTrigger. This field is stored as a text string and must be between 0 and
   * 100 characters long.
   */
  name?: string;
  /** Description of Alert Triggers. */
  description?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const alertTriggersResponseSchema: Schema<AlertTriggersResponse> = s.object<AlertTriggersResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  alert: s.optional(s.lazy(() => alertSchema)),
  event: s.optional(s.lazy(() => alertTriggerEvent1Schema)),
  resource: s.optional(s.lazy(() => alertTriggerResource1Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
