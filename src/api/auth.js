import apiUrl from "../apiConfig";
import axios from "axios";

export const signUp = (credentials) => {
  return axios({
    method: "POST",
    url: apiUrl + "/sign-up/",
    data: {
      credentials: {
        username: credentials.username,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation,
      },
    },
  });
};

export const signIn = (credentials) => {
  return axios({
    url: apiUrl + "/sign-in/",
    method: "POST",
    data: {
      credentials: {
        username: credentials.username,
        password: credentials.password,
      },
    },
  });
};

export const showUsers = () => {
  return axios({
    url: apiUrl + "/users/",
    method: "GET",
  });
};

export const signOut = (user) => {
  return axios({
    url: apiUrl + "/sign-out/",
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
};

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + "/change-password/",
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword,
      },
    },
  });
};
