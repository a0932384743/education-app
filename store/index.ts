import Vuex from 'vuex';
import commonModule from './common';
import configurationModule from '@/store/configuration';
import workModule from '~/store/work';
const createStore = () => {
  return new Vuex.Store({
    modules: {
      common: commonModule,
      work: workModule,
      configuration: configurationModule,
    },
  });
};
export default createStore;
