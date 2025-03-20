import { BButton } from "bootstrap-vue-next/components/BButton";
import { BFormRadio } from "bootstrap-vue-next/components/BFormRadio";
import { BFormSelect } from "bootstrap-vue-next/components/BFormSelect";
import { BFormCheckbox } from "bootstrap-vue-next/components/BFormCheckbox";
import { BForm, BFormInvalidFeedback } from "bootstrap-vue-next/components/BForm";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BFormGroup } from "bootstrap-vue-next/components/BFormGroup";
import { BContainer, BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, computed, watch, onMounted, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { _ as _sfc_main$2 } from "./Breadcrumbs-BN1xAQs-.js";
import { _ as _sfc_main$1 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$3 } from "./CreateAccountThanks-CSYg3W-H.js";
import { C as CONFIG_JSON } from "../entry-server.js";
import PasswordMeter from "vue-simple-password-meter";
import { w as checkEmailExist, x as validateVatNumber } from "./user-B9wxceAo.js";
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";
import { useStore } from "vuex";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/components/BImg";
import "./products-Dsi6ZmTY.js";
import "axios";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "bootstrap-vue-next/components/BLink";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@vue/shared";
import "@element-plus/icons-vue";
import "lodash-unified";
import "./BlockSimple-BHbXwFf2.js";
import "@gtm-support/vue-gtm";
import "vue-cookies";
import "./heart-DpQotoa5.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vuex-router-sync";
import "vue3-lazyload";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
const _sfc_main = {
  __name: "CreateAccount",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const router = useRouter();
    const { t } = useI18n();
    const isClient = ref(false);
    const isCompany = ref(false);
    const thanksActive = ref(false);
    const showFullAddress = ref(true);
    const showManual = ref(true);
    const typeTimer = ref(null);
    const foundAddresses = ref([]);
    const foundAddress = ref("");
    const selectedAddress = ref(null);
    const isValidVatNumber = ref(false);
    const showVatMessage = ref("");
    ref(false);
    const emailReg = ref(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    );
    const form = ref({
      email: "",
      emailState: null,
      emailError: "",
      emailTimer: null,
      password: "",
      passwordState: null,
      passwordError: "",
      passwordTimer: null,
      password_confirm: "",
      password_confirmState: null,
      password_confirmError: "",
      password_confirmTimer: null,
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
      coc_number: "",
      coc_numberState: null,
      coc_numberError: "",
      coc_numberTimer: null,
      taxvat: "",
      taxvatState: null,
      taxvatError: "",
      taxvatTimer: null,
      address: {
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
        house_number: "",
        house_numberState: null,
        house_numberError: "",
        house_numberTimer: null,
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
      is_subscribed: true,
      checkbox2: false,
      manual: false
    });
    const countries = computed(() => store.getters["user/getCountries"]);
    const country = computed(() => form.value.address.country_code);
    const postcodeHouseNumber = computed(
      () => `${form.value.address.postcode}|${form.value.address.house_number}`
    );
    const vatNumber = computed(() => form.value.taxvat);
    const Email = computed(() => form.value.email);
    const Password = computed(() => form.value.password);
    const PasswordConfirm = computed(() => form.value.password_confirm);
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    watch(isLoggedIn, (newValue) => {
      if (newValue) {
        router.push({ name: "account" });
      }
    });
    watch(Email, () => {
      if (form.value.emailTimer !== null) {
        clearTimeout(form.value.emailTimer);
      }
      form.value.emailTimer = setTimeout(() => validateEmail(), 1e3);
    });
    watch(Password, () => {
      validatePassword();
    });
    watch(PasswordConfirm, () => {
      validateConfirmationPassword();
    });
    watch(country, () => {
      {
        if (!CONFIG_JSON.postcode_validation.countries.includes(country.value)) {
          showFullAddress.value = true;
        } else {
          showFullAddress.value = false;
        }
      }
    });
    watch(vatNumber, () => {
      {
        if (form.value.taxvatTimer !== null) {
          clearTimeout(form.value.taxvatTimer);
        }
        form.value.taxvatTimer = setTimeout(() => validateVAT(), 1e3);
      }
    });
    watch(postcodeHouseNumber, (newVal) => {
      if (showFullAddress.value == false) {
        if (typeTimer.value !== null) {
          clearTimeout(typeTimer.value);
        }
        if (foundAddress.value != "") {
          foundAddress.value = "";
        }
        if (foundAddresses.value.length > 0) {
          foundAddresses.value = [];
        }
        const [newPostcode, newHouseNumber] = newVal.split("|");
        if (newPostcode != "" && newHouseNumber != "") {
          typeTimer.value = setTimeout(() => validatePostcodeHouseNumber(), 2e3);
        }
      }
    });
    watch(selectedAddress, (newVal) => {
      form.value.address.streetDisplay = foundAddresses.value[newVal].street;
      form.value.address.addition = foundAddresses.value[newVal].letter ?? "";
      form.value.address.city = foundAddresses.value[newVal].city;
      validatePostcode();
    });
    const validateEmail = async () => {
      if (form.value.email.length == 0) {
        form.value.emailState = false;
        form.value.emailError = t("email_is_required_field");
        return false;
      }
      if (!emailReg.value.test(form.value.email)) {
        form.value.emailState = false;
        form.value.emailError = t("email_is_invalid_field");
        return false;
      }
      if (!await checkEmailExist(form.value.email)) {
        form.value.emailState = false;
        form.value.emailError = t("email_already_exists");
        return false;
      }
      form.value.emailState = true;
      return true;
    };
    const validatePostcodeHouseNumber = async () => {
      if (!showFullAddress.value) {
        const list = await validatePostcode(
          form.value.address.postcode,
          form.value.address.house_number
        );
        if (list.length === 1) {
          let address = list[0].street + " " + list[0].number;
          form.value.address.streetDisplay = list[0].street;
          if (list[0].letter != null) {
            form.value.address.addition = list[0].letter;
            address = address + list[0].letter;
          } else {
            form.value.addition = "";
          }
          address = address + ", " + list[0].postcode + " " + list[0].city;
          form.value.address.city = list[0].city;
          form.value.address.cityState = true;
          foundAddress.value = address;
          validatePostcode();
        } else if (list.length === 0) {
          foundAddress.value = t("postcode_not_found");
        } else {
          list.forEach(function(item) {
            let address = item.street + " " + item.number;
            if (item.letter != null) {
              address = address + item.letter;
            }
            address = address + ", " + item.postcode + " " + item.city;
            item.text = address;
            foundAddresses.value.push(item);
          });
        }
      } else {
        if (form.value.address.postcode === "") {
          form.value.address.postcodeState = false;
          form.value.address.postcodeError = t("postcode_required");
        } else {
          form.value.address.postcodeState = true;
        }
      }
    };
    const formSubmit = async () => {
      let formValid = true;
      if (!form.value.emailState) {
        validateEmail();
        if (!form.value.emailState) {
          formValid = false;
        }
      }
      if (!form.value.passwordState) {
        validatePassword();
        if (!form.value.passwordState) {
          formValid = false;
        }
      }
      if (!form.value.password_confirmState) {
        validateConfirmationPassword();
        if (!form.value.password_confirmState) {
          formValid = false;
        }
      }
      if (isCompany.value) {
        if (!form.value.companyState) {
          validateCompany();
          if (!form.value.companyState) {
            formValid = false;
          }
        }
        if (!form.value.coc_numberState) {
          validateCocNumber();
          if (!form.value.coc_numberState) {
            formValid = false;
          }
        }
        if (!form.value.taxvatState) {
          validateVAT();
          if (!form.value.taxvatState) {
            formValid = false;
          }
        }
      }
      if (!form.value.firstnameState) {
        validateFirstname();
        if (!form.value.firstnameState) {
          formValid = false;
        }
      }
      if (!form.value.lastnameState) {
        validateLastname();
        if (!form.value.lastnameState) {
          formValid = false;
        }
      }
      if (!form.value.address.postcodeState) {
        validatePostcode();
        if (!form.value.address.postcodeState) {
          formValid = false;
        }
      }
      if (!form.value.address.house_numberState) {
        validateHouseNumber();
        if (!form.value.address.house_numberState) {
          formValid = false;
        }
      }
      if (!form.value.address.streetDisplayState) {
        validateStreet();
        if (!form.value.address.streetDisplayState) {
          formValid = false;
          showFullAddress.value = true;
        }
      }
      if (!form.value.address.telephoneState) {
        validatePhone();
        if (!form.value.address.telephoneState) {
          formValid = false;
        }
      }
      if (!form.value.address.cityState) {
        validateCity();
        if (!form.value.address.cityState) {
          formValid = false;
        }
      }
      if (formValid) {
        form.value.address.street = form.value.address.streetDisplay;
        if (form.value.address.house_number !== "") {
          form.value.address.street += " " + form.value.address.house_number;
        }
        if (form.value.address.addition !== "") {
          form.value.address.street += " " + form.value.address.addition;
        }
        if (!isCompany.value) {
          form.value.company = "";
          form.value.taxvat = "";
          form.value.coc_number = "";
        }
        const retval = await store.dispatch("user/createAccount", {
          account: form.value,
          store
        });
        if (retval) {
          const msg = {
            type: "success",
            title: "account_create",
            text: t("account_created")
          };
          store.dispatch("messages/sendMessage", { message: msg });
          router.push("/login");
        }
      }
    };
    const validatePassword = () => {
      if (form.value.password.length < 8) {
        form.value.passwordState = false;
        form.value.passwordError = t("password_needs");
      } else if (!/[a-z]/.test(form.value.password)) {
        form.value.passwordState = false;
        form.value.passwordError = t("password_needs");
      } else if (!/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/.test(form.value.password)) {
        form.value.passwordState = false;
        form.value.passwordError = t("password_needs");
      } else if (!/[A-Z]/.test(form.value.password)) {
        form.value.passwordState = false;
        form.value.passwordError = t("password_needs");
      } else if (!/\d/.test(form.value.password)) {
        form.value.passwordState = false;
        form.value.passwordError = t("password_needs");
      } else {
        form.value.passwordState = true;
      }
    };
    const validateConfirmationPassword = () => {
      if (form.value.password != form.value.password_confirm) {
        form.value.password_confirmState = false;
        form.value.password_confirmError = t("password_confirm_not_equal");
      } else {
        form.value.password_confirmState = true;
      }
    };
    const validateVAT = async () => {
      if (isCompany.value) {
        if (form.value.taxvat != "") {
          if (form.value.taxvat.substring(0, 2).toUpperCase() === form.value.address.country_code) {
            const retval = await validateVatNumber(form.value.taxvat);
            if (retval.valid == "true") {
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
    const validateCompany = () => {
      if (isCompany.value) {
        if (form.value.company == "") {
          form.value.companyState = false;
          form.value.companyError = t("company_name_required");
        } else {
          form.value.companyState = true;
        }
      } else {
        form.value.companyState = null;
      }
    };
    const validateFirstname = () => {
      if (form.value.firstname == "") {
        form.value.firstnameState = false;
        form.value.firstnameError = t("firstname_required");
      } else {
        form.value.firstnameState = true;
      }
    };
    const validateLastname = () => {
      if (form.value.lastname == "") {
        form.value.lastnameState = false;
        form.value.lastnameError = t("lastname_required");
      } else {
        form.value.lastnameState = true;
      }
    };
    const validateCocNumber = () => {
      if (isCompany.value) {
        if (form.value.coc_number == "") {
          form.value.coc_numberState = false;
          form.value.coc_numberError = t("coc_number_required");
        } else {
          form.value.coc_numberState = true;
        }
      } else {
        form.value.coc_numberState = null;
      }
    };
    const validatePostcode = () => {
      if (form.value.address.postcode == "") {
        form.value.address.postcodeState = false;
        form.value.address.postcodeError = t("postcode_required");
      } else {
        form.value.address.postcodeState = true;
      }
    };
    const validateHouseNumber = () => {
      if (form.value.address.house_number == "") {
        form.value.address.house_numberState = false;
        form.value.address.house_numberError = t("house_number_required");
      } else {
        form.value.address.house_numberState = true;
      }
    };
    const validateCity = () => {
      if (form.value.address.city == "") {
        form.value.address.cityState = false;
        form.value.address.cityError = t("city_required");
      } else {
        form.value.address.cityState = true;
      }
    };
    const validatePhone = () => {
      if (form.value.address.telephone == "") {
        form.value.address.telephoneState = false;
        form.value.address.telephoneError = t("phone_required");
      } else {
        form.value.address.telephoneState = true;
      }
    };
    const validateStreet = () => {
      if (form.value.address.streetDisplay == "") {
        form.value.address.streetDisplayState = false;
        form.value.address.streetDisplayError = t("street_required");
      } else {
        form.value.address.streetDisplayState = true;
      }
    };
    useHead({
      title: () => t("create_new_account"),
      meta: [
        { name: "title", content: () => t("create_new_account") },
        { name: "keywords", content: () => t("create_new_account") },
        { name: "description", content: () => t("create_new_account") }
      ]
    });
    onMounted(() => {
      isClient.value = true;
      const bcrumb = { current: t("create_new_account"), routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
      {
        form.value.address.country_code = CONFIG_JSON.customers.defaultCountry;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_b_form = BForm;
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_b_form_group = BFormGroup;
      const _component_b_form_input = BFormInput;
      const _component_b_form_invalid_feedback = BFormInvalidFeedback;
      const _component_b_form_checkbox = BFormCheckbox;
      const _component_b_form_select = BFormSelect;
      const _component_b_form_radio = BFormRadio;
      const _component_b_button = BButton;
      _push(ssrRenderComponent(unref(_sfc_main$1), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BContainer, { class: "checkout-account" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!thanksActive.value) {
                    _push3(`<div data-v-bb7bb1aa${_scopeId2}><h1 data-v-bb7bb1aa${_scopeId2}>${ssrInterpolate(_ctx.$t("create_new_account"))}</h1>`);
                    _push3(ssrRenderComponent(_component_b_form, {
                      class: "checkout-form",
                      onSubmit: formSubmit
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h2 data-v-bb7bb1aa${_scopeId3}>${ssrInterpolate(_ctx.$t("personal_information"))}</h2>`);
                          _push4(ssrRenderComponent(_component_b_row, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_b_col, { md: "6" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "email-group",
                                        label: _ctx.$t("form_email") + "*",
                                        "label-for": "email"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_b_form_input, {
                                              id: "email",
                                              modelValue: form.value.email,
                                              "onUpdate:modelValue": ($event) => form.value.email = $event,
                                              type: "text",
                                              state: form.value.emailState,
                                              "aria-describedby": "email-feedback"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "email-feedback" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(form.value.emailError)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(form.value.emailError), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_b_form_input, {
                                                id: "email",
                                                modelValue: form.value.email,
                                                "onUpdate:modelValue": ($event) => form.value.email = $event,
                                                type: "text",
                                                state: form.value.emailState,
                                                "aria-describedby": "email-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              createVNode(_component_b_form_invalid_feedback, { id: "email-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(form.value.emailError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "password-group",
                                        label: _ctx.$t("form_password") + "*",
                                        "label-for": "password"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_b_form_input, {
                                              id: "password",
                                              modelValue: form.value.password,
                                              "onUpdate:modelValue": ($event) => form.value.password = $event,
                                              type: "password",
                                              state: form.value.passwordState,
                                              "aria-describedby": "password-feedback"
                                            }, null, _parent7, _scopeId6));
                                            if (form.value.password && isClient.value) {
                                              _push7(ssrRenderComponent(unref(PasswordMeter), {
                                                password: form.value.password
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "password-feedback" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(form.value.passwordError)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(form.value.passwordError), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_b_form_input, {
                                                id: "password",
                                                modelValue: form.value.password,
                                                "onUpdate:modelValue": ($event) => form.value.password = $event,
                                                type: "password",
                                                state: form.value.passwordState,
                                                "aria-describedby": "password-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              form.value.password && isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                                                key: 0,
                                                password: form.value.password
                                              }, null, 8, ["password"])) : createCommentVNode("", true),
                                              createVNode(_component_b_form_invalid_feedback, { id: "password-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(form.value.passwordError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "password_confirm-group",
                                        label: _ctx.$t("form_password_confirmation") + "*",
                                        "label-for": "password_confirm"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_b_form_input, {
                                              id: "password_confirm",
                                              modelValue: form.value.password_confirm,
                                              "onUpdate:modelValue": ($event) => form.value.password_confirm = $event,
                                              type: "password",
                                              state: form.value.password_confirmState,
                                              "aria-describedby": "password_confirm-feedback"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "password_confirm-feedback" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(form.value.password_confirmError)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(form.value.password_confirmError), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_b_form_input, {
                                                id: "password_confirm",
                                                modelValue: form.value.password_confirm,
                                                "onUpdate:modelValue": ($event) => form.value.password_confirm = $event,
                                                type: "password",
                                                state: form.value.password_confirmState,
                                                "aria-describedby": "password_confirm-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              createVNode(_component_b_form_invalid_feedback, { id: "password_confirm-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(form.value.password_confirmError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_b_form_checkbox, {
                                        id: "checkbox-1",
                                        class: "custom-control custom-checkbox",
                                        "input-class": "custom-control-input",
                                        modelValue: isCompany.value,
                                        "onUpdate:modelValue": ($event) => isCompany.value = $event,
                                        name: "checkbox-1"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(_ctx.$t("form_are_you_a_company"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      if (isCompany.value) {
                                        _push6(`<div class="short-form" data-v-bb7bb1aa${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "company-group",
                                          label: _ctx.$t("form_company_name") + "*",
                                          "label-for": "company"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_b_form_input, {
                                                id: "company",
                                                modelValue: form.value.company,
                                                "onUpdate:modelValue": ($event) => form.value.company = $event,
                                                type: "text",
                                                onBlur: validateCompany,
                                                state: form.value.companyState,
                                                "aria-describedby": "company-feedback"
                                              }, null, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "company-feedback" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(form.value.companyError)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(form.value.companyError), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_b_form_input, {
                                                  id: "company",
                                                  modelValue: form.value.company,
                                                  "onUpdate:modelValue": ($event) => form.value.company = $event,
                                                  type: "text",
                                                  onBlur: validateCompany,
                                                  state: form.value.companyState,
                                                  "aria-describedby": "company-feedback"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                createVNode(_component_b_form_invalid_feedback, { id: "company-feedback" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(form.value.companyError), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "coc_number-group",
                                          label: _ctx.$t("form_coc_number") + "*",
                                          "label-for": "coc_number"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_b_form_input, {
                                                id: "coc_number",
                                                modelValue: form.value.coc_number,
                                                "onUpdate:modelValue": ($event) => form.value.coc_number = $event,
                                                type: "text",
                                                onBlur: _ctx.validateCOCNumber,
                                                state: form.value.coc_numberState,
                                                "aria-describedby": "coc_number-feedback"
                                              }, null, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "coc_number-feedback" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(form.value.coc_numberError)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(form.value.coc_numberError), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_b_form_input, {
                                                  id: "coc_number",
                                                  modelValue: form.value.coc_number,
                                                  "onUpdate:modelValue": ($event) => form.value.coc_number = $event,
                                                  type: "text",
                                                  onBlur: _ctx.validateCOCNumber,
                                                  state: form.value.coc_numberState,
                                                  "aria-describedby": "coc_number-feedback"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                                                createVNode(_component_b_form_invalid_feedback, { id: "coc_number-feedback" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(form.value.coc_numberError), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "taxvat-group",
                                          label: _ctx.$t("form_vat_number"),
                                          "label-for": "taxvat"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_b_form_input, {
                                                id: "taxvat",
                                                modelValue: form.value.taxvat,
                                                "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                                                type: "text",
                                                state: form.value.taxvatState,
                                                "aria-describedby": "taxvat-feedback"
                                              }, null, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "taxvat-feedback" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(form.value.taxvatError)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(form.value.taxvatError), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_b_form_input, {
                                                  id: "taxvat",
                                                  modelValue: form.value.taxvat,
                                                  "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                                                  type: "text",
                                                  state: form.value.taxvatState,
                                                  "aria-describedby": "taxvat-feedback"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                createVNode(_component_b_form_invalid_feedback, { id: "taxvat-feedback" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(form.value.taxvatError), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                        _push6(`</div>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "email-group",
                                          label: _ctx.$t("form_email") + "*",
                                          "label-for": "email"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "email",
                                              modelValue: form.value.email,
                                              "onUpdate:modelValue": ($event) => form.value.email = $event,
                                              type: "text",
                                              state: form.value.emailState,
                                              "aria-describedby": "email-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "email-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.emailError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "password-group",
                                          label: _ctx.$t("form_password") + "*",
                                          "label-for": "password"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "password",
                                              modelValue: form.value.password,
                                              "onUpdate:modelValue": ($event) => form.value.password = $event,
                                              type: "password",
                                              state: form.value.passwordState,
                                              "aria-describedby": "password-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            form.value.password && isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                                              key: 0,
                                              password: form.value.password
                                            }, null, 8, ["password"])) : createCommentVNode("", true),
                                            createVNode(_component_b_form_invalid_feedback, { id: "password-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.passwordError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "password_confirm-group",
                                          label: _ctx.$t("form_password_confirmation") + "*",
                                          "label-for": "password_confirm"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "password_confirm",
                                              modelValue: form.value.password_confirm,
                                              "onUpdate:modelValue": ($event) => form.value.password_confirm = $event,
                                              type: "password",
                                              state: form.value.password_confirmState,
                                              "aria-describedby": "password_confirm-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "password_confirm-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.password_confirmError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        createVNode(_component_b_form_checkbox, {
                                          id: "checkbox-1",
                                          class: "custom-control custom-checkbox",
                                          "input-class": "custom-control-input",
                                          modelValue: isCompany.value,
                                          "onUpdate:modelValue": ($event) => isCompany.value = $event,
                                          name: "checkbox-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        isCompany.value ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "short-form"
                                        }, [
                                          createVNode(_component_b_form_group, {
                                            class: "account-inputs",
                                            id: "company-group",
                                            label: _ctx.$t("form_company_name") + "*",
                                            "label-for": "company"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_b_form_input, {
                                                id: "company",
                                                modelValue: form.value.company,
                                                "onUpdate:modelValue": ($event) => form.value.company = $event,
                                                type: "text",
                                                onBlur: validateCompany,
                                                state: form.value.companyState,
                                                "aria-describedby": "company-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              createVNode(_component_b_form_invalid_feedback, { id: "company-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(form.value.companyError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["label"]),
                                          createVNode(_component_b_form_group, {
                                            class: "account-inputs",
                                            id: "coc_number-group",
                                            label: _ctx.$t("form_coc_number") + "*",
                                            "label-for": "coc_number"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_b_form_input, {
                                                id: "coc_number",
                                                modelValue: form.value.coc_number,
                                                "onUpdate:modelValue": ($event) => form.value.coc_number = $event,
                                                type: "text",
                                                onBlur: _ctx.validateCOCNumber,
                                                state: form.value.coc_numberState,
                                                "aria-describedby": "coc_number-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                                              createVNode(_component_b_form_invalid_feedback, { id: "coc_number-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(form.value.coc_numberError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["label"]),
                                          createVNode(_component_b_form_group, {
                                            class: "account-inputs",
                                            id: "taxvat-group",
                                            label: _ctx.$t("form_vat_number"),
                                            "label-for": "taxvat"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_b_form_input, {
                                                id: "taxvat",
                                                modelValue: form.value.taxvat,
                                                "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                                                type: "text",
                                                state: form.value.taxvatState,
                                                "aria-describedby": "taxvat-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              createVNode(_component_b_form_invalid_feedback, { id: "taxvat-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(form.value.taxvatError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["label"])
                                        ])) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_b_col, { md: "6" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "first-name-group",
                                        label: _ctx.$t("form_first_name") + "*",
                                        "label-for": "first_name"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_b_form_input, {
                                              id: "first_name",
                                              modelValue: form.value.firstname,
                                              "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                                              type: "text",
                                              onBlur: validateFirstname,
                                              state: form.value.firstnameState,
                                              "aria-describedby": "firstname-feedback"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "firstname-feedback" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(form.value.firstnameError)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(form.value.firstnameError), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_b_form_input, {
                                                id: "first_name",
                                                modelValue: form.value.firstname,
                                                "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                                                type: "text",
                                                onBlur: validateFirstname,
                                                state: form.value.firstnameState,
                                                "aria-describedby": "firstname-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              createVNode(_component_b_form_invalid_feedback, { id: "firstname-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(form.value.firstnameError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "last-name-group",
                                        label: _ctx.$t("form_last_name") + "*",
                                        "label-for": "last_name"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_b_form_input, {
                                              id: "last_name",
                                              modelValue: form.value.lastname,
                                              "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                                              type: "text",
                                              onBlur: validateLastname,
                                              state: form.value.lastnameState,
                                              "aria-describedby": "lastname-feedback"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "lastname-feedback" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(form.value.lastnameError)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(form.value.lastnameError), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_b_form_input, {
                                                id: "last_name",
                                                modelValue: form.value.lastname,
                                                "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                                                type: "text",
                                                onBlur: validateLastname,
                                                state: form.value.lastnameState,
                                                "aria-describedby": "lastname-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              createVNode(_component_b_form_invalid_feedback, { id: "lastname-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(form.value.lastnameError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "country-group",
                                        label: _ctx.$t("form_country") + "*",
                                        "label-for": "country"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_b_form_select, {
                                              id: "country",
                                              modelValue: form.value.address.country_code,
                                              "onUpdate:modelValue": ($event) => form.value.address.country_code = $event,
                                              options: countries.value,
                                              class: "select"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_b_form_select, {
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
                                      }, _parent6, _scopeId5));
                                      if (!showFullAddress.value) {
                                        _push6(ssrRenderComponent(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "postcode-group",
                                          label: _ctx.$t("form_postal_code") + "*",
                                          "label-for": "postcode"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_b_form_input, {
                                                id: "postcode",
                                                modelValue: form.value.address.postcode,
                                                "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                                type: "text",
                                                state: form.value.address.postcodeState,
                                                "aria-describedby": "address.postcode-feedback"
                                              }, null, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "address.postcode-feedback" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(form.value.address.postcodeError)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_b_form_input, {
                                                  id: "postcode",
                                                  modelValue: form.value.address.postcode,
                                                  "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                                  type: "text",
                                                  state: form.value.address.postcodeState,
                                                  "aria-describedby": "address.postcode-feedback"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                createVNode(_component_b_form_invalid_feedback, { id: "address.postcode-feedback" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (showFullAddress.value) {
                                        _push6(ssrRenderComponent(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "street-group",
                                          label: _ctx.$t("form_street") + "*",
                                          "label-for": "street"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_b_form_input, {
                                                id: "street",
                                                modelValue: form.value.address.streetDisplay,
                                                "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                                                type: "text",
                                                onBlur: validateStreet,
                                                state: form.value.address.streetDisplayState,
                                                "aria-describedby": "address.streetDisplay-feedback"
                                              }, null, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "address.streetDisplay-feedback" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(form.value.address.streetDisplayError)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_b_form_input, {
                                                  id: "street",
                                                  modelValue: form.value.address.streetDisplay,
                                                  "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                                                  type: "text",
                                                  onBlur: validateStreet,
                                                  state: form.value.address.streetDisplayState,
                                                  "aria-describedby": "address.streetDisplay-feedback"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                createVNode(_component_b_form_invalid_feedback, { id: "address.streetDisplay-feedback" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(ssrRenderComponent(_component_b_row, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_b_col, {
                                              sm: "6",
                                              class: "first"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_b_form_group, {
                                                    class: "account-inputs",
                                                    id: "house_number-group",
                                                    label: _ctx.$t("form_house_number") + "*",
                                                    "label-for": "house_number"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_b_form_input, {
                                                          id: "house_number",
                                                          modelValue: form.value.address.house_number,
                                                          "onUpdate:modelValue": ($event) => form.value.address.house_number = $event,
                                                          type: "text",
                                                          onBlur: validateHouseNumber,
                                                          state: form.value.address.house_numberState,
                                                          "aria-describedby": "address.house_number-feedback"
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "address.house_number-feedback" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(form.value.address.house_numberError)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(form.value.address.house_numberError), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_b_form_input, {
                                                            id: "house_number",
                                                            modelValue: form.value.address.house_number,
                                                            "onUpdate:modelValue": ($event) => form.value.address.house_number = $event,
                                                            type: "text",
                                                            onBlur: validateHouseNumber,
                                                            state: form.value.address.house_numberState,
                                                            "aria-describedby": "address.house_number-feedback"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                          createVNode(_component_b_form_invalid_feedback, { id: "address.house_number-feedback" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(form.value.address.house_numberError), 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_b_form_group, {
                                                      class: "account-inputs",
                                                      id: "house_number-group",
                                                      label: _ctx.$t("form_house_number") + "*",
                                                      "label-for": "house_number"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_b_form_input, {
                                                          id: "house_number",
                                                          modelValue: form.value.address.house_number,
                                                          "onUpdate:modelValue": ($event) => form.value.address.house_number = $event,
                                                          type: "text",
                                                          onBlur: validateHouseNumber,
                                                          state: form.value.address.house_numberState,
                                                          "aria-describedby": "address.house_number-feedback"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                        createVNode(_component_b_form_invalid_feedback, { id: "address.house_number-feedback" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(form.value.address.house_numberError), 1)
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
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_b_col, {
                                              sm: "6",
                                              class: "third"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_b_form_group, {
                                                    class: "account-inputs",
                                                    id: "addition-group",
                                                    label: _ctx.$t("form_addition"),
                                                    "label-for": "addition"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_b_form_input, {
                                                          id: "addition",
                                                          modelValue: form.value.address.addition,
                                                          "onUpdate:modelValue": ($event) => form.value.address.addition = $event,
                                                          type: "text"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_b_form_input, {
                                                            id: "addition",
                                                            modelValue: form.value.address.addition,
                                                            "onUpdate:modelValue": ($event) => form.value.address.addition = $event,
                                                            type: "text"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_b_form_group, {
                                                      class: "account-inputs",
                                                      id: "addition-group",
                                                      label: _ctx.$t("form_addition"),
                                                      "label-for": "addition"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_b_form_input, {
                                                          id: "addition",
                                                          modelValue: form.value.address.addition,
                                                          "onUpdate:modelValue": ($event) => form.value.address.addition = $event,
                                                          type: "text"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }, 8, ["label"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_b_col, {
                                                sm: "6",
                                                class: "first"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_b_form_group, {
                                                    class: "account-inputs",
                                                    id: "house_number-group",
                                                    label: _ctx.$t("form_house_number") + "*",
                                                    "label-for": "house_number"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_b_form_input, {
                                                        id: "house_number",
                                                        modelValue: form.value.address.house_number,
                                                        "onUpdate:modelValue": ($event) => form.value.address.house_number = $event,
                                                        type: "text",
                                                        onBlur: validateHouseNumber,
                                                        state: form.value.address.house_numberState,
                                                        "aria-describedby": "address.house_number-feedback"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                      createVNode(_component_b_form_invalid_feedback, { id: "address.house_number-feedback" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(form.value.address.house_numberError), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["label"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_b_col, {
                                                sm: "6",
                                                class: "third"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_b_form_group, {
                                                    class: "account-inputs",
                                                    id: "addition-group",
                                                    label: _ctx.$t("form_addition"),
                                                    "label-for": "addition"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_b_form_input, {
                                                        id: "addition",
                                                        modelValue: form.value.address.addition,
                                                        "onUpdate:modelValue": ($event) => form.value.address.addition = $event,
                                                        type: "text"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      }, _parent6, _scopeId5));
                                      if (showFullAddress.value) {
                                        _push6(ssrRenderComponent(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "postcode-group1",
                                          label: _ctx.$t("form_postal_code") + "*",
                                          "label-for": "postcode1"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_b_form_input, {
                                                id: "postcode1",
                                                modelValue: form.value.address.postcode,
                                                "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                                type: "text",
                                                onBlur: validatePostcode,
                                                state: form.value.address.postcodeState,
                                                "aria-describedby": "address.postcode1-feedback"
                                              }, null, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "address.postcode1-feedback" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(form.value.address.postcodeError)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_b_form_input, {
                                                  id: "postcode1",
                                                  modelValue: form.value.address.postcode,
                                                  "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                                  type: "text",
                                                  onBlur: validatePostcode,
                                                  state: form.value.address.postcodeState,
                                                  "aria-describedby": "address.postcode1-feedback"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                createVNode(_component_b_form_invalid_feedback, { id: "address.postcode1-feedback" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (showFullAddress.value) {
                                        _push6(ssrRenderComponent(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "city-group",
                                          label: _ctx.$t("form_city") + "*",
                                          "label-for": "city"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_b_form_input, {
                                                id: "city",
                                                modelValue: form.value.address.city,
                                                "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                                                type: "text",
                                                onBlur: validateCity,
                                                state: form.value.address.cityState,
                                                "aria-describedby": "address.city-feedback"
                                              }, null, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "address.city-feedback" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(form.value.address.cityError)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(form.value.address.cityError), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_b_form_input, {
                                                  id: "city",
                                                  modelValue: form.value.address.city,
                                                  "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                                                  type: "text",
                                                  onBlur: validateCity,
                                                  state: form.value.address.cityState,
                                                  "aria-describedby": "address.city-feedback"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                createVNode(_component_b_form_invalid_feedback, { id: "address.city-feedback" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(form.value.address.cityError), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (foundAddress.value != "" && showFullAddress.value == false) {
                                        _push6(ssrRenderComponent(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "add-group",
                                          label: " ",
                                          "label-for": "add"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div id="add" data-v-bb7bb1aa${_scopeId6}>${ssrInterpolate(foundAddress.value)}</div>`);
                                            } else {
                                              return [
                                                createVNode("div", { id: "add" }, toDisplayString(foundAddress.value), 1)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (foundAddresses.value.length > 0 && showFullAddress.value == false) {
                                        _push6(ssrRenderComponent(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "addm-group",
                                          label: " ",
                                          "label-for": "addm"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div id="addm" data-v-bb7bb1aa${_scopeId6}><!--[-->`);
                                              ssrRenderList(foundAddresses.value, (item, index) => {
                                                _push7(ssrRenderComponent(_component_b_form_radio, {
                                                  style: { "width": "300px" },
                                                  class: "account-radios",
                                                  modelValue: selectedAddress.value,
                                                  "onUpdate:modelValue": ($event) => selectedAddress.value = $event,
                                                  key: index,
                                                  name: "some-radios",
                                                  value: index
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(`${ssrInterpolate(item.text)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(item.text), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              });
                                              _push7(`<!--]--></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { id: "addm" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(foundAddresses.value, (item, index) => {
                                                    return openBlock(), createBlock(_component_b_form_radio, {
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
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (showManual.value) {
                                        _push6(ssrRenderComponent(_component_b_form_checkbox, {
                                          id: "manual",
                                          modelValue: showFullAddress.value,
                                          "onUpdate:modelValue": ($event) => showFullAddress.value = $event,
                                          name: "manual",
                                          class: "custom-control custom-checkbox",
                                          "input-class": "custom-control-input"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(_ctx.$t("form_fillout_address_manual"))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(_ctx.$t("form_fillout_address_manual")), 1)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(ssrRenderComponent(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "telephone-group",
                                        label: _ctx.$t("form_phone") + "*",
                                        "label-for": "telephone"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_b_form_input, {
                                              id: "telephone",
                                              modelValue: form.value.address.telephone,
                                              "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                                              type: "text",
                                              onBlur: validatePhone,
                                              state: form.value.address.telephoneState,
                                              "aria-describedby": "address.telephone-feedback"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_b_form_invalid_feedback, { id: "address.telephone-feedback" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(form.value.address.telephoneError)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_b_form_input, {
                                                id: "telephone",
                                                modelValue: form.value.address.telephone,
                                                "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                                                type: "text",
                                                onBlur: validatePhone,
                                                state: form.value.address.telephoneState,
                                                "aria-describedby": "address.telephone-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              createVNode(_component_b_form_invalid_feedback, { id: "address.telephone-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_b_form_checkbox, {
                                        id: "checkbox-2",
                                        name: "checkbox-2",
                                        "label-for": "checkbox2",
                                        modelValue: form.value.address.default_billing,
                                        "onUpdate:modelValue": ($event) => form.value.address.default_billing = $event,
                                        class: "custom-control custom-checkbox",
                                        "input-class": "custom-control-input"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(_ctx.$t("form_address_also_invoice_address"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(_ctx.$t("form_address_also_invoice_address")), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_b_form_checkbox, {
                                        id: "checkbox-3",
                                        name: "checkbox-3",
                                        "label-for": "checkbox3",
                                        modelValue: form.value.is_subscribed,
                                        "onUpdate:modelValue": ($event) => form.value.is_subscribed = $event,
                                        class: "custom-control custom-checkbox",
                                        "input-class": "custom-control-input"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(_ctx.$t("form_newsletter_subscription"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(_ctx.$t("form_newsletter_subscription")), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "first-name-group",
                                          label: _ctx.$t("form_first_name") + "*",
                                          "label-for": "first_name"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "first_name",
                                              modelValue: form.value.firstname,
                                              "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                                              type: "text",
                                              onBlur: validateFirstname,
                                              state: form.value.firstnameState,
                                              "aria-describedby": "firstname-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "firstname-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.firstnameError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "last-name-group",
                                          label: _ctx.$t("form_last_name") + "*",
                                          "label-for": "last_name"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "last_name",
                                              modelValue: form.value.lastname,
                                              "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                                              type: "text",
                                              onBlur: validateLastname,
                                              state: form.value.lastnameState,
                                              "aria-describedby": "lastname-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "lastname-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.lastnameError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "country-group",
                                          label: _ctx.$t("form_country") + "*",
                                          "label-for": "country"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_select, {
                                              id: "country",
                                              modelValue: form.value.address.country_code,
                                              "onUpdate:modelValue": ($event) => form.value.address.country_code = $event,
                                              options: countries.value,
                                              class: "select"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        !showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                          key: 0,
                                          class: "account-inputs",
                                          id: "postcode-group",
                                          label: _ctx.$t("form_postal_code") + "*",
                                          "label-for": "postcode"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "postcode",
                                              modelValue: form.value.address.postcode,
                                              "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                              type: "text",
                                              state: form.value.address.postcodeState,
                                              "aria-describedby": "address.postcode-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "address.postcode-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"])) : createCommentVNode("", true),
                                        showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                          key: 1,
                                          class: "account-inputs",
                                          id: "street-group",
                                          label: _ctx.$t("form_street") + "*",
                                          "label-for": "street"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "street",
                                              modelValue: form.value.address.streetDisplay,
                                              "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                                              type: "text",
                                              onBlur: validateStreet,
                                              state: form.value.address.streetDisplayState,
                                              "aria-describedby": "address.streetDisplay-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "address.streetDisplay-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"])) : createCommentVNode("", true),
                                        createVNode(_component_b_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_col, {
                                              sm: "6",
                                              class: "first"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_b_form_group, {
                                                  class: "account-inputs",
                                                  id: "house_number-group",
                                                  label: _ctx.$t("form_house_number") + "*",
                                                  "label-for": "house_number"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_b_form_input, {
                                                      id: "house_number",
                                                      modelValue: form.value.address.house_number,
                                                      "onUpdate:modelValue": ($event) => form.value.address.house_number = $event,
                                                      type: "text",
                                                      onBlur: validateHouseNumber,
                                                      state: form.value.address.house_numberState,
                                                      "aria-describedby": "address.house_number-feedback"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                    createVNode(_component_b_form_invalid_feedback, { id: "address.house_number-feedback" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(form.value.address.house_numberError), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["label"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_b_col, {
                                              sm: "6",
                                              class: "third"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_b_form_group, {
                                                  class: "account-inputs",
                                                  id: "addition-group",
                                                  label: _ctx.$t("form_addition"),
                                                  "label-for": "addition"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_b_form_input, {
                                                      id: "addition",
                                                      modelValue: form.value.address.addition,
                                                      "onUpdate:modelValue": ($event) => form.value.address.addition = $event,
                                                      type: "text"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }, 8, ["label"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                          key: 2,
                                          class: "account-inputs",
                                          id: "postcode-group1",
                                          label: _ctx.$t("form_postal_code") + "*",
                                          "label-for": "postcode1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "postcode1",
                                              modelValue: form.value.address.postcode,
                                              "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                              type: "text",
                                              onBlur: validatePostcode,
                                              state: form.value.address.postcodeState,
                                              "aria-describedby": "address.postcode1-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "address.postcode1-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"])) : createCommentVNode("", true),
                                        showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                          key: 3,
                                          class: "account-inputs",
                                          id: "city-group",
                                          label: _ctx.$t("form_city") + "*",
                                          "label-for": "city"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "city",
                                              modelValue: form.value.address.city,
                                              "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                                              type: "text",
                                              onBlur: validateCity,
                                              state: form.value.address.cityState,
                                              "aria-describedby": "address.city-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "address.city-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.address.cityError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"])) : createCommentVNode("", true),
                                        foundAddress.value != "" && showFullAddress.value == false ? (openBlock(), createBlock(_component_b_form_group, {
                                          key: 4,
                                          class: "account-inputs",
                                          id: "add-group",
                                          label: " ",
                                          "label-for": "add"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { id: "add" }, toDisplayString(foundAddress.value), 1)
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        foundAddresses.value.length > 0 && showFullAddress.value == false ? (openBlock(), createBlock(_component_b_form_group, {
                                          key: 5,
                                          class: "account-inputs",
                                          id: "addm-group",
                                          label: " ",
                                          "label-for": "addm"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { id: "addm" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(foundAddresses.value, (item, index) => {
                                                return openBlock(), createBlock(_component_b_form_radio, {
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
                                        showManual.value ? (openBlock(), createBlock(_component_b_form_checkbox, {
                                          key: 6,
                                          id: "manual",
                                          modelValue: showFullAddress.value,
                                          "onUpdate:modelValue": ($event) => showFullAddress.value = $event,
                                          name: "manual",
                                          class: "custom-control custom-checkbox",
                                          "input-class": "custom-control-input"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("form_fillout_address_manual")), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "telephone-group",
                                          label: _ctx.$t("form_phone") + "*",
                                          "label-for": "telephone"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "telephone",
                                              modelValue: form.value.address.telephone,
                                              "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                                              type: "text",
                                              onBlur: validatePhone,
                                              state: form.value.address.telephoneState,
                                              "aria-describedby": "address.telephone-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "address.telephone-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        createVNode(_component_b_form_checkbox, {
                                          id: "checkbox-2",
                                          name: "checkbox-2",
                                          "label-for": "checkbox2",
                                          modelValue: form.value.address.default_billing,
                                          "onUpdate:modelValue": ($event) => form.value.address.default_billing = $event,
                                          class: "custom-control custom-checkbox",
                                          "input-class": "custom-control-input"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("form_address_also_invoice_address")), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_b_form_checkbox, {
                                          id: "checkbox-3",
                                          name: "checkbox-3",
                                          "label-for": "checkbox3",
                                          modelValue: form.value.is_subscribed,
                                          "onUpdate:modelValue": ($event) => form.value.is_subscribed = $event,
                                          class: "custom-control custom-checkbox",
                                          "input-class": "custom-control-input"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("form_newsletter_subscription")), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="btn-wrap text-center" data-v-bb7bb1aa${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_b_button, {
                                  type: "submit",
                                  variant: "info",
                                  class: "text-white form-submit-btn"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(_ctx.$t("create_my_account"))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(_ctx.$t("create_my_account")), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode(_component_b_col, { md: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "email-group",
                                        label: _ctx.$t("form_email") + "*",
                                        "label-for": "email"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "email",
                                            modelValue: form.value.email,
                                            "onUpdate:modelValue": ($event) => form.value.email = $event,
                                            type: "text",
                                            state: form.value.emailState,
                                            "aria-describedby": "email-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "email-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.emailError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "password-group",
                                        label: _ctx.$t("form_password") + "*",
                                        "label-for": "password"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "password",
                                            modelValue: form.value.password,
                                            "onUpdate:modelValue": ($event) => form.value.password = $event,
                                            type: "password",
                                            state: form.value.passwordState,
                                            "aria-describedby": "password-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          form.value.password && isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                                            key: 0,
                                            password: form.value.password
                                          }, null, 8, ["password"])) : createCommentVNode("", true),
                                          createVNode(_component_b_form_invalid_feedback, { id: "password-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.passwordError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "password_confirm-group",
                                        label: _ctx.$t("form_password_confirmation") + "*",
                                        "label-for": "password_confirm"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "password_confirm",
                                            modelValue: form.value.password_confirm,
                                            "onUpdate:modelValue": ($event) => form.value.password_confirm = $event,
                                            type: "password",
                                            state: form.value.password_confirmState,
                                            "aria-describedby": "password_confirm-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "password_confirm-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.password_confirmError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_b_form_checkbox, {
                                        id: "checkbox-1",
                                        class: "custom-control custom-checkbox",
                                        "input-class": "custom-control-input",
                                        modelValue: isCompany.value,
                                        "onUpdate:modelValue": ($event) => isCompany.value = $event,
                                        name: "checkbox-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      isCompany.value ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "short-form"
                                      }, [
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "company-group",
                                          label: _ctx.$t("form_company_name") + "*",
                                          "label-for": "company"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "company",
                                              modelValue: form.value.company,
                                              "onUpdate:modelValue": ($event) => form.value.company = $event,
                                              type: "text",
                                              onBlur: validateCompany,
                                              state: form.value.companyState,
                                              "aria-describedby": "company-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "company-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.companyError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "coc_number-group",
                                          label: _ctx.$t("form_coc_number") + "*",
                                          "label-for": "coc_number"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "coc_number",
                                              modelValue: form.value.coc_number,
                                              "onUpdate:modelValue": ($event) => form.value.coc_number = $event,
                                              type: "text",
                                              onBlur: _ctx.validateCOCNumber,
                                              state: form.value.coc_numberState,
                                              "aria-describedby": "coc_number-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "coc_number-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.coc_numberError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"]),
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "taxvat-group",
                                          label: _ctx.$t("form_vat_number"),
                                          "label-for": "taxvat"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "taxvat",
                                              modelValue: form.value.taxvat,
                                              "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                                              type: "text",
                                              state: form.value.taxvatState,
                                              "aria-describedby": "taxvat-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "taxvat-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.taxvatError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"])
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_col, { md: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "first-name-group",
                                        label: _ctx.$t("form_first_name") + "*",
                                        "label-for": "first_name"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "first_name",
                                            modelValue: form.value.firstname,
                                            "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                                            type: "text",
                                            onBlur: validateFirstname,
                                            state: form.value.firstnameState,
                                            "aria-describedby": "firstname-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "firstname-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.firstnameError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "last-name-group",
                                        label: _ctx.$t("form_last_name") + "*",
                                        "label-for": "last_name"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "last_name",
                                            modelValue: form.value.lastname,
                                            "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                                            type: "text",
                                            onBlur: validateLastname,
                                            state: form.value.lastnameState,
                                            "aria-describedby": "lastname-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "lastname-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.lastnameError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "country-group",
                                        label: _ctx.$t("form_country") + "*",
                                        "label-for": "country"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_select, {
                                            id: "country",
                                            modelValue: form.value.address.country_code,
                                            "onUpdate:modelValue": ($event) => form.value.address.country_code = $event,
                                            options: countries.value,
                                            class: "select"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      !showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                        key: 0,
                                        class: "account-inputs",
                                        id: "postcode-group",
                                        label: _ctx.$t("form_postal_code") + "*",
                                        "label-for": "postcode"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "postcode",
                                            modelValue: form.value.address.postcode,
                                            "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                            type: "text",
                                            state: form.value.address.postcodeState,
                                            "aria-describedby": "address.postcode-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "address.postcode-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"])) : createCommentVNode("", true),
                                      showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                        key: 1,
                                        class: "account-inputs",
                                        id: "street-group",
                                        label: _ctx.$t("form_street") + "*",
                                        "label-for": "street"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "street",
                                            modelValue: form.value.address.streetDisplay,
                                            "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                                            type: "text",
                                            onBlur: validateStreet,
                                            state: form.value.address.streetDisplayState,
                                            "aria-describedby": "address.streetDisplay-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "address.streetDisplay-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"])) : createCommentVNode("", true),
                                      createVNode(_component_b_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_col, {
                                            sm: "6",
                                            class: "first"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_b_form_group, {
                                                class: "account-inputs",
                                                id: "house_number-group",
                                                label: _ctx.$t("form_house_number") + "*",
                                                "label-for": "house_number"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_b_form_input, {
                                                    id: "house_number",
                                                    modelValue: form.value.address.house_number,
                                                    "onUpdate:modelValue": ($event) => form.value.address.house_number = $event,
                                                    type: "text",
                                                    onBlur: validateHouseNumber,
                                                    state: form.value.address.house_numberState,
                                                    "aria-describedby": "address.house_number-feedback"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                  createVNode(_component_b_form_invalid_feedback, { id: "address.house_number-feedback" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(form.value.address.house_numberError), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["label"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_b_col, {
                                            sm: "6",
                                            class: "third"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_b_form_group, {
                                                class: "account-inputs",
                                                id: "addition-group",
                                                label: _ctx.$t("form_addition"),
                                                "label-for": "addition"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_b_form_input, {
                                                    id: "addition",
                                                    modelValue: form.value.address.addition,
                                                    "onUpdate:modelValue": ($event) => form.value.address.addition = $event,
                                                    type: "text"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }, 8, ["label"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                        key: 2,
                                        class: "account-inputs",
                                        id: "postcode-group1",
                                        label: _ctx.$t("form_postal_code") + "*",
                                        "label-for": "postcode1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "postcode1",
                                            modelValue: form.value.address.postcode,
                                            "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                            type: "text",
                                            onBlur: validatePostcode,
                                            state: form.value.address.postcodeState,
                                            "aria-describedby": "address.postcode1-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "address.postcode1-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"])) : createCommentVNode("", true),
                                      showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                        key: 3,
                                        class: "account-inputs",
                                        id: "city-group",
                                        label: _ctx.$t("form_city") + "*",
                                        "label-for": "city"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "city",
                                            modelValue: form.value.address.city,
                                            "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                                            type: "text",
                                            onBlur: validateCity,
                                            state: form.value.address.cityState,
                                            "aria-describedby": "address.city-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "address.city-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.address.cityError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"])) : createCommentVNode("", true),
                                      foundAddress.value != "" && showFullAddress.value == false ? (openBlock(), createBlock(_component_b_form_group, {
                                        key: 4,
                                        class: "account-inputs",
                                        id: "add-group",
                                        label: " ",
                                        "label-for": "add"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { id: "add" }, toDisplayString(foundAddress.value), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      foundAddresses.value.length > 0 && showFullAddress.value == false ? (openBlock(), createBlock(_component_b_form_group, {
                                        key: 5,
                                        class: "account-inputs",
                                        id: "addm-group",
                                        label: " ",
                                        "label-for": "addm"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { id: "addm" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(foundAddresses.value, (item, index) => {
                                              return openBlock(), createBlock(_component_b_form_radio, {
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
                                      showManual.value ? (openBlock(), createBlock(_component_b_form_checkbox, {
                                        key: 6,
                                        id: "manual",
                                        modelValue: showFullAddress.value,
                                        "onUpdate:modelValue": ($event) => showFullAddress.value = $event,
                                        name: "manual",
                                        class: "custom-control custom-checkbox",
                                        "input-class": "custom-control-input"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("form_fillout_address_manual")), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                      createVNode(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "telephone-group",
                                        label: _ctx.$t("form_phone") + "*",
                                        "label-for": "telephone"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "telephone",
                                            modelValue: form.value.address.telephone,
                                            "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                                            type: "text",
                                            onBlur: validatePhone,
                                            state: form.value.address.telephoneState,
                                            "aria-describedby": "address.telephone-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "address.telephone-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_b_form_checkbox, {
                                        id: "checkbox-2",
                                        name: "checkbox-2",
                                        "label-for": "checkbox2",
                                        modelValue: form.value.address.default_billing,
                                        "onUpdate:modelValue": ($event) => form.value.address.default_billing = $event,
                                        class: "custom-control custom-checkbox",
                                        "input-class": "custom-control-input"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("form_address_also_invoice_address")), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_b_form_checkbox, {
                                        id: "checkbox-3",
                                        name: "checkbox-3",
                                        "label-for": "checkbox3",
                                        modelValue: form.value.is_subscribed,
                                        "onUpdate:modelValue": ($event) => form.value.is_subscribed = $event,
                                        class: "custom-control custom-checkbox",
                                        "input-class": "custom-control-input"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("form_newsletter_subscription")), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "btn-wrap text-center" }, [
                                    createVNode(_component_b_button, {
                                      type: "submit",
                                      variant: "info",
                                      class: "text-white form-submit-btn"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("create_my_account")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("h2", null, toDisplayString(_ctx.$t("personal_information")), 1),
                            createVNode(_component_b_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_b_col, { md: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_group, {
                                      class: "account-inputs",
                                      id: "email-group",
                                      label: _ctx.$t("form_email") + "*",
                                      "label-for": "email"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "email",
                                          modelValue: form.value.email,
                                          "onUpdate:modelValue": ($event) => form.value.email = $event,
                                          type: "text",
                                          state: form.value.emailState,
                                          "aria-describedby": "email-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "email-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.emailError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"]),
                                    createVNode(_component_b_form_group, {
                                      class: "account-inputs",
                                      id: "password-group",
                                      label: _ctx.$t("form_password") + "*",
                                      "label-for": "password"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "password",
                                          modelValue: form.value.password,
                                          "onUpdate:modelValue": ($event) => form.value.password = $event,
                                          type: "password",
                                          state: form.value.passwordState,
                                          "aria-describedby": "password-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        form.value.password && isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                                          key: 0,
                                          password: form.value.password
                                        }, null, 8, ["password"])) : createCommentVNode("", true),
                                        createVNode(_component_b_form_invalid_feedback, { id: "password-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.passwordError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"]),
                                    createVNode(_component_b_form_group, {
                                      class: "account-inputs",
                                      id: "password_confirm-group",
                                      label: _ctx.$t("form_password_confirmation") + "*",
                                      "label-for": "password_confirm"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "password_confirm",
                                          modelValue: form.value.password_confirm,
                                          "onUpdate:modelValue": ($event) => form.value.password_confirm = $event,
                                          type: "password",
                                          state: form.value.password_confirmState,
                                          "aria-describedby": "password_confirm-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "password_confirm-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.password_confirmError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"]),
                                    createVNode(_component_b_form_checkbox, {
                                      id: "checkbox-1",
                                      class: "custom-control custom-checkbox",
                                      "input-class": "custom-control-input",
                                      modelValue: isCompany.value,
                                      "onUpdate:modelValue": ($event) => isCompany.value = $event,
                                      name: "checkbox-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    isCompany.value ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "short-form"
                                    }, [
                                      createVNode(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "company-group",
                                        label: _ctx.$t("form_company_name") + "*",
                                        "label-for": "company"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "company",
                                            modelValue: form.value.company,
                                            "onUpdate:modelValue": ($event) => form.value.company = $event,
                                            type: "text",
                                            onBlur: validateCompany,
                                            state: form.value.companyState,
                                            "aria-describedby": "company-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "company-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.companyError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "coc_number-group",
                                        label: _ctx.$t("form_coc_number") + "*",
                                        "label-for": "coc_number"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "coc_number",
                                            modelValue: form.value.coc_number,
                                            "onUpdate:modelValue": ($event) => form.value.coc_number = $event,
                                            type: "text",
                                            onBlur: _ctx.validateCOCNumber,
                                            state: form.value.coc_numberState,
                                            "aria-describedby": "coc_number-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "coc_number-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.coc_numberError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"]),
                                      createVNode(_component_b_form_group, {
                                        class: "account-inputs",
                                        id: "taxvat-group",
                                        label: _ctx.$t("form_vat_number"),
                                        "label-for": "taxvat"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_input, {
                                            id: "taxvat",
                                            modelValue: form.value.taxvat,
                                            "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                                            type: "text",
                                            state: form.value.taxvatState,
                                            "aria-describedby": "taxvat-feedback"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                          createVNode(_component_b_form_invalid_feedback, { id: "taxvat-feedback" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(form.value.taxvatError), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["label"])
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_col, { md: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_group, {
                                      class: "account-inputs",
                                      id: "first-name-group",
                                      label: _ctx.$t("form_first_name") + "*",
                                      "label-for": "first_name"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "first_name",
                                          modelValue: form.value.firstname,
                                          "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                                          type: "text",
                                          onBlur: validateFirstname,
                                          state: form.value.firstnameState,
                                          "aria-describedby": "firstname-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "firstname-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.firstnameError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"]),
                                    createVNode(_component_b_form_group, {
                                      class: "account-inputs",
                                      id: "last-name-group",
                                      label: _ctx.$t("form_last_name") + "*",
                                      "label-for": "last_name"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "last_name",
                                          modelValue: form.value.lastname,
                                          "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                                          type: "text",
                                          onBlur: validateLastname,
                                          state: form.value.lastnameState,
                                          "aria-describedby": "lastname-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "lastname-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.lastnameError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"]),
                                    createVNode(_component_b_form_group, {
                                      class: "account-inputs",
                                      id: "country-group",
                                      label: _ctx.$t("form_country") + "*",
                                      "label-for": "country"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_select, {
                                          id: "country",
                                          modelValue: form.value.address.country_code,
                                          "onUpdate:modelValue": ($event) => form.value.address.country_code = $event,
                                          options: countries.value,
                                          class: "select"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ]),
                                      _: 1
                                    }, 8, ["label"]),
                                    !showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                      key: 0,
                                      class: "account-inputs",
                                      id: "postcode-group",
                                      label: _ctx.$t("form_postal_code") + "*",
                                      "label-for": "postcode"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "postcode",
                                          modelValue: form.value.address.postcode,
                                          "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                          type: "text",
                                          state: form.value.address.postcodeState,
                                          "aria-describedby": "address.postcode-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "address.postcode-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"])) : createCommentVNode("", true),
                                    showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                      key: 1,
                                      class: "account-inputs",
                                      id: "street-group",
                                      label: _ctx.$t("form_street") + "*",
                                      "label-for": "street"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "street",
                                          modelValue: form.value.address.streetDisplay,
                                          "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                                          type: "text",
                                          onBlur: validateStreet,
                                          state: form.value.address.streetDisplayState,
                                          "aria-describedby": "address.streetDisplay-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "address.streetDisplay-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"])) : createCommentVNode("", true),
                                    createVNode(_component_b_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_col, {
                                          sm: "6",
                                          class: "first"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_group, {
                                              class: "account-inputs",
                                              id: "house_number-group",
                                              label: _ctx.$t("form_house_number") + "*",
                                              "label-for": "house_number"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_b_form_input, {
                                                  id: "house_number",
                                                  modelValue: form.value.address.house_number,
                                                  "onUpdate:modelValue": ($event) => form.value.address.house_number = $event,
                                                  type: "text",
                                                  onBlur: validateHouseNumber,
                                                  state: form.value.address.house_numberState,
                                                  "aria-describedby": "address.house_number-feedback"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                                createVNode(_component_b_form_invalid_feedback, { id: "address.house_number-feedback" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(form.value.address.house_numberError), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["label"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_b_col, {
                                          sm: "6",
                                          class: "third"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_group, {
                                              class: "account-inputs",
                                              id: "addition-group",
                                              label: _ctx.$t("form_addition"),
                                              "label-for": "addition"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_b_form_input, {
                                                  id: "addition",
                                                  modelValue: form.value.address.addition,
                                                  "onUpdate:modelValue": ($event) => form.value.address.addition = $event,
                                                  type: "text"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }, 8, ["label"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                      key: 2,
                                      class: "account-inputs",
                                      id: "postcode-group1",
                                      label: _ctx.$t("form_postal_code") + "*",
                                      "label-for": "postcode1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "postcode1",
                                          modelValue: form.value.address.postcode,
                                          "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                          type: "text",
                                          onBlur: validatePostcode,
                                          state: form.value.address.postcodeState,
                                          "aria-describedby": "address.postcode1-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "address.postcode1-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"])) : createCommentVNode("", true),
                                    showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                      key: 3,
                                      class: "account-inputs",
                                      id: "city-group",
                                      label: _ctx.$t("form_city") + "*",
                                      "label-for": "city"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "city",
                                          modelValue: form.value.address.city,
                                          "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                                          type: "text",
                                          onBlur: validateCity,
                                          state: form.value.address.cityState,
                                          "aria-describedby": "address.city-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "address.city-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.address.cityError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"])) : createCommentVNode("", true),
                                    foundAddress.value != "" && showFullAddress.value == false ? (openBlock(), createBlock(_component_b_form_group, {
                                      key: 4,
                                      class: "account-inputs",
                                      id: "add-group",
                                      label: " ",
                                      "label-for": "add"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { id: "add" }, toDisplayString(foundAddress.value), 1)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    foundAddresses.value.length > 0 && showFullAddress.value == false ? (openBlock(), createBlock(_component_b_form_group, {
                                      key: 5,
                                      class: "account-inputs",
                                      id: "addm-group",
                                      label: " ",
                                      "label-for": "addm"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { id: "addm" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(foundAddresses.value, (item, index) => {
                                            return openBlock(), createBlock(_component_b_form_radio, {
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
                                    showManual.value ? (openBlock(), createBlock(_component_b_form_checkbox, {
                                      key: 6,
                                      id: "manual",
                                      modelValue: showFullAddress.value,
                                      "onUpdate:modelValue": ($event) => showFullAddress.value = $event,
                                      name: "manual",
                                      class: "custom-control custom-checkbox",
                                      "input-class": "custom-control-input"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("form_fillout_address_manual")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                    createVNode(_component_b_form_group, {
                                      class: "account-inputs",
                                      id: "telephone-group",
                                      label: _ctx.$t("form_phone") + "*",
                                      "label-for": "telephone"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "telephone",
                                          modelValue: form.value.address.telephone,
                                          "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                                          type: "text",
                                          onBlur: validatePhone,
                                          state: form.value.address.telephoneState,
                                          "aria-describedby": "address.telephone-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "address.telephone-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"]),
                                    createVNode(_component_b_form_checkbox, {
                                      id: "checkbox-2",
                                      name: "checkbox-2",
                                      "label-for": "checkbox2",
                                      modelValue: form.value.address.default_billing,
                                      "onUpdate:modelValue": ($event) => form.value.address.default_billing = $event,
                                      class: "custom-control custom-checkbox",
                                      "input-class": "custom-control-input"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("form_address_also_invoice_address")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_b_form_checkbox, {
                                      id: "checkbox-3",
                                      name: "checkbox-3",
                                      "label-for": "checkbox3",
                                      modelValue: form.value.is_subscribed,
                                      "onUpdate:modelValue": ($event) => form.value.is_subscribed = $event,
                                      class: "custom-control custom-checkbox",
                                      "input-class": "custom-control-input"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("form_newsletter_subscription")), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "btn-wrap text-center" }, [
                                  createVNode(_component_b_button, {
                                    type: "submit",
                                    variant: "info",
                                    class: "text-white form-submit-btn"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("create_my_account")), 1)
                                    ]),
                                    _: 1
                                  })
                                ])
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
                  if (thanksActive.value) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !thanksActive.value ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("h1", null, toDisplayString(_ctx.$t("create_new_account")), 1),
                      createVNode(_component_b_form, {
                        class: "checkout-form",
                        onSubmit: withModifiers(formSubmit, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", null, toDisplayString(_ctx.$t("personal_information")), 1),
                          createVNode(_component_b_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_b_col, { md: "6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_b_form_group, {
                                    class: "account-inputs",
                                    id: "email-group",
                                    label: _ctx.$t("form_email") + "*",
                                    "label-for": "email"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "email",
                                        modelValue: form.value.email,
                                        "onUpdate:modelValue": ($event) => form.value.email = $event,
                                        type: "text",
                                        state: form.value.emailState,
                                        "aria-describedby": "email-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "email-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.emailError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  createVNode(_component_b_form_group, {
                                    class: "account-inputs",
                                    id: "password-group",
                                    label: _ctx.$t("form_password") + "*",
                                    "label-for": "password"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "password",
                                        modelValue: form.value.password,
                                        "onUpdate:modelValue": ($event) => form.value.password = $event,
                                        type: "password",
                                        state: form.value.passwordState,
                                        "aria-describedby": "password-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      form.value.password && isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                                        key: 0,
                                        password: form.value.password
                                      }, null, 8, ["password"])) : createCommentVNode("", true),
                                      createVNode(_component_b_form_invalid_feedback, { id: "password-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.passwordError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  createVNode(_component_b_form_group, {
                                    class: "account-inputs",
                                    id: "password_confirm-group",
                                    label: _ctx.$t("form_password_confirmation") + "*",
                                    "label-for": "password_confirm"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "password_confirm",
                                        modelValue: form.value.password_confirm,
                                        "onUpdate:modelValue": ($event) => form.value.password_confirm = $event,
                                        type: "password",
                                        state: form.value.password_confirmState,
                                        "aria-describedby": "password_confirm-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "password_confirm-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.password_confirmError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  createVNode(_component_b_form_checkbox, {
                                    id: "checkbox-1",
                                    class: "custom-control custom-checkbox",
                                    "input-class": "custom-control-input",
                                    modelValue: isCompany.value,
                                    "onUpdate:modelValue": ($event) => isCompany.value = $event,
                                    name: "checkbox-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  isCompany.value ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "short-form"
                                  }, [
                                    createVNode(_component_b_form_group, {
                                      class: "account-inputs",
                                      id: "company-group",
                                      label: _ctx.$t("form_company_name") + "*",
                                      "label-for": "company"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "company",
                                          modelValue: form.value.company,
                                          "onUpdate:modelValue": ($event) => form.value.company = $event,
                                          type: "text",
                                          onBlur: validateCompany,
                                          state: form.value.companyState,
                                          "aria-describedby": "company-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "company-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.companyError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"]),
                                    createVNode(_component_b_form_group, {
                                      class: "account-inputs",
                                      id: "coc_number-group",
                                      label: _ctx.$t("form_coc_number") + "*",
                                      "label-for": "coc_number"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "coc_number",
                                          modelValue: form.value.coc_number,
                                          "onUpdate:modelValue": ($event) => form.value.coc_number = $event,
                                          type: "text",
                                          onBlur: _ctx.validateCOCNumber,
                                          state: form.value.coc_numberState,
                                          "aria-describedby": "coc_number-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "coc_number-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.coc_numberError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"]),
                                    createVNode(_component_b_form_group, {
                                      class: "account-inputs",
                                      id: "taxvat-group",
                                      label: _ctx.$t("form_vat_number"),
                                      "label-for": "taxvat"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_input, {
                                          id: "taxvat",
                                          modelValue: form.value.taxvat,
                                          "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                                          type: "text",
                                          state: form.value.taxvatState,
                                          "aria-describedby": "taxvat-feedback"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                        createVNode(_component_b_form_invalid_feedback, { id: "taxvat-feedback" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(form.value.taxvatError), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["label"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_col, { md: "6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_b_form_group, {
                                    class: "account-inputs",
                                    id: "first-name-group",
                                    label: _ctx.$t("form_first_name") + "*",
                                    "label-for": "first_name"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "first_name",
                                        modelValue: form.value.firstname,
                                        "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                                        type: "text",
                                        onBlur: validateFirstname,
                                        state: form.value.firstnameState,
                                        "aria-describedby": "firstname-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "firstname-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.firstnameError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  createVNode(_component_b_form_group, {
                                    class: "account-inputs",
                                    id: "last-name-group",
                                    label: _ctx.$t("form_last_name") + "*",
                                    "label-for": "last_name"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "last_name",
                                        modelValue: form.value.lastname,
                                        "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                                        type: "text",
                                        onBlur: validateLastname,
                                        state: form.value.lastnameState,
                                        "aria-describedby": "lastname-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "lastname-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.lastnameError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  createVNode(_component_b_form_group, {
                                    class: "account-inputs",
                                    id: "country-group",
                                    label: _ctx.$t("form_country") + "*",
                                    "label-for": "country"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_select, {
                                        id: "country",
                                        modelValue: form.value.address.country_code,
                                        "onUpdate:modelValue": ($event) => form.value.address.country_code = $event,
                                        options: countries.value,
                                        class: "select"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  !showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                    key: 0,
                                    class: "account-inputs",
                                    id: "postcode-group",
                                    label: _ctx.$t("form_postal_code") + "*",
                                    "label-for": "postcode"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "postcode",
                                        modelValue: form.value.address.postcode,
                                        "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                        type: "text",
                                        state: form.value.address.postcodeState,
                                        "aria-describedby": "address.postcode-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "address.postcode-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"])) : createCommentVNode("", true),
                                  showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                    key: 1,
                                    class: "account-inputs",
                                    id: "street-group",
                                    label: _ctx.$t("form_street") + "*",
                                    "label-for": "street"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "street",
                                        modelValue: form.value.address.streetDisplay,
                                        "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                                        type: "text",
                                        onBlur: validateStreet,
                                        state: form.value.address.streetDisplayState,
                                        "aria-describedby": "address.streetDisplay-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "address.streetDisplay-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"])) : createCommentVNode("", true),
                                  createVNode(_component_b_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_col, {
                                        sm: "6",
                                        class: "first"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_group, {
                                            class: "account-inputs",
                                            id: "house_number-group",
                                            label: _ctx.$t("form_house_number") + "*",
                                            "label-for": "house_number"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_b_form_input, {
                                                id: "house_number",
                                                modelValue: form.value.address.house_number,
                                                "onUpdate:modelValue": ($event) => form.value.address.house_number = $event,
                                                type: "text",
                                                onBlur: validateHouseNumber,
                                                state: form.value.address.house_numberState,
                                                "aria-describedby": "address.house_number-feedback"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                              createVNode(_component_b_form_invalid_feedback, { id: "address.house_number-feedback" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(form.value.address.house_numberError), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["label"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_b_col, {
                                        sm: "6",
                                        class: "third"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_form_group, {
                                            class: "account-inputs",
                                            id: "addition-group",
                                            label: _ctx.$t("form_addition"),
                                            "label-for": "addition"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_b_form_input, {
                                                id: "addition",
                                                modelValue: form.value.address.addition,
                                                "onUpdate:modelValue": ($event) => form.value.address.addition = $event,
                                                type: "text"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }, 8, ["label"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                    key: 2,
                                    class: "account-inputs",
                                    id: "postcode-group1",
                                    label: _ctx.$t("form_postal_code") + "*",
                                    "label-for": "postcode1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "postcode1",
                                        modelValue: form.value.address.postcode,
                                        "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                        type: "text",
                                        onBlur: validatePostcode,
                                        state: form.value.address.postcodeState,
                                        "aria-describedby": "address.postcode1-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "address.postcode1-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"])) : createCommentVNode("", true),
                                  showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                    key: 3,
                                    class: "account-inputs",
                                    id: "city-group",
                                    label: _ctx.$t("form_city") + "*",
                                    "label-for": "city"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "city",
                                        modelValue: form.value.address.city,
                                        "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                                        type: "text",
                                        onBlur: validateCity,
                                        state: form.value.address.cityState,
                                        "aria-describedby": "address.city-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "address.city-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.address.cityError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"])) : createCommentVNode("", true),
                                  foundAddress.value != "" && showFullAddress.value == false ? (openBlock(), createBlock(_component_b_form_group, {
                                    key: 4,
                                    class: "account-inputs",
                                    id: "add-group",
                                    label: " ",
                                    "label-for": "add"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { id: "add" }, toDisplayString(foundAddress.value), 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  foundAddresses.value.length > 0 && showFullAddress.value == false ? (openBlock(), createBlock(_component_b_form_group, {
                                    key: 5,
                                    class: "account-inputs",
                                    id: "addm-group",
                                    label: " ",
                                    "label-for": "addm"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { id: "addm" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(foundAddresses.value, (item, index) => {
                                          return openBlock(), createBlock(_component_b_form_radio, {
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
                                  showManual.value ? (openBlock(), createBlock(_component_b_form_checkbox, {
                                    key: 6,
                                    id: "manual",
                                    modelValue: showFullAddress.value,
                                    "onUpdate:modelValue": ($event) => showFullAddress.value = $event,
                                    name: "manual",
                                    class: "custom-control custom-checkbox",
                                    "input-class": "custom-control-input"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("form_fillout_address_manual")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                  createVNode(_component_b_form_group, {
                                    class: "account-inputs",
                                    id: "telephone-group",
                                    label: _ctx.$t("form_phone") + "*",
                                    "label-for": "telephone"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "telephone",
                                        modelValue: form.value.address.telephone,
                                        "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                                        type: "text",
                                        onBlur: validatePhone,
                                        state: form.value.address.telephoneState,
                                        "aria-describedby": "address.telephone-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "address.telephone-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  createVNode(_component_b_form_checkbox, {
                                    id: "checkbox-2",
                                    name: "checkbox-2",
                                    "label-for": "checkbox2",
                                    modelValue: form.value.address.default_billing,
                                    "onUpdate:modelValue": ($event) => form.value.address.default_billing = $event,
                                    class: "custom-control custom-checkbox",
                                    "input-class": "custom-control-input"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("form_address_also_invoice_address")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_b_form_checkbox, {
                                    id: "checkbox-3",
                                    name: "checkbox-3",
                                    "label-for": "checkbox3",
                                    modelValue: form.value.is_subscribed,
                                    "onUpdate:modelValue": ($event) => form.value.is_subscribed = $event,
                                    class: "custom-control custom-checkbox",
                                    "input-class": "custom-control-input"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("form_newsletter_subscription")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "btn-wrap text-center" }, [
                                createVNode(_component_b_button, {
                                  type: "submit",
                                  variant: "info",
                                  class: "text-white form-submit-btn"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("create_my_account")), 1)
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    thanksActive.value ? (openBlock(), createBlock(unref(_sfc_main$3), { key: 1 })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$2)),
              createVNode(_component_BContainer, { class: "checkout-account" }, {
                default: withCtx(() => [
                  !thanksActive.value ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("h1", null, toDisplayString(_ctx.$t("create_new_account")), 1),
                    createVNode(_component_b_form, {
                      class: "checkout-form",
                      onSubmit: withModifiers(formSubmit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", null, toDisplayString(_ctx.$t("personal_information")), 1),
                        createVNode(_component_b_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_b_col, { md: "6" }, {
                              default: withCtx(() => [
                                createVNode(_component_b_form_group, {
                                  class: "account-inputs",
                                  id: "email-group",
                                  label: _ctx.$t("form_email") + "*",
                                  "label-for": "email"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "email",
                                      modelValue: form.value.email,
                                      "onUpdate:modelValue": ($event) => form.value.email = $event,
                                      type: "text",
                                      state: form.value.emailState,
                                      "aria-describedby": "email-feedback"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                    createVNode(_component_b_form_invalid_feedback, { id: "email-feedback" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(form.value.emailError), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["label"]),
                                createVNode(_component_b_form_group, {
                                  class: "account-inputs",
                                  id: "password-group",
                                  label: _ctx.$t("form_password") + "*",
                                  "label-for": "password"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "password",
                                      modelValue: form.value.password,
                                      "onUpdate:modelValue": ($event) => form.value.password = $event,
                                      type: "password",
                                      state: form.value.passwordState,
                                      "aria-describedby": "password-feedback"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                    form.value.password && isClient.value ? (openBlock(), createBlock(unref(PasswordMeter), {
                                      key: 0,
                                      password: form.value.password
                                    }, null, 8, ["password"])) : createCommentVNode("", true),
                                    createVNode(_component_b_form_invalid_feedback, { id: "password-feedback" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(form.value.passwordError), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["label"]),
                                createVNode(_component_b_form_group, {
                                  class: "account-inputs",
                                  id: "password_confirm-group",
                                  label: _ctx.$t("form_password_confirmation") + "*",
                                  "label-for": "password_confirm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "password_confirm",
                                      modelValue: form.value.password_confirm,
                                      "onUpdate:modelValue": ($event) => form.value.password_confirm = $event,
                                      type: "password",
                                      state: form.value.password_confirmState,
                                      "aria-describedby": "password_confirm-feedback"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                    createVNode(_component_b_form_invalid_feedback, { id: "password_confirm-feedback" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(form.value.password_confirmError), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["label"]),
                                createVNode(_component_b_form_checkbox, {
                                  id: "checkbox-1",
                                  class: "custom-control custom-checkbox",
                                  "input-class": "custom-control-input",
                                  modelValue: isCompany.value,
                                  "onUpdate:modelValue": ($event) => isCompany.value = $event,
                                  name: "checkbox-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                isCompany.value ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "short-form"
                                }, [
                                  createVNode(_component_b_form_group, {
                                    class: "account-inputs",
                                    id: "company-group",
                                    label: _ctx.$t("form_company_name") + "*",
                                    "label-for": "company"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "company",
                                        modelValue: form.value.company,
                                        "onUpdate:modelValue": ($event) => form.value.company = $event,
                                        type: "text",
                                        onBlur: validateCompany,
                                        state: form.value.companyState,
                                        "aria-describedby": "company-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "company-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.companyError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  createVNode(_component_b_form_group, {
                                    class: "account-inputs",
                                    id: "coc_number-group",
                                    label: _ctx.$t("form_coc_number") + "*",
                                    "label-for": "coc_number"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "coc_number",
                                        modelValue: form.value.coc_number,
                                        "onUpdate:modelValue": ($event) => form.value.coc_number = $event,
                                        type: "text",
                                        onBlur: _ctx.validateCOCNumber,
                                        state: form.value.coc_numberState,
                                        "aria-describedby": "coc_number-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "coc_number-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.coc_numberError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  createVNode(_component_b_form_group, {
                                    class: "account-inputs",
                                    id: "taxvat-group",
                                    label: _ctx.$t("form_vat_number"),
                                    "label-for": "taxvat"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_form_input, {
                                        id: "taxvat",
                                        modelValue: form.value.taxvat,
                                        "onUpdate:modelValue": ($event) => form.value.taxvat = $event,
                                        type: "text",
                                        state: form.value.taxvatState,
                                        "aria-describedby": "taxvat-feedback"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                      createVNode(_component_b_form_invalid_feedback, { id: "taxvat-feedback" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(form.value.taxvatError), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["label"])
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_col, { md: "6" }, {
                              default: withCtx(() => [
                                createVNode(_component_b_form_group, {
                                  class: "account-inputs",
                                  id: "first-name-group",
                                  label: _ctx.$t("form_first_name") + "*",
                                  "label-for": "first_name"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "first_name",
                                      modelValue: form.value.firstname,
                                      "onUpdate:modelValue": ($event) => form.value.firstname = $event,
                                      type: "text",
                                      onBlur: validateFirstname,
                                      state: form.value.firstnameState,
                                      "aria-describedby": "firstname-feedback"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                    createVNode(_component_b_form_invalid_feedback, { id: "firstname-feedback" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(form.value.firstnameError), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["label"]),
                                createVNode(_component_b_form_group, {
                                  class: "account-inputs",
                                  id: "last-name-group",
                                  label: _ctx.$t("form_last_name") + "*",
                                  "label-for": "last_name"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "last_name",
                                      modelValue: form.value.lastname,
                                      "onUpdate:modelValue": ($event) => form.value.lastname = $event,
                                      type: "text",
                                      onBlur: validateLastname,
                                      state: form.value.lastnameState,
                                      "aria-describedby": "lastname-feedback"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                    createVNode(_component_b_form_invalid_feedback, { id: "lastname-feedback" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(form.value.lastnameError), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["label"]),
                                createVNode(_component_b_form_group, {
                                  class: "account-inputs",
                                  id: "country-group",
                                  label: _ctx.$t("form_country") + "*",
                                  "label-for": "country"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_select, {
                                      id: "country",
                                      modelValue: form.value.address.country_code,
                                      "onUpdate:modelValue": ($event) => form.value.address.country_code = $event,
                                      options: countries.value,
                                      class: "select"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ]),
                                  _: 1
                                }, 8, ["label"]),
                                !showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                  key: 0,
                                  class: "account-inputs",
                                  id: "postcode-group",
                                  label: _ctx.$t("form_postal_code") + "*",
                                  "label-for": "postcode"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "postcode",
                                      modelValue: form.value.address.postcode,
                                      "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                      type: "text",
                                      state: form.value.address.postcodeState,
                                      "aria-describedby": "address.postcode-feedback"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                    createVNode(_component_b_form_invalid_feedback, { id: "address.postcode-feedback" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : createCommentVNode("", true),
                                showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                  key: 1,
                                  class: "account-inputs",
                                  id: "street-group",
                                  label: _ctx.$t("form_street") + "*",
                                  "label-for": "street"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "street",
                                      modelValue: form.value.address.streetDisplay,
                                      "onUpdate:modelValue": ($event) => form.value.address.streetDisplay = $event,
                                      type: "text",
                                      onBlur: validateStreet,
                                      state: form.value.address.streetDisplayState,
                                      "aria-describedby": "address.streetDisplay-feedback"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                    createVNode(_component_b_form_invalid_feedback, { id: "address.streetDisplay-feedback" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(form.value.address.streetDisplayError), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : createCommentVNode("", true),
                                createVNode(_component_b_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_col, {
                                      sm: "6",
                                      class: "first"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "house_number-group",
                                          label: _ctx.$t("form_house_number") + "*",
                                          "label-for": "house_number"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "house_number",
                                              modelValue: form.value.address.house_number,
                                              "onUpdate:modelValue": ($event) => form.value.address.house_number = $event,
                                              type: "text",
                                              onBlur: validateHouseNumber,
                                              state: form.value.address.house_numberState,
                                              "aria-describedby": "address.house_number-feedback"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                            createVNode(_component_b_form_invalid_feedback, { id: "address.house_number-feedback" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(form.value.address.house_numberError), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["label"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_b_col, {
                                      sm: "6",
                                      class: "third"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_form_group, {
                                          class: "account-inputs",
                                          id: "addition-group",
                                          label: _ctx.$t("form_addition"),
                                          "label-for": "addition"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_form_input, {
                                              id: "addition",
                                              modelValue: form.value.address.addition,
                                              "onUpdate:modelValue": ($event) => form.value.address.addition = $event,
                                              type: "text"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }, 8, ["label"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                  key: 2,
                                  class: "account-inputs",
                                  id: "postcode-group1",
                                  label: _ctx.$t("form_postal_code") + "*",
                                  "label-for": "postcode1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "postcode1",
                                      modelValue: form.value.address.postcode,
                                      "onUpdate:modelValue": ($event) => form.value.address.postcode = $event,
                                      type: "text",
                                      onBlur: validatePostcode,
                                      state: form.value.address.postcodeState,
                                      "aria-describedby": "address.postcode1-feedback"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                    createVNode(_component_b_form_invalid_feedback, { id: "address.postcode1-feedback" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(form.value.address.postcodeError), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : createCommentVNode("", true),
                                showFullAddress.value ? (openBlock(), createBlock(_component_b_form_group, {
                                  key: 3,
                                  class: "account-inputs",
                                  id: "city-group",
                                  label: _ctx.$t("form_city") + "*",
                                  "label-for": "city"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "city",
                                      modelValue: form.value.address.city,
                                      "onUpdate:modelValue": ($event) => form.value.address.city = $event,
                                      type: "text",
                                      onBlur: validateCity,
                                      state: form.value.address.cityState,
                                      "aria-describedby": "address.city-feedback"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                    createVNode(_component_b_form_invalid_feedback, { id: "address.city-feedback" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(form.value.address.cityError), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["label"])) : createCommentVNode("", true),
                                foundAddress.value != "" && showFullAddress.value == false ? (openBlock(), createBlock(_component_b_form_group, {
                                  key: 4,
                                  class: "account-inputs",
                                  id: "add-group",
                                  label: " ",
                                  "label-for": "add"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { id: "add" }, toDisplayString(foundAddress.value), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                foundAddresses.value.length > 0 && showFullAddress.value == false ? (openBlock(), createBlock(_component_b_form_group, {
                                  key: 5,
                                  class: "account-inputs",
                                  id: "addm-group",
                                  label: " ",
                                  "label-for": "addm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { id: "addm" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(foundAddresses.value, (item, index) => {
                                        return openBlock(), createBlock(_component_b_form_radio, {
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
                                showManual.value ? (openBlock(), createBlock(_component_b_form_checkbox, {
                                  key: 6,
                                  id: "manual",
                                  modelValue: showFullAddress.value,
                                  "onUpdate:modelValue": ($event) => showFullAddress.value = $event,
                                  name: "manual",
                                  class: "custom-control custom-checkbox",
                                  "input-class": "custom-control-input"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("form_fillout_address_manual")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                createVNode(_component_b_form_group, {
                                  class: "account-inputs",
                                  id: "telephone-group",
                                  label: _ctx.$t("form_phone") + "*",
                                  "label-for": "telephone"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "telephone",
                                      modelValue: form.value.address.telephone,
                                      "onUpdate:modelValue": ($event) => form.value.address.telephone = $event,
                                      type: "text",
                                      onBlur: validatePhone,
                                      state: form.value.address.telephoneState,
                                      "aria-describedby": "address.telephone-feedback"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                                    createVNode(_component_b_form_invalid_feedback, { id: "address.telephone-feedback" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(form.value.address.telephoneError), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["label"]),
                                createVNode(_component_b_form_checkbox, {
                                  id: "checkbox-2",
                                  name: "checkbox-2",
                                  "label-for": "checkbox2",
                                  modelValue: form.value.address.default_billing,
                                  "onUpdate:modelValue": ($event) => form.value.address.default_billing = $event,
                                  class: "custom-control custom-checkbox",
                                  "input-class": "custom-control-input"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("form_address_also_invoice_address")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_b_form_checkbox, {
                                  id: "checkbox-3",
                                  name: "checkbox-3",
                                  "label-for": "checkbox3",
                                  modelValue: form.value.is_subscribed,
                                  "onUpdate:modelValue": ($event) => form.value.is_subscribed = $event,
                                  class: "custom-control custom-checkbox",
                                  "input-class": "custom-control-input"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("form_newsletter_subscription")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "btn-wrap text-center" }, [
                              createVNode(_component_b_button, {
                                type: "submit",
                                variant: "info",
                                class: "text-white form-submit-btn"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("create_my_account")), 1)
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true),
                  thanksActive.value ? (openBlock(), createBlock(unref(_sfc_main$3), { key: 1 })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/authentication/sign-up/CreateAccount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CreateAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb7bb1aa"]]);
export {
  CreateAccount as default
};
//# sourceMappingURL=CreateAccount-BX24fsK_.js.map
