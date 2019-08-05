import $api from '@/api'

export const getContractList = () => {
  return async dispatch => { // 异步的action
    try {
      let res = await $api.post('/common/service_list', {
        action_id: '0c0a2b9cd16e9594774c2979951d709b4',
        pid: '79ff0e6ef55fc2e14cfdc4b81193de6f70'
      })
      if (res.code === 200) {
        dispatch({
          type: 'setContractList',
          data: res.data
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const setUserInfo = (payload) => {
  return {
    type: "setUserInfo",
    data: payload
  }
}
// 设置左边导航默认值
export const setDefaultSelectedKeys = (val) => {
  return {
    type: "setDefaultSelectedKeys",
    data: val
  }
}



