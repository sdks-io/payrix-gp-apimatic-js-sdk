import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GlobalBusinessType = {
  Ssn: "ssn",
  Tin: "tin",
  Other: "other",
  Cd: "CD",
  Ab: "AB",
  Bc: "BC",
  Mb: "MB",
  Nb: "NB",
  Nl: "NL",
  Nt: "NT",
  Ns: "NS",
  Nu: "NU",
  On: "ON",
  Pe: "PE",
  Qc: "QC",
  Sk: "SK",
  Yt: "YT",
} as const;
export type GlobalBusinessType = (typeof GlobalBusinessType)[keyof typeof GlobalBusinessType] | (string & {});

export const globalBusinessTypeSchema: EnumSchema<GlobalBusinessType> =
  s.enumOf<GlobalBusinessType>(GlobalBusinessType);
