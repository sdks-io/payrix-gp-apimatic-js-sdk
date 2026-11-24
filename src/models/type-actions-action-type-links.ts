import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the specific action taken.
 * * `ACTION_LIST` - Get a list of actions
 * * `ACTION_SINGLE` - Get a single action
 */
export const TypeActionsActionTypeLinks = {
  Transfer: "TRANSFER",
  Etc: "etc.",
} as const;
export type TypeActionsActionTypeLinks =
  | (typeof TypeActionsActionTypeLinks)[keyof typeof TypeActionsActionTypeLinks]
  | (string & {});

export const typeActionsActionTypeLinksSchema: EnumSchema<TypeActionsActionTypeLinks> =
  s.enumOf<TypeActionsActionTypeLinks>(TypeActionsActionTypeLinks);
