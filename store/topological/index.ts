import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/topological.json';

interface StateInterface {
  prop: boolean
}
type Topological = {
  id: number
  name: string
  creator: string
  createTime: string
  latestUpdateTime: string
}

type State = {
  list: Array<Topological>
}

const getters: GetterTree<State, StateInterface> = {
  getTopologicalList(state) {
    return state.list;
  },
};

const mutations: MutationTree<State> = {
  SET_TOPOLOGICAL_LIST(state, list) {
    state.list = list;
  },
  SET_TOPOLOGICAL(state, detail: Topological) {
    const index = state.list.findIndex((w) => w.id === detail.id);
    state.list[index] = detail;
  },
  ADD_TOPOLOGICAL(state, detail: Topological) {
    state.list.push(detail);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setTopologicalList({ commit }, list) {
    commit('SET_TOPOLOGICAL_LIST', list);
  },
  setTopological({ commit }, detail) {
    commit('SET_TOPOLOGICAL', detail);
  },
  addTopological({ commit }, detail) {
    commit('ADD_TOPOLOGICAL', detail);
  },
};

const TopologicalModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    list: list as unknown as Array<Topological>,
  },
};

export default TopologicalModule;
