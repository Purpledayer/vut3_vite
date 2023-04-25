import { login, logout, getInfo } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/request/auth";
import Cookies from "js-cookie";
const user = {
  state: {
    token: getToken(),
    name: "",
    avatar: "",
    roles: [],
    permissions: [],
    userInfo: {},
    has_index: false,
    // 传感器列表
    sensorInfos: {},
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },
    SET_USERINFO: (state, info) => {
      state.userInfo = info;
    },
    SET_SENSORINFOS: (state, info) => {
      state.sensorInfos = info;
    },
    HAS_INDEXINFO(state, info) {
      state.has_index = info;
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      const password = userInfo.password;
      const code = userInfo.code;
      const uuid = userInfo.uuid;
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid)
          .then((res) => {
            setToken(res.token);
            getInfo().then((res) => {
              Cookies.set("userId", res.user.userId);
              resolve();
            });
            commit("SET_TOKEN", res.token);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((res) => {
            const user = res.user;
            const avatar =
              user.avatar == ""
                ? require("@/assets/images/profile.jpg")
                : process.env.VUE_APP_BASE_API + user.avatar;
            if (res.roles && res.roles.length > 0) {
              console.log(1231231313)
              // 验证返回的roles是否是一个非空数组
              commit("SET_ROLES", res.roles);
              commit("SET_PERMISSIONS", res.permissions);
              commit("SET_USERINFO", res.user);
            } else {
              commit("SET_ROLES", ["ROLE_DEFAULT"]);
            }
            commit("SET_NAME", user.userName);
            commit("SET_AVATAR", avatar);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit("SET_TOKEN", "");
            commit("SET_ROLES", []);
            commit("SET_PERMISSIONS", []);
            removeToken();
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    },
  },
};

export default user;
