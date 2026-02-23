import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  if (dateString === 'Present') {
    return <time dateTime="Present">Present</time>;
  }

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}