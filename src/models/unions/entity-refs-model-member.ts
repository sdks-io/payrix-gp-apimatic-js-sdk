import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { membersResponseSchema, type MembersResponse } from "../members-response.js";

/** The identifier of the Member associated with this entityRefs resource. */
export type EntityRefsModelMember = string | MembersResponse;

export const entityRefsModelMemberSchema: Schema<EntityRefsModelMember> = s.of<EntityRefsModelMember>(
  s.union([s.string(), s.lazy(() => membersResponseSchema)]),
);
