import { vBToggle } from "bootstrap-vue-next/directives/BToggle";
import { BFormCheckbox } from "bootstrap-vue-next/components/BFormCheckbox";
import { BButton } from "bootstrap-vue-next/components/BButton";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BCollapse } from "bootstrap-vue-next/components/BCollapse";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BFormSelect, BFormSelectOption } from "bootstrap-vue-next/components/BFormSelect";
import { BFormGroup } from "bootstrap-vue-next/components/BFormGroup";
import { BFormRadio } from "bootstrap-vue-next/components/BFormRadio";
import { BRow, BCol, BContainer } from "bootstrap-vue-next/components/BContainer";
import { ref, reactive, computed, watch, onMounted, onUnmounted, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext, unref, createCommentVNode, withDirectives, withModifiers } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$4 } from "./Breadcrumbs-BN1xAQs-.js";
import { BFormInvalidFeedback } from "bootstrap-vue-next/components/BForm";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { C as CONFIG_JSON } from "../entry-server.js";
import { x as validateVatNumber, y as validatePostcode, w as checkEmailExist } from "./user-B9wxceAo.js";
import { useHead } from "@unhead/vue";
import { useGtm } from "@gtm-support/vue-gtm";
import { useRouter } from "vue-router";
import { u as useCartInfo } from "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BImg";
import "./products-Dsi6ZmTY.js";
import "axios";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/components/BBadge";
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@vue/shared";
import "@element-plus/icons-vue";
import "lodash-unified";
import "./BlockSimple-BHbXwFf2.js";
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
import "mobile-device-detect";
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAQCAYAAADj5tSrAAABwElEQVQ4jaXUS4iPYRTH8c+MPxGzkUuIWdsoxZCVRJSFnaxEcitFsnEpRVISG+Syci2ULBQLkaFmYuOys9A0CTEIY8h1OnX+9ar3nebNqaee9z3neb7P8zvnPC1t7UulncRG9W0Ad3AY98pWNwrzZdiOuzUwmzAHfbiNc9iCb2WQNrTiLXry34885VD2Bi+xFidwOQ8Z8nxqrouNF+IzpuMCPubox4wat3qEeRiDWxhdhHRiFl6nXLNzzERvDUjYOyzGFBwryrUH4zEOi9BescEH7BsmaBUeZI46GynTxAROwu+KxWNr3Kgbl7CzCVmfjkj4QVyvsdkvrMDfCv/PyE2jwjlci964UREbe3dh7v9CvuPxEP5nWNBa4ZyAU3iO+ylJlY3M4nmawB0YkbEPo1nLIC24iQ4cyCRew5IKyCFsxRmcxS7sTV/0TkdRroGshs35VEzDq/RF1Z3GkxJIdPdqXM3vLziSvReKTC5C1mAlpuIPvhZ8/VkpzSenaCFXMTYgIVfEvsD+IiT0izEK83ElAvJE67LUz5dAoruP5jyAId9FbGsGlFVXPIzLU554ct5jdwUgbAOOZ96iX/4BwCAYXmLet5SKoQAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAVCAYAAAAnzezqAAACWUlEQVRIicXW2atNcRQH8M/hGi+SWeHekEjGUB6QECEvHjxdys0TD8i/oBQepFCGkAwpSh4oxYv5hTK8SCgyXrPMtG5r63Qjbt1zrDrt/fvtvX/ru4bvd51S97q5sAmz8Ul1rBPOYF0NtmIZ5uFOlQAMxyl0DgBLMAb3q+Q87CnG4ko73K2y88Luhe8AUEL3/wCgNnzX5OJLXtdmfaJJeuMR4p0TONnGACJwBYCPmITNuIlRiOw8yOeN6IH3bQyi2Ulhw3AdO3ABW/AcGxJI37Z23hJAZOMZrmXqA8ybXL9Ex0oAqCm7f5Ji9AMjMA0vsBETElzFAHTIiI/hNfqk06tZ94t4V0kAtRnh4tz7mvuDUzQqJtEFgA8JYiU+515QcxcWplLWZHl2YgrG53uxtw91mJnroNi51Pt/AvAjGREa8C1rHwAGoj7fi0P7p0b0wiB8z/0uSdNir12ZtvzJmnUgpuFlzMmOL2xIXgsdqMuyPGxlho+iK/ZiKGbgMPbn/tmCht/LPpqK7diG9pic65iaPf/RcWjG7RS40JQjaMD5PKcxy/6rBKWyj6PjF5StgwnzWxn5qmRNQ66bMAvrcSkD2h1lKhrrbTbhoZjRZSwonn9LkJGxpZiI1Vj+h7IEpddkX7zJkf8qnzXkBFYMo/psqqZMVccWJSmslGBCnm/hYFL0dxZ6Mhqn8TgDiTOPo1/2XLeQ/2jCPViE6Xnw3ywAFlSN+xCxlhYZi/pH2oNJBzAyB140YQjdjZiyxX/C4Pa4LEVbWYCIDAUdI+pQ1PiF8wHNM4YVPwGD7YpvuNqfXQAAAABJRU5ErkJggg==";
const _sfc_main$2 = {
  __name: "NotLoggedInCheckoutDetails",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { t } = useI18n();
    const isCompany = ref(false);
    const isInvoiceCompany = ref(false);
    const isValidVatNumber = ref(false);
    const showFullAddress = ref(false);
    const showFullInvoiceAddress = ref(false);
    const showVatMessage = ref("");
    ref(false);
    const addressTimer = ref(null);
    const emailReg = ref(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    );
    const showManual = ref(true);
    const typeTimer = ref(null);
    const foundAddresses = ref([]);
    const foundAddress = ref("");
    const foundInvoiceAddresses = ref([]);
    const foundInvoiceAddress = ref("");
    const emailExists = ref(false);
    const selectedAddress = ref(null);
    const selectedInvoiceAddress = ref(null);
    const localStorageData = reactive({});
    const addressState = reactive({});
    const form = reactive({
      email: "",
      emailState: null,
      emailError: "",
      emailTimer: null,
      password: "",
      passwordState: null,
      passwordError: "",
      passwordTimer: null,
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
        additionDisabled: false,
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
    const checkAddressData = computed(() => {
      return `${form.company}|${form.taxvat}|${form.firstname}|${form.lastname}|${form.address.country_code}|${form.address.city}|${form.address.streetDisplay}|${form.address.postcode}|${form.address.house_number}|${form.address.addition}|${form.address.telephone}||${form.address.city}`;
    });
    const countries = computed(() => store.getters["user/getCountries"]);
    const country = computed(() => form.address.country_code);
    const invoiceCountry = computed(() => form.invoice.address.country_code);
    const postcodeHouseNumber = computed(() => `${form.address.postcode}|${form.address.house_number}`);
    const invoicePostcodeHouseNumber = computed(
      () => `${form.invoice.address.postcode}|${form.invoice.address.house_number}`
    );
    const vatNumber = computed(() => form.taxvat);
    const invoiceVatNumber = computed(() => form.invoice.taxvat);
    const Email = computed(() => form.email);
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
      updateLocalStorage({
        email: form.email,
        emailState: form.emailState
      });
      store.dispatch("cart/addCartEmail", {
        email: form.email,
        store
      });
      return true;
    };
    const doLogin = async () => {
      const loginOk = await store.dispatch("user/login", {
        username: form.email,
        password: form.password,
        store
      });
      if (loginOk === true) {
        clearLocalStorage();
        store.commit("cart/setStoreValidation", {
          // For clearing previously added address errorField on login
          address: []
        });
        const msg = {
          type: "success",
          title: t("login_success"),
          text: t("you_are_logged_in")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      }
    };
    const validateVAT = async (event) => {
      if (isCompany.value) {
        if (form.taxvat !== "") {
          if (form.taxvat.substring(0, 2).toUpperCase() === form.address.country_code) {
            const retval = await validateVatNumber(form.taxvat);
            if (retval.valid === "true") {
              isValidVatNumber.value = true;
              form.taxvatState = true;
              updateLocalStorage({ taxvat: form.taxvat, taxvatState: form.taxvatState });
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
      } else {
        form.taxvatState = null;
      }
      validateInput(event, form.taxvatState);
    };
    const validateAddress = async () => {
      let isOk = true;
      validatePostCode();
      validateHouseNumber();
      validateCity();
      validateStreet();
      validatePhone();
      if (isCompany.value) {
        if (!form.companyState) {
          isOk = false;
        }
        addressState.companyState = form.companyState;
      }
      if (!form.firstnameState) {
        isOk = false;
      }
      addressState.firstnameState = form.firstnameState;
      if (!form.lastnameState) {
        isOk = false;
      }
      addressState.lastnameState = form.lastnameState;
      if (!form.address) {
        isOk = false;
        addressState.address = !!form.address;
      } else {
        if (!form.address.country_code || form.address.country_code.trim() === "") {
          addressState.country_code = false;
          isOk = false;
        } else {
          addressState.country_code = true;
        }
        if (!form.address.postcodeState) {
          isOk = false;
        }
        addressState.postcodeState = form.address.postcodeState;
        if (!showFullAddress.value && !form.address.streetDisplayState) {
          isOk = false;
        }
        addressState.streetDisplayState = form.address.streetDisplayState;
        if (!form.address.house_numberState) {
          isOk = false;
        }
        addressState.house_numberState = form.address.house_numberState;
        if (!form.address.cityState) {
          isOk = false;
        }
        addressState.cityState = form.address.cityState;
        if (!form.address.telephoneState) {
          isOk = false;
        }
        addressState.telephoneState = form.address.telephoneState;
      }
      addressState.isOk = isOk;
      if (isOk) {
        const address = {
          firstname: form.firstname,
          lastname: form.lastname,
          postcode: form.address.postcode,
          city: form.address.city,
          telephone: form.address.telephone,
          street: `${form.address.streetDisplay} ${form.address.house_number}${form.address.addition}`,
          country_code: form.address.country_code
        };
        if (isCompany.value) {
          address.company = form.company;
          if (form.taxvat !== "") {
            address.vat_id = form.taxvat;
          }
        }
        await store.dispatch("cart/addShippingAddress", { address, reloadCart: false, store });
        if (form.address.default_billing) {
          await store.dispatch("cart/addBillingAddress", { address, reloadCart: true, store });
        }
      } else {
        store.commit("cart/setShippingMethods", []);
      }
    };
    const validateInvoiceAddress = async () => {
      let isOk = true;
      if (isInvoiceCompany.value && !form.invoice.companyState) {
        isOk = false;
      }
      if (!form.invoice.firstnameState) {
        isOk = false;
      }
      if (form.invoice.lastname.trim() === "") {
        isOk = false;
      }
      if (form.invoice.address.country_code.trim() === "") {
        isOk = false;
      }
      if (form.invoice.address.postcode.trim() === "") {
        isOk = false;
      }
      if (form.invoice.address.streetDisplay.trim() === "") {
        isOk = false;
      }
      if (form.invoice.address.house_number.trim() === "") {
        isOk = false;
      }
      if (form.invoice.address.city.trim() === "") {
        isOk = false;
      }
      if (form.invoice.address.telephone.trim() === "") {
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
        if (form.invoice.isCompany && form.invoice.taxvat !== "") {
          address.vat_id = form.invoice.taxvat;
        }
        await store.dispatch("cart/addBillingAddress", { address, reloadCart: true, store });
      } else {
        store.commit("cart/setShippingMethods", []);
      }
    };
    const validateCompany = (event) => {
      if (isCompany.value === true) {
        if (form.company.trim() === "") {
          form.companyState = false;
          form.companyError = t("company_name_required");
        } else {
          form.companyState = true;
          updateLocalStorage({
            company: form.company,
            companyState: form.companyState
          });
        }
      } else {
        form.companyState = null;
      }
      validateInput(event, form.companyState);
    };
    const validateFirstname = (event) => {
      if (form.firstname.trim() === "") {
        form.firstnameState = false;
        form.firstnameError = t("firstname_required");
      } else {
        form.firstnameState = true;
        updateLocalStorage({
          firstname: form.firstname,
          firstnameState: form.firstnameState
        });
        if (form.address.default_billing) {
          updateLocalStorage({
            invoiceFirstname: form.firstname,
            invoiceFirstnameState: form.firstnameState
          });
        }
      }
      validateInput(event, form.firstnameState);
    };
    const validateLastname = (event) => {
      if (form.lastname.trim() === "") {
        form.lastnameState = false;
        form.lastnameError = t("lastname_required");
      } else {
        form.lastnameState = true;
        updateLocalStorage({
          lastname: form.lastname,
          lastnameState: form.lastnameState
        });
        if (form.address.default_billing) {
          updateLocalStorage({
            invoiceFirstname: form.lastname,
            invoiceFirstnameState: form.lastnameState
          });
        }
      }
      validateInput(event, form.lastnameState);
    };
    const validateCOCNumber = (event) => {
      if (isCompany.value === true) {
        if (form.coc_number.trim() === "") {
          form.coc_numberState = false;
          form.coc_numberError = t("coc_number_required");
        } else {
          form.coc_numberState = true;
          updateLocalStorage({
            coc: form.coc_number,
            cocState: form.coc_numberState
          });
          if (form.address.default_billing) {
            updateLocalStorage({
              invoiceCoc: form.coc_number,
              invoiceCocState: form.coc_numberState
            });
          }
        }
      } else {
        form.coc_numberState = null;
      }
      validateInput(event, form.coc_numberState);
    };
    const validateStreet = (event) => {
      if (form.address.streetDisplay.trim() === "") {
        form.address.streetDisplayState = false;
        form.address.streetDisplayError = t("street_required");
      } else {
        form.address.streetDisplayState = true;
        updateLocalStorage({
          streetDisplay: form.address.streetDisplay,
          streetDisplayState: form.address.streetDisplayState
        });
        if (form.address.default_billing) {
          updateLocalStorage({ invoiceAddress: form.address });
        }
      }
      validateInput(event, form.address.streetDisplayState);
    };
    const validateHouseNumber = (event) => {
      if (form.address.house_number.trim() === "") {
        form.address.house_numberState = false;
        form.address.house_numberError = t("house_number_required");
      } else {
        form.address.house_numberState = true;
        updateLocalStorage({
          house_number: form.address.house_number,
          house_numberState: form.address.house_numberState
        });
        if (form.address.default_billing) {
          updateLocalStorage({ invoiceAddress: form.address });
        }
      }
      validateInput(event, form.address.house_numberState);
    };
    const validateCity = (event) => {
      if (form.address.city.trim() === "") {
        form.address.cityState = false;
        form.address.cityError = t("city_required");
      } else {
        form.address.cityState = true;
        updateLocalStorage({
          city: form.address.city,
          cityState: form.address.cityState
        });
        if (form.address.default_billing) {
          updateLocalStorage({ invoiceAddress: form.address });
        }
      }
      validateInput(event, form.address.cityState);
    };
    const validatePhone = (event) => {
      if (form.address.telephone.trim() === "") {
        form.address.telephoneState = false;
        form.address.telephoneError = t("phone_required");
      } else {
        form.address.telephoneState = true;
        updateLocalStorage({
          telephone: form.address.telephone,
          telephoneState: form.address.telephoneState
        });
        if (form.address.default_billing) {
          updateLocalStorage({ invoiceAddress: form.address });
        }
      }
      validateInput(event, form.address.telephoneState);
    };
    async function validatePostcodeHouseNumber() {
      const list = await validatePostcode(form.address.postcode, form.address.house_number);
      if (!showFullAddress.value && list) {
        if (list.length === 1) {
          let address = `${list[0].street} ${list[0].number}`;
          form.address.streetDisplay = list[0].street;
          if (list[0].letter != null) {
            form.address.addition = list[0].letter;
            address += list[0].letter;
          } else {
            form.address.addition = "";
          }
          address = `${address}, ${list[0].postcode} ${list[0].city}`;
          form.address.city = list[0].city;
          foundAddress.value = address;
          form.address.postcodeState = true;
          form.address.house_numberState = true;
          form.address.cityState = true;
          form.address.streetDisplayState = true;
          updateLocalStorage({
            postcode: form.address.postcode,
            postcodeState: form.address.postcodeState,
            city: form.address.city,
            cityState: form.address.cityState,
            house_number: form.address.house_number,
            house_numberState: form.address.house_numberState
          });
          validatePostCode();
          validateHouseNumber();
        } else if (list.length === 0) {
          foundAddress.value = t("postcode_not_found");
          form.address.postcodeState = false;
          form.address.house_numberState = false;
          const addressPostcodeRef = document.querySelector('[data-ref="addressPostcode"]');
          const addressHouseNumberRef = document.querySelector('[data-ref="addressHouseNumber"]');
          if (addressPostcodeRef) addressPostcodeRef.parentElement.classList.remove("valid");
          if (addressHouseNumberRef) addressHouseNumberRef.parentElement.classList.remove("valid");
        } else {
          foundAddresses.value = list.map((item) => {
            let address = `${item.street} ${item.number}`;
            if (item.letter != null) address += `-${item.letter}`;
            if (item.addition != null) address += (item.letter == null ? "-" : "") + item.addition;
            address = `${address}, ${item.postcode} ${item.city}`;
            item.text = address;
            return item;
          });
        }
      } else {
        if (form.address.postcode === "") {
          form.address.postcodeState = false;
          form.address.postcodeError = t("postcode_required");
        } else {
          form.address.postcodeState = true;
          updateLocalStorage({
            postcode: form.address.postcode,
            postcodeState: form.address.postcodeState
          });
          if (form.address.default_billing) {
            updateLocalStorage({ invoiceAddress: form.address });
          }
        }
      }
    }
    const validatePostCode = (event) => {
      const nl = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
      const de = /(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})/g;
      const be = /^[1-9][0-9]{3}$/g;
      if (form.address.country_code === "NL" && nl.test(form.address.postcode)) {
        form.address.postcodeState = true;
      } else if (form.address.country_code === "BE" && be.test(form.address.postcode)) {
        form.address.postcodeState = true;
      } else if (form.address.country_code === "DE" && de.test(form.address.postcode)) {
        form.address.postcodeState = true;
      } else {
        form.address.postcodeState = false;
        form.address.postcodeError = t("postcode_required");
      }
      updateLocalStorage({
        postcode: form.address.postcode,
        postcodeState: form.address.postcodeState
      });
      validateInput(event, form.address.postcodeState);
    };
    async function validateInvoiceVAT(event) {
      if (isInvoiceCompany.value) {
        if (form.invoice.taxvat !== "") {
          if (form.invoice.taxvat.substring(0, 2).toUpperCase() === form.invoice.address.country_code) {
            const retval = await validateVatNumber(form.invoice.taxvat);
            if (retval.valid === "true") {
              form.invoice.taxvatState = true;
              updateLocalStorage({
                invoiceVat: form.invoice.taxvat,
                invoiceVatState: form.invoice.taxvatState
              });
            } else {
              form.invoice.taxvatState = false;
              form.invoice.taxvatError = t("taxvat_invalid");
            }
          } else {
            form.invoice.taxvatState = false;
            form.invoice.taxvatError = t("taxvat_wrong_country");
          }
        } else {
          form.taxvatState = null;
          form.taxvatError = "";
        }
      } else {
        form.invoice.taxvatState = null;
      }
      validateInput(event, form.invoice.taxvatState);
    }
    function validateInvoiceCompany(event) {
      if (isInvoiceCompany.value) {
        if (form.invoice.company.trim() === "") {
          form.invoice.companyState = false;
          form.invoice.companyError = t("company_name_required");
        } else {
          form.invoice.companyState = true;
          updateLocalStorage({
            invoiceFirstName: form.invoice.company,
            invoiceFirstNameState: form.invoice.companyState
          });
        }
      } else {
        form.invoice.companyState = null;
      }
      validateInput(event, form.invoice.companyState);
    }
    function validateInvoiceFirstname(event) {
      if (form.invoice.firstname.trim() === "") {
        form.invoice.firstnameState = false;
        form.invoice.firstnameError = t("firstname_required");
      } else {
        form.invoice.firstnameState = true;
        updateLocalStorage({
          invoiceFirstName: form.invoice.firstname,
          invoiceFirstNameState: form.invoice.firstnameState
        });
      }
      validateInput(event, form.invoice.firstnameState);
    }
    function validateInvoiceLastname(event) {
      if (form.invoice.lastname.trim() === "") {
        form.invoice.lastnameState = false;
        form.invoice.lastnameError = t("lastname_required");
      } else {
        form.invoice.lastnameState = true;
        updateLocalStorage({
          invoiceLastName: form.invoice.lastname,
          invoiceLastnameState: form.invoice.lastnameState
        });
      }
      validateInput(event, form.invoice.lastnameState);
    }
    function validateInvoiceCOCNumber(event) {
      if (isInvoiceCompany.value) {
        if (form.invoice.coc_number.trim() === "") {
          form.invoice.coc_numberState = false;
          form.invoice.coc_numberError = t("coc_number_required");
        } else {
          form.invoice.coc_numberState = true;
          updateLocalStorage({
            invoiceCoc: form.invoice.coc_number,
            invoiceCocState: form.invoice.coc_numberState
          });
        }
      } else {
        form.invoice.coc_numberState = null;
      }
      validateInput(event, form.invoice.coc_numberState);
    }
    function validateInvoiceStreet(event) {
      if (form.invoice.address.streetDisplay.trim() === "") {
        form.invoice.address.streetDisplayState = false;
        form.invoice.address.streetDisplayError = t("street_required");
      } else {
        form.invoice.address.streetDisplayState = true;
        updateLocalStorage({ invoiceAddress: form.invoice.address });
      }
      validateInput(event, form.invoice.address.streetDisplayState);
    }
    function validateInvoiceHouseNumber(event) {
      if (form.invoice.address.house_number.trim() === "") {
        form.invoice.address.house_numberState = false;
        form.invoice.address.house_numberError = t("house_number_required");
      } else {
        form.invoice.address.house_numberState = true;
        updateLocalStorage({ invoiceAddress: form.invoice.address });
      }
      validateInput(event, form.invoice.address.house_numberState);
    }
    function validateInvoiceCity(event) {
      if (form.invoice.address.city.trim() === "") {
        form.invoice.address.cityState = false;
        form.invoice.address.cityError = t("city_required");
      } else {
        form.invoice.address.cityState = true;
        updateLocalStorage({ invoiceAddress: form.invoice.address });
      }
      validateInput(event, form.invoice.address.cityState);
    }
    function validateInvoicePhone(event) {
      if (form.invoice.address.telephone.trim() === "") {
        form.invoice.address.telephoneState = false;
        form.invoice.address.telephoneError = t("phone_required");
      } else {
        form.invoice.address.telephoneState = true;
        updateLocalStorage({ invoiceAddress: form.invoice.address });
      }
      validateInput(event, form.invoice.address.telephoneState);
    }
    async function validateInvoicePostcodeHouseNumber() {
      if (showFullAddress.value === false) {
        const list = await validatePostCode(
          form.invoice.address.postcode,
          form.invoice.address.house_number
        );
        if (list.length === 1) {
          let address = list[0].street + " " + list[0].number;
          form.invoice.address.streetDisplay = list[0].street;
          if (list[0].letter !== null) {
            form.invoice.address.addition = list[0].letter;
            address = address + list[0].letter;
          } else {
            form.invoice.addition = "";
          }
          address = address + ", " + list[0].postcode + " " + list[0].city;
          form.invoice.address.city = list[0].city;
          form.invoice.address.cityState = true;
          foundInvoiceAddress.value = address;
          validateInvoicePostcode();
        } else if (list.length === 0) {
          foundInvoiceAddress.value = t("postcode_not_found");
        } else {
          list.forEach(function(item) {
            let address = item.street + " " + item.number;
            if (item.letter !== null) {
              address = address + item.letter;
            }
            address = address + ", " + item.postcode + " " + item.city;
            item.text = address;
            foundInvoiceAddresses.value.push(item);
          });
        }
      } else {
        if (form.invoice.address.postcode.trim() === "") {
          form.invoice.address.postcodeState = false;
          form.invoice.address.postcodeError = t("postcode_required");
        } else {
          form.invoice.address.postcodeState = true;
          updateLocalStorage({
            invoiceAddress: form.invoice.address
          });
        }
      }
    }
    function validateInvoicePostcode(event) {
      const nl = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
      const de = /(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})/g;
      const be = /^[1-9][0-9]{3}$/g;
      if (form.invoice.address.country_code === "NL" && nl.test(form.invoice.address.postcode)) {
        form.invoice.address.postcodeState = true;
        updateLocalStorage({
          invoiceAddress: form.invoice.address
        });
      } else if (form.invoice.address.country_code === "BE" && be.test(form.invoice.address.postcode)) {
        form.invoice.address.postcodeState = true;
        updateLocalStorage({
          invoiceAddress: form.invoice.address
        });
      } else if (form.invoice.address.country_code === "DE" && de.test(form.invoice.address.postcode)) {
        form.invoice.address.postcodeState = true;
        updateLocalStorage({
          invoiceAddress: form.invoice.address
        });
      } else {
        form.invoice.address.postcodeState = false;
        form.invoice.address.postcodeError = t("postcode_invalid");
      }
      validateInput(event, form.invoice.address.postcodeState);
    }
    function validateInput(event, isValid) {
      if (event) {
        if (isValid) {
          event.target.parentElement.classList.add("valid");
        } else {
          event.target.parentElement.classList.remove("valid");
        }
      }
    }
    function clearLocalStorage() {
      localStorage.removeItem("checkoutAddress");
    }
    function checkChildFields(child, name, formSection, skipFields, errorFields) {
      if (child === "companyState" && name === "address" && !isCompany.value) return;
      if (child === "companyState" && name === "invoice" && !isInvoiceCompany.value) return;
      if (child.includes("State") && (formSection[child] === false || formSection[child] === null)) {
        if (child === "companyState" && name === "address" && !isCompany.value) return;
        if (child === "companyState" && name === "invoice" && !isInvoiceCompany.value) return;
        if (skipFields.includes(child.replace("State", ""))) return;
        let fieldName = child;
        switch (name) {
          case "invoice":
            fieldName = `invoice_${child}`;
            break;
          case "address":
            fieldName = `shipping_${child}`;
            break;
        }
        if (fieldName.startsWith("shipping_") && validationFunctionMap[fieldName.replace("shipping_", "").replace("State", "")]) {
          validationFunctionMap[fieldName.replace("shipping_", "").replace("State", "")]();
        }
        if (fieldName.startsWith("invoice_") && validationFunctionMap[fieldName.replace("State", "")]) {
          validationFunctionMap[fieldName.replace("State", "")]();
        }
        errorFields.push(t(fieldName.replace("State", "")));
      }
    }
    function checkFields() {
      const errorFields = [];
      const skipFields = ["taxvat", "streetDisplay", "password", "password_confirm", "coc_number"];
      Object.keys(form).forEach((name) => {
        const formSection = form[name];
        if (typeof formSection === "object" && formSection !== null && !Array.isArray(formSection)) {
          if (name === "invoice" && form.address.default_billing) return;
          if (name === "address" && isCompany.value) {
            validateCompany();
          }
          if (name === "invoice") {
            if (showFullInvoiceAddress.value) {
              validateInvoiceStreet();
            }
          }
          Object.keys(formSection).forEach((child) => {
            if (name === "invoice" && child === "address") {
              Object.keys(form[name][child]).forEach((subChild) => {
                checkChildFields(subChild, name, form[name][child], skipFields, errorFields);
              });
            } else {
              checkChildFields(child, name, formSection, skipFields, errorFields);
            }
          });
        } else if (name.includes("State") && (formSection === false || formSection === null)) {
          if (name === "companyState" && (!isCompany.value || !isInvoiceCompany.value)) return;
          if ((name === "passwordState" || name === "password_confirmState") && (!form.emailState || !emailExists.value))
            return;
          if (skipFields.includes(name.replace("State", ""))) return;
          if (validationFunctionMap[name.replace("State", "")]) {
            validationFunctionMap[name.replace("State", "")]();
          }
          errorFields.push(t(name.replace("State", "")));
        }
      });
      store.commit("cart/setStoreValidation", {
        address: errorFields.length > 0 ? errorFields : []
      });
    }
    function updateLocalStorage(data) {
      Object.assign(localStorageData, data);
      localStorage.setItem("checkoutAddress", JSON.stringify(localStorageData));
    }
    const validationFunctionMap = {
      email: validateEmail,
      company: validateCompany,
      coc_number: validateCOCNumber,
      taxvat: validateVAT,
      firstname: validateFirstname,
      lastname: validateLastname,
      postcode: validatePostCode,
      streetDisplay: validateStreet,
      house_number: validateHouseNumber,
      city: validateCity,
      telephone: validatePhone,
      invoice_company: validateInvoiceCompany,
      invoice_coc_number: validateInvoiceCOCNumber,
      invoice_taxvat: validateInvoiceVAT,
      invoice_firstname: validateInvoiceFirstname,
      invoice_lastname: validateInvoiceLastname,
      invoice_postcode: validateInvoicePostcode,
      invoice_streetDisplay: validateInvoiceStreet,
      invoice_house_number: validateInvoiceHouseNumber,
      invoice_city: validateInvoiceCity,
      invoice_telephone: validateInvoicePhone
    };
    watch(checkAddressData, () => {
      if (addressTimer.value !== null) {
        clearTimeout(addressTimer.value);
      }
      addressTimer.value = setTimeout(() => {
        validateAddress();
      }, 1e3);
    });
    watch(country, () => {
      {
        if (country.value) {
          showFullAddress.value = !CONFIG_JSON.postcode_validation.countries.includes(country.value);
        }
      }
      if (form.address.postcode.length > 0) {
        validatePostCode();
      }
    });
    watch(
      () => form.address,
      () => {
        if (form.address.addressTimer !== null) {
          clearTimeout(form.address.addressTimer);
        }
        form.address.addressTimer = setTimeout(() => {
          validateAddress();
        }, 1e3);
      }
    );
    watch(
      () => form.invoice.address,
      () => {
        if (form.invoice.address.invoiceAddressTimer !== null) {
          clearTimeout(form.invoice.address.invoiceAddressTimer);
        }
        form.invoice.address.invoiceAddressTimer = setTimeout(() => {
          validateInvoiceAddress();
        }, 1e3);
      }
    );
    watch(invoiceCountry, () => {
      {
        showFullInvoiceAddress.value = !CONFIG_JSON.postcode_validation.countries.includes(
          invoiceCountry.value
        );
      }
      if (form.invoice.address.postcode.length > 0) {
        validateInvoicePostcode();
      }
    });
    watch(vatNumber, () => {
      {
        if (form.taxvatTimer !== null) {
          clearTimeout(form.taxvatTimer);
        }
        form.taxvatTimer = setTimeout(() => {
          validateVAT();
        }, 1e3);
      }
    });
    watch(invoiceVatNumber, () => {
      {
        if (form.invoice.taxvatTimer !== null) {
          clearTimeout(form.invoice.taxvatTimer);
        }
        form.invoice.taxvatTimer = setTimeout(() => {
          validateInvoiceVAT();
        }, 1e3);
      }
    });
    watch(postcodeHouseNumber, (newVal) => {
      if (!showFullAddress.value) {
        if (typeTimer.value !== null) {
          clearTimeout(typeTimer.value);
        }
        foundAddresses.value = [];
        if (newVal) {
          const [newPostcode, newHouseNumber] = newVal.split("|");
          if (newPostcode && newHouseNumber) {
            typeTimer.value = setTimeout(() => {
              validatePostcodeHouseNumber();
            }, 2e3);
          }
        }
      }
    });
    watch(invoicePostcodeHouseNumber, (newVal) => {
      if (!showFullAddress.value) {
        if (typeTimer.value !== null) {
          clearTimeout(typeTimer.value);
        }
        foundInvoiceAddresses.value = [];
        if (newVal) {
          const [newPostcode, newHouseNumber] = newVal.split("|");
          if (newPostcode && newHouseNumber) {
            typeTimer.value = setTimeout(() => {
              validateInvoicePostcodeHouseNumber();
            }, 2e3);
          }
        }
      }
    });
    watch(selectedAddress, async (newVal) => {
      if (newVal !== null) {
        form.address.streetDisplay = foundAddresses.value[newVal].street;
        let addition = foundAddresses.value[newVal].letter || "";
        if (foundAddresses.value[newVal].addition) {
          addition += addition && !isNaN(foundAddresses.value[newVal].letter) ? `-${foundAddresses.value[newVal].addition}` : foundAddresses.value[newVal].addition;
        }
        form.address.addition = addition;
        form.address.city = foundAddresses.value[newVal].city;
        form.address.additionDisabled = true;
        await validateAddress();
      }
    });
    watch(selectedInvoiceAddress, (newVal) => {
      if (newVal !== null) {
        form.invoice.address.streetDisplay = foundInvoiceAddresses.value[newVal].street;
        form.invoice.address.addition = foundInvoiceAddresses.value[newVal].letter || "";
        form.invoice.address.city = foundInvoiceAddresses.value[newVal].city;
        validateInvoicePostcode();
      }
    });
    watch(Email, () => {
      if (form.emailTimer !== null) {
        clearTimeout(form.emailTimer);
      }
      form.emailTimer = setTimeout(() => {
        validateEmail();
      }, 1e3);
    });
    watch(showFullAddress, () => {
      validateCity();
      if (showFullAddress.value) {
        validatePostCode();
        validateHouseNumber();
        validateCity();
      } else {
        validatePostcodeHouseNumber();
      }
      validatePhone();
      validateAddress();
    });
    watch(showFullInvoiceAddress, () => {
      validateInvoiceCity();
      if (showFullInvoiceAddress.value) {
        validateInvoicePostcode();
        validateInvoiceHouseNumber();
        validateInvoiceCity();
      } else {
        validateInvoicePostcodeHouseNumber();
      }
      validateInvoicePhone();
      validateInvoiceAddress();
    });
    onMounted(() => {
      {
        form.address.country_code = CONFIG_JSON.customers.defaultCountry;
        form.invoice.address.country_code = CONFIG_JSON.customers.defaultCountry;
      }
      localStorage.removeItem("checkoutAddress");
      window.addEventListener("checkFields", checkFields);
    });
    onUnmounted(() => {
      window.removeEventListener("checkFields", checkFields);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BFormGroup = BFormGroup;
      const _component_BFormInput = BFormInput;
      const _component_BFormInvalidFeedback = BFormInvalidFeedback;
      const _component_router_link = resolveComponent("router-link");
      const _component_BButton = BButton;
      const _component_BFormCheckbox = BFormCheckbox;
      const _component_BFormSelect = BFormSelect;
      const _component_BRow = BRow;
      const _component_BCol = BCol;
      const _component_BFormRadio = BFormRadio;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "notLoggedInCheckoutDetails" }, _attrs))}><div class="group pb-3"><span class="group-title d-block mb-20"><i class="lnr lnr-user me-8"></i>${ssrInterpolate(_ctx.$t("my_information"))}</span>`);
      _push(ssrRenderComponent(_component_BFormGroup, {
        label: _ctx.$t("form_email") + "*",
        "label-for": "email",
        description: "De bevestiging wordt naar dit e-mailadres verzonden."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BFormInput, {
              id: "email",
              modelValue: form.email,
              "onUpdate:modelValue": ($event) => form.email = $event,
              type: "text",
              state: form.emailState,
              "aria-describedby": "email-feedback",
              autocomplete: "off"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "email-feedback" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(form.emailError)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(form.emailError), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BFormInput, {
                id: "email",
                modelValue: form.email,
                "onUpdate:modelValue": ($event) => form.email = $event,
                type: "text",
                state: form.emailState,
                "aria-describedby": "email-feedback",
                autocomplete: "off"
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
      }, _parent));
      if (emailExists.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BFormGroup, {
          class: "account-inputs",
          id: "password-group",
          label: _ctx.$t("form_password") + "*",
          "label-for": "password"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                id: "password",
                modelValue: form.password,
                "onUpdate:modelValue": ($event) => form.password = $event,
                type: "password",
                "aria-describedby": "password-feedback",
                autocomplete: "off"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "password-feedback" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(form.passwordError)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(form.passwordError), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BFormInput, {
                  id: "password",
                  modelValue: form.password,
                  "onUpdate:modelValue": ($event) => form.password = $event,
                  type: "password",
                  "aria-describedby": "password-feedback",
                  autocomplete: "off"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
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
        }, _parent));
        _push(`<div class="d-flex justify-content-between align-items-center">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/forgot-password",
          class: "font-weight-normal link-underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("password_forgot"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("password_forgot")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BButton, {
          type: "button",
          variant: "info",
          onClick: doLogin,
          class: "text-white ml-20 form-submit-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("login"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("login")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="group"><span class="group-title d-block mb-25"><i class="lnr lnr-home me-10"></i>${ssrInterpolate(_ctx.$t("shipping_address"))}</span>`);
      _push(ssrRenderComponent(_component_BFormCheckbox, {
        id: "checkbox-1",
        modelValue: isCompany.value,
        "onUpdate:modelValue": ($event) => isCompany.value = $event,
        name: "checkbox-1",
        class: "pl-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("form_are_you_a_company"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isCompany.value) {
        _push(`<div class="short-form">`);
        _push(ssrRenderComponent(_component_BFormGroup, {
          class: "account-inputs",
          id: "company-group",
          label: _ctx.$t("form_company_name") + "*",
          "label-for": "company"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                id: "company",
                modelValue: form.company,
                "onUpdate:modelValue": ($event) => form.company = $event,
                type: "text",
                onBlur: validateCompany,
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
                  id: "company",
                  modelValue: form.company,
                  "onUpdate:modelValue": ($event) => form.company = $event,
                  type: "text",
                  onBlur: validateCompany,
                  state: form.companyState,
                  "aria-describedby": "company-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
          id: "taxvat-group",
          label: _ctx.$t("form_vat_number"),
          "label-for": "taxvat"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                id: "taxvat",
                modelValue: form.taxvat,
                "onUpdate:modelValue": ($event) => form.taxvat = $event,
                type: "text",
                state: form.taxvatState,
                onBlur: validateVAT,
                "aria-describedby": "taxvat-feedback"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "taxvat-feedback" }, {
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
                  id: "taxvat",
                  modelValue: form.taxvat,
                  "onUpdate:modelValue": ($event) => form.taxvat = $event,
                  type: "text",
                  state: form.taxvatState,
                  onBlur: validateVAT,
                  "aria-describedby": "taxvat-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                createVNode(_component_BFormInvalidFeedback, { id: "taxvat-feedback" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(form.taxvatError), 1)
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
      _push(ssrRenderComponent(_component_BFormGroup, {
        class: "account-inputs",
        id: "first_name-group",
        label: _ctx.$t("form_first_name") + "*",
        "label-for": "first_name"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BFormInput, {
              id: "first_name",
              modelValue: form.firstname,
              "onUpdate:modelValue": ($event) => form.firstname = $event,
              type: "text",
              onBlur: validateFirstname,
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
                id: "first_name",
                modelValue: form.firstname,
                "onUpdate:modelValue": ($event) => form.firstname = $event,
                type: "text",
                onBlur: validateFirstname,
                state: form.firstnameState,
                "aria-describedby": "firstname-feedback"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
        id: "last_name-group",
        label: _ctx.$t("form_last_name") + "*",
        "label-for": "last_name"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BFormInput, {
              id: "last_name",
              modelValue: form.lastname,
              "onUpdate:modelValue": ($event) => form.lastname = $event,
              type: "text",
              onBlur: validateLastname,
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
                id: "last_name",
                modelValue: form.lastname,
                "onUpdate:modelValue": ($event) => form.lastname = $event,
                type: "text",
                onBlur: validateLastname,
                state: form.lastnameState,
                "aria-describedby": "lastname-feedback"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
        id: "country-group",
        label: _ctx.$t("form_country") + "*",
        "label-for": "country"
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
          id: "postcode-group",
          label: _ctx.$t("form_postal_code") + "*",
          "label-for": "postcode"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                id: "postcode",
                modelValue: form.address.postcode,
                "onUpdate:modelValue": ($event) => form.address.postcode = $event,
                type: "text",
                state: form.address.postcodeState,
                "aria-describedby": "address.postcode-feedback",
                onBlur: validatePostCode,
                ref: "addressPostcode"
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
                  id: "postcode",
                  modelValue: form.address.postcode,
                  "onUpdate:modelValue": ($event) => form.address.postcode = $event,
                  type: "text",
                  state: form.address.postcodeState,
                  "aria-describedby": "address.postcode-feedback",
                  onBlur: validatePostCode,
                  ref: "addressPostcode"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
        id: "street-group",
        label: _ctx.$t("form_street") + "*",
        "label-for": "street"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BFormInput, {
              id: "street",
              modelValue: form.address.streetDisplay,
              "onUpdate:modelValue": ($event) => form.address.streetDisplay = $event,
              type: "text",
              onBlur: validateStreet,
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
                id: "street",
                modelValue: form.address.streetDisplay,
                "onUpdate:modelValue": ($event) => form.address.streetDisplay = $event,
                type: "text",
                onBlur: validateStreet,
                state: form.address.streetDisplayState,
                "aria-describedby": "address.streetDisplay-feedback"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
                    id: "house_number-group",
                    label: _ctx.$t("form_house_number") + "*",
                    "label-for": "house_number"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormInput, {
                          id: "house_number",
                          modelValue: form.address.house_number,
                          "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                          type: "text",
                          onBlur: validateHouseNumber,
                          state: form.address.house_numberState,
                          "aria-describedby": "address.house_number-feedback",
                          ref: "addressHouseNumber"
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
                            id: "house_number",
                            modelValue: form.address.house_number,
                            "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                            type: "text",
                            onBlur: validateHouseNumber,
                            state: form.address.house_numberState,
                            "aria-describedby": "address.house_number-feedback",
                            ref: "addressHouseNumber"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
                      id: "house_number-group",
                      label: _ctx.$t("form_house_number") + "*",
                      "label-for": "house_number"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "house_number",
                          modelValue: form.address.house_number,
                          "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                          type: "text",
                          onBlur: validateHouseNumber,
                          state: form.address.house_numberState,
                          "aria-describedby": "address.house_number-feedback",
                          ref: "addressHouseNumber"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.address.house_numberError), 1)
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
            _push2(ssrRenderComponent(_component_BCol, {
              sm: "6",
              class: "third"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "addition-group",
                    label: _ctx.$t("form_addition"),
                    "label-for": "addition"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BFormInput, {
                          id: "addition",
                          modelValue: form.address.addition,
                          "onUpdate:modelValue": ($event) => form.address.addition = $event,
                          type: "text",
                          readonly: form.address.additionDisabled
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BFormInput, {
                            id: "addition",
                            modelValue: form.address.addition,
                            "onUpdate:modelValue": ($event) => form.address.addition = $event,
                            type: "text",
                            readonly: form.address.additionDisabled
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "addition-group",
                      label: _ctx.$t("form_addition"),
                      "label-for": "addition"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "addition",
                          modelValue: form.address.addition,
                          "onUpdate:modelValue": ($event) => form.address.addition = $event,
                          type: "text",
                          readonly: form.address.additionDisabled
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
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
              createVNode(_component_BCol, {
                sm: "6",
                class: "first"
              }, {
                default: withCtx(() => [
                  createVNode(_component_BFormGroup, {
                    class: "account-inputs",
                    id: "house_number-group",
                    label: _ctx.$t("form_house_number") + "*",
                    "label-for": "house_number"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "house_number",
                        modelValue: form.address.house_number,
                        "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                        type: "text",
                        onBlur: validateHouseNumber,
                        state: form.address.house_numberState,
                        "aria-describedby": "address.house_number-feedback",
                        ref: "addressHouseNumber"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                      createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(form.address.house_numberError), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"])
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
                    id: "addition-group",
                    label: _ctx.$t("form_addition"),
                    "label-for": "addition"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormInput, {
                        id: "addition",
                        modelValue: form.address.addition,
                        "onUpdate:modelValue": ($event) => form.address.addition = $event,
                        type: "text",
                        readonly: form.address.additionDisabled
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
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
      _push(ssrRenderComponent(_component_BFormGroup, {
        style: showFullAddress.value ? null : { display: "none" },
        class: "account-inputs",
        id: "postcode-group1",
        label: _ctx.$t("form_postal_code") + "*",
        "label-for": "postcode1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BFormInput, {
              id: "postcode1",
              modelValue: form.address.postcode,
              "onUpdate:modelValue": ($event) => form.address.postcode = $event,
              type: "text",
              onBlur: validatePostCode,
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
                id: "postcode1",
                modelValue: form.address.postcode,
                "onUpdate:modelValue": ($event) => form.address.postcode = $event,
                type: "text",
                onBlur: validatePostCode,
                state: form.address.postcodeState,
                "aria-describedby": "address.postcode1-feedback"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
        id: "city-group",
        label: _ctx.$t("form_city") + "*",
        "label-for": "city"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BFormInput, {
              id: "city",
              modelValue: form.address.city,
              "onUpdate:modelValue": ($event) => form.address.city = $event,
              type: "text",
              onBlur: validateCity,
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
                id: "city",
                modelValue: form.address.city,
                "onUpdate:modelValue": ($event) => form.address.city = $event,
                type: "text",
                onBlur: validateCity,
                state: form.address.cityState,
                "aria-describedby": "address.city-feedback"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
          label: " ",
          "label-for": "add"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div id="add"${_scopeId}>${ssrInterpolate(foundAddress.value)}</div>`);
            } else {
              return [
                createVNode("div", { id: "add" }, toDisplayString(foundAddress.value), 1)
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
          label: " ",
          "label-for": "addm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div id="addm"${_scopeId}><!--[-->`);
              ssrRenderList(foundAddresses.value, (item, index) => {
                _push2(ssrRenderComponent(_component_BFormRadio, {
                  style: { "width": "300px" },
                  class: "account-radios",
                  modelValue: selectedAddress.value,
                  "onUpdate:modelValue": ($event) => selectedAddress.value = $event,
                  key: `nl-${index}`,
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
                      style: { "width": "300px" },
                      class: "account-radios",
                      modelValue: selectedAddress.value,
                      "onUpdate:modelValue": ($event) => selectedAddress.value = $event,
                      key: `nl-${index}`,
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
      if (showManual.value) {
        _push(ssrRenderComponent(_component_BFormCheckbox, {
          id: "manual",
          modelValue: showFullAddress.value,
          "onUpdate:modelValue": ($event) => showFullAddress.value = $event,
          name: "manual",
          class: "pl-30"
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
        id: "telephone-group",
        label: _ctx.$t("form_phone") + "*",
        "label-for": "telephone"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BFormInput, {
              id: "telephone",
              modelValue: form.address.telephone,
              "onUpdate:modelValue": ($event) => form.address.telephone = $event,
              type: "text",
              onBlur: validatePhone,
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
                id: "telephone",
                modelValue: form.address.telephone,
                "onUpdate:modelValue": ($event) => form.address.telephone = $event,
                type: "text",
                onBlur: validatePhone,
                state: form.address.telephoneState,
                "aria-describedby": "address.telephone-feedback"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
      _push(ssrRenderComponent(_component_BFormCheckbox, {
        id: "checkbox-2",
        name: "checkbox-2",
        "label-for": "checkbox2",
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
        _push(`<div class="group"><span class="group-title d-block mb-25"><i class="lnr lnr-home me-10"></i>${ssrInterpolate(_ctx.$t("invoice_address"))}</span>`);
        _push(ssrRenderComponent(_component_BFormCheckbox, {
          id: "checkbox-99",
          modelValue: isInvoiceCompany.value,
          "onUpdate:modelValue": ($event) => isInvoiceCompany.value = $event,
          name: "checkbox-99"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("form_are_you_a_company"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (isInvoiceCompany.value) {
          _push(`<div class="short-form">`);
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "company-group",
            label: _ctx.$t("form_company_name") + "*",
            "label-for": "company"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  id: "company",
                  modelValue: form.invoice.company,
                  "onUpdate:modelValue": ($event) => form.invoice.company = $event,
                  type: "text",
                  onBlur: validateInvoiceCompany,
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
                    id: "company",
                    modelValue: form.invoice.company,
                    "onUpdate:modelValue": ($event) => form.invoice.company = $event,
                    type: "text",
                    onBlur: validateInvoiceCompany,
                    state: form.invoice.companyState,
                    "aria-describedby": "company-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
            id: "taxvat-group",
            label: _ctx.$t("form_vat_number"),
            "label-for": "taxvat"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  id: "taxvat",
                  modelValue: form.invoice.taxvat,
                  "onUpdate:modelValue": ($event) => form.invoice.taxvat = $event,
                  type: "text",
                  state: form.invoice.taxvatState,
                  onBlur: validateInvoiceVAT,
                  "aria-describedby": "taxvat-feedback"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "taxvat-feedback" }, {
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
                    id: "taxvat",
                    modelValue: form.invoice.taxvat,
                    "onUpdate:modelValue": ($event) => form.invoice.taxvat = $event,
                    type: "text",
                    state: form.invoice.taxvatState,
                    onBlur: validateInvoiceVAT,
                    "aria-describedby": "taxvat-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                  createVNode(_component_BFormInvalidFeedback, { id: "taxvat-feedback" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(form.invoice.taxvatError), 1)
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
        _push(ssrRenderComponent(_component_BFormGroup, {
          class: "account-inputs",
          id: "first_name-group",
          label: _ctx.$t("form_first_name") + "*",
          "label-for": "first_name"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                id: "first_name",
                modelValue: form.invoice.firstname,
                "onUpdate:modelValue": ($event) => form.invoice.firstname = $event,
                type: "text",
                onBlur: validateInvoiceFirstname,
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
                  id: "first_name",
                  modelValue: form.invoice.firstname,
                  "onUpdate:modelValue": ($event) => form.invoice.firstname = $event,
                  type: "text",
                  onBlur: validateInvoiceFirstname,
                  state: form.invoice.firstnameState,
                  "aria-describedby": "firstname-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
          id: "last_name-group",
          label: _ctx.$t("form_last_name") + "*",
          "label-for": "last_name"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                id: "last_name",
                modelValue: form.invoice.lastname,
                "onUpdate:modelValue": ($event) => form.invoice.lastname = $event,
                type: "text",
                onBlur: validateInvoiceLastname,
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
                  id: "last_name",
                  modelValue: form.invoice.lastname,
                  "onUpdate:modelValue": ($event) => form.invoice.lastname = $event,
                  type: "text",
                  onBlur: validateInvoiceLastname,
                  state: form.invoice.lastnameState,
                  "aria-describedby": "lastname-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
          id: "country-group",
          label: _ctx.$t("form_country") + "*",
          "label-for": "country"
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
            id: "postcode-group",
            label: _ctx.$t("form_postal_code") + "*",
            "label-for": "postcode"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  id: "postcode",
                  modelValue: form.invoice.address.postcode,
                  "onUpdate:modelValue": ($event) => form.invoice.address.postcode = $event,
                  type: "text",
                  state: form.invoice.address.postcodeState,
                  "aria-describedby": "address.postcode-feedback",
                  onBlur: validateInvoicePostcode
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
                    id: "postcode",
                    modelValue: form.invoice.address.postcode,
                    "onUpdate:modelValue": ($event) => form.invoice.address.postcode = $event,
                    type: "text",
                    state: form.invoice.address.postcodeState,
                    "aria-describedby": "address.postcode-feedback",
                    onBlur: validateInvoicePostcode
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
            id: "street-group",
            label: _ctx.$t("form_street") + "*",
            "label-for": "street"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  id: "street",
                  modelValue: form.invoice.address.streetDisplay,
                  "onUpdate:modelValue": ($event) => form.invoice.address.streetDisplay = $event,
                  type: "text",
                  onBlur: validateInvoiceStreet,
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
                    id: "street",
                    modelValue: form.invoice.address.streetDisplay,
                    "onUpdate:modelValue": ($event) => form.invoice.address.streetDisplay = $event,
                    type: "text",
                    onBlur: validateInvoiceStreet,
                    state: form.invoice.address.streetDisplayState,
                    "aria-describedby": "address.streetDisplay-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
                      id: "house_number-group",
                      label: _ctx.$t("form_house_number") + "*",
                      "label-for": "house_number"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
                            id: "house_number",
                            modelValue: form.invoice.address.house_number,
                            "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                            type: "text",
                            onBlur: validateInvoiceHouseNumber,
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
                              id: "house_number",
                              modelValue: form.invoice.address.house_number,
                              "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                              type: "text",
                              onBlur: validateInvoiceHouseNumber,
                              state: form.invoice.address.house_numberState,
                              "aria-describedby": "address.house_number-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
                        id: "house_number-group",
                        label: _ctx.$t("form_house_number") + "*",
                        "label-for": "house_number"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "house_number",
                            modelValue: form.invoice.address.house_number,
                            "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                            type: "text",
                            onBlur: validateInvoiceHouseNumber,
                            state: form.invoice.address.house_numberState,
                            "aria-describedby": "address.house_number-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.invoice.address.house_numberError), 1)
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
              _push2(ssrRenderComponent(_component_BCol, {
                sm: "6",
                class: "third"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "addition-group",
                      label: _ctx.$t("form_addition"),
                      "label-for": "addition"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
                            id: "addition",
                            modelValue: form.invoice.address.addition,
                            "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
                            type: "text"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BFormInput, {
                              id: "addition",
                              modelValue: form.invoice.address.addition,
                              "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
                              type: "text"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BFormGroup, {
                        class: "account-inputs",
                        id: "addition-group",
                        label: _ctx.$t("form_addition"),
                        "label-for": "addition"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "addition",
                            modelValue: form.invoice.address.addition,
                            "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
                            type: "text"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                createVNode(_component_BCol, {
                  sm: "6",
                  class: "first"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "house_number-group",
                      label: _ctx.$t("form_house_number") + "*",
                      "label-for": "house_number"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "house_number",
                          modelValue: form.invoice.address.house_number,
                          "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                          type: "text",
                          onBlur: validateInvoiceHouseNumber,
                          state: form.invoice.address.house_numberState,
                          "aria-describedby": "address.house_number-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.invoice.address.house_numberError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])
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
                      id: "addition-group",
                      label: _ctx.$t("form_addition"),
                      "label-for": "addition"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "addition",
                          modelValue: form.invoice.address.addition,
                          "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
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
        }, _parent));
        if (showFullInvoiceAddress.value) {
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "postcode-group1",
            label: _ctx.$t("form_postal_code") + "*",
            "label-for": "postcode1"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  id: "postcode1",
                  modelValue: form.invoice.address.postcode,
                  "onUpdate:modelValue": ($event) => form.invoice.address.postcode = $event,
                  type: "text",
                  onBlur: validateInvoicePostcode,
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
                    id: "postcode1",
                    modelValue: form.invoice.address.postcode,
                    "onUpdate:modelValue": ($event) => form.invoice.address.postcode = $event,
                    type: "text",
                    onBlur: validateInvoicePostcode,
                    state: form.invoice.address.postcodeState,
                    "aria-describedby": "address.postcode1-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
            id: "city-group",
            label: _ctx.$t("form_city") + "*",
            "label-for": "city"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  id: "city",
                  modelValue: form.invoice.address.city,
                  "onUpdate:modelValue": ($event) => form.invoice.address.city = $event,
                  type: "text",
                  onBlur: validateInvoiceCity,
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
                    id: "city",
                    modelValue: form.invoice.address.city,
                    "onUpdate:modelValue": ($event) => form.invoice.address.city = $event,
                    type: "text",
                    onBlur: validateInvoiceCity,
                    state: form.invoice.address.cityState,
                    "aria-describedby": "address.city-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
            label: " ",
            "label-for": "add"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div id="add"${_scopeId}>${ssrInterpolate(foundInvoiceAddress.value)}</div>`);
              } else {
                return [
                  createVNode("div", { id: "add" }, toDisplayString(foundInvoiceAddress.value), 1)
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
            label: " ",
            "label-for": "addm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div id="addm"${_scopeId}><!--[-->`);
                ssrRenderList(foundInvoiceAddresses.value, (item, index) => {
                  _push2(ssrRenderComponent(_component_BFormRadio, {
                    style: { "width": "300px" },
                    class: "account-radios",
                    modelValue: selectedInvoiceAddress.value,
                    "onUpdate:modelValue": ($event) => selectedInvoiceAddress.value = $event,
                    key: `add-${index}`,
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
                        style: { "width": "300px" },
                        class: "account-radios",
                        modelValue: selectedInvoiceAddress.value,
                        "onUpdate:modelValue": ($event) => selectedInvoiceAddress.value = $event,
                        key: `add-${index}`,
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
        if (showManual.value) {
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
          id: "telephone-group",
          label: _ctx.$t("form_phone") + "*",
          "label-for": "telephone"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
                id: "telephone",
                modelValue: form.invoice.address.telephone,
                "onUpdate:modelValue": ($event) => form.invoice.address.telephone = $event,
                type: "text",
                onBlur: validateInvoicePhone,
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
                  id: "telephone",
                  modelValue: form.invoice.address.telephone,
                  "onUpdate:modelValue": ($event) => form.invoice.address.telephone = $event,
                  type: "text",
                  onBlur: validateInvoicePhone,
                  state: form.invoice.address.telephoneState,
                  "aria-describedby": "address.telephone-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/NotLoggedInCheckoutDetails.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "LoggedInCheckoutDetails",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { t } = useI18n();
    const newAddress = ref(false);
    const newInvoiceAddress = ref(false);
    const isCompany = ref(false);
    const isInvoiceCompany = ref(false);
    const isValidVatNumber = ref(false);
    const isValidInvoiceVatNumber = ref(false);
    const showFullAddress = ref(false);
    const showFullInvoiceAddress = ref(false);
    const showVatMessage = ref("");
    ref(false);
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
    const emailReg = ref(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    );
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
    const invoicePostcodeHouseNumber = computed(
      () => `${form.invoice.address.postcode}|${form.invoice.address.house_number}`
    );
    const vatNumber = computed(() => form.taxvat);
    const invoiceVatNumber = computed(() => form.invoice.taxvat);
    const addresses = computed(() => {
      const user2 = store.getters["user/getCurrentUser"];
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
    const cancleSaveShippingAddress = () => {
      newAddress.value = false;
    };
    const cancleSaveInvoiceAddress = () => {
      newInvoiceAddress.value = false;
    };
    const validateField = (state, validator) => {
      if (state !== true) {
        validator();
        return state === true;
      }
      return true;
    };
    const resetSomeFormFields = (form2) => {
      form2.firstname = "";
      form2.firstnameState = null;
      form2.lastname = "";
      form2.lastnameState = null;
      form2.address.streetDisplay = "";
      form2.address.streetDisplayState = null;
      form2.address.postcode = "";
      form2.address.postcodeState = null;
      form2.address.house_number = "";
      form2.address.house_numberState = null;
      form2.address.city = "";
      form2.address.cityState = null;
      form2.address.telephone = "";
      form2.address.telephoneState = null;
      form2.company = "";
      form2.companyState = null;
      form2.coc_number = "";
      form2.coc_numberState = null;
      form2.taxvat = "";
      form2.taxvatState = null;
    };
    const generateAddressValidations = (form2, includeCompanyFields = false) => {
      const commonValidations = [
        () => validateField(
          form2.firstnameState,
          !(form2 == null ? void 0 : form2.invoice) ? validateInvoiceFirstname : validateFirstname
        ),
        () => validateField(
          form2.lastnameState,
          !(form2 == null ? void 0 : form2.invoice) ? validateInvoiceLastname : validateLastname
        ),
        () => validateField(
          form2.address.postcodeState,
          !(form2 == null ? void 0 : form2.invoice) ? validateInvoicePostcode : validatePostCode
        ),
        () => validateField(
          form2.address.house_numberState,
          !(form2 == null ? void 0 : form2.invoice) ? validateInvoiceHouseNumber : validateHouseNumber
        ),
        () => validateField(
          form2.address.streetDisplayState,
          !(form2 == null ? void 0 : form2.invoice) ? validateInvoiceStreet : validateStreet
        ),
        () => validateField(
          form2.address.telephoneState,
          !(form2 == null ? void 0 : form2.invoice) ? validateInvoicePhone : validatePhone
        ),
        () => validateField(form2.address.cityState, !(form2 == null ? void 0 : form2.invoice) ? validateInvoiceCity : validateCity)
      ];
      if (includeCompanyFields) {
        commonValidations.push(
          () => validateField(form2.companyState, !(form2 == null ? void 0 : form2.invoice) ? validateInvoiceCompany : validateCompany),
          () => validateField(
            form2.coc_numberState,
            !(form2 == null ? void 0 : form2.invoice) ? validateInvoiceCOCNumber : validateCOCNumber
          ),
          () => validateField(form2.taxvatState, !(form2 == null ? void 0 : form2.invoice) ? validateInvoiceVAT : validateVAT)
        );
      }
      return commonValidations;
    };
    const saveAddressCommon = async ({
      // common function for save address
      form: form2,
      isCompany: isCompany2,
      isSaveBtnDisable: isSaveBtnDisable2,
      newAddressFlag,
      selectAddressCallback,
      resetSomeFormFields: resetSomeFormFields2,
      validations
    }) => {
      var _a;
      isSaveBtnDisable2.value = true;
      let formValid = true;
      validations.forEach((validate) => {
        if (!validate()) formValid = false;
      });
      if (formValid) {
        const address = {
          id: null,
          country_code: form2.address.country_code,
          firstname: form2.firstname,
          lastname: form2.lastname,
          street: form2.address.streetDisplay,
          postcode: form2.address.postcode,
          house_number: form2.address.house_number,
          city: form2.address.city,
          telephone: form2.address.telephone,
          default_billing: false,
          default_shipping: false
        };
        if (isCompany2.value) {
          address.company = form2.company;
          address.vat_id = form2.taxvat;
          address.coc_number = form2.coc_number;
        }
        const retval = await store.dispatch("user/addAddress", { address, store });
        if (retval === true) {
          if ((_a = addresses.value[addresses.value.length - 1]) == null ? void 0 : _a.id) {
            await selectAddressCallback(addresses.value[addresses.value.length - 1].id);
          }
          newAddressFlag.value = false;
          resetSomeFormFields2();
          const msg = {
            type: "success",
            title: t("account"),
            text: t("address_modified")
          };
          store.dispatch("messages/sendMessage", { message: msg });
        } else {
          const msg = {
            type: "danger",
            title: t("account"),
            text: t("something_went_wrong")
          };
          store.dispatch("messages/sendMessage", { message: msg });
        }
      }
      isSaveBtnDisable2.value = false;
    };
    const saveShippingAddress = async () => {
      await saveAddressCommon({
        form,
        isCompany,
        isSaveBtnDisable,
        newAddressFlag: newAddress,
        selectAddressCallback: selectAddress,
        resetSomeFormFields: () => resetSomeFormFields(form),
        validations: generateAddressValidations(form, isCompany.value)
      });
    };
    const saveInvoiceAddress = async () => {
      await saveAddressCommon({
        form: form.invoice,
        isCompany: isInvoiceCompany,
        isSaveBtnDisable: isInvoiceSaveBtnDisable,
        newAddressFlag: newInvoiceAddress,
        selectAddressCallback: selectInvoiceAddress,
        resetSomeFormFields: () => resetSomeFormFields(form.invoice),
        validations: generateAddressValidations(form.invoice, isInvoiceCompany.value)
      });
    };
    const validateVAT = async () => {
      if (isCompany.value) {
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
      } else {
        form.taxvatState = null;
        form.taxvatError = "";
      }
    };
    const validateAddress = async () => {
      let isOk = true;
      if (isCompany.value) {
        if (form.company.trim() === "") {
          isOk = false;
        }
        if (form.taxvat.trim() === "") {
          isOk = false;
        }
      }
      if (form.firstname.trim() === "" || form.lastname.trim() === "" || form.address.country_code.trim() === "" || form.address.postcode.trim() === "" || form.address.streetDisplay.trim() === "" || form.address.house_number.trim() === "" || form.address.city.trim() === "" || form.address.telephone.trim() === "") {
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
          country_code: form.address.country_code
        };
        if (isCompany.value) {
          address.company = form.company;
          address.vat_id = form.taxvat;
        }
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
      if (isInvoiceCompany.value) {
        if (form.invoice.company.trim() === "" || form.invoice.taxvat.trim() === "") {
          isOk = false;
        }
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
        if (isCompany.value) {
          address.company = form.company;
          address.vat_id = form.taxvat;
        }
        await store.dispatch("cart/addBillingAddress", {
          address,
          store
        });
      }
    };
    const validateCompany = () => {
      if (isCompany.value) {
        if (form.company.trim() === "") {
          form.companyState = false;
          form.companyError = t("company_name_required");
        } else {
          form.companyState = true;
        }
      } else {
        form.companyState = null;
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
    const validateCOCNumber = () => {
      if (isCompany.value) {
        if (form.coc_number.trim() === "") {
          form.coc_numberState = false;
          form.coc_numberError = t("coc_number_required");
        } else {
          form.coc_numberState = true;
        }
      } else {
        form.coc_numberState = null;
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
      if (isInvoiceCompany.value) {
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
      } else {
        form.invoice.taxvatState = null;
        form.invoice.taxvatError = "";
      }
    };
    const validateInvoiceCompany = () => {
      if (isInvoiceCompany.value) {
        if (form.invoice.company.trim() === "") {
          form.invoice.companyState = false;
          form.invoice.companyError = t("company_name_required");
        } else {
          form.invoice.companyState = true;
        }
      } else {
        form.invoice.companyState = null;
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
    const validateInvoiceCOCNumber = () => {
      if (isInvoiceCompany.value) {
        if (form.invoice.coc_number.trim() === "") {
          form.invoice.coc_numberState = false;
          form.invoice.coc_numberError = t("coc_number_required");
        } else {
          form.invoice.coc_numberState = true;
        }
      } else {
        form.invoice.coc_numberState = null;
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
    const selectInvoiceAddress = async (id) => {
      await store.dispatch("cart/addBillingAddressById", { id, store });
    };
    watch(country, (newVal) => {
      if (isCompany.value) {
        validateVAT();
      }
      {
        showFullAddress.value = !CONFIG_JSON.postcode_validation.countries.includes(newVal);
      }
    });
    watch(
      () => form.address,
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
      if (isInvoiceCompany.value) {
        validateInvoiceVAT();
      }
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
      const _component_BButton = BButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "loggedInCheckoutDetails" }, _attrs))}><div class="group address"><span class="group-title d-block mb-25"><i class="lnr lnr-home me-10"></i>${ssrInterpolate(_ctx.$t("shipping_address"))}</span><!--[-->`);
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
      _push(ssrRenderComponent(_component_BFormCheckbox, {
        id: "new-address",
        name: "new-address",
        "label-for": "new-address",
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
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BFormCheckbox, {
          id: "checkbox-1",
          modelValue: isCompany.value,
          "onUpdate:modelValue": ($event) => isCompany.value = $event,
          name: "checkbox-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("form_are_you_a_company"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (isCompany.value) {
          _push(`<div class="short-form">`);
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "company-group",
            label: _ctx.$t("form_company_name") + "*",
            "label-for": "company"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
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
                    id: "company",
                    modelValue: form.company,
                    "onUpdate:modelValue": ($event) => form.company = $event,
                    type: "text",
                    onBlur: ($event) => validateCompany(),
                    state: form.companyState,
                    "aria-describedby": "company-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
            id: "coc_number-group",
            label: _ctx.$t("form_coc_number") + "*",
            "label-for": "coc_number"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  id: "coc_number",
                  modelValue: form.coc_number,
                  "onUpdate:modelValue": ($event) => form.coc_number = $event,
                  type: "text",
                  onBlur: ($event) => validateCOCNumber(),
                  state: form.coc_numberState,
                  "aria-describedby": "coc_number-feedback"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "coc_number-feedback" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(form.coc_numberError)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(form.coc_numberError), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BFormInput, {
                    id: "coc_number",
                    modelValue: form.coc_number,
                    "onUpdate:modelValue": ($event) => form.coc_number = $event,
                    type: "text",
                    onBlur: ($event) => validateCOCNumber(),
                    state: form.coc_numberState,
                    "aria-describedby": "coc_number-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                  createVNode(_component_BFormInvalidFeedback, { id: "coc_number-feedback" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(form.coc_numberError), 1)
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
            id: "taxvat-group",
            label: _ctx.$t("form_vat_number") + "*",
            "label-for": "taxvat"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
                  id: "taxvat",
                  modelValue: form.taxvat,
                  "onUpdate:modelValue": ($event) => form.taxvat = $event,
                  type: "text",
                  state: form.taxvatState,
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
                    id: "taxvat",
                    modelValue: form.taxvat,
                    "onUpdate:modelValue": ($event) => form.taxvat = $event,
                    type: "text",
                    state: form.taxvatState,
                    "aria-describedby": "taxvat-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_BFormGroup, {
          class: "account-inputs",
          id: "first_name-group",
          label: _ctx.$t("form_first_name") + "*",
          "label-for": "first_name"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
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
                  id: "first_name",
                  modelValue: form.firstname,
                  "onUpdate:modelValue": ($event) => form.firstname = $event,
                  type: "text",
                  onBlur: ($event) => validateFirstname(),
                  state: form.firstnameState,
                  "aria-describedby": "firstname-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
          id: "last_name-group",
          label: _ctx.$t("form_last_name") + "*",
          "label-for": "last_name"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
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
                  id: "last_name",
                  modelValue: form.lastname,
                  "onUpdate:modelValue": ($event) => form.lastname = $event,
                  type: "text",
                  onBlur: ($event) => validateLastname(),
                  state: form.lastnameState,
                  "aria-describedby": "lastname-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
          id: "country-group",
          label: _ctx.$t("form_country") + "*",
          "label-for": "country"
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
            id: "postcode-group",
            label: _ctx.$t("form_postal_code") + "*",
            "label-for": "postcode"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
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
                    id: "postcode",
                    modelValue: form.address.postcode,
                    "onUpdate:modelValue": ($event) => form.address.postcode = $event,
                    type: "text",
                    state: form.address.postcodeState,
                    "aria-describedby": "address.postcode-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
          id: "street-group",
          label: _ctx.$t("form_street") + "*",
          "label-for": "street"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
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
                  id: "street",
                  modelValue: form.address.streetDisplay,
                  "onUpdate:modelValue": ($event) => form.address.streetDisplay = $event,
                  type: "text",
                  onBlur: ($event) => validateStreet(),
                  state: form.address.streetDisplayState,
                  "aria-describedby": "address.streetDisplay-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
                      id: "house_number-group",
                      label: _ctx.$t("form_house_number") + "*",
                      "label-for": "house_number"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
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
                              id: "house_number",
                              modelValue: form.address.house_number,
                              "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                              type: "text",
                              onBlur: ($event) => validateHouseNumber(),
                              state: form.address.house_numberState,
                              "aria-describedby": "address.house_number-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
                        id: "house_number-group",
                        label: _ctx.$t("form_house_number") + "*",
                        "label-for": "house_number"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "house_number",
                            modelValue: form.address.house_number,
                            "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                            type: "text",
                            onBlur: ($event) => validateHouseNumber(),
                            state: form.address.house_numberState,
                            "aria-describedby": "address.house_number-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.address.house_numberError), 1)
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
              _push2(ssrRenderComponent(_component_BCol, {
                sm: "6",
                class: "third"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "addition-group",
                      label: _ctx.$t("form_addition"),
                      "label-for": "addition"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BFormInput, {
                            id: "addition",
                            modelValue: form.address.addition,
                            "onUpdate:modelValue": ($event) => form.address.addition = $event,
                            type: "text"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BFormInput, {
                              id: "addition",
                              modelValue: form.address.addition,
                              "onUpdate:modelValue": ($event) => form.address.addition = $event,
                              type: "text"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BFormGroup, {
                        class: "account-inputs",
                        id: "addition-group",
                        label: _ctx.$t("form_addition"),
                        "label-for": "addition"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "addition",
                            modelValue: form.address.addition,
                            "onUpdate:modelValue": ($event) => form.address.addition = $event,
                            type: "text"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                createVNode(_component_BCol, {
                  sm: "6",
                  class: "first"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BFormGroup, {
                      class: "account-inputs",
                      id: "house_number-group",
                      label: _ctx.$t("form_house_number") + "*",
                      "label-for": "house_number"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "house_number",
                          modelValue: form.address.house_number,
                          "onUpdate:modelValue": ($event) => form.address.house_number = $event,
                          type: "text",
                          onBlur: ($event) => validateHouseNumber(),
                          state: form.address.house_numberState,
                          "aria-describedby": "address.house_number-feedback"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                        createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(form.address.house_numberError), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])
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
                      id: "addition-group",
                      label: _ctx.$t("form_addition"),
                      "label-for": "addition"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormInput, {
                          id: "addition",
                          modelValue: form.address.addition,
                          "onUpdate:modelValue": ($event) => form.address.addition = $event,
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
        }, _parent));
        _push(ssrRenderComponent(_component_BFormGroup, {
          style: showFullAddress.value ? null : { display: "none" },
          class: "account-inputs",
          id: "postcode-group1",
          label: _ctx.$t("form_postal_code") + "*",
          "label-for": "postcode1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
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
                  id: "postcode1",
                  modelValue: form.address.postcode,
                  "onUpdate:modelValue": ($event) => form.address.postcode = $event,
                  type: "text",
                  onBlur: ($event) => validatePostCode(),
                  state: form.address.postcodeState,
                  "aria-describedby": "address.postcode1-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
          id: "city-group",
          label: _ctx.$t("form_city") + "*",
          "label-for": "city"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
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
                  id: "city",
                  modelValue: form.address.city,
                  "onUpdate:modelValue": ($event) => form.address.city = $event,
                  type: "text",
                  onBlur: ($event) => validateCity(),
                  state: form.address.cityState,
                  "aria-describedby": "address.city-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
            label: " ",
            "label-for": "add"
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
            label: " ",
            "label-for": "addm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div id="addm"${_scopeId}><!--[-->`);
                ssrRenderList(foundAddresses.value, (item, index) => {
                  _push2(ssrRenderComponent(_component_BFormRadio, {
                    style: { "width": "300px" },
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
          id: "telephone-group",
          label: _ctx.$t("form_phone") + "*",
          "label-for": "telephone"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BFormInput, {
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
                  id: "telephone",
                  modelValue: form.address.telephone,
                  "onUpdate:modelValue": ($event) => form.address.telephone = $event,
                  type: "text",
                  onBlur: ($event) => validatePhone(),
                  state: form.address.telephoneState,
                  "aria-describedby": "address.telephone-feedback"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
        _push(`<div class="form-footer">`);
        _push(ssrRenderComponent(_component_BButton, {
          onClick: cancleSaveShippingAddress,
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
          onClick: saveShippingAddress,
          disabled: isSaveBtnDisable.value,
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
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BFormCheckbox, {
        id: "checkbox-2",
        name: "checkbox-2",
        "label-for": "checkbox2",
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
        _push(`<div class="group"><span class="group-title d-block mb-25"><i class="lnr lnr-home me-10"></i>${ssrInterpolate(_ctx.$t("invoice_address"))}</span><!--[-->`);
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
        _push(ssrRenderComponent(_component_BFormCheckbox, {
          id: "new-invoice-address",
          name: "new-invoice-address",
          "label-for": "new-invoice-address",
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
          _push(`<div>`);
          _push(ssrRenderComponent(_component_BFormCheckbox, {
            id: "checkbox-99",
            modelValue: isInvoiceCompany.value,
            "onUpdate:modelValue": ($event) => isInvoiceCompany.value = $event,
            name: "checkbox-99"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("form_are_you_a_company"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("form_are_you_a_company")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          if (isInvoiceCompany.value) {
            _push(`<div class="short-form">`);
            _push(ssrRenderComponent(_component_BFormGroup, {
              class: "account-inputs",
              id: "company-group",
              label: _ctx.$t("form_company_name") + "*",
              "label-for": "company"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
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
                      id: "company",
                      modelValue: form.invoice.company,
                      "onUpdate:modelValue": ($event) => form.invoice.company = $event,
                      type: "text",
                      onBlur: ($event) => validateInvoiceCompany(),
                      state: form.invoice.companyState,
                      "aria-describedby": "company-feedback"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
              id: "coc_number-group",
              label: _ctx.$t("form_coc_number") + "*",
              "label-for": "coc_number"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
                    id: "coc_number",
                    modelValue: form.invoice.coc_number,
                    "onUpdate:modelValue": ($event) => form.invoice.coc_number = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoiceCOCNumber(),
                    state: form.invoice.coc_numberState,
                    "aria-describedby": "coc_number-feedback"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_BFormInvalidFeedback, { id: "coc_number-feedback" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(form.invoice.coc_numberError)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(form.invoice.coc_numberError), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_BFormInput, {
                      id: "coc_number",
                      modelValue: form.invoice.coc_number,
                      "onUpdate:modelValue": ($event) => form.invoice.coc_number = $event,
                      type: "text",
                      onBlur: ($event) => validateInvoiceCOCNumber(),
                      state: form.invoice.coc_numberState,
                      "aria-describedby": "coc_number-feedback"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                    createVNode(_component_BFormInvalidFeedback, { id: "coc_number-feedback" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(form.invoice.coc_numberError), 1)
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
              id: "taxvat-group",
              label: _ctx.$t("form_vat_number") + "*",
              "label-for": "taxvat"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
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
                      id: "taxvat",
                      modelValue: form.invoice.taxvat,
                      "onUpdate:modelValue": ($event) => form.invoice.taxvat = $event,
                      type: "text",
                      state: form.invoice.taxvatState,
                      "aria-describedby": "taxvat-feedback"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_BFormGroup, {
            class: "account-inputs",
            id: "first_name-group",
            label: _ctx.$t("form_first_name") + "*",
            "label-for": "first_name"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
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
                    id: "first_name",
                    modelValue: form.invoice.firstname,
                    "onUpdate:modelValue": ($event) => form.invoice.firstname = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoiceFirstname(),
                    state: form.invoice.firstnameState,
                    "aria-describedby": "firstname-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
            id: "last_name-group",
            label: _ctx.$t("form_last_name") + "*",
            "label-for": "last_name"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
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
                    id: "last_name",
                    modelValue: form.invoice.lastname,
                    "onUpdate:modelValue": ($event) => form.invoice.lastname = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoiceLastname(),
                    state: form.invoice.lastnameState,
                    "aria-describedby": "lastname-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
            id: "country-group",
            label: _ctx.$t("form_country") + "*",
            "label-for": "country"
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
              id: "postcode-group",
              label: _ctx.$t("form_postal_code") + "*",
              "label-for": "postcode"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
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
                      id: "postcode",
                      modelValue: form.invoice.address.postcode,
                      "onUpdate:modelValue": ($event) => form.invoice.address.postcode = $event,
                      type: "text",
                      state: form.invoice.address.postcodeState,
                      "aria-describedby": "address.postcode-feedback"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "state"]),
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
              id: "street-group",
              label: _ctx.$t("form_street") + "*",
              "label-for": "street"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
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
                      id: "street",
                      modelValue: form.invoice.address.streetDisplay,
                      "onUpdate:modelValue": ($event) => form.invoice.address.streetDisplay = $event,
                      type: "text",
                      onBlur: ($event) => validateInvoiceStreet(),
                      state: form.invoice.address.streetDisplayState,
                      "aria-describedby": "address.streetDisplay-feedback"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
                        id: "house_number-group",
                        label: _ctx.$t("form_house_number") + "*",
                        "label-for": "house_number"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BFormInput, {
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
                                id: "house_number",
                                modelValue: form.invoice.address.house_number,
                                "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                                type: "text",
                                onBlur: ($event) => validateInvoiceHouseNumber(),
                                state: form.invoice.address.house_numberState,
                                "aria-describedby": "address.house_number-feedback"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
                          id: "house_number-group",
                          label: _ctx.$t("form_house_number") + "*",
                          "label-for": "house_number"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BFormInput, {
                              id: "house_number",
                              modelValue: form.invoice.address.house_number,
                              "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                              type: "text",
                              onBlur: ($event) => validateInvoiceHouseNumber(),
                              state: form.invoice.address.house_numberState,
                              "aria-describedby": "address.house_number-feedback"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                            createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(form.invoice.address.house_numberError), 1)
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
                _push2(ssrRenderComponent(_component_BCol, {
                  sm: "6",
                  class: "third"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_BFormGroup, {
                        class: "account-inputs",
                        id: "addition-group",
                        label: _ctx.$t("form_addition"),
                        "label-for": "addition"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BFormInput, {
                              id: "addition",
                              modelValue: form.invoice.address.addition,
                              "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
                              type: "text"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BFormInput, {
                                id: "addition",
                                modelValue: form.invoice.address.addition,
                                "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
                                type: "text"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_BFormGroup, {
                          class: "account-inputs",
                          id: "addition-group",
                          label: _ctx.$t("form_addition"),
                          "label-for": "addition"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BFormInput, {
                              id: "addition",
                              modelValue: form.invoice.address.addition,
                              "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
                              type: "text"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  createVNode(_component_BCol, {
                    sm: "6",
                    class: "first"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormGroup, {
                        class: "account-inputs",
                        id: "house_number-group",
                        label: _ctx.$t("form_house_number") + "*",
                        "label-for": "house_number"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "house_number",
                            modelValue: form.invoice.address.house_number,
                            "onUpdate:modelValue": ($event) => form.invoice.address.house_number = $event,
                            type: "text",
                            onBlur: ($event) => validateInvoiceHouseNumber(),
                            state: form.invoice.address.house_numberState,
                            "aria-describedby": "address.house_number-feedback"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
                          createVNode(_component_BFormInvalidFeedback, { id: "address.house_number-feedback" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(form.invoice.address.house_numberError), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["label"])
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
                        id: "addition-group",
                        label: _ctx.$t("form_addition"),
                        "label-for": "addition"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormInput, {
                            id: "addition",
                            modelValue: form.invoice.address.addition,
                            "onUpdate:modelValue": ($event) => form.invoice.address.addition = $event,
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
          }, _parent));
          if (showFullInvoiceAddress.value) {
            _push(ssrRenderComponent(_component_BFormGroup, {
              class: "account-inputs",
              id: "postcode-group1",
              label: _ctx.$t("form_postal_code") + "*",
              "label-for": "postcode1"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
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
                      id: "postcode1",
                      modelValue: form.invoice.address.postcode,
                      "onUpdate:modelValue": ($event) => form.invoice.address.postcode = $event,
                      type: "text",
                      onBlur: ($event) => validateInvoicePostcode(),
                      state: form.invoice.address.postcodeState,
                      "aria-describedby": "address.postcode1-feedback"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
              id: "city-group",
              label: _ctx.$t("form_city") + "*",
              "label-for": "city"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_BFormInput, {
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
                      id: "city",
                      modelValue: form.invoice.address.city,
                      "onUpdate:modelValue": ($event) => form.invoice.address.city = $event,
                      type: "text",
                      onBlur: ($event) => validateInvoiceCity(),
                      state: form.invoice.address.cityState,
                      "aria-describedby": "address.city-feedback"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
              label: " ",
              "label-for": "add"
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
              label: " ",
              "label-for": "addm"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div id="addm"${_scopeId}><!--[-->`);
                  ssrRenderList(foundInvoiceAddresses.value, (item, index) => {
                    _push2(ssrRenderComponent(_component_BFormRadio, {
                      style: { "width": "300px" },
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
                          style: { "width": "300px" },
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
            id: "telephone-group",
            label: _ctx.$t("form_phone") + "*",
            "label-for": "telephone"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BFormInput, {
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
                    id: "telephone",
                    modelValue: form.invoice.address.telephone,
                    "onUpdate:modelValue": ($event) => form.invoice.address.telephone = $event,
                    type: "text",
                    onBlur: ($event) => validateInvoicePhone(),
                    state: form.invoice.address.telephoneState,
                    "aria-describedby": "address.telephone-feedback"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur", "state"]),
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
          _push(`<div class="form-footer">`);
          _push(ssrRenderComponent(_component_BButton, {
            onClick: cancleSaveInvoiceAddress,
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
            onClick: saveInvoiceAddress,
            disabled: isInvoiceSaveBtnDisable.value,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/LoggedInCheckoutDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Checkout",
  __ssrInlineRender: true,
  emits: ["toggleNextDisable"],
  setup(__props, { emit: __emit }) {
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
    const couponCode = ref("");
    const SubscribeNewsletter = ref("yes");
    const buttonClicked = ref(false);
    const app_url = ref(CONFIG_JSON.app_url);
    const gtmEnabled = ref(false);
    const getItemsInCart = computed(() => {
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
    const appliedCouponCodes = computed(() => store.getters["cart/getAppliedCouponCodes"]);
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
        buttonClicked.value = false;
      }
      buttonClicked.value = false;
    }
    async function addCoupon() {
      if (couponCode.value !== "") {
        const retval = await store.dispatch("cart/addCouponCode", {
          code: couponCode.value,
          store
        });
        if (retval === true) {
          const msg = {
            type: "success",
            title: t("coupon_code"),
            text: t("coupon_code_ok", { code: couponCode.value })
          };
          store.dispatch("messages/sendMessage", { message: msg });
          couponCode.value = "";
        }
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
    async function removeCouponCode() {
      await store.dispatch("cart/removeCouponCode", { store });
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
      const _component_BContainer = BContainer;
      const _component_BCol = BCol;
      const _component_BFormRadio = BFormRadio;
      const _component_BFormGroup = BFormGroup;
      const _component_BFormSelect = BFormSelect;
      const _component_BFormSelectOption = BFormSelectOption;
      const _component_BLink = BLink;
      const _component_BCollapse = BCollapse;
      const _component_BFormInput = BFormInput;
      const _component_BButton = BButton;
      const _component_BFormCheckbox = BFormCheckbox;
      const _directive_b_toggle = vBToggle;
      _push(ssrRenderComponent(unref(_sfc_main$3), mergeProps({ wrapperClass: "checkout" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent2, _scopeId));
            _push2(`<section class="checkout-details pt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="row"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BCol, { lg: "4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!isLoggedIn.value) {
                          _push4(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          !isLoggedIn.value ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$1), { key: 1 }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BCol, {
                    lg: "4",
                    class: "pt-20 pt-lg-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="group"${_scopeId3}><div class="group-title d-flex align-items-center mb-5"${_scopeId3}><div class="delivery-icon me-8"${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="delivery"${_scopeId3}></div><span${_scopeId3}>${ssrInterpolate(_ctx.$t("shipping_method"))}</span></div>`);
                        if (deliveryOptions.value.length == 0) {
                          _push4(`<div${_scopeId3}>${ssrInterpolate(_ctx.$t("fill_address_information"))}</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (deliveryOptions.value.length !== 0) {
                          _push4(`<div${_scopeId3}><ul class="delivery-options-list list-unstyled pl-0 m-0"${_scopeId3}><!--[-->`);
                          ssrRenderList(deliveryOptions.value, (deliveryOption, index) => {
                            _push4(`<li${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BFormRadio, {
                              modelValue: selectedShippingMethod.value,
                              "onUpdate:modelValue": ($event) => selectedShippingMethod.value = $event,
                              name: "deliveryOption",
                              value: `${deliveryOption == null ? void 0 : deliveryOption.carrier_code}|${deliveryOption == null ? void 0 : deliveryOption.method_code}`
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex"${_scopeId4}><span class="mx-6 delivery-price d-block"${_scopeId4}>${ssrInterpolate(formatCurrency(deliveryOption.amount.value))} </span><span class="d-block mx-6"${_scopeId4}>${ssrInterpolate(deliveryOption == null ? void 0 : deliveryOption.carrier_title)} (${ssrInterpolate(deliveryOption == null ? void 0 : deliveryOption.method_title)})</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex" }, [
                                      createVNode("span", { class: "mx-6 delivery-price d-block" }, toDisplayString(formatCurrency(deliveryOption.amount.value)) + " ", 1),
                                      createVNode("span", { class: "d-block mx-6" }, toDisplayString(deliveryOption == null ? void 0 : deliveryOption.carrier_title) + " (" + toDisplayString(deliveryOption == null ? void 0 : deliveryOption.method_title) + ")", 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</li>`);
                          });
                          _push4(`<!--]--></ul></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        if (showPickupLocation.value) {
                          _push4(`<div${_scopeId3}><span class="d-block mb-15"${_scopeId3}>${ssrInterpolate(_ctx.$t("select_store"))}</span>`);
                          _push4(ssrRenderComponent(_component_BFormGroup, { class: "select--custom" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BFormSelect, {
                                  modelValue: pickupLocation.value,
                                  "onUpdate:modelValue": ($event) => pickupLocation.value = $event,
                                  options: pickupLocations.value,
                                  class: "mb-3",
                                  "value-field": "pickup_location_code",
                                  "text-field": "name",
                                  id: "pickup-dropdown"
                                }, {
                                  first: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_BFormSelectOption, { value: null }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(_ctx.$t("select_store"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(_ctx.$t("select_store")), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
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
                                }, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<div${_scopeId3}>`);
                        if (showPickupLocation.value && selectedPickupLocation.value) {
                          _push4(`<div class="address-list store-address"${_scopeId3}><div class="address-list-wrap"${_scopeId3}>`);
                          if (selectedAddress.value != null) {
                            _push4(`<div class="address-item"${_scopeId3}><label${_scopeId3}>${ssrInterpolate(pickupLocationName.value)}</label><div${_scopeId3}>${ssrInterpolate(selectedAddress.value.street[0])}</div><div${_scopeId3}>${ssrInterpolate(selectedAddress.value.postcode)} ${ssrInterpolate(selectedAddress.value.city)}</div>`);
                            if (selectedAddress.value.country) {
                              _push4(`<div${_scopeId3}>${ssrInterpolate(selectedAddress.value.countryName)}</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<div${_scopeId3}> T:<a${ssrRenderAttr("href", `tel:` + pickupLocationPhone.value)}${_scopeId3}>${ssrInterpolate(pickupLocationPhone.value)}</a></div>`);
                            if (selectedAddress.value.vat_id != null) {
                              _push4(`<div${_scopeId3}> VAT:${ssrInterpolate(selectedAddress.value.vat_id)}</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="group"${_scopeId3}><div class="group-title d-flex align-items-center mb-5"${_scopeId3}><div class="payment-icon me-8"${_scopeId3}><img${ssrRenderAttr("src", _imports_1)} alt="payment"${_scopeId3}></div><span class="d-block"${_scopeId3}>${ssrInterpolate(_ctx.$t("payment_method"))}</span></div>`);
                        if (deliveryOptions.value.length == 0 || shippingMethod.value == null) {
                          _push4(`<div${_scopeId3}>${ssrInterpolate(_ctx.$t("fill_shipping_options"))}</div>`);
                        } else {
                          _push4(`<div${_scopeId3}><ul class="payment-options-list list-unstyled p-0 m-0"${_scopeId3}><!--[-->`);
                          ssrRenderList(paymentOptions.value, (paymentOption, index) => {
                            _push4(`<li${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BFormRadio, {
                              class: "pl-30",
                              name: "paymentOption",
                              value: paymentOption.code,
                              onChange: ($event) => checkAllSubOptions(paymentOption.code),
                              modelValue: selectedPaymentMethod.value,
                              "onUpdate:modelValue": ($event) => selectedPaymentMethod.value = $event
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex align-items-center"${_scopeId4}><div class="payment-option-img"${_scopeId4}><img${ssrRenderAttr("src", `${app_url.value}/media/graphql/icons/50x32/${paymentOption.code}.png`)}${ssrRenderAttr("alt", paymentOption.code)}${_scopeId4}></div><span${_scopeId4}>${ssrInterpolate(paymentOption.label)}</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex align-items-center" }, [
                                      createVNode("div", { class: "payment-option-img" }, [
                                        createVNode("img", {
                                          src: `${app_url.value}/media/graphql/icons/50x32/${paymentOption.code}.png`,
                                          alt: paymentOption.code
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      createVNode("span", null, toDisplayString(paymentOption.label), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(paymentOption.additional_fields, (paymentSubOption, index2) => {
                              _push4(`<div class="${ssrRenderClass(showPaymentSuboptions.value)}"${_scopeId3}>`);
                              if (paymentSubOption.type == "select") {
                                _push4(`<div class="pt-4"${_scopeId3}><span class="d-block mb-15"${_scopeId3}>${ssrInterpolate(paymentSubOption.label)}</span>`);
                                _push4(ssrRenderComponent(_component_BFormGroup, { class: "select--custom" }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(ssrRenderComponent(_component_BFormSelect, {
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
                                        first: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(_component_BFormSelectOption, { value: null }, {
                                              default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(`${ssrInterpolate(_ctx.$t("select_bank"))}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(_ctx.$t("select_bank")), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
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
                                      }, _parent5, _scopeId4));
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
                                }, _parent4, _scopeId3));
                                _push4(`</div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                            });
                            _push4(`<!--]-->`);
                            if ((paymentOption == null ? void 0 : paymentOption.code) == "multisafepay_klarna") {
                              _push4(`<div class="${ssrRenderClass(isKlarnaSelected.value)}"${_scopeId3}> Je moet minimaal 18+ zijn om deze dienst te gebruiken. Als je op tijd betaalt, voorkom je extra kosten. </div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</li>`);
                          });
                          _push4(`<!--]--></ul></div>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "group" }, [
                            createVNode("div", { class: "group-title d-flex align-items-center mb-5" }, [
                              createVNode("div", { class: "delivery-icon me-8" }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "delivery"
                                })
                              ]),
                              createVNode("span", null, toDisplayString(_ctx.$t("shipping_method")), 1)
                            ]),
                            deliveryOptions.value.length == 0 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("fill_address_information")), 1)) : createCommentVNode("", true),
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
                                          createVNode("span", { class: "mx-6 delivery-price d-block" }, toDisplayString(formatCurrency(deliveryOption.amount.value)) + " ", 1),
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
                              createVNode("div", { class: "payment-icon me-8" }, [
                                createVNode("img", {
                                  src: _imports_1,
                                  alt: "payment"
                                })
                              ]),
                              createVNode("span", { class: "d-block" }, toDisplayString(_ctx.$t("payment_method")), 1)
                            ]),
                            deliveryOptions.value.length == 0 || shippingMethod.value == null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("fill_shipping_options")), 1)) : (openBlock(), createBlock("div", { key: 1 }, [
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
                                          createVNode("div", { class: "payment-option-img" }, [
                                            createVNode("img", {
                                              src: `${app_url.value}/media/graphql/icons/50x32/${paymentOption.code}.png`,
                                              alt: paymentOption.code
                                            }, null, 8, ["src", "alt"])
                                          ]),
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BCol, {
                    lg: "4",
                    class: "pt-30 pt-lg-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-gray py-10 px-20"${_scopeId3}><span class="group-title d-block"${_scopeId3}><i class="lnr lnr-checkmark-circle me-10"${_scopeId3}></i>${ssrInterpolate(_ctx.$t("order_overview"))}</span><div class="cart-details pb-15"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BLink, mergeProps({
                          href: "#",
                          class: "d-block mb-10 group-subtitle border-0 collapse-opener"
                        }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, void 0, void 0, { "cart-details-collapse": true })), null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BCollapse, {
                          id: "cart-details-collapse",
                          class: "bg-white",
                          visible: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(cartItems), (cartItem) => {
                                _push5(`<div class="d-flex align-items-center py-20"${_scopeId4}><div class="img"${_scopeId4}><img${ssrRenderAttr("src", cartItem.product.image.small)}${ssrRenderAttr("alt", cartItem.product.name)}${_scopeId4}></div><div class="details"${_scopeId4}><span class="name d-block mb-20"${_scopeId4}>${ssrInterpolate(cartItem.product.name)}</span>`);
                                if (typeof cartItem.configurable_options != "undefined") {
                                  _push5(`<div${_scopeId4}><!--[-->`);
                                  ssrRenderList(cartItem.configurable_options, (option, index) => {
                                    _push5(`<span class="product-options d-block"${_scopeId4}><span class="product-options-title"${_scopeId4}>${ssrInterpolate(option.option_label)}: </span><span class="product-options-value"${_scopeId4}>${ssrInterpolate(option.value_label)}</span></span>`);
                                  });
                                  _push5(`<!--]--></div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<div class="d-flex align-items-center"${_scopeId4}><div class="quantity-input d-flex me-5"${_scopeId4}><input type="number" min="1"${ssrRenderAttr("value", cartItem.quantity)} name="quantity" readonly="readonly"${_scopeId4}></div><div${_scopeId4}>${ssrInterpolate(formatCurrency(cartItem.prices.row_total_including_tax.value))}</div></div></div></div>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(cartItems), (cartItem) => {
                                  return openBlock(), createBlock("div", {
                                    class: "d-flex align-items-center py-20",
                                    key: cartItem.id
                                  }, [
                                    createVNode("div", { class: "img" }, [
                                      createVNode("img", {
                                        src: cartItem.product.image.small,
                                        alt: cartItem.product.name
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    createVNode("div", { class: "details" }, [
                                      createVNode("span", { class: "name d-block mb-20" }, toDisplayString(cartItem.product.name), 1),
                                      typeof cartItem.configurable_options != "undefined" ? (openBlock(), createBlock("div", { key: 0 }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(cartItem.configurable_options, (option, index) => {
                                          return openBlock(), createBlock("span", {
                                            key: index,
                                            class: "product-options d-block"
                                          }, [
                                            createVNode("span", { class: "product-options-title" }, toDisplayString(option.option_label) + ": ", 1),
                                            createVNode("span", { class: "product-options-value" }, toDisplayString(option.value_label), 1)
                                          ]);
                                        }), 128))
                                      ])) : createCommentVNode("", true),
                                      createVNode("div", { class: "d-flex align-items-center" }, [
                                        createVNode("div", { class: "quantity-input d-flex me-5" }, [
                                          createVNode("input", {
                                            type: "number",
                                            min: "1",
                                            value: cartItem.quantity,
                                            name: "quantity",
                                            ref_for: true,
                                            ref: "inputQuantity",
                                            readonly: "readonly"
                                          }, null, 8, ["value"])
                                        ]),
                                        createVNode("div", null, toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="order-overview"${_scopeId3}><span class="group-subtitle pb-15 d-block"${_scopeId3}>${ssrInterpolate(_ctx.$t("order_overview"))}</span><ul class="cost-list list-unstyled pl-0 m-0"${_scopeId3}><li class="d-flex justify-content-between"${_scopeId3}><span class="d-block mr-20"${_scopeId3}>${ssrInterpolate(_ctx.$t("subtotal"))}</span><span class="d-block"${_scopeId3}>${ssrInterpolate(formatCurrency(unref(cartSubTotalPrice)))}</span></li>`);
                        if (shippingMethod.value != null) {
                          _push4(`<li class="d-flex justify-content-between"${_scopeId3}><span class="d-block mr-20"${_scopeId3}>${ssrInterpolate(shippingMethod.value.carrier_title)} / ${ssrInterpolate(shippingMethod.value.method_title)}</span>`);
                          if (shippingMethod.value.amount_including_tax) {
                            _push4(`<span class="d-block"${_scopeId3}>${ssrInterpolate(formatCurrency(shippingMethod.value.amount_including_tax.value))}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</li>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(cartTotalDiscounts), (price, index) => {
                          _push4(`<li class="d-flex justify-content-between"${_scopeId3}><span class="d-block mr-20"${_scopeId3}>${ssrInterpolate(price.label)}</span><span class="d-block"${_scopeId3}>- ${ssrInterpolate(formatCurrency(price.amount.value))}</span></li>`);
                        });
                        _push4(`<!--]--></ul><div class="total-grp d-flex justify-content-between"${_scopeId3}><span class="total"${_scopeId3}>${ssrInterpolate(_ctx.$t("total"))}</span><span class="text-blue"${_scopeId3}>${ssrInterpolate(formatCurrency(unref(cartTotalPrice)))}</span></div><ul class="cost-list list-unstyled pl-0 m-0 pb-0"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(cartTotalTaxPrices), (price, index) => {
                          _push4(`<li class="d-flex justify-content-between"${_scopeId3}><span class="d-block mr-20"${_scopeId3}>${ssrInterpolate(price.label)}</span>`);
                          if (price) {
                            _push4(`<span class="d-block"${_scopeId3}>${ssrInterpolate(formatCurrency(price.amount.value))}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</li>`);
                        });
                        _push4(`<!--]--></ul></div><div class="coupon pt-15 mb-15"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BLink, mergeProps({
                          class: "collapse-opener group-subtitle d-block mb-10 border-0",
                          onClick: () => {
                          }
                        }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, void 0, void 0, { "coupon-collapse": true })), {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("coupon_discount"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("coupon_discount")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_BCollapse, {
                          id: "coupon-collapse",
                          collapsed: "",
                          class: "pb-15"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_BFormInput, {
                                modelValue: couponCode.value,
                                "onUpdate:modelValue": ($event) => couponCode.value = $event,
                                type: "text",
                                placeholder: _ctx.$t("fill_out_discount_code")
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BButton, {
                                onClick: addCoupon,
                                class: "py-3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("add"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("add")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              if (appliedCouponCodes.value && appliedCouponCodes.value[0]) {
                                _push5(`<div class="pt-10"${_scopeId4}>${ssrInterpolate(_ctx.$t("applied_coupon_code"))}: ${ssrInterpolate(appliedCouponCodes.value[0].code)} `);
                                _push5(ssrRenderComponent(_component_BLink, {
                                  href: "#",
                                  onClick: ($event) => removeCouponCode(),
                                  class: "lnr lnr-cross pl-5"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode(_component_BFormInput, {
                                    modelValue: couponCode.value,
                                    "onUpdate:modelValue": ($event) => couponCode.value = $event,
                                    type: "text",
                                    placeholder: _ctx.$t("fill_out_discount_code")
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                                  createVNode(_component_BButton, {
                                    onClick: addCoupon,
                                    class: "py-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("add")), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                appliedCouponCodes.value && appliedCouponCodes.value[0] ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "pt-10"
                                }, [
                                  createTextVNode(toDisplayString(_ctx.$t("applied_coupon_code")) + ": " + toDisplayString(appliedCouponCodes.value[0].code) + " ", 1),
                                  createVNode(_component_BLink, {
                                    href: "#",
                                    onClick: ($event) => removeCouponCode(),
                                    class: "lnr lnr-cross pl-5"
                                  }, null, 8, ["onClick"])
                                ])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_BFormCheckbox, {
                          class: "pl-30",
                          id: "newsletter",
                          modelValue: SubscribeNewsletter.value,
                          "onUpdate:modelValue": ($event) => SubscribeNewsletter.value = $event,
                          name: "news-letter-subscribe",
                          value: "yes",
                          "unchecked-value": "no"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("subscription_newsletter"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("subscription_newsletter")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="terms"${_scopeId3}>${ssrInterpolate(_ctx.$t("terms_warning"))}</span>`);
                        _push4(ssrRenderComponent(_component_BButton, {
                          onClick: submitForm,
                          disabled: buttonClicked.value,
                          variant: "info",
                          class: "text-light w-100 text-uppercase checkout-btn"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("pay"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("pay")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-gray py-10 px-20" }, [
                            createVNode("span", { class: "group-title d-block" }, [
                              createVNode("i", { class: "lnr lnr-checkmark-circle me-10" }),
                              createTextVNode(toDisplayString(_ctx.$t("order_overview")), 1)
                            ]),
                            createVNode("div", { class: "cart-details pb-15" }, [
                              withDirectives(createVNode(_component_BLink, {
                                href: "#",
                                class: "d-block mb-10 group-subtitle border-0 collapse-opener",
                                innerHTML: getItemsInCart.value
                              }, null, 8, ["innerHTML"]), [
                                [
                                  _directive_b_toggle,
                                  void 0,
                                  void 0,
                                  { "cart-details-collapse": true }
                                ]
                              ]),
                              createVNode(_component_BCollapse, {
                                id: "cart-details-collapse",
                                class: "bg-white",
                                visible: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(cartItems), (cartItem) => {
                                    return openBlock(), createBlock("div", {
                                      class: "d-flex align-items-center py-20",
                                      key: cartItem.id
                                    }, [
                                      createVNode("div", { class: "img" }, [
                                        createVNode("img", {
                                          src: cartItem.product.image.small,
                                          alt: cartItem.product.name
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      createVNode("div", { class: "details" }, [
                                        createVNode("span", { class: "name d-block mb-20" }, toDisplayString(cartItem.product.name), 1),
                                        typeof cartItem.configurable_options != "undefined" ? (openBlock(), createBlock("div", { key: 0 }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(cartItem.configurable_options, (option, index) => {
                                            return openBlock(), createBlock("span", {
                                              key: index,
                                              class: "product-options d-block"
                                            }, [
                                              createVNode("span", { class: "product-options-title" }, toDisplayString(option.option_label) + ": ", 1),
                                              createVNode("span", { class: "product-options-value" }, toDisplayString(option.value_label), 1)
                                            ]);
                                          }), 128))
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { class: "d-flex align-items-center" }, [
                                          createVNode("div", { class: "quantity-input d-flex me-5" }, [
                                            createVNode("input", {
                                              type: "number",
                                              min: "1",
                                              value: cartItem.quantity,
                                              name: "quantity",
                                              ref_for: true,
                                              ref: "inputQuantity",
                                              readonly: "readonly"
                                            }, null, 8, ["value"])
                                          ]),
                                          createVNode("div", null, toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "order-overview" }, [
                              createVNode("span", { class: "group-subtitle pb-15 d-block" }, toDisplayString(_ctx.$t("order_overview")), 1),
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
                              createVNode("div", { class: "total-grp d-flex justify-content-between" }, [
                                createVNode("span", { class: "total" }, toDisplayString(_ctx.$t("total")), 1),
                                createVNode("span", { class: "text-blue" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
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
                            createVNode("div", { class: "coupon pt-15 mb-15" }, [
                              withDirectives((openBlock(), createBlock(_component_BLink, {
                                class: "collapse-opener group-subtitle d-block mb-10 border-0",
                                onClick: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("coupon_discount")), 1)
                                ]),
                                _: 1
                              }, 8, ["onClick"])), [
                                [
                                  _directive_b_toggle,
                                  void 0,
                                  void 0,
                                  { "coupon-collapse": true }
                                ]
                              ]),
                              createVNode(_component_BCollapse, {
                                id: "coupon-collapse",
                                collapsed: "",
                                class: "pb-15"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode(_component_BFormInput, {
                                      modelValue: couponCode.value,
                                      "onUpdate:modelValue": ($event) => couponCode.value = $event,
                                      type: "text",
                                      placeholder: _ctx.$t("fill_out_discount_code")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                                    createVNode(_component_BButton, {
                                      onClick: addCoupon,
                                      class: "py-3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("add")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  appliedCouponCodes.value && appliedCouponCodes.value[0] ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "pt-10"
                                  }, [
                                    createTextVNode(toDisplayString(_ctx.$t("applied_coupon_code")) + ": " + toDisplayString(appliedCouponCodes.value[0].code) + " ", 1),
                                    createVNode(_component_BLink, {
                                      href: "#",
                                      onClick: ($event) => removeCouponCode(),
                                      class: "lnr lnr-cross pl-5"
                                    }, null, 8, ["onClick"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_BFormCheckbox, {
                              class: "pl-30",
                              id: "newsletter",
                              modelValue: SubscribeNewsletter.value,
                              "onUpdate:modelValue": ($event) => SubscribeNewsletter.value = $event,
                              name: "news-letter-subscribe",
                              value: "yes",
                              "unchecked-value": "no"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("subscription_newsletter")), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("span", { class: "terms" }, toDisplayString(_ctx.$t("terms_warning")), 1),
                            createVNode(_component_BButton, {
                              onClick: submitForm,
                              disabled: buttonClicked.value,
                              variant: "info",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "row" }, [
                      createVNode(_component_BCol, { lg: "4" }, {
                        default: withCtx(() => [
                          !isLoggedIn.value ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$1), { key: 1 }))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BCol, {
                        lg: "4",
                        class: "pt-20 pt-lg-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "group" }, [
                            createVNode("div", { class: "group-title d-flex align-items-center mb-5" }, [
                              createVNode("div", { class: "delivery-icon me-8" }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "delivery"
                                })
                              ]),
                              createVNode("span", null, toDisplayString(_ctx.$t("shipping_method")), 1)
                            ]),
                            deliveryOptions.value.length == 0 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("fill_address_information")), 1)) : createCommentVNode("", true),
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
                                          createVNode("span", { class: "mx-6 delivery-price d-block" }, toDisplayString(formatCurrency(deliveryOption.amount.value)) + " ", 1),
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
                              createVNode("div", { class: "payment-icon me-8" }, [
                                createVNode("img", {
                                  src: _imports_1,
                                  alt: "payment"
                                })
                              ]),
                              createVNode("span", { class: "d-block" }, toDisplayString(_ctx.$t("payment_method")), 1)
                            ]),
                            deliveryOptions.value.length == 0 || shippingMethod.value == null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("fill_shipping_options")), 1)) : (openBlock(), createBlock("div", { key: 1 }, [
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
                                          createVNode("div", { class: "payment-option-img" }, [
                                            createVNode("img", {
                                              src: `${app_url.value}/media/graphql/icons/50x32/${paymentOption.code}.png`,
                                              alt: paymentOption.code
                                            }, null, 8, ["src", "alt"])
                                          ]),
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
                          createVNode("div", { class: "bg-gray py-10 px-20" }, [
                            createVNode("span", { class: "group-title d-block" }, [
                              createVNode("i", { class: "lnr lnr-checkmark-circle me-10" }),
                              createTextVNode(toDisplayString(_ctx.$t("order_overview")), 1)
                            ]),
                            createVNode("div", { class: "cart-details pb-15" }, [
                              withDirectives(createVNode(_component_BLink, {
                                href: "#",
                                class: "d-block mb-10 group-subtitle border-0 collapse-opener",
                                innerHTML: getItemsInCart.value
                              }, null, 8, ["innerHTML"]), [
                                [
                                  _directive_b_toggle,
                                  void 0,
                                  void 0,
                                  { "cart-details-collapse": true }
                                ]
                              ]),
                              createVNode(_component_BCollapse, {
                                id: "cart-details-collapse",
                                class: "bg-white",
                                visible: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(cartItems), (cartItem) => {
                                    return openBlock(), createBlock("div", {
                                      class: "d-flex align-items-center py-20",
                                      key: cartItem.id
                                    }, [
                                      createVNode("div", { class: "img" }, [
                                        createVNode("img", {
                                          src: cartItem.product.image.small,
                                          alt: cartItem.product.name
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      createVNode("div", { class: "details" }, [
                                        createVNode("span", { class: "name d-block mb-20" }, toDisplayString(cartItem.product.name), 1),
                                        typeof cartItem.configurable_options != "undefined" ? (openBlock(), createBlock("div", { key: 0 }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(cartItem.configurable_options, (option, index) => {
                                            return openBlock(), createBlock("span", {
                                              key: index,
                                              class: "product-options d-block"
                                            }, [
                                              createVNode("span", { class: "product-options-title" }, toDisplayString(option.option_label) + ": ", 1),
                                              createVNode("span", { class: "product-options-value" }, toDisplayString(option.value_label), 1)
                                            ]);
                                          }), 128))
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { class: "d-flex align-items-center" }, [
                                          createVNode("div", { class: "quantity-input d-flex me-5" }, [
                                            createVNode("input", {
                                              type: "number",
                                              min: "1",
                                              value: cartItem.quantity,
                                              name: "quantity",
                                              ref_for: true,
                                              ref: "inputQuantity",
                                              readonly: "readonly"
                                            }, null, 8, ["value"])
                                          ]),
                                          createVNode("div", null, toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "order-overview" }, [
                              createVNode("span", { class: "group-subtitle pb-15 d-block" }, toDisplayString(_ctx.$t("order_overview")), 1),
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
                              createVNode("div", { class: "total-grp d-flex justify-content-between" }, [
                                createVNode("span", { class: "total" }, toDisplayString(_ctx.$t("total")), 1),
                                createVNode("span", { class: "text-blue" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
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
                            createVNode("div", { class: "coupon pt-15 mb-15" }, [
                              withDirectives((openBlock(), createBlock(_component_BLink, {
                                class: "collapse-opener group-subtitle d-block mb-10 border-0",
                                onClick: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("coupon_discount")), 1)
                                ]),
                                _: 1
                              }, 8, ["onClick"])), [
                                [
                                  _directive_b_toggle,
                                  void 0,
                                  void 0,
                                  { "coupon-collapse": true }
                                ]
                              ]),
                              createVNode(_component_BCollapse, {
                                id: "coupon-collapse",
                                collapsed: "",
                                class: "pb-15"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode(_component_BFormInput, {
                                      modelValue: couponCode.value,
                                      "onUpdate:modelValue": ($event) => couponCode.value = $event,
                                      type: "text",
                                      placeholder: _ctx.$t("fill_out_discount_code")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                                    createVNode(_component_BButton, {
                                      onClick: addCoupon,
                                      class: "py-3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("add")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  appliedCouponCodes.value && appliedCouponCodes.value[0] ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "pt-10"
                                  }, [
                                    createTextVNode(toDisplayString(_ctx.$t("applied_coupon_code")) + ": " + toDisplayString(appliedCouponCodes.value[0].code) + " ", 1),
                                    createVNode(_component_BLink, {
                                      href: "#",
                                      onClick: ($event) => removeCouponCode(),
                                      class: "lnr lnr-cross pl-5"
                                    }, null, 8, ["onClick"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_BFormCheckbox, {
                              class: "pl-30",
                              id: "newsletter",
                              modelValue: SubscribeNewsletter.value,
                              "onUpdate:modelValue": ($event) => SubscribeNewsletter.value = $event,
                              name: "news-letter-subscribe",
                              value: "yes",
                              "unchecked-value": "no"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("subscription_newsletter")), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("span", { class: "terms" }, toDisplayString(_ctx.$t("terms_warning")), 1),
                            createVNode(_component_BButton, {
                              onClick: submitForm,
                              disabled: buttonClicked.value,
                              variant: "info",
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
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode(unref(_sfc_main$4)),
              createVNode("section", { class: "checkout-details pt-3" }, [
                createVNode(_component_BContainer, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "row" }, [
                      createVNode(_component_BCol, { lg: "4" }, {
                        default: withCtx(() => [
                          !isLoggedIn.value ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$1), { key: 1 }))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BCol, {
                        lg: "4",
                        class: "pt-20 pt-lg-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "group" }, [
                            createVNode("div", { class: "group-title d-flex align-items-center mb-5" }, [
                              createVNode("div", { class: "delivery-icon me-8" }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "delivery"
                                })
                              ]),
                              createVNode("span", null, toDisplayString(_ctx.$t("shipping_method")), 1)
                            ]),
                            deliveryOptions.value.length == 0 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("fill_address_information")), 1)) : createCommentVNode("", true),
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
                                          createVNode("span", { class: "mx-6 delivery-price d-block" }, toDisplayString(formatCurrency(deliveryOption.amount.value)) + " ", 1),
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
                              createVNode("div", { class: "payment-icon me-8" }, [
                                createVNode("img", {
                                  src: _imports_1,
                                  alt: "payment"
                                })
                              ]),
                              createVNode("span", { class: "d-block" }, toDisplayString(_ctx.$t("payment_method")), 1)
                            ]),
                            deliveryOptions.value.length == 0 || shippingMethod.value == null ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(_ctx.$t("fill_shipping_options")), 1)) : (openBlock(), createBlock("div", { key: 1 }, [
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
                                          createVNode("div", { class: "payment-option-img" }, [
                                            createVNode("img", {
                                              src: `${app_url.value}/media/graphql/icons/50x32/${paymentOption.code}.png`,
                                              alt: paymentOption.code
                                            }, null, 8, ["src", "alt"])
                                          ]),
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
                          createVNode("div", { class: "bg-gray py-10 px-20" }, [
                            createVNode("span", { class: "group-title d-block" }, [
                              createVNode("i", { class: "lnr lnr-checkmark-circle me-10" }),
                              createTextVNode(toDisplayString(_ctx.$t("order_overview")), 1)
                            ]),
                            createVNode("div", { class: "cart-details pb-15" }, [
                              withDirectives(createVNode(_component_BLink, {
                                href: "#",
                                class: "d-block mb-10 group-subtitle border-0 collapse-opener",
                                innerHTML: getItemsInCart.value
                              }, null, 8, ["innerHTML"]), [
                                [
                                  _directive_b_toggle,
                                  void 0,
                                  void 0,
                                  { "cart-details-collapse": true }
                                ]
                              ]),
                              createVNode(_component_BCollapse, {
                                id: "cart-details-collapse",
                                class: "bg-white",
                                visible: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(cartItems), (cartItem) => {
                                    return openBlock(), createBlock("div", {
                                      class: "d-flex align-items-center py-20",
                                      key: cartItem.id
                                    }, [
                                      createVNode("div", { class: "img" }, [
                                        createVNode("img", {
                                          src: cartItem.product.image.small,
                                          alt: cartItem.product.name
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      createVNode("div", { class: "details" }, [
                                        createVNode("span", { class: "name d-block mb-20" }, toDisplayString(cartItem.product.name), 1),
                                        typeof cartItem.configurable_options != "undefined" ? (openBlock(), createBlock("div", { key: 0 }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(cartItem.configurable_options, (option, index) => {
                                            return openBlock(), createBlock("span", {
                                              key: index,
                                              class: "product-options d-block"
                                            }, [
                                              createVNode("span", { class: "product-options-title" }, toDisplayString(option.option_label) + ": ", 1),
                                              createVNode("span", { class: "product-options-value" }, toDisplayString(option.value_label), 1)
                                            ]);
                                          }), 128))
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { class: "d-flex align-items-center" }, [
                                          createVNode("div", { class: "quantity-input d-flex me-5" }, [
                                            createVNode("input", {
                                              type: "number",
                                              min: "1",
                                              value: cartItem.quantity,
                                              name: "quantity",
                                              ref_for: true,
                                              ref: "inputQuantity",
                                              readonly: "readonly"
                                            }, null, 8, ["value"])
                                          ]),
                                          createVNode("div", null, toDisplayString(formatCurrency(cartItem.prices.row_total_including_tax.value)), 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "order-overview" }, [
                              createVNode("span", { class: "group-subtitle pb-15 d-block" }, toDisplayString(_ctx.$t("order_overview")), 1),
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
                              createVNode("div", { class: "total-grp d-flex justify-content-between" }, [
                                createVNode("span", { class: "total" }, toDisplayString(_ctx.$t("total")), 1),
                                createVNode("span", { class: "text-blue" }, toDisplayString(formatCurrency(unref(cartTotalPrice))), 1)
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
                            createVNode("div", { class: "coupon pt-15 mb-15" }, [
                              withDirectives((openBlock(), createBlock(_component_BLink, {
                                class: "collapse-opener group-subtitle d-block mb-10 border-0",
                                onClick: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("coupon_discount")), 1)
                                ]),
                                _: 1
                              }, 8, ["onClick"])), [
                                [
                                  _directive_b_toggle,
                                  void 0,
                                  void 0,
                                  { "coupon-collapse": true }
                                ]
                              ]),
                              createVNode(_component_BCollapse, {
                                id: "coupon-collapse",
                                collapsed: "",
                                class: "pb-15"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode(_component_BFormInput, {
                                      modelValue: couponCode.value,
                                      "onUpdate:modelValue": ($event) => couponCode.value = $event,
                                      type: "text",
                                      placeholder: _ctx.$t("fill_out_discount_code")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                                    createVNode(_component_BButton, {
                                      onClick: addCoupon,
                                      class: "py-3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("add")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  appliedCouponCodes.value && appliedCouponCodes.value[0] ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "pt-10"
                                  }, [
                                    createTextVNode(toDisplayString(_ctx.$t("applied_coupon_code")) + ": " + toDisplayString(appliedCouponCodes.value[0].code) + " ", 1),
                                    createVNode(_component_BLink, {
                                      href: "#",
                                      onClick: ($event) => removeCouponCode(),
                                      class: "lnr lnr-cross pl-5"
                                    }, null, 8, ["onClick"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_BFormCheckbox, {
                              class: "pl-30",
                              id: "newsletter",
                              modelValue: SubscribeNewsletter.value,
                              "onUpdate:modelValue": ($event) => SubscribeNewsletter.value = $event,
                              name: "news-letter-subscribe",
                              value: "yes",
                              "unchecked-value": "no"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("subscription_newsletter")), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("span", { class: "terms" }, toDisplayString(_ctx.$t("terms_warning")), 1),
                            createVNode(_component_BButton, {
                              onClick: submitForm,
                              disabled: buttonClicked.value,
                              variant: "info",
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
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Checkout-D9yse52l.js.map
