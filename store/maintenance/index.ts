import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import list from '~/assets/json/maintenance-teams.json';

interface StateInterface {
  prop: boolean
}

type Maintenance = {
  company: string
  email: string
  fax: string
  id: number
  mobile: string
  phone: string
  remark: string
  title: string
  user: string
}

type State = {
  list: Array<Maintenance>
}

const getters: GetterTree<State, StateInterface> = {
  getMaintenanceList(state) {
    return state.list;
  },
};

const mutations: MutationTree<State> = {
  SET_MAINTENANCE_LIST(state, list) {
    state.list = list;
  },
  SET_MAINTENANCE(state, detail: Maintenance) {
    const index = state.list.findIndex((w) => w.id === detail.id);
    state.list[index] = detail;
  },
  ADD_MAINTENANCE(state, detail: Maintenance) {
    state.list.push(detail);
  },
};

const actions: ActionTree<State, StateInterface> = {
  setMaintenanceList({ commit }, list) {
    commit('SET_MAINTENANCE_LIST', list);
  },
  setMaintenance({ commit }, detail) {
    commit('SET_MAINTENANCE', detail);
  },
  addMaintenance({ commit }, detail) {
    commit('ADD_MAINTENANCE', detail);
  },
};

const MaintenanceModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    list: list as unknown as Array<Maintenance>,
  },
};

export default MaintenanceModule;
