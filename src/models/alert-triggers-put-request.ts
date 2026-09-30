import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alertTriggerEvent1Schema, type AlertTriggerEvent1 } from "./alert-trigger-event1.js";
import { alertTriggerResource1Schema, type AlertTriggerResource1 } from "./alert-trigger-resource1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type AlertTriggersPutRequest = {
  /** The identifier of the Alert resource that you want to invoke with this trigger. */
  alert?: string;
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

export const alertTriggersPutRequestSchema: Schema<AlertTriggersPutRequest> =
  s.object<AlertTriggersPutRequest>({
    alert: s.optional(s.string()),
    event: s.optional(s.lazy(() => alertTriggerEvent1Schema)),
    resource: s.optional(s.lazy(() => alertTriggerResource1Schema)),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
