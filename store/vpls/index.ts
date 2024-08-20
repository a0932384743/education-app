import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/vpls-vpn-status.json';

interface StateInterface {
  prop: boolean
}

type VPLS = {
  avg_in_rate: number
  avg_out_rate: number
  bandwidth_usage: string
  check_time: string
  device: string
  historical_input_usage: Array<number>
  historical_output_usage: Array<number>
  id: number
  interface: string
  ip: string
  isAlerting: string,
  packageLossRate: number
  packageLossRate_low: number
  packageLossRate_high: number
  pingResult: {
    avg: number
    max: number
    min: number
  }
  status: string
  vpn_id: number
  vpn_name: string
  vpn_node: string
}

type State = {
  list: Array<VPLS>
}

const getters: GetterTree<State, StateInterface> = {
  getVPLSList(state) {
    return state.list;
  },
};

const mutations: MutationTree<State> = {
  SET_VPLS_LIST(state, list) {
    state.list = list;
  },
  SET_VPLS(state, detail: VPLS) {
    const index = state.list.findIndex((w) => w.id === detail.id);
    state.list[index] = detail;
  },
  ADD_VPLS(state, detail: VPLS) {
    state.list.push(detail);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setVPLSList({ commit }, list) {
    commit('SET_VPLS_LIST', list);
  },
  setVPLS({ commit }, detail) {
    commit('SET_VPLS', detail);
  },
  addVPLS({ commit }, detail) {
    commit('ADD_VPLS', detail);
  },
};

const VPLSModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    list: list as unknown as Array<VPLS>,
  },
};

export default VPLSModule;
