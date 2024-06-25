import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { ColorType } from '~/utils/color'

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
  }
  sideMenuSettings: {
    absolute: boolean
    clipped: boolean
    color: ColorType
    fixed: boolean
    floating: boolean
    permanent: boolean
    right: boolean
    width: number
  }
}

const getters: GetterTree<State, StateInterface> = {
  getHeaderSetting(state) {
    return state.headerSettings
  },
  getSideMenuSetting(state) {
    return state.sideMenuSettings
  },
}

const mutations: MutationTree<State> = {
  SET_HEADER_SETTING(state, setting) {
    state.headerSettings = setting
  },
  SET_SIDE_MENU_SETTING(state, setting) {
    state.sideMenuSettings = setting
  },
}

const actions: ActionTree<State, StateInterface> = {
  setHeaderSetting({ commit }, setting) {
    commit('SET_HEADER_SETTING', setting)
  },
  setSideMenuSetting({ commit }, setting) {
    commit('SET_SIDE_MENU_SETTING', setting)
  },
}

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
    },
    sideMenuSettings: {
      absolute: false,
      clipped: false,
      color: 'aside',
      fixed: false,
      floating: false,
      permanent: false,
      right: false,
      width: 280,
    },
  },
}

export default commonModule
