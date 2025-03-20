import { BForm, BFormInvalidFeedback } from "bootstrap-vue-next/components/BForm";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BFormGroup } from "bootstrap-vue-next/components/BFormGroup";
import { BButton } from "bootstrap-vue-next/components/BButton";
import { BContainer, BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, computed, watch, onMounted, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-BN1xAQs-.js";
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";
import { u as useLogin } from "./login-N1PjRolI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
import "bootstrap-vue-next/components/BLink";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@element-plus/icons-vue";
import "./BlockSimple-BHbXwFf2.js";
import "vue-cookies";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const { login } = useLogin();
    const { t } = useI18n();
    const router = useRouter();
    const store = useStore();
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
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BButton = BButton;
      const _component_BForm = BForm;
      const _component_BFormGroup = BFormGroup;
      const _component_BFormInput = BFormInput;
      const _component_BFormInvalidFeedback = BFormInvalidFeedback;
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`<section class="login" data-v-2fcf9fa4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BCol, {
                          "offset-lg": "1",
                          "offset-xl": "2",
                          lg: "10",
                          xl: "8",
                          class: "position-relative"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="login-title text-white" data-v-2fcf9fa4${_scopeId4}>${ssrInterpolate(_ctx.$t("login"))}</span><div class="login-component" data-v-2fcf9fa4${_scopeId4}><div class="d-flex flex-column flex-md-row justify-content-between" data-v-2fcf9fa4${_scopeId4}><div class="info login--inner-component pb-25 pb-md-0" data-v-2fcf9fa4${_scopeId4}><span class="title d-block" data-v-2fcf9fa4${_scopeId4}>${ssrInterpolate(_ctx.$t("new_customers"))}</span><p class="mb-15 mb-md-45" data-v-2fcf9fa4${_scopeId4}>${ssrInterpolate(_ctx.$t("register_info"))}</p><div class="text-end py-4" data-v-2fcf9fa4${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_BButton, {
                                onClick: ($event) => _ctx.$router.push({ name: "create-account" }),
                                variant: "info",
                                class: "text-white py-3 px-15"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("create_account"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("create_account")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><div class="form login--inner-component pt-25 pt-md-0" data-v-2fcf9fa4${_scopeId4}><span class="title d-block" data-v-2fcf9fa4${_scopeId4}>${ssrInterpolate(_ctx.$t("registered_customers"))}</span><span class="form-description d-block mb-30" data-v-2fcf9fa4${_scopeId4}>${ssrInterpolate(_ctx.$t("account_login"))}</span>`);
                              _push5(ssrRenderComponent(_component_BForm, {
                                onSubmit: onLoginFormSubmit,
                                novalidate: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BFormGroup, {
                                      class: "mb-6",
                                      id: "email-group",
                                      label: _ctx.$t("req_email"),
                                      "label-for": "email"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_BFormInput, {
                                            id: "email",
                                            modelValue: form.value.email,
                                            "onUpdate:modelValue": ($event) => form.value.email = $event,
                                            state: loginValidation.value.emailState,
                                            onBlur: validateEmail,
                                            type: "email",
                                            required: "",
                                            "aria-describedby": "email-feedback"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(loginValidation.value.emailError)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(loginValidation.value.emailError), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_BFormInput, {
                                              id: "email",
                                              modelValue: form.value.email,
                                              "onUpdate:modelValue": ($event) => form.value.email = $event,
                                              state: loginValidation.value.emailState,
                                              onBlur: validateEmail,
                                              type: "email",
                                              required: "",
                                              "aria-describedby": "email-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(loginValidation.value.emailError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_BFormGroup, {
                                      class: "mb-6",
                                      id: "password-group",
                                      label: _ctx.$t("req_password"),
                                      "label-for": "password"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_BFormInput, {
                                            id: "password",
                                            modelValue: form.value.password,
                                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                                            type: "password",
                                            required: "",
                                            state: loginValidation.value.passwordState,
                                            onBlur: validatePassword,
                                            "aria-describedby": "password-feedback"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(loginValidation.value.passwordError)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(loginValidation.value.passwordError), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_BFormInput, {
                                              id: "password",
                                              modelValue: form.value.password,
                                              "onUpdate:modelValue": ($event) => form.value.password = $event,
                                              type: "password",
                                              required: "",
                                              state: loginValidation.value.passwordState,
                                              onBlur: validatePassword,
                                              "aria-describedby": "password-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(loginValidation.value.passwordError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span class="form-info mb-15 d-block" data-v-2fcf9fa4${_scopeId5}>${ssrInterpolate(_ctx.$t("required_fields"))}</span><div class="d-flex justify-content-between align-items-center" data-v-2fcf9fa4${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_router_link, {
                                      to: "/forgot-password",
                                      class: "font-weight-normal link-underline"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(_ctx.$t("password_forgot"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(_ctx.$t("password_forgot")), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_BButton, {
                                      type: "submit",
                                      variant: "info",
                                      class: "text-white ml-20 form-submit-btn"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(_ctx.$t("login"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(_ctx.$t("login")), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode(_component_BFormGroup, {
                                        class: "mb-6",
                                        id: "email-group",
                                        label: _ctx.$t("req_email"),
                                        "label-for": "email"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BFormInput, {
                                            id: "email",
                                            modelValue: form.value.email,
                                            "onUpdate:modelValue": ($event) => form.value.email = $event,
                                            state: loginValidation.value.emailState,
                                            onBlur: validateEmail,
                                            type: "email",
                                            required: "",
                                            "aria-describedby": "email-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(loginValidation.value.emailError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_BFormGroup, {
                                        class: "mb-6",
                                        id: "password-group",
                                        label: _ctx.$t("req_password"),
                                        "label-for": "password"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BFormInput, {
                                            id: "password",
                                            modelValue: form.value.password,
                                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                                            type: "password",
                                            required: "",
                                            state: loginValidation.value.passwordState,
                                            onBlur: validatePassword,
                                            "aria-describedby": "password-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(loginValidation.value.passwordError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode("span", { class: "form-info mb-15 d-block" }, toDisplayString(_ctx.$t("required_fields")), 1),
                                      createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                                        createVNode(_component_router_link, {
                                          to: "/forgot-password",
                                          class: "font-weight-normal link-underline"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("password_forgot")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_BButton, {
                                          type: "submit",
                                          variant: "info",
                                          class: "text-white ml-20 form-submit-btn"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("login")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div></div>`);
                            } else {
                              return [
                                createVNode("span", { class: "login-title text-white" }, toDisplayString(_ctx.$t("login")), 1),
                                createVNode("div", { class: "login-component" }, [
                                  createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between" }, [
                                    createVNode("div", { class: "info login--inner-component pb-25 pb-md-0" }, [
                                      createVNode("span", { class: "title d-block" }, toDisplayString(_ctx.$t("new_customers")), 1),
                                      createVNode("p", { class: "mb-15 mb-md-45" }, toDisplayString(_ctx.$t("register_info")), 1),
                                      createVNode("div", { class: "text-end py-4" }, [
                                        createVNode(_component_BButton, {
                                          onClick: ($event) => _ctx.$router.push({ name: "create-account" }),
                                          variant: "info",
                                          class: "text-white py-3 px-15"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("create_account")), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "form login--inner-component pt-25 pt-md-0" }, [
                                      createVNode("span", { class: "title d-block" }, toDisplayString(_ctx.$t("registered_customers")), 1),
                                      createVNode("span", { class: "form-description d-block mb-30" }, toDisplayString(_ctx.$t("account_login")), 1),
                                      createVNode(_component_BForm, {
                                        onSubmit: withModifiers(onLoginFormSubmit, ["prevent"]),
                                        novalidate: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BFormGroup, {
                                            class: "mb-6",
                                            id: "email-group",
                                            label: _ctx.$t("req_email"),
                                            "label-for": "email"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_BFormInput, {
                                                id: "email",
                                                modelValue: form.value.email,
                                                "onUpdate:modelValue": ($event) => form.value.email = $event,
                                                state: loginValidation.value.emailState,
                                                onBlur: validateEmail,
                                                type: "email",
                                                required: "",
                                                "aria-describedby": "email-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(loginValidation.value.emailError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["label"]),
                                          createVNode(_component_BFormGroup, {
                                            class: "mb-6",
                                            id: "password-group",
                                            label: _ctx.$t("req_password"),
                                            "label-for": "password"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_BFormInput, {
                                                id: "password",
                                                modelValue: form.value.password,
                                                "onUpdate:modelValue": ($event) => form.value.password = $event,
                                                type: "password",
                                                required: "",
                                                state: loginValidation.value.passwordState,
                                                onBlur: validatePassword,
                                                "aria-describedby": "password-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(loginValidation.value.passwordError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["label"]),
                                          createVNode("span", { class: "form-info mb-15 d-block" }, toDisplayString(_ctx.$t("required_fields")), 1),
                                          createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                                            createVNode(_component_router_link, {
                                              to: "/forgot-password",
                                              class: "font-weight-normal link-underline"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("password_forgot")), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_BButton, {
                                              type: "submit",
                                              variant: "info",
                                              class: "text-white ml-20 form-submit-btn"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("login")), 1)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BCol, {
                            "offset-lg": "1",
                            "offset-xl": "2",
                            lg: "10",
                            xl: "8",
                            class: "position-relative"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "login-title text-white" }, toDisplayString(_ctx.$t("login")), 1),
                              createVNode("div", { class: "login-component" }, [
                                createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between" }, [
                                  createVNode("div", { class: "info login--inner-component pb-25 pb-md-0" }, [
                                    createVNode("span", { class: "title d-block" }, toDisplayString(_ctx.$t("new_customers")), 1),
                                    createVNode("p", { class: "mb-15 mb-md-45" }, toDisplayString(_ctx.$t("register_info")), 1),
                                    createVNode("div", { class: "text-end py-4" }, [
                                      createVNode(_component_BButton, {
                                        onClick: ($event) => _ctx.$router.push({ name: "create-account" }),
                                        variant: "info",
                                        class: "text-white py-3 px-15"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("create_account")), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "form login--inner-component pt-25 pt-md-0" }, [
                                    createVNode("span", { class: "title d-block" }, toDisplayString(_ctx.$t("registered_customers")), 1),
                                    createVNode("span", { class: "form-description d-block mb-30" }, toDisplayString(_ctx.$t("account_login")), 1),
                                    createVNode(_component_BForm, {
                                      onSubmit: withModifiers(onLoginFormSubmit, ["prevent"]),
                                      novalidate: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BFormGroup, {
                                          class: "mb-6",
                                          id: "email-group",
                                          label: _ctx.$t("req_email"),
                                          "label-for": "email"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_BFormInput, {
                                              id: "email",
                                              modelValue: form.value.email,
                                              "onUpdate:modelValue": ($event) => form.value.email = $event,
                                              state: loginValidation.value.emailState,
                                              onBlur: validateEmail,
                                              type: "email",
                                              required: "",
                                              "aria-describedby": "email-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(loginValidation.value.emailError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        createVNode(_component_BFormGroup, {
                                          class: "mb-6",
                                          id: "password-group",
                                          label: _ctx.$t("req_password"),
                                          "label-for": "password"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_BFormInput, {
                                              id: "password",
                                              modelValue: form.value.password,
                                              "onUpdate:modelValue": ($event) => form.value.password = $event,
                                              type: "password",
                                              required: "",
                                              state: loginValidation.value.passwordState,
                                              onBlur: validatePassword,
                                              "aria-describedby": "password-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(loginValidation.value.passwordError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        createVNode("span", { class: "form-info mb-15 d-block" }, toDisplayString(_ctx.$t("required_fields")), 1),
                                        createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                                          createVNode(_component_router_link, {
                                            to: "/forgot-password",
                                            class: "font-weight-normal link-underline"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("password_forgot")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_BButton, {
                                            type: "submit",
                                            variant: "info",
                                            class: "text-white ml-20 form-submit-btn"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("login")), 1)
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
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_BCol, {
                          "offset-lg": "1",
                          "offset-xl": "2",
                          lg: "10",
                          xl: "8",
                          class: "position-relative"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "login-title text-white" }, toDisplayString(_ctx.$t("login")), 1),
                            createVNode("div", { class: "login-component" }, [
                              createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between" }, [
                                createVNode("div", { class: "info login--inner-component pb-25 pb-md-0" }, [
                                  createVNode("span", { class: "title d-block" }, toDisplayString(_ctx.$t("new_customers")), 1),
                                  createVNode("p", { class: "mb-15 mb-md-45" }, toDisplayString(_ctx.$t("register_info")), 1),
                                  createVNode("div", { class: "text-end py-4" }, [
                                    createVNode(_component_BButton, {
                                      onClick: ($event) => _ctx.$router.push({ name: "create-account" }),
                                      variant: "info",
                                      class: "text-white py-3 px-15"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("create_account")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]),
                                createVNode("div", { class: "form login--inner-component pt-25 pt-md-0" }, [
                                  createVNode("span", { class: "title d-block" }, toDisplayString(_ctx.$t("registered_customers")), 1),
                                  createVNode("span", { class: "form-description d-block mb-30" }, toDisplayString(_ctx.$t("account_login")), 1),
                                  createVNode(_component_BForm, {
                                    onSubmit: withModifiers(onLoginFormSubmit, ["prevent"]),
                                    novalidate: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BFormGroup, {
                                        class: "mb-6",
                                        id: "email-group",
                                        label: _ctx.$t("req_email"),
                                        "label-for": "email"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BFormInput, {
                                            id: "email",
                                            modelValue: form.value.email,
                                            "onUpdate:modelValue": ($event) => form.value.email = $event,
                                            state: loginValidation.value.emailState,
                                            onBlur: validateEmail,
                                            type: "email",
                                            required: "",
                                            "aria-describedby": "email-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(loginValidation.value.emailError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_BFormGroup, {
                                        class: "mb-6",
                                        id: "password-group",
                                        label: _ctx.$t("req_password"),
                                        "label-for": "password"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BFormInput, {
                                            id: "password",
                                            modelValue: form.value.password,
                                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                                            type: "password",
                                            required: "",
                                            state: loginValidation.value.passwordState,
                                            onBlur: validatePassword,
                                            "aria-describedby": "password-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(loginValidation.value.passwordError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode("span", { class: "form-info mb-15 d-block" }, toDisplayString(_ctx.$t("required_fields")), 1),
                                      createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                                        createVNode(_component_router_link, {
                                          to: "/forgot-password",
                                          class: "font-weight-normal link-underline"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("password_forgot")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_BButton, {
                                          type: "submit",
                                          variant: "info",
                                          class: "text-white ml-20 form-submit-btn"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("login")), 1)
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
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode(_sfc_main$2),
              createVNode("section", { class: "login" }, [
                createVNode(_component_BContainer, null, {
                  default: withCtx(() => [
                    createVNode(_component_BRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_BCol, {
                          "offset-lg": "1",
                          "offset-xl": "2",
                          lg: "10",
                          xl: "8",
                          class: "position-relative"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "login-title text-white" }, toDisplayString(_ctx.$t("login")), 1),
                            createVNode("div", { class: "login-component" }, [
                              createVNode("div", { class: "d-flex flex-column flex-md-row justify-content-between" }, [
                                createVNode("div", { class: "info login--inner-component pb-25 pb-md-0" }, [
                                  createVNode("span", { class: "title d-block" }, toDisplayString(_ctx.$t("new_customers")), 1),
                                  createVNode("p", { class: "mb-15 mb-md-45" }, toDisplayString(_ctx.$t("register_info")), 1),
                                  createVNode("div", { class: "text-end py-4" }, [
                                    createVNode(_component_BButton, {
                                      onClick: ($event) => _ctx.$router.push({ name: "create-account" }),
                                      variant: "info",
                                      class: "text-white py-3 px-15"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("create_account")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]),
                                createVNode("div", { class: "form login--inner-component pt-25 pt-md-0" }, [
                                  createVNode("span", { class: "title d-block" }, toDisplayString(_ctx.$t("registered_customers")), 1),
                                  createVNode("span", { class: "form-description d-block mb-30" }, toDisplayString(_ctx.$t("account_login")), 1),
                                  createVNode(_component_BForm, {
                                    onSubmit: withModifiers(onLoginFormSubmit, ["prevent"]),
                                    novalidate: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BFormGroup, {
                                        class: "mb-6",
                                        id: "email-group",
                                        label: _ctx.$t("req_email"),
                                        "label-for": "email"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BFormInput, {
                                            id: "email",
                                            modelValue: form.value.email,
                                            "onUpdate:modelValue": ($event) => form.value.email = $event,
                                            state: loginValidation.value.emailState,
                                            onBlur: validateEmail,
                                            type: "email",
                                            required: "",
                                            "aria-describedby": "email-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(loginValidation.value.emailError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_BFormGroup, {
                                        class: "mb-6",
                                        id: "password-group",
                                        label: _ctx.$t("req_password"),
                                        "label-for": "password"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BFormInput, {
                                            id: "password",
                                            modelValue: form.value.password,
                                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                                            type: "password",
                                            required: "",
                                            state: loginValidation.value.passwordState,
                                            onBlur: validatePassword,
                                            "aria-describedby": "password-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(loginValidation.value.passwordError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode("span", { class: "form-info mb-15 d-block" }, toDisplayString(_ctx.$t("required_fields")), 1),
                                      createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                                        createVNode(_component_router_link, {
                                          to: "/forgot-password",
                                          class: "font-weight-normal link-underline"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("password_forgot")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_BButton, {
                                          type: "submit",
                                          variant: "info",
                                          class: "text-white ml-20 form-submit-btn"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("login")), 1)
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
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2fcf9fa4"]]);
export {
  Login as default
};
//# sourceMappingURL=Login-OFSPjf9X.js.map
