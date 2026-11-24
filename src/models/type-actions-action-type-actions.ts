import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the specific action taken.
 *   * `ACTION_LIST` - Get a list of actions
 *   * `ACTION_SINGLE` - Get a single action
 */
export const TypeActionsActionTypeActions = {
  Transfer: "TRANSFER",
  Etc: "etc.",
} as const;
export type TypeActionsActionTypeActions =
  | (typeof TypeActionsActionTypeActions)[keyof typeof TypeActionsActionTypeActions]
  | (string & {});

export const typeActionsActionTypeActionsSchema: EnumSchema<TypeActionsActionTypeActions> =
  s.enumOf<TypeActionsActionTypeActions>(TypeActionsActionTypeActions);
