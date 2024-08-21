import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/pdu-load-status.json';

interface StateInterface {
  prop: boolean
}

type PDU = {
  check_time: string
  current_current: number
  current_kwh: number
  current_voltage: number
  device: string
  high_critical_current: number
  high_critical_kwh: number
  high_critical_voltage: number
  id: number
  low_critical_current: number
  low_critical_kwh: number
  low_critical_voltage: number
  status: string
}

type State = {
  list: Array<PDU>
}

const getters: GetterTree<State, StateInterface> = {
  getPDUList(state) {
    return state.list;
  },
};

const mutations: MutationTree<State> = {
  SET_PDU_LIST(state, list) {
    state.list = list;
  },
  SET_PDU(state, detail: PDU) {
    const index = state.list.findIndex((w) => w.id === detail.id);
    state.list[index] = detail;
  },
  ADD_PDU(state, detail: PDU) {
    state.list.push(detail);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setPDUList({ commit }, list) {
    commit('SET_PDU_LIST', list);
  },
  setPDU({ commit }, detail) {
    commit('SET_PDU', detail);
  },
  addPDU({ commit }, detail) {
    commit('ADD_PDU', detail);
  },
};

const PDUModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    list: list as unknown as Array<PDU>,
  },
};

export default PDUModule;
