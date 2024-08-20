import Vuex from 'vuex';
import commonModule from './common';
import OpticalModule from '@/store/optical';
import VPLSModule from '@/store/vpls';
import TopologicalModule from '@/store/topological';
import connectionModule from '@/store/connections';
import gigaPopsModule from '@/store/gigapops';
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
      gigaPops: gigaPopsModule,
      connection: connectionModule,
      topological: TopologicalModule,
      vpls:VPLSModule,
      optical:OpticalModule
    },
  });
};
export default createStore;
