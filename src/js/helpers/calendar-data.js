import { format } from 'date-fns';

export default function getCurrentCalendarData() {
  return format(new Date(), 'dd/MM/yy');
}
