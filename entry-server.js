import { basename } from "node:path";
import { renderToString } from "vue/server-renderer";
import { renderSSRHead } from "@unhead/ssr";
import { getCurrentInstance, inject, ref, computed, unref, createSSRApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";
import { createStore } from "vuex";
import { createRouter as createRouter$2, createMemoryHistory } from "vue-router";
import { createI18n } from "vue-i18n";
import axios from "axios";
import { sync } from "vuex-router-sync";
import VueLazyload from "vue3-lazyload";
import { createHead, setHeadInjectionHandler } from "@unhead/vue";
import { createGtm } from "@gtm-support/vue-gtm";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { isClient, computedEager } from "@vueuse/core";
import { isString } from "@vue/shared";
import "lodash-unified";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const app_url = "https://m2.schinsleder.test.e-bricks.cloud";
const app_name = "schinsleder";
const server = {
  host: "localhost",
  port: "8082"
};
const shop = {
  url: "https://m2.schinsleder.test.e-bricks.cloud/",
  restURI: "https://m2.schinsleder.test.e-bricks.cloud/index.php/rest/V1",
  graphQLURL: "https://m2.schinsleder.test.e-bricks.cloud/graphql",
  consumerKey: "g9xiyl8i9naami5uc83ifvgctkd7i4ym",
  consumerSecret: "gz4icv61osop80qkib4xqsvblbrmo32z",
  accessToken: "jkxq58cvpk0oft52tfp0oku7pxr4xmkf",
  accessSecret: "woear4gicj4g203p6via51sgr0dxq5yh"
};
const template = {
  name: "esf_thehague_schinsleder",
  htmlUrl: true
};
const languages = {
  available: [
    "nl"
  ],
  "default": "nl",
  nl: {
    root_category: "2",
    storeview: "schinsleder_nl",
    locale: "nl_NL"
  }
};
const customers = {
  defaultCountry: "NL"
};
const postcode_validation = {
  enabled: true,
  countries: [
    "NL"
  ],
  url: "https://datasets.e-tailorscloud.com/api/v1/dataset/postcode",
  client_id: "ca2ca362-2983-11eb-96f9-9600001ed36e",
  client_secret: "4D7mqHkWMcgF81cIdZbHhw6s98eg8YSe3fzM51rMU"
};
const vat_validation = {
  enabled: true,
  url: "https://datasets.e-tailorscloud.com/api/v2/dataset/vatcode",
  client_id: "2d80526a-299d-11eb-b74f-9600001ed36e",
  client_secret: "Dw3xFYCAnzn1jolQf34zHZ3yaPxspJZ4hf6GXNALj",
  requester_vat_id: "NL801473093B01",
  requester_country_code: "NL"
};
const console$1 = {
  showErrorOnProduction: true,
  verbosityLevel: "everything"
};
const redis = {
  host: "127.0.0.1",
  port: "6379",
  password: null
};
const expireHeaders = {
  "default": "30d",
  "application/json": "24h",
  "image/png": "7d"
};
const cart = {
  minicartCountType: "quantity"
};
const sortingOptions = {
  "default": [
    "position",
    "ASC"
  ],
  bestsold: [
    "num_sales",
    "ASC"
  ],
  price_up: [
    "price",
    "ASC"
  ],
  price_down: [
    "price",
    "DESC"
  ],
  name_up: [
    "name",
    "ASC"
  ],
  name_down: [
    "name",
    "DESC"
  ],
  newest: [
    "created_at",
    "ASC"
  ]
};
const gtmId = "GTM-XXXXX";
const ga4enabled = false;
const uaDisabled = false;
const bundleList = 593;
const sortDefault = {
  sortBy: "position",
  direction: "DESC"
};
const sidebarCategoryId = 3;
const allow_reorder = true;
const manifestOptions = {
  icons: [
    {
      src: "/media/wysiwyg/favicon.fkv.192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/media/wysiwyg/favicon.fkv.512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ],
  start_url: "https://m2.schinsleder.test.e-bricks.cloud",
  id: "/",
  theme_color: "#8b5720",
  background_color: "#fff"
};
const iconPaths = {
  favicon32: "/media/wysiwyg/favicon.fkv.512x512.png",
  favicon16: "/media/wysiwyg/favicon.fkv.512x512.png",
  appleTouchIcon: "/media/wysiwyg/favicon.fkv.512x512.png",
  maskIcon: "/media/wysiwyg/favicon.fkv.512x512.png",
  msTileImage: "/media/wysiwyg/favicon.fkv.512x512.png"
};
const CONFIG_JSON$1 = {
  app_url,
  app_name,
  server,
  shop,
  template,
  languages,
  customers,
  postcode_validation,
  vat_validation,
  console: console$1,
  redis,
  expireHeaders,
  cart,
  sortingOptions,
  gtmId,
  ga4enabled,
  uaDisabled,
  bundleList,
  sortDefault,
  sidebarCategoryId,
  allow_reorder,
  manifestOptions,
  iconPaths
};
const currentTemplate$3 = CONFIG_JSON$1.template.name;
const store = __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../base/store/index.js": () => import("./assets/index-PklOOZQD.js").then((n) => n.i), "../esf_thehague_schinsleder/store/index.js": () => import("./assets/index-DAE6efPk.js") }), `../${currentTemplate$3}/store/index.js`, 4).then((registers) => registers.default);
async function createRouter$1() {
  const currentTemplate2 = CONFIG_JSON$1.template.name;
  const routes = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../base/router/index.js": () => import("./assets/index-Bs-WhAa1.js"), "../esf_thehague_schinsleder/router/index.js": () => import("./assets/index-DtMRXCGM.js") }), `../${currentTemplate2}/router/index.js`, 4);
  return routes.default;
}
let currentTemplate$2 = "";
{
  currentTemplate$2 = CONFIG_JSON$1.template.name;
}
let loadLangs = {};
CONFIG_JSON$1.languages.available.map((l) => {
  __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../src/base/i18n/en.json": () => import("./assets/en-ByTc99eS.js"), "../../src/base/i18n/nl copy.json": () => import("./assets/nl copy-CleK0of5.js"), "../../src/base/i18n/nl.json": () => import("./assets/nl-DOOmB1hM.js"), "../../src/esf_thehague_schinsleder/i18n/en.json": () => import("./assets/en-BPPbpEvp.js"), "../../src/esf_thehague_schinsleder/i18n/nl.json": () => import("./assets/nl-Ca7tdaqv.js") }), `../../src/${currentTemplate$2}/i18n/${l}.json`, 6).then((result) => {
    loadLangs[l] = result.default;
  });
});
const i18n = createI18n({
  legacy: false,
  // you must set `false`, to use Composition API
  locale: getI18nDefault(),
  // set locale
  fallbackLocale: CONFIG_JSON$1.languages.default,
  messages: loadLangs
});
function getI18nDefault() {
  return CONFIG_JSON$1.languages.default;
}
const loadedLanguages = [CONFIG_JSON$1.languages.default];
function setI18nLanguage(lang) {
  i18n.global.locale.value = lang;
  return i18n.global.locale.value;
}
function getCurrentLanguage() {
  return i18n.global.locale.value;
}
async function loadLanguageAsync(lang) {
  if (i18n.global.locale.value === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }
  return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `../../src/${currentTemplate$2}i18n/${lang}.json`, 5).then((messages) => {
    i18n.setLocaleMessage(lang, messages.default);
    loadedLanguages.push(lang);
    i18n.global.locale.value = lang;
    return i18n.global.locale.value;
  });
}
const isServer = typeof window === "undefined";
const helpers = {
  /**
   *
   * @param {float|int} amount
   * @param {boolean} showCurrencySign
   * @returns {string}
   */
  formatCurrency(amount, showCurrencySign = true) {
    let formatter;
    if (showCurrencySign) {
      formatter = new Intl.NumberFormat(CONFIG_JSON$1.currency.locale, {
        style: "currency",
        currency: CONFIG_JSON$1.currency.currency
      });
    } else {
      formatter = new Intl.NumberFormat(CONFIG_JSON$1.currency.locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return CONFIG_JSON$1.currency.useDash ? formatter.format(amount).replace(/,00$/, ",-") : CONFIG_JSON$1.currency.useZeros == false ? formatter.format(amount).replace(/,00$/, "") : formatter.format(amount);
    }
    return CONFIG_JSON$1.currency.useDash ? formatter.format(amount).replace(/,00$/, ",-") : CONFIG_JSON$1.currency.useZeros == false ? formatter.format(amount).replace(/,00$/, "") : formatter.format(amount);
  }
};
function slugify(attribute, value) {
  const regExp = /[^0-9a-zA-Z]+/gm;
  attribute.replace(regExp, "-").toLowerCase();
  if (typeof value == "string") {
    value = value.replace(regExp, "-").toLowerCase();
  } else if (Array.isArray(value)) {
    value.forEach((val, index) => {
      value[index] = val.replace(regExp, "-").toLowerCase();
    });
  } else {
    logger.debug("slugify", "helper", value)();
  }
  return attribute + ":" + value;
}
function slugifyAggregation(attribute) {
  var _a;
  (_a = attribute == null ? void 0 : attribute.options) == null ? void 0 : _a.forEach((option, index) => {
    option.label = slugify(attribute.attribute_code, option.label).split(":")[1];
    attribute.options[index] = option;
  });
  return attribute;
}
function createToast(options) {
  if (!isServer) {
    const template2 = document.createElement("template");
    const id = "toast" + Date.now();
    const selector = `#${id}`;
    template2.innerHTML = `
          <div
              id="${id}"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              class="c-toast c-toast-solid c-toast-append c-toast-${options.type == "success" ? "success" : "danger"}"
          >
              <div tabindex="0" class="toast show">
              <header class="toast-header toast-title">
                  <strong class="mr-2">${options.title || ""}</strong>
                  <button type="button" aria-label="Close" class="close ms-auto mb-1" onclick="document.querySelector('${selector}').remove()">×</button>
              </header>
              <div class="toast-body">${options.text}</div>
              </div>
          </div>
        `;
    const node = template2.content.firstElementChild;
    document.querySelector("#c-toaster-slot").appendChild(node);
    setTimeout(() => {
      var _a;
      (_a = document.querySelector(`${selector}`)) == null ? void 0 : _a.remove();
    }, 5e3);
  }
}
const bgColorStyle = (color) => `color: white; background: ${color}; padding: 4px; font-weight: bold; font-size: 0.8em'`;
class Logger {
  /**
   * Logger verbosity level
   */
  //verbosityLevel = "";
  /**
   * Is production environment
   */
  //sProduction = false;
  /**
   * Force to show error on production
   */
  //showErrorOnProduction = false;
  /**
   * Logger constructor
   *
   * @param verbosityLevel
   * @param showErrorOnProduction
   */
  constructor(verbosityLevel = "everything", showErrorOnProduction = false) {
    this.verbosityLevel = verbosityLevel;
    this.showErrorOnProduction = showErrorOnProduction;
    this.isProduction = process.env.NODE_ENV === "production";
  }
  /**
   * Convert message to string - as it may be object, array either primitive
   * @param payload
   */
  convertToString(payload) {
    if (typeof payload === "string" || typeof payload === "boolean" || typeof payload === "number")
      return payload;
    if (payload && payload.message) return payload.message;
    return JSON.stringify(payload);
  }
  /**
   * Check if method can print into console
   *
   * @param {string} method
   */
  canPrint(method) {
    const allowedMethods = [];
    if (this.verbosityLevel === "everything" && this.isProduction === false) {
      allowedMethods.push(...["info", "warn", "error", "debug"]);
    } else if (this.verbosityLevel === "info-and-higher" && this.isProduction === false) {
      allowedMethods.push(...["info", "warn", "error"]);
    } else if (this.verbosityLevel === "only-errors" && (this.isProduction === false || this.showErrorOnProduction === true)) {
      allowedMethods.push("error");
    } else if (this.isProduction === true || this.showErrorOnProduction === true) {
      allowedMethods.push("error");
    }
    return allowedMethods.indexOf(method) !== -1;
  }
  /**
   * Inform about debug events happening in the app
   * Don't forget to invoke created function after passing arguments to keep context
   * `Logger.debug(...args)()`
   * @param message
   * @param tag short tag specifying area where message was spawned (eg. cart, sync, module)
   * @param context meaningful data related to this message
   */
  debug(message, tag = null, context = null) {
    if (!this.canPrint("debug")) {
      return () => {
      };
    }
    if (isServer) {
      return console.debug.bind(
        console,
        (tag ? `[${tag}] ` : "") + this.convertToString(message),
        context
      );
    }
    if (tag) {
      return console.log.bind(
        window.console,
        "%cESF%c %c" + tag + "%c " + this.convertToString(message),
        bgColorStyle("grey"),
        "color: inherit",
        bgColorStyle("gray"),
        "font-weight: normal",
        context
      );
    } else {
      return console.log.bind(
        window.console,
        "%cESF%c " + this.convertToString(message),
        bgColorStyle("grey"),
        "font-weight: normal",
        context
      );
    }
  }
  /**
   * Inform about log events happening in the app
   * Don't forget to invoke created function after passing arguments to keep context
   * `Logger.log(...args)()`
   * @param message
   * @param tag short tag specifying area where message was spawned (eg. cart, sync, module)
   * @param context meaningful data related to this message
   */
  log(message, tag = null, context = null) {
    return this.info(message, tag, context);
  }
  /**
   * Inform about succesful events happening in the app
   * Don't forget to invoke created function after passing arguments to keep context
   * `Logger.info(...args)()`
   * @param message
   * @param tag short tag specifying area where message was spawned (eg. cart, sync, module)
   * @param context meaningful data related to this message
   */
  info(message, tag = null, context = null) {
    if (!this.canPrint("info")) {
      return () => {
      };
    }
    if (isServer) {
      return console.log.bind(
        console,
        (tag ? `[${tag}] ` : "") + this.convertToString(message),
        context
      );
    }
    if (tag) {
      return console.log.bind(
        window.console,
        "%cESF%c %c" + tag + "%c " + this.convertToString(message),
        bgColorStyle("green"),
        "color: inherit",
        bgColorStyle("gray"),
        "font-weight: bold",
        context
      );
    } else {
      return console.log.bind(
        window.console,
        "%cESF%c " + this.convertToString(message),
        bgColorStyle("green"),
        "font-weight: bold",
        context
      );
    }
  }
  /**
   * Inform about potential problems that may be a cause of app break
   * Don't forget to invoke created function after passing arguments to keep context
   * `Logger.warn(...args)()`
   * @param message
   * @param tag short tag specifying area where message was spawned (eg. cart, sync, module)
   * @param context meaningful data related to this message
   */
  warn(message, tag = null, context = null) {
    if (!this.canPrint("warn")) {
      return () => {
      };
    }
    if (isServer) {
      return console.warn.bind(
        console,
        (tag ? `[${tag}] ` : "") + this.convertToString(message),
        context
      );
    }
    if (tag) {
      return console.warn.bind(
        window.console,
        "%cESF%c %c" + tag + "%c " + this.convertToString(message),
        bgColorStyle("orange"),
        "color: inherit",
        bgColorStyle("gray"),
        "font-weight: bold",
        context
      );
    } else {
      return console.warn.bind(
        window.console,
        "%cESF%c " + this.convertToString(message),
        bgColorStyle("orange"),
        "font-weight: bold",
        context
      );
    }
  }
  /**
   * Inform about errors that will break the app
   * Don't forget to invoke created function after passing arguments to keep context
   * `Logger.error(...args)()`
   * @param message
   * @param tag short tag specifying area where message was spawned (eg. cart, sync, module)
   * @param context meaningful data related to this message
   */
  error(message, tag = null, context = null) {
    if (isServer) {
      return console.error.bind(
        console,
        (tag ? `[${tag}] ` : "") + this.convertToString(message),
        context
      );
    }
    if (this.canPrint("error")) {
      if (tag) {
        return console.error.bind(
          window.console,
          "%cESF%c %c" + tag + "%c " + this.convertToString(message),
          bgColorStyle("red"),
          "color: inherit",
          bgColorStyle("gray"),
          "font-weight: bold",
          context
        );
      } else {
        return console.error.bind(
          window.console,
          "%cESF%c " + this.convertToString(message),
          bgColorStyle("red"),
          "font-weight: bold",
          context
        );
      }
    }
    return () => {
    };
  }
}
const logger = new Logger(
  CONFIG_JSON$1.console.verbosityLevel,
  CONFIG_JSON$1.console.showErrorOnProduction
);
function cleanPath(to) {
  let path = to.path;
  let split = to.path.split("/");
  if (CONFIG_JSON$1.languages.available.includes(split[1])) {
    if (split.length > 1) {
      split = split.splice(2);
      path = "/" + split.join("/");
    }
  }
  return path;
}
function cleanFullPath(to) {
  let fullpath = to.fullPath;
  fullpath = fullpath.replace(/\/\//g, "/");
  return fullpath;
}
async function extractFilters(to, newFilters = [], store2) {
  const routeQuery = to.query;
  let aggregations = {};
  await store2.dispatch("category/loadAggregations", { category_id: newFilters.category });
  delete newFilters.category;
  aggregations = store2.getters["category/getAggregations"];
  const allFilters = {};
  if (routeQuery["sort"]) allFilters.sort = routeQuery.sort;
  if (routeQuery["page"]) allFilters.page = routeQuery.page;
  if (routeQuery["page-size"]) allFilters.pageSize = routeQuery["page-size"];
  const filters = {};
  newFilters.forEach((filter) => {
    let filterArray = [];
    filterArray = filter.split(":");
    filters[filterArray[0]] = filterArray[1];
  });
  for (const filter in filters) {
    aggregations.forEach((aggregation) => {
      if (aggregation.attribute_code == filter) {
        const newAggregation = slugifyAggregation(aggregation);
        if (filters[filter].indexOf(",") === -1) {
          const foundValue = newAggregation.options.find((el) => el.label == filters[filter]);
          if (foundValue) {
            filters[filter] = foundValue.value;
          }
        } else {
          let filterValues = filters[filter].split(",");
          for (let i = 0, len = filterValues.length; i < len; i++) {
            const foundValue = newAggregation.options.find((el) => el.label == filterValues[i]);
            if (foundValue) {
              filterValues[i] = foundValue.value;
            }
          }
          filters[filter] = filterValues.join(",");
        }
      }
    });
  }
  Object.keys(routeQuery).forEach((element) => {
    if (element.startsWith("filter-")) {
      const attribute_code = element.replace("filter-", "");
      filters[attribute_code] = routeQuery[element];
    }
  });
  if (Object.keys(filters).length) allFilters["filters"] = filters;
  return Object.keys(allFilters).length ? allFilters : false;
}
function extractSearchFilters(to) {
  const routeQuery = to.query;
  const allFilters = {};
  if (routeQuery["sort"]) allFilters.sort = routeQuery.sort;
  if (routeQuery["page"]) allFilters.page = routeQuery.page;
  if (routeQuery["page-size"]) allFilters.pageSize = routeQuery["page-size"];
  const filters = {};
  Object.keys(routeQuery).forEach((element) => {
    if (element.startsWith("filter-")) {
      const attribute_code = element.replace("filter-", "");
      filters[attribute_code] = routeQuery[element];
    }
  });
  if (Object.keys(filters).length) allFilters["filters"] = filters;
  return Object.keys(allFilters).length ? allFilters : false;
}
const currentTemplate$1 = CONFIG_JSON$1.template.name;
const CONFIG_JSON = __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../base/config/graphql.json": () => import("./assets/graphql-DbYlKFPS.js"), "../esf_thehague_schinsleder/config/graphql.json": () => import("./assets/graphql-kT1tCDgi.js") }), `../${currentTemplate$1}/config/graphql.json`, 4);
async function urlRoute(url) {
  const lang = getCurrentLanguage();
  const graphqlResolved = await CONFIG_JSON;
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = "{ route(url: " + JSON.stringify(url) + ") {__typename relative_url redirect_code type ... on ProductInterface { sku } ... on CmsPage { identifier url_key title content content_heading page_layout meta_title meta_description meta_keywords } ... on CategoryTree " + graphqlResolved.queryFields.category + "}}";
  try {
    const retval = await axios({
      url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
      method: "GET",
      headers
    });
    return retval.data.data.route;
  } catch (e) {
    console.log(e);
  }
}
async function beforeEachGuard(to, from, next, router, store2) {
  let lang = "";
  const split = to.path.split("/");
  if (CONFIG_JSON$1.languages.available.includes(split[1])) {
    lang = await loadLanguageAsync(split[1]).catch((e) => {
      logger.error("loadLanguageAsync1", "beforeEachGuard", e)();
      throw e;
    });
  } else {
    lang = await loadLanguageAsync(CONFIG_JSON$1.languages.default).catch((e) => {
      logger.error("loadLanguageAsync2", "beforeEachGuard", e)();
      throw e;
    });
  }
  const path = cleanPath(to);
  const fullpath = cleanFullPath(to);
  if (to.path === from.path) return next();
  let newRoute = path;
  let newFilter = [];
  if (path && path.indexOf(":") != -1) {
    let routeParts = path.split("/");
    if (routeParts) {
      let splitIndex = 0;
      routeParts.forEach((part, index) => {
        if (splitIndex > 0) {
          return;
        }
        if (part.indexOf(":") != -1) {
          splitIndex = index;
          return false;
        }
      });
      newRoute = routeParts.slice(0, splitIndex).join("/");
      if (CONFIG_JSON$1.use_slash_endings) {
        newRoute = newRoute + "/";
      }
      newRoute = newRoute.charAt(0) == "/" ? newRoute.slice(1) : newRoute;
      const filter_name = "/" + CONFIG_JSON$1.filter_name + "/";
      if (filter_name && newRoute.slice(-filter_name.length) == filter_name) {
        newRoute = newRoute.slice(0, -filter_name.length);
      }
      if (newRoute.endsWith("/f")) {
        newRoute = newRoute.slice(0, -2);
      }
      let filterArr = routeParts.slice(splitIndex);
      filterArr.forEach((el) => {
        if (el !== "") {
          newFilter.push(el);
        }
      });
    }
  }
  const resolve = await urlRoute(newRoute).catch((e) => {
    logger.error("urlResolver", "beforeEachGuard", e)();
    throw e;
  });
  if (resolve != null) {
    switch (resolve.type) {
      case "CATEGORY": {
        let load = true;
        const obj = store2.getters["category/getCurrentCategory"];
        if (obj != null && obj.id == resolve.id) {
          load = false;
        }
        if (load) {
          newFilter.category = resolve.id;
          const filter = await extractFilters(to, newFilter, store2);
          store2.dispatch("category/setCategory", {
            category: resolve,
            filter,
            store: store2
          });
        }
        break;
      }
      case "PRODUCT": {
        let load = true;
        const obj = store2.getters["product/getCurrentProduct"];
        if (obj != null) {
          if (obj.sku == resolve.sku) {
            load = false;
          }
        }
        if (load) {
          await store2.dispatch("product/loadWithSku", {
            sku: resolve.sku,
            store: store2
          }).catch((e) => {
            logger.error("product/loadWithSku", "beforeEachGuard", e)();
            throw e;
          });
        }
        break;
      }
      case "CMS_PAGE": {
        store2.dispatch("cmsPage/setPage", {
          page: resolve
        });
        break;
      }
      case "LANDING_PAGE": {
        store2.dispatch("landingPage/getMeta", {
          meta: resolve
        });
        break;
      }
    }
  }
  if (to.matched.length === 0) {
    const testRoute = router.options.routes.find((e) => {
      if (e.path === path) {
        return true;
      }
    });
    if (testRoute != null) {
      router.addRoutes({
        path: to.path,
        component: testRoute.component
      });
      next(fullpath);
      return;
    }
    if (resolve != null) {
      let route = false;
      switch (resolve.type) {
        case "CATEGORY": {
          const testPage = router.options.routes.find((e) => e.name === "category-page");
          if (testPage != null) {
            route = {
              name: "category-" + lang + "-" + path.replace("/", "-"),
              path: to.path,
              component: testPage.component
            };
          }
          break;
        }
        case "PRODUCT": {
          const testPage = router.options.routes.find((e) => e.name === "product-page");
          if (testPage != null) {
            route = {
              name: "product-" + lang + "-" + path.replace("/", "-"),
              path: to.path,
              component: testPage.component
            };
          }
          break;
        }
        case "CMS_PAGE": {
          const testPage = router.options.routes.find((e) => e.name === "cms-page");
          if (testPage != null) {
            route = {
              name: "cms-" + lang + "-" + path.replace("/", "-"),
              path: to.path,
              component: testPage.component
            };
          }
          break;
        }
        case "LANDING_PAGE": {
          const testPage = router.options.routes.find((e) => e.name === "landing-page");
          if (testPage != null) {
            route = {
              name: "landing-" + lang + "-" + path.replace("/", "-"),
              path: to.path,
              component: testPage.component
            };
          }
          break;
        }
      }
      if (route !== false) {
        router.addRoute(route);
        return next(fullpath);
      }
      return next();
    }
  } else {
    if (store2.getters["user/getIsLoggedIn"] == true) {
      if (to.name === "login") {
        return next({
          name: "account"
        });
      } else if (to.name === "create-account") {
        return next({
          name: "account"
        });
      } else if (to.name === "en-login") {
        return next({
          name: "en-account"
        });
      } else if (to.name === "en-create-account") {
        return next({
          name: "en-account"
        });
      }
    } else {
      if (to.name === "account") {
        return next({
          name: "login"
        });
      } else if (to.name === "en-account") {
        return next({
          name: "en-login"
        });
      }
    }
    return next();
  }
  return next("/page-not-found");
}
const createRouter = async (store2) => {
  const router = createRouter$2({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: createMemoryHistory(),
    routes: await createRouter$1(),
    scrollBehavior(to, from, savedPosition) {
      var _a;
      if (to.name.startsWith("category-nl")) {
        if ((_a = from.name) == null ? void 0 : _a.startsWith("category-nl")) {
          if (to.name == from.name && from.meta != "top") return savedPosition;
          else return { top: 0 };
        } else {
          return savedPosition;
        }
      } else return { top: 0 };
    }
  });
  router.beforeEach(async (to, from, next) => {
    store2.dispatch("setLoading", true);
    let toRoute = to;
    if (getCurrentLanguage() != CONFIG_JSON$1.languages.default && to.path.split("/")[1] != getCurrentLanguage()) {
      toRoute = {
        ...toRoute,
        path: "/" + getCurrentLanguage() + (to.path === "/" ? "" : to.path),
        fullPath: "/" + getCurrentLanguage() + (to.fullPath === "/" ? "" : to.fullPath)
      };
    }
    return await beforeEachGuard(toRoute, from, next, router, store2);
  });
  router.afterEach(async (to, from) => {
    if (cleanPath(from) != cleanPath(to) && to.path.split("/")[1] != getCurrentLanguage() && getCurrentLanguage() != CONFIG_JSON$1.languages.default) {
      router.push("/" + getCurrentLanguage() + to.fullPath);
    }
    setTimeout(() => {
      store2.dispatch("setLoading", false);
    }, 1e3);
  });
  return router;
};
function httpClient(req = {}) {
  const apiUrl = "http://localhost:8080";
  const httpClient2 = axios.create({
    // Change API url: depends on server side or client side
    baseURL: apiUrl
  });
  httpClient2.interceptors.request.use(async (config) => {
    let token = null;
    {
      if (req.cookies != null) {
        token = req.cookies.token;
      }
    }
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });
  httpClient2.interceptors.response.use(
    (response) => response,
    (err) => {
      if (err.response) {
        const { data } = err.response;
        return logger.error(data.error || "Oups!", err.response.status)();
      }
      return Promise.reject(err);
    }
  );
  return httpClient2;
}
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace);
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace();
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
const isUndefined = (val) => val === void 0;
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
  if (process.env.NODE_ENV !== "production") {
    const error = isString(scope) ? new ElementPlusError(`[${scope}] ${message}`) : scope;
    console.warn(error);
  }
}
const initial = {
  current: 0
};
const zIndex = ref(0);
const defaultInitialZIndex = 2e3;
const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
const zIndexContextKey = Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial) : initial;
  const zIndexInjection = getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0;
  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection);
    return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (!isClient && !inject(ZINDEX_INJECTION_KEY)) {
    debugWarn("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`);
  }
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useIdInjection = () => {
  return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
const useId = (deterministicId) => {
  const idInjection = useIdInjection();
  if (!isClient && idInjection === defaultIdInjection) {
    debugWarn("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  }
  const namespace = useGetDerivedNamespace();
  const idRef = computedEager(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
dom.watch();
library.add(fab);
library.add(fas);
library.add(far);
const currentTemplate = CONFIG_JSON$1.template.name;
__variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./base/scss/main.scss": () => Promise.resolve({                }), "./esf_thehague_schinsleder/scss/main.scss": () => Promise.resolve({                }) }), `./${currentTemplate}/scss/main.scss`, 4);
async function createApp(req = {}) {
  const { default: App } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./base/App.vue": () => import("./assets/App-92UvyEH7.js"), "./esf_thehague_schinsleder/App.vue": () => import("./assets/App-C0Yuxh93.js") }), `./${currentTemplate}/App.vue`, 3);
  const app = createSSRApp(App);
  const debug = true;
  const store$1 = createStore({
    modules: {},
    strict: debug
  });
  const registers = await store;
  registers.forEach((f) => f(app, store$1));
  const router = await createRouter(store$1);
  sync(store$1, router);
  const head = createHead();
  setHeadInjectionHandler(() => head);
  app.use(router).use(store$1).use(i18n).use(VueLazyload).use(createBootstrap()).use(
    createGtm({
      id: CONFIG_JSON$1.gtmId,
      defer: false,
      // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
      compatibility: false,
      enabled: false,
      debug: false,
      // Whether or not display console logs debugs (optional)
      loadScript: true,
      // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
      vueRouter: router
    })
  );
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.config.globalProperties.productionTip = false;
  app.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0
  });
  app.provide(ZINDEX_INJECTION_KEY, { current: 0 });
  app.provide("http", httpClient(req));
  return { app, router, head, store: store$1 };
}
async function render(url, manifest, req) {
  const { app, router, head, store: store2 } = await createApp(req);
  await router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await renderToString(app, ctx);
  const preloadLinks = rearrangeLinks(renderPreloadLinks(ctx.modules, manifest));
  const headPayload = await renderSSRHead(head);
  return [html, preloadLinks, headPayload, store2];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
function rearrangeLinks(html) {
  var _a;
  const linkRegex = /<link[^>]+>/g;
  const stylesheets = [];
  const preload = [];
  const others = [];
  (_a = html.match(linkRegex)) == null ? void 0 : _a.forEach((link) => {
    if (link.includes('rel="stylesheet"')) {
      stylesheets.push(link);
    } else if (link.includes('rel="preload"')) {
      preload.push(link);
    } else {
      others.push(link);
    }
  });
  return [...preload, ...stylesheets, ...others].join("");
}
export {
  CONFIG_JSON$1 as C,
  CONFIG_JSON as a,
  i18n as b,
  createToast as c,
  isNumber as d,
  useIdInjection as e,
  isStringNumber as f,
  getCurrentLanguage as g,
  helpers as h,
  isServer as i,
  debugWarn as j,
  isUndefined as k,
  logger as l,
  useId as m,
  isElement as n,
  useZIndex as o,
  isBoolean as p,
  useGetDerivedNamespace as q,
  extractSearchFilters as r,
  render,
  store as s,
  throwError as t,
  useNamespace as u
};
//# sourceMappingURL=entry-server.js.map
