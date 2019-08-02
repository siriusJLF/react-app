

import defaultState from './defaultState'

export const initData = (state = defaultState, action) => {
  switch (action.type) {
    case 'setContractList':
      return { ...state, contractList: action.data };
    case 'setUserInfo':
      let { userInfo, memu, authKey, sessionId } = action.data
      return { ...state, userInfo, memu, authKey, sessionId, hasLogin: true }
    case 'setDefaultSelectedKeys':
      return { ...state, defaultSelectedKeys: action.data };
    default: return state;
  }
}