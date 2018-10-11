import { getDDMMMYYYY } from '../../../../utils/time-helpers.utils';

/**
 * This function is used for Referrals in RecordsOfTable
 *
 * @param data
 * @return {*}
 */
export function setReferralsRecords(data)  {
  return data.map((el, index) => {
    const date = getDDMMMYYYY(el.dateOfReferral);
    el.date = date;
    el.tableName = `${date} ${el.referralFrom} ${el.referralTo}`;
    return {
      record: el,
      title: `${date} - ${el.referralFrom} -> ${el.referralTo}`,
      value: index,
    }
  });
}
