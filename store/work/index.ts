import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/work-order-list.json';

interface StateInterface {
  prop: boolean
}

type Work = {
  id: number
  workId: number
  resource: string
  desc: string
  source: string
  status: 'process' | 'done'
  assign: string
  process: string
  creator: string
  createTime: string
  closeTime: string
  group:string
}

type State = {
  workList: Array<Work>
}

const getters: GetterTree<State, StateInterface> = {
  getWorkList(state) {
    return state.workList;
  },
};

const mutations: MutationTree<State> = {
  SET_WORK_LIST(state, list) {
    state.workList = list;
  },
  SET_WORK(state, work: Work) {
    const index = state.workList.findIndex((w) => w.id === work.id);
    state.workList[index] = work;
  },
  ADD_WORK(state, work) {
    state.workList.push(work);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setWorkList({ commit }, list) {
    commit('SET_WORK_LIST', list);
  },
  setWork({ commit }, work) {
    commit('SET_WORK', work);
  },
  addWork({ commit }, work) {
    commit('ADD_WORK', work);
  },
};

const workModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    workList: list as unknown as Array<Work>,
  },
};

export default workModule;
