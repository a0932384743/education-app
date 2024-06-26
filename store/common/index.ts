import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { ColorType } from '~/utils/color';

interface StateInterface {
  prop: boolean
}

type State = {
  headerSettings: {
    color: ColorType
    dense: boolean
    elevation: number
    flat: boolean
    outlined: boolean
    prominent: boolean
    rounded: boolean
    shaped: boolean
    absolute: boolean
  }
  sideMenuSettings: {
    absolute: boolean
    clipped: boolean
    color: ColorType
    miniVariant: boolean
    floating: boolean
    permanent: boolean
    width: number
  }
  footerSettings: {
    absolute: boolean
    clipped: boolean
    color: ColorType
    inset: boolean
    outlined: boolean
    shaped: boolean
    height: number
    elevation: number
    padless: boolean
  }
}

const getters: GetterTree<State, StateInterface> = {
  getHeaderSetting(state) {
    return state.headerSettings;
  },
  getSideMenuSetting(state) {
    return state.sideMenuSettings;
  },
  getFooterSetting(state) {
    return state.footerSettings;
  },
};

const mutations: MutationTree<State> = {
  SET_HEADER_SETTING(state, setting) {
    state.headerSettings = setting;
  },
  SET_SIDE_MENU_SETTING(state, setting) {
    state.sideMenuSettings = setting;
  },
  SET_FOOTER_SETTING(state, setting) {
    state.footerSettings = setting;
  },
};

const actions: ActionTree<State, StateInterface> = {
  setHeaderSetting({ commit }, setting) {
    commit('SET_HEADER_SETTING', setting);
  },
  setSideMenuSetting({ commit }, setting) {
    commit('SET_SIDE_MENU_SETTING', setting);
  },
  setFooterSetting({ commit }, setting) {
    commit('SET_FOOTER_SETTING', setting);
  },
};

const commonModule: Module<State, StateInterface> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: {
    headerSettings: {
      color: 'header',
      dense: false,
      elevation: 5,
      flat: false,
      outlined: true,
      prominent: false,
      rounded: false,
      shaped: false,
      absolute: false,
    },
    sideMenuSettings: {
      absolute: false,
      clipped: false,
      color: 'aside',
      miniVariant: false,
      floating: false,
      permanent: false,
      width: 280,
    },
    footerSettings: {
      absolute: true,
      clipped: false,
      color: 'footer',
      inset: true,
      outlined: false,
      shaped: false,
      height: 60,
      elevation: 10,
      padless: false,
    },
  },
};

export default commonModule;
