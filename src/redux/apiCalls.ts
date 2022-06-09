import { publicRequest } from "../services/api";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { loginFailure, loginStart, loginSuccess, logoutFailure, logoutStart, logoutSuccess } from "./userRedux"
import { removeSuccess } from "./cartRedux";

export const login = async (dispatch: (arg0: { payload: any; type: string; }) => void, user: any) => {

  dispatch(loginStart());

  try {
    const response = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(response.data))

    const accessToken = response.data.accessToken;

    setCookie(null, 'TOKEN', accessToken, {
      maxAge: 86400,
      path: '/'
    });

  } catch (error) {
    dispatch(loginFailure());
  }
}

export const logout = async (dispatch: ((arg0: { payload: undefined; type: string; }) => void)) => {

  dispatch(logoutStart());

  try {

    const cookies = parseCookies();
    const { TOKEN } = cookies;

    destroyCookie(null, 'TOKEN', TOKEN);

    const userCurrent = {
      _id: '',
      username: '',
      email: '',
      img: '',
      isAdmin: false,
      accessToken: '',
      createdAt: '',
      updatedAt: '',
    }

    dispatch(logoutSuccess(userCurrent))

  } catch (error) {
    dispatch(logoutFailure());
  }
}


export const clearCart = async (dispatch: ((arg0: { payload: undefined; type: string; }) => void)) => {

  try {

    const productCurrent = {
      _id: '',
      title: '',
      description: '',
      img: '',
      categories: [],
      size: '',
      color: '',
      price: '',
      inStock: true,
      createdAt: '',
      updatedAt: '',
    }

    dispatch(removeSuccess(productCurrent))

  } catch (error) {
    console.log(error)
  }
}