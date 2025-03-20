import { BCardText } from "bootstrap-vue-next/components/BCard";
import { BTabs, BTab } from "bootstrap-vue-next/components/BTabs";
import { BRow, BCol, BContainer } from "bootstrap-vue-next/components/BContainer";
import { ref, computed, watch, onMounted, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, createBlock, createCommentVNode, openBlock, nextTick, resolveComponent, unref, reactive, onUnmounted, Fragment, renderList, withModifiers } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { isMobile } from "mobile-device-detect";
import { _ as _sfc_main$9 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$a } from "./Breadcrumbs-BN1xAQs-.js";
import { BButton } from "bootstrap-vue-next/components/BButton";
import { BFormInvalidFeedback } from "bootstrap-vue-next/components/BForm";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BFormGroup } from "bootstrap-vue-next/components/BFormGroup";
import { _ as _sfc_main$8, a as _sfc_main$b, b as _sfc_main$c, c as _sfc_main$d } from "./NotifyModal-DLDX7wh2.js";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BFormCheckbox } from "bootstrap-vue-next/components/BFormCheckbox";
import { u as useCartInfo } from "./FooterCopyRight-CMwhH0WW.js";
import { BPagination } from "bootstrap-vue-next/components/BPagination";
import { BTable } from "bootstrap-vue-next/components/BTable";
import { BModal } from "bootstrap-vue-next/components/BModal";
import { C as CONFIG_JSON, g as getCurrentLanguage, l as logger } from "../entry-server.js";
import axios from "axios";
import { u as useWindowSize } from "./useWindowSize-DyvB4JBF.js";
import { g as getCustomerCartToken } from "./cart-DtI-j6cN.js";
import "bootstrap-vue-next/components/BImg";
import "./products-Dsi6ZmTY.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "bootstrap-vue-next/components/BCollapse";
import "bootstrap-vue-next/components/BCarousel";
import "./base-_onQVhQ4.js";
import "@vue/shared";
import "@element-plus/icons-vue";
import "lodash-unified";
import "./BlockSimple-BHbXwFf2.js";
import "@gtm-support/vue-gtm";
import "vue-cookies";
import "vue-simple-password-meter";
import "bootstrap-vue-next/components/BFormSelect";
import "bootstrap-vue-next/components/BFormRadio";
import "./user-B9wxceAo.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vuex-router-sync";
import "vue3-lazyload";
import "@unhead/vue";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
const _sfc_main$7 = {
  __name: "AccountInformation",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const store = useStore();
    const form = ref({
      firstname: "",
      firstnameState: null,
      firstnameError: "",
      lastname: "",
      lastnameState: null,
      lastnameError: ""
    });
    const user = computed(() => store.getters["user/getCurrentUser"]);
    watch(
      user,
      () => {
        form.value.firstname = user.value.firstname;
        form.value.lastname = user.value.lastname;
      },
      { immediate: true }
    );
    onMounted(() => {
      form.value.firstname = user.value.firstname;
      form.value.lastname = user.value.lastname;
    });
    const validateFirstName = () => {
      const trimmedFirstName = form.value.firstname.trim();
      if (trimmedFirstName == "") {
        form.value.firstnameState = false;
        form.value.firstnameError = t("firstname_required");
      } else if (trimmedFirstName.length > 40) {
        form.value.firstnameState = false;
        form.value.firstnameError = t("firstname_too_long");
      } else {
        form.value.firstnameState = true;
        form.value.firstnameError = "";
      }
    };
    const validateLastName = () => {
      const trimmedLastName = form.value.lastname.trim();
      if (trimmedLastName == "") {
        form.value.lastnameState = false;
        form.value.lastnameError = t("lastname_required");
      } else if (trimmedLastName.length > 40) {
        form.value.lastnameState = false;
        form.value.lastnameError = t("lastname_too_long");
      } else {
        form.value.lastnameState = true;
        form.value.lastnameError = "";
      }
    };
    const submit = async () => {
      let formValid = true;
      if (form.value.firstnameState != true) {
        validateFirstName();
        if (form.value.firstnameState != true) {
          formValid = false;
        }
      }
      if (form.value.lastnameState != true) {
        validateLastName();
        if (form.value.lastnameState != true) {
          formValid = false;
        }
      }
      if (formValid == true) {
        const retval = await store.dispatch("user/updateAccount", {
          account: form.value,
          store
        });
        if (retval == true) {
          const msg = {
            type: "success",
            title: t("account_modify"),
            text: t("account_modified")
          };
          store.dispatch("messages/sendMessage", { message: msg });
        } else {
          const msg = {
            type: "danger",
            title: t("account_modify"),
            text: t("account_not_modified")
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-informate" }, _attrs))}><h1>${ssrInterpolate(_ctx.$t("change_account_info"))}</h1>`);
      _push(ssrRenderComponent(_component_BRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BCol, { md: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs",
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
                    class: "account-inputs",
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
                } else {
                  return [
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
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
                      class: "account-inputs",
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
                    class: "account-inputs",
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/account/AccountInformation.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "AccountMyAccount",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const tabIndex = computed({
      get: () => store.getters["user/getAccountTabIndex"],
      set: (val) => store.commit("user/setAccountTabIndex", val)
    });
    const user = computed(() => store.getters["user/getCurrentUser"]);
    const defaultBilling = computed(() => store.getters["user/getDefaultBillingAddress"]);
    const defaultShipping = computed(() => store.getters["user/getDefaultShippingAddress"]);
    function goToEditAccount() {
      tabIndex.value = 4;
    }
    function goToEditPassword() {
      tabIndex.value = 6;
    }
    function goToEditAddress(id = -1) {
      tabIndex.value = 3;
      store.commit("user/setEditAddressId", id);
    }
    function goToManageAddress() {
      tabIndex.value = 3;
      store.commit("user/setEditAddressId", 0);
    }
    function goToEditSubscription() {
      tabIndex.value = 7;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BLink = BLink;
      const _component_b_link = BLink;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-my-account" }, _attrs))}><h1>${ssrInterpolate(_ctx.$t("my_account"))}</h1><div class="address-block"><h2>${ssrInterpolate(_ctx.$t("account_information"))}</h2>`);
      _push(ssrRenderComponent(_component_BRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BCol, { sm: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3${_scopeId2}>${ssrInterpolate(_ctx.$t("contact_information"))}</h3><address${_scopeId2}><span${_scopeId2}>${ssrInterpolate(user.value.firstname)} ${ssrInterpolate(user.value.lastname)}</span><span${_scopeId2}>${ssrInterpolate(user.value.email)}</span></address>`);
                  _push3(ssrRenderComponent(_component_BLink, {
                    class: "link",
                    onClick: goToEditAccount
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("edit"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("edit")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`   |   `);
                  _push3(ssrRenderComponent(_component_BLink, {
                    class: "link",
                    onClick: goToEditPassword
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("change_password"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("change_password")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h3", null, toDisplayString(_ctx.$t("contact_information")), 1),
                    createVNode("address", null, [
                      createVNode("span", null, toDisplayString(user.value.firstname) + " " + toDisplayString(user.value.lastname), 1),
                      createVNode("span", null, toDisplayString(user.value.email), 1)
                    ]),
                    createVNode(_component_BLink, {
                      class: "link",
                      onClick: goToEditAccount
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("edit")), 1)
                      ]),
                      _: 1
                    }),
                    createTextVNode("   |   "),
                    createVNode(_component_BLink, {
                      class: "link",
                      onClick: goToEditPassword
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("change_password")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BCol, { sm: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3${_scopeId2}>${ssrInterpolate(_ctx.$t("newsletters"))}</h3>`);
                  _push3(ssrRenderComponent(_component_BLink, {
                    class: "link",
                    onClick: goToEditSubscription
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("modify_newsletters"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("modify_newsletters")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h3", null, toDisplayString(_ctx.$t("newsletters")), 1),
                    createVNode(_component_BLink, {
                      class: "link",
                      onClick: goToEditSubscription
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("modify_newsletters")), 1)
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
              createVNode(_component_BCol, { sm: "6" }, {
                default: withCtx(() => [
                  createVNode("h3", null, toDisplayString(_ctx.$t("contact_information")), 1),
                  createVNode("address", null, [
                    createVNode("span", null, toDisplayString(user.value.firstname) + " " + toDisplayString(user.value.lastname), 1),
                    createVNode("span", null, toDisplayString(user.value.email), 1)
                  ]),
                  createVNode(_component_BLink, {
                    class: "link",
                    onClick: goToEditAccount
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("edit")), 1)
                    ]),
                    _: 1
                  }),
                  createTextVNode("   |   "),
                  createVNode(_component_BLink, {
                    class: "link",
                    onClick: goToEditPassword
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("change_password")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_BCol, { sm: "6" }, {
                default: withCtx(() => [
                  createVNode("h3", null, toDisplayString(_ctx.$t("newsletters")), 1),
                  createVNode(_component_BLink, {
                    class: "link",
                    onClick: goToEditSubscription
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("modify_newsletters")), 1)
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
      _push(`</div><div class="address-block"><h2>${ssrInterpolate(_ctx.$t("address_book"))}    `);
      _push(ssrRenderComponent(_component_b_link, {
        class: "link",
        onClick: goToManageAddress
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("manage_addresses"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("manage_addresses")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2>`);
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/account/AccountMyAccount.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "NewsletterSubscription",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isSaveBtnDisabled = ref(false);
    const isSubscribed = ref(false);
    const user = computed(() => store.getters["user/getCurrentUser"]);
    onMounted(() => {
      isSubscribed.value = user.value.is_subscribed;
    });
    const save = async () => {
      isSaveBtnDisabled.value = true;
      await store.dispatch("user/updateUserNewsletter", {
        is_subscribed: isSubscribed.value,
        store
      });
      isSaveBtnDisabled.value = false;
    };
    watch(
      () => user.value.is_subscribed,
      () => {
        isSubscribed.value = user.value.is_subscribed;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BFormCheckbox = BFormCheckbox;
      const _component_BButton = BButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-newsletter" }, _attrs))}><div><div class="account-address-book"><h1>${ssrInterpolate(_ctx.$t("newsletter_subscriptions"))}</h1><div class="address-block"><h2>${ssrInterpolate(_ctx.$t("newsletter_subscription_option"))}</h2>`);
      _push(ssrRenderComponent(_component_BRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BCol, { sm: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BFormCheckbox, {
                    id: "checkbox-1",
                    name: "checkbox-1",
                    "label-for": "checkbox1",
                    modelValue: isSubscribed.value,
                    "onUpdate:modelValue": ($event) => isSubscribed.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("newsletter_subscription_selected"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("newsletter_subscription_selected")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BFormCheckbox, {
                      id: "checkbox-1",
                      name: "checkbox-1",
                      "label-for": "checkbox1",
                      modelValue: isSubscribed.value,
                      "onUpdate:modelValue": ($event) => isSubscribed.value = $event
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("newsletter_subscription_selected")), 1)
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
              createVNode(_component_BCol, { sm: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_BFormCheckbox, {
                    id: "checkbox-1",
                    name: "checkbox-1",
                    "label-for": "checkbox1",
                    modelValue: isSubscribed.value,
                    "onUpdate:modelValue": ($event) => isSubscribed.value = $event
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("newsletter_subscription_selected")), 1)
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
        disabled: isSaveBtnDisabled.value,
        onClick: save,
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
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/account/NewsletterSubscription.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "VueLazyBackgroundImage",
  __ssrInlineRender: true,
  props: {
    imageSource: {
      type: String,
      required: true
    },
    imageClass: {
      type: String,
      default: ""
    },
    loadingImage: {
      type: String,
      required: true
    },
    errorImage: {
      type: String,
      required: true
    },
    imageErrorCallback: {
      type: Function,
      default: () => {
      }
    },
    imageSuccessCallback: {
      type: Function,
      default: () => {
      }
    },
    backgroundSize: {
      type: String,
      default: "cover"
    }
  },
  setup(__props) {
    const isServer = typeof window === "undefined";
    const props = __props;
    const imageWidth = ref(0);
    const imageHeight = ref(0);
    const imageState = ref("loading");
    const asyncImage = isServer ? null : new Image();
    const computedStyle = computed(() => {
      if (imageState.value === "loading") {
        return `background-image: url(${props.loadingImage});`;
      }
      if (imageState.value === "error") {
        return `background-image: url(${props.errorImage});`;
      }
      if (imageState.value === "loaded") {
        return `background-image: url(${asyncImage.src}); background-size: ${props.backgroundSize}`;
      }
      return "";
    });
    const fetchImage = () => {
      asyncImage.onload = imageOnLoad;
      asyncImage.onerror = imageOnError;
      imageState.value = "loading";
      asyncImage.src = props.imageSource;
    };
    const imageOnLoad = () => {
      imageState.value = "loaded";
      imageWidth.value = asyncImage.naturalWidth;
      imageHeight.value = asyncImage.naturalHeight;
      props.imageSuccessCallback();
    };
    const imageOnError = () => {
      imageState.value = "error";
      props.imageErrorCallback();
    };
    onMounted(() => {
      nextTick(() => {
        fetchImage();
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [__props.imageClass, imageState.value],
        style: computedStyle.value,
        "data-width": imageWidth.value,
        "data-height": imageHeight.value,
        "data-state": imageState.value
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/core/VueLazyBackgroundImage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ProductCardWishlist",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    useStore();
    const onSale = computed(() => false);
    const onNew = computed(() => false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-card--holder" }, _attrs))}><a href="#" class="lnr lnr-cross add-to-wishlist"></a>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/${__props.product.product.url_key}`,
        class: "product-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.product.product.image.large != null) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                "image-source": __props.product.product.image.large,
                "image-class": "product-card--img-top",
                errorImage: "@/base/assets/logo.jpg",
                loadingImage: "@/base/assets/logo.jpg",
                style: { "background-size": "contain" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="actionbuttons"${_scopeId2}>`);
                    if (onSale.value) {
                      _push3(`<span class="sale-txt"${_scopeId2}>sale</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (onNew.value) {
                      _push3(`<span class="sale-txt"${_scopeId2}>new</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "actionbuttons" }, [
                        onSale.value ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "sale-txt"
                        }, "sale")) : createCommentVNode("", true),
                        onNew.value ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "sale-txt"
                        }, "new")) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="product-card--product-name"${_scopeId}>${ssrInterpolate(__props.product.product.name)}</div><span class="d-block product-card--price"${_scopeId}>€${ssrInterpolate(__props.product.product.price_range.minimum_price.final_price.value.toFixed(2).replace(".", ","))}</span>`);
          } else {
            return [
              __props.product.product.image.large != null ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(unref(_sfc_main$4), {
                  "image-source": __props.product.product.image.large,
                  "image-class": "product-card--img-top",
                  errorImage: "@/base/assets/logo.jpg",
                  loadingImage: "@/base/assets/logo.jpg",
                  style: { "background-size": "contain" }
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "actionbuttons" }, [
                      onSale.value ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "sale-txt"
                      }, "sale")) : createCommentVNode("", true),
                      onNew.value ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "sale-txt"
                      }, "new")) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }, 8, ["image-source"])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "product-card--product-name" }, toDisplayString(__props.product.product.name), 1),
              createVNode("span", { class: "d-block product-card--price" }, "€" + toDisplayString(__props.product.product.price_range.minimum_price.final_price.value.toFixed(2).replace(".", ",")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/account/ProductCardWishlist.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AccountWishlist",
  __ssrInlineRender: true,
  setup(__props) {
    const { wishlistItems } = useCartInfo();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wishlist" }, _attrs))}><h1>Wensenlijst</h1><div class="row"><!--[-->`);
      ssrRenderList(unref(wishlistItems), (product) => {
        _push(`<div class="col-6 col-md-4 mb-md-45">`);
        _push(ssrRenderComponent(unref(_sfc_main$3), { product }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/account/AccountWishlist.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AccountOrders",
  __ssrInlineRender: true,
  props: {
    isTabShow: {
      type: Boolean
    }
  },
  setup(__props) {
    const store = useStore();
    useRouter();
    const windowSize = useWindowSize();
    const { t } = useI18n();
    const isMobileScreen = ref(windowSize.width <= 768);
    const showOrders = ref(true);
    const orderDetail = ref(null);
    const showNotifyModal = ref(false);
    const notifyModalProduct = ref(null);
    const outOfStockProductsModal = ref(false);
    const outOfStockProductsList = ref([]);
    const paginationConf = reactive({
      currentPageNr: 1,
      perPage: 9
    });
    const fields = ref([
      {
        key: "number",
        label: t("order_number")
      },
      {
        key: "order_date",
        label: t("order_date"),
        formatter: (value) => convertDate(value)
      },
      {
        key: "billing_address",
        label: t("send_to"),
        formatter: (value) => value.firstname + " " + value.lastname
      },
      {
        key: "price",
        label: t("grand_total"),
        formatter: (value, key, item) => {
          return formatCurrency(item.total.base_grand_total.value);
        }
      },
      {
        key: "status",
        label: t("status")
      },
      {
        key: "action",
        label: t("action")
      }
    ]);
    const ordersList = computed(() => {
      const orders = store.getters["user/getMyOrders"];
      orders.forEach((element, index) => {
        orders[index].status = t(element.status);
      });
      orders.sort((a, b) => a.order_date > b.order_date ? -1 : 1);
      return orders;
    });
    computed(() => store.getters["cart/getCartItems"]);
    const activeTab = computed(() => store.getters["user/getAccountTabIndex"]);
    const rows = computed(() => ordersList.value.length);
    const allowedReorder = computed(() => CONFIG_JSON.allow_reorder);
    function formatCurrency(value) {
      const formatter = new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR"
      });
      return formatter.format(value);
    }
    function convertDate(date) {
      let reviewDate = new Date(date);
      let dd = reviewDate.getDate();
      let mm = reviewDate.getMonth() + 1;
      let yyyy = reviewDate.getFullYear();
      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;
      reviewDate = `${dd}-${mm}-${yyyy}`;
      return reviewDate;
    }
    function tmp(id) {
      paginationConf.currentPageNr = id;
    }
    function viewOrder(data) {
      if (Array.isArray(data.items) && data.items[0]) {
        showOrders.value = false;
        orderDetail.value = data;
      } else {
        const msg = {
          type: "danger",
          title: t("view_order"),
          text: t("details_not_found")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      }
    }
    function viewOrderList() {
      showOrders.value = true;
      orderDetail.value = null;
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    function closeNotifyModal() {
      notifyModalProduct.value = null;
      showNotifyModal.value = false;
    }
    async function orderAgain(order) {
      const lang = getCurrentLanguage();
      const storelang = CONFIG_JSON.languages[lang];
      const storeview = storelang.storeview;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.getters["user/getUserToken"]}`,
        Store: storeview
      };
      const query = `mutation {
    reorderItems(orderNumber: "${order.number}") {
      cart {
        id
        items {
          uid
          product { sku }
          quantity
          prices { price { value } }
        }
      }
      userInputErrors { code message path }
    }
  }`;
      const retval = await axios({
        url: CONFIG_JSON.shop.graphQLURL,
        method: "POST",
        headers,
        data: { query }
      }).catch((e) => {
        logger.error("reOrder", "Account orders", e)();
        throw e;
      });
      if (retval.data.data.reorderItems) {
        if (retval.data.data.reorderItems.userInputErrors.length === 0) {
          if (!store.getters["cart/getCartServerToken"] && !localStorage.getItem("cartServerToken")) {
            const newCartToken = await getCustomerCartToken(store);
            store.commit("cart/setServerToken", newCartToken);
          }
          await store.dispatch("cart/loadCart", { store });
          const msg = {
            type: "success",
            title: t("shopping_basket"),
            text: t("added_product")
          };
          store.dispatch("messages/sendMessage", { message: msg });
        } else {
          const errors = retval.data.data.reorderItems.userInputErrors;
          errors.forEach((element) => {
            const msg = {
              type: "danger",
              title: t("shopping_basket"),
              text: element.message
            };
            store.dispatch("messages/sendMessage", { message: msg });
          });
          store.dispatch("cart/loadCart", { store });
        }
      }
    }
    function updateScreenSize() {
      isMobileScreen.value = window.innerWidth <= 768;
    }
    watch(activeTab, () => {
      showOrders.value = true;
    });
    onMounted(() => {
      store.dispatch("user/loadOrders", { page: 1, perPage: 10, store });
      window.addEventListener("resize", updateScreenSize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateScreenSize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BModal = BModal;
      const _component_BTable = BTable;
      const _component_BLink = BLink;
      const _component_BPagination = BPagination;
      const _component_b_link = BLink;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-orders" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        show: showNotifyModal.value,
        "product-sku": notifyModalProduct.value && notifyModalProduct.value.sku,
        onClose: closeNotifyModal
      }, null, _parent));
      _push(ssrRenderComponent(_component_BModal, {
        id: "modal",
        modelValue: outOfStockProductsModal.value,
        "onUpdate:modelValue": ($event) => outOfStockProductsModal.value = $event,
        size: "md",
        "content-class": "no-product-stock",
        title: "Product(en) die niet op voorraad zijn",
        centered: "",
        onHide: ($event) => {
          outOfStockProductsList.value = [];
          outOfStockProductsModal.value = false;
        },
        "hide-footer": true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="no-product-wrap"${_scopeId}><!--[-->`);
            ssrRenderList(outOfStockProductsList.value, (product) => {
              _push2(`<div class="no-product-box"${_scopeId}><img${ssrRenderAttr("src", product.image.medium)}${_scopeId}><div class="info-popup"${_scopeId}><h2${_scopeId}>${ssrInterpolate(product.product_name)}</h2><p class="my-price"${_scopeId}>${ssrInterpolate(formatCurrency(product.product_sale_price.value))}</p></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "no-product-wrap" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(outOfStockProductsList.value, (product) => {
                  return openBlock(), createBlock("div", {
                    class: "no-product-box",
                    key: product.product_sku
                  }, [
                    createVNode("img", {
                      src: product.image.medium
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "info-popup" }, [
                      createVNode("h2", null, toDisplayString(product.product_name), 1),
                      createVNode("p", { class: "my-price" }, toDisplayString(formatCurrency(product.product_sale_price.value)), 1)
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (showOrders.value) {
        _push(`<div class="${ssrRenderClass([{ "hide-tab-content": __props.isTabShow && isMobileScreen.value }, "address-block"])}"><h1>${ssrInterpolate(_ctx.$t("my_orders"))}</h1>`);
        if (isMobileScreen.value) {
          _push(`<div class="back-link"><i class="lnr lnr-chevron-left"></i><span>${ssrInterpolate(_ctx.$t("go_back"))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="address-table-wrap">`);
        if (ordersList.value && ordersList.value.length === 0) {
          _push(`<h3>${ssrInterpolate(_ctx.$t("no_orders_available"))}</h3>`);
        } else {
          _push(`<!---->`);
        }
        if (ordersList.value && ordersList.value.length > 0) {
          _push(`<!--[-->`);
          if (!isMobileScreen.value) {
            _push(ssrRenderComponent(_component_BTable, {
              id: "order-table",
              class: "address-table",
              responsive: "",
              items: ordersList.value,
              fields: fields.value,
              "per-page": paginationConf.perPage,
              "current-page": paginationConf.currentPageNr
            }, {
              "cell(action)": withCtx((data, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="${ssrRenderClass([{ "only-view": !allowedReorder.value }, "order-btn-action"])}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BLink, {
                    class: "c-btn c-btn-primary",
                    onClick: ($event) => viewOrder(data.item)
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t("view_order"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("view_order")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  if (allowedReorder.value) {
                    _push2(`<span${_scopeId}> | </span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (allowedReorder.value) {
                    _push2(ssrRenderComponent(_component_BLink, {
                      class: "c-btn c-btn-green",
                      onClick: ($event) => orderAgain(data.item)
                    }, {
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("order_again"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("order_again")), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["order-btn-action", { "only-view": !allowedReorder.value }]
                    }, [
                      createVNode(_component_BLink, {
                        class: "c-btn c-btn-primary",
                        onClick: ($event) => viewOrder(data.item)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("view_order")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      allowedReorder.value ? (openBlock(), createBlock("span", { key: 0 }, " | ")) : createCommentVNode("", true),
                      allowedReorder.value ? (openBlock(), createBlock(_component_BLink, {
                        key: 1,
                        class: "c-btn c-btn-green",
                        onClick: ($event) => orderAgain(data.item)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("order_again")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                    ], 2)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (isMobileScreen.value) {
            _push(`<div class="mobile-order"><div class="mo-inner"><div class="mo-title"><label>${ssrInterpolate(_ctx.$t("order_detail"))}</label><label>${ssrInterpolate(_ctx.$t("action"))}</label></div><div class="mo-info"><ul><!--[-->`);
            ssrRenderList(ordersList.value, (product) => {
              _push(`<li${ssrRenderAttr("per-page", paginationConf.perPage)}${ssrRenderAttr("current-page", paginationConf.currentPageNr)}><div class="text"><label>${ssrInterpolate(product.number)}</label><p>${ssrInterpolate(convertDate(product.order_date))}</p><p>${ssrInterpolate(product.billing_address && product.billing_address.firstname + " " + product.billing_address.lastname)}</p><p>${ssrInterpolate(formatCurrency(product.total.base_grand_total.value))}</p><span>${ssrInterpolate(product.status)}</span></div><div class="action">`);
              _push(ssrRenderComponent(_component_BLink, {
                class: "c-btn c-btn-primary",
                onClick: ($event) => viewOrder(product)
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(_ctx.$t("view_order"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("view_order")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              if (allowedReorder.value) {
                _push(ssrRenderComponent(_component_BLink, {
                  class: "c-btn c-btn-green",
                  onClick: ($event) => orderAgain(product)
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(_ctx.$t("order_again"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("order_again")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`</div></li>`);
            });
            _push(`<!--]--></ul></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="cst-pagination-bar"><label> Pagina <span>${ssrInterpolate(paginationConf.currentPageNr)}</span> van <span>${ssrInterpolate(Math.ceil(rows.value / paginationConf.perPage))}</span></label>`);
          _push(ssrRenderComponent(_component_BPagination, {
            "model-value": paginationConf.currentPageNr,
            "total-rows": rows.value,
            "per-page": paginationConf.perPage,
            class: "cst-pagination",
            "aria-controls": "order-table",
            "onUpdate:modelValue": tmp
          }, {
            page: withCtx(({ page }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BLink, {
                  class: "page-link",
                  onClick: ($event) => tmp(page)
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(page)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(page), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BLink, {
                    class: "page-link",
                    onClick: withModifiers(($event) => tmp(page), ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(page), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><div class="pagination-bar-down"><div class="left"><div class="display-drop"><label>Weergave:</label><select><option value="1"${ssrIncludeBooleanAttr(Array.isArray(paginationConf.perPage) ? ssrLooseContain(paginationConf.perPage, "1") : ssrLooseEqual(paginationConf.perPage, "1")) ? " selected" : ""}>1</option><option value="9"${ssrIncludeBooleanAttr(Array.isArray(paginationConf.perPage) ? ssrLooseContain(paginationConf.perPage, "9") : ssrLooseEqual(paginationConf.perPage, "9")) ? " selected" : ""}>9</option><option value="24"${ssrIncludeBooleanAttr(Array.isArray(paginationConf.perPage) ? ssrLooseContain(paginationConf.perPage, "24") : ssrLooseEqual(paginationConf.perPage, "24")) ? " selected" : ""}>24</option><option value="48"${ssrIncludeBooleanAttr(Array.isArray(paginationConf.perPage) ? ssrLooseContain(paginationConf.perPage, "48") : ssrLooseEqual(paginationConf.perPage, "48")) ? " selected" : ""}>48</option><option value="72"${ssrIncludeBooleanAttr(Array.isArray(paginationConf.perPage) ? ssrLooseContain(paginationConf.perPage, "72") : ssrLooseEqual(paginationConf.perPage, "72")) ? " selected" : ""}>72</option><option value="98"${ssrIncludeBooleanAttr(Array.isArray(paginationConf.perPage) ? ssrLooseContain(paginationConf.perPage, "98") : ssrLooseEqual(paginationConf.perPage, "98")) ? " selected" : ""}>98</option><option value="120"${ssrIncludeBooleanAttr(Array.isArray(paginationConf.perPage) ? ssrLooseContain(paginationConf.perPage, "120") : ssrLooseEqual(paginationConf.perPage, "120")) ? " selected" : ""}>120</option></select></div></div></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!showOrders.value && orderDetail.value) {
        _push(`<div class="order-view"><div class="title"><h2>${ssrInterpolate(_ctx.$t("order") + " " + orderDetail.value.number)}</h2><p>${ssrInterpolate(_ctx.$t("order_detail"))}</p></div><div class="order-view-inner"><div class="order-view-wrap"><!--[-->`);
        ssrRenderList(orderDetail.value.items, (product) => {
          _push(`<div class="single-product"><div class="img-wrap"><div class="img" style="${ssrRenderStyle(`background-image: url('${product.image.medium}');`)}"></div></div><div class="product-info"><div class="product-name">${ssrInterpolate(product.product_name)}</div><div class="extra-info"><div>${ssrInterpolate(_ctx.$t("number"))}: ${ssrInterpolate(product.quantity_ordered)}</div></div><div class="stock-info">`);
          if (product.product) {
            _push(`<label class="${ssrRenderClass([product.product.stock_status == "IN_STOCK" ? "in-stock" : "out-stock", "stock-status status"])}">${ssrInterpolate(_ctx.$t(product.product.stock_status == "IN_STOCK" ? "In Stock" : "Out of Stock"))}</label>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="price">${ssrInterpolate(formatCurrency(product.product_sale_price.value))}</div></div>`);
          if (allowedReorder.value) {
            _push(`<div>`);
            if (product.product && product.product.stock_status == "OUT_OF_STOCK") {
              _push(`<div class="cart-btn notify-order"><i class="fas fa-envelope"></i></div>`);
            } else {
              _push(`<div class="order-again-btn">`);
              _push(ssrRenderComponent(_component_b_link, { class: "c-btn c-btn-green" }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(_ctx.$t("order_again"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("order_again")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</div>`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><div class="common-part"><div class="address"><div class="top"><div class="date">${ssrInterpolate(_ctx.$t("order_date"))}: <span>${ssrInterpolate(convertDate(orderDetail.value.order_date))}</span></div><div class="status">${ssrInterpolate(_ctx.$t("status"))}: <span>${ssrInterpolate(orderDetail.value.status)}</span></div></div>`);
        if (orderDetail.value.billing_address) {
          _push(`<div class="address-info"><div>${ssrInterpolate(orderDetail.value.billing_address.firstname)} ${ssrInterpolate(orderDetail.value.billing_address.lastname)}</div><div>${ssrInterpolate(orderDetail.value.billing_address.street[0])}</div><div>${ssrInterpolate(orderDetail.value.billing_address.postcode)} ${ssrInterpolate(orderDetail.value.billing_address.city)}</div><div class="mo-num">${ssrInterpolate(orderDetail.value.billing_address.telephone)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="grand-total"><ul><li><label>${ssrInterpolate(_ctx.$t("total_shipping_cart"))}:</label><div><p>${ssrInterpolate(formatCurrency(orderDetail.value.total.subtotal.value))}</p></div></li><li><label>${ssrInterpolate(_ctx.$t("postage_cost"))}:</label><div><p>${ssrInterpolate(formatCurrency(orderDetail.value.total.total_shipping.value))}</p></div></li><li><label>${ssrInterpolate(_ctx.$t("VAT"))}:</label><div><p>${ssrInterpolate(formatCurrency(orderDetail.value.total.total_tax.value))}</p></div></li></ul><div class="final-price"><div class="final-total"><label>${ssrInterpolate(_ctx.$t("total_btw"))}:</label><div><p>${ssrInterpolate(formatCurrency(orderDetail.value.total.base_grand_total.value))}</p></div></div></div></div></div>`);
        _push(ssrRenderComponent(_component_BLink, {
          onClick: viewOrderList,
          class: "back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="lnr lnr-chevron-left"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("back"))}`);
            } else {
              return [
                createVNode("i", { class: "lnr lnr-chevron-left" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("back")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/account/AccountOrders.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Account",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    useRouter();
    const { t } = useI18n();
    const isTabShow = ref(true);
    ref(false);
    computed(() => store.getters["user/getIsLoggedIn"]);
    const tabIndex = computed({
      get: () => store.getters["user/getAccountTabIndex"],
      set: (val) => store.commit("user/setAccountTabIndex", val)
    });
    const isMobileScreen = computed(() => isMobile);
    const hideTabs = () => {
      isTabShow.value = false;
    };
    const showTabs = () => {
      isTabShow.value = true;
    };
    onMounted(() => {
      const bcrumb = { current: t("account"), routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_BTabs = BTabs;
      const _component_BTab = BTab;
      const _component_BCardText = BCardText;
      _push(ssrRenderComponent(unref(_sfc_main$9), _attrs, {
        default: withCtx(({}, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BContainer, { class: "account" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BTabs, {
                    pills: "",
                    card: "",
                    vertical: "",
                    modelValue: tabIndex.value,
                    "onUpdate:modelValue": ($event) => tabIndex.value = $event,
                    class: "flex-column",
                    "nav-wrapper-class": {
                      "cst-tab w-100": true,
                      sidebarhide: !isTabShow.value && isMobileScreen.value
                    }
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("my_account")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$6), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$6), {
                                  onShowTabs: showTabs,
                                  isTabShow: isTabShow.value
                                }, null, 8, ["isTabShow"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("my_orders")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BCardText, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$1), {
                                      onShowTabs: showTabs,
                                      isTabShow: isTabShow.value
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$1), {
                                        onShowTabs: showTabs,
                                        isTabShow: isTabShow.value
                                      }, null, 8, ["isTabShow"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_BCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$1), {
                                      onShowTabs: showTabs,
                                      isTabShow: isTabShow.value
                                    }, null, 8, ["isTabShow"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("my_wishlist")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BCardText, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$2), {
                                      onShowTabs: showTabs,
                                      isTabShow: isTabShow.value
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$2), {
                                        onShowTabs: showTabs,
                                        isTabShow: isTabShow.value
                                      }, null, 8, ["isTabShow"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_BCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$2), {
                                      onShowTabs: showTabs,
                                      isTabShow: isTabShow.value
                                    }, null, 8, ["isTabShow"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("address_book")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$b), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$b), {
                                  onShowTabs: showTabs,
                                  isTabShow: isTabShow.value
                                }, null, 8, ["isTabShow"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("account_information")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$7), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$7), {
                                  onShowTabs: showTabs,
                                  isTabShow: isTabShow.value
                                }, null, 8, ["isTabShow"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("change_email")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$c), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$c), {
                                  onShowTabs: showTabs,
                                  isTabShow: isTabShow.value
                                }, null, 8, ["isTabShow"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("change_password")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$d), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$d), {
                                  onShowTabs: showTabs,
                                  isTabShow: isTabShow.value
                                }, null, 8, ["isTabShow"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("newsletter_subscriptions")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$5), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$5), {
                                  onShowTabs: showTabs,
                                  isTabShow: isTabShow.value
                                }, null, 8, ["isTabShow"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BTab, {
                            onClick: hideTabs,
                            title: _ctx.$t("my_account")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, 8, ["isTabShow"])
                            ]),
                            _: 1
                          }, 8, ["title"]),
                          createVNode(_component_BTab, {
                            onClick: hideTabs,
                            title: _ctx.$t("my_orders")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BCardText, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1), {
                                    onShowTabs: showTabs,
                                    isTabShow: isTabShow.value
                                  }, null, 8, ["isTabShow"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["title"]),
                          createVNode(_component_BTab, {
                            onClick: hideTabs,
                            title: _ctx.$t("my_wishlist")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BCardText, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$2), {
                                    onShowTabs: showTabs,
                                    isTabShow: isTabShow.value
                                  }, null, 8, ["isTabShow"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["title"]),
                          createVNode(_component_BTab, {
                            onClick: hideTabs,
                            title: _ctx.$t("address_book")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$b), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, 8, ["isTabShow"])
                            ]),
                            _: 1
                          }, 8, ["title"]),
                          createVNode(_component_BTab, {
                            onClick: hideTabs,
                            title: _ctx.$t("account_information")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$7), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, 8, ["isTabShow"])
                            ]),
                            _: 1
                          }, 8, ["title"]),
                          createVNode(_component_BTab, {
                            onClick: hideTabs,
                            title: _ctx.$t("change_email")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$c), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, 8, ["isTabShow"])
                            ]),
                            _: 1
                          }, 8, ["title"]),
                          createVNode(_component_BTab, {
                            onClick: hideTabs,
                            title: _ctx.$t("change_password")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$d), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, 8, ["isTabShow"])
                            ]),
                            _: 1
                          }, 8, ["title"]),
                          createVNode(_component_BTab, {
                            onClick: hideTabs,
                            title: _ctx.$t("newsletter_subscriptions")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, 8, ["isTabShow"])
                            ]),
                            _: 1
                          }, 8, ["title"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BTabs, {
                      pills: "",
                      card: "",
                      vertical: "",
                      modelValue: tabIndex.value,
                      "onUpdate:modelValue": ($event) => tabIndex.value = $event,
                      class: "flex-column",
                      "nav-wrapper-class": {
                        "cst-tab w-100": true,
                        sidebarhide: !isTabShow.value && isMobileScreen.value
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("my_account")
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), {
                              onShowTabs: showTabs,
                              isTabShow: isTabShow.value
                            }, null, 8, ["isTabShow"])
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("my_orders")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BCardText, null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1), {
                                  onShowTabs: showTabs,
                                  isTabShow: isTabShow.value
                                }, null, 8, ["isTabShow"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("my_wishlist")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BCardText, null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), {
                                  onShowTabs: showTabs,
                                  isTabShow: isTabShow.value
                                }, null, 8, ["isTabShow"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("address_book")
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$b), {
                              onShowTabs: showTabs,
                              isTabShow: isTabShow.value
                            }, null, 8, ["isTabShow"])
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("account_information")
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$7), {
                              onShowTabs: showTabs,
                              isTabShow: isTabShow.value
                            }, null, 8, ["isTabShow"])
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("change_email")
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$c), {
                              onShowTabs: showTabs,
                              isTabShow: isTabShow.value
                            }, null, 8, ["isTabShow"])
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("change_password")
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$d), {
                              onShowTabs: showTabs,
                              isTabShow: isTabShow.value
                            }, null, 8, ["isTabShow"])
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_BTab, {
                          onClick: hideTabs,
                          title: _ctx.$t("newsletter_subscriptions")
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$5), {
                              onShowTabs: showTabs,
                              isTabShow: isTabShow.value
                            }, null, 8, ["isTabShow"])
                          ]),
                          _: 1
                        }, 8, ["title"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "nav-wrapper-class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$a)),
              createVNode(_component_BContainer, { class: "account" }, {
                default: withCtx(() => [
                  createVNode(_component_BTabs, {
                    pills: "",
                    card: "",
                    vertical: "",
                    modelValue: tabIndex.value,
                    "onUpdate:modelValue": ($event) => tabIndex.value = $event,
                    class: "flex-column",
                    "nav-wrapper-class": {
                      "cst-tab w-100": true,
                      sidebarhide: !isTabShow.value && isMobileScreen.value
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BTab, {
                        onClick: hideTabs,
                        title: _ctx.$t("my_account")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$6), {
                            onShowTabs: showTabs,
                            isTabShow: isTabShow.value
                          }, null, 8, ["isTabShow"])
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_BTab, {
                        onClick: hideTabs,
                        title: _ctx.$t("my_orders")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BCardText, null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, 8, ["isTabShow"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_BTab, {
                        onClick: hideTabs,
                        title: _ctx.$t("my_wishlist")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BCardText, null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), {
                                onShowTabs: showTabs,
                                isTabShow: isTabShow.value
                              }, null, 8, ["isTabShow"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_BTab, {
                        onClick: hideTabs,
                        title: _ctx.$t("address_book")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$b), {
                            onShowTabs: showTabs,
                            isTabShow: isTabShow.value
                          }, null, 8, ["isTabShow"])
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_BTab, {
                        onClick: hideTabs,
                        title: _ctx.$t("account_information")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), {
                            onShowTabs: showTabs,
                            isTabShow: isTabShow.value
                          }, null, 8, ["isTabShow"])
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_BTab, {
                        onClick: hideTabs,
                        title: _ctx.$t("change_email")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$c), {
                            onShowTabs: showTabs,
                            isTabShow: isTabShow.value
                          }, null, 8, ["isTabShow"])
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_BTab, {
                        onClick: hideTabs,
                        title: _ctx.$t("change_password")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$d), {
                            onShowTabs: showTabs,
                            isTabShow: isTabShow.value
                          }, null, 8, ["isTabShow"])
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_BTab, {
                        onClick: hideTabs,
                        title: _ctx.$t("newsletter_subscriptions")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), {
                            onShowTabs: showTabs,
                            isTabShow: isTabShow.value
                          }, null, 8, ["isTabShow"])
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "nav-wrapper-class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/account/Account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Account-DNiHDNUM.js.map
