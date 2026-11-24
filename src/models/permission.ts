import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Permission = {
  TrnPostAuthorize: "TRN_POST_Authorize",
  TrnPostRefund: "TRN_POST_Refund",
  TrnPostCapture: "TRN_POST_Capture",
  TrnPostReverse: "TRN_POST_Reverse",
  VerPostVerify: "VER_POST_Verify",
  TrnGetSingle: "TRN_GET_Single",
  TrnGetList: "TRN_GET_List",
  AutPostInitiate: "AUT_POST_Initiate",
  AutPostResults: "AUT_POST_Results",
  AutPostCheckAvailability: "AUT_POST_Check_Availability",
} as const;
export type Permission = (typeof Permission)[keyof typeof Permission] | (string & {});

export const permissionSchema: EnumSchema<Permission> = s.enumOf<Permission>(Permission);
