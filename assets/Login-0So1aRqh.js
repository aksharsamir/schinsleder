import { BButton } from "bootstrap-vue-next/components/BButton";
import { BForm, BFormInvalidFeedback } from "bootstrap-vue-next/components/BForm";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { ref, computed, watch, onMounted, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { _ as _sfc_main$1 } from "./AppLayout-CdCGV8yT.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-DwhHUqbs.js";
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";
import { u as useLogin } from "./login-N1PjRolI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/components/BLink";
import "bootstrap-vue-next/components/BImg";
import "./products-Dsi6ZmTY.js";
import "axios";
import "../entry-server.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vuex-router-sync";
import "vue3-lazyload";
import "@gtm-support/vue-gtm";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BNav";
import "vue-cookies";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const { login } = useLogin();
    const { t } = useI18n();
    const router = useRouter();
    const store = useStore();
    const isClient = ref(false);
    const form = ref({
      email: "",
      password: ""
    });
    const loginValidation = ref({
      emailState: null,
      emailError: "",
      passwordState: null,
      passwordError: ""
    });
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const onLoginFormSubmit = () => {
      let formValid = true;
      if (loginValidation.value.emailState !== true) {
        validateEmail();
        if (loginValidation.value.emailState !== true) {
          formValid = false;
        }
      }
      if (loginValidation.value.passwordState !== true) {
        validatePassword();
        if (loginValidation.value.passwordState !== true) {
          formValid = false;
        }
      }
      if (formValid) {
        login(form.value);
      }
    };
    const validateEmail = () => {
      if (form.value.email.length === 0) {
        loginValidation.value.emailState = false;
        loginValidation.value.emailError = t("email_is_required_field");
        return false;
      }
      if (!emailReg.test(form.value.email)) {
        loginValidation.value.emailState = false;
        loginValidation.value.emailError = t("email_is_invalid_field");
        return false;
      }
      loginValidation.value.emailState = true;
      return true;
    };
    const validatePassword = () => {
      if (form.value.password.length === 0) {
        loginValidation.value.passwordState = false;
        loginValidation.value.passwordError = t("password_is_required_field");
        return false;
      }
      loginValidation.value.passwordState = true;
      return true;
    };
    useHead({
      title: () => t("login"),
      meta: [
        { name: "title", content: () => t("login") },
        { name: "keywords", content: () => t("login") },
        { name: "description", content: () => t("login") }
      ]
    });
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    watch(isLoggedIn, (newVal) => {
      if (newVal) {
        router.push({ name: "account" });
      }
    });
    onMounted(() => {
      const bcrumb = { current: t("login"), routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BForm = BForm;
      const _component_BFormInput = BFormInput;
      const _component_BFormInvalidFeedback = BFormInvalidFeedback;
      const _component_BButton = BButton;
      const _component_router_link = resolveComponent("router-link");
      if (isClient.value) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({ wrapperClass: "login" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
              _push2(`<section class="ps-md-20 p-15 pt-0" data-v-0df0783d${_scopeId}><h1 class="title" data-v-0df0783d${_scopeId}>${ssrInterpolate(unref(t)("login"))}</h1><div class="login-component" data-v-0df0783d${_scopeId}><div class="d-flex flex-column flex-md-row justify-content-between" data-v-0df0783d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BForm, {
                onSubmit: onLoginFormSubmit,
                novalidate: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BFormInput, {
                      id: "email",
                      modelValue: form.value.email,
                      "onUpdate:modelValue": ($event) => form.value.email = $event,
                      state: loginValidation.value.emailState,
                      placeholder: unref(t)("email"),
                      onBlur: validateEmail,
                      type: "email",
                      required: "",
                      "aria-describedby": "email-feedback"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(loginValidation.value.emailError)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(loginValidation.value.emailError), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BFormInput, {
                      id: "password",
                      modelValue: form.value.password,
                      "onUpdate:modelValue": ($event) => form.value.password = $event,
                      type: "password",
                      required: "",
                      placeholder: unref(t)("password"),
                      state: loginValidation.value.passwordState,
                      onBlur: validatePassword,
                      "aria-describedby": "password-feedback"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(loginValidation.value.passwordError)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(loginValidation.value.passwordError), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BButton, {
                      type: "submit",
                      variant: "secondary",
                      class: "ml-20 form-submit-btn"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("login"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("login")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="mt-10" data-v-0df0783d${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_router_link, {
                      to: "/forgot-password",
                      class: "font-weight-normal d-block"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("password_forgot"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("password_forgot")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_router_link, {
                      to: { name: "create-account" },
                      class: "font-weight-normal d-block"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("become_a_customer"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("become_a_customer")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_component_BFormInput, {
                        id: "email",
                        modelValue: form.value.email,
                        "onUpdate:modelValue": ($event) => form.value.email = $event,
                        state: loginValidation.value.emailState,
                        placeholder: unref(t)("email"),
                        onBlur: validateEmail,
                        type: "email",
                        required: "",
                        "aria-describedby": "email-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state", "placeholder"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(loginValidation.value.emailError), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormInput, {
                        id: "password",
                        modelValue: form.value.password,
                        "onUpdate:modelValue": ($event) => form.value.password = $event,
                        type: "password",
                        required: "",
                        placeholder: unref(t)("password"),
                        state: loginValidation.value.passwordState,
                        onBlur: validatePassword,
                        "aria-describedby": "password-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(loginValidation.value.passwordError), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BButton, {
                        type: "submit",
                        variant: "secondary",
                        class: "ml-20 form-submit-btn"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("login")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "mt-10" }, [
                        createVNode(_component_router_link, {
                          to: "/forgot-password",
                          class: "font-weight-normal d-block"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("password_forgot")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_router_link, {
                          to: { name: "create-account" },
                          class: "font-weight-normal d-block"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("become_a_customer")), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></section>`);
            } else {
              return [
                createVNode(_sfc_main$2),
                createVNode("section", { class: "ps-md-20 p-15 pt-0" }, [
                  createVNode("h1", { class: "title" }, toDisplayString(unref(t)("login")), 1),
                  createVNode("div", { class: "login-component" }, [
                    createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between" }, [
                      createVNode(_component_BForm, {
                        onSubmit: withModifiers(onLoginFormSubmit, ["prevent"]),
                        novalidate: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "email",
                            modelValue: form.value.email,
                            "onUpdate:modelValue": ($event) => form.value.email = $event,
                            state: loginValidation.value.emailState,
                            placeholder: unref(t)("email"),
                            onBlur: validateEmail,
                            type: "email",
                            required: "",
                            "aria-describedby": "email-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state", "placeholder"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(loginValidation.value.emailError), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BFormInput, {
                            id: "password",
                            modelValue: form.value.password,
                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                            type: "password",
                            required: "",
                            placeholder: unref(t)("password"),
                            state: loginValidation.value.passwordState,
                            onBlur: validatePassword,
                            "aria-describedby": "password-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(loginValidation.value.passwordError), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BButton, {
                            type: "submit",
                            variant: "secondary",
                            class: "ml-20 form-submit-btn"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("login")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "mt-10" }, [
                            createVNode(_component_router_link, {
                              to: "/forgot-password",
                              class: "font-weight-normal d-block"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("password_forgot")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_router_link, {
                              to: { name: "create-account" },
                              class: "font-weight-normal d-block"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("become_a_customer")), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0df0783d"]]);
export {
  Login as default
};
//# sourceMappingURL=Login-0So1aRqh.js.map
