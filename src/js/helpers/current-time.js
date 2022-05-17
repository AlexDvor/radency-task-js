import { format } from 'date-fns';

export default function getCurrentTime() {
  return format(new Date(), 'HH:mm');
}
