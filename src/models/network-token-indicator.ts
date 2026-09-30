import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NetworkTokenIndicator = {
  _0: 0,
  _1: 1,
} as const;
export type NetworkTokenIndicator =
  | (typeof NetworkTokenIndicator)[keyof typeof NetworkTokenIndicator]
  | (number & {});

export const networkTokenIndicatorSchema: EnumSchema<NetworkTokenIndicator> =
  s.enumOf<NetworkTokenIndicator>(NetworkTokenIndicator);
