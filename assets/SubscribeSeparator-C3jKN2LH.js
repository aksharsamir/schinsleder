import { computed, onMounted, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/email-icon-CC7s4i59.png";
function useNewsletter() {
  const store = useStore();
  const { t } = useI18n();
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
  const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
  onMounted(async () => {
    await store.dispatch("user/loadUser", { store });
  });
  const subscribe = async (email) => {
    let valid = true;
    if (email === "") {
      const msg = {
        type: "danger",
        title: t("newsletter_error"),
        text: t("email_is_required_field")
      };
      store.dispatch("messages/sendMessage", { message: msg });
      valid = false;
    } else if (!emailReg.test(email)) {
      const msg = {
        type: "danger",
        title: t("newsletter_error"),
        text: t("email_is_invalid_field")
      };
      store.dispatch("messages/sendMessage", { message: msg });
      valid = false;
    }
    if (valid) {
      const retval = await store.dispatch("user/newsletterSignup", { email, store });
      if (retval !== false) {
        const msg = {
          type: "success",
          title: t("newsletter_success"),
          text: t("newsletter_subscribed")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      }
    }
  };
  return {
    isLoggedIn,
    subscribe
  };
}
const _sfc_main = {
  __name: "SubscribeSeparator",
  __ssrInlineRender: true,
  setup(__props) {
    useNewsletter();
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "subscribeSeparator text-light" }, _attrs))} data-v-0cea7a40><div class="container" data-v-0cea7a40><div class="d-flex flex-column flex-lg-row align-items-center justify-content-center bg-dark px-20 px-md-10 pl-xl-20" data-v-0cea7a40><div class="d-flex align-items-center mb-15 mb-lg-0" data-v-0cea7a40><div class="icon ratio" data-v-0cea7a40><img${ssrRenderAttr("src", _imports_0)} alt="email" data-v-0cea7a40></div><div class="text-center" data-v-0cea7a40><span class="d-block" data-v-0cea7a40>${ssrInterpolate(_ctx.$t("newsletter_advantage"))}</span><span class="d-block" data-v-0cea7a40>${ssrInterpolate(_ctx.$t("receive_newsletter"))}</span></div></div><form class="subscribe-form d-flex align-items-center" data-v-0cea7a40><input${ssrRenderAttr("value", email.value)} type="email" id="subscribe--email"${ssrRenderAttr("placeholder", _ctx.$t("newsletter_placeholder"))} class="text-dark" aria-label="Email" data-v-0cea7a40><button type="button" class="btn subscribe-button" data-v-0cea7a40>${ssrInterpolate(_ctx.$t("subscribe_newsletter"))}</button></form></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/SubscribeSeparator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SubscribeSeparator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0cea7a40"]]);
export {
  SubscribeSeparator as S
};
//# sourceMappingURL=SubscribeSeparator-C3jKN2LH.js.map
