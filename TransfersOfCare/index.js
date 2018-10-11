import { combineEpics } from 'redux-observable';

import asyncComponent from '../../../../components/containers/AsyncComponent/AsyncComponent';
import { themeClientUrls } from '../../config/clientUrls';

import { fetchPatientTransfersOfCareDetailEpic } from './ducks/fetch-patient-transfers-of-care-detail.duck';
import { fetchPatientTransfersOfCareDetailEditEpic } from './ducks/fetch-patient-transfers-of-care-detail-edit.duck';
import { fetchPatientTransfersOfCareEpic } from './ducks/fetch-patient-transfers-of-care.duck';
import { fetchPatientTransfersOfCareUpdateEpic } from './ducks/fetch-patient-transfers-of-care.duck';
import { fetchPatientTransfersOfCareCreateEpic } from './ducks/fetch-patient-transfers-of-care-create.duck';

import patientsTransfersOfCare from './ducks/fetch-patient-transfers-of-care.duck';
import patientTransfersOfCareCreate from './ducks/fetch-patient-transfers-of-care-create.duck';
import transfersOfCareDetail from './ducks/fetch-patient-transfers-of-care-detail.duck';
import transfersOfCareDetailEdit from './ducks/fetch-patient-transfers-of-care-detail-edit.duck';

const epics = combineEpics(fetchPatientTransfersOfCareDetailEpic, fetchPatientTransfersOfCareDetailEditEpic, fetchPatientTransfersOfCareEpic, fetchPatientTransfersOfCareCreateEpic, fetchPatientTransfersOfCareUpdateEpic);
const TransfersOfCare = asyncComponent(() => import(/* webpackChunkName: "transfersOfCare" */ './TransfersOfCare').then(module => module.default));

const reducers = {
  patientsTransfersOfCare,
  patientTransfersOfCareCreate,
  transfersOfCareDetail,
  transfersOfCareDetailEdit,
};

const sidebarConfig = { key: 'transfer-of-care', pathToTransition: '/transfersOfCare', name: 'Transfers of Care', isVisible: true };

const routers = [
  { key: 'transfersOfCare', component: TransfersOfCare, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.TRANSFERS_OF_CARE}` },
  { key: 'transfersOfCareCreate', component: TransfersOfCare, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.TRANSFERS_OF_CARE}/create` },
  { key: 'transfersOfCareDetail', component: TransfersOfCare, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.TRANSFERS_OF_CARE}/:sourceId` },
];

export default {
  component: TransfersOfCare,
  epics, reducers, sidebarConfig, routers,
}

