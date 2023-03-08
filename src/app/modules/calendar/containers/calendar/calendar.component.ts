import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { CalendarView, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarDateFormatter } from 'angular-calendar';
import { subDays, startOfDay, addDays, endOfMonth, addHours, isSameMonth, isSameDay, endOfDay, endOfWeek, startOfWeek, subHours } from 'date-fns';
import { Subject } from 'rxjs';
import { EventColor } from 'calendar-utils';
import { Store } from '@ngrx/store';
import * as AppActions from '@core/store';
import { CustomDateFormatter } from '../../utils/custom-date-formatter.provider';
import { CustomCalendarEvent } from './custom-calendar-event';


const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '',
  },
  blue: {
    primary: '#d70e47',
    secondary: '',
  },
  yellow: {
    primary: '#f3ac5f',
    secondary: '',
  },
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class CalendarComponent {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;
  @ViewChild('myModal') myModal: ElementRef | undefined;


  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CustomCalendarEvent[] = [
    {
      id: 1,
      start: subHours(addDays(new Date(), 1), 3),
      end: subHours(addDays(new Date(), 1), 1),
      isShort: false,
      title: 'Dave',
      subtitle: 'Root Canal',
      isPatientMember: false,
      color: { ...colors['blue'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      id: 2,
      start: addHours(startOfDay(new Date()), 9),
      end: addHours(startOfDay(new Date()), 11),
      isShort: false,
      subtitle: 'Scaling',
      isPatientMember: true,
      title: 'Willy',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      id: 3,
      start: addHours(startOfDay(addDays(new Date(), 2)), 10),
      end: addHours(startOfDay(addDays(new Date(), 2)), 11),
      isShort: true,
      title: 'Dave',
      subtitle: 'Root Canal',
      isPatientMember: false,
      color: { ...colors['blue'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  activeDayIsOpen: boolean = true;
  excludeDays: number[] = [];

  private readonly page = {
    title: 'Calendar',
    menuOptions: [],
    id: 0,
    icon: 'fa-solid fa-calendar',
  };

  constructor(private store: Store) {
    this.store.dispatch(AppActions.setPage(this.page));
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          isPatientMember: iEvent.isPatientMember,
          subtitle: iEvent.subtitle,
          start: newStart,
          end: newEnd,
          isShort: iEvent.isShort
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        subtitle: 'New event',
        isPatientMember: false,
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        isShort: false,
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
