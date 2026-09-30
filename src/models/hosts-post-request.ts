import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type HostsPostRequest = {
  /** The identifier of the Partition resource that this Host belongs to. */
  partition: string;
  /** The identifier of the Division resource that this Host belongs to. */
  division?: string;
  /**
   * The fully-qualified host name of the API for this Host. For example, 'api.example.com'. This
   * field must be unique.
   */
  api: string;
  /**
   * The fully-qualified host name of the portal for this Host. For example, 'portal.example.com'.
   */
  portal?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const hostsPostRequestSchema: Schema<HostsPostRequest> = s.object<HostsPostRequest>({
  partition: s.string(),
  division: s.optional(s.string()),
  api: s.string(),
  portal: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
