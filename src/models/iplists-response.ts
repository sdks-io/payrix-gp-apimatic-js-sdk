import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { iplistType1Schema, type IplistType1 } from "./iplist-type1.js";
import { iplistsVersion1Schema, type IplistsVersion1 } from "./iplists-version1.js";

export type IplistsResponse = {
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
  /** The Login that owns this resource. */
  login?: string;
  version?: IplistsVersion1;
  type?: IplistType1;
  /**
   * The lowest IP address that should be included in this IP List. The valid data type for this
   * field depends on whether the IP list is set to be an IPv4 or IPv6 list in the 'type' field. For
   * an IPv4 list, only IPv4 addresses such as 198.51.100.113 are permitted. For an IPv6 list, only
   * IPv6 addresses such as 2001:0db8:85a3:0000:0000:8a2e:0370:7334 are permitted.
   */
  start?: string;
  /**
   * The highest IP address that should be included in this IP List. The valid values for this field
   * depend on whether the IP list is set to be an IPv4 or IPv6 list in the 'type' field. For an
   * IPv4 list, only IPv4 addresses, such as '198.51.100.113', are permitted. For an IPv6 list, only
   * IPv6 addresses, such as '2001:0db8:85a3:0000:0000:8a2e:0370:7334' are permitted.
   */
  finish?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const iplistsResponseSchema: Schema<IplistsResponse> = s.object<IplistsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.string()),
  version: s.optional(s.lazy(() => iplistsVersion1Schema)),
  type: s.optional(s.lazy(() => iplistType1Schema)),
  start: s.optional(s.string()),
  finish: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
