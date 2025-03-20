import { BButton } from "bootstrap-vue-next/components/BButton";
import { BFormInvalidFeedback } from "bootstrap-vue-next/components/BForm";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BFormGroup } from "bootstrap-vue-next/components/BFormGroup";
import { BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { reactive, computed, watchEffect, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, ref, watch, onMounted, unref, createBlock, createCommentVNode, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import PasswordMeter from "vue-simple-password-meter";
import { BFormSelect } from "bootstrap-vue-next/components/BFormSelect";
import { BTable } from "bootstrap-vue-next/components/BTable";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BFormRadio } from "bootstrap-vue-next/components/BFormRadio";
import { BFormCheckbox } from "bootstrap-vue-next/components/BFormCheckbox";
import { x as validateVatNumber } from "./user-B9wxceAo.js";
import { BModal } from "bootstrap-vue-next/components/BModal";
const _sfc_main$4 = {
  __name: "AccountEmail",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { t } = useI18n();
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
    const form = reactive({
      email: "",
      emailState: null,
      emailError: "",
      password: "",
      passwordState: null,
      passwordError: ""
    });
    const user = computed(() => store.getters["user/getCurrentUser"]);
    watchEffect(() => {
      form.email = user.value.email;
    });
    const validateEmail = () => {
      if (form.email.length === 0) {
        form.emailState = false;
        form.emailError = t("email_is_required_field");
        return false;
      }
      if (!emailReg.test(form.email)) {
        form.emailState = false;
        form.emailError = t("email_is_invalid_field");
        return false;
      }
      form.emailState = true;
      return true;
    };
    const validatePassword = () => {
      const trimmedPassword = form.password.trim();
      if (trimmedPassword == "") {
        form.passwordState = false;
        form.passwordError = t("password_is_required_field");
      } else {
        form.passwordState = true;
      }
    };
    const submit = async () => {
      let formValid = true;
      if (form.emailState != true) {
        validateEmail();
        if (form.emailState != true) {
          formValid = false;
        }
      }
      if (form.passwordState != true) {
        validatePassword();
        if (form.passwordState != true) {
          formValid = false;
        }
      }
      if (formValid) {
        const retval = await store.dispatch("user/updateAccount", {
          account: form,
          store
        });
        if (retval == true) {
          const msg = {
            type: "success",
            title: t("account_modify"),
            text: t("account_modified")
          };
          store.dispatch("messages/sendMessage", { message: msg });
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BFormGroup = BFormGroup;
      const _component_BFormInput = BFormInput;
      const _component_BFormInvalidFeedback = BFormInvalidFeedback;
      const _component_BButton = BButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-informate" }, _attrs))}><h1>${ssrInterpolate(_ctx.$t("change_email_info"))}</h1>`);
      _push(ssrRenderComponent(_component_BRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BCol, { md: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "email-group",
                    label: _ctx.$t("form_email") + "*",
                    "label-for": "email"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormInput, {
                          id: "email",
                          modelValue: form.email,
                          "onUpdate:modelValue": ($event) => form.email = $event,
                          type: "text",
                          state: form.emailState,
                          onBlur: validateEmail,
                          "aria-describedby": "email-feedback"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(form.emailError)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(form.emailError), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BFormInput, {
                            id: "email",
                            modelValue: form.email,
                            "onUpdate:modelValue": ($event) => form.email = $event,
                            type: "text",
                            state: form.emailState,
                            onBlur: validateEmail,
                            "aria-describedby": "email-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.emailError), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "password-group",
                    label: _ctx.$t("form_password") + "*",
                    "label-for": "password"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormInput, {
                          id: "password",
                          modelValue: form.password,
                          "onUpdate:modelValue": ($event) => form.password = $event,
                          type: "password",
                          state: form.passwordState,
                          "aria-describedby": "password-feedback"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(form.passwordError)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(form.passwordError), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BFormInput, {
                            id: "password",
                            modelValue: form.password,
                            "onUpdate:modelValue": ($event) => form.password = $event,
                            type: "password",
                            state: form.passwordState,
                            "aria-describedby": "password-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.passwordError), 1)
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
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "email-group",
                      label: _ctx.$t("form_email") + "*",
                      "label-for": "email"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "email",
                          modelValue: form.email,
                          "onUpdate:modelValue": ($event) => form.email = $event,
                          type: "text",
                          state: form.emailState,
                          onBlur: validateEmail,
                          "aria-describedby": "email-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.emailError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "password-group",
                      label: _ctx.$t("form_password") + "*",
                      "label-for": "password"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "password",
                          modelValue: form.password,
                          "onUpdate:modelValue": ($event) => form.password = $event,
                          type: "password",
                          state: form.passwordState,
                          "aria-describedby": "password-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.passwordError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BCol, { md: "6" }, {
                default: withCtx(() => [
                  createVNode(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "email-group",
                    label: _ctx.$t("form_email") + "*",
                    "label-for": "email"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "email",
                        modelValue: form.email,
                        "onUpdate:modelValue": ($event) => form.email = $event,
                        type: "text",
                        state: form.emailState,
                        onBlur: validateEmail,
                        "aria-describedby": "email-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.emailError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "password-group",
                    label: _ctx.$t("form_password") + "*",
                    "label-for": "password"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "password",
                        modelValue: form.password,
                        "onUpdate:modelValue": ($event) => form.password = $event,
                        type: "password",
                        state: form.passwordState,
                        "aria-describedby": "password-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.passwordError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="form-footer">`);
      _push(ssrRenderComponent(_component_BButton, {
        onClick: submit,
        variant: "info",
        class: "text-white form-submit-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Opslaan`);
          } else {
            return [
              createTextVNode("Opslaan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/account/AccountEmail.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "AccountPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { t } = useI18n();
    const form = reactive({
      email: "",
      emailState: null,
      emailError: "",
      password: "",
      passwordState: null,
      passwordError: ""
    });
    const isClient = ref(false);
    computed(() => store.getters["user/getCurrentUser"]);
    const Password = computed(() => form.password);
    const PasswordConfirm = computed(() => form.password_confirm);
    watch(Password, () => {
      validatePassword();
    });
    watch(PasswordConfirm, () => {
      validateConfirmationPassword();
    });
    const validatePassword = () => {
      if (form.password.length < 8) {
        form.passwordState = false;
        form.passwordError = t("password_to_short");
      } else if (!form.password.match(/[a-z]/)) {
        form.passwordState = false;
        form.passwordError = t("password_needs");
      } else if (!form.password.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/)) {
        form.passwordState = false;
        form.passwordError = t("password_needs");
      } else if (!form.password.match(/[A-Z]/)) {
        form.passwordState = false;
        form.passwordError = t("password_needs");
      } else if (!form.password.match(/\d/)) {
        form.passwordState = false;
        form.passwordError = t("password_needs");
      } else {
        form.passwordState = true;
      }
    };
    const validateConfirmationPassword = () => {
      if (form.password_confirm.length < 8) {
        form.password_confirmState = false;
        form.password_confirmError = t("password_to_short");
      } else if (form.password !== form.password_confirm) {
        form.password_confirmState = false;
        form.password_confirmError = t("password_confirm_not_equal");
      } else {
        form.password_confirmState = true;
      }
    };
    const validateCurrentPassword = () => {
      if (form.current_password === "") {
        form.current_passwordState = false;
        form.current_passwordError = t("password_is_required_field");
      } else {
        form.current_passwordState = true;
      }
    };
    const submit = async () => {
      let formValid = true;
      if (!form.current_passwordState) {
        validateCurrentPassword();
        if (!form.current_passwordState) {
          formValid = false;
        }
      }
      if (!form.passwordState) {
        validatePassword();
        if (!form.passwordState) {
          formValid = false;
        }
      }
      if (!form.password_confirmState) {
        validateConfirmationPassword();
        if (!form.password_confirmState) {
          formValid = false;
        }
      }
      if (formValid) {
        const retval = await store.dispatch("user/changePassword", {
          currentPassword: form.current_password,
          newPassword: form.password,
          store
        });
        const msg = {
          type: retval ? "success" : "failure",
          title: t("account_modify"),
          text: retval ? t("account_modified") : t("account_not_modified")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      }
    };
    onMounted(() => {
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BFormGroup = BFormGroup;
      const _component_BFormInput = BFormInput;
      const _component_BFormInvalidFeedback = BFormInvalidFeedback;
      const _component_BButton = BButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-informate" }, _attrs))}><h1>${ssrInterpolate(_ctx.$t("change_password_info"))}</h1>`);
      _push(ssrRenderComponent(_component_BRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BCol, { md: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "password-group",
                    label: _ctx.$t("form_current_password") + "*",
                    "label-for": "password"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormInput, {
                          id: "current_password",
                          modelValue: form.current_password,
                          "onUpdate:modelValue": ($event) => form.current_password = $event,
                          type: "password",
                          state: form.current_passwordState,
                          "aria-describedby": "current_password-feedback"
                        }, null, _parent4, _scopeId3));
                        if (isClient.value) {
                          _push4(ssrRenderComponent(unref(PasswordMeter), {
                            password: form.current_password
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "current_password-feedback" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(form.current_passwordError)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(form.current_passwordError), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BFormInput, {
                            id: "current_password",
                            modelValue: form.current_password,
                            "onUpdate:modelValue": ($event) => form.current_password = $event,
                            type: "password",
                            state: form.current_passwordState,
                            "aria-describedby": "current_password-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                          isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                            key: 0,
                            password: form.current_password
                          }, null, 8, ["password"])) : createCommentVNode("", true),
                          createVNode(_component_BFormInvalidFeedback, { id: "current_password-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.current_passwordError), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "password-group",
                    label: _ctx.$t("form_password") + "*",
                    "label-for": "password"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormInput, {
                          id: "password",
                          modelValue: form.password,
                          "onUpdate:modelValue": ($event) => form.password = $event,
                          type: "password",
                          state: form.passwordState,
                          "aria-describedby": "password-feedback"
                        }, null, _parent4, _scopeId3));
                        if (isClient.value) {
                          _push4(ssrRenderComponent(unref(PasswordMeter), {
                            password: form.password
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(form.passwordError)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(form.passwordError), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BFormInput, {
                            id: "password",
                            modelValue: form.password,
                            "onUpdate:modelValue": ($event) => form.password = $event,
                            type: "password",
                            state: form.passwordState,
                            "aria-describedby": "password-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                          isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                            key: 0,
                            password: form.password
                          }, null, 8, ["password"])) : createCommentVNode("", true),
                          createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.passwordError), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "password_confirm-group",
                    label: _ctx.$t("form_password_confirmation") + "*",
                    "label-for": "password_confirm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormInput, {
                          id: "password_confirm",
                          modelValue: form.password_confirm,
                          "onUpdate:modelValue": ($event) => form.password_confirm = $event,
                          type: "password",
                          state: form.password_confirmState,
                          "aria-describedby": "password_confirm-feedback"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "password_confirm-feedback" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(form.password_confirmError)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(form.password_confirmError), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BFormInput, {
                            id: "password_confirm",
                            modelValue: form.password_confirm,
                            "onUpdate:modelValue": ($event) => form.password_confirm = $event,
                            type: "password",
                            state: form.password_confirmState,
                            "aria-describedby": "password_confirm-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "password_confirm-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.password_confirmError), 1)
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
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "password-group",
                      label: _ctx.$t("form_current_password") + "*",
                      "label-for": "password"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "current_password",
                          modelValue: form.current_password,
                          "onUpdate:modelValue": ($event) => form.current_password = $event,
                          type: "password",
                          state: form.current_passwordState,
                          "aria-describedby": "current_password-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                        isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                          key: 0,
                          password: form.current_password
                        }, null, 8, ["password"])) : createCommentVNode("", true),
                        createVNode(_component_BFormInvalidFeedback, { id: "current_password-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.current_passwordError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "password-group",
                      label: _ctx.$t("form_password") + "*",
                      "label-for": "password"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "password",
                          modelValue: form.password,
                          "onUpdate:modelValue": ($event) => form.password = $event,
                          type: "password",
                          state: form.passwordState,
                          "aria-describedby": "password-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                        isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                          key: 0,
                          password: form.password
                        }, null, 8, ["password"])) : createCommentVNode("", true),
                        createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.passwordError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "password_confirm-group",
                      label: _ctx.$t("form_password_confirmation") + "*",
                      "label-for": "password_confirm"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "password_confirm",
                          modelValue: form.password_confirm,
                          "onUpdate:modelValue": ($event) => form.password_confirm = $event,
                          type: "password",
                          state: form.password_confirmState,
                          "aria-describedby": "password_confirm-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "password_confirm-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.password_confirmError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BCol, { md: "6" }, {
                default: withCtx(() => [
                  createVNode(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "password-group",
                    label: _ctx.$t("form_current_password") + "*",
                    "label-for": "password"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "current_password",
                        modelValue: form.current_password,
                        "onUpdate:modelValue": ($event) => form.current_password = $event,
                        type: "password",
                        state: form.current_passwordState,
                        "aria-describedby": "current_password-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                      isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                        key: 0,
                        password: form.current_password
                      }, null, 8, ["password"])) : createCommentVNode("", true),
                      createVNode(_component_BFormInvalidFeedback, { id: "current_password-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.current_passwordError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "password-group",
                    label: _ctx.$t("form_password") + "*",
                    "label-for": "password"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "password",
                        modelValue: form.password,
                        "onUpdate:modelValue": ($event) => form.password = $event,
                        type: "password",
                        state: form.passwordState,
                        "aria-describedby": "password-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                      isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                        key: 0,
                        password: form.password
                      }, null, 8, ["password"])) : createCommentVNode("", true),
                      createVNode(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.passwordError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "password_confirm-group",
                    label: _ctx.$t("form_password_confirmation") + "*",
                    "label-for": "password_confirm"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "password_confirm",
                        modelValue: form.password_confirm,
                        "onUpdate:modelValue": ($event) => form.password_confirm = $event,
                        type: "password",
                        state: form.password_confirmState,
                        "aria-describedby": "password_confirm-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "password_confirm-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.password_confirmError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="form-footer">`);
      _push(ssrRenderComponent(_component_BButton, {
        onClick: submit,
        variant: "info",
        class: "text-white form-submit-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Opslaan`);
          } else {
            return [
              createTextVNode("Opslaan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/account/AccountPassword.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AccountEditAddress",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { t } = useI18n();
    const isCompany = ref(true);
    const showFullAddress = ref(true);
    const foundAddresses = ref([]);
    const foundAddress = ref("");
    const selectedAddress = ref(null);
    const isValidVatNumber = ref(false);
    const showVatMessage = ref("");
    const isBtnDisable = ref(false);
    const form = ref({
      company: "",
      companyState: null,
      companyError: "",
      companyTimer: null,
      firstname: "",
      firstnameState: null,
      firstnameError: "",
      firstnameTimer: null,
      lastname: "",
      lastnameState: null,
      lastnameError: "",
      lastnameTimer: null,
      taxvat: "",
      taxvatState: null,
      taxvatError: "",
      taxvatTimer: null,
      address: {
        id: null,
        country_code: "",
        postcode: "",
        postcodeState: null,
        postcodeError: "",
        postcodeTimer: null,
        street: "",
        streetDisplay: "",
        streetDisplayState: null,
        streetDisplayError: "",
        streetDisplayTimer: null,
        addition: "",
        city: "",
        cityState: null,
        cityError: "",
        cityTimer: null,
        telephone: "",
        telephoneState: null,
        telephoneError: "",
        telephoneTimer: null,
        default_billing: true,
        default_shipping: true
      },
      checkbox2: false,
      manual: true
    });
    const editAddressId = computed({
      get: () => store.getters["user/getEditAddressId"],
      set: (val) => store.commit("user/setEditAddressId", val)
    });
    const countries = computed(() => store.getters["user/getCountries"]);
    const vatNumber = computed(() => form.value.taxvat);
    onMounted(() => {
      if (editAddressId.value != null) {
        const address = store.getters["user/getAddressByID"](editAddressId.value);
        if (address) {
          isCompany.value = address.company != null;
          form.value.company = address.company;
          form.value.address.country_code = address.country_code;
          form.value.firstname = address.firstname;
          form.value.lastname = address.lastname;
          form.value.address.streetDisplay = address.street[0];
          form.value.address.postcode = address.postcode;
          form.value.address.city = address.city;
          form.value.address.telephone = address.telephone;
          form.value.address.default_billing = address.default_billing;
          form.value.address.default_shipping = address.default_shipping;
          form.value.taxvat = address.vat_id || "";
        }
      }
    });
    const validateCompany = () => {
      if (isCompany.value && (form.value.company.trim() === "" || form.value.company == null)) {
        form.value.companyState = false;
        form.value.companyError = t("company_name_required");
      } else {
        form.value.companyState = true;
      }
    };
    const validateFirstName = () => {
      if (form.value.firstname.trim() === "") {
        form.value.firstnameState = false;
        form.value.firstnameError = t("firstname_required");
      } else {
        form.value.firstnameState = true;
      }
    };
    const validateLastName = () => {
      if (form.value.lastname.trim() === "") {
        form.value.lastnameState = false;
        form.value.lastnameError = t("lastname_required");
      } else {
        form.value.lastnameState = true;
      }
    };
    const validateStreet = () => {
      if (form.value.address.streetDisplay.trim() === "") {
        form.value.address.streetDisplayState = false;
        form.value.address.streetDisplayError = t("street_required");
      } else {
        form.value.address.streetDisplayState = true;
      }
    };
    const validateCity = () => {
      if (form.value.address.city.trim() === "") {
        form.value.address.cityState = false;
        form.value.address.cityError = t("city_required");
      } else {
        form.value.address.cityState = true;
      }
    };
    const validatePhone = () => {
      if (form.value.address.telephone.trim() === "") {
        form.value.address.telephoneState = false;
        form.value.address.telephoneError = t("phone_required");
      } else {
        form.value.address.telephoneState = true;
      }
    };
    const validatePostcode = () => {
      const nl = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
      const de = /(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})/g;
      const be = /^[1-9][0-9]{3}$/g;
      if (form.value.address.country_code === "NL" && nl.test(form.value.address.postcode)) {
        form.value.address.postcodeState = true;
      } else if (form.value.address.country_code === "BE" && be.test(form.value.address.postcode)) {
        form.value.address.postcodeState = true;
      } else if (form.value.address.country_code === "DE" && de.test(form.value.address.postcode)) {
        form.value.address.postcodeState = true;
      } else {
        form.value.address.postcodeState = false;
        form.value.address.postcodeError = t("postcode_required");
      }
    };
    const validateVAT = async () => {
      if (isCompany.value) {
        if (form.value.taxvat != "") {
          if (form.value.taxvat.substring(0, 2).toUpperCase() === form.value.address.country_code) {
            const retval = await validateVatNumber(form.value.taxvat);
            if (retval.is_valid) {
              isValidVatNumber.value = true;
              form.value.taxvatState = true;
            } else {
              isValidVatNumber.value = false;
              form.value.taxvatState = false;
              form.value.taxvatError = t("taxvat_invalid");
              showVatMessage.value = t("taxvat_invalid");
            }
          } else {
            isValidVatNumber.value = false;
            form.value.taxvatState = false;
            form.value.taxvatError = t("taxvat_wrong_country");
          }
        } else {
          form.value.taxvatState = null;
          form.value.taxvatError = "";
        }
      } else {
        form.value.taxvatState = null;
        form.value.taxvatError = "";
      }
    };
    const submit = async () => {
      let formValid = true;
      if (isCompany.value && form.value.companyState != true) {
        validateCompany();
        if (form.value.companyState != true) formValid = false;
      }
      if (isCompany.value && form.value.taxvat !== "" && form.value.taxvatState !== true) {
        validateVAT();
        if (form.value.taxvatState != true) formValid = false;
      }
      if (form.value.firstnameState != true) {
        validateFirstName();
        if (form.value.firstnameState != true) formValid = false;
      }
      if (form.value.lastnameState != true) {
        validateLastName();
        if (form.value.lastnameState != true) formValid = false;
      }
      if (form.value.address.postcodeState != true) {
        validatePostcode();
        if (form.value.address.postcodeState != true) formValid = false;
      }
      if (form.value.address.streetDisplayState != true) {
        validateStreet();
        if (form.value.address.streetDisplayState != true) {
          formValid = false;
          showFullAddress.value = true;
        }
      }
      if (form.value.address.telephoneState != true) {
        validatePhone();
        if (form.value.address.telephoneState != true) formValid = false;
      }
      if (form.value.address.cityState != true) {
        validateCity();
        if (form.value.address.cityState != true) formValid = false;
      }
      if (formValid) {
        isBtnDisable.value = true;
        const address = {
          id: editAddressId.value > 0 ? editAddressId.value : null,
          company: isCompany.value ? form.value.company : "",
          country_code: form.value.address.country_code,
          firstname: form.value.firstname,
          lastname: form.value.lastname,
          street: form.value.address.streetDisplay,
          postcode: form.value.address.postcode,
          city: form.value.address.city,
          telephone: form.value.address.telephone,
          vat_id: isCompany.value ? form.value.taxvat : "",
          default_billing: form.value.address.default_billing,
          default_shipping: form.value.address.default_shipping
        };
        const action = editAddressId.value > 0 ? "user/updateAddress" : "user/addAddress";
        const retval = await store.dispatch(action, { address, store });
        if (retval == true) {
          const msg = {
            type: "success",
            title: t("account"),
            text: t("address_modified")
          };
          store.dispatch("messages/sendMessage", { message: msg });
          editAddressId.value = 0;
        }
        isBtnDisable.value = false;
      }
    };
    const cancel = () => {
      editAddressId.value = 0;
    };
    watch(vatNumber, () => {
      if (form.value.taxvatTimer !== null) {
        clearTimeout(form.value.taxvatTimer);
      }
      form.value.taxvatTimer = setTimeout(() => validateVAT(), 1e3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BFormGroup = BFormGroup;
      const _component_BFormInput = BFormInput;
      const _component_BFormInvalidFeedback = BFormInvalidFeedback;
      const _component_BFormCheckbox = BFormCheckbox;
      const _component_BFormSelect = BFormSelect;
      const _component_BFormRadio = BFormRadio;
      const _component_BButton = BButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-address-book" }, _attrs))}>`);
      if (editAddressId.value > 0) {
        _push(`<h1>${ssrInterpolate(_ctx.$t("edit_address"))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (editAddressId.value == -1) {
        _push(`<h1>${ssrInterpolate(_ctx.$t("new_address"))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="address-block">`);
      _push(ssrRenderComponent(_component_BRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BCol, { md: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>${ssrInterpolate(_ctx.$t("contact_information"))}</h2>`);
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs mb-6",
                    id: "first-name-group",
                    label: _ctx.$t("form_first_name") + "*",
                    "label-for": "first_name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormInput, {
                          id: "first_name",
                          modelValue: form.value.firstname,
                          "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                          type: "text",
                          onBlur: ($event) => validateFirstName(),
                          state: form.value.firstnameState,
                          "aria-describedby": "firstname-feedback"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "firstname-feedback" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(form.value.firstnameError)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(form.value.firstnameError), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BFormInput, {
                            id: "first_name",
                            modelValue: form.value.firstname,
                            "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                            type: "text",
                            onBlur: ($event) => validateFirstName(),
                            state: form.value.firstnameState,
                            "aria-describedby": "firstname-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "firstname-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.value.firstnameError), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs mb-6",
                    id: "last-name-group",
                    label: _ctx.$t("form_last_name") + "*",
                    "label-for": "last_name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormInput, {
                          id: "last_name",
                          modelValue: form.value.lastname,
                          "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                          type: "text",
                          onBlur: ($event) => validateLastName(),
                          state: form.value.lastnameState,
                          "aria-describedby": "lastname-feedback"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "lastname-feedback" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(form.value.lastnameError)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(form.value.lastnameError), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BFormInput, {
                            id: "last_name",
                            modelValue: form.value.lastname,
                            "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                            type: "text",
                            onBlur: ($event) => validateLastName(),
                            state: form.value.lastnameState,
                            "aria-describedby": "lastname-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "lastname-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.value.lastnameError), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BFormCheckbox, {
                    id: "checkbox-1",
                    modelValue: isCompany.value,
                    "onUpdate:modelValue": ($event) => isCompany.value = $event,
                    name: "checkbox-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("form_are_you_a_company"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (isCompany.value) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "company-group",
                      label: _ctx.$t("form_company_name") + "*",
                      "label-for": "company"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
                            id: "company",
                            modelValue: form.value.company,
                            "onUpdate:modelValue": ($event) => form.value.company = $event,
                            type: "text",
                            onBlur: ($event) => validateCompany(),
                            state: form.value.companyState,
                            "aria-describedby": "company-feedback"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "company-feedback" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(form.value.companyError)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(form.value.companyError), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BFormInput, {
                              id: "company",
                              modelValue: form.value.company,
                              "onUpdate:modelValue": ($event) => form.value.company = $event,
                              type: "text",
                              onBlur: ($event) => validateCompany(),
                              state: form.value.companyState,
                              "aria-describedby": "company-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "company-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(form.value.companyError), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "taxvat-group",
                      label: _ctx.$t("form_vat_number"),
                      "label-for": "taxvat"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
                            id: "taxvat",
                            modelValue: form.value.taxvat,
                            "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                            type: "text",
                            state: form.value.taxvatState,
                            "aria-describedby": "taxvat-feedback"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "taxvat-feedback" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(form.value.taxvatError)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(form.value.taxvatError), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BFormInput, {
                              id: "taxvat",
                              modelValue: form.value.taxvat,
                              "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                              type: "text",
                              state: form.value.taxvatState,
                              "aria-describedby": "taxvat-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "taxvat-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(form.value.taxvatError), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs mb-6",
                    id: "telephone-group",
                    label: _ctx.$t("form_phone") + "*",
                    "label-for": "telephone"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormInput, {
                          id: "telephone",
                          modelValue: form.value.address.telephone,
                          "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                          type: "text",
                          onBlur: ($event) => validatePhone(),
                          state: form.value.address.telephoneState,
                          "aria-describedby": "address.telephone-feedback"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.telephone-feedback" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(form.value.address.telephoneError)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BFormInput, {
                            id: "telephone",
                            modelValue: form.value.address.telephone,
                            "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                            type: "text",
                            onBlur: ($event) => validatePhone(),
                            state: form.value.address.telephoneState,
                            "aria-describedby": "address.telephone-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "address.telephone-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
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
                    createVNode("h2", null, toDisplayString(_ctx.$t("contact_information")), 1),
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "first-name-group",
                      label: _ctx.$t("form_first_name") + "*",
                      "label-for": "first_name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "first_name",
                          modelValue: form.value.firstname,
                          "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                          type: "text",
                          onBlur: ($event) => validateFirstName(),
                          state: form.value.firstnameState,
                          "aria-describedby": "firstname-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "firstname-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.value.firstnameError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "last-name-group",
                      label: _ctx.$t("form_last_name") + "*",
                      "label-for": "last_name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "last_name",
                          modelValue: form.value.lastname,
                          "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                          type: "text",
                          onBlur: ($event) => validateLastName(),
                          state: form.value.lastnameState,
                          "aria-describedby": "lastname-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "lastname-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.value.lastnameError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_BFormCheckbox, {
                      id: "checkbox-1",
                      modelValue: isCompany.value,
                      "onUpdate:modelValue": ($event) => isCompany.value = $event,
                      name: "checkbox-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    isCompany.value ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_BFormGroup, {
                        class: "account-inputs mb-6",
                        id: "company-group",
                        label: _ctx.$t("form_company_name") + "*",
                        "label-for": "company"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "company",
                            modelValue: form.value.company,
                            "onUpdate:modelValue": ($event) => form.value.company = $event,
                            type: "text",
                            onBlur: ($event) => validateCompany(),
                            state: form.value.companyState,
                            "aria-describedby": "company-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "company-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.value.companyError), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createVNode(_component_BFormGroup, {
                        class: "account-inputs mb-6",
                        id: "taxvat-group",
                        label: _ctx.$t("form_vat_number"),
                        "label-for": "taxvat"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "taxvat",
                            modelValue: form.value.taxvat,
                            "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                            type: "text",
                            state: form.value.taxvatState,
                            "aria-describedby": "taxvat-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "taxvat-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.value.taxvatError), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ])) : createCommentVNode("", true),
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "telephone-group",
                      label: _ctx.$t("form_phone") + "*",
                      "label-for": "telephone"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "telephone",
                          modelValue: form.value.address.telephone,
                          "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                          type: "text",
                          onBlur: ($event) => validatePhone(),
                          state: form.value.address.telephoneState,
                          "aria-describedby": "address.telephone-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "address.telephone-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BCol, { md: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>${ssrInterpolate(_ctx.$t("form_street"))}</h2>`);
                  if (showFullAddress.value) {
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "street-group",
                      label: _ctx.$t("form_street") + "*",
                      "label-for": "street"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
                            id: "street",
                            modelValue: form.value.address.streetDisplay,
                            "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                            type: "text",
                            onBlur: ($event) => validateStreet(),
                            state: form.value.address.streetDisplayState,
                            "aria-describedby": "address.streetDisplay-feedback"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.streetDisplay-feedback" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(form.value.address.streetDisplayError)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BFormInput, {
                              id: "street",
                              modelValue: form.value.address.streetDisplay,
                              "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                              type: "text",
                              onBlur: ($event) => validateStreet(),
                              state: form.value.address.streetDisplayState,
                              "aria-describedby": "address.streetDisplay-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "address.streetDisplay-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (showFullAddress.value) {
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "city-group",
                      label: _ctx.$t("form_city") + "*",
                      "label-for": "city"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
                            id: "city",
                            modelValue: form.value.address.city,
                            "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                            type: "text",
                            onBlur: ($event) => validateCity(),
                            state: form.value.address.cityState,
                            "aria-describedby": "address.city-feedback"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.city-feedback" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(form.value.address.cityError)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(form.value.address.cityError), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BFormInput, {
                              id: "city",
                              modelValue: form.value.address.city,
                              "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                              type: "text",
                              onBlur: ($event) => validateCity(),
                              state: form.value.address.cityState,
                              "aria-describedby": "address.city-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "address.city-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(form.value.address.cityError), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs mb-6",
                    id: "country-group",
                    label: _ctx.$t("form_country") + "*",
                    "label-for": "country"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormSelect, {
                          id: "country",
                          modelValue: form.value.address.country_code,
                          "onUpdate:modelValue": ($event) => form.value.address.country_code = $event,
                          options: countries.value,
                          class: "select"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BFormSelect, {
                            id: "country",
                            modelValue: form.value.address.country_code,
                            "onUpdate:modelValue": ($event) => form.value.address.country_code = $event,
                            options: countries.value,
                            class: "select"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (showFullAddress.value) {
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "postcode-group1",
                      label: _ctx.$t("form_postal_code") + "*",
                      "label-for": "postcode1"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
                            id: "postcode1",
                            modelValue: form.value.address.postcode,
                            "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                            type: "text",
                            onBlur: ($event) => validatePostcode(),
                            state: form.value.address.postcodeState,
                            "aria-describedby": "address.postcode1-feedback"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.postcode1-feedback" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(form.value.address.postcodeError)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BFormInput, {
                              id: "postcode1",
                              modelValue: form.value.address.postcode,
                              "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                              type: "text",
                              onBlur: ($event) => validatePostcode(),
                              state: form.value.address.postcodeState,
                              "aria-describedby": "address.postcode1-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "address.postcode1-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (foundAddress.value != "" && showFullAddress.value == false) {
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "add-group",
                      label: " ",
                      "label-for": "add"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div id="add"${_scopeId3}>${ssrInterpolate(foundAddress.value)}</div>`);
                        } else {
                          return [
                            createVNode("div", { id: "add" }, toDisplayString(foundAddress.value), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (foundAddresses.value.length > 0 && showFullAddress.value == false) {
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "addm-group",
                      label: " ",
                      "label-for": "addm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div id="addm"${_scopeId3}><!--[-->`);
                          ssrRenderList(foundAddresses.value, (item, index) => {
                            _push4(ssrRenderComponent(_component_BFormRadio, {
                              style: { "width": "300px" },
                              class: "account-radios",
                              modelValue: selectedAddress.value,
                              "onUpdate:modelValue": ($event) => selectedAddress.value = $event,
                              key: index,
                              name: "some-radios",
                              value: index
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.text)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.text), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { id: "addm" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(foundAddresses.value, (item, index) => {
                                return openBlock(), createBlock(_component_BFormRadio, {
                                  style: { "width": "300px" },
                                  class: "account-radios",
                                  modelValue: selectedAddress.value,
                                  "onUpdate:modelValue": ($event) => selectedAddress.value = $event,
                                  key: index,
                                  name: "some-radios",
                                  value: index
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.text), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "value"]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_BFormCheckbox, {
                    id: "default_billing",
                    modelValue: form.value.address.default_billing,
                    "onUpdate:modelValue": ($event) => form.value.address.default_billing = $event,
                    name: "default_billing"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("form_default_billing"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("form_default_billing")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BFormCheckbox, {
                    id: "default_shipping",
                    modelValue: form.value.address.default_shipping,
                    "onUpdate:modelValue": ($event) => form.value.address.default_shipping = $event,
                    name: "default_shipping"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("form_default_shipping"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("form_default_shipping")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h2", null, toDisplayString(_ctx.$t("form_street")), 1),
                    showFullAddress.value ? (openBlock(), createBlock(_component_BFormGroup, {
                      key: 0,
                      class: "account-inputs mb-6",
                      id: "street-group",
                      label: _ctx.$t("form_street") + "*",
                      "label-for": "street"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "street",
                          modelValue: form.value.address.streetDisplay,
                          "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                          type: "text",
                          onBlur: ($event) => validateStreet(),
                          state: form.value.address.streetDisplayState,
                          "aria-describedby": "address.streetDisplay-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "address.streetDisplay-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true),
                    showFullAddress.value ? (openBlock(), createBlock(_component_BFormGroup, {
                      key: 1,
                      class: "account-inputs mb-6",
                      id: "city-group",
                      label: _ctx.$t("form_city") + "*",
                      "label-for": "city"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "city",
                          modelValue: form.value.address.city,
                          "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                          type: "text",
                          onBlur: ($event) => validateCity(),
                          state: form.value.address.cityState,
                          "aria-describedby": "address.city-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "address.city-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.value.address.cityError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true),
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "country-group",
                      label: _ctx.$t("form_country") + "*",
                      "label-for": "country"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormSelect, {
                          id: "country",
                          modelValue: form.value.address.country_code,
                          "onUpdate:modelValue": ($event) => form.value.address.country_code = $event,
                          options: countries.value,
                          class: "select"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    showFullAddress.value ? (openBlock(), createBlock(_component_BFormGroup, {
                      key: 2,
                      class: "account-inputs mb-6",
                      id: "postcode-group1",
                      label: _ctx.$t("form_postal_code") + "*",
                      "label-for": "postcode1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "postcode1",
                          modelValue: form.value.address.postcode,
                          "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                          type: "text",
                          onBlur: ($event) => validatePostcode(),
                          state: form.value.address.postcodeState,
                          "aria-describedby": "address.postcode1-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "address.postcode1-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true),
                    foundAddress.value != "" && showFullAddress.value == false ? (openBlock(), createBlock(_component_BFormGroup, {
                      key: 3,
                      class: "account-inputs mb-6",
                      id: "add-group",
                      label: " ",
                      "label-for": "add"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { id: "add" }, toDisplayString(foundAddress.value), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    foundAddresses.value.length > 0 && showFullAddress.value == false ? (openBlock(), createBlock(_component_BFormGroup, {
                      key: 4,
                      class: "account-inputs mb-6",
                      id: "addm-group",
                      label: " ",
                      "label-for": "addm"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { id: "addm" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(foundAddresses.value, (item, index) => {
                            return openBlock(), createBlock(_component_BFormRadio, {
                              style: { "width": "300px" },
                              class: "account-radios",
                              modelValue: selectedAddress.value,
                              "onUpdate:modelValue": ($event) => selectedAddress.value = $event,
                              key: index,
                              name: "some-radios",
                              value: index
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.text), 1)
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "value"]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_BFormCheckbox, {
                      id: "default_billing",
                      modelValue: form.value.address.default_billing,
                      "onUpdate:modelValue": ($event) => form.value.address.default_billing = $event,
                      name: "default_billing"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("form_default_billing")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BFormCheckbox, {
                      id: "default_shipping",
                      modelValue: form.value.address.default_shipping,
                      "onUpdate:modelValue": ($event) => form.value.address.default_shipping = $event,
                      name: "default_shipping"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("form_default_shipping")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BCol, { md: "6" }, {
                default: withCtx(() => [
                  createVNode("h2", null, toDisplayString(_ctx.$t("contact_information")), 1),
                  createVNode(_component_BFormGroup, {
                    class: "account-inputs mb-6",
                    id: "first-name-group",
                    label: _ctx.$t("form_first_name") + "*",
                    "label-for": "first_name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "first_name",
                        modelValue: form.value.firstname,
                        "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                        type: "text",
                        onBlur: ($event) => validateFirstName(),
                        state: form.value.firstnameState,
                        "aria-describedby": "firstname-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "firstname-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.value.firstnameError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_BFormGroup, {
                    class: "account-inputs mb-6",
                    id: "last-name-group",
                    label: _ctx.$t("form_last_name") + "*",
                    "label-for": "last_name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "last_name",
                        modelValue: form.value.lastname,
                        "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                        type: "text",
                        onBlur: ($event) => validateLastName(),
                        state: form.value.lastnameState,
                        "aria-describedby": "lastname-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "lastname-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.value.lastnameError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_BFormCheckbox, {
                    id: "checkbox-1",
                    modelValue: isCompany.value,
                    "onUpdate:modelValue": ($event) => isCompany.value = $event,
                    name: "checkbox-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  isCompany.value ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "company-group",
                      label: _ctx.$t("form_company_name") + "*",
                      "label-for": "company"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "company",
                          modelValue: form.value.company,
                          "onUpdate:modelValue": ($event) => form.value.company = $event,
                          type: "text",
                          onBlur: ($event) => validateCompany(),
                          state: form.value.companyState,
                          "aria-describedby": "company-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "company-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.value.companyError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs mb-6",
                      id: "taxvat-group",
                      label: _ctx.$t("form_vat_number"),
                      "label-for": "taxvat"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "taxvat",
                          modelValue: form.value.taxvat,
                          "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                          type: "text",
                          state: form.value.taxvatState,
                          "aria-describedby": "taxvat-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "taxvat-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.value.taxvatError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])) : createCommentVNode("", true),
                  createVNode(_component_BFormGroup, {
                    class: "account-inputs mb-6",
                    id: "telephone-group",
                    label: _ctx.$t("form_phone") + "*",
                    "label-for": "telephone"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "telephone",
                        modelValue: form.value.address.telephone,
                        "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                        type: "text",
                        onBlur: ($event) => validatePhone(),
                        state: form.value.address.telephoneState,
                        "aria-describedby": "address.telephone-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "address.telephone-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }),
              createVNode(_component_BCol, { md: "6" }, {
                default: withCtx(() => [
                  createVNode("h2", null, toDisplayString(_ctx.$t("form_street")), 1),
                  showFullAddress.value ? (openBlock(), createBlock(_component_BFormGroup, {
                    key: 0,
                    class: "account-inputs mb-6",
                    id: "street-group",
                    label: _ctx.$t("form_street") + "*",
                    "label-for": "street"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "street",
                        modelValue: form.value.address.streetDisplay,
                        "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                        type: "text",
                        onBlur: ($event) => validateStreet(),
                        state: form.value.address.streetDisplayState,
                        "aria-describedby": "address.streetDisplay-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "address.streetDisplay-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"])) : createCommentVNode("", true),
                  showFullAddress.value ? (openBlock(), createBlock(_component_BFormGroup, {
                    key: 1,
                    class: "account-inputs mb-6",
                    id: "city-group",
                    label: _ctx.$t("form_city") + "*",
                    "label-for": "city"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "city",
                        modelValue: form.value.address.city,
                        "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                        type: "text",
                        onBlur: ($event) => validateCity(),
                        state: form.value.address.cityState,
                        "aria-describedby": "address.city-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "address.city-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.value.address.cityError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"])) : createCommentVNode("", true),
                  createVNode(_component_BFormGroup, {
                    class: "account-inputs mb-6",
                    id: "country-group",
                    label: _ctx.$t("form_country") + "*",
                    "label-for": "country"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormSelect, {
                        id: "country",
                        modelValue: form.value.address.country_code,
                        "onUpdate:modelValue": ($event) => form.value.address.country_code = $event,
                        options: countries.value,
                        class: "select"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  showFullAddress.value ? (openBlock(), createBlock(_component_BFormGroup, {
                    key: 2,
                    class: "account-inputs mb-6",
                    id: "postcode-group1",
                    label: _ctx.$t("form_postal_code") + "*",
                    "label-for": "postcode1"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "postcode1",
                        modelValue: form.value.address.postcode,
                        "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                        type: "text",
                        onBlur: ($event) => validatePostcode(),
                        state: form.value.address.postcodeState,
                        "aria-describedby": "address.postcode1-feedback"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "address.postcode1-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"])) : createCommentVNode("", true),
                  foundAddress.value != "" && showFullAddress.value == false ? (openBlock(), createBlock(_component_BFormGroup, {
                    key: 3,
                    class: "account-inputs mb-6",
                    id: "add-group",
                    label: " ",
                    "label-for": "add"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { id: "add" }, toDisplayString(foundAddress.value), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  foundAddresses.value.length > 0 && showFullAddress.value == false ? (openBlock(), createBlock(_component_BFormGroup, {
                    key: 4,
                    class: "account-inputs mb-6",
                    id: "addm-group",
                    label: " ",
                    "label-for": "addm"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { id: "addm" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(foundAddresses.value, (item, index) => {
                          return openBlock(), createBlock(_component_BFormRadio, {
                            style: { "width": "300px" },
                            class: "account-radios",
                            modelValue: selectedAddress.value,
                            "onUpdate:modelValue": ($event) => selectedAddress.value = $event,
                            key: index,
                            name: "some-radios",
                            value: index
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.text), 1)
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue", "value"]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_BFormCheckbox, {
                    id: "default_billing",
                    modelValue: form.value.address.default_billing,
                    "onUpdate:modelValue": ($event) => form.value.address.default_billing = $event,
                    name: "default_billing"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("form_default_billing")), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_BFormCheckbox, {
                    id: "default_shipping",
                    modelValue: form.value.address.default_shipping,
                    "onUpdate:modelValue": ($event) => form.value.address.default_shipping = $event,
                    name: "default_shipping"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("form_default_shipping")), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="form-footer">`);
      _push(ssrRenderComponent(_component_BButton, {
        onClick: cancel,
        class: "form-submit-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("cancel"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`   `);
      _push(ssrRenderComponent(_component_BButton, {
        onClick: submit,
        disabled: isBtnDisable.value,
        variant: "info",
        class: "text-white form-submit-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("save"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("save")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/account/AccountEditAddress.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AccountAddressBook",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const store = useStore();
    const selectedOption = ref(10);
    const options = [10, 20, 30];
    const fields = ref([
      {
        key: "firstname",
        label: t("form_first_name")
      },
      {
        key: "lastname",
        label: t("form_last_name")
      },
      {
        key: "street[0]",
        label: t("form_street")
      },
      {
        key: "city",
        label: t("form_city")
      },
      {
        key: "country_code",
        label: t("form_country")
      },
      {
        key: "postcode",
        label: t("form_postal_code")
      },
      {
        key: "telephone",
        label: t("form_phone")
      },
      {
        key: "btn",
        label: ""
      }
    ]);
    const tabIndex = computed({
      get() {
        return store.getters["user/getAccountTabIndex"];
      },
      set(val) {
        store.commit("user/setAccountTabIndex", val);
      }
    });
    const editAddressId = computed({
      get() {
        return store.getters["user/getEditAddressId"];
      },
      set(val) {
        store.commit("user/setEditAddressId", val);
      }
    });
    const user = computed(() => store.getters["user/getCurrentUser"]);
    const defaultBilling = computed(
      () => store.getters["user/getDefaultBillingAddress"]
    );
    const defaultShipping = computed(
      () => store.getters["user/getDefaultShippingAddress"]
    );
    const addressList = computed(() => {
      if (typeof user.value.addresses != "undefined") {
        const addresses = user.value.addresses;
        const addr = [];
        addresses.forEach((element) => {
          const btn = {
            label: t("edit"),
            label2: t("delete")
          };
          element.btn = btn;
          addr.push(element);
        });
        return addr;
      }
      return [];
    });
    const newAddress = () => {
      editAddressId.value = -1;
    };
    const Adjust = (id) => {
      editAddressId.value = id;
    };
    const Remove = (id) => {
      store.dispatch("user/deleteAddress", { id, store });
    };
    const goToEditAddress = (id = -1) => {
      tabIndex.value = 3;
      store.commit("user/setEditAddressId", id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BLink = BLink;
      const _component_BTable = BTable;
      const _component_BFormSelect = BFormSelect;
      const _component_BButton = BButton;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (editAddressId.value == 0) {
        _push(`<div><div class="account-address-book"><h1>${ssrInterpolate(_ctx.$t("address_book"))}</h1><div class="address-block"><h2>${ssrInterpolate(_ctx.$t("default_addresses"))}</h2>`);
        _push(ssrRenderComponent(_component_BRow, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BCol, { sm: "6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3${_scopeId2}>${ssrInterpolate(_ctx.$t("default_billing_address"))}</h3>`);
                    if (defaultBilling.value == null) {
                      _push3(`<div${_scopeId2}>${ssrInterpolate(_ctx.$t("no_default_billing_address"))}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (defaultBilling.value != null) {
                      _push3(`<address${_scopeId2}><span${_scopeId2}>${ssrInterpolate(defaultBilling.value.firstname)} ${ssrInterpolate(defaultBilling.value.lastname)}</span>`);
                      if (defaultBilling.value.company != null) {
                        _push3(`<span${_scopeId2}>${ssrInterpolate(defaultBilling.value.company)}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<span${_scopeId2}>${ssrInterpolate(defaultBilling.value.street[0])}</span><span${_scopeId2}>${ssrInterpolate(defaultBilling.value.city)}, ${ssrInterpolate(defaultBilling.value.postcode)}</span><span${_scopeId2}>${ssrInterpolate(defaultBilling.value.country_code)}</span><span${_scopeId2}>T:<a${ssrRenderAttr("href", `tel:` + defaultBilling.value.telephone)}${_scopeId2}>${ssrInterpolate(defaultBilling.value.telephone)}</a></span>`);
                      if (defaultBilling.value.vat_id != null) {
                        _push3(`<span${_scopeId2}>VAT:${ssrInterpolate(defaultBilling.value.vat_id)}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</address>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_BLink, {
                      class: "link",
                      onClick: ($event) => {
                        var _a;
                        return goToEditAddress((_a = defaultBilling.value) == null ? void 0 : _a.id);
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("edit_address"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("edit_address")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("h3", null, toDisplayString(_ctx.$t("default_billing_address")), 1),
                      defaultBilling.value == null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("no_default_billing_address")), 1)) : createCommentVNode("", true),
                      defaultBilling.value != null ? (openBlock(), createBlock("address", { key: 1 }, [
                        createVNode("span", null, toDisplayString(defaultBilling.value.firstname) + " " + toDisplayString(defaultBilling.value.lastname), 1),
                        defaultBilling.value.company != null ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(defaultBilling.value.company), 1)) : createCommentVNode("", true),
                        createVNode("span", null, toDisplayString(defaultBilling.value.street[0]), 1),
                        createVNode("span", null, toDisplayString(defaultBilling.value.city) + ", " + toDisplayString(defaultBilling.value.postcode), 1),
                        createVNode("span", null, toDisplayString(defaultBilling.value.country_code), 1),
                        createVNode("span", null, [
                          createTextVNode("T:"),
                          createVNode("a", {
                            href: `tel:` + defaultBilling.value.telephone
                          }, toDisplayString(defaultBilling.value.telephone), 9, ["href"])
                        ]),
                        defaultBilling.value.vat_id != null ? (openBlock(), createBlock("span", { key: 1 }, "VAT:" + toDisplayString(defaultBilling.value.vat_id), 1)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode(_component_BLink, {
                        class: "link",
                        onClick: ($event) => {
                          var _a;
                          return goToEditAddress((_a = defaultBilling.value) == null ? void 0 : _a.id);
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("edit_address")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BCol, { sm: "6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3${_scopeId2}>${ssrInterpolate(_ctx.$t("default_shipping_address"))}</h3>`);
                    if (defaultShipping.value == null) {
                      _push3(`<div${_scopeId2}>${ssrInterpolate(_ctx.$t("no_default_shipping_address"))}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (defaultShipping.value != null) {
                      _push3(`<address${_scopeId2}><span${_scopeId2}>${ssrInterpolate(defaultShipping.value.firstname)} ${ssrInterpolate(defaultShipping.value.lastname)}</span>`);
                      if (defaultShipping.value.company != null) {
                        _push3(`<span${_scopeId2}>${ssrInterpolate(defaultShipping.value.company)}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<span${_scopeId2}>${ssrInterpolate(defaultShipping.value.street[0])}</span><span${_scopeId2}>${ssrInterpolate(defaultShipping.value.city)}, ${ssrInterpolate(defaultShipping.value.postcode)}</span><span${_scopeId2}>${ssrInterpolate(defaultShipping.value.country_code)}</span><span${_scopeId2}>T:<a${ssrRenderAttr("href", `tel:` + defaultShipping.value.telephone)}${_scopeId2}>${ssrInterpolate(defaultShipping.value.telephone)}</a></span>`);
                      if (defaultShipping.value.vat_id != null) {
                        _push3(`<span${_scopeId2}>VAT:${ssrInterpolate(defaultShipping.value.vat_id)}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</address>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_BLink, {
                      class: "link",
                      onClick: ($event) => {
                        var _a;
                        return goToEditAddress((_a = defaultShipping.value) == null ? void 0 : _a.id);
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("edit_address"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("edit_address")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("h3", null, toDisplayString(_ctx.$t("default_shipping_address")), 1),
                      defaultShipping.value == null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("no_default_shipping_address")), 1)) : createCommentVNode("", true),
                      defaultShipping.value != null ? (openBlock(), createBlock("address", { key: 1 }, [
                        createVNode("span", null, toDisplayString(defaultShipping.value.firstname) + " " + toDisplayString(defaultShipping.value.lastname), 1),
                        defaultShipping.value.company != null ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(defaultShipping.value.company), 1)) : createCommentVNode("", true),
                        createVNode("span", null, toDisplayString(defaultShipping.value.street[0]), 1),
                        createVNode("span", null, toDisplayString(defaultShipping.value.city) + ", " + toDisplayString(defaultShipping.value.postcode), 1),
                        createVNode("span", null, toDisplayString(defaultShipping.value.country_code), 1),
                        createVNode("span", null, [
                          createTextVNode("T:"),
                          createVNode("a", {
                            href: `tel:` + defaultShipping.value.telephone
                          }, toDisplayString(defaultShipping.value.telephone), 9, ["href"])
                        ]),
                        defaultShipping.value.vat_id != null ? (openBlock(), createBlock("span", { key: 1 }, "VAT:" + toDisplayString(defaultShipping.value.vat_id), 1)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode(_component_BLink, {
                        class: "link",
                        onClick: ($event) => {
                          var _a;
                          return goToEditAddress((_a = defaultShipping.value) == null ? void 0 : _a.id);
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("edit_address")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BCol, { sm: "6" }, {
                  default: withCtx(() => [
                    createVNode("h3", null, toDisplayString(_ctx.$t("default_billing_address")), 1),
                    defaultBilling.value == null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("no_default_billing_address")), 1)) : createCommentVNode("", true),
                    defaultBilling.value != null ? (openBlock(), createBlock("address", { key: 1 }, [
                      createVNode("span", null, toDisplayString(defaultBilling.value.firstname) + " " + toDisplayString(defaultBilling.value.lastname), 1),
                      defaultBilling.value.company != null ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(defaultBilling.value.company), 1)) : createCommentVNode("", true),
                      createVNode("span", null, toDisplayString(defaultBilling.value.street[0]), 1),
                      createVNode("span", null, toDisplayString(defaultBilling.value.city) + ", " + toDisplayString(defaultBilling.value.postcode), 1),
                      createVNode("span", null, toDisplayString(defaultBilling.value.country_code), 1),
                      createVNode("span", null, [
                        createTextVNode("T:"),
                        createVNode("a", {
                          href: `tel:` + defaultBilling.value.telephone
                        }, toDisplayString(defaultBilling.value.telephone), 9, ["href"])
                      ]),
                      defaultBilling.value.vat_id != null ? (openBlock(), createBlock("span", { key: 1 }, "VAT:" + toDisplayString(defaultBilling.value.vat_id), 1)) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    createVNode(_component_BLink, {
                      class: "link",
                      onClick: ($event) => {
                        var _a;
                        return goToEditAddress((_a = defaultBilling.value) == null ? void 0 : _a.id);
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("edit_address")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(_component_BCol, { sm: "6" }, {
                  default: withCtx(() => [
                    createVNode("h3", null, toDisplayString(_ctx.$t("default_shipping_address")), 1),
                    defaultShipping.value == null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("no_default_shipping_address")), 1)) : createCommentVNode("", true),
                    defaultShipping.value != null ? (openBlock(), createBlock("address", { key: 1 }, [
                      createVNode("span", null, toDisplayString(defaultShipping.value.firstname) + " " + toDisplayString(defaultShipping.value.lastname), 1),
                      defaultShipping.value.company != null ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(defaultShipping.value.company), 1)) : createCommentVNode("", true),
                      createVNode("span", null, toDisplayString(defaultShipping.value.street[0]), 1),
                      createVNode("span", null, toDisplayString(defaultShipping.value.city) + ", " + toDisplayString(defaultShipping.value.postcode), 1),
                      createVNode("span", null, toDisplayString(defaultShipping.value.country_code), 1),
                      createVNode("span", null, [
                        createTextVNode("T:"),
                        createVNode("a", {
                          href: `tel:` + defaultShipping.value.telephone
                        }, toDisplayString(defaultShipping.value.telephone), 9, ["href"])
                      ]),
                      defaultShipping.value.vat_id != null ? (openBlock(), createBlock("span", { key: 1 }, "VAT:" + toDisplayString(defaultShipping.value.vat_id), 1)) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    createVNode(_component_BLink, {
                      class: "link",
                      onClick: ($event) => {
                        var _a;
                        return goToEditAddress((_a = defaultShipping.value) == null ? void 0 : _a.id);
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("edit_address")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="address-block"><h2>Adressen toevoegen</h2><div class="address-table-wrap">`);
        if (addressList.value && addressList.value.length === 0) {
          _push(`<h3> U heeft geen andere adressen toegevoegd aan uw adressenboek. </h3>`);
        } else {
          _push(`<!---->`);
        }
        if (addressList.value && addressList.value.length !== 0) {
          _push(ssrRenderComponent(_component_BTable, {
            key: addressList.value,
            class: "address-table",
            responsive: "",
            items: addressList.value,
            "per-page": selectedOption.value,
            fields: fields.value
          }, {
            "cell(btn)": withCtx((data, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="adjust"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BLink, {
                  onClick: ($event) => Adjust(data.item.id)
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(data.value.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(data.value.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</span><span class="remove"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BLink, {
                  onClick: ($event) => Remove(data.item.id)
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(data.value.label2)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(data.value.label2), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</span>`);
              } else {
                return [
                  createVNode("span", { class: "adjust" }, [
                    createVNode(_component_BLink, {
                      onClick: ($event) => Adjust(data.item.id)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(data.value.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  createVNode("span", { class: "remove" }, [
                    createVNode(_component_BLink, {
                      onClick: ($event) => Remove(data.item.id)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(data.value.label2), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (addressList.value && addressList.value.length !== 0) {
          _push(`<div class="select-group d-flex justify-content-end"><span>Toon</span><div class="select-wrap">`);
          _push(ssrRenderComponent(_component_BFormSelect, {
            modelValue: selectedOption.value,
            "onUpdate:modelValue": ($event) => selectedOption.value = $event,
            options,
            class: "select"
          }, null, _parent));
          _push(`</div><span>per pagina</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="form-footer">`);
        _push(ssrRenderComponent(_component_BButton, {
          onClick: ($event) => newAddress(),
          type: "button",
          variant: "info",
          class: "text-white form-submit-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Adres toevoegen`);
            } else {
              return [
                createTextVNode("Adres toevoegen")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (editAddressId.value != 0) {
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/account/AccountAddressBook.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "NotifyModal",
  __ssrInlineRender: true,
  props: {
    show: Boolean,
    productSku: String
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const store = useStore();
    const { t } = useI18n();
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
    const email = ref("");
    const emailState = ref(null);
    const emailError = ref("");
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    async function submit() {
      if (email.value.length === 0 && !isLoggedIn.value) {
        emailState.value = false;
        emailError.value = t("email_is_required_field");
      } else if (!emailReg.test(email.value) && !isLoggedIn.value) {
        emailState.value = false;
        emailError.value = t("email_is_invalid_field");
      } else {
        emailState.value = true;
        emailError.value = "";
      }
      if (emailState.value) {
        const retval = await store.dispatch("product/addNotifyEmail", {
          email: email.value,
          sku: props.productSku
        });
        if (retval === true) {
          const msg = {
            type: "success",
            title: t("Notify Me"),
            text: t("notify_subscribe_success")
          };
          store.dispatch("messages/sendMessage", { message: msg });
          email.value = "";
          emit("close");
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BModal = BModal;
      const _component_BFormInput = BFormInput;
      const _component_BFormInvalidFeedback = BFormInvalidFeedback;
      _push(ssrRenderComponent(_component_BModal, mergeProps({
        id: "modal-notify",
        "dialog-class": "notify-modal",
        title: _ctx.$t("Notify Me"),
        visible: __props.show,
        onHide: ($event) => _ctx.$emit("close"),
        centered: "",
        "hide-footer": "",
        "cancel-disabled": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Ontvang een melding zodra het product weer beschikbaar is.</p><div class="notify-input-wrap"${_scopeId}><div class="notify-input"${_scopeId}>`);
            if (!isLoggedIn.value) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                id: "notify-email",
                modelValue: email.value,
                "onUpdate:modelValue": ($event) => email.value = $event,
                modelModifiers: { trim: true },
                state: emailState.value,
                "aria-describedby": "invalid-notify-email",
                placeholder: _ctx.$t("Enter email to get notified")
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "invalid-notify-email" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(emailError.value)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(emailError.value), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><button class="c-btn c-btn-primary btn-notify"${_scopeId}>${ssrInterpolate(_ctx.$t("notify_btn"))}</button></div>`);
          } else {
            return [
              createVNode("p", null, "Ontvang een melding zodra het product weer beschikbaar is."),
              createVNode("div", { class: "notify-input-wrap" }, [
                createVNode("div", { class: "notify-input" }, [
                  !isLoggedIn.value ? (openBlock(), createBlock(_component_BFormInput, {
                    key: 0,
                    id: "notify-email",
                    modelValue: email.value,
                    "onUpdate:modelValue": ($event) => email.value = $event,
                    modelModifiers: { trim: true },
                    state: emailState.value,
                    "aria-describedby": "invalid-notify-email",
                    placeholder: _ctx.$t("Enter email to get notified")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "state", "placeholder"])) : createCommentVNode("", true),
                  createVNode(_component_BFormInvalidFeedback, { id: "invalid-notify-email" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(emailError.value), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("button", {
                  class: "c-btn c-btn-primary btn-notify",
                  onClick: submit
                }, toDisplayString(_ctx.$t("notify_btn")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/common/NotifyModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a,
  _sfc_main$4 as b,
  _sfc_main$3 as c
};
//# sourceMappingURL=NotifyModal-DLDX7wh2.js.map
