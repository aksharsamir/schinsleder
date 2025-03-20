import { BButton } from "bootstrap-vue-next/components/BButton";
import { BFormInvalidFeedback } from "bootstrap-vue-next/components/BForm";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BFormGroup } from "bootstrap-vue-next/components/BFormGroup";
import { BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-BN1xAQs-.js";
import { t as forgotPassword } from "./user-B9wxceAo.js";
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";
import { useStore } from "vuex";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/components/BImg";
import "./products-Dsi6ZmTY.js";
import "axios";
import "../entry-server.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vue-router";
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
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const store = useStore();
    const email = ref("");
    const emailState = ref(null);
    const emailError = ref("");
    const description = ref("");
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
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
    const formSubmit = async () => {
      if (validateEmail()) {
        const retval = await forgotPassword(email.value, store);
        if (retval === true) {
          description.value = t("reset_password_email_has_been_sent");
          const msg = {
            type: "success",
            title: t("password_reset"),
            text: t("reset_password_email_has_been_sent")
          };
          store.dispatch("messages/sendMessage", { message: msg });
        } else {
          description.value = t("reset_password_email_could_not_been_sent");
          const msg = {
            type: "danger",
            title: t("accoupassword_resetnt_modify"),
            text: t("reset_password_email_could_not_been_sent")
          };
          store.dispatch("messages/sendMessage", { message: msg });
        }
      }
    };
    onMounted(() => {
      const bcrumb = { current: t("password_forgot"), routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
    });
    useHead({
      title: () => t("password_forgot"),
      meta: [
        { name: "title", content: () => t("password_forgot") },
        { name: "keywords", content: () => t("password_forgot") },
        { name: "description", content: () => t("password_forgot") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BFormGroup = BFormGroup;
      const _component_BFormInput = BFormInput;
      const _component_BFormInvalidFeedback = BFormInvalidFeedback;
      const _component_router_link = resolveComponent("router-link");
      const _component_BButton = BButton;
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ wrapperClass: "forgotPassword" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`<div class="container" data-v-2a6d6fc3${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BRow, { class: "forgot-password" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BCol, {
                    md: "10",
                    lg: "7",
                    class: "forgot-password-input"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 data-v-2a6d6fc3${_scopeId3}>${ssrInterpolate(_ctx.$t("password_forgot"))}</h1><p data-v-2a6d6fc3${_scopeId3}>${ssrInterpolate(_ctx.$t("forgot_password_text"))}</p>`);
                        _push4(ssrRenderComponent(_component_BFormGroup, {
                          label: _ctx.$t("form_email") + "*",
                          "label-for": "email",
                          description: description.value,
                          class: "align-items-md-center d-flex"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BFormInput, {
                                id: "email",
                                modelValue: email.value,
                                "onUpdate:modelValue": ($event) => email.value = $event,
                                type: "text",
                                state: emailState.value,
                                "aria-describedby": "email-feedback"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(emailError.value)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(emailError.value), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_BFormInput, {
                                  id: "email",
                                  modelValue: email.value,
                                  "onUpdate:modelValue": ($event) => email.value = $event,
                                  type: "text",
                                  state: emailState.value,
                                  "aria-describedby": "email-feedback"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(emailError.value), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="btn-wrap d-flex justify-content-md-between align-items-md-center" data-v-2a6d6fc3${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_router_link, {
                          class: "back",
                          to: "/login"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("go_back"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("go_back")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="btn-holder" data-v-2a6d6fc3${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BButton, {
                          onClick: formSubmit,
                          variant: "info",
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
                          createVNode("h1", null, toDisplayString(_ctx.$t("password_forgot")), 1),
                          createVNode("p", null, toDisplayString(_ctx.$t("forgot_password_text")), 1),
                          createVNode(_component_BFormGroup, {
                            label: _ctx.$t("form_email") + "*",
                            "label-for": "email",
                            description: description.value,
                            class: "align-items-md-center d-flex"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BFormInput, {
                                id: "email",
                                modelValue: email.value,
                                "onUpdate:modelValue": ($event) => email.value = $event,
                                type: "text",
                                state: emailState.value,
                                "aria-describedby": "email-feedback"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                              createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(emailError.value), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["label", "description"]),
                          createVNode("div", { class: "btn-wrap d-flex justify-content-md-between align-items-md-center" }, [
                            createVNode(_component_router_link, {
                              class: "back",
                              to: "/login"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("go_back")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "btn-holder" }, [
                              createVNode(_component_BButton, {
                                onClick: formSubmit,
                                variant: "info",
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
                      class: "forgot-password-input"
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", null, toDisplayString(_ctx.$t("password_forgot")), 1),
                        createVNode("p", null, toDisplayString(_ctx.$t("forgot_password_text")), 1),
                        createVNode(_component_BFormGroup, {
                          label: _ctx.$t("form_email") + "*",
                          "label-for": "email",
                          description: description.value,
                          class: "align-items-md-center d-flex"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BFormInput, {
                              id: "email",
                              modelValue: email.value,
                              "onUpdate:modelValue": ($event) => email.value = $event,
                              type: "text",
                              state: emailState.value,
                              "aria-describedby": "email-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(emailError.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["label", "description"]),
                        createVNode("div", { class: "btn-wrap d-flex justify-content-md-between align-items-md-center" }, [
                          createVNode(_component_router_link, {
                            class: "back",
                            to: "/login"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("go_back")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "btn-holder" }, [
                            createVNode(_component_BButton, {
                              onClick: formSubmit,
                              variant: "info",
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
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$2),
              createVNode("div", { class: "container" }, [
                createVNode(_component_BRow, { class: "forgot-password" }, {
                  default: withCtx(() => [
                    createVNode(_component_BCol, {
                      md: "10",
                      lg: "7",
                      class: "forgot-password-input"
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", null, toDisplayString(_ctx.$t("password_forgot")), 1),
                        createVNode("p", null, toDisplayString(_ctx.$t("forgot_password_text")), 1),
                        createVNode(_component_BFormGroup, {
                          label: _ctx.$t("form_email") + "*",
                          "label-for": "email",
                          description: description.value,
                          class: "align-items-md-center d-flex"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BFormInput, {
                              id: "email",
                              modelValue: email.value,
                              "onUpdate:modelValue": ($event) => email.value = $event,
                              type: "text",
                              state: emailState.value,
                              "aria-describedby": "email-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(emailError.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["label", "description"]),
                        createVNode("div", { class: "btn-wrap d-flex justify-content-md-between align-items-md-center" }, [
                          createVNode(_component_router_link, {
                            class: "back",
                            to: "/login"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("go_back")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "btn-holder" }, [
                            createVNode(_component_BButton, {
                              onClick: formSubmit,
                              variant: "info",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a6d6fc3"]]);
export {
  ForgotPassword as default
};
//# sourceMappingURL=ForgotPassword-CDVQUVCk.js.map
