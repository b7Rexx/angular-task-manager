import * as moment from 'moment';

export const humanizeDate = (date) => {
  const m1 = moment(new Date(date));
  const m2 = new Date();
  const duration = moment.duration(m1.diff(m2));
  return duration.humanize(true);
};
