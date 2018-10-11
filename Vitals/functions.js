import { getDDMMMYYYY } from '../../../../utils/time-helpers.utils';

/**
 * This function is used for Vitals in RecordsOfTable
 *
 * @param data
 * @return {*}
 */
export function setVitalsRecords(data) {
  const records = [];
  records.push({
    record: data[1],
  });
  records[0].record.date = getDDMMMYYYY(records[0].dateCreated);
  records[0].record.tableName = `Latest Vitals Data (News Score: ${records[0].record.newsScore})`;
  records[0].title = 'Latest Vitals Data';
  records[0].value = 0;

  return records;
}