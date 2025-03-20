import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
function useLogin() {
  const store = useStore();
  const { t } = useI18n();
  const login = async (loginData) => {
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
    let valid = true;
    let loginOk = false;
    if (loginData.email === "") {
      const msg = {
        type: "danger",
        title: t("login_error"),
        text: t("email_is_required_field")
      };
      store.dispatch("messages/sendMessage", { message: msg });
      valid = false;
    } else if (!emailReg.test(loginData.email)) {
      const msg = {
        type: "danger",
        title: t("login_error"),
        text: t("email_is_invalid_field")
      };
      store.dispatch("messages/sendMessage", { message: msg });
      valid = false;
    }
    if (loginData.password === "") {
      const msg = {
        type: "danger",
        title: t("login_error"),
        text: t("password_is_required_field")
      };
      store.dispatch("messages/sendMessage", { message: msg });
      valid = false;
    }
    if (valid) {
      loginOk = await store.dispatch("user/login", {
        username: loginData.email,
        password: loginData.password,
        store
      });
      if (loginOk) {
        const msg = {
          type: "success",
          title: t("login_success"),
          text: t("you_are_logged_in")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      }
    }
  };
  return { login };
}
export {
  useLogin as u
};
//# sourceMappingURL=login-N1PjRolI.js.map
