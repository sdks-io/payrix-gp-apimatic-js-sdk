import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alertActionType1Schema, type AlertActionType1 } from "./alert-action-type1.js";
import {
  alertActionsMaxAttemptsTempDisabled1Schema,
  type AlertActionsMaxAttemptsTempDisabled1,
} from "./alert-actions-max-attempts-temp-disabled1.js";
import { alertSchema, type Alert } from "./alert.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type AlertActionsResponse = {
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
  type?: AlertActionType1;
  /**
   * When the 'type' field of this resource is set to 'web', this field determines the format that
   * the Alert data should be sent in.
   */
  options?: string;
  /**
   * A value used to deliver the alert. The field should be set to an email address if the type is
   * email, an endpoint if the type is web, etc.
   */
  value?: string;
  /** The request header name for authentication to the endpoint. */
  headerName?: string;
  /** The request header value for authentication to the endpoint. */
  headerValue?: string;
  /**
   * The number of times an alert should be resent in case of a failure. This fields can only be set
   * for web type alertActions.
   */
  retries?: number;
  maxAttemptsTempDisabled?: AlertActionsMaxAttemptsTempDisabled1;
  alert?: Alert;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const alertActionsResponseSchema: Schema<AlertActionsResponse> = s.object<AlertActionsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  type: s.optional(s.lazy(() => alertActionType1Schema)),
  options: s.optional(s.string()),
  value: s.optional(s.string()),
  headerName: s.optional(s.string()),
  headerValue: s.optional(s.string()),
  retries: s.optional(s.number()),
  maxAttemptsTempDisabled: s.optional(s.lazy(() => alertActionsMaxAttemptsTempDisabled1Schema)),
  alert: s.optional(s.lazy(() => alertSchema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
