import { BButton } from "bootstrap-vue-next/components/BButton";
import { BFormSelect, BFormSelectOption } from "bootstrap-vue-next/components/BFormSelect";
import { BFormGroup } from "bootstrap-vue-next/components/BFormGroup";
import { BFormRadio } from "bootstrap-vue-next/components/BFormRadio";
import { BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, reactive, computed, watch, onMounted, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext, resolveComponent, unref, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AppLayout-CdCGV8yT.js";
import { _ as _sfc_main$3 } from "./Breadcrumbs-DwhHUqbs.js";
import { BFormInvalidFeedback } from "bootstrap-vue-next/components/BForm";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BFormCheckbox } from "bootstrap-vue-next/components/BFormCheckbox";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { C as CONFIG_JSON } from "../entry-server.js";
import { x as validateVatNumber, y as validatePostcode, w as checkEmailExist } from "./user-B9wxceAo.js";
import { useHead } from "@unhead/vue";
import { useGtm } from "@gtm-support/vue-gtm";
import { useRouter } from "vue-router";
import { u as useCartInfo } from "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BLink";
import "bootstrap-vue-next/components/BImg";
import "./products-Dsi6ZmTY.js";
import "axios";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "bootstrap-vue-next/components/BCollapse";
import "bootstrap-vue-next/components/BNav";
import "vue-cookies";
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
import "@vue/shared";
import "lodash-unified";
import "mobile-device-detect";
const _sfc_main$1 = {
  __name: "LoggedInCheckoutDetails",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { t } = useI18n();
    const newAddress = ref(false);
    const newInvoiceAddress = ref(false);
    ref(false);
    ref(false);
    const isValidVatNumber = ref(false);
    const isValidInvoiceVatNumber = ref(false);
    const showFullAddress = ref(false);
    const showFullInvoiceAddress = ref(false);
    const showVatMessage = ref("");
    ref(false);
    ref(null);
    const typeTimer = ref(null);
    const foundAddresses = ref([]);
    const foundAddress = ref("");
    const foundInvoiceAddresses = ref([]);
    const foundInvoiceAddress = ref("");
    const emailExists = ref(false);
    const selectedAddress = ref(null);
    const selectedInvoiceAddress = ref(null);
    const isSaveBtnDisable = ref(false);
    const isInvoiceSaveBtnDisable = ref(false);
    const emailReg = ref(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/);
    const form = reactive({
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
      // coc_number: "",
      // coc_numberState: null,
      // coc_numberError: "",
      // coc_numberTimer: null,
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
      invoice: {
        isCompany: true,
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
        // coc_number: "",
        // coc_numberState: null,
        // coc_numberError: "",
        // coc_numberTimer: null,
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
        }
      },
      checkbox2: false,
      manual: false
    });
    const shippingAddress = computed(() => store.getters["cart/getShippingAddress"]);
    const countries = computed(() => store.getters["user/getCountries"]);
    const country = computed(() => form.address.country_code);
    const selectedShippingAddressId = computed(() => {
      const sa = store.getters["cart/getShippingAddress"];
      return sa ? sa.id : 0;
    });
    const selectedBillingAddressId = computed(() => {
      const sa = store.getters["cart/getBillingAddress"];
      return sa ? sa.id : 0;
    });
    const invoiceCountry = computed(() => form.invoice.address.country_code);
    const postcodeHouseNumber = computed(() => `${form.address.postcode}|${form.address.house_number}`);
    const invoicePostcodeHouseNumber = computed(() => `${form.invoice.address.postcode}|${form.invoice.address.house_number}`);
    const vatNumber = computed(() => form.taxvat);
    const invoiceVatNumber = computed(() => form.invoice.taxvat);
    const addresses = computed(() => {
      const user2 = store.getters["user/getCurrentUser"];
      if (user2.addresses.length == 0) {
        newAddress.value = true;
      }
      return user2.addresses;
    });
    const user = computed(() => store.getters["user/getCurrentUser"]);
    const validateEmail = async () => {
      if (form.email.trim().length === 0) {
        form.emailState = false;
        form.emailError = t("email_is_required_field");
        return false;
      }
      if (!emailReg.value.test(form.email)) {
        form.emailState = false;
        form.emailError = t("email_is_invalid_field");
        return false;
      }
      if (!await checkEmailExist(form.email)) {
        emailExists.value = true;
      } else {
        emailExists.value = false;
      }
      form.emailState = true;
      store.dispatch("cart/addCartEmail", {
        email: form.email,
        store
      });
      return true;
    };
    const validateVAT = async () => {
      if (form.taxvat != "") {
        if (form.taxvat.substring(0, 2).toUpperCase() === form.address.country_code) {
          const retval = await validateVatNumber(form.taxvat);
          if (retval.is_valid) {
            isValidVatNumber.value = true;
            form.taxvatState = true;
          } else {
            isValidVatNumber.value = false;
            form.taxvatState = false;
            form.taxvatError = t("taxvat_invalid");
            showVatMessage.value = t("taxvat_invalid");
          }
        } else {
          isValidVatNumber.value = false;
          form.taxvatState = false;
          form.taxvatError = t("taxvat_wrong_country");
        }
      } else {
        form.taxvatState = null;
        form.taxvatError = "";
      }
    };
    const validateAddress = async () => {
      let isOk = true;
      if (form.company.trim() === "" || form.firstname.trim() === "" || form.lastname.trim() === "" || form.address.country_code.trim() === "" || form.address.postcode.trim() === "" || form.address.streetDisplay.trim() === "" || form.address.house_number.trim() === "" || form.address.city.trim() === "" || form.address.telephone.trim() === "") {
        isOk = false;
      }
      if (isOk) {
        const address = {
          firstname: form.firstname,
          lastname: form.lastname,
          postcode: form.address.postcode,
          city: form.address.city,
          telephone: form.address.telephone,
          street: `${form.address.streetDisplay} ${form.address.house_number}${form.address.addition}`,
          country_code: form.address.country_code,
          company: form.company,
          vat_id: form.taxvat
        };
        await store.dispatch("cart/addShippingAddress", {
          address,
          reloadCart: false,
          store
        });
        if (form.address.default_billing) {
          await store.dispatch("cart/addBillingAddress", {
            address,
            reloadCart: true,
            store
          });
        }
      }
    };
    const validateInvoiceAddress = async () => {
      let isOk = true;
      if (form.invoice.company.trim() === "" || form.invoice.taxvat.trim() === "") {
        isOk = false;
      }
      if (form.invoice.firstname.trim() === "" || form.invoice.lastname.trim() === "" || form.invoice.address.country_code.trim() === "" || form.invoice.address.postcode.trim() === "" || form.invoice.address.streetDisplay.trim() === "" || form.invoice.address.house_number.trim() === "" || form.invoice.address.city.trim() === "" || form.invoice.address.telephone.trim() === "") {
        isOk = false;
      }
      if (isOk) {
        const address = {
          company: form.invoice.company,
          firstname: form.invoice.firstname,
          lastname: form.invoice.lastname,
          postcode: form.invoice.address.postcode,
          city: form.invoice.address.city,
          telephone: form.invoice.address.telephone,
          street: `${form.invoice.address.streetDisplay} ${form.invoice.address.house_number}${form.invoice.address.addition}`,
          country_code: form.invoice.address.country_code
        };
        address.company = form.company;
        address.vat_id = form.taxvat;
        await store.dispatch("cart/addBillingAddress", {
          address,
          store
        });
      }
    };
    const validateCompany = () => {
      if (form.company.trim() === "") {
        form.companyState = false;
        form.companyError = t("company_name_required");
      } else {
        form.companyState = true;
      }
    };
    const validateFirstname = () => {
      if (form.firstname.trim() === "") {
        form.firstnameState = false;
        form.firstnameError = t("firstname_required");
      } else {
        form.firstnameState = true;
      }
    };
    const validateLastname = () => {
      if (form.lastname.trim() === "") {
        form.lastnameState = false;
        form.lastnameError = t("lastname_required");
      } else {
        form.lastnameState = true;
      }
    };
    const validateStreet = () => {
      if (form.address.streetDisplay.trim() === "") {
        form.address.streetDisplayState = false;
        form.address.streetDisplayError = t("street_required");
      } else {
        form.address.streetDisplayState = true;
      }
    };
    const validateHouseNumber = () => {
      if (form.address.house_number.trim() === "") {
        form.address.house_numberState = false;
        form.address.house_numberError = t("house_number_required");
      } else {
        form.address.house_numberState = true;
      }
    };
    const validateCity = () => {
      if (form.address.city.trim() === "") {
        form.address.cityState = false;
        form.address.cityError = t("city_required");
      } else {
        form.address.cityState = true;
      }
    };
    const validatePhone = () => {
      if (form.address.telephone.trim() === "") {
        form.address.telephoneState = false;
        form.address.telephoneError = t("phone_required");
      } else {
        form.address.telephoneState = true;
      }
    };
    const validatePostCode = () => {
      if (form.address.postcode.trim() === "") {
        form.address.postcodeState = false;
        form.address.postcodeError = t("postcode_required");
      } else {
        form.address.postcodeState = true;
      }
    };
    const validateInvoiceVAT = async () => {
      if (form.invoice.taxvat != "") {
        if (form.invoice.taxvat.substring(0, 2).toUpperCase() === form.invoice.address.country_code) {
          const retval = await validateVatNumber(form.invoice.taxvat);
          if (retval.is_valid) {
            isValidInvoiceVatNumber.value = true;
            form.invoice.taxvatState = true;
          } else {
            isValidInvoiceVatNumber.value = false;
            form.invoice.taxvatState = false;
            form.invoice.taxvatError = t("taxvat_invalid");
          }
        } else {
          isValidInvoiceVatNumber.value = false;
          form.invoice.taxvatState = false;
          form.invoice.taxvatError = t("taxvat_wrong_country");
        }
      } else {
        form.invoice.taxvatState = null;
        form.invoice.taxvatError = "";
      }
    };
    const validateInvoiceCompany = () => {
      if (form.invoice.company.trim() === "") {
        form.invoice.companyState = false;
        form.invoice.companyError = t("company_name_required");
      } else {
        form.invoice.companyState = true;
      }
    };
    const validateInvoiceFirstname = () => {
      if (form.invoice.firstname.trim() === "") {
        form.invoice.firstnameState = false;
        form.invoice.firstnameError = t("firstname_required");
      } else {
        form.invoice.firstnameState = true;
      }
    };
    const validateInvoiceLastname = () => {
      if (form.invoice.lastname.trim() === "") {
        form.invoice.lastnameState = false;
        form.invoice.lastnameError = t("lastname_required");
      } else {
        form.invoice.lastnameState = true;
      }
    };
    const validateInvoiceStreet = () => {
      if (form.invoice.address.streetDisplay.trim() === "") {
        form.invoice.address.streetDisplayState = false;
        form.invoice.address.streetDisplayError = t("street_required");
      } else {
        form.invoice.address.streetDisplayState = true;
      }
    };
    const validateInvoiceHouseNumber = () => {
      if (form.invoice.address.house_number.trim() === "") {
        form.invoice.address.house_numberState = false;
        form.invoice.address.house_numberError = t("house_number_required");
      } else {
        form.invoice.address.house_numberState = true;
      }
    };
    const validateInvoiceCity = () => {
      if (form.invoice.address.city.trim() === "") {
        form.invoice.address.cityState = false;
        form.invoice.address.cityError = t("city_required");
      } else {
        form.invoice.address.cityState = true;
      }
    };
    const validateInvoicePhone = () => {
      if (form.invoice.address.telephone.trim() === "") {
        form.invoice.address.telephoneState = false;
        form.invoice.address.telephoneError = t("phone_required");
      } else {
        form.invoice.address.telephoneState = true;
      }
    };
    const validateInvoicePostcode = () => {
      if (form.invoice.address.postcode.trim() === "") {
        form.invoice.address.postcodeState = false;
        form.invoice.address.postcodeError = t("postcode_required");
      } else {
        form.invoice.address.postcodeState = true;
      }
    };
    const validatePostcodeHouseNumber = async () => {
      isSaveBtnDisable.value = true;
      if (!showFullAddress.value) {
        const list = await validatePostcode(form.address.postcode, form.address.house_number);
        if (list.length === 1) {
          const item = list[0];
          let address = `${item.street} ${item.number}`;
          form.address.streetDisplay = item.street;
          form.address.streetDisplayState = true;
          if (item.letter) {
            form.address.addition = item.letter;
            address += item.letter;
          } else {
            form.address.addition = "";
          }
          address += `, ${item.postcode} ${item.city}`;
          form.address.city = item.city;
          form.address.cityState = true;
          foundAddress.value = address;
          validatePostCode();
        } else if (list.length === 0) {
          form.address.city = "";
          form.address.cityState = false;
          form.address.streetDisplay = "";
          form.address.streetDisplayState = false;
          foundAddress.value = t("postcode_not_found");
        } else {
          foundAddresses.value = list.map((item) => {
            let address = `${item.street} ${item.number}`;
            if (item.letter) {
              address += item.letter;
            }
            address += `, ${item.postcode} ${item.city}`;
            isSaveBtnDisable.value = false;
            return { ...item, text: address };
          });
        }
      } else {
        form.address.postcodeState = form.address.postcode === "";
        form.address.postcodeError = form.address.postcode === "" ? t("postcode_required") : "";
      }
      isSaveBtnDisable.value = false;
    };
    const validateInvoicePostcodeHouseNumber = async () => {
      isInvoiceSaveBtnDisable.value = true;
      if (!showFullAddress.value) {
        const list = await validatePostcode(
          form.invoice.address.postcode,
          form.invoice.address.house_number
        );
        if (list.length === 1) {
          const item = list[0];
          let address = `${item.street} ${item.number}`;
          form.invoice.address.streetDisplay = item.street;
          form.invoice.address.streetDisplayState = true;
          if (item.letter) {
            form.invoice.address.addition = item.letter;
            address += item.letter;
          } else {
            form.invoice.address.addition = "";
          }
          address += `, ${item.postcode} ${item.city}`;
          form.invoice.address.city = item.city;
          form.invoice.address.cityState = true;
          foundInvoiceAddress.value = address;
          validateInvoicePostcode();
        } else if (list.length === 0) {
          form.invoice.address.city = "";
          form.invoice.address.cityState = false;
          form.invoice.address.streetDisplay = "";
          form.invoice.address.streetDisplayState = false;
          foundInvoiceAddress.value = t("postcode_not_found");
        } else {
          foundInvoiceAddresses.value = list.map((item) => {
            let address = `${item.street} ${item.number}`;
            if (item.letter) {
              address += item.letter;
            }
            address += `, ${item.postcode} ${item.city}`;
            isInvoiceSaveBtnDisable.value = false;
            return { ...item, text: address };
          });
        }
      } else {
        form.invoice.address.postcodeState = form.invoice.address.postcode === "";
        form.invoice.address.postcodeError = form.invoice.address.postcode === "" ? t("postcode_required") : "";
      }
      isInvoiceSaveBtnDisable.value = false;
    };
    const selectAddress = async (id) => {
      if (id === selectedShippingAddressId.value) return;
      store.commit("cart/setShippingAddressUpdatingStatus", true);
      await store.dispatch("cart/addShippingAddressById", { id, store });
      if (form.address.default_billing) {
        await store.dispatch("cart/addBillingAddressById", { id, store });
      }
      store.commit("cart/setShippingAddressUpdatingStatus", false);
    };
    watch(country, (newVal) => {
      validateVAT();
      {
        showFullAddress.value = !CONFIG_JSON.postcode_validation.countries.includes(newVal);
      }
    });
    watch(
      form.address,
      () => {
        if (form.addressTimer !== null) {
          clearTimeout(form.addressTimer);
        }
        form.addressTimer = setTimeout(() => validateAddress(), 1e3);
      }
    );
    watch(
      () => form.invoice.address,
      () => {
        if (form.invoiceAddressTimer !== null) {
          clearTimeout(form.invoiceAddressTimer);
        }
        form.invoiceAddressTimer = setTimeout(() => validateInvoiceAddress(), 1e3);
      }
    );
    watch(invoiceCountry, (newVal) => {
      validateInvoiceVAT();
      {
        showFullInvoiceAddress.value = !CONFIG_JSON.postcode_validation.countries.includes(newVal);
      }
    });
    watch(vatNumber, () => {
      {
        if (form.taxvatTimer !== null) {
          clearTimeout(form.taxvatTimer);
        }
        form.taxvatTimer = setTimeout(() => validateVAT(), 1e3);
      }
    });
    watch(invoiceVatNumber, () => {
      {
        if (form.invoice.taxvatTimer !== null) {
          clearTimeout(form.invoice.taxvatTimer);
        }
        form.invoice.taxvatTimer = setTimeout(() => validateInvoiceVAT(), 1e3);
      }
    });
    watch(postcodeHouseNumber, (newVal) => {
      if (!showFullAddress.value) {
        if (typeTimer.value !== null) {
          clearTimeout(typeTimer.value);
        }
        if (foundAddress.value !== "") {
          foundAddress.value = "";
        }
        if (foundAddresses.value.length > 0) {
          foundAddresses.value = [];
        }
        const [newPostcode, newHouseNumber] = newVal.split("|");
        if (newPostcode && newHouseNumber) {
          typeTimer.value = setTimeout(() => validatePostcodeHouseNumber(), 2e3);
        }
      }
    });
    watch(invoicePostcodeHouseNumber, (newVal) => {
      if (!showFullInvoiceAddress.value) {
        if (typeTimer.value !== null) {
          clearTimeout(typeTimer.value);
        }
        if (foundInvoiceAddress.value !== "") {
          foundInvoiceAddress.value = "";
        }
        if (foundInvoiceAddresses.value.length > 0) {
          foundInvoiceAddresses.value = [];
        }
        const [newPostcode, newHouseNumber] = newVal.split("|");
        if (newPostcode && newHouseNumber) {
          typeTimer.value = setTimeout(() => validateInvoicePostcodeHouseNumber(), 2e3);
        }
      }
    });
    watch(selectedAddress, (newVal) => {
      form.address.streetDisplay = foundAddresses.value[newVal].street;
      form.address.addition = foundAddresses.value[newVal].letter || "";
      form.address.city = foundAddresses.value[newVal].city;
      validatePostCode();
    });
    watch(selectedInvoiceAddress, (newVal) => {
      form.invoice.address.streetDisplay = foundInvoiceAddresses.value[newVal].street;
      form.invoice.address.addition = foundInvoiceAddresses.value[newVal].letter || "";
      form.invoice.address.city = foundInvoiceAddresses.value[newVal].city;
      validateInvoicePostcode();
    });
    watch(
      () => form.email,
      () => {
        if (form.emailTimer !== null) {
          clearTimeout(form.emailTimer);
        }
        form.emailTimer = setTimeout(() => validateEmail(), 1e3);
      }
    );
    onMounted(() => {
      {
        form.address.country_code = CONFIG_JSON.customers.defaultCountry;
        form.invoice.address.country_code = CONFIG_JSON.customers.defaultCountry;
      }
      if (shippingAddress.value === null && user.value && user.value.default_shipping) {
        selectAddress(user.value.default_shipping);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BFormCheckbox = BFormCheckbox;
      const _component_BFormGroup = BFormGroup;
      const _component_BFormInput = BFormInput;
      const _component_BFormInvalidFeedback = BFormInvalidFeedback;
      const _component_BFormSelect = BFormSelect;
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BFormRadio = BFormRadio;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "loggedInCheckoutDetails" }, _attrs))}><div class="group address"><span class="group-title d-block mb-5">${ssrInterpolate(_ctx.$t("shipping_address"))}</span>`);
      if (!newAddress.value) {
        _push(`<!--[-->`);
        ssrRenderList(addresses.value, (address, index) => {
          _push(`<div><div class="${ssrRenderClass([address.id == selectedShippingAddressId.value ? "selected-item" : "", "address-item border rounded p-5 m-5"])}">`);
          if (address.company != null) {
            _push(`<div>${ssrInterpolate(address.company)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div>${ssrInterpolate(address.firstname)} ${ssrInterpolate(address.lastname)}</div><div>${ssrInterpolate(address.street[0])}</div><div>${ssrInterpolate(address.city)}, ${ssrInterpolate(address.postcode)}</div><div>${ssrInterpolate(address.telephone)}</div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BFormCheckbox, {
        id: "new-address",
        name: "new-address",
        modelValue: newAddress.value,
        "onUpdate:modelValue": ($event) => newAddress.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("make_new_address"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("make_new_address")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (newAddress.value) {
        _push(`<div><div class="short-form">`);
        _push(ssrRenderComponent(_component_BFormGroup, {
          class: "account-inputs",
          id: "company-group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                placeholder: _ctx.$t("form_company_name"),
                id: "company",
                modelValue: form.company,
                "onUpdate:modelValue": ($event) => form.company = $event,
                type: "text",
                onBlur: ($event) => validateCompany(),
                state: form.companyState,
                "aria-describedby": "company-feedback"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "company-feedback" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(form.companyError)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(form.companyError), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BFormInput, {
                  placeholder: _ctx.$t("form_company_name"),
                  id: "company",
                  modelValue: form.company,
                  "onUpdate:modelValue": ($event) => form.company = $event,
                  type: "text",
                  onBlur: ($event) => validateCompany(),
                  state: form.companyState,
                  "aria-describedby": "company-feedback"
                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                createVNode(_component_BFormInvalidFeedback, { id: "company-feedback" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(form.companyError), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BFormGroup, {
          class: "account-inputs",
          id: "taxvat-group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                placeholder: _ctx.$t("form_vat_number"),
                id: "taxvat",
                modelValue: form.taxvat,
                "onUpdate:modelValue": ($event) => form.taxvat = $event,
                type: "text",
                state: form.taxvatState,
                onBlur: ($event) => validateVAT(),
                "aria-describedby": "taxvat-feedback"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BFormInvalidFeedback, {
                id: "taxvat-feedback",
                key: form.taxvatError
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(form.taxvatError)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(form.taxvatError), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BFormInput, {
                  placeholder: _ctx.$t("form_vat_number"),
                  id: "taxvat",
                  modelValue: form.taxvat,
                  "onUpdate:modelValue": ($event) => form.taxvat = $event,
                  type: "text",
                  state: form.taxvatState,
                  onBlur: ($event) => validateVAT(),
                  "aria-describedby": "taxvat-feedback"
                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "state", "onBlur"]),
                (openBlock(), createBlock(_component_BFormInvalidFeedback, {
                  id: "taxvat-feedback",
                  key: form.taxvatError
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(form.taxvatError), 1)
                  ]),
                  _: 1
                }))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_BFormGroup, {
          class: "account-inputs",
          id: "first_name-group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                placeholder: _ctx.$t("form_first_name"),
                id: "first_name",
                modelValue: form.firstname,
                "onUpdate:modelValue": ($event) => form.firstname = $event,
                type: "text",
                onBlur: ($event) => validateFirstname(),
                state: form.firstnameState,
                "aria-describedby": "firstname-feedback"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "firstname-feedback" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(form.firstnameError)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(form.firstnameError), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BFormInput, {
                  placeholder: _ctx.$t("form_first_name"),
                  id: "first_name",
                  modelValue: form.firstname,
                  "onUpdate:modelValue": ($event) => form.firstname = $event,
                  type: "text",
                  onBlur: ($event) => validateFirstname(),
                  state: form.firstnameState,
                  "aria-describedby": "firstname-feedback"
                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                createVNode(_component_BFormInvalidFeedback, { id: "firstname-feedback" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(form.firstnameError), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BFormGroup, {
          class: "account-inputs",
          id: "last_name-group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                placeholder: _ctx.$t("form_last_name"),
                id: "last_name",
                modelValue: form.lastname,
                "onUpdate:modelValue": ($event) => form.lastname = $event,
                type: "text",
                onBlur: ($event) => validateLastname(),
                state: form.lastnameState,
                "aria-describedby": "lastname-feedback"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "lastname-feedback" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(form.lastnameError)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(form.lastnameError), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BFormInput, {
                  placeholder: _ctx.$t("form_last_name"),
                  id: "last_name",
                  modelValue: form.lastname,
                  "onUpdate:modelValue": ($event) => form.lastname = $event,
                  type: "text",
                  onBlur: ($event) => validateLastname(),
                  state: form.lastnameState,
                  "aria-describedby": "lastname-feedback"
                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                createVNode(_component_BFormInvalidFeedback, { id: "lastname-feedback" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(form.lastnameError), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BFormGroup, {
          class: "account-inputs",
          id: "country-group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormSelect, {
                id: "country",
                modelValue: form.address.country_code,
                "onUpdate:modelValue": ($event) => form.address.country_code = $event,
                options: countries.value,
                class: "select"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BFormSelect, {
                  id: "country",
                  modelValue: form.address.country_code,
                  "onUpdate:modelValue": ($event) => form.address.country_code = $event,
                  options: countries.value,
                  class: "select"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (!showFullAddress.value) {
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "postcode-group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  placeholder: _ctx.$t("form_postal_code"),
                  id: "postcode",
                  modelValue: form.address.postcode,
                  "onUpdate:modelValue": ($event) => form.address.postcode = $event,
                  type: "text",
                  state: form.address.postcodeState,
                  "aria-describedby": "address.postcode-feedback"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.postcode-feedback" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(form.address.postcodeError)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(form.address.postcodeError), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BFormInput, {
                    placeholder: _ctx.$t("form_postal_code"),
                    id: "postcode",
                    modelValue: form.address.postcode,
                    "onUpdate:modelValue": ($event) => form.address.postcode = $event,
                    type: "text",
                    state: form.address.postcodeState,
                    "aria-describedby": "address.postcode-feedback"
                  }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "state"]),
                  createVNode(_component_BFormInvalidFeedback, { id: "address.postcode-feedback" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(form.address.postcodeError), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_BFormGroup, {
          style: showFullAddress.value ? null : { display: "none" },
          class: "account-inputs",
          id: "street-group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                placeholder: _ctx.$t("form_street"),
                id: "street",
                modelValue: form.address.streetDisplay,
                "onUpdate:modelValue": ($event) => form.address.streetDisplay = $event,
                type: "text",
                onBlur: ($event) => validateStreet(),
                state: form.address.streetDisplayState,
                "aria-describedby": "address.streetDisplay-feedback"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.streetDisplay-feedback" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(form.address.streetDisplayError)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(form.address.streetDisplayError), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BFormInput, {
                  placeholder: _ctx.$t("form_street"),
                  id: "street",
                  modelValue: form.address.streetDisplay,
                  "onUpdate:modelValue": ($event) => form.address.streetDisplay = $event,
                  type: "text",
                  onBlur: ($event) => validateStreet(),
                  state: form.address.streetDisplayState,
                  "aria-describedby": "address.streetDisplay-feedback"
                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                createVNode(_component_BFormInvalidFeedback, { id: "address.streetDisplay-feedback" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(form.address.streetDisplayError), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BRow, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BCol, {
                sm: "6",
                class: "first"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "house_number-group"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
                            placeholder: _ctx.$t("form_house_number"),
                            id: "house_number",
                            modelValue: form.address.house_number,
                            "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                            type: "text",
                            onBlur: ($event) => validateHouseNumber(),
                            state: form.address.house_numberState,
                            "aria-describedby": "address.house_number-feedback"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(form.address.house_numberError)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(form.address.house_numberError), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BFormInput, {
                              placeholder: _ctx.$t("form_house_number"),
                              id: "house_number",
                              modelValue: form.address.house_number,
                              "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                              type: "text",
                              onBlur: ($event) => validateHouseNumber(),
                              state: form.address.house_numberState,
                              "aria-describedby": "address.house_number-feedback"
                            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(form.address.house_numberError), 1)
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
                        id: "house_number-group"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            placeholder: _ctx.$t("form_house_number"),
                            id: "house_number",
                            modelValue: form.address.house_number,
                            "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                            type: "text",
                            onBlur: ($event) => validateHouseNumber(),
                            state: form.address.house_numberState,
                            "aria-describedby": "address.house_number-feedback"
                          }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.address.house_numberError), 1)
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
              _push2(ssrRenderComponent(_component_BCol, {
                sm: "6",
                class: "third"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "addition-group"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
                            placeholder: _ctx.$t("form_addition"),
                            id: "addition",
                            modelValue: form.address.addition,
                            "onUpdate:modelValue": ($event) => form.address.addition = $event,
                            type: "text"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BFormInput, {
                              placeholder: _ctx.$t("form_addition"),
                              id: "addition",
                              modelValue: form.address.addition,
                              "onUpdate:modelValue": ($event) => form.address.addition = $event,
                              type: "text"
                            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BFormGroup, {
                        class: "account-inputs",
                        id: "addition-group"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            placeholder: _ctx.$t("form_addition"),
                            id: "addition",
                            modelValue: form.address.addition,
                            "onUpdate:modelValue": ($event) => form.address.addition = $event,
                            type: "text"
                          }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
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
                createVNode(_component_BCol, {
                  sm: "6",
                  class: "first"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "house_number-group"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          placeholder: _ctx.$t("form_house_number"),
                          id: "house_number",
                          modelValue: form.address.house_number,
                          "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                          type: "text",
                          onBlur: ($event) => validateHouseNumber(),
                          state: form.address.house_numberState,
                          "aria-describedby": "address.house_number-feedback"
                        }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.address.house_numberError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_BCol, {
                  sm: "6",
                  class: "third"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "addition-group"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          placeholder: _ctx.$t("form_addition"),
                          id: "addition",
                          modelValue: form.address.addition,
                          "onUpdate:modelValue": ($event) => form.address.addition = $event,
                          type: "text"
                        }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
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
        _push(ssrRenderComponent(_component_BFormGroup, {
          style: showFullAddress.value ? null : { display: "none" },
          class: "account-inputs",
          id: "postcode-group1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                placeholder: _ctx.$t("form_postal_code"),
                id: "postcode1",
                modelValue: form.address.postcode,
                "onUpdate:modelValue": ($event) => form.address.postcode = $event,
                type: "text",
                onBlur: ($event) => validatePostCode(),
                state: form.address.postcodeState,
                "aria-describedby": "address.postcode1-feedback"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.postcode1-feedback" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(form.address.postcodeError)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(form.address.postcodeError), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BFormInput, {
                  placeholder: _ctx.$t("form_postal_code"),
                  id: "postcode1",
                  modelValue: form.address.postcode,
                  "onUpdate:modelValue": ($event) => form.address.postcode = $event,
                  type: "text",
                  onBlur: ($event) => validatePostCode(),
                  state: form.address.postcodeState,
                  "aria-describedby": "address.postcode1-feedback"
                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                createVNode(_component_BFormInvalidFeedback, { id: "address.postcode1-feedback" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(form.address.postcodeError), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BFormGroup, {
          style: showFullAddress.value ? null : { display: "none" },
          class: "account-inputs",
          id: "city-group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                placeholder: _ctx.$t("form_city"),
                id: "city",
                modelValue: form.address.city,
                "onUpdate:modelValue": ($event) => form.address.city = $event,
                type: "text",
                onBlur: ($event) => validateCity(),
                state: form.address.cityState,
                "aria-describedby": "address.city-feedback"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.city-feedback" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(form.address.cityError)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(form.address.cityError), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BFormInput, {
                  placeholder: _ctx.$t("form_city"),
                  id: "city",
                  modelValue: form.address.city,
                  "onUpdate:modelValue": ($event) => form.address.city = $event,
                  type: "text",
                  onBlur: ($event) => validateCity(),
                  state: form.address.cityState,
                  "aria-describedby": "address.city-feedback"
                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                createVNode(_component_BFormInvalidFeedback, { id: "address.city-feedback" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(form.address.cityError), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (foundAddress.value != "" && showFullAddress.value == false) {
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "add-group",
            label: " "
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div id="add" style="${ssrRenderStyle({ color: foundAddress.value === _ctx.$t("postcode_not_found") ? "red" : "black" })}"${_scopeId}>${ssrInterpolate(foundAddress.value)}</div>`);
              } else {
                return [
                  createVNode("div", {
                    id: "add",
                    style: { color: foundAddress.value === _ctx.$t("postcode_not_found") ? "red" : "black" }
                  }, toDisplayString(foundAddress.value), 5)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (foundAddresses.value.length > 0 && showFullAddress.value == false) {
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "addm-group",
            label: " "
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div id="addm"${_scopeId}><!--[-->`);
                ssrRenderList(foundAddresses.value, (item, index) => {
                  _push2(ssrRenderComponent(_component_BFormRadio, {
                    class: "account-radios",
                    modelValue: selectedAddress.value,
                    "onUpdate:modelValue": ($event) => selectedAddress.value = $event,
                    key: index,
                    name: "some-radios",
                    value: index
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.text)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.text), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { id: "addm" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(foundAddresses.value, (item, index) => {
                      return openBlock(), createBlock(_component_BFormRadio, {
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
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.showManual) {
          _push(ssrRenderComponent(_component_BFormCheckbox, {
            id: "manual",
            modelValue: showFullAddress.value,
            "onUpdate:modelValue": ($event) => showFullAddress.value = $event,
            name: "manual"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("form_fillout_address_manual"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("form_fillout_address_manual")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_BFormGroup, {
          class: "account-inputs",
          id: "telephone-group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                placeholder: _ctx.$t("form_phone"),
                id: "telephone",
                modelValue: form.address.telephone,
                "onUpdate:modelValue": ($event) => form.address.telephone = $event,
                type: "text",
                onBlur: ($event) => validatePhone(),
                state: form.address.telephoneState,
                "aria-describedby": "address.telephone-feedback"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.telephone-feedback" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(form.address.telephoneError)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(form.address.telephoneError), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BFormInput, {
                  placeholder: _ctx.$t("form_phone"),
                  id: "telephone",
                  modelValue: form.address.telephone,
                  "onUpdate:modelValue": ($event) => form.address.telephone = $event,
                  type: "text",
                  onBlur: ($event) => validatePhone(),
                  state: form.address.telephoneState,
                  "aria-describedby": "address.telephone-feedback"
                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                createVNode(_component_BFormInvalidFeedback, { id: "address.telephone-feedback" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(form.address.telephoneError), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BFormCheckbox, {
        id: "checkbox-2",
        name: "checkbox-2",
        modelValue: form.address.default_billing,
        "onUpdate:modelValue": ($event) => form.address.default_billing = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("form_address_also_invoice_address"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("form_address_also_invoice_address")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (form.address.default_billing == false) {
        _push(`<div class="group"><span class="group-title d-block mb-5">${ssrInterpolate(_ctx.$t("invoice_address"))}</span>`);
        if (!newInvoiceAddress.value) {
          _push(`<!--[-->`);
          ssrRenderList(addresses.value, (address, index) => {
            _push(`<div><div class="${ssrRenderClass([address.id == selectedBillingAddressId.value ? "selected-item" : "", "address-item border rounded p-5 m-5"])}">`);
            if (address.company != null) {
              _push(`<div>${ssrInterpolate(address.company)}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div>${ssrInterpolate(address.firstname)} ${ssrInterpolate(address.lastname)}</div><div>${ssrInterpolate(address.street[0])}</div><div>${ssrInterpolate(address.city)}, ${ssrInterpolate(address.postcode)}</div><div>${ssrInterpolate(address.telephone)}</div></div></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_BFormCheckbox, {
          id: "new-invoice-address",
          name: "new-invoice-address",
          modelValue: newInvoiceAddress.value,
          "onUpdate:modelValue": ($event) => newInvoiceAddress.value = $event
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("make_new_address"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("make_new_address")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (newInvoiceAddress.value) {
          _push(`<div><div class="short-form">`);
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "company-group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  placeholder: _ctx.$t("form_company_name"),
                  id: "company",
                  modelValue: form.invoice.company,
                  "onUpdate:modelValue": ($event) => form.invoice.company = $event,
                  type: "text",
                  onBlur: ($event) => validateInvoiceCompany(),
                  state: form.invoice.companyState,
                  "aria-describedby": "company-feedback"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "company-feedback" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(form.invoice.companyError)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(form.invoice.companyError), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BFormInput, {
                    placeholder: _ctx.$t("form_company_name"),
                    id: "company",
                    modelValue: form.invoice.company,
                    "onUpdate:modelValue": ($event) => form.invoice.company = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoiceCompany(),
                    state: form.invoice.companyState,
                    "aria-describedby": "company-feedback"
                  }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                  createVNode(_component_BFormInvalidFeedback, { id: "company-feedback" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(form.invoice.companyError), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "taxvat-group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  placeholder: _ctx.$t("form_vat_number"),
                  id: "taxvat",
                  modelValue: form.invoice.taxvat,
                  "onUpdate:modelValue": ($event) => form.invoice.taxvat = $event,
                  type: "text",
                  state: form.invoice.taxvatState,
                  "aria-describedby": "taxvat-feedback"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BFormInvalidFeedback, {
                  id: "taxvat-feedback",
                  key: form.invoice.taxvatError
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(form.invoice.taxvatError)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(form.invoice.taxvatError), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BFormInput, {
                    placeholder: _ctx.$t("form_vat_number"),
                    id: "taxvat",
                    modelValue: form.invoice.taxvat,
                    "onUpdate:modelValue": ($event) => form.invoice.taxvat = $event,
                    type: "text",
                    state: form.invoice.taxvatState,
                    "aria-describedby": "taxvat-feedback"
                  }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "state"]),
                  (openBlock(), createBlock(_component_BFormInvalidFeedback, {
                    id: "taxvat-feedback",
                    key: form.invoice.taxvatError
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(form.invoice.taxvatError), 1)
                    ]),
                    _: 1
                  }))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "first_name-group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  placeholder: _ctx.$t("form_first_name"),
                  id: "first_name",
                  modelValue: form.invoice.firstname,
                  "onUpdate:modelValue": ($event) => form.invoice.firstname = $event,
                  type: "text",
                  onBlur: ($event) => validateInvoiceFirstname(),
                  state: form.invoice.firstnameState,
                  "aria-describedby": "firstname-feedback"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "firstname-feedback" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(form.invoice.firstnameError)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(form.invoice.firstnameError), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BFormInput, {
                    placeholder: _ctx.$t("form_first_name"),
                    id: "first_name",
                    modelValue: form.invoice.firstname,
                    "onUpdate:modelValue": ($event) => form.invoice.firstname = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoiceFirstname(),
                    state: form.invoice.firstnameState,
                    "aria-describedby": "firstname-feedback"
                  }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                  createVNode(_component_BFormInvalidFeedback, { id: "firstname-feedback" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(form.invoice.firstnameError), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "last_name-group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  placeholder: _ctx.$t("form_last_name"),
                  id: "last_name",
                  modelValue: form.invoice.lastname,
                  "onUpdate:modelValue": ($event) => form.invoice.lastname = $event,
                  type: "text",
                  onBlur: ($event) => validateInvoiceLastname(),
                  state: form.invoice.lastnameState,
                  "aria-describedby": "lastname-feedback"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "lastname-feedback" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(form.invoice.lastnameError)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(form.invoice.lastnameError), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BFormInput, {
                    placeholder: _ctx.$t("form_last_name"),
                    id: "last_name",
                    modelValue: form.invoice.lastname,
                    "onUpdate:modelValue": ($event) => form.invoice.lastname = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoiceLastname(),
                    state: form.invoice.lastnameState,
                    "aria-describedby": "lastname-feedback"
                  }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                  createVNode(_component_BFormInvalidFeedback, { id: "lastname-feedback" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(form.invoice.lastnameError), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "country-group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormSelect, {
                  id: "country",
                  modelValue: form.invoice.address.country_code,
                  "onUpdate:modelValue": ($event) => form.invoice.address.country_code = $event,
                  options: countries.value,
                  class: "select"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BFormSelect, {
                    id: "country",
                    modelValue: form.invoice.address.country_code,
                    "onUpdate:modelValue": ($event) => form.invoice.address.country_code = $event,
                    options: countries.value,
                    class: "select"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                ];
              }
            }),
            _: 1
          }, _parent));
          if (!showFullInvoiceAddress.value) {
            _push(ssrRenderComponent(_component_BFormGroup, {
              class: "account-inputs",
              id: "postcode-group"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
                    placeholder: _ctx.$t("form_postal_code"),
                    id: "postcode",
                    modelValue: form.invoice.address.postcode,
                    "onUpdate:modelValue": ($event) => form.invoice.address.postcode = $event,
                    type: "text",
                    state: form.invoice.address.postcodeState,
                    "aria-describedby": "address.postcode-feedback"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.postcode-feedback" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(form.invoice.address.postcodeError)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(form.invoice.address.postcodeError), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_BFormInput, {
                      placeholder: _ctx.$t("form_postal_code"),
                      id: "postcode",
                      modelValue: form.invoice.address.postcode,
                      "onUpdate:modelValue": ($event) => form.invoice.address.postcode = $event,
                      type: "text",
                      state: form.invoice.address.postcodeState,
                      "aria-describedby": "address.postcode-feedback"
                    }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "state"]),
                    createVNode(_component_BFormInvalidFeedback, { id: "address.postcode-feedback" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(form.invoice.address.postcodeError), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (showFullInvoiceAddress.value) {
            _push(ssrRenderComponent(_component_BFormGroup, {
              class: "account-inputs",
              id: "street-group"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
                    placeholder: _ctx.$t("form_street"),
                    id: "street",
                    modelValue: form.invoice.address.streetDisplay,
                    "onUpdate:modelValue": ($event) => form.invoice.address.streetDisplay = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoiceStreet(),
                    state: form.invoice.address.streetDisplayState,
                    "aria-describedby": "address.streetDisplay-feedback"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.streetDisplay-feedback" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(form.invoice.address.streetDisplayError)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(form.invoice.address.streetDisplayError), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_BFormInput, {
                      placeholder: _ctx.$t("form_street"),
                      id: "street",
                      modelValue: form.invoice.address.streetDisplay,
                      "onUpdate:modelValue": ($event) => form.invoice.address.streetDisplay = $event,
                      type: "text",
                      onBlur: ($event) => validateInvoiceStreet(),
                      state: form.invoice.address.streetDisplayState,
                      "aria-describedby": "address.streetDisplay-feedback"
                    }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                    createVNode(_component_BFormInvalidFeedback, { id: "address.streetDisplay-feedback" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(form.invoice.address.streetDisplayError), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_BRow, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BCol, {
                  sm: "6",
                  class: "first"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_BFormGroup, {
                        class: "account-inputs",
                        id: "house_number-group"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BFormInput, {
                              placeholder: _ctx.$t("form_house_number"),
                              id: "house_number",
                              modelValue: form.invoice.address.house_number,
                              "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                              type: "text",
                              onBlur: ($event) => validateInvoiceHouseNumber(),
                              state: form.invoice.address.house_numberState,
                              "aria-describedby": "address.house_number-feedback"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(form.invoice.address.house_numberError)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(form.invoice.address.house_numberError), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BFormInput, {
                                placeholder: _ctx.$t("form_house_number"),
                                id: "house_number",
                                modelValue: form.invoice.address.house_number,
                                "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                                type: "text",
                                onBlur: ($event) => validateInvoiceHouseNumber(),
                                state: form.invoice.address.house_numberState,
                                "aria-describedby": "address.house_number-feedback"
                              }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                              createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(form.invoice.address.house_numberError), 1)
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
                          id: "house_number-group"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BFormInput, {
                              placeholder: _ctx.$t("form_house_number"),
                              id: "house_number",
                              modelValue: form.invoice.address.house_number,
                              "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                              type: "text",
                              onBlur: ($event) => validateInvoiceHouseNumber(),
                              state: form.invoice.address.house_numberState,
                              "aria-describedby": "address.house_number-feedback"
                            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(form.invoice.address.house_numberError), 1)
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
                _push2(ssrRenderComponent(_component_BCol, {
                  sm: "6",
                  class: "third"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_BFormGroup, {
                        class: "account-inputs",
                        id: "addition-group"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BFormInput, {
                              placeholder: _ctx.$t("form_addition"),
                              id: "addition",
                              modelValue: form.invoice.address.addition,
                              "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
                              type: "text"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BFormInput, {
                                placeholder: _ctx.$t("form_addition"),
                                id: "addition",
                                modelValue: form.invoice.address.addition,
                                "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
                                type: "text"
                              }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_BFormGroup, {
                          class: "account-inputs",
                          id: "addition-group"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BFormInput, {
                              placeholder: _ctx.$t("form_addition"),
                              id: "addition",
                              modelValue: form.invoice.address.addition,
                              "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
                              type: "text"
                            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
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
                  createVNode(_component_BCol, {
                    sm: "6",
                    class: "first"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormGroup, {
                        class: "account-inputs",
                        id: "house_number-group"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            placeholder: _ctx.$t("form_house_number"),
                            id: "house_number",
                            modelValue: form.invoice.address.house_number,
                            "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                            type: "text",
                            onBlur: ($event) => validateInvoiceHouseNumber(),
                            state: form.invoice.address.house_numberState,
                            "aria-describedby": "address.house_number-feedback"
                          }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.invoice.address.house_numberError), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BCol, {
                    sm: "6",
                    class: "third"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormGroup, {
                        class: "account-inputs",
                        id: "addition-group"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            placeholder: _ctx.$t("form_addition"),
                            id: "addition",
                            modelValue: form.invoice.address.addition,
                            "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
                            type: "text"
                          }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])
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
          if (showFullInvoiceAddress.value) {
            _push(ssrRenderComponent(_component_BFormGroup, {
              class: "account-inputs",
              id: "postcode-group1"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
                    placeholder: _ctx.$t("form_postal_code"),
                    id: "postcode1",
                    modelValue: form.invoice.address.postcode,
                    "onUpdate:modelValue": ($event) => form.invoice.address.postcode = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoicePostcode(),
                    state: form.invoice.address.postcodeState,
                    "aria-describedby": "address.postcode1-feedback"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.postcode1-feedback" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(form.invoice.address.postcodeError)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(form.invoice.address.postcodeError), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_BFormInput, {
                      placeholder: _ctx.$t("form_postal_code"),
                      id: "postcode1",
                      modelValue: form.invoice.address.postcode,
                      "onUpdate:modelValue": ($event) => form.invoice.address.postcode = $event,
                      type: "text",
                      onBlur: ($event) => validateInvoicePostcode(),
                      state: form.invoice.address.postcodeState,
                      "aria-describedby": "address.postcode1-feedback"
                    }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                    createVNode(_component_BFormInvalidFeedback, { id: "address.postcode1-feedback" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(form.invoice.address.postcodeError), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (showFullInvoiceAddress.value) {
            _push(ssrRenderComponent(_component_BFormGroup, {
              class: "account-inputs",
              id: "city-group"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
                    placeholder: _ctx.$t("form_city"),
                    id: "city",
                    modelValue: form.invoice.address.city,
                    "onUpdate:modelValue": ($event) => form.invoice.address.city = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoiceCity(),
                    state: form.invoice.address.cityState,
                    "aria-describedby": "address.city-feedback"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.city-feedback" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(form.invoice.address.cityError)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(form.invoice.address.cityError), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_BFormInput, {
                      placeholder: _ctx.$t("form_city"),
                      id: "city",
                      modelValue: form.invoice.address.city,
                      "onUpdate:modelValue": ($event) => form.invoice.address.city = $event,
                      type: "text",
                      onBlur: ($event) => validateInvoiceCity(),
                      state: form.invoice.address.cityState,
                      "aria-describedby": "address.city-feedback"
                    }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                    createVNode(_component_BFormInvalidFeedback, { id: "address.city-feedback" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(form.invoice.address.cityError), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (foundInvoiceAddress.value != "" && showFullInvoiceAddress.value == false) {
            _push(ssrRenderComponent(_component_BFormGroup, {
              class: "account-inputs",
              id: "add-group",
              label: " "
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div id="add" style="${ssrRenderStyle({ color: foundInvoiceAddress.value === _ctx.$t("postcode_not_found") ? "red" : "black" })}"${_scopeId}>${ssrInterpolate(foundInvoiceAddress.value)}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      id: "add",
                      style: { color: foundInvoiceAddress.value === _ctx.$t("postcode_not_found") ? "red" : "black" }
                    }, toDisplayString(foundInvoiceAddress.value), 5)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (foundInvoiceAddresses.value.length > 0 && showFullInvoiceAddress.value == false) {
            _push(ssrRenderComponent(_component_BFormGroup, {
              class: "account-inputs",
              id: "addm-group",
              label: " "
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div id="addm"${_scopeId}><!--[-->`);
                  ssrRenderList(foundInvoiceAddresses.value, (item, index) => {
                    _push2(ssrRenderComponent(_component_BFormRadio, {
                      class: "account-radios",
                      modelValue: selectedInvoiceAddress.value,
                      "onUpdate:modelValue": ($event) => selectedInvoiceAddress.value = $event,
                      key: index,
                      name: "some-radios",
                      value: index
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(item.text)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.text), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { id: "addm" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(foundInvoiceAddresses.value, (item, index) => {
                        return openBlock(), createBlock(_component_BFormRadio, {
                          class: "account-radios",
                          modelValue: selectedInvoiceAddress.value,
                          "onUpdate:modelValue": ($event) => selectedInvoiceAddress.value = $event,
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
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (_ctx.showManual) {
            _push(ssrRenderComponent(_component_BFormCheckbox, {
              id: "manual2",
              modelValue: showFullInvoiceAddress.value,
              "onUpdate:modelValue": ($event) => showFullInvoiceAddress.value = $event,
              name: "manual2"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("form_fillout_address_manual"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("form_fillout_address_manual")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "telephone-group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  placeholder: _ctx.$t("form_phone"),
                  id: "telephone",
                  modelValue: form.invoice.address.telephone,
                  "onUpdate:modelValue": ($event) => form.invoice.address.telephone = $event,
                  type: "text",
                  onBlur: ($event) => validateInvoicePhone(),
                  state: form.invoice.address.telephoneState,
                  "aria-describedby": "address.telephone-feedback"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "address.telephone-feedback" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(form.invoice.address.telephoneError)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(form.invoice.address.telephoneError), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BFormInput, {
                    placeholder: _ctx.$t("form_phone"),
                    id: "telephone",
                    modelValue: form.invoice.address.telephone,
                    "onUpdate:modelValue": ($event) => form.invoice.address.telephone = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoicePhone(),
                    state: form.invoice.address.telephoneState,
                    "aria-describedby": "address.telephone-feedback"
                  }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                  createVNode(_component_BFormInvalidFeedback, { id: "address.telephone-feedback" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(form.invoice.address.telephoneError), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/checkout/LoggedInCheckoutDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Checkout",
  __ssrInlineRender: true,
  emits: ["toggleNextDisable"],
  setup(__props, { emit: __emit }) {
    const isClient = ref(false);
    onMounted(() => {
      isClient.value = true;
    });
    const emit = __emit;
    const router = useRouter();
    const store = useStore();
    const { t } = useI18n();
    const gtm = useGtm();
    const {
      cartCount,
      cartItems,
      cartSubTotalPrice,
      cartTotalPrice,
      cartTotalTaxPrices,
      cartTotalDiscounts
    } = useCartInfo();
    const localStorageData = ref({});
    const selectedShippingMethod = ref(null);
    const selectedIssuer = ref(null);
    const pickupLocation = ref(null);
    const showPickupLocation = ref(false);
    const selectedPickupLocation = ref(null);
    ref("");
    const SubscribeNewsletter = ref("yes");
    const buttonClicked = ref(false);
    ref(CONFIG_JSON.app_url);
    const gtmEnabled = ref(false);
    computed(() => {
      let items = t("items_in_cart", { numberOf: cartCount.value });
      return items.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    });
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    const user = computed(() => store.getters["user/getCurrentUser"]);
    const paymentOptions = computed(() => store.getters["cart/getPaymentMethods"]);
    const selectedAddress = computed(() => ({ ...store.getters["cart/getShippingAddress"] }));
    const deliveryOptions = computed(() => {
      let options = [...store.getters["cart/getShippingMethods"]];
      if (options.length > 0) {
        const pickIndex = options.findIndex((option) => option.carrier_code === "instore");
        options.push(options.splice(pickIndex, 1)[0]);
      }
      return options;
    });
    const paymentMethodOptions = computed(() => store.getters["cart/getPaymentMethodOptions"]);
    const selectedPaymentMethod = computed({
      get() {
        return store.getters["cart/getPaymentMethod"];
      },
      set(method) {
        updateLocalStorage({ billing: method });
        store.commit("cart/setPaymentMethod", method, store);
        if (gtmEnabled.value && gtm) {
          let prod = store.getters["cart/getCartItems"].map((item) => ({
            id: item.product.sku,
            name: item.product.name,
            quantity: item.quantity
          }));
          gtm.trackEvent("checkout", {
            event: "eec.checkout",
            ecommerce: {
              checkout: {
                actionField: { step: 2, option: method, action: "checkout" },
                products: prod
              }
            }
          });
        }
      }
    });
    const pickupLocations = computed(() => {
      let locations = [...store.getters["cart/getPickupLocations"]];
      locations = locations.map((location) => {
        if (location.name.startsWith("Wieleroutfits")) return location;
        return {
          ...location,
          name: `Wieleroutfits ${location.name}`,
          phone: location.phone
        };
      });
      let newLocations = [];
      let sortVal = CONFIG_JSON.pickupSortOptions;
      sortVal.forEach((item) => {
        const index = locations.findIndex(
          (location) => location.pickup_location_code.toLowerCase() == item.toLowerCase()
        );
        if (index > -1) newLocations.push(locations.splice(index, 1)[0]);
      });
      newLocations = [...newLocations, ...locations];
      return newLocations;
    });
    const pickupLocationName = computed(() => {
      if (pickupLocation.value && pickupLocation.value.length > 0) {
        return pickupLocations.value.find((loc) => loc.pickup_location_code === this.pickupLocation).name;
      } else {
        return "";
      }
    });
    const pickupLocationPhone = computed(() => {
      if (pickupLocation.value && pickupLocation.value.length > 0) {
        const loc = pickupLocations.value.find(
          (loc2) => loc2.pickup_location_code === pickupLocation.value
        );
        return loc ? loc.phone : "";
      }
      return "";
    });
    const getSelectedShippingMethod = computed(() => {
      return store.getters["cart/getShippingMethod"];
    });
    const shippingMethod = computed({
      get() {
        return store.getters["cart/getShippingMethod"];
      },
      set(shippingMethod2) {
        return shippingMethod2;
      }
    });
    computed(() => store.getters["cart/getAppliedCouponCodes"]);
    const showPaymentSuboptions = computed({
      get() {
        return selectedPaymentMethod.value === "multisafepay_ideal" ? "collapse show" : "collapse hidden";
      },
      set() {
      }
    });
    const isKlarnaSelected = computed({
      get() {
        return selectedPaymentMethod.value == "multisafepay_klarna" ? "collapse show" : "collapse hidden";
      },
      set() {
      }
    });
    watch(showPickupLocation, () => {
      setShippingMethod();
    });
    watch(
      () => pickupLocation.value,
      async (code) => {
        const response = await store.dispatch("cart/setPickupLocation", { code, store });
        if (response) {
          const delOption = selectedShippingMethod.value.split("|");
          await store.dispatch("cart/addShippingMethod", {
            carrier: delOption[0],
            method: delOption[1],
            store
          });
          selectedPickupLocation.value = await store.getters["cart/getShippingAddress"];
          updateLocalStorage({
            shipping: selectedShippingMethod.value,
            delivery: code
          });
          emit("toggleNextDisable", false);
        }
      }
    );
    watch(selectedShippingMethod, (method) => {
      const [carrier_code, method_code] = method.split("|");
      if (carrier_code === "instore" && method_code === "pickup") {
        showPickupLocation.value = true;
      } else {
        updateLocalStorage({
          shipping: selectedShippingMethod.value,
          delivery: null
        });
        showPickupLocation.value = false;
        store.dispatch("cart/addShippingMethod", {
          carrier: carrier_code,
          method: method_code,
          store
        });
        if (gtmEnabled.value && gtm) {
          let prod = [];
          cartItems.value.forEach((element) => {
            prod.push({
              id: element.product.sku,
              name: element.product.name,
              quantity: element.quantity
            });
          });
          window.dataLayer.push({
            event: "eec.checkout",
            ecommerce: {
              checkout: {
                actionField: {
                  step: 3,
                  option: method,
                  action: "checkout"
                },
                products: prod
              }
            }
          });
        }
      }
    });
    watch(SubscribeNewsletter, () => {
      updateLocalStorage({ newsletter: SubscribeNewsletter.value });
    });
    watch(
      () => paymentMethodOptions,
      (method) => {
        if (method && method.multisafepay_ideal && !method.multisafepay_ideal.issuer_id) {
          if (localStorageData.value.issuer) {
            setPaymentMethodOptions("multisafepay_ideal", "issuer_id", localStorageData.value.issuer);
          }
        }
      }
    );
    function storage() {
      localStorageData.value = JSON.parse(localStorage.getItem("checkoutPayment")) ?? {};
      if (localStorageData.value.shipping)
        selectedShippingMethod.value = localStorageData.value.shipping;
      if (localStorageData.value.delivery) {
        pickupLocation.value = localStorageData.value.delivery;
        showPickupLocation.value = true;
        selectedPickupLocation.value = localStorageData.value.delivery;
      }
      if (localStorageData.value.billing) selectedPaymentMethod.value = localStorageData.value.billing;
      selectedIssuer.value = localStorageData.value.issuer ?? "";
      SubscribeNewsletter.value = localStorageData.value.newsletter ?? "yes";
    }
    function formatCurrency(amount) {
      const formatter = new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR"
      });
      return formatter.format(amount);
    }
    async function submitForm() {
      buttonClicked.value = true;
      checkSiblingFields();
      if (checkFields()) {
        buttonClicked.value = true;
        if (selectedPaymentMethod.value === "multisafepay_ideal") {
          store.commit("cart/updateCartPaymentMethodOptions", {
            key: selectedPaymentMethod.value,
            sub: "issuer_id",
            value: selectedIssuer.value
          });
        }
        const retval = await store.dispatch("cart/addPaymentMethod", store);
        if (retval !== false) {
          localStorage.removeItem("orderHash");
          if (retval.order.hash) {
            localStorage.setItem("orderHash", retval.order.hash);
          }
          const url = retval.redirect_url.replace(CONFIG_JSON.app_url, "");
          if (isLoggedIn.value === true) {
            store.dispatch("user/loadOrders", { page: 1, perPage: 10, Search: "", store });
          }
          if (url.includes("https://")) {
            window.location = url;
          } else {
            store.dispatch("cart/loadCart", { store });
            router.push({
              path: `${url}?transactionid=${retval.order.increment_id}`,
              params: { hash: retval.order.hash }
            });
          }
        }
      } else {
        buttonClicked.value = false;
      }
    }
    function setPaymentMethodOptions(paymentMethod, option_key, issuer_id) {
      if (paymentMethod) {
        updateLocalStorage({
          billing: paymentMethod,
          issuer: issuer_id
        });
        store.commit("cart/updateCartPaymentMethodOptions", {
          key: paymentMethod,
          sub: option_key,
          value: issuer_id
        });
      }
    }
    function checkAllSubOptions(code) {
      showPaymentSuboptions.value = code === "multisafepay_ideal" ? "collapse show" : "collapse hidden";
      isKlarnaSelected.value = code === "multisafepay_klarna" ? "collapse show" : "collapse hidden";
    }
    function setShippingMethod() {
      if (!showPickupLocation.value) {
        shippingMethod.value = selectedAddress.value;
      } else if (user.value.addresses) {
        const defaultShipping = user.value.defaultShipping;
        const address = user.value.addresses.find((add) => add.id === defaultShipping);
        shippingMethod.value = address || selectedAddress.value;
      } else {
        shippingMethod.value = selectedAddress.value;
      }
    }
    function updateLocalStorage(data) {
      localStorageData.value = { ...localStorageData.value, ...data };
      localStorage.setItem("checkoutPayment", JSON.stringify(localStorageData.value));
    }
    function checkFields() {
      const errorFields = [];
      const storeValidation = store.getters["cart/getStoreValidation"];
      for (const property in storeValidation) {
        storeValidation[property].forEach((error) => {
          errorFields.push(error);
        });
      }
      if (errorFields.length > 0) {
        const msg = {
          type: "danger",
          title: t("Checkout fields incomplete"),
          text: t("The following fields are invalid:", {
            errors: errorFields.join(", ")
          })
        };
        store.dispatch("messages/sendMessage", { message: msg });
        return false;
      }
      return true;
    }
    function emitCheckFields() {
      window.dispatchEvent(new CustomEvent("checkFields"));
    }
    function checkSiblingFields() {
      emitCheckFields();
      const errorFields = [];
      if (!shippingMethod.value) {
        errorFields.push(t("Shipping method"));
      }
      if (!selectedPaymentMethod.value && !paymentMethodOptions.value) {
        errorFields.push(t("Payment method"));
      } else if (!selectedPaymentMethod.value) {
        selectedPaymentMethod.value = paymentMethodOptions.value;
      }
      if (selectedPaymentMethod.value === "multisafepay_ideal") {
        if (!paymentMethodOptions.value.multisafepay_ideal || !paymentMethodOptions.value.multisafepay_ideal.issuer_id) {
          errorFields.push(t("Bank"));
        }
      }
      if (errorFields.length > 0) {
        store.commit("cart/setStoreValidation", {
          payment: errorFields
        });
      } else {
        store.commit("cart/setStoreValidation", {
          payment: []
        });
      }
    }
    useHead({
      title: () => t("checkout")
    });
    onMounted(() => {
      gtmEnabled.value = true;
      if (gtm) {
        gtm.enable(true);
      }
      const shmed = getSelectedShippingMethod.value;
      if (shmed) {
        if (shmed.carrier_code === "instore" && shmed.method_code === "pickup") {
          showPickupLocation.value = true;
        }
        selectedShippingMethod.value = `${shmed.carrier_code}|${shmed.method_code}`;
      }
      setShippingMethod();
      const bcrumb = { current: t("checkout"), routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
      if (gtm && gtmEnabled.value) {
        let prod = [];
        cartItems.value.forEach((element) => {
          let i = {
            id: element.product.sku,
            name: element.product.name,
            quantity: element.quantity
          };
          prod.push(i);
        });
        window.dataLayer.push({
          event: "eec.checkout",
          ecommerce: {
            checkout: {
              actionField: {
                step: 1,
                option: "",
                action: "checkout"
              },
              products: prod
            }
          }
        });
      }
      storage();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BCol = BCol;
      const _component_BFormRadio = BFormRadio;
      const _component_BFormGroup = BFormGroup;
      const _component_BFormSelect = BFormSelect;
      const _component_BFormSelectOption = BFormSelectOption;
      const _component_BButton = BButton;
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(unref(_sfc_main$2), mergeProps({ wrapperClass: "checkout" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent2, _scopeId));
            if (isClient.value) {
              _push2(`<section class="checkout-details ps-md-20 p-15 pt-0"${_scopeId}>`);
              if (isLoggedIn.value) {
                _push2(`<div class="row"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BCol, {
                  lg: "4",
                  class: "address-wrapper"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(_sfc_main$1))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BCol, {
                  lg: "4",
                  class: "pt-20 pt-lg-0 payment-shipping-wrapper"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="group"${_scopeId2}><div class="group-title d-flex align-items-center mb-5"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(_ctx.$t("shipping_method"))}</span></div>`);
                      if (deliveryOptions.value.length == 0) {
                        _push3(`<div class="message"${_scopeId2}>${ssrInterpolate(_ctx.$t("fill_address_information"))}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (deliveryOptions.value.length !== 0) {
                        _push3(`<div${_scopeId2}><ul class="delivery-options-list list-unstyled pl-0 m-0"${_scopeId2}><!--[-->`);
                        ssrRenderList(deliveryOptions.value, (deliveryOption, index) => {
                          _push3(`<li${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_BFormRadio, {
                            modelValue: selectedShippingMethod.value,
                            "onUpdate:modelValue": ($event) => selectedShippingMethod.value = $event,
                            name: "deliveryOption",
                            value: `${deliveryOption == null ? void 0 : deliveryOption.carrier_code}|${deliveryOption == null ? void 0 : deliveryOption.method_code}`
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`<div class="d-flex"${_scopeId3}><span class="delivery-price d-block"${_scopeId3}>${ssrInterpolate(formatCurrency(deliveryOption.amount.value))} </span><span class="d-block mx-6"${_scopeId3}>${ssrInterpolate(deliveryOption == null ? void 0 : deliveryOption.carrier_title)} (${ssrInterpolate(deliveryOption == null ? void 0 : deliveryOption.method_title)})</span></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode("span", { class: "delivery-price d-block" }, toDisplayString(formatCurrency(deliveryOption.amount.value)) + " ", 1),
                                    createVNode("span", { class: "d-block mx-6" }, toDisplayString(deliveryOption == null ? void 0 : deliveryOption.carrier_title) + " (" + toDisplayString(deliveryOption == null ? void 0 : deliveryOption.method_title) + ")", 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                          _push3(`</li>`);
                        });
                        _push3(`<!--]--></ul></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                      if (showPickupLocation.value) {
                        _push3(`<div${_scopeId2}><span class="d-block mb-15"${_scopeId2}>${ssrInterpolate(_ctx.$t("select_store"))}</span>`);
                        _push3(ssrRenderComponent(_component_BFormGroup, { class: "select--custom" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_BFormSelect, {
                                modelValue: pickupLocation.value,
                                "onUpdate:modelValue": ($event) => pickupLocation.value = $event,
                                options: pickupLocations.value,
                                class: "mb-3",
                                "value-field": "pickup_location_code",
                                "text-field": "name",
                                id: "pickup-dropdown"
                              }, {
                                first: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_BFormSelectOption, { value: null }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(_ctx.$t("select_store"))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(_ctx.$t("select_store")), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_BFormSelectOption, { value: null }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t("select_store")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_BFormSelect, {
                                  modelValue: pickupLocation.value,
                                  "onUpdate:modelValue": ($event) => pickupLocation.value = $event,
                                  options: pickupLocations.value,
                                  class: "mb-3",
                                  "value-field": "pickup_location_code",
                                  "text-field": "name",
                                  id: "pickup-dropdown"
                                }, {
                                  first: withCtx(() => [
                                    createVNode(_component_BFormSelectOption, { value: null }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("select_store")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<div${_scopeId2}>`);
                      if (showPickupLocation.value && selectedPickupLocation.value) {
                        _push3(`<div class="address-list store-address"${_scopeId2}><div class="address-list-wrap"${_scopeId2}>`);
                        if (selectedAddress.value != null) {
                          _push3(`<div class="address-item"${_scopeId2}><label${_scopeId2}>${ssrInterpolate(pickupLocationName.value)}</label><div${_scopeId2}>${ssrInterpolate(selectedAddress.value.street[0])}</div><div${_scopeId2}>${ssrInterpolate(selectedAddress.value.postcode)} ${ssrInterpolate(selectedAddress.value.city)}</div>`);
                          if (selectedAddress.value.country) {
                            _push3(`<div${_scopeId2}>${ssrInterpolate(selectedAddress.value.countryName)}</div>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`<div${_scopeId2}> T:<a${ssrRenderAttr("href", `tel:` + pickupLocationPhone.value)}${_scopeId2}>${ssrInterpolate(pickupLocationPhone.value)}</a></div>`);
                          if (selectedAddress.value.vat_id != null) {
                            _push3(`<div${_scopeId2}> VAT:${ssrInterpolate(selectedAddress.value.vat_id)}</div>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="group"${_scopeId2}><div class="group-title d-flex align-items-center mb-5"${_scopeId2}><span class="d-block"${_scopeId2}>${ssrInterpolate(_ctx.$t("payment_method"))}</span></div>`);
                      if (deliveryOptions.value.length == 0 || shippingMethod.value == null) {
                        _push3(`<div class="message"${_scopeId2}>${ssrInterpolate(_ctx.$t("fill_shipping_options"))}</div>`);
                      } else {
                        _push3(`<div${_scopeId2}><ul class="payment-options-list list-unstyled p-0 m-0"${_scopeId2}><!--[-->`);
                        ssrRenderList(paymentOptions.value, (paymentOption, index) => {
                          _push3(`<li${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_BFormRadio, {
                            class: "pl-30",
                            name: "paymentOption",
                            value: paymentOption.code,
                            onChange: ($event) => checkAllSubOptions(paymentOption.code),
                            modelValue: selectedPaymentMethod.value,
                            "onUpdate:modelValue": ($event) => selectedPaymentMethod.value = $event
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`<div class="d-flex align-items-center"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(paymentOption.label)}</span></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-items-center" }, [
                                    createVNode("span", null, toDisplayString(paymentOption.label), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                          _push3(`<!--[-->`);
                          ssrRenderList(paymentOption.additional_fields, (paymentSubOption, index2) => {
                            _push3(`<div class="${ssrRenderClass(showPaymentSuboptions.value)}"${_scopeId2}>`);
                            if (paymentSubOption.type == "select") {
                              _push3(`<div class="pt-4"${_scopeId2}><span class="d-block mb-15"${_scopeId2}>${ssrInterpolate(paymentSubOption.label)}</span>`);
                              _push3(ssrRenderComponent(_component_BFormGroup, { class: "select--custom" }, {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(ssrRenderComponent(_component_BFormSelect, {
                                      options: paymentSubOption.options,
                                      "text-field": "label",
                                      value: paymentMethodOptions.value[paymentOption.code][paymentSubOption.code],
                                      onChange: ($event) => setPaymentMethodOptions(
                                        paymentOption.code,
                                        paymentSubOption.code,
                                        $event
                                      ),
                                      modelValue: selectedIssuer.value,
                                      "onUpdate:modelValue": ($event) => selectedIssuer.value = $event
                                    }, {
                                      first: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                        if (_push5) {
                                          _push5(ssrRenderComponent(_component_BFormSelectOption, { value: null }, {
                                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                              if (_push6) {
                                                _push6(`${ssrInterpolate(_ctx.$t("select_bank"))}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(_ctx.$t("select_bank")), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent5, _scopeId4));
                                        } else {
                                          return [
                                            createVNode(_component_BFormSelectOption, { value: null }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.$t("select_bank")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent4, _scopeId3));
                                  } else {
                                    return [
                                      createVNode(_component_BFormSelect, {
                                        options: paymentSubOption.options,
                                        "text-field": "label",
                                        value: paymentMethodOptions.value[paymentOption.code][paymentSubOption.code],
                                        onChange: ($event) => setPaymentMethodOptions(
                                          paymentOption.code,
                                          paymentSubOption.code,
                                          $event
                                        ),
                                        modelValue: selectedIssuer.value,
                                        "onUpdate:modelValue": ($event) => selectedIssuer.value = $event
                                      }, {
                                        first: withCtx(() => [
                                          createVNode(_component_BFormSelectOption, { value: null }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("select_bank")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["options", "value", "onChange", "modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent3, _scopeId2));
                              _push3(`</div>`);
                            } else {
                              _push3(`<!---->`);
                            }
                            _push3(`</div>`);
                          });
                          _push3(`<!--]-->`);
                          if ((paymentOption == null ? void 0 : paymentOption.code) == "multisafepay_klarna") {
                            _push3(`<div class="${ssrRenderClass(isKlarnaSelected.value)}"${_scopeId2}> Je moet minimaal 18+ zijn om deze dienst te gebruiken. Als je op tijd betaalt, voorkom je extra kosten. </div>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</li>`);
                        });
                        _push3(`<!--]--></ul></div>`);
                      }
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "group-title d-flex align-items-center mb-5" }, [
                            createVNode("span", null, toDisplayString(_ctx.$t("shipping_method")), 1)
                          ]),
                          deliveryOptions.value.length == 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "message"
                          }, toDisplayString(_ctx.$t("fill_address_information")), 1)) : createCommentVNode("", true),
                          deliveryOptions.value.length !== 0 ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("ul", { class: "delivery-options-list list-unstyled pl-0 m-0" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(deliveryOptions.value, (deliveryOption, index) => {
                                return openBlock(), createBlock("li", {
                                  key: `ship-${index}`
                                }, [
                                  createVNode(_component_BFormRadio, {
                                    modelValue: selectedShippingMethod.value,
                                    "onUpdate:modelValue": ($event) => selectedShippingMethod.value = $event,
                                    name: "deliveryOption",
                                    value: `${deliveryOption == null ? void 0 : deliveryOption.carrier_code}|${deliveryOption == null ? void 0 : deliveryOption.method_code}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex" }, [
                                        createVNode("span", { class: "delivery-price d-block" }, toDisplayString(formatCurrency(deliveryOption.amount.value)) + " ", 1),
                                        createVNode("span", { class: "d-block mx-6" }, toDisplayString(deliveryOption == null ? void 0 : deliveryOption.carrier_title) + " (" + toDisplayString(deliveryOption == null ? void 0 : deliveryOption.method_title) + ")", 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue", "value"])
                                ]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        showPickupLocation.value ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("span", { class: "d-block mb-15" }, toDisplayString(_ctx.$t("select_store")), 1),
                          createVNode(_component_BFormGroup, { class: "select--custom" }, {
                            default: withCtx(() => [
                              createVNode(_component_BFormSelect, {
                                modelValue: pickupLocation.value,
                                "onUpdate:modelValue": ($event) => pickupLocation.value = $event,
                                options: pickupLocations.value,
                                class: "mb-3",
                                "value-field": "pickup_location_code",
                                "text-field": "name",
                                id: "pickup-dropdown"
                              }, {
                                first: withCtx(() => [
                                  createVNode(_component_BFormSelectOption, { value: null }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("select_store")), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true),
                        createVNode("div", null, [
                          showPickupLocation.value && selectedPickupLocation.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "address-list store-address"
                          }, [
                            createVNode("div", { class: "address-list-wrap" }, [
                              selectedAddress.value != null ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "address-item"
                              }, [
                                createVNode("label", null, toDisplayString(pickupLocationName.value), 1),
                                createVNode("div", null, toDisplayString(selectedAddress.value.street[0]), 1),
                                createVNode("div", null, toDisplayString(selectedAddress.value.postcode) + " " + toDisplayString(selectedAddress.value.city), 1),
                                selectedAddress.value.country ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(selectedAddress.value.countryName), 1)) : createCommentVNode("", true),
                                createVNode("div", null, [
                                  createTextVNode(" T:"),
                                  createVNode("a", {
                                    href: `tel:` + pickupLocationPhone.value
                                  }, toDisplayString(pickupLocationPhone.value), 9, ["href"])
                                ]),
                                selectedAddress.value.vat_id != null ? (openBlock(), createBlock("div", { key: 1 }, " VAT:" + toDisplayString(selectedAddress.value.vat_id), 1)) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true)
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "group-title d-flex align-items-center mb-5" }, [
                            createVNode("span", { class: "d-block" }, toDisplayString(_ctx.$t("payment_method")), 1)
                          ]),
                          deliveryOptions.value.length == 0 || shippingMethod.value == null ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "message"
                          }, toDisplayString(_ctx.$t("fill_shipping_options")), 1)) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("ul", { class: "payment-options-list list-unstyled p-0 m-0" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(paymentOptions.value, (paymentOption, index) => {
                                return openBlock(), createBlock("li", {
                                  key: `pay-${index}`
                                }, [
                                  createVNode(_component_BFormRadio, {
                                    class: "pl-30",
                                    name: "paymentOption",
                                    value: paymentOption.code,
                                    onChange: ($event) => checkAllSubOptions(paymentOption.code),
                                    modelValue: selectedPaymentMethod.value,
                                    "onUpdate:modelValue": ($event) => selectedPaymentMethod.value = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-items-center" }, [
                                        createVNode("span", null, toDisplayString(paymentOption.label), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onChange", "modelValue", "onUpdate:modelValue"]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(paymentOption.additional_fields, (paymentSubOption, index2) => {
                                    return openBlock(), createBlock("div", {
                                      class: showPaymentSuboptions.value,
                                      key: `pso-${index2}`
                                    }, [
                                      paymentSubOption.type == "select" ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "pt-4"
                                      }, [
                                        createVNode("span", { class: "d-block mb-15" }, toDisplayString(paymentSubOption.label), 1),
                                        createVNode(_component_BFormGroup, { class: "select--custom" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_BFormSelect, {
                                              options: paymentSubOption.options,
                                              "text-field": "label",
                                              value: paymentMethodOptions.value[paymentOption.code][paymentSubOption.code],
                                              onChange: ($event) => setPaymentMethodOptions(
                                                paymentOption.code,
                                                paymentSubOption.code,
                                                $event
                                              ),
                                              modelValue: selectedIssuer.value,
                                              "onUpdate:modelValue": ($event) => selectedIssuer.value = $event
                                            }, {
                                              first: withCtx(() => [
                                                createVNode(_component_BFormSelectOption, { value: null }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("select_bank")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["options", "value", "onChange", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])) : createCommentVNode("", true)
                                    ], 2);
                                  }), 128)),
                                  (paymentOption == null ? void 0 : paymentOption.code) == "multisafepay_klarna" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: isKlarnaSelected.value
                                  }, " Je moet minimaal 18+ zijn om deze dienst te gebruiken. Als je op tijd betaalt, voorkom je extra kosten. ", 2)) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ]))
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BCol, {
                  lg: "4",
                  class: "pt-30 pt-lg-0"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div${_scopeId2}><div class="order-overview"${_scopeId2}><span class="group-title mb-5 d-block"${_scopeId2}>${ssrInterpolate(_ctx.$t("order_overview"))}</span><ul class="cost-list list-unstyled pl-0 m-0"${_scopeId2}><li class="d-flex justify-content-between"${_scopeId2}><span class="d-block mr-20"${_scopeId2}>${ssrInterpolate(_ctx.$t("subtotal"))}</span><span class="d-block"${_scopeId2}>${ssrInterpolate(formatCurrency(unref(cartSubTotalPrice)))}</span></li>`);
                      if (shippingMethod.value != null) {
                        _push3(`<li class="d-flex justify-content-between"${_scopeId2}><span class="d-block mr-20"${_scopeId2}>${ssrInterpolate(shippingMethod.value.carrier_title)} / ${ssrInterpolate(shippingMethod.value.method_title)}</span>`);
                        if (shippingMethod.value.amount_including_tax) {
                          _push3(`<span class="d-block"${_scopeId2}>${ssrInterpolate(formatCurrency(shippingMethod.value.amount_including_tax.value))}</span>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</li>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(cartTotalDiscounts), (price, index) => {
                        _push3(`<li class="d-flex justify-content-between"${_scopeId2}><span class="d-block mr-20"${_scopeId2}>${ssrInterpolate(price.label)}</span><span class="d-block"${_scopeId2}>- ${ssrInterpolate(formatCurrency(price.amount.value))}</span></li>`);
                      });
                      _push3(`<!--]--></ul><div class="total-grp text-end"${_scopeId2}><span class="total-label"${_scopeId2}>${ssrInterpolate(_ctx.$t("total"))}</span><span class="total-value col-7 d-inline-block"${_scopeId2}>${ssrInterpolate(formatCurrency(unref(cartTotalPrice)))}</span></div><ul class="cost-list list-unstyled pl-0 m-0 pb-0"${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(cartTotalTaxPrices), (price, index) => {
                        _push3(`<li class="d-flex justify-content-between"${_scopeId2}><span class="d-block mr-20"${_scopeId2}>${ssrInterpolate(price.label)}</span>`);
                        if (price) {
                          _push3(`<span class="d-block"${_scopeId2}>${ssrInterpolate(formatCurrency(price.amount.value))}</span>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</li>`);
                      });
                      _push3(`<!--]--></ul></div>`);
                      _push3(ssrRenderComponent(_component_BButton, {
                        onClick: submitForm,
                        disabled: buttonClicked.value,
                        variant: "secondary",
                        class: "text-light w-100 text-uppercase checkout-btn"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t("pay"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t("pay")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", null, [
                          createVNode("div", { class: "order-overview" }, [
                            createVNode("span", { class: "group-title mb-5 d-block" }, toDisplayString(_ctx.$t("order_overview")), 1),
                            createVNode("ul", { class: "cost-list list-unstyled pl-0 m-0" }, [
                              createVNode("li", { class: "d-flex justify-content-between" }, [
                                createVNode("span", { class: "d-block mr-20" }, toDisplayString(_ctx.$t("subtotal")), 1),
                                createVNode("span", { class: "d-block" }, toDisplayString(formatCurrency(unref(cartSubTotalPrice))), 1)
                              ]),
                              shippingMethod.value != null ? (openBlock(), createBlock("li", {
                                key: 0,
                                class: "d-flex justify-content-between"
                              }, [
                                createVNode("span", { class: "d-block mr-20" }, toDisplayString(shippingMethod.value.carrier_title) + " / " + toDisplayString(shippingMethod.value.method_title), 1),
                                shippingMethod.value.amount_including_tax ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "d-block"
                                }, toDisplayString(formatCurrency(shippingMethod.value.amount_including_tax.value)), 1)) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalDiscounts), (price, index) => {
                                return openBlock(), createBlock("li", {
                                  key: `price-${index}`,
                                  class: "d-flex justify-content-between"
                                }, [
                                  createVNode("span", { class: "d-block mr-20" }, toDisplayString(price.label), 1),
                                  createVNode("span", { class: "d-block" }, "- " + toDisplayString(formatCurrency(price.amount.value)), 1)
                                ]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "total-grp text-end" }, [
                              createVNode("span", { class: "total-label" }, toDisplayString(_ctx.$t("total")), 1),
                              createVNode("span", { class: "total-value col-7 d-inline-block" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
                            ]),
                            createVNode("ul", { class: "cost-list list-unstyled pl-0 m-0 pb-0" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalTaxPrices), (price, index) => {
                                return openBlock(), createBlock("li", {
                                  key: `tax-${index}`,
                                  class: "d-flex justify-content-between"
                                }, [
                                  createVNode("span", { class: "d-block mr-20" }, toDisplayString(price.label), 1),
                                  price ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "d-block"
                                  }, toDisplayString(formatCurrency(price.amount.value)), 1)) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ]),
                          createVNode(_component_BButton, {
                            onClick: submitForm,
                            disabled: buttonClicked.value,
                            variant: "secondary",
                            class: "text-light w-100 text-uppercase checkout-btn"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("pay")), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<div${_scopeId}><h3${_scopeId}>${ssrInterpolate(_ctx.$t("checkout_login_message"))} `);
                _push2(ssrRenderComponent(_component_router_link, { to: "/login" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Click Here... `);
                    } else {
                      return [
                        createTextVNode(" Click Here... ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</h3></div>`);
              }
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(_sfc_main$3)),
              isClient.value ? (openBlock(), createBlock("section", {
                key: 0,
                class: "checkout-details ps-md-20 p-15 pt-0"
              }, [
                isLoggedIn.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "row"
                }, [
                  createVNode(_component_BCol, {
                    lg: "4",
                    class: "address-wrapper"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BCol, {
                    lg: "4",
                    class: "pt-20 pt-lg-0 payment-shipping-wrapper"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "group" }, [
                        createVNode("div", { class: "group-title d-flex align-items-center mb-5" }, [
                          createVNode("span", null, toDisplayString(_ctx.$t("shipping_method")), 1)
                        ]),
                        deliveryOptions.value.length == 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "message"
                        }, toDisplayString(_ctx.$t("fill_address_information")), 1)) : createCommentVNode("", true),
                        deliveryOptions.value.length !== 0 ? (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("ul", { class: "delivery-options-list list-unstyled pl-0 m-0" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(deliveryOptions.value, (deliveryOption, index) => {
                              return openBlock(), createBlock("li", {
                                key: `ship-${index}`
                              }, [
                                createVNode(_component_BFormRadio, {
                                  modelValue: selectedShippingMethod.value,
                                  "onUpdate:modelValue": ($event) => selectedShippingMethod.value = $event,
                                  name: "deliveryOption",
                                  value: `${deliveryOption == null ? void 0 : deliveryOption.carrier_code}|${deliveryOption == null ? void 0 : deliveryOption.method_code}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex" }, [
                                      createVNode("span", { class: "delivery-price d-block" }, toDisplayString(formatCurrency(deliveryOption.amount.value)) + " ", 1),
                                      createVNode("span", { class: "d-block mx-6" }, toDisplayString(deliveryOption == null ? void 0 : deliveryOption.carrier_title) + " (" + toDisplayString(deliveryOption == null ? void 0 : deliveryOption.method_title) + ")", 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "value"])
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      showPickupLocation.value ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("span", { class: "d-block mb-15" }, toDisplayString(_ctx.$t("select_store")), 1),
                        createVNode(_component_BFormGroup, { class: "select--custom" }, {
                          default: withCtx(() => [
                            createVNode(_component_BFormSelect, {
                              modelValue: pickupLocation.value,
                              "onUpdate:modelValue": ($event) => pickupLocation.value = $event,
                              options: pickupLocations.value,
                              class: "mb-3",
                              "value-field": "pickup_location_code",
                              "text-field": "name",
                              id: "pickup-dropdown"
                            }, {
                              first: withCtx(() => [
                                createVNode(_component_BFormSelectOption, { value: null }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("select_store")), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true),
                      createVNode("div", null, [
                        showPickupLocation.value && selectedPickupLocation.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "address-list store-address"
                        }, [
                          createVNode("div", { class: "address-list-wrap" }, [
                            selectedAddress.value != null ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "address-item"
                            }, [
                              createVNode("label", null, toDisplayString(pickupLocationName.value), 1),
                              createVNode("div", null, toDisplayString(selectedAddress.value.street[0]), 1),
                              createVNode("div", null, toDisplayString(selectedAddress.value.postcode) + " " + toDisplayString(selectedAddress.value.city), 1),
                              selectedAddress.value.country ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(selectedAddress.value.countryName), 1)) : createCommentVNode("", true),
                              createVNode("div", null, [
                                createTextVNode(" T:"),
                                createVNode("a", {
                                  href: `tel:` + pickupLocationPhone.value
                                }, toDisplayString(pickupLocationPhone.value), 9, ["href"])
                              ]),
                              selectedAddress.value.vat_id != null ? (openBlock(), createBlock("div", { key: 1 }, " VAT:" + toDisplayString(selectedAddress.value.vat_id), 1)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true)
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "group" }, [
                        createVNode("div", { class: "group-title d-flex align-items-center mb-5" }, [
                          createVNode("span", { class: "d-block" }, toDisplayString(_ctx.$t("payment_method")), 1)
                        ]),
                        deliveryOptions.value.length == 0 || shippingMethod.value == null ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "message"
                        }, toDisplayString(_ctx.$t("fill_shipping_options")), 1)) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("ul", { class: "payment-options-list list-unstyled p-0 m-0" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(paymentOptions.value, (paymentOption, index) => {
                              return openBlock(), createBlock("li", {
                                key: `pay-${index}`
                              }, [
                                createVNode(_component_BFormRadio, {
                                  class: "pl-30",
                                  name: "paymentOption",
                                  value: paymentOption.code,
                                  onChange: ($event) => checkAllSubOptions(paymentOption.code),
                                  modelValue: selectedPaymentMethod.value,
                                  "onUpdate:modelValue": ($event) => selectedPaymentMethod.value = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-items-center" }, [
                                      createVNode("span", null, toDisplayString(paymentOption.label), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onChange", "modelValue", "onUpdate:modelValue"]),
                                (openBlock(true), createBlock(Fragment, null, renderList(paymentOption.additional_fields, (paymentSubOption, index2) => {
                                  return openBlock(), createBlock("div", {
                                    class: showPaymentSuboptions.value,
                                    key: `pso-${index2}`
                                  }, [
                                    paymentSubOption.type == "select" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "pt-4"
                                    }, [
                                      createVNode("span", { class: "d-block mb-15" }, toDisplayString(paymentSubOption.label), 1),
                                      createVNode(_component_BFormGroup, { class: "select--custom" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BFormSelect, {
                                            options: paymentSubOption.options,
                                            "text-field": "label",
                                            value: paymentMethodOptions.value[paymentOption.code][paymentSubOption.code],
                                            onChange: ($event) => setPaymentMethodOptions(
                                              paymentOption.code,
                                              paymentSubOption.code,
                                              $event
                                            ),
                                            modelValue: selectedIssuer.value,
                                            "onUpdate:modelValue": ($event) => selectedIssuer.value = $event
                                          }, {
                                            first: withCtx(() => [
                                              createVNode(_component_BFormSelectOption, { value: null }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("select_bank")), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["options", "value", "onChange", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])) : createCommentVNode("", true)
                                  ], 2);
                                }), 128)),
                                (paymentOption == null ? void 0 : paymentOption.code) == "multisafepay_klarna" ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: isKlarnaSelected.value
                                }, " Je moet minimaal 18+ zijn om deze dienst te gebruiken. Als je op tijd betaalt, voorkom je extra kosten. ", 2)) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ]))
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BCol, {
                    lg: "4",
                    class: "pt-30 pt-lg-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("div", { class: "order-overview" }, [
                          createVNode("span", { class: "group-title mb-5 d-block" }, toDisplayString(_ctx.$t("order_overview")), 1),
                          createVNode("ul", { class: "cost-list list-unstyled pl-0 m-0" }, [
                            createVNode("li", { class: "d-flex justify-content-between" }, [
                              createVNode("span", { class: "d-block mr-20" }, toDisplayString(_ctx.$t("subtotal")), 1),
                              createVNode("span", { class: "d-block" }, toDisplayString(formatCurrency(unref(cartSubTotalPrice))), 1)
                            ]),
                            shippingMethod.value != null ? (openBlock(), createBlock("li", {
                              key: 0,
                              class: "d-flex justify-content-between"
                            }, [
                              createVNode("span", { class: "d-block mr-20" }, toDisplayString(shippingMethod.value.carrier_title) + " / " + toDisplayString(shippingMethod.value.method_title), 1),
                              shippingMethod.value.amount_including_tax ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "d-block"
                              }, toDisplayString(formatCurrency(shippingMethod.value.amount_including_tax.value)), 1)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalDiscounts), (price, index) => {
                              return openBlock(), createBlock("li", {
                                key: `price-${index}`,
                                class: "d-flex justify-content-between"
                              }, [
                                createVNode("span", { class: "d-block mr-20" }, toDisplayString(price.label), 1),
                                createVNode("span", { class: "d-block" }, "- " + toDisplayString(formatCurrency(price.amount.value)), 1)
                              ]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "total-grp text-end" }, [
                            createVNode("span", { class: "total-label" }, toDisplayString(_ctx.$t("total")), 1),
                            createVNode("span", { class: "total-value col-7 d-inline-block" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
                          ]),
                          createVNode("ul", { class: "cost-list list-unstyled pl-0 m-0 pb-0" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(cartTotalTaxPrices), (price, index) => {
                              return openBlock(), createBlock("li", {
                                key: `tax-${index}`,
                                class: "d-flex justify-content-between"
                              }, [
                                createVNode("span", { class: "d-block mr-20" }, toDisplayString(price.label), 1),
                                price ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "d-block"
                                }, toDisplayString(formatCurrency(price.amount.value)), 1)) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode(_component_BButton, {
                          onClick: submitForm,
                          disabled: buttonClicked.value,
                          variant: "secondary",
                          class: "text-light w-100 text-uppercase checkout-btn"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("pay")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("h3", null, [
                    createTextVNode(toDisplayString(_ctx.$t("checkout_login_message")) + " ", 1),
                    createVNode(_component_router_link, { to: "/login" }, {
                      default: withCtx(() => [
                        createTextVNode(" Click Here... ")
                      ]),
                      _: 1
                    })
                  ])
                ]))
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Checkout-BnwRlJ2n.js.map
