import { publicRequest } from "../services/api";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch: (arg0: { payload: any; type: string; }) => void, user: any) => {

  dispatch(loginStart());

  try {
    const response = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(response.data))

  } catch (error) {
    dispatch(loginFailure(error))
  }
}