import {
  subMonths,
  subDays,
  subWeeks,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  format,
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
    startDate: startOfWeek(new Date(), { weekStartsOn: 1 }),
    endDate: new Date(),
  },
  {
    id: 3,
    text: '지난 주',
    startDate: startOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 }),
    endDate: endOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 }),
  },
  {
    id: 4,
    text: '이번 달',
    startDate: startOfMonth(new Date()),
    endDate: new Date(),
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
    endDate: subDays(new Date(), 1),
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

export const CheckPriod = (startDate, endDate) => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const start = startDate ? format(startDate, 'yyyy-MM-dd') : today;
  const end = endDate ? format(endDate, 'yyyy-MM-dd') : today;
  const array = PeriodData.filter((date) => {
    if (
      format(date.startDate, 'yyyy-MM-dd') === start &&
      format(date.endDate, 'yyyy-MM-dd') === end
    )
      return date;
  });
  if (array[0]) {
    return array[0].text;
  } else return '';
};
