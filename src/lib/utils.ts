import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';

export const formatDate = (date: string) => {
	return format(new UTCDate(date), 'd MMM y');
};

export const getDateTime = () => {
	const now = new Date();
	const formatted = format(now, "h:mm BBBB, 'The' Do 'day of' y");
	return formatted.split(',');
};
