import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { membersResponseItemSchema, type MembersResponseItem } from "./members-response-item.js";

export type MembersResponseResult = {
  response?: MembersResponseItem;
};

export const membersResponseResultSchema: Schema<MembersResponseResult> = s.object<MembersResponseResult>({
  response: s.optional(s.lazy(() => membersResponseItemSchema)),
});
