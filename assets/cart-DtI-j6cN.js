import axios from "axios";
import { g as getCurrentLanguage, C as CONFIG_JSON, l as logger, b as i18n, a as CONFIG_JSON$1 } from "../entry-server.js";
class QLStringify {
  stringify(obj) {
    let start = "";
    let end = "";
    if (typeof obj === "object") {
      if (Array.isArray(obj) == true) {
        start = "[ " + start;
        end = " ]" + end;
      } else {
        start = "{ " + start;
        end = " }" + end;
      }
    }
    return start + end;
  }
  /*
  strObj(obj) {
    let start = "{";
      let end = "}";
      
      obj.forEach((set, idx) => {
      })
  }
  */
}
const qls = new QLStringify();
async function createGuestCart() {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    //Authorization: "Bearer " + config.shop.accessToken,
    Store: storeview
  };
  const query = " mutation {createEmptyCart}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("createGuestCart", "data-resolver carts", e)();
    console.log(e);
    throw e;
  });
  if (retval.data.data.createEmptyCart != null) {
    return retval.data.data.createEmptyCart;
  } else {
    return false;
  }
}
async function getFreeShipping() {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    //Authorization: "Bearer " + config.shop.accessToken,
    Store: storeview
  };
  const query = " query { freeShippingAmount { default_amount include_tax messages { countries { iso2_code } amount include_tax } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
    //data: { query: query },
  }).catch((e) => {
    logger.error("freeShippingAmount", "data-resolver carts", e)();
    console.log(e);
    throw e;
  });
  if (retval.data.data.freeShippingAmount != null) {
    return retval.data.data.freeShippingAmount;
  } else {
    return false;
  }
}
async function setShippingAddressById(id, store2) {
  var _a;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let cart = await checkCart(store2);
  if (cart) {
    const query = 'mutation { setShippingAddressesOnCart( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" shipping_addresses: [ { customer_address_id: ' + id + " } ] } ) { cart { shipping_addresses { firstname lastname company coc vat_id street city region { code label } postcode telephone country { code label } } } } }";
    const retval = await axios({
      url: CONFIG_JSON.shop.graphQLURL,
      method: "POST",
      headers,
      data: { query }
    }).catch((e) => {
      logger.error("setShippingAddressById", "data-resolver carts", e)();
      throw e;
    });
    if (((_a = retval.data.data) == null ? void 0 : _a.setShippingAddressesOnCart) != null) {
      return true;
    } else {
      if (retval.data.errors != null) {
        retval.data.errors.forEach((element) => {
          if (store2.getters["user/getIsLoggedIn"] != false) {
            if (element.extensions.category === "graphql-authorization") {
              return store2.dispatch("user/sessionExpired", { store: store2 });
            }
          }
          const msg = {
            type: "danger",
            title: i18n.global.t("set_shipping_address"),
            text: element.message
          };
          store2.dispatch("messages/sendMessage", { message: msg });
        });
      }
      return false;
    }
  } else {
    return false;
  }
}
async function setShippingAddress(address, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let query = 'mutation { setShippingAddressesOnCart( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" shipping_addresses: [ { address: {';
  if ("country_code" in address) {
    query = query + " country_code: " + JSON.stringify(address.country_code);
  }
  if ("street" in address) {
    query = query + " street: " + JSON.stringify(address.street);
  }
  if ("postcode" in address) {
    query = query + " postcode: " + JSON.stringify(address.postcode);
  }
  if ("city" in address) {
    query = query + " city: " + JSON.stringify(address.city);
  }
  if ("telephone" in address) {
    query = query + " telephone: " + JSON.stringify(address.telephone);
  }
  if ("firstname" in address) {
    query = query + " firstname: " + JSON.stringify(address.firstname);
  }
  if ("lastname" in address) {
    query = query + " lastname: " + JSON.stringify(address.lastname);
  }
  if ("company" in address) {
    query = query + " company: " + JSON.stringify(address.company);
  }
  if ("region" in address) {
    query = query + " region: " + JSON.stringify(address.region);
  }
  if ("region_id" in address) {
    query = query + " region: " + JSON.stringify(address.region_id);
  }
  if ("vat_id" in address) {
    query = query + " vat_id: " + JSON.stringify(address.vat_id.toUpperCase());
  }
  if ("coc" in address) {
    query = query + " coc: " + JSON.stringify(address.coc);
  }
  query = query + " } } ] } ) { cart { shipping_addresses { firstname lastname company street city region { code label } postcode telephone country { code label } } } } }";
  let cart = await checkCart(store2);
  if (cart) {
    const retval = await axios({
      url: CONFIG_JSON.shop.graphQLURL,
      method: "POST",
      headers,
      data: { query }
    }).catch((e) => {
      logger.error("setShippingAddress", "data-resolver carts", e)();
      throw e;
    });
    if (retval.data.data.setShippingAddressesOnCart != null) {
      return true;
    } else {
      if (retval.data.errors != null) {
        retval.data.errors.forEach((element) => {
          if (store2.getters["user/getIsLoggedIn"] != false) {
            if (element.extensions.category === "graphql-authorization") {
              return store2.dispatch("user/sessionExpired", { store: store2 });
            }
          }
          const msg = {
            type: "danger",
            title: i18n.global.t("set_shipping_address"),
            text: element.message
          };
          store2.dispatch("messages/sendMessage", { message: msg });
        });
      }
      return false;
    }
  } else {
    return false;
  }
}
async function setBillingAddressById(id, store2) {
  var _a;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let cart = await checkCart(store2);
  if (cart) {
    const query = 'mutation { setBillingAddressOnCart( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" billing_address:  { customer_address_id: ' + id + "}} ) { cart { billing_address { firstname lastname company coc vat_id street city region { code label } postcode telephone country { code label } } } } }";
    const retval = await axios({
      url: CONFIG_JSON.shop.graphQLURL,
      method: "POST",
      headers,
      data: { query }
    }).catch((e) => {
      logger.error("setBillingAddress", "data-resolver carts", e)();
      throw e;
    });
    if (((_a = retval.data.data) == null ? void 0 : _a.setBillingAddressOnCart) != null) {
      return true;
    } else {
      if (retval.data.errors != null) {
        retval.data.errors.forEach((element) => {
          if (store2.getters["user/getIsLoggedIn"] != false) {
            if (element.extensions.category === "graphql-authorization") {
              return store2.dispatch("user/sessionExpired", { store: store2 });
            }
          }
          const msg = {
            type: "danger",
            title: i18n.global.t("set_billing_address"),
            text: element.message
          };
          store2.dispatch("messages/sendMessage", { message: msg });
        });
      }
      return false;
    }
  } else {
    const msg = {
      type: "danger",
      title: i18n.global.t("set_email_address"),
      text: i18n.global.t("Cart is no longer valid")
    };
    store2.dispatch("messages/sendMessage", { message: msg });
    return false;
  }
}
async function setBillingAddress(address, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let query = 'mutation { setBillingAddressOnCart( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" billing_address:  { address: {';
  if ("country_code" in address) {
    query = query + " country_code: " + JSON.stringify(address.country_code);
  }
  if ("street" in address) {
    query = query + " street: " + JSON.stringify(address.street);
  }
  if ("postcode" in address) {
    query = query + " postcode: " + JSON.stringify(address.postcode);
  }
  if ("city" in address) {
    query = query + " city: " + JSON.stringify(address.city);
  }
  if ("telephone" in address) {
    query = query + " telephone: " + JSON.stringify(address.telephone);
  }
  if ("firstname" in address) {
    query = query + " firstname: " + JSON.stringify(address.firstname);
  }
  if ("lastname" in address) {
    query = query + " lastname: " + JSON.stringify(address.lastname);
  }
  if ("company" in address) {
    query = query + " company: " + JSON.stringify(address.company);
  }
  if ("region" in address) {
    query = query + " region: " + JSON.stringify(address.region);
  }
  if ("region_id" in address) {
    query = query + " region: " + JSON.stringify(address.region_id);
  }
  if ("vat_id" in address) {
    query = query + " vat_id: " + JSON.stringify(address.vat_id.toUpperCase());
  }
  if ("coc" in address) {
    query = query + " coc: " + JSON.stringify(address.coc);
  }
  query = query + " }}} ) { cart { billing_address { firstname lastname company street city region { code label } postcode telephone country { code label } } } } }";
  let cart = await checkCart(store2);
  if (cart) {
    const retval = await axios({
      url: CONFIG_JSON.shop.graphQLURL,
      method: "POST",
      headers,
      data: { query }
    }).catch((e) => {
      logger.error("setBillingAddress", "data-resolver carts", e)();
      throw e;
    });
    if (retval.data.data.setBillingAddressOnCart != null) {
      return true;
    } else {
      if (retval.data.errors != null) {
        retval.data.errors.forEach((element) => {
          if (store2.getters["user/getIsLoggedIn"] != false) {
            if (element.extensions.category === "graphql-authorization") {
              return store2.dispatch("user/sessionExpired", { store: store2 });
            }
          }
          const msg = {
            type: "danger",
            title: i18n.global.t("set_billing_address"),
            text: element.message
          };
          store2.dispatch("messages/sendMessage", { message: msg });
        });
      }
      return false;
    }
  } else {
    const msg = {
      type: "danger",
      title: i18n.global.t("set_email_address"),
      text: i18n.global.t("Cart is no longer valid")
    };
    store2.dispatch("messages/sendMessage", { message: msg });
    return false;
  }
}
async function getCustomerCartToken(store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store2.getters["user/getUserToken"],
    Store: storeview
  };
  const query = "{ customerCart{id}}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getCustomerCartToken", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data.customerCart.id != null) {
    return retval.data.data.customerCart.id;
  } else {
    return false;
  }
}
async function checkCart(store2) {
  if (store2.getters["cart/getCartServerToken"] || localStorage.getItem("cartServerToken")) {
    return true;
  } else {
    return false;
  }
}
async function loadCart(store2) {
  var _a;
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  const query = '{ cart(cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '")' + graphqlResolved.queryFields.cart + "}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    // + "?query=" + encodeURIComponent(query),
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("loadCart", "data-resolver carts", e)();
    throw e;
  });
  if (((_a = retval.data.data) == null ? void 0 : _a.cart) != null) {
    return retval.data.data.cart;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
      });
    }
    return false;
  }
}
async function getPaymentmethods(store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  const query = '{ getPaymentMethods(cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '") { label code additional_fields { code label options {label value} type } instructions } }';
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadCart", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data && retval.data.data.getPaymentMethods != null) {
    return retval.data.data.getPaymentMethods;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
      });
    }
    return false;
  }
}
async function setEmailToCart(email, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  {
    const query = 'mutation { setGuestEmailOnCart( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" email: "' + email + '" } ) { cart { email } } }';
    const retval = await axios({
      url: CONFIG_JSON.shop.graphQLURL,
      method: "POST",
      headers,
      data: { query }
    }).catch((e) => {
      logger.error("setEmailToCart", "data-resolver carts", e)();
      throw e;
    });
    if (retval.data.data.setGuestEmailOnCart != null) {
      return true;
    } else {
      if (retval.data.errors != null) {
        retval.data.errors.forEach((element) => {
          if (store2.getters["user/getIsLoggedIn"] != false) {
            if (element.extensions.category === "graphql-authorization") {
              return store2.dispatch("user/sessionExpired", { store: store2 });
            }
          }
          const msg = {
            type: "danger",
            title: i18n.global.t("set_email_address"),
            text: element.message
          };
          store2.dispatch("messages/sendMessage", { message: msg });
        });
      }
      return false;
    }
  }
}
async function mergeCart(oldToken, newToken, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store2.getters["user/getUserToken"],
    Store: storeview
  };
  const query = 'mutation { mergeCarts(source_cart_id: "' + oldToken + '", destination_cart_id: "' + newToken + '") { items { id product { name sku } quantity } } }';
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("mergeCart", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data.mergeCarts != null) {
    return retval.data.data.mergeCarts;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
      });
    }
    return false;
  }
}
async function addSimpleProduct(item, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let cartId = store2.getters["cart/getCartServerToken"];
  let cart = await checkCart(store2);
  if (!cart) {
    if (store2.getters["user/getIsLoggedIn"] != true) {
      cartId = await createGuestCart();
    } else {
      return store2.dispatch("user/sessionExpired", { store: store2 });
    }
  }
  let query = 'mutation { addSimpleProductsToCart( input: { cart_id: "' + cartId + '" ';
  query = query + "cart_items:[" + item + "] }";
  query = query + " ) { cart { items { id product { name sku } quantity } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("mergeCart", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data.addSimpleProductsToCart != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
        const msg = {
          type: "danger",
          title: i18n.global.t("Add to cart"),
          text: element.message
        };
        store2.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function addSampleProductToCart(sku) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let cartId = store.getters["cart/getCartServerToken"];
  let cart = await checkCart();
  if (!cart) {
    if (store.getters["user/getIsLoggedIn"] != true) {
      cartId = await createGuestCart();
    } else {
      return store.dispatch("user/sessionExpired");
    }
  }
  let query = 'mutation { addSampleProductToCart( input: { cart_id: "' + cartId + '" ';
  query = query + 'sku:"' + sku + '" }';
  query = query + " ) { cart { items { id product { name sku } quantity } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("mergeCart", "data-resolver carts", e)();
    throw e;
  });
  if (retval) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store.dispatch("user/sessionExpired");
          }
        }
        const msg = {
          type: "danger",
          title: i18n.t("Add to cart"),
          text: element.message
        };
        store.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function addProduct(items, store2) {
  let q = null;
  if (typeof items != "object") {
    q = items;
  } else {
    q = qls.stringify(items);
  }
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let cartId = store2.getters["cart/getCartServerToken"];
  let cart = await checkCart(store2);
  if (!cart) {
    if (store2.getters["user/getIsLoggedIn"] != true) {
      cartId = await createGuestCart();
    } else {
      return store2.dispatch("user/sessionExpired", { store: store2 });
    }
  }
  let query = 'mutation { addProductsToCart( cartId: "' + cartId + '" ';
  query = query + "cartItems:" + q;
  query = query + " ) { cart { items { id product { name sku } quantity } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("mergeCart", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data.addProductsToCart != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
        const msg = {
          type: "danger",
          title: i18n.global.t("Add to cart"),
          text: element.message
        };
        store2.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function addConfigurableProduct(item, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let cartId = store2.getters["cart/getCartServerToken"];
  let cart = await checkCart(store2);
  if (!cart) {
    if (store2.getters["user/getIsLoggedIn"] != true) {
      cartId = await createGuestCart();
    } else {
      return store2.dispatch("user/sessionExpired", { store: store2 });
    }
  }
  let query = 'mutation { addConfigurableProductsToCart( input: { cart_id: "' + cartId + '" ';
  query = query + "cart_items:[" + item + "] }";
  query = query + " ) { cart { items { id product { name sku } quantity } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("addConfigurableProduct", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data.addConfigurableProductsToCart != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
        const msg = {
          type: "danger",
          title: i18n.global.t("Add to cart"),
          text: element.message
        };
        store2.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function addBundleProduct(item, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  await loadCart(store2);
  let query = 'mutation { addBundleProductsToCart( input: { cart_id: "' + store2.getters["cart/getCartServerToken"] + '" ';
  query = query + "cart_items:[" + item + "] }";
  query = query + " ) { cart { items { id product { name sku } quantity } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("addBundleProductsToCart", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data.addBundleProductsToCart != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
        const msg = {
          type: "danger",
          title: i18n.global.t("Add to cart"),
          text: element.message
        };
        store2.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function setShippingMethodsOnCart(carrier, method, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  const query = 'mutation { setShippingMethodsOnCart( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" shipping_methods: [ { carrier_code: "' + carrier + '" method_code: "' + method + '" } ] } ) {  cart { shipping_addresses { selected_shipping_method { carrier_code carrier_title method_code method_title amount { value currency } } } } } }';
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("setShippingMethodsOnCart", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data.setShippingMethodsOnCart != null) {
    const paymentmethods = await getPaymentmethods(store2);
    store2.commit("cart/setPaymentMethods", paymentmethods);
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
        const msg = {
          type: "danger",
          title: i18n.global.t("set_email_address"),
          text: element.message
        };
        store2.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function updateCartItem(id, quantity, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let query = 'mutation { updateCartItems( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" ';
  query = query + "cart_items:[ {cart_item_id:" + id + " quantity: " + quantity + "}] }";
  query = query + " ) { cart { items { id product { name sku } quantity } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("updateCartItems", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data.updateCartItems != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
        const msg = {
          type: "danger",
          title: i18n.global.t("Add to cart"),
          text: element.message
        };
        store2.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function removeCartItem(id, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let query = 'mutation { removeItemFromCart( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" ';
  query = query + "cart_item_id:" + id + "}";
  query = query + " ) { cart { items { id product { name sku } quantity } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("removeItemFromCart", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data && retval.data.data.removeItemFromCart != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
        const msg = {
          type: "danger",
          title: i18n.global.t("Add to cart"),
          text: element.message
        };
        store2.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function addCouponCode(code, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let query = 'mutation { applyCouponToCart( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" ';
  query = query + "coupon_code:" + JSON.stringify(code) + "}";
  query = query + " ) { cart { items { id product { name sku } quantity } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("addCouponCode", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data && retval.data.data.applyCouponToCart != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
        const msg = {
          type: "danger",
          title: i18n.global.t("Add to cart"),
          text: element.message
        };
        store2.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function removeCouponCode(store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let query = 'mutation { removeCouponFromCart( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" ';
  query = query + "}";
  query = query + " ) { cart { items { id product { name sku } quantity } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("removeCouponCode", "data-resolver carts", e)();
    throw e;
  });
  if (retval.data.data.removeCouponFromCart != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store2.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store2.dispatch("user/sessionExpired", { store: store2 });
          }
        }
        const msg = {
          type: "danger",
          title: i18n.global.t("Add to cart"),
          text: element.message
        };
        store2.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function setPaymentMethod(store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  const paymentOptions = store2.getters["cart/getPaymentMethodOptions"];
  const options = paymentOptions[store2.getters["cart/getPaymentMethod"]];
  let queryOptions = "";
  if (options != null) {
    const keys = Object.keys(paymentOptions[store2.getters["cart/getPaymentMethod"]]);
    keys.forEach((element) => {
      queryOptions = queryOptions = '{ code: "' + element + '" value: "' + paymentOptions[store2.getters["cart/getPaymentMethod"]][element] + '"} ';
    });
    if (queryOptions != "") {
      queryOptions = "additional_data:[" + queryOptions + "]";
    }
  }
  let query = 'mutation { setPaymentMethod( input:  { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '"  payment_method:{ code:"' + store2.getters["cart/getPaymentMethod"] + '" ' + queryOptions + "}";
  if (store2.getters["cart/getComment"] != "") {
    query = query + ' customer_note: "' + store2.getters["cart/getComment"] + '" ';
  }
  if (CONFIG_JSON.createAccountPossible) {
    let create_account = store2.getters["cart/getCreateAccount"];
    let password = store2.getters["cart/getAccountPassword"];
    query = query + (create_account ? "create_account:" + create_account + ' password:"' + password + '"' : "");
  }
  query = query + "}) {order { id, increment_id hash } redirect_url }}";
  let cart = await checkCart(store2);
  if (cart) {
    const retval = await axios({
      url: CONFIG_JSON.shop.graphQLURL,
      method: "POST",
      headers,
      data: { query }
    }).catch((e) => {
      logger.error("setPaymentMethod", "data-resolver carts", e)();
      throw e;
    });
    store2.commit("cart/setAccountPassword", null);
    if (retval.data.data.setPaymentMethod != null) {
      return retval.data.data.setPaymentMethod;
    } else {
      if (retval.data.errors != null) {
        retval.data.errors.forEach((element) => {
          if (store2.getters["user/getIsLoggedIn"] != false) {
            if (element.extensions.category === "graphql-authorization") {
              return store2.dispatch("user/sessionExpired", { store: store2 });
            }
          }
          const msg = {
            type: "danger",
            title: i18n.global.t("set_shipping_address"),
            text: element.message
          };
          store2.dispatch("messages/sendMessage", { message: msg });
        });
      }
      return false;
    }
  } else {
    const msg = {
      type: "danger",
      title: i18n.global.t("set_email_address"),
      text: i18n.global.t("Cart is no longer valid")
    };
    store2.dispatch("messages/sendMessage", { message: msg });
    return false;
  }
}
async function getOrderInfoFromHash(hash_id, store2) {
  const graphqlResolved = await CONFIG_JSON$1;
  store2.commit("cart/setServerToken", null);
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    //Authorization: "Bearer " + config.shop.accessToken,
    Store: storeview
  };
  const query = 'query { order(hash: "' + hash_id + '") ' + graphqlResolved.queryFields.orderInfo;
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
    //data: { query: query },
  }).catch((e) => {
    logger.error("order", "data-resolver carts", e)();
    console.log(e);
    throw e;
  });
  if (retval.data.data.order != null) {
    return retval.data.data.order;
  } else {
    return false;
  }
}
async function getPickupLocations() {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    //Authorization: "Bearer " + config.shop.accessToken,
    Store: storeview
  };
  const query = "query { pickupLocations( pageSize: 20 ) { items { pickup_location_code name phone postcode country_id } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
    //data: { query: query },
  }).catch((e) => {
    logger.error("order", "data-resolver carts", e)();
    console.log(e);
    throw e;
  });
  if (retval.data.data.pickupLocations != null) {
    return retval.data.data.pickupLocations;
  } else {
    return false;
  }
}
async function setPickupLocation(location, address, address_id, store2) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  let headers = {};
  if (store2.getters["user/getIsLoggedIn"] != false) {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + store2.getters["user/getUserToken"],
      Store: storeview
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON.shop.consumerKey,
      Store: storeview
    };
  }
  let query = 'mutation { setShippingAddressesOnCart( input: { cart_id: "' + (store2.getters["cart/getCartServerToken"] ?? localStorage.getItem("cartServerToken")) + '" shipping_addresses: [ { ';
  if (address_id != null) {
    query = query + "customer_address_id: " + address_id;
  } else {
    query = query + " address: {";
    if ("country" in address) {
      query = query + " country_code: " + JSON.stringify(address.country.code);
    }
    if ("street" in address) {
      query = query + " street: " + JSON.stringify(address.street);
    }
    if ("postcode" in address) {
      query = query + " postcode: " + JSON.stringify(address.postcode);
    }
    if ("city" in address) {
      query = query + " city: " + JSON.stringify(address.city);
    }
    if ("telephone" in address) {
      query = query + " telephone: " + JSON.stringify(address.telephone);
    }
    if ("firstname" in address) {
      query = query + " firstname: " + JSON.stringify(address.firstname);
    }
    if ("lastname" in address) {
      query = query + " lastname: " + JSON.stringify(address.lastname);
    }
    if ("company" in address) {
      if (address.company != null) {
        query = query + " company: " + JSON.stringify(address.company);
      }
    }
  }
  query = query + ' } pickup_location_code: "' + location + '" } ] } ) { cart { shipping_addresses { firstname lastname company street city region { code label } postcode telephone country { code label } pickup_location_code} } } }';
  let cart = await checkCart(store2);
  if (cart) {
    const retval = await axios({
      url: CONFIG_JSON.shop.graphQLURL,
      method: "POST",
      headers,
      data: { query }
    }).catch((e) => {
      logger.error("setPickupLocation", "data-resolver carts", e)();
      throw e;
    });
    if (retval.data.data.setShippingAddressesOnCart != null) {
      return true;
    } else {
      if (retval.data.errors != null) {
        retval.data.errors.forEach((element) => {
          if (store2.getters["user/getIsLoggedIn"] != false) {
            if (element.extensions.category === "graphql-authorization") {
              return store2.dispatch("user/sessionExpired", { store: store2 });
            }
          }
          const msg = {
            type: "danger",
            title: i18n.global.t("set_shipping_address"),
            text: element.message
          };
          store2.dispatch("messages/sendMessage", { message: msg });
        });
      }
      return false;
    }
  } else {
    const msg = {
      type: "danger",
      title: i18n.global.t("set_email_address"),
      text: i18n.global.t("Cart is no longer valid")
    };
    store2.dispatch("messages/sendMessage", { message: msg });
    return false;
  }
}
export {
  addCouponCode as a,
  setBillingAddress as b,
  setBillingAddressById as c,
  setPickupLocation as d,
  setShippingAddress as e,
  getPickupLocations as f,
  getCustomerCartToken as g,
  setPaymentMethod as h,
  setShippingMethodsOnCart as i,
  setShippingAddressById as j,
  createGuestCart as k,
  addProduct as l,
  mergeCart as m,
  addSampleProductToCart as n,
  addBundleProduct as o,
  addConfigurableProduct as p,
  addSimpleProduct as q,
  removeCouponCode as r,
  setEmailToCart as s,
  removeCartItem as t,
  updateCartItem as u,
  getFreeShipping as v,
  loadCart as w,
  getPaymentmethods as x,
  getOrderInfoFromHash as y
};
//# sourceMappingURL=cart-DtI-j6cN.js.map
