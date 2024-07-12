import Vuex from 'vuex';
import commonModule from './common';
import workModule from '~/store/work';
const createStore = () => {
  return new Vuex.Store({
    modules: {
      common: commonModule,
      work: workModule,
    },
  });
};
export default createStore;
