import _ from 'lodash/fp';
import { getDDMMMYYYY } from '../../../../utils/time-helpers.utils';

/**
 * This function is used for Events in RecordsOfTable
 *
 * @param data
 * @return {*}
 */
export function setEventsRecords(data) {
  const events = _.flow(
    _.filter(item => item.dateCreated && item.type),
    _.map((item) => {
      item.date = getDDMMMYYYY(item.dateCreated);
      item.tableName = item.name;
      return item;
    }),
    _.groupBy(item => item.type.capitalize()),
  )(data);
  const arr = [];
  let index = 0;
  for (const key in events) {
    events[key] = events[key].map((el, index) => ({
      record: el,
      title: el.name,
      value: index,
    }));
    arr.push({
      events: events[key],
      title: key,
      value: index++,
    });
  }
  return arr;
}
