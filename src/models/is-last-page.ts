import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether there are more pages of BIN ranges available. */
export const IsLastPage = {
  Yes: "YES",
  No: "NO",
} as const;
export type IsLastPage = (typeof IsLastPage)[keyof typeof IsLastPage] | (string & {});

export const isLastPageSchema: EnumSchema<IsLastPage> = s.enumOf<IsLastPage>(IsLastPage);
