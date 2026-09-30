import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iplistsResponseItemSchema, type IplistsResponseItem } from "./iplists-response-item.js";

export type IplistsResponseResult = {
  response?: IplistsResponseItem;
};

export const iplistsResponseResultSchema: Schema<IplistsResponseResult> = s.object<IplistsResponseResult>({
  response: s.optional(s.lazy(() => iplistsResponseItemSchema)),
});
