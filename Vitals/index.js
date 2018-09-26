import { combineEpics } from 'redux-observable';

import asyncComponent from '../../../../components/containers/AsyncComponent/AsyncComponent';
import { themeClientUrls } from '../../config/clientUrls';

import { fetchPatientVitalsDetailEpic } from './ducks/fetch-patient-vitals-detail.duck';
import { fetchPatientVitalsDetailEditEpic } from './ducks/fetch-patient-vitals-detail-edit.duck';
import { fetchPatientVitalsEpic } from './ducks/fetch-patient-vitals.duck';
import { fetchPatientVitalsUpdateEpic } from './ducks/fetch-patient-vitals.duck';
import { fetchPatientVitalsCreateEpic } from './ducks/fetch-patient-vitals-create.duck';

import patientsVitals from './ducks/fetch-patient-vitals.duck';
import patientVitalsCreate from './ducks/fetch-patient-vitals-create.duck';
import vitalsDetail from './ducks/fetch-patient-vitals-detail.duck';
import vitalsDetailEdit from './ducks/fetch-patient-vitals-detail-edit.duck';

const epics = combineEpics(fetchPatientVitalsDetailEpic, fetchPatientVitalsDetailEditEpic, fetchPatientVitalsEpic, fetchPatientVitalsCreateEpic, fetchPatientVitalsUpdateEpic);
const Vitals = asyncComponent(() => import(/* webpackChunkName: "vitals" */ './Vitals').then(module => module.default));

const reducers = {
  patientsVitals,
  patientVitalsCreate,
  vitalsDetail,
  vitalsDetailEdit,
};

const sidebarConfig = { key: 'vitals', pathToTransition: '/vitals', name: 'Vitals', isVisible: true };

const routers = [
  { key: 'vitals', component: Vitals, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.VITALS}` },
  { key: 'vitalsCreate', component: Vitals, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.VITALS}/create` },
  { key: 'vitalsDetail', component: Vitals, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.VITALS}/:sourceId` },
];

export default {
  component: Vitals,
  epics, reducers, sidebarConfig, routers,
}

