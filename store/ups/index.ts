import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/ups-power-status.json';

interface StateInterface {
  prop: boolean
}

type UPS = {
  battery_capacity: number
  battery_health: string
  battery_voltage: number
  device: string
  id: number
  mains_power_interruption: string
}

type State = {
  list: Array<UPS>
}

const getters: GetterTree<State, StateInterface> = {
  getUPSList(state) {
    return state.list;
  },
};

const mutations: MutationTree<State> = {
  SET_UPS_LIST(state, list) {
    state.list = list;
  },
  SET_UPS(state, detail: UPS) {
    const index = state.list.findIndex((w) => w.id === detail.id);
    state.list[index] = detail;
  },
  ADD_UPS(state, detail: UPS) {
    state.list.push(detail);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setUPSList({ commit }, list) {
    commit('SET_UPS_LIST', list);
  },
  setUPS({ commit }, detail) {
    commit('SET_UPS', detail);
  },
  addUPS({ commit }, detail) {
    commit('ADD_UPS', detail);
  },
};

const UPSModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    list: list as unknown as Array<UPS>,
  },
};

export default UPSModule;
