import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { hostsResponseSchema, type HostsResponse } from "../hosts-response.js";

/** The identifier of the related host. */
export type HostThemesModelHost = string | HostsResponse;

export const hostThemesModelHostSchema: Schema<HostThemesModelHost> = s.of<HostThemesModelHost>(
  s.union([s.string(), s.lazy(() => hostsResponseSchema)]),
);
