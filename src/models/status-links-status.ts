import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The overall status of the instance of the resource.The overall status of the instance of the
 * resource. *`ACTIVE` - When a link is initially created it is in an ACTIVE status waiting to be
 * paid. Links can only be paid when they are in a ACTIVE status. *`CLOSED` - When a multi use link
 * is paid it max number of time it is updated to be CLOSED automatically. A CLOSED link cannot be
 * paid again. *`PAID` - When a single use link is paid once then its status is updated to PAID
 * automatically. A PAID link cannot be paid again. *`INACTIVE` - An INACTIVE link is a link that
 * you have marked as INACTIVE. Links can be manually updated / toggled between ACTIVE and INACTIVE
 * using the PATCH request. A link cannot be paid while it is in an INACTIVE state. *`EXPIRED` - An
 * EXPIRED link is a link the expiration_date set in the request is in the past.
 */
export const StatusLinksStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Closed: "CLOSED",
  Expired: "EXPIRED",
  Paid: "PAID",
} as const;
export type StatusLinksStatus = (typeof StatusLinksStatus)[keyof typeof StatusLinksStatus] | (string & {});

export const statusLinksStatusSchema: EnumSchema<StatusLinksStatus> =
  s.enumOf<StatusLinksStatus>(StatusLinksStatus);
