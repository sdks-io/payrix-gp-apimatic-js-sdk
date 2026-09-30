import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { division3Schema, type Division3 } from "./division3.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";

export type HostsResponse = {
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
  partition?: PartitionsResponse;
  division?: Division3;
  /**
   * The fully-qualified host name of the API for this Host. For example, 'api.example.com'. This
   * field must be unique.
   */
  api?: string;
  /**
   * The fully-qualified host name of the portal for this Host. For example, 'portal.example.com'.
   */
  portal?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const hostsResponseSchema: Schema<HostsResponse> = s.object<HostsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  partition: s.optional(s.lazy(() => partitionsResponseSchema)),
  division: s.optional(s.lazy(() => division3Schema)),
  api: s.optional(s.string()),
  portal: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
