import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/giga-pops.json';

interface StateInterface {
  prop: boolean
}
type Contacts = {
  mail: string
  name: string
  phone: string
}

type GigaPops = {
  address: string
  contacts: Array<Contacts>
  giga_pops: string
  id: number
  remark: string
}

type State = {
  list: Array<GigaPops>
}

const getters: GetterTree<State, StateInterface> = {
  getGigaPopsList(state) {
    return state.list;
  },
};

const mutations: MutationTree<State> = {
  SET_GIGA_POPS_LIST(state, list) {
    state.list = list;
  },
  SET_GIGA_POPS(state, detail: GigaPops) {
    const index = state.list.findIndex((w) => w.id === detail.id);
    state.list[index] = detail;
  },
  ADD_GIGA_POPS(state, detail: GigaPops) {
    state.list.push(detail);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setGigaPopsList({ commit }, list) {
    commit('SET_GIGA_POPS_LIST', list);
  },
  setGigaPops({ commit }, detail) {
    commit('SET_GIGA_POPS', detail);
  },
  addGigaPops({ commit }, detail) {
    commit('ADD_GIGA_POPS', detail);
  },
};

const GigaPopsModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    list: list as unknown as Array<GigaPops>,
  },
};

export default GigaPopsModule;
