import axios from 'axios';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from './actionTypes';
import { jwtDecode } from 'jwt-decode';

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    try {
      const response = await axios.post('http://localhost:3010/login', {
        email,
        password,
      });

      const userJWT = jwtDecode(response.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: userJWT,
          token: response.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: 'Error al iniciar sesión',
      });
    }
  };

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
