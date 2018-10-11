import * as recordsFunctions from '../../../form-fields/RecordsOfTable/functions';

/**
 * This function is used for Procedures in RecordsOfTable
 *
 * @param data
 * @return {*}
 */
export function setProceduresRecords(data) {
  return recordsFunctions.changeArraysForTable(data, 'name', 'date');
}
