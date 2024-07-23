import Vuex from 'vuex';
import commonModule from './common';
import maintenanceModule from '@/store/maintenance';
import configurationModule from '@/store/configuration';
import workModule from '~/store/work';
const createStore = () => {
  return new Vuex.Store({
    modules: {
      common: commonModule,
      work: workModule,
      configuration: configurationModule,
      maintenance: maintenanceModule,
    },
  });
};
export default createStore;
