import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/room-temperature-status.json';

interface StateInterface {
  prop: boolean
}

type tempAndHumi = {
  check_time: string
  current_temperature: number
  current_humidity: number
  device: string
  high_critical_temperature: number
  high_critical_humidity: number
  id: number
  location: string
  low_critical_temperature: number
  low_critical_humidity: number
  status: string
}

type State = {
  list: Array<tempAndHumi>
}

const getters: GetterTree<State, StateInterface> = {
  getTempAndHumiList(state) {
    return state.list;
  },
};

const mutations: MutationTree<State> = {
  SET_TEMP_ADD_HUMI_LIST(state, list) {
    state.list = list;
  },
  SET_TEMP_ADD_HUMI(state, detail: tempAndHumi) {
    const index = state.list.findIndex((w) => w.id === detail.id);
    state.list[index] = detail;
  },
  ADD_TEMP_ADD_HUMI(state, detail: tempAndHumi) {
    state.list.push(detail);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setTempAndHumiList({ commit }, list) {
    commit('SET_TEMP_ADD_HUMI_LIST', list);
  },
  setTempAndHumi({ commit }, detail) {
    commit('SET_TEMP_ADD_HUMI', detail);
  },
  addTempAndHumi({ commit }, detail) {
    commit('ADD_TEMP_ADD_HUMI', detail);
  },
};

const tempAndHumiModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    list: list as unknown as Array<tempAndHumi>,
  },
};

export default tempAndHumiModule;
