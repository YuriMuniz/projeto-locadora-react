import { takeLatest, call, put, all } from "redux-saga/effects";

import { toast } from "react-toastify";

import { signInSuccess, signFailure } from "./actions";

import history from "../../../services/history";
import { useNavigate } from "react-router-dom";

import api from "../../../services/api";

export type PromiseFn = (...args: any) => Promise<any>;
export type GetT<T> = T extends Promise<infer N> ? N : any;
export type GetFnResult<T extends PromiseFn> = GetT<ReturnType<T>>;

export function* signIn({ payload }: any) {
  try {
    const { email, password } = payload;

    const response: GetFnResult<typeof api>  = yield call(api.post, "auth", {
      login: email,
      password,
    });

    const { token, login } = response.data;
        
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    yield put(signInSuccess(token, login));
    window.location.href = '/movies'
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados");
    yield put(signFailure());
  }
}


export function setToken({ payload }: any) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
