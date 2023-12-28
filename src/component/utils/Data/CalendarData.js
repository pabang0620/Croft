import {
  subMonths,
  subDays,
  subWeeks,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
} from 'date-fns';

export const PeriodData = [
  { id: 0, text: '오늘', startDate: new Date(), endDate: new Date() },
  {
    id: 1,
    text: '어제',
    startDate: subDays(new Date(), 1),
    endDate: subDays(new Date(), 1),
  },
  {
    id: 2,
    text: '이번주',
    startDate: startOfWeek(new Date()),
    endDate: endOfWeek(new Date()),
  },
  {
    id: 3,
    text: '지난 주',
    startDate: startOfWeek(subWeeks(new Date(), 1)),
    endDate: endOfWeek(subWeeks(new Date(), 1)),
  },
  {
    id: 4,
    text: '이번 달',
    startDate: startOfMonth(new Date()),
    endDate: endOfMonth(new Date()),
  },
  {
    id: 5,
    text: '지난 달',
    startDate: startOfMonth(subMonths(new Date(), 1)),
    endDate: endOfMonth(subMonths(new Date(), 1)),
  },
  {
    id: 6,
    text: '지난 7일',
    startDate: subDays(new Date(), 7),
    endDate: new Date(),
  },
  {
    id: 7,
    text: '지난 30일',
    startDate: subDays(new Date(), 30),
    endDate: new Date(),
  },
  {
    id: 8,
    text: '지난 90일',
    startDate: subDays(new Date(), 90),
    endDate: new Date(),
  },
  {
    id: 9,
    text: '올해',
    startDate: startOfYear(new Date()),
    endDate: new Date(),
  },
];
