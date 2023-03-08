import { CalendarEvent } from "angular-calendar";

export interface CustomCalendarEvent extends CalendarEvent {
    subtitle: string;
    isPatientMember: boolean;
    isShort: boolean;
}