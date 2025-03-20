import axios from "axios";
import { g as getCurrentLanguage, C as CONFIG_JSON, a as CONFIG_JSON$1, l as logger, b as i18n } from "../entry-server.js";
async function mergeGuestWishlist(guestWishlistId, userWishlistId, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  const query = "mutation {mergeWishlists (source_wishlist_id: $sourceWishlistId, destination_wishlist_id: $destinationWishlistId) { items { product { name meta_title } } items_count id } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: {
      query: query.replace("$sourceWishlistId", '"' + guestWishlistId + '"').replace("$destinationWishlistId", '"' + userWishlistId + '"')
    }
  }).catch((e) => {
    logger.error("mergeGuestWishlist", "data-resolver wishlist", e)();
    throw e;
  });
  if (retval.data.data.mergeGuestWishlist != null) {
    return retval.data.data.mergeGuestWishlist;
  } else {
    return false;
  }
}
async function login(username, password, store) {
  var _a;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = "mutation { generateCustomerToken(email: " + JSON.stringify(username) + ", password: " + JSON.stringify(password) + ") { token }}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("login", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.errors != null) {
    retval.data.errors.forEach((element) => {
      const msg = {
        type: "danger",
        title: "login_error",
        text: element.message
      };
      store.dispatch("messages/sendMessage", { message: msg });
    });
  }
  if (((_a = retval.data.data.generateCustomerToken) == null ? void 0 : _a.token) != null) {
    return retval.data.data.generateCustomerToken.token;
  } else {
    return false;
  }
}
async function createAccount(account, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  if (typeof account.is_subscribed == "undefined") {
    account.is_subscribed = false;
  }
  let query = "mutation { createCustomerWithAddress( input: {";
  if ("firstname" in account) {
    query = query + " firstname: " + JSON.stringify(account.firstname);
  }
  if ("middlename" in account) {
    query = query + " middlename: " + JSON.stringify(account.middlename);
  }
  if ("lastname" in account) {
    query = query + " lastname: " + JSON.stringify(account.lastname);
  }
  if ("prefix" in account) {
    query = query + " prefix: " + JSON.stringify(account.prefix);
  }
  if ("suffix" in account) {
    query = query + " suffix: " + JSON.stringify(account.suffix);
  }
  if ("email" in account) {
    query = query + " email: " + JSON.stringify(account.email);
  }
  if ("password" in account) {
    query = query + " password: " + JSON.stringify(account.password);
  }
  if ("is_subscribed" in account) {
    query = query + " is_subscribed: " + account.is_subscribed;
  }
  if ("gender" in account) {
    query = query + " gender: " + account.gender;
  }
  if ("date_of_birth" in account) {
    query = query + " date_of_birth: " + JSON.stringify(account.date_of_birth);
  }
  if ("taxvat" in account) {
    query = query + ' taxvat: "' + account.taxvat.toUpperCase() + '" ';
  }
  query = query + " address: {";
  if ("country_code" in account.address) {
    query = query + " country_code: " + account.address.country_code;
  }
  if ("street" in account.address) {
    query = query + " street: " + JSON.stringify(account.address.street);
  }
  if ("postcode" in account.address) {
    query = query + " postcode: " + JSON.stringify(account.address.postcode);
  }
  if ("city" in account.address) {
    query = query + " city: " + JSON.stringify(account.address.city);
  }
  if ("telephone" in account.address) {
    query = query + " telephone: " + JSON.stringify(account.address.telephone);
  }
  if ("firstname" in account) {
    query = query + " firstname: " + JSON.stringify(account.firstname);
  }
  if ("middlename" in account) {
    query = query + " middlename: " + JSON.stringify(account.middlename);
  }
  if ("lastname" in account) {
    query = query + " lastname: " + JSON.stringify(account.lastname);
  }
  if ("taxvat" in account) {
    query = query + ' vat_id: "' + account.taxvat.toUpperCase() + '" ';
  }
  if ("default_shipping" in account.address) {
    query = query + " default_shipping: " + account.address.default_shipping;
  }
  if ("default_billing" in account.address) {
    query = query + " default_billing: " + account.address.default_billing;
  }
  if ("company" in account) {
    query = query + " company: " + JSON.stringify(account.company);
  }
  if ("vat_id" in account) {
    query = query + ' vat_id: "' + account.taxvat.toUpperCase() + '" ';
  }
  if ("prefix" in account) {
    query = query + " prefix: " + JSON.stringify(account.prefix);
  }
  if ("suffix" in account) {
    query = query + " suffix: " + JSON.stringify(account.suffix);
  }
  query = query + "}";
  query = query + " } ) { token customer { firstname lastname email is_subscribed } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("createAccount", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.errors != null) {
    retval.data.errors.forEach((element) => {
      const msg = {
        type: "danger",
        title: "register_error",
        text: element.message
      };
      store.dispatch("messages/sendMessage", { message: msg });
    });
  }
  if (retval.data.data.createCustomerWithAddress != null) {
    return retval.data.data.createCustomerWithAddress.token;
  } else {
    return false;
  }
}
async function updateAccount(account, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  let query = "mutation { updateCustomer( input: {";
  if ("firstname" in account) {
    query = query + " firstname: " + JSON.stringify(account.firstname);
  }
  if ("middlename" in account) {
    query = query + " middlename: " + JSON.stringify(account.middlename);
  }
  if ("lastname" in account) {
    query = query + " lastname: " + JSON.stringify(account.lastname);
  }
  if ("prefix" in account) {
    query = query + " prefix: " + JSON.stringify(account.prefix);
  }
  if ("suffix" in account) {
    query = query + " suffix: " + JSON.stringify(account.suffix);
  }
  if ("email" in account) {
    query = query + " email: " + JSON.stringify(account.email);
  }
  if ("password" in account) {
    query = query + " password: " + JSON.stringify(account.password);
  }
  if ("is_subscribed" in account) {
    query = query + " is_subscribed: " + account.is_subscribed;
  }
  if ("gender" in account) {
    query = query + " gender: " + account.gender;
  }
  if ("date_of_birth" in account) {
    query = query + " date_of_birth: " + account.date_of_birth;
  }
  if ("taxvat" in account) {
    query = query + ' taxvat: "' + account.taxvat.toUpperCase() + '" ';
  }
  query = query + " } ) { customer { firstname lastname email is_subscribed } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("updateAccount", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data && retval.data.data.updateCustomer != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store.dispatch("user/sessionExpired", { store });
          }
        }
      });
    }
    return false;
  }
}
async function createGuestWishlist() {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    //Authorization: "Bearer " + config.shop.accessToken,
    Store: storeview
  };
  const query = " mutation {createEmptyWishlist}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("createGuestWishlist", "data-resolver wishlist", e)();
    throw e;
  });
  if (retval.data.data.createEmptyWishlist != null) {
    return retval.data.data.createEmptyWishlist;
  } else {
    return false;
  }
}
async function addProductToWishlist(sku, parentSku, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  let query = "mutation { addProductsToWishlist( ";
  query = query + 'wishlistId: "' + store.getters["user/getWishlistId"] + '"';
  query = query + ' wishlistItems: [{ sku: "' + sku + '"';
  if (parentSku != null) {
    query = query + ' parent_sku: "' + parentSku + '"';
  }
  query = query + " quantity: 1}]";
  query = query + " ) {user_errors { code message } wishlist { id items_count items { id qty product { url_key name sku id image { url } price_range { minimum_price { final_price { currency value } regular_price { currency value } } maximum_price { regular_price { currency value } } } } } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("addProductToWishlist", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data.addProductsToWishlist != null) {
    if (retval.data.data.addProductsToWishlist.user_errors.length > 0) {
      const msg = {
        type: "danger",
        title: "Wensenlijst",
        text: retval.data.data.addProductsToWishlist.user_errors[0].message
      };
      store.dispatch("messages/sendMessage", { message: msg });
    }
    return retval;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store.dispatch("user/sessionExpired", { store });
          }
        }
      });
    }
    return false;
  }
}
async function removeProductFromWishlist(id, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  let query = "mutation { removeProductsFromWishlist( ";
  query = query + 'wishlistId: "' + store.getters["user/getWishlistId"] + '"';
  query = query + ", wishlistItemsIds: [" + id + "]";
  query = query + " ) {user_errors { code message } wishlist { id items_count items { id qty product { url_key name sku id image { url } price_range { minimum_price { final_price { currency value } regular_price { currency value } } maximum_price { regular_price { currency value } } } } } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("removeProductFromWishlist", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data && retval.data.data.removeProductsFromWishlist != null) {
    return retval;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store.dispatch("user/sessionExpired", { store });
          }
        }
      });
    }
    return false;
  }
}
async function getCurrent(store) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  const query = graphqlResolved.queryFields.user;
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getCurrent", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data.customer != null) {
    return retval.data.data.customer;
  } else {
    return false;
  }
}
async function createAddress(address, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  let query = "mutation { createCustomerAddress(input: { ";
  if ("country_code" in address) {
    query = query + " country_code: " + address.country_code + " ";
  }
  if ("street" in address) {
    query = query + "street: " + JSON.stringify(address.street) + " ";
  }
  if ("postcode" in address) {
    query = query + "postcode: " + JSON.stringify(address.postcode);
  }
  if ("city" in address) {
    query = query + "city: " + JSON.stringify(address.city);
  }
  if ("telephone" in address) {
    query = query + "telephone: " + JSON.stringify(address.telephone);
  }
  if ("firstname" in address) {
    query = query + "firstname: " + JSON.stringify(address.firstname);
  }
  if ("middlename" in address) {
    query = query + "middlename: " + JSON.stringify(address.middlename);
  }
  if ("lastname" in address) {
    query = query + "lastname: " + JSON.stringify(address.lastname);
  }
  if ("default_shipping" in address) {
    query = query + "default_shipping: " + address.default_shipping + " ";
  }
  if ("default_billing" in address) {
    query = query + "default_billing: " + address.default_billing + " ";
  }
  if ("company" in address) {
    query = query + " company: " + JSON.stringify(address.company);
  }
  if ("vat_id" in address) {
    query = query + ' vat_id: "' + address.vat_id.toUpperCase() + '" ';
  }
  if ("prefix" in address) {
    query = query + " prefix: " + JSON.stringify(address.prefix);
  }
  if ("suffix" in address) {
    query = query + " suffix: " + JSON.stringify(address.suffix);
  }
  query = query + " }) { id region { region region_code } country_code street telephone postcode city default_shipping default_billing }}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("createAddress", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data.createCustomerAddress != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store.dispatch("user/sessionExpired", { store });
          }
        }
      });
    }
    return false;
  }
}
async function updateAddress(id, address, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  let query = "mutation { updateCustomerAddress(id:" + id + ", input: { ";
  if ("country_code" in address) {
    query = query + " country_code: " + address.country_code + " ";
  }
  if ("street" in address) {
    query = query + "street: " + JSON.stringify(address.street) + " ";
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
  if ("middlename" in address) {
    query = query + " middlename: " + JSON.stringify(address.middlename);
  }
  if ("lastname" in address) {
    query = query + " lastname: " + JSON.stringify(address.lastname);
  }
  if ("default_shipping" in address) {
    query = query + "default_shipping: " + address.default_shipping + " ";
  }
  if ("default_billing" in address) {
    query = query + "default_billing: " + address.default_billing + " ";
  }
  if ("company" in address) {
    query = query + " company: " + JSON.stringify(address.company);
  }
  if ("vat_id" in address) {
    query = query + ' vat_id: "' + address.vat_id.toUpperCase() + '" ';
  }
  if ("prefix" in address) {
    query = query + " prefix: " + JSON.stringify(address.prefix);
  }
  if ("suffix" in address) {
    query = query + " suffix: " + JSON.stringify(address.suffix);
  }
  query = query + " }) { id firstname middlename lastname company prefix suffix region { region region_code } country_code street telephone postcode city default_shipping default_billing }}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("updateAddress", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data.updateCustomerAddress != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store.dispatch("user/sessionExpired", { store });
          }
        }
      });
    }
    return false;
  }
}
async function changePassword(currentPassword, newPassword, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  const query = "mutation { changeCustomerPassword(currentPassword: " + JSON.stringify(currentPassword) + " newPassword: " + JSON.stringify(newPassword) + "){id email} }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("changePassword", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data.changeCustomerPassword != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store.dispatch("user/sessionExpired", { store });
          }
        }
      });
    }
    return false;
  }
}
async function deleteAddress(id, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  const query = "mutation { deleteCustomerAddress(id: " + id + ") }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("deleteAddress", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data.deleteCustomerAddress != null) {
    return retval.data.data.deleteCustomerAddress;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store.dispatch("user/sessionExpired", { store });
          }
        }
        const msg = {
          type: "danger",
          text: element.message
        };
        store.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function newsletterSignup(email, store) {
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
      // Authorization: "Bearer " + config.shop.consumerKey,
      Store: storeview
    };
  }
  const query = "mutation { subscribeEmailToNewsletter( email: " + JSON.stringify(email) + " ) { status } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("newsletterSignup", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.errors != null) {
    retval.data.errors.forEach((element) => {
      if (store.getters["user/getIsLoggedIn"] != false) {
        if (element.extensions.category === "graphql-authorization") {
          return store.dispatch("user/sessionExpired", { store });
        }
      }
      const msg = {
        type: "danger",
        title: i18n.global.t("newsletter_error"),
        text: element.message
      };
      store.dispatch("messages/sendMessage", { message: msg });
    });
  }
  if (retval.data.data.subscribeEmailToNewsletter != null) {
    return retval.data.data.subscribeEmailToNewsletter.status;
  } else {
    return false;
  }
}
async function getCountries() {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = "query { countries { id two_letter_abbreviation three_letter_abbreviation full_name_locale full_name_english available_regions { id code name } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getCountries", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data.countries != null) {
    return retval.data.data.countries;
  } else {
    return false;
  }
}
async function validatePostcode(postcode, number) {
  const headers = {
    "Content-Type": "application/json",
    "Client-id": CONFIG_JSON.postcode_validation.client_id,
    Secret: CONFIG_JSON.postcode_validation.client_secret
  };
  const retval = await axios({
    url: CONFIG_JSON.postcode_validation.url + "?postcode=" + encodeURIComponent(postcode) + "&number=" + encodeURIComponent(number),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("validatePostcode", "data-resolver user", e)();
    return [];
  });
  if (retval.data != null) {
    return retval.data;
  } else {
    return [];
  }
}
async function validateVatNumber(vat) {
  const headers = {
    "Content-Type": "application/json",
    "Client-id": CONFIG_JSON.vat_validation.client_id,
    Secret: CONFIG_JSON.vat_validation.client_secret
  };
  vat = vat.toUpperCase();
  let formatBe = /^BE\d{10}$/;
  let formatNl = /^NL\d{9}B\d{2}$/;
  let formatDe = /^DE\d{9}$/;
  let formatValid = false;
  let country_code = "";
  switch (vat.slice(0, 2)) {
    case "NL":
      formatValid = formatNl.test(vat);
      country_code = "NL";
      break;
    case "DE":
      formatValid = formatDe.test(vat);
      country_code = "DE";
      break;
    case "BE":
      formatValid = formatBe.test(vat);
      country_code = "BE";
      break;
    default:
      formatValid = /^[A-Z]{2}.{8,12}$/.test(vat);
      country_code = vat.slice(0, 2);
  }
  if (!formatValid) {
    return false;
  }
  const retval = await axios({
    url: CONFIG_JSON.vat_validation.url + "?country_code=" + country_code + "&vat_id=" + vat + "&requester_country_code=" + CONFIG_JSON.vat_validation.requester_country_code + "&requester_vat_id=" + CONFIG_JSON.vat_validation.requester_vat_id,
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("validateVatNumber", "data-resolver user", e)();
    throw e;
  });
  if (retval.data != null) {
    return retval.data;
  } else {
    return false;
  }
}
async function checkEmailExist(email) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = 'query { isEmailAvailable(email: "' + email + '"){is_email_available} }';
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("checkEmailExist", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data.isEmailAvailable != null) {
    return retval.data.data.isEmailAvailable.is_email_available;
  } else {
    return false;
  }
}
async function getMyOrders({ page, perPage, search }, store) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  const query = graphqlResolved.queryFields.myOrders.replace("$currentPage", page).replace("$pageSize", perPage).replace("$searchTxt", search ? 'match: "' + search + '"' : "");
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("customerOrders", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data.customer.orders != null) {
    return retval.data.data.customer.orders;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store.dispatch("user/sessionExpired", { store });
          }
        }
      });
    }
    return false;
  }
}
async function forgotPassword(email, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = "mutation { requestPasswordResetEmail(email: " + JSON.stringify(email) + ")}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("forgotPassword", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.errors != null) {
    retval.data.errors.forEach((element) => {
      const msg = {
        type: "danger",
        title: i18n.global.t("password_reset_error"),
        text: i18n.global.t(element.message)
      };
      store.dispatch("messages/sendMessage", { message: msg });
    });
  }
  return retval.data.data.requestPasswordResetEmail;
}
async function resetPassword(email, resetPasswordToken, newPassword) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = "mutation { resetPassword(email: " + JSON.stringify(email) + " resetPasswordToken: " + JSON.stringify(resetPasswordToken) + " newPassword: " + JSON.stringify(newPassword) + " )}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("forgotPassword", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data.resetPassword == null) {
    return false;
  } else {
    return true;
  }
}
async function addWishlistItemDescription({ wishItemId, description, qty }, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  let query = "mutation { updateProductsInWishlist( ";
  query = query + 'wishlistId: "' + store.getters["user/getWishlistId"] + '"';
  query = query + " wishlistItems: [{ wishlist_item_id: " + wishItemId + ' description: "' + description + '" quantity: ' + qty + "}]";
  query = query + " ) {user_errors { code message } wishlist { id items_count items { id qty product { url_key name sku id price_range { minimum_price { regular_price { currency value } } maximum_price { regular_price { currency value } } } } } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("updateWishItemDesc", "AccountWishlist.vue", e)();
    throw e;
  });
  if (retval.data.data.updateProductsInWishlist != null) {
    return true;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        const msg = {
          type: "danger",
          title: "",
          text: element.message
        };
        store.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function handleShareWishlist({ name, emails, message }, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  let query = "mutation { shareWishlist( input: {";
  query += " wishlist_id: " + store.getters["user/getWishlistId"];
  query += ' customer_name: "' + name + '" recipients: [';
  for (const email of emails) {
    query += ' { email: "' + email + '" }';
  }
  query += ' ] message: "' + message + '"';
  query += " } ) { errors { message } wishlist_id recipients { email } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("updateWishItemDesc", "AccountWishlist.vue", e)();
    throw e;
  });
  if (retval.data.data.shareWishlist != null) {
    return retval.data.data.shareWishlist;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        const msg = {
          type: "danger",
          title: "",
          text: element.message
        };
        store.dispatch("messages/sendMessage", { message: msg });
      });
    }
    return false;
  }
}
async function getSharedWishlistBySharingCode(sharing_code) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = '{ sharedWishlist(code: "' + sharing_code + '") { items_v2 { page_info { current_page page_size total_pages } ' + graphqlResolved.queryFields.wishlist + " } items_count } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURI(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getSharedWishlist", "account.js", e)();
    throw e;
  });
  return retval.data.data.sharedWishlist;
}
async function createAccountFromOrder(account, store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = "mutation {  createAccountFromOrder(input: { order_id: " + account.order_id + ' email:"' + account.email + '" password:"' + account.password + '"';
  query = query + " } ) { token customer { firstname lastname email is_subscribed } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("createAccount", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.errors != null) {
    retval.data.errors.forEach((element) => {
      const msg = {
        type: "danger",
        title: "register_error",
        text: element.message
      };
      store.dispatch("messages/sendMessage", { message: msg });
    });
  }
  if (retval.data.data.createAccountFromOrder != null) {
    return retval.data.data.createAccountFromOrder.token;
  } else {
    return false;
  }
}
async function getReviews(store) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const graphqlResolved = await CONFIG_JSON$1;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + store.getters["user/getUserToken"],
    Store: storeview
  };
  const query = graphqlResolved.queryFields.customerReviews;
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL,
    method: "POST",
    headers,
    data: { query }
  }).catch((e) => {
    logger.error("customerReviews", "data-resolver user", e)();
    throw e;
  });
  if (retval.data.data && retval.data.data.customer.reviews != null) {
    return retval.data.data.customer.reviews;
  } else {
    if (retval.data.errors != null) {
      retval.data.errors.forEach((element) => {
        if (store.getters["user/getIsLoggedIn"] != false) {
          if (element.extensions.category === "graphql-authorization") {
            return store.dispatch("user/sessionExpired");
          }
        }
      });
    }
    return false;
  }
}
export {
  getCurrent as a,
  getSharedWishlistBySharingCode as b,
  createAccountFromOrder as c,
  addWishlistItemDescription as d,
  addProductToWishlist as e,
  createGuestWishlist as f,
  getReviews as g,
  handleShareWishlist as h,
  changePassword as i,
  deleteAddress as j,
  updateAddress as k,
  createAddress as l,
  createAccount as m,
  getCountries as n,
  newsletterSignup as o,
  login as p,
  mergeGuestWishlist as q,
  removeProductFromWishlist as r,
  getMyOrders as s,
  forgotPassword as t,
  updateAccount as u,
  resetPassword as v,
  checkEmailExist as w,
  validateVatNumber as x,
  validatePostcode as y
};
//# sourceMappingURL=user-B9wxceAo.js.map
