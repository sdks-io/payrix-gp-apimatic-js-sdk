import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { hostThemesDefault2Schema, type HostThemesDefault2 } from "./host-themes-default2.js";
import { hostsResponseSchema, type HostsResponse } from "./hosts-response.js";

export type HostThemesResponse = {
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
  host?: HostsResponse;
  /** The theme's custom primary color. It should be a valid hex color. */
  primaryColor?: string;
  default?: HostThemesDefault2;
};

export const hostThemesResponseSchema: Schema<HostThemesResponse> = s.object<HostThemesResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  host: s.optional(s.lazy(() => hostsResponseSchema)),
  primaryColor: s.optional(s.string()),
  default: s.optional(s.lazy(() => hostThemesDefault2Schema)),
});
