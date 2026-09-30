import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pageSchema, type Page } from "./page.js";

export type Details2 = {
  /**
   * A unique identifier set by the API client, that is echoed by the response. The request ID can
   * be useful in troubleshooting and monitoring.
   */
  requestId?: number;
  /** Returns an empty array if we don't pass totals header. */
  totals?: Record<string, unknown>;
  page?: Page;
};

export const details2Schema: Schema<Details2> = s.object<Details2>({
  requestId: s.optional(s.number()),
  totals: s.optional(s.record(s.string(), s.unknown())),
  page: s.optional(s.lazy(() => pageSchema)),
});
