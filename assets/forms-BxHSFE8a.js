import axios from "axios";
import { g as getCurrentLanguage, C as CONFIG_JSON, l as logger } from "../entry-server.js";
async function loadForms(type) {
  var _a, _b;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = "query { form (type: " + type + ") { title showFieldsetsAsPages fieldsets { title fields { label name value type inputType checkedValue uncheckedValue options validation { type additional } placeholder } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadForms", "data-resolver forms", e)();
    throw e;
  });
  return (_b = (_a = retval.data) == null ? void 0 : _a.data) == null ? void 0 : _b.form;
}
async function sendForm(input) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    //Authorization: "Bearer " + config.shop.accessToken,
    Store: storeview
  };
  const query = "mutation{ submitForm(input: { " + input + " } ){ has_errors thank_you_message fields { name value errors { message } } } }";
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
  if (retval.data.data.submitForm != null) {
    return retval.data.data.submitForm;
  } else {
    return false;
  }
}
export {
  loadForms as l,
  sendForm as s
};
//# sourceMappingURL=forms-BxHSFE8a.js.map
