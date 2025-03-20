import { BButton } from "bootstrap-vue-next/components/BButton";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BFormGroup } from "bootstrap-vue-next/components/BFormGroup";
import { BFormInvalidFeedback } from "bootstrap-vue-next/components/BForm";
import { BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, computed, onMounted, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { _ as _sfc_main$1 } from "./AppLayout-CdCGV8yT.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-DwhHUqbs.js";
import { v as resetPassword } from "./user-B9wxceAo.js";
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";
import { useStore } from "vuex";
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
  __name: "ResetPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const store = useStore();
    const email = ref(route.query.email || "");
    const emailState = ref(null);
    const emailError = ref("");
    const description = ref("");
    const password = ref("");
    const passwordState = ref(null);
    const passwordError = ref("");
    const password_confirm = ref("");
    const password_confirmState = ref(null);
    const password_confirmError = ref("");
    const token = ref(route.query.token || "");
    const tokenState = ref(null);
    const tokenError = ref("");
    const emailReg = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    );
    computed(() => email.value.length > 0);
    const validateEmail = () => {
      if (email.value === "") {
        emailState.value = false;
        emailError.value = t("email_is_required_field");
        return false;
      }
      if (!emailReg.test(email.value)) {
        emailState.value = false;
        emailError.value = t("email_is_invalid_field");
        return false;
      }
      emailState.value = true;
      return true;
    };
    const validatePassword = () => {
      if (password.value.length < 8) {
        passwordState.value = false;
        passwordError.value = t("password_needs");
        return false;
      } else if (!/[a-z]/.test(password.value)) {
        passwordState.value = false;
        passwordError.value = t("password_needs");
        return false;
      } else if (!/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/.test(password.value)) {
        passwordState.value = false;
        passwordError.value = t("password_needs");
        return false;
      } else if (!/[A-Z]/.test(password.value)) {
        passwordState.value = false;
        passwordError.value = t("password_needs");
        return false;
      } else if (!/\d/.test(password.value)) {
        passwordState.value = false;
        passwordError.value = t("password_needs");
        return false;
      } else passwordState.value = true;
      return true;
    };
    const validateConfirmationPassword = () => {
      if (password.value !== password_confirm.value) {
        password_confirmState.value = false;
        password_confirmError.value = t("password_confirm_not_equal");
        return false;
      }
      password_confirmState.value = true;
      return true;
    };
    const validateToken = () => {
      if (token.value === "") {
        tokenState.value = false;
        tokenError.value = t("token_not_filled");
        return false;
      }
      tokenState.value = true;
      return true;
    };
    const formSubmit = async () => {
      if (validateEmail() && validatePassword() && validateConfirmationPassword() && validateToken()) {
        const retval = await resetPassword(email.value, token.value, password.value);
        if (retval === true) {
          description.value = t("password_resetted");
          router.push({ name: "login" });
        } else {
          description.value = t("password_not_resetted");
        }
      }
    };
    useHead({
      title: () => t("password_reset"),
      meta: [
        { name: "title", content: () => t("password_reset") },
        { name: "keywords", content: () => t("password_reset") },
        { name: "description", content: () => t("password_reset") }
      ]
    });
    onMounted(() => {
      const bcrumb = { current: t("password_reset"), routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BFormInvalidFeedback = BFormInvalidFeedback;
      const _component_BFormGroup = BFormGroup;
      const _component_BFormInput = BFormInput;
      const _component_BButton = BButton;
      _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ wrapperClass: "resetPassword" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BRow, {
              "no-gutters": "",
              class: "reset-password flex-column ps-md-15 p-15 pt-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BCol, {
                    md: "10",
                    lg: "7",
                    class: "mobile-form-email"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 data-v-8e0ae774${_scopeId3}>${ssrInterpolate(_ctx.$t("password_reset"))}</h1><p class="reset-password-text" data-v-8e0ae774${_scopeId3}>${ssrInterpolate(_ctx.$t("reset_password_text"))}</p><div data-v-8e0ae774${_scopeId3}><input id="token"${ssrRenderAttr("value", token.value)} type="hidden"${ssrRenderAttr("state", tokenState.value)} aria-describedby="token-feedback" data-v-8e0ae774${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "token-feedback" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(tokenError.value)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(tokenError.value), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_BFormGroup, {
                          class: "account-inputs mb-6",
                          id: "password-group",
                          "label-for": "password"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BFormInput, {
                                id: "password",
                                modelValue: password.value,
                                "onUpdate:modelValue": ($event) => password.value = $event,
                                type: "password",
                                placeholder: _ctx.$t("new_password"),
                                state: passwordState.value,
                                "aria-describedby": "password-feedback"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(passwordError.value)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(passwordError.value), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_BFormInput, {
                                  id: "password",
                                  modelValue: password.value,
                                  "onUpdate:modelValue": ($event) => password.value = $event,
                                  type: "password",
                                  placeholder: _ctx.$t("new_password"),
                                  state: passwordState.value,
                                  "aria-describedby": "password-feedback"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "state"]),
                                createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(passwordError.value), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BFormGroup, {
                          class: "account-inputs mb-6",
                          id: "password_confirm-group",
                          "label-for": "password_confirm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BFormInput, {
                                id: "password_confirm",
                                modelValue: password_confirm.value,
                                "onUpdate:modelValue": ($event) => password_confirm.value = $event,
                                type: "password",
                                placeholder: _ctx.$t("repeat_password"),
                                state: password_confirmState.value,
                                "aria-describedby": "password_confirm-feedback"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "password_confirm-feedback" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(password_confirmError.value)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(password_confirmError.value), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_BFormInput, {
                                  id: "password_confirm",
                                  modelValue: password_confirm.value,
                                  "onUpdate:modelValue": ($event) => password_confirm.value = $event,
                                  type: "password",
                                  placeholder: _ctx.$t("repeat_password"),
                                  state: password_confirmState.value,
                                  "aria-describedby": "password_confirm-feedback"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "state"]),
                                createVNode(_component_BFormInvalidFeedback, { id: "password_confirm-feedback" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(password_confirmError.value), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div data-v-8e0ae774${_scopeId3}>${ssrInterpolate(description.value)}</div><div class="btn-wrap d-flex justify-content-md-between align-items-md-center" data-v-8e0ae774${_scopeId3}><div class="btn-holder" data-v-8e0ae774${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BButton, {
                          onClick: formSubmit,
                          variant: "secondary",
                          class: "text-white form-submit-btn"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("reset_my_password"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("reset_my_password")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("h1", null, toDisplayString(_ctx.$t("password_reset")), 1),
                          createVNode("p", { class: "reset-password-text" }, toDisplayString(_ctx.$t("reset_password_text")), 1),
                          createVNode("div", null, [
                            withDirectives(createVNode("input", {
                              id: "token",
                              "onUpdate:modelValue": ($event) => token.value = $event,
                              type: "hidden",
                              state: tokenState.value,
                              "aria-describedby": "token-feedback"
                            }, null, 8, ["onUpdate:modelValue", "state"]), [
                              [vModelText, token.value]
                            ]),
                            createVNode(_component_BFormInvalidFeedback, { id: "token-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(tokenError.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_BFormGroup, {
                            class: "account-inputs mb-6",
                            id: "password-group",
                            "label-for": "password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BFormInput, {
                                id: "password",
                                modelValue: password.value,
                                "onUpdate:modelValue": ($event) => password.value = $event,
                                type: "password",
                                placeholder: _ctx.$t("new_password"),
                                state: passwordState.value,
                                "aria-describedby": "password-feedback"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "state"]),
                              createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(passwordError.value), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BFormGroup, {
                            class: "account-inputs mb-6",
                            id: "password_confirm-group",
                            "label-for": "password_confirm"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BFormInput, {
                                id: "password_confirm",
                                modelValue: password_confirm.value,
                                "onUpdate:modelValue": ($event) => password_confirm.value = $event,
                                type: "password",
                                placeholder: _ctx.$t("repeat_password"),
                                state: password_confirmState.value,
                                "aria-describedby": "password_confirm-feedback"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "state"]),
                              createVNode(_component_BFormInvalidFeedback, { id: "password_confirm-feedback" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(password_confirmError.value), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, toDisplayString(description.value), 1),
                          createVNode("div", { class: "btn-wrap d-flex justify-content-md-between align-items-md-center" }, [
                            createVNode("div", { class: "btn-holder" }, [
                              createVNode(_component_BButton, {
                                onClick: formSubmit,
                                variant: "secondary",
                                class: "text-white form-submit-btn"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("reset_my_password")), 1)
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BCol, {
                      md: "10",
                      lg: "7",
                      class: "mobile-form-email"
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", null, toDisplayString(_ctx.$t("password_reset")), 1),
                        createVNode("p", { class: "reset-password-text" }, toDisplayString(_ctx.$t("reset_password_text")), 1),
                        createVNode("div", null, [
                          withDirectives(createVNode("input", {
                            id: "token",
                            "onUpdate:modelValue": ($event) => token.value = $event,
                            type: "hidden",
                            state: tokenState.value,
                            "aria-describedby": "token-feedback"
                          }, null, 8, ["onUpdate:modelValue", "state"]), [
                            [vModelText, token.value]
                          ]),
                          createVNode(_component_BFormInvalidFeedback, { id: "token-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(tokenError.value), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_BFormGroup, {
                          class: "account-inputs mb-6",
                          id: "password-group",
                          "label-for": "password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BFormInput, {
                              id: "password",
                              modelValue: password.value,
                              "onUpdate:modelValue": ($event) => password.value = $event,
                              type: "password",
                              placeholder: _ctx.$t("new_password"),
                              state: passwordState.value,
                              "aria-describedby": "password-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(passwordError.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BFormGroup, {
                          class: "account-inputs mb-6",
                          id: "password_confirm-group",
                          "label-for": "password_confirm"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BFormInput, {
                              id: "password_confirm",
                              modelValue: password_confirm.value,
                              "onUpdate:modelValue": ($event) => password_confirm.value = $event,
                              type: "password",
                              placeholder: _ctx.$t("repeat_password"),
                              state: password_confirmState.value,
                              "aria-describedby": "password_confirm-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "password_confirm-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(password_confirmError.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, toDisplayString(description.value), 1),
                        createVNode("div", { class: "btn-wrap d-flex justify-content-md-between align-items-md-center" }, [
                          createVNode("div", { class: "btn-holder" }, [
                            createVNode(_component_BButton, {
                              onClick: formSubmit,
                              variant: "secondary",
                              class: "text-white form-submit-btn"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("reset_my_password")), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2),
              createVNode(_component_BRow, {
                "no-gutters": "",
                class: "reset-password flex-column ps-md-15 p-15 pt-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_BCol, {
                    md: "10",
                    lg: "7",
                    class: "mobile-form-email"
                  }, {
                    default: withCtx(() => [
                      createVNode("h1", null, toDisplayString(_ctx.$t("password_reset")), 1),
                      createVNode("p", { class: "reset-password-text" }, toDisplayString(_ctx.$t("reset_password_text")), 1),
                      createVNode("div", null, [
                        withDirectives(createVNode("input", {
                          id: "token",
                          "onUpdate:modelValue": ($event) => token.value = $event,
                          type: "hidden",
                          state: tokenState.value,
                          "aria-describedby": "token-feedback"
                        }, null, 8, ["onUpdate:modelValue", "state"]), [
                          [vModelText, token.value]
                        ]),
                        createVNode(_component_BFormInvalidFeedback, { id: "token-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(tokenError.value), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_BFormGroup, {
                        class: "account-inputs mb-6",
                        id: "password-group",
                        "label-for": "password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "password",
                            modelValue: password.value,
                            "onUpdate:modelValue": ($event) => password.value = $event,
                            type: "password",
                            placeholder: _ctx.$t("new_password"),
                            state: passwordState.value,
                            "aria-describedby": "password-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(passwordError.value), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormGroup, {
                        class: "account-inputs mb-6",
                        id: "password_confirm-group",
                        "label-for": "password_confirm"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "password_confirm",
                            modelValue: password_confirm.value,
                            "onUpdate:modelValue": ($event) => password_confirm.value = $event,
                            type: "password",
                            placeholder: _ctx.$t("repeat_password"),
                            state: password_confirmState.value,
                            "aria-describedby": "password_confirm-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "password_confirm-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(password_confirmError.value), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, toDisplayString(description.value), 1),
                      createVNode("div", { class: "btn-wrap d-flex justify-content-md-between align-items-md-center" }, [
                        createVNode("div", { class: "btn-holder" }, [
                          createVNode(_component_BButton, {
                            onClick: formSubmit,
                            variant: "secondary",
                            class: "text-white form-submit-btn"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("reset_my_password")), 1)
                            ]),
                            _: 1
                          })
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8e0ae774"]]);
export {
  ResetPassword as default
};
//# sourceMappingURL=ResetPassword-DQj-6KRj.js.map
