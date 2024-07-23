import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/connection-unit.json';

interface StateInterface {
  prop: boolean
}

type Connection = {
  bgpCommunity: string
  connectUnit: string
  contactInfo: string
  endpointIpv6Address: string
  gigaPoP: string
  id: number
  interfaceDevice: string
  interfaceDeviceIfindex: number
  interfacePortName: string
  ipv4Route: string
  ipv6Route: string
  isAlerting: string
  orgNameEn: string
  orgNameZh: string
  whoisOrgID: string
}

type State = {
  list: Array<Connection>
}

const getters: GetterTree<State, StateInterface> = {
  getConnectionList(state) {
    return state.list;
  },
};

const mutations: MutationTree<State> = {
  SET_CONNECTION_LIST(state, list) {
    state.list = list;
  },
  SET_CONNECTION(state, detail: Connection) {
    const index = state.list.findIndex((w) => w.id === detail.id);
    state.list[index] = detail;
  },
  ADD_CONNECTION(state, detail: Connection) {
    state.list.push(detail);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setConnectionList({ commit }, list) {
    commit('SET_CONNECTION_LIST', list);
  },
  setConnection({ commit }, detail) {
    commit('SET_CONNECTION', detail);
  },
  addConnection({ commit }, detail) {
    commit('ADD_CONNECTION', detail);
  },
};

const ConnectionModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    list: list as unknown as Array<Connection>,
  },
};

export default ConnectionModule;
