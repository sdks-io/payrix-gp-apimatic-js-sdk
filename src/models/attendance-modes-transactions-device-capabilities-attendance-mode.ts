import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttendanceModesTransactionsDeviceCapabilitiesAttendanceMode = {
  Attended: "ATTENDED",
  Unattended: "UNATTENDED",
} as const;
export type AttendanceModesTransactionsDeviceCapabilitiesAttendanceMode =
  | (typeof AttendanceModesTransactionsDeviceCapabilitiesAttendanceMode)[keyof typeof AttendanceModesTransactionsDeviceCapabilitiesAttendanceMode]
  | (string & {});

export const attendanceModesTransactionsDeviceCapabilitiesAttendanceModeSchema: EnumSchema<AttendanceModesTransactionsDeviceCapabilitiesAttendanceMode> =
  s.enumOf<AttendanceModesTransactionsDeviceCapabilitiesAttendanceMode>(
    AttendanceModesTransactionsDeviceCapabilitiesAttendanceMode,
  );
