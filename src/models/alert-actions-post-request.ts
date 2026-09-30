import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alertActionType1Schema, type AlertActionType1 } from "./alert-action-type1.js";
import {
  alertActionsMaxAttemptsTempDisabled1Schema,
  type AlertActionsMaxAttemptsTempDisabled1,
} from "./alert-actions-max-attempts-temp-disabled1.js";
import { alertsPostRequestSchema, type AlertsPostRequest } from "./alerts-post-request.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type AlertActionsPostRequest = {
  alert: AlertsPostRequest;
  /** The request header name for authentication to the endpoint. */
  headerName?: string;
  /** The request header value for authentication to the endpoint. */
  headerValue?: string;
  type: AlertActionType1;
  /**
   * When the 'type' field of this resource is set to 'web', this field determines the format that
   * the Alert data should be sent in.
   */
  options: string;
  /**
   * A value used to deliver the alert. Thie field should be set to an email address if the type is
   * email, an endpoint if the type is web, etc.
   */
  value: string;
  /**
   * The number of times an alert should be resent in case of a failure. This fields can only be set
   * for web type alertActions.
   */
  retries?: number | null;
  maxAttemptsTempDisabled?: AlertActionsMaxAttemptsTempDisabled1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const alertActionsPostRequestSchema: Schema<AlertActionsPostRequest> =
  s.object<AlertActionsPostRequest>({
    alert: alertsPostRequestSchema,
    headerName: s.optional(s.string()),
    headerValue: s.optional(s.string()),
    type: alertActionType1Schema,
    options: s.string(),
    value: s.string(),
    retries: s.optionalNullable(s.number()),
    maxAttemptsTempDisabled: s.optional(s.lazy(() => alertActionsMaxAttemptsTempDisabled1Schema)),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
