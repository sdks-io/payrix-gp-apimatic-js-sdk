import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InterchangeHistoriesIsInitial = {
  _0: 0,
  _1: 1,
} as const;
export type InterchangeHistoriesIsInitial =
  | (typeof InterchangeHistoriesIsInitial)[keyof typeof InterchangeHistoriesIsInitial]
  | (number & {});

export const interchangeHistoriesIsInitialSchema: EnumSchema<InterchangeHistoriesIsInitial> =
  s.enumOf<InterchangeHistoriesIsInitial>(InterchangeHistoriesIsInitial);
