import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttendanceMode = {
  Attended: "ATTENDED",
  Unattended: "UNATTENDED",
} as const;
export type AttendanceMode = (typeof AttendanceMode)[keyof typeof AttendanceMode] | (string & {});

export const attendanceModeSchema: EnumSchema<AttendanceMode> = s.enumOf<AttendanceMode>(AttendanceMode);
