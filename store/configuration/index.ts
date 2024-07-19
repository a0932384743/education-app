import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/device-data-setting.json';

interface StateInterface {
  prop: boolean
}

type Configuration = {
  id: number
  task: string
  resource: string
  brand:string;
  backupCount:string;
  checkTime:string;
}

type State = {
  list: Array<Configuration>
}

const getters: GetterTree<State, StateInterface> = {
  getConfigurationList(state) {
    return state.list;
  },
};

const mutations: MutationTree<State> = {
  SET_CONFIGURATION_LIST(state, list) {
    state.list = list;
  },
  SET_CONFIGURATION(state, detail: Configuration) {
    const index = state.list.findIndex((w) => w.id === detail.id);
    state.list[index] = detail;
  },
  ADD_WORK(state, detail: Configuration) {
    state.list.push(detail);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setConfigurationList({ commit }, list) {
    commit('SET_CONFIGURATION_LIST', list);
  },
  setConfiguration({ commit }, work) {
    commit('SET_CONFIGURATION', work);
  },
  addConfiguration({ commit }, work) {
    commit('ADD_CONFIGURATION', work);
  },
};

const configurationModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    list: list as unknown as Array<Configuration>,
  },
};

export default configurationModule;
