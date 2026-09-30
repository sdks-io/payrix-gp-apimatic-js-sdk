import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hostThemesResponseItemSchema, type HostThemesResponseItem } from "./host-themes-response-item.js";

export type HostThemesResponseResult = {
  response?: HostThemesResponseItem;
};

export const hostThemesResponseResultSchema: Schema<HostThemesResponseResult> =
  s.object<HostThemesResponseResult>({
    response: s.optional(s.lazy(() => hostThemesResponseItemSchema)),
  });
