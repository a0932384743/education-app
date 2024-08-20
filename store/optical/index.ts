import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/optical-transmission-device.json';

interface StateInterface {
  prop: boolean
}
type Optical = {
  check_time: string
  device: string
  id: number
  optical_signal_to_noise_ratio: string
  pre_fec_bit_error_rate: string
  received_power: number
  uncorrectable_bit_errors: number
}

type State = {
  list: Array<Optical>
}

const getters: GetterTree<State, StateInterface> = {
  getOpticalList(state) {
    return state.list;
  },
};

const mutations: MutationTree<State> = {
  SET_OPTICAL_LIST(state, list) {
    state.list = list;
  },
  SET_OPTICAL(state, detail: Optical) {
    const index = state.list.findIndex((w) => w.id === detail.id);
    state.list[index] = detail;
  },
  ADD_OPTICAL(state, detail: Optical) {
    state.list.push(detail);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setOpticalList({ commit }, list) {
    commit('SET_OPTICAL_LIST', list);
  },
  setOptical({ commit }, detail) {
    commit('SET_OPTICAL', detail);
  },
  addOptical({ commit }, detail) {
    commit('ADD_OPTICAL', detail);
  },
};

const OpticalModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    list: list as unknown as Array<Optical>,
  },
};

export default OpticalModule;
