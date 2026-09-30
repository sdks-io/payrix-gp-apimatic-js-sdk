import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChangeRequestOperation = {
  Create: "create",
  Update: "update",
} as const;
export type ChangeRequestOperation =
  | (typeof ChangeRequestOperation)[keyof typeof ChangeRequestOperation]
  | (string & {});

export const changeRequestOperationSchema: EnumSchema<ChangeRequestOperation> =
  s.enumOf<ChangeRequestOperation>(ChangeRequestOperation);
