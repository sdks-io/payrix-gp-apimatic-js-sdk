import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttendanceModesVerificationsDeviceCapabilitiesAttendanceMode = {
  Attended: "ATTENDED",
  Unattended: "UNATTENDED",
} as const;
export type AttendanceModesVerificationsDeviceCapabilitiesAttendanceMode =
  | (typeof AttendanceModesVerificationsDeviceCapabilitiesAttendanceMode)[keyof typeof AttendanceModesVerificationsDeviceCapabilitiesAttendanceMode]
  | (string & {});

export const attendanceModesVerificationsDeviceCapabilitiesAttendanceModeSchema: EnumSchema<AttendanceModesVerificationsDeviceCapabilitiesAttendanceMode> =
  s.enumOf<AttendanceModesVerificationsDeviceCapabilitiesAttendanceMode>(
    AttendanceModesVerificationsDeviceCapabilitiesAttendanceMode,
  );
