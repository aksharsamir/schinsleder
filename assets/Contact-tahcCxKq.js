import { BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, computed, watch, onBeforeMount, onMounted, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext, mergeProps, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useStore } from "vuex";
import { useHead } from "@unhead/vue";
import { _ as _sfc_main$2 } from "./AppLayout-CdCGV8yT.js";
import { _ as _sfc_main$4 } from "./BlockSimple-BHbXwFf2.js";
import { _ as _sfc_main$3 } from "./Breadcrumbs-DwhHUqbs.js";
import { BButton } from "bootstrap-vue-next/components/BButton";
import { BFormTextarea } from "bootstrap-vue-next/components/BFormTextarea";
import { BFormSelect, BFormSelectOption } from "bootstrap-vue-next/components/BFormSelect";
import { BFormInvalidFeedback } from "bootstrap-vue-next/components/BForm";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BFormGroup } from "bootstrap-vue-next/components/BFormGroup";
import { BModal } from "bootstrap-vue-next/components/BModal";
import { useI18n } from "vue-i18n";
import { useModal } from "bootstrap-vue-next";
import { s as sendForm } from "./forms-BxHSFE8a.js";
import "bootstrap-vue-next/components/BLink";
import "bootstrap-vue-next/components/BImg";
import "./products-Dsi6ZmTY.js";
import "axios";
import "../entry-server.js";
import "node:path";
import "@unhead/ssr";
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
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BNav";
import "vue-cookies";
const _sfc_main$1 = {
  __name: "DynamicForms",
  __ssrInlineRender: true,
  props: {
    category_id: {
      type: Number,
      required: false
    },
    product_sku: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const alpha_numeric = /^[a-zA-Z0-9]+$/;
    const alpha_numeric_with_spaces = /^[a-zA-Z0-9 ]+$/;
    const letters_only = /^[a-zA-Z]+$/;
    const url = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    const numeric = /^\d+$/;
    const numeric_with_decimals = /^\d+(?:\.|,)\d+$/;
    const disallow_html_tags = /(<([^>]+)>)/gi;
    const emailaddress = /^(?![_.-])[\w-]+(\.[\w-]+)*@[a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])?(\.[a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])?){0,1}\.[a-zA-Z]{2,24}$/;
    const formValue = ref([]);
    const formState = ref([]);
    const formError = ref([]);
    const isClient = ref(false);
    const msg = ref("");
    const store = useStore();
    const { t } = useI18n();
    const { show, hide } = useModal("modal-dynamic_form");
    const product = computed(() => {
      return store.getters["product/getCurrentProduct"];
    });
    const category = computed(() => {
      return store.getters["category/getCurrentCategory"];
    });
    const remote_entity_id = computed(() => {
      if (props.type == "product") {
        return 'remote_entity_id: "' + props.product_sku + '" ';
      } else if (props.type == "category") {
        return 'remote_entity_id: "' + props.category_id + '" ';
      }
      return "";
    });
    const form = computed(() => {
      if (props.type == "product") {
        return store.getters["forms/getProductForm"];
      } else if (props.type == "category") {
        return store.getters["forms/getCategoryForm"];
      }
      return store.getters["forms/getContactForm"];
    });
    watch(
      [product, form],
      () => {
        var _a, _b;
        if (props.type == "product" && ((_a = form.value) == null ? void 0 : _a.fieldsets)) {
          const fValue = [];
          const fState = [];
          const fError = [];
          (_b = form.value) == null ? void 0 : _b.fieldsets.forEach((set, idx) => {
            fValue[idx] = [];
            fState[idx] = [];
            fError[idx] = [];
            set.fields.forEach((_, index) => {
              fValue[idx][index] = "";
              fState[idx][index] = null;
              fError[idx][index] = "";
            });
          });
          formValue.value = fValue;
          formState.value = fState;
          formError.value = fError;
        }
      },
      { immediate: true }
    );
    watch(
      [category, form],
      () => {
        var _a, _b;
        if (props.type == "category" && ((_a = form.value) == null ? void 0 : _a.fieldsets)) {
          const fValue = [];
          const fState = [];
          const fError = [];
          (_b = form.value) == null ? void 0 : _b.fieldsets.forEach((set, idx) => {
            fValue[idx] = [];
            fState[idx] = [];
            fError[idx] = [];
            set.fields.forEach((_, index) => {
              fValue[idx][index] = "";
              fState[idx][index] = null;
              fError[idx][index] = "";
            });
          });
          formValue.value = fValue;
          formState.value = fState;
          formError.value = fError;
        }
      },
      { immediate: true }
    );
    onBeforeMount(() => {
      var _a;
      (_a = form.value) == null ? void 0 : _a.fieldsets.forEach((set, idx) => {
        formValue.value[idx] = [];
        formState.value[idx] = [];
        formError.value[idx] = [];
        set.fields.forEach((_, index) => {
          formValue.value[idx][index] = "";
          formState.value[idx][index] = null;
          formError.value[idx][index] = "";
        });
      });
    });
    onMounted(() => {
      isClient.value = true;
    });
    async function sendForm$1() {
      var _a, _b, _c, _d;
      (_a = form.value) == null ? void 0 : _a.fieldsets.forEach((set, idx) => {
        set.fields.forEach((field, index) => {
          formValue.value[idx][index] = formValue.value[idx][index].trim();
          let state = true;
          let error = "";
          field.validation.forEach((val) => {
            if (val.type == "required") {
              if (formValue.value[idx][index] == "") {
                state = false;
                error = field.label + " " + t("dyform_required");
              }
            } else if (val.type == "alpha_numeric") {
              if (alpha_numeric.test(formValue.value[idx][index]) != true) {
                state = false;
                error = t("dyform_alpha_numeric");
              }
            } else if (val.type == "alpha_numeric_with_spaces") {
              if (alpha_numeric_with_spaces.test(formValue.value[idx][index]) != true) {
                state = false;
                error = t("dyform_alpha_numeric_with_spaces");
              }
            } else if (val.type == "letters_only") {
              if (letters_only.test(formValue.value[idx][index]) != true) {
                state = false;
                error = t("dyform_letters_only");
              }
            } else if (val.type == "disallow_html_tags") {
              if (disallow_html_tags.test(formValue.value[idx][index]) == true) {
                state = false;
                error = t("dyform_disallow_html_tags");
              }
            } else if (val.type == "email") {
              if (emailaddress.test(formValue.value[idx][index]) != true) {
                state = false;
                error = t("dyform_emailaddress");
              }
            }
            let customEmailValidationArr = formValue.value[idx][index].slice(formValue.value[idx][index].indexOf("@")).split(".");
            if (customEmailValidationArr.length > 2 && customEmailValidationArr[customEmailValidationArr.length - 1] === customEmailValidationArr[customEmailValidationArr.length - 2]) {
              state = false;
              error = t("dyform_emailaddress");
            } else if (val.type == "url") {
              if (url.test(formValue.value[idx][index]) != true) {
                state = false;
                error = t("dyform_url");
              }
            } else if (val.type == "min_text_length") {
              if (formValue.value[idx][index].length < parseInt(val.additional)) {
                state = false;
                error = t("dyform_min_text_length", {
                  aantal: parseInt(val.additional)
                });
              }
            } else if (val.type == "max_text_length") {
              if (formValue.value[idx][index].length > parseInt(val.additional)) {
                state = false;
                error = t("max_text_length", {
                  aantal: parseInt(val.additional)
                });
              }
            } else if (val.type == "numeric") {
              if (numeric.test(formValue.value[idx][index]) != true) {
                state = false;
                error = t("dyform_numeric");
              }
            } else if (val.type == "numeric_with_decimals") {
              if (numeric_with_decimals.test(formValue.value[idx][index]) != true) {
                state = false;
                error = t("dyform_numeric_with_decimals");
              }
            } else if (val.type == "greater_then_or_equal_to") ;
            else if (val.type == "less_then_or_equal_to") ;
          });
          formState.value[idx][index] = state;
          formError.value[idx][index] = error;
        });
      });
      let save = true;
      (_b = form.value) == null ? void 0 : _b.fieldsets.forEach((set, idx) => {
        set.fields.forEach((field, index) => {
          if (formState.value[idx][index] != true) {
            save = false;
          }
        });
      });
      if (save == true) {
        let input = "type: " + props.type + " " + remote_entity_id.value + " field: [";
        (_c = form.value) == null ? void 0 : _c.fieldsets.forEach((set, idx) => {
          set.fields.forEach((field, index) => {
            input = input + '{ name: "' + field.name + '", value: "' + formValue.value[idx][index] + '" }';
          });
        });
        input = input + "]";
        const retval = await sendForm(input);
        if (retval.has_errors == true) ;
        else {
          msg.value = retval.thank_you_message;
          show();
          (_d = form.value) == null ? void 0 : _d.fieldsets.forEach((set, idx) => {
            set.fields.forEach((field, index) => {
              formValue.value[idx][index] = "";
              formState.value[idx][index] = null;
              formError.value[idx][index] = "";
            });
          });
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_b_modal = BModal;
      const _component_b_form_group = BFormGroup;
      const _component_b_form_input = BFormInput;
      const _component_b_form_invalid_feedback = BFormInvalidFeedback;
      const _component_b_form_select = BFormSelect;
      const _component_b_form_select_option = BFormSelectOption;
      const _component_b_form_textarea = BFormTextarea;
      const _component_b_button = BButton;
      if (formValue.value.length && isClient.value) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_b_modal, {
          id: "modal-dynamic_form",
          okVariant: "success",
          okTitle: "Ok",
          onOk: unref(hide)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>${msg.value ?? ""}</div>`);
            } else {
              return [
                createVNode("div", { innerHTML: msg.value }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h2 class="form-title">${ssrInterpolate((_a = form.value) == null ? void 0 : _a.title)}</h2><!--[-->`);
        ssrRenderList((_b = form.value) == null ? void 0 : _b.fieldsets, (set, idx) => {
          _push(`<div><!--[-->`);
          ssrRenderList(set.fields, (field, index) => {
            _push(`<div>`);
            if (field.type == "input") {
              _push(`<div>`);
              _push(ssrRenderComponent(_component_b_form_group, {
                class: "account-inputs mb-10",
                id: `set` + idx + `field` + index + `group`,
                "label-for": `set` + idx + `field` + index
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_b_form_input, {
                      id: `set` + idx + `field` + index,
                      type: field.inputType,
                      placeholder: field.label,
                      "aria-describedby": `set` + idx + `field` + index + `feedback`,
                      modelValue: formValue.value[idx][index],
                      "onUpdate:modelValue": ($event) => formValue.value[idx][index] = $event,
                      state: formState.value[idx][index]
                    }, null, _parent2, _scopeId));
                    _push2(ssrRenderComponent(_component_b_form_invalid_feedback, {
                      id: `set` + idx + `field` + index + `feedback`
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(formError.value[idx][index])}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(formError.value[idx][index]), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(_component_b_form_input, {
                        id: `set` + idx + `field` + index,
                        type: field.inputType,
                        placeholder: field.label,
                        "aria-describedby": `set` + idx + `field` + index + `feedback`,
                        modelValue: formValue.value[idx][index],
                        "onUpdate:modelValue": ($event) => formValue.value[idx][index] = $event,
                        state: formState.value[idx][index]
                      }, null, 8, ["id", "type", "placeholder", "aria-describedby", "modelValue", "onUpdate:modelValue", "state"]),
                      createVNode(_component_b_form_invalid_feedback, {
                        id: `set` + idx + `field` + index + `feedback`
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(formError.value[idx][index]), 1)
                        ]),
                        _: 2
                      }, 1032, ["id"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</div>`);
            } else if (field.type == "select") {
              _push(`<div>`);
              _push(ssrRenderComponent(_component_b_form_group, {
                class: "account-inputs mb-10",
                id: `set` + idx + `field` + index + `group`,
                "label-for": `set` + idx + `field` + index
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_b_form_select, {
                      id: `set` + idx + `field` + index,
                      modelValue: formValue.value[idx][index],
                      "onUpdate:modelValue": ($event) => formValue.value[idx][index] = $event,
                      "aria-describedby": `set` + idx + `field` + index + `feedback`,
                      class: "select",
                      state: formState.value[idx][index]
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<!--[-->`);
                          ssrRenderList(field.options, (opt) => {
                            _push3(ssrRenderComponent(_component_b_form_select_option, {
                              key: opt,
                              value: opt
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`${ssrInterpolate(opt)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(opt), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          });
                          _push3(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(field.options, (opt) => {
                              return openBlock(), createBlock(_component_b_form_select_option, {
                                key: opt,
                                value: opt
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(opt), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(ssrRenderComponent(_component_b_form_invalid_feedback, {
                      id: `set` + idx + `field` + index + `feedback`
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(formError.value[idx][index])}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(formError.value[idx][index]), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(_component_b_form_select, {
                        id: `set` + idx + `field` + index,
                        modelValue: formValue.value[idx][index],
                        "onUpdate:modelValue": ($event) => formValue.value[idx][index] = $event,
                        "aria-describedby": `set` + idx + `field` + index + `feedback`,
                        class: "select",
                        state: formState.value[idx][index]
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(field.options, (opt) => {
                            return openBlock(), createBlock(_component_b_form_select_option, {
                              key: opt,
                              value: opt
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(opt), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["id", "modelValue", "onUpdate:modelValue", "aria-describedby", "state"]),
                      createVNode(_component_b_form_invalid_feedback, {
                        id: `set` + idx + `field` + index + `feedback`
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(formError.value[idx][index]), 1)
                        ]),
                        _: 2
                      }, 1032, ["id"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</div>`);
            } else if (field.type == "textarea") {
              _push(`<div>`);
              _push(ssrRenderComponent(_component_b_form_group, {
                class: "account-inputs mb-10",
                id: `set` + idx + `field` + index + `group`,
                "label-for": `set` + idx + `field` + index
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_b_form_textarea, {
                      id: `set` + idx + `field` + index,
                      placeholder: field.label,
                      "aria-describedby": `set` + idx + `field` + index + `feedback`,
                      modelValue: formValue.value[idx][index],
                      "onUpdate:modelValue": ($event) => formValue.value[idx][index] = $event,
                      state: formState.value[idx][index]
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(formValue.value[idx][index])}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(formValue.value[idx][index]), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(ssrRenderComponent(_component_b_form_invalid_feedback, {
                      id: `set` + idx + `field` + index + `feedback`
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(formError.value[idx][index])}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(formError.value[idx][index]), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(_component_b_form_textarea, {
                        id: `set` + idx + `field` + index,
                        placeholder: field.label,
                        "aria-describedby": `set` + idx + `field` + index + `feedback`,
                        modelValue: formValue.value[idx][index],
                        "onUpdate:modelValue": ($event) => formValue.value[idx][index] = $event,
                        state: formState.value[idx][index]
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(formValue.value[idx][index]), 1)
                        ]),
                        _: 2
                      }, 1032, ["id", "placeholder", "aria-describedby", "modelValue", "onUpdate:modelValue", "state"]),
                      createVNode(_component_b_form_invalid_feedback, {
                        id: `set` + idx + `field` + index + `feedback`
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(formError.value[idx][index]), 1)
                        ]),
                        _: 2
                      }, 1032, ["id"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_b_button, {
          onClick: ($event) => sendForm$1(),
          type: "button",
          class: "send",
          variant: "secondary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("send"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("send")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/DynamicForms.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const isClient = ref(false);
    useHead({
      title: () => "Contact",
      meta: [
        { name: "title", content: () => "Contact" },
        { name: "keywords", content: () => "Contact" },
        { name: "description", content: () => "Contact" }
      ]
    });
    const store = useStore();
    computed(() => {
      return store.getters[`cmsBlock/getCmsBlockByIdentifier`]("contact");
    });
    const contactForm = computed(() => {
      return store.getters[`forms/getContactForm`];
    });
    onMounted(() => {
      isClient.value = true;
      const bcrumb = { current: "Contact", routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      if (isClient.value) {
        _push(ssrRenderComponent(unref(_sfc_main$2), mergeProps({ wrapperClass: "contact" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent2, _scopeId));
              _push2(`<section class="static pt-7 ps-md-20 p-15 pt-0"${_scopeId}><h1 class="title"${_scopeId}>${ssrInterpolate(_ctx.$t("contact"))}</h1>`);
              _push2(ssrRenderComponent(_component_BRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BCol, {
                      md: "4",
                      class: "d-none d-lg-block"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h3 class="subtitle"${_scopeId3}>${ssrInterpolate(_ctx.$t("schins_leder"))}</h3>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$4), { identifier: "contact" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("h3", { class: "subtitle" }, toDisplayString(_ctx.$t("schins_leder")), 1),
                            createVNode(unref(_sfc_main$4), { identifier: "contact" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BCol, { md: "8" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="col-10"${_scopeId3}><h3 class="subtitle"${_scopeId3}>${ssrInterpolate(_ctx.$t("write_to_us"))}</h3><h4 class="subtitle-description"${_scopeId3}>${ssrInterpolate(_ctx.$t("send_us_a_note_text"))}</h4><h5 class="required-fields-warning"${_scopeId3}>${ssrInterpolate(_ctx.$t("required_fields_warning"))}</h5>`);
                          if (contactForm.value != null) {
                            _push4(`<div${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$1), { type: "contact" }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "col-10" }, [
                              createVNode("h3", { class: "subtitle" }, toDisplayString(_ctx.$t("write_to_us")), 1),
                              createVNode("h4", { class: "subtitle-description" }, toDisplayString(_ctx.$t("send_us_a_note_text")), 1),
                              createVNode("h5", { class: "required-fields-warning" }, toDisplayString(_ctx.$t("required_fields_warning")), 1),
                              contactForm.value != null ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode(unref(_sfc_main$1), { type: "contact" })
                              ])) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BCol, {
                        md: "4",
                        class: "d-none d-lg-block"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "subtitle" }, toDisplayString(_ctx.$t("schins_leder")), 1),
                          createVNode(unref(_sfc_main$4), { identifier: "contact" })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BCol, { md: "8" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "col-10" }, [
                            createVNode("h3", { class: "subtitle" }, toDisplayString(_ctx.$t("write_to_us")), 1),
                            createVNode("h4", { class: "subtitle-description" }, toDisplayString(_ctx.$t("send_us_a_note_text")), 1),
                            createVNode("h5", { class: "required-fields-warning" }, toDisplayString(_ctx.$t("required_fields_warning")), 1),
                            contactForm.value != null ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode(unref(_sfc_main$1), { type: "contact" })
                            ])) : createCommentVNode("", true)
                          ])
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
                createVNode(unref(_sfc_main$3)),
                createVNode("section", { class: "static pt-7 ps-md-20 p-15 pt-0" }, [
                  createVNode("h1", { class: "title" }, toDisplayString(_ctx.$t("contact")), 1),
                  createVNode(_component_BRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_BCol, {
                        md: "4",
                        class: "d-none d-lg-block"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "subtitle" }, toDisplayString(_ctx.$t("schins_leder")), 1),
                          createVNode(unref(_sfc_main$4), { identifier: "contact" })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BCol, { md: "8" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "col-10" }, [
                            createVNode("h3", { class: "subtitle" }, toDisplayString(_ctx.$t("write_to_us")), 1),
                            createVNode("h4", { class: "subtitle-description" }, toDisplayString(_ctx.$t("send_us_a_note_text")), 1),
                            createVNode("h5", { class: "required-fields-warning" }, toDisplayString(_ctx.$t("required_fields_warning")), 1),
                            contactForm.value != null ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode(unref(_sfc_main$1), { type: "contact" })
                            ])) : createCommentVNode("", true)
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
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Contact-tahcCxKq.js.map
