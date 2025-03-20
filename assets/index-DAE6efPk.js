import { l as loadCategoryMenu, b as baseRegisters } from "./index-PklOOZQD.js";
import { l as logger, C as CONFIG_JSON } from "../entry-server.js";
import "axios";
import "./products-Dsi6ZmTY.js";
import "./user-B9wxceAo.js";
import "./cart-DtI-j6cN.js";
import "./forms-BxHSFE8a.js";
import "node:path";
import "vue/server-renderer";
import "@unhead/ssr";
import "vue";
import "bootstrap-vue-next";
import "vuex";
import "vue-router";
import "vue-i18n";
import "vuex-router-sync";
import "vue3-lazyload";
import "@unhead/vue";
import "@gtm-support/vue-gtm";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
const state = () => ({
  sidebarCategoryItems: null
});
const actions = {
  async loadSidebarCategory({ commit }) {
    const sidebarCategoryId = CONFIG_JSON.sidebarCategoryId;
    const category = await loadCategoryMenu(sidebarCategoryId).catch((e) => {
      logger.error("loadMenu", "menu.ts", e)();
      throw e;
    });
    commit("setSidebarCategoryItems", category.children);
  }
};
const mutations = {
  setSidebarCategoryItems(state2, payload) {
    state2.sidebarCategoryItems = payload;
  }
};
const getters = {
  getSidebarCategoryItems: (state2) => state2.sidebarCategoryItems
};
const sidebar = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
function registers(app, store) {
  store.registerModule("sidebar", sidebar);
}
const index = [...baseRegisters, registers];
export {
  index as default
};
//# sourceMappingURL=index-DAE6efPk.js.map
