import { getUser } from '../api/getData'
import { GET_USERINFO } from './mutationTypes'
export default {
  async getUserInfo ({
    commit,
    state
  }) {
    let res = await getUser()
    commit(GET_USERINFO, res)
  }
}