import axios from "axios";
import { a as CONFIG_JSON, g as getCurrentLanguage, C as CONFIG_JSON$1, l as logger, i as isServer, s as store$1, b as i18n, h as helpers } from "../entry-server.js";
import { g as getAggregationsByCategory, a as getProductFiltersByCategory, b as getProductFiltersByFilteredCategory, c as getProductByFilteredCategory, p as productReviewRatingsMetadata, d as getAggregationsByBrand, e as getProductByBrand, f as getBrandDetail, h as getBrandSlider, i as getProductDetails, j as getProductUpSell, k as getCartRelated, l as getCartCrossSell, m as getProductCrossSell, n as getProductBySku, o as getProductRelated, q as getProductByUrl, r as getProductFiltersByPartfinder, s as getProductFilteredSortedByPartfinder, t as getProductByPartfinder, u as getProductFiltersBySearch, v as getProductFiltersByFilteredSearch, w as getProductByFilteredSearch, x as getProductByCategoryId, y as getProductByFilter, z as getProductFiltersByFilter } from "./products-Dsi6ZmTY.js";
import { g as getReviews, c as createAccountFromOrder, a as getCurrent, b as getSharedWishlistBySharingCode, h as handleShareWishlist, d as addWishlistItemDescription, r as removeProductFromWishlist, e as addProductToWishlist, f as createGuestWishlist, i as changePassword, j as deleteAddress, u as updateAccount, k as updateAddress, l as createAddress, m as createAccount, n as getCountries, o as newsletterSignup, p as login, q as mergeGuestWishlist, s as getMyOrders } from "./user-B9wxceAo.js";
import { g as getCustomerCartToken, m as mergeCart, r as removeCouponCode, a as addCouponCode, s as setEmailToCart, b as setBillingAddress, c as setBillingAddressById, d as setPickupLocation, e as setShippingAddress, f as getPickupLocations, h as setPaymentMethod, i as setShippingMethodsOnCart, j as setShippingAddressById, k as createGuestCart, l as addProduct, n as addSampleProductToCart, o as addBundleProduct, p as addConfigurableProduct, q as addSimpleProduct, t as removeCartItem, u as updateCartItem, v as getFreeShipping, w as loadCart, x as getPaymentmethods } from "./cart-DtI-j6cN.js";
import { l as loadForms } from "./forms-BxHSFE8a.js";
const state$k = () => ({
  current: null,
  // shown product
  routes: []
});
const actions$k = {};
const mutations$k = {
  /**
   * set breadcrumbs
   * @param {object} state
   * @param {object} payload
   */
  set(state2, payload) {
    state2.routes = payload.routes;
    state2.current = payload.current;
  }
};
const getters$k = {
  getBreadcrumbsRoutes: (state2) => state2.routes,
  getBreadcrumbsCurrent: (state2) => state2.current
};
const BreadCrumbs = {
  namespaced: true,
  state: state$k,
  actions: actions$k,
  mutations: mutations$k,
  getters: getters$k
};
async function loadCategoryMenu(id) {
  const graphqlResolved = await CONFIG_JSON;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = '{ categoryList(filters: {ids: {eq: "' + id + '"}}) ' + graphqlResolved.queryFields.menu + "}";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadCategoryDeepById", "data-resolver categories", e)();
    throw e;
  });
  if (retval.data.data.categoryList != null) {
    return retval.data.data.categoryList[0];
  } else {
    return false;
  }
}
async function getBestSellers(id) {
  const graphqlResolved = await CONFIG_JSON;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  let queryFields = graphqlResolved.queryFields.bestsellers;
  if (!queryFields) {
    queryFields = "items { sku name __typename image { url } small_image { url } thumbnail { url } url_key  price_range { minimum_price { discount { amount_off percent_off } regular_price { value } final_price { value } } maximum_price { discount { amount_off percent_off } regular_price { value } final_price { value } } } special_from_date special_to_date special_price new_from_date new_to_date } } ";
  }
  const query = "{ bestsellers( categoryId: " + id + ' sources: [ { priority: 1, type: "category", sourceField: "up_sell" } ] limit: 10 ) { tab_count tabs { title option_id item_count ' + queryFields + "}}";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadBestSellers", "data-resolver categories", e)();
    throw e;
  });
  if (retval.data.data.bestsellers != null) {
    return retval.data.data.bestsellers;
  } else {
    return false;
  }
}
async function loadSliderByCategoryID(id) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = '{ getTailoredSlider(pageType: "categories" pageId:' + id + ") { title fullwidth location slides { title description link buttonText media { url type previewType } } } }";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadSliderById", "data-resolver sliders", e)();
    throw e;
  });
  return retval.data.data.getTailoredSlider[0];
}
async function loadSliderByIdentifiers(ids) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = "{ getTailoredSlider(identifiers: " + JSON.stringify(ids) + ") { title identifier fullwidth location slides { title description link buttonText media { url type previewType smallest smaller medium larger largest } } } }";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadSliderByIdentifiers", "data-resolver sliders", e)();
    throw e;
  });
  return retval.data.data.getTailoredSlider;
}
const state$j = () => ({
  current: null,
  slider: null,
  menuCategories: [],
  productFilters: [],
  activeFilter: [],
  priceFilter: [0, 0],
  priceFilterMin: 0,
  priceFilterMax: 0,
  filteredCount: 0,
  products: [],
  ShowProducts: [],
  currentPage: 1,
  prodsPerPage: null,
  totalPages: 1,
  totalProducts: 0,
  sorting: "default",
  currentSorting: null,
  bestSellers: {},
  bestSellersSimple: [],
  loadProducts: false,
  gtmProducts: [],
  ga4Products: [],
  gtmProductsCount: 0,
  aggregations: []
});
const actions$j = {
  /**
   * load category slider from magento
   *
   *
   */
  async loadSlider({ getters: getters2, commit }) {
    const cat = getters2["getCurrentCategory"];
    const retv = await loadSliderByCategoryID(cat.id);
    commit("setSlider", retv);
  },
  /**
   * Load products by filtered category
   *
   *
   * @param {object} integer category
   */
  async loadProductsByFilter({ getters: getters2, commit, rootGetters }) {
    commit("setLoadProducts", true);
    const categoryId = getters2["getCurrentCategoryId"];
    const currPage = getters2["getCurrentPage"];
    const perPage = getters2["getProductsPerPage"];
    const totalPages = getters2["getTotalPages"];
    if (currPage > totalPages) return;
    const sort = getters2["getCurrentSorting"];
    const filters = [];
    const isPriceFilterActive = getters2["getIsPriceFilterActive"];
    if (isPriceFilterActive) {
      const priceFilter = getters2["getPriceFilter"];
      filters.push({ attribute_code: "price", values: priceFilter });
    }
    const activeFilters = getters2["getActiveFilter"];
    activeFilters.forEach((el) => {
      const index2 = filters.findIndex((o) => o.attribute_code == el.attribute_code);
      if (index2 != -1) {
        filters[index2].values.push(el.value);
      } else {
        filters.push({ attribute_code: el.attribute_code, values: [el.value] });
      }
    });
    const retv = await getProductByFilteredCategory(categoryId, currPage, perPage, {
      sort,
      filters
    });
    let filteredItems = retv.items.filter((item) => item !== null);
    commit("setProducts", filteredItems);
    commit("setLoadProducts", false);
    let catStr = "";
    const bcrumbs = rootGetters["breadcrumbs/getBreadcrumbsRoutes"];
    bcrumbs.forEach((bcrumb) => {
      catStr = catStr + bcrumb.name + "/";
    });
    const curr = rootGetters["breadcrumbs/getBreadcrumbsCurrent"];
    catStr = catStr + curr;
    let gtmProds = [];
    retv.items.forEach((element) => {
      let gtmProd = {};
      let ga4Prod = {};
      gtmProd.id = element.sku;
      gtmProd.name = element.name;
      gtmProd.list = "Category";
      gtmProd.category = catStr;
      commit("setGtmProductsCount");
      gtmProd.position = getters2["getGtmProductsCount"];
      gtmProds.push(gtmProd);
      ga4Prod.id = element.sku;
      ga4Prod.name = element.name;
      ga4Prod.price = element.price_range.maximum_price.final_price.value;
      if (element.price_range.maximum_price.discount.amount_off > 0) {
        ga4Prod.discount = element.price_range.maximum_price.discount.amount_off;
      }
      ga4Prod.position = getters2["getGtmProductsCount"];
    });
    commit("setGtmProducts", gtmProds);
  },
  /**
   * load bestsellers based on current category
   *
   */
  async loadBestSellers({ getters: getters2, commit }) {
    const category2 = getters2["getCurrentCategory"];
    const retval = await getBestSellers(category2.id);
    if (retval != false) {
      commit("setBestSellers", retval);
      const simpleBestSellers = [];
      retval.tabs.forEach((element) => {
        element.items.forEach((elm) => {
          simpleBestSellers.push(elm);
        });
      });
      commit("setBestSellersSimple", simpleBestSellers);
    }
  },
  /**
   * load category filters based on id of the category
   *
   * @param {object} integer id
   */
  async loadCategoryFilters({ commit, getters: getters2 }) {
    commit("setLoadProducts", true);
    const categoryId = getters2["getCurrentCategoryId"];
    const sort = getters2["getCurrentSorting"];
    const filters = [];
    const isPriceFilterActive = getters2["getIsPriceFilterActive"];
    if (isPriceFilterActive) {
      const priceFilter = getters2["getPriceFilter"];
      filters.push({ attribute_code: "price", values: priceFilter });
    }
    const activeFilters = getters2["getActiveFilter"];
    activeFilters.forEach((el) => {
      const index2 = filters.findIndex((o) => o.attribute_code == el.attribute_code);
      if (index2 != -1) {
        filters[index2].values.push(el.value);
      } else {
        filters.push({ attribute_code: el.attribute_code, values: [el.value] });
      }
    });
    const currPage = getters2["getCurrentPage"];
    const perPage = getters2["getProductsPerPage"];
    const retval = await getProductFiltersByFilteredCategory(categoryId, currPage, perPage, {
      sort,
      filters
    }).catch((e) => {
      logger.error("getProductFiltersByFilteredCategory", "category store actions load", e)();
      throw e;
    });
    const products = retval ? retval.items : {};
    const totalPages = retval ? retval.page_info.total_pages : 0;
    const totalProducts = retval ? retval.total_count : 0;
    let filteredProducts = products.filter((item) => item !== null);
    commit("setTotalPages", totalPages);
    commit("setTotalProducts", totalProducts);
    commit("setProducts", filteredProducts);
    commit("setLoadProducts", false);
    const uFilters = [];
    if (retval && retval.aggregations && retval.aggregations.length) {
      retval.aggregations.forEach((element) => {
        if (element.attribute_code != "category_id" && element.attribute_code != "category_uid") {
          if (element.attribute_code == "price") {
            if (parseInt(element.min_value) < 0) {
              element.min_value = 0;
            }
            element.min = parseInt(element.min_value);
            if (Math.ceil(element.max_value) < element.min_value) {
              element.max = element.min_value;
            } else {
              element.max = Math.ceil(element.max_value);
            }
            if (element.min < 0) {
              element.min = 0;
            }
            if (element.max < 0) {
              element.max = 0;
            }
            const priceFilter = getters2["getPriceFilter"];
            if (priceFilter[0] === 0 && priceFilter[1] === 0) {
              commit("setPriceFilterMin", element.min);
              commit("setPriceFilterMax", element.max);
              commit("addPriceFilter", [element.min, element.max]);
            }
          }
          uFilters.push(element);
        }
      });
    }
    commit("setProductFilters", uFilters);
  },
  /**
   * apply category filters of the category
   *
   * @param {object}
   * @param {object} filter
   */
  async applyCategoryFilters({ commit, dispatch, getters: getters2 }, { filter, store: store2 }) {
    const categoryId = getters2["getCurrentCategoryId"];
    const { sort, page, filters } = filter;
    let { pageSize } = filter;
    if (isNaN(parseInt(pageSize))) pageSize = 15;
    const retval = await getProductFiltersByCategory(categoryId, pageSize);
    const totalPages = retval.page_info.total_pages;
    const totalProducts = retval.total_count;
    commit("setTotalPages", totalPages);
    commit("setTotalProducts", totalProducts);
    const priceFilter = [0, 0];
    const productFilters = [];
    if (retval.aggregations && retval.aggregations.length) {
      retval.aggregations.forEach((element) => {
        if (element.attribute_code != "category_id" && element.attribute_code != "category_uid") {
          if (element.attribute_code == "price") {
            if (element.is_range != true) {
              if (parseInt(element.min_value) < 0) {
                element.min_value = 0;
              }
              element.min = parseInt(element.min_value);
              if (Math.ceil(element.max_value) < element.min_value) {
                element.max = element.min_value;
              } else {
                element.max = Math.ceil(element.max_value);
              }
            } else {
              if (parseInt(element.from) < 0) {
                element.from = 0;
              }
              element.min = parseInt(element.from);
              if (Math.ceil(element.to) < element.from) {
                element.max = element.from;
              } else {
                element.max = Math.ceil(element.to);
              }
            }
            if (element.min < 0) {
              element.min = 0;
            }
            if (element.max < 0) {
              element.max = 0;
            }
            priceFilter[0] = element.min;
            priceFilter[1] = element.max;
            commit("setPriceFilterMin", element.min);
            commit("setPriceFilterMax", element.max);
            commit("addPriceFilter", priceFilter);
          }
          productFilters.push(element);
        }
      });
    }
    commit("setProductFilters", productFilters);
    if (!isNaN(parseInt(page)) && parseInt(page) <= totalPages) {
      commit("addCurrentPage", page);
    }
    if (!isNaN(parseInt(pageSize))) {
      commit("addProductsPerPage", pageSize);
    } else {
      commit("addProductsPerPage", 15);
    }
    if (sort) commit("addSorting", { data: sort, store: store2 });
    const activeFilters = [];
    let activePriceFilter = [];
    if (filters) {
      Object.keys(filters).forEach((element) => {
        const attrFilters = productFilters.find((el) => el.attribute_code == element);
        if (attrFilters != null) {
          if (element == "price") {
            const [priceMin, priceMax] = priceFilter;
            const [min, max] = filters["price"].split("-");
            if (!isNaN(parseInt(min)) && !isNaN(parseInt(max))) {
              activePriceFilter = [
                priceMin > parseInt(min) ? priceMin : parseInt(min),
                priceMax < parseInt(max) ? priceMax : parseInt(max)
              ];
            }
          } else {
            filters[element].split(",").forEach((value) => {
              const activeFilter = attrFilters.options.find((option) => option.value == value);
              if (activeFilter) {
                const filterBy = {
                  attribute_code: element,
                  type_label: attrFilters.label,
                  value,
                  label: activeFilter.label
                };
                activeFilters.push(filterBy);
              }
            });
          }
        }
      });
      if (filters.subcategory) {
        filters["subcategory"].split(",").forEach((value) => {
          const filterBy = {
            attribute_code: "subcategory",
            type_label: "subcategory",
            value,
            label: value
          };
          activeFilters.push(filterBy);
        });
      }
    }
    if (activeFilters.length) commit("addActiveFilter", { filter: activeFilters, store: store2 });
    if (activePriceFilter.length) commit("addPriceFilter", activePriceFilter);
    if (activeFilters.length || activePriceFilter.length) {
      const filters2 = [];
      const isPriceFilterActive = getters2["getIsPriceFilterActive"];
      if (isPriceFilterActive) {
        const priceFilter2 = getters2["getPriceFilter"];
        filters2.push({ attribute_code: "price", values: priceFilter2 });
      }
      const activeFilters2 = getters2["getActiveFilter"];
      activeFilters2.forEach((el) => {
        const index2 = filters2.findIndex((o) => o.attribute_code == el.attribute_code);
        if (index2 != -1) {
          filters2[index2].values.push(el.value);
        } else {
          filters2.push({
            attribute_code: el.attribute_code,
            values: [el.value]
          });
        }
      });
      const retval2 = await getProductFiltersByCategory(categoryId, pageSize, filters2).catch((e) => {
        logger.error("getProductFiltersByCategory", "category store actions load", e)();
        throw e;
      });
      const currentPage = getters2["getCurrentPage"];
      const totalPages2 = retval2.page_info.total_pages;
      const totalProducts2 = retval2.total_count;
      commit("setTotalPages", totalPages2);
      commit("setTotalProducts", totalProducts2);
      if (currentPage > totalPages2) commit("addCurrentPage", 1);
      const uFilters = [];
      if (retval2.aggregations && retval2.aggregations.length) {
        retval2.aggregations.forEach((element) => {
          if (element.attribute_code != "category_id" && element.attribute_code != "category_uid") {
            if (element.attribute_code == "price") {
              if (parseInt(element.min_value) < 0) {
                element.min_value = 0;
              }
              element.min = parseInt(element.min_value);
              if (Math.ceil(element.max_value) < element.min_value) {
                element.max = element.min_value;
              } else {
                element.max = Math.ceil(element.max_value);
              }
              if (element.min < 0) {
                element.min = 0;
              }
              if (element.max < 0) {
                element.max = 0;
              }
              const priceFilter2 = getters2["getPriceFilter"];
              if (priceFilter2[0] === 0 && priceFilter2[1] === 0) {
                commit("setPriceFilterMin", element.min);
                commit("setPriceFilterMax", element.max);
                commit("addPriceFilter", [element.min, element.max]);
              }
            }
            uFilters.push(element);
          }
        });
      }
      commit("setProductFilters", uFilters);
    }
    await dispatch("loadProductsByFilter");
  },
  /**
   * load the category
   *
   * @param {object} integer id
   * @returns category object
   * @deprecated replaced by setCategory dispatch because of the route update
   */
  async setCategory({ commit, dispatch }, { category: category2, filter = false, store: store2 }) {
    commit("setLoadProducts", false);
    commit("setBestSellersSimple", []);
    commit("setBestSellers", []);
    if (category2 == null) {
      commit("setProductFilters", {});
      return false;
    } else {
      if (category2.description) {
        category2.description = category2.description.replace(
          /<a(.*?)href="(.*?)"(.*?)>/g,
          '<a$1href="$2"$3 onclick="redirect(event)">'
        );
        category2.description = category2.description.replace(
          /<a((?!<\/a>).)href="(http|mailto|tel)(.*?)<\/a>/g,
          '<a$1href="$2$3</a>'
        );
      }
      commit("setCurrentCategory", { category: category2, store: store2 });
      dispatch("loadSlider");
      if (category2.is_anchor == 1) {
        commit("setProducts", []);
        commit("setProductFilters", {});
        commit("resetActiveFilter");
        commit("resetPriceFilter");
        commit("resetPageInfo");
        commit("resetSorting");
        commit("setConfigSettings", store2);
        if (filter !== false) {
          await dispatch("applyCategoryFilters", { filter, store: store2 });
        } else {
          await dispatch("loadCategoryFilters");
        }
        if (!isServer) {
          dispatch("loadBestSellers");
        }
      } else {
        commit("setProductFilters", {});
        commit("resetActiveFilter");
        commit("resetPriceFilter");
        commit("resetPageInfo");
        commit("resetSorting");
        commit("setBestSellersSimple", []);
      }
    }
  },
  /**
   * Loads aggregations for filtering
   * @param {object}
   * @param {object} integer category_id
   */
  async loadAggregations({ commit }, { category_id }) {
    const aggregations = await getAggregationsByCategory(category_id);
    commit("setAggregations", aggregations);
  }
};
const mutations$j = {
  // always and only change vuex state through mutations.
  /**
   * set current category
   *
   * @param {object} state
   * @param {object} data
   * @private
   *
   */
  setCurrentCategory(state2, { category: data, store: store2 }) {
    state2.current = data;
    const breadcrumbs = data.breadcrumbs;
    let currentName = "undefined";
    if (typeof data.name == "string") {
      currentName = data.name;
    }
    const bcrumb = { current: currentName, routes: [] };
    if (breadcrumbs != null) {
      breadcrumbs.sort((a, b) => {
        if (a.category_level < b.category_level) {
          return -1;
        }
        if (a.category_level > b.category_level) {
          return 1;
        }
        return 0;
      });
      let path = "";
      breadcrumbs.forEach((element) => {
        if (path.length > 0) {
          path = path + "/";
        }
        path = path + element.category_url_key;
        let name = "undefined";
        if (typeof element.category_name == "string") {
          name = element.category_name;
        }
        const bc = {
          name,
          route_link: "/" + path
        };
        bcrumb.routes.push(bc);
      });
    }
    store2.commit("breadcrumbs/set", bcrumb);
  },
  /**
   * set default settings
   *
   * @param {object} state
   * @private
   *
   */
  setConfigSettings(state2, store2) {
    var _a;
    if (state2.prodsPerPage === null) {
      if ((_a = CONFIG_JSON$1.products) == null ? void 0 : _a.perPage) {
        state2.prodsPerPage = CONFIG_JSON$1.products.perPage;
      } else {
        state2.prodsPerPage = 15;
      }
    }
    let sorting = "default";
    const defaultSort = CONFIG_JSON$1.sortDefault;
    if (defaultSort) sorting = defaultSort;
    store2.commit("category/addSorting", { data: sorting, store: store2 });
  },
  /**
   * set product filters
   *
   * @param {object} state
   * @param {object} data
   * @private
   *
   */
  setProductFilters(state2, data) {
    state2.productFilters = data;
  },
  /**
   * set category slider
   *
   * @param {object} state
   * @param {object} data
   * @private
   *
   */
  setSlider(state2, data) {
    state2.slider = data;
  },
  /**
   * set load products
   *
   * @param {object} state
   * @param {array} data
   * @private
   *
   */
  setLoadProducts(state2, data) {
    state2.loadProducts = data;
  },
  /**
   * add active filter
   *
   * @param {object} state
   * @param {object} data
   */
  addActiveFilter(state2, data) {
    const obj = state2.activeFilter.find((o) => {
      if (o.value == data.filter.value) {
        return true;
      }
    });
    if (obj == null) {
      state2.activeFilter.push(data);
    }
    data.store.commit("category/resetCurrentPage");
    data.store.dispatch("category/loadCategoryFilters");
  },
  /**
   * reset active filter
   *
   * @param {object} state
   */
  resetActiveFilter(state2) {
    state2.activeFilter = [];
  },
  /**
   * set products
   *
   * @param {object} state
   * @param {array} data
   * @private
   */
  setProducts(state2, data) {
    state2.products = data;
    state2.ShowProducts = data;
  },
  /**
   * add currentPage
   *
   * @param {object} state
   * @param {integer} data
   * @private
   */
  addCurrentPage(state2, data) {
    if (data >= 1) {
      state2.currentPage = data;
    }
  },
  /**
   * set currentPage
   *
   * @param {object} state
   * @param {integer} data
   * @private
   */
  setCurrentPage(state2, { pageNo: data, store: store2 }) {
    if (data >= 1 && data <= state2.totalPages) {
      state2.currentPage = data;
      store2.dispatch("category/loadProductsByFilter");
    }
  },
  resetCurrentPage(state2) {
    state2.currentPage = 1;
  },
  /**
   * add productPerPage
   *
   * @param {object} state
   * @param {integer} data
   * @private
   */
  addProductsPerPage(state2, data) {
    state2.prodsPerPage = data;
  },
  /**
   * set productPerPage
   *
   * @param {object} state
   * @param {integer} data
   * @private
   */
  setProductsPerPage(state2, { perPage: data, store: store2 }) {
    state2.prodsPerPage = data;
    store2.commit("category/resetCurrentPage");
    const totalProducts = state2.totalProducts;
    const totalPages = Math.ceil(state2.totalProducts / data);
    state2.totalPages = totalPages;
    if (totalProducts > 0) {
      store2.dispatch("category/loadProductsByFilter");
    }
  },
  /**
   * set totalPages
   *
   * @param {object} state
   * @param {integer} data
   * @private
   */
  setTotalPages(state2, data) {
    state2.totalPages = data;
  },
  /**
   * set totalProducts
   *
   * @param {object} state
   * @param {integer} data
   * @private
   */
  setTotalProducts(state2, data) {
    state2.totalProducts = data;
  },
  /**
   * reset totalProducts
   *
   * @param {object} state
   * @private
   */
  resetPageInfo(state2) {
    state2.currentPage = 1;
    state2.totalPages = 1;
    state2.totalProducts = 0;
  },
  /**
   * add products
   *
   * @param {object} state
   * @param {array} data
   * @private
   */
  addProducts(state2, { data, store: store2 }) {
    data.forEach((element) => {
      const retval = state2.products.find((o) => {
        if (o.sku == element.sku) {
          return true;
        }
      });
      if (retval == null) {
        state2.products.push(element);
      }
    });
    store2.commit("category/doFilterProducts");
  },
  /**
   * add price filter
   *
   * @param {object} state
   * @param {array} data
   */
  addPriceFilter(state2, data) {
    state2.priceFilter = data;
  },
  /**
   * set price filter
   *
   * @param {object} state
   * @param {array} data
   */
  setPriceFilter(state2, { data, store: store2 }) {
    state2.priceFilter = data;
    store2.commit("category/resetCurrentPage");
    store2.dispatch("category/loadCategoryFilters");
  },
  /**
   * reset price filter
   *
   * @param {object} state
   */
  resetPriceFilter(state2) {
    state2.priceFilter = [0, 0];
  },
  /**
   * set min price
   *
   * @param {object} state
   * @param {integer} data
   */
  setPriceFilterMin(state2, data) {
    state2.priceFilterMin = data;
  },
  /**
   * set max price
   *
   * @param {object} state
   * @param {integer} data
   */
  setPriceFilterMax(state2, data) {
    state2.priceFilterMax = data;
  },
  /**
   * remove price filter
   *
   * @param {object} state
   */
  removePriceFilter(state2) {
    const priceMin = state2.priceFilterMin;
    const priceMax = state2.priceFilterMax;
    state2.priceFilter = [priceMin, priceMax];
  },
  /**
   * set bestsellers
   *
   * @param {object} state
   * @param {array} data
   * @private
   */
  setBestSellers(state2, data) {
    state2.bestSellers = data;
  },
  /**
   * set bestsellers
   *
   * @param {object} state
   * @param {array} data
   * @private
   */
  setGtmProducts(state2, data) {
    state2.gtmProducts = data;
  },
  /**
   * set Google Analytics 4 product list
   *
   * @param {object} state
   * @param {array} data
   * @private
   */
  setGa4Products(state2, data) {
    state2.ga4Products = data;
  },
  /**
   * set bestsellers
   *
   * @param {object} state
   * @param {array} data
   * @private
   */
  setGtmProductsCount(state2) {
    state2.gtmProductsCount = state2.gtmProductsCount + 1;
    return state2.gtmProductsCount;
  },
  resetGtmProductsCount(state2) {
    state2.gtmProductsCount = 0;
  },
  /**
   * set simple bestsellers
   *
   * @param {object} state
   * @param {array} data
   * @private
   */
  setBestSellersSimple(state2, data) {
    state2.bestSellersSimple = data;
  },
  /**
   * add sorting
   *
   * @param {object} state
   * @param {string} data
   */
  addSorting(state2, { data, store: store2 }) {
    if (CONFIG_JSON$1.sortingOptions[data]) {
      state2.sorting = data;
      const [sortBy, direction = "ASC"] = CONFIG_JSON$1.sortingOptions[data];
      let currentSorting = null;
      if (sortBy && direction) {
        currentSorting = { sortBy, direction };
      }
      store2.commit("category/addCurrentSorting", currentSorting);
    }
  },
  /**
   * set sorting
   *
   * @param {object} state
   * @param {string} data
   */
  setSorting(state2, { sortVal: data, store: store2 }) {
    if (CONFIG_JSON$1.sortingOptions[data]) {
      state2.sorting = data;
      const [sortBy, direction = "ASC"] = CONFIG_JSON$1.sortingOptions[data];
      let currentSorting = null;
      if (sortBy && direction) {
        currentSorting = { sortBy, direction };
      }
      store2.commit("category/setCurrentSorting", { currentSorting, store: store2 });
    }
  },
  /**
   * add current sorting
   *
   * @param {object} state
   * @param {object} data
   */
  addCurrentSorting(state2, data) {
    state2.currentSorting = data;
  },
  /**
   * set current sorting
   *
   * @param {object} state
   * @param {object} data
   */
  setCurrentSorting(state2, { currentSorting, store: store2 }) {
    state2.currentSorting = currentSorting;
    store2.commit("category/resetCurrentPage");
    store2.dispatch("category/loadProductsByFilter");
  },
  /**
   * reset sorting
   *
   * @param {object} state
   * @param {array} data
   */
  resetSorting(state2) {
    state2.sorting = "default";
    state2.currentSorting = null;
  },
  /**
   * set active filter
   *
   * @param {object} state
   * @param {object} data
   */
  setActiveFilter(state2, { data, store: store2 }) {
    const obj = state2.activeFilter.find((o) => {
      if (o.value == data.value) {
        return true;
      }
    });
    if (obj == null) {
      state2.activeFilter.push(data);
    }
    store2.commit("category/resetCurrentPage");
    store2.dispatch("category/loadCategoryFilters");
  },
  /**
   * remove active filter
   *
   * @param {object} state
   * @param {object} data
   */
  removeActiveFilter(state2, { data, store: store2 }) {
    if (state2.activeFilter.length > 0) {
      state2.activeFilter.find((o, i) => {
        if (o.value == data.value) {
          state2.activeFilter.splice(i, 1);
          return true;
        }
      });
      store2.commit("category/resetCurrentPage");
      store2.dispatch("category/loadCategoryFilters");
    }
  },
  /**
   * remove all active filter
   *
   * @param {object} state
   */
  removeAllActiveFilter(state2, store2) {
    state2.activeFilter = [];
    store2.commit("category/resetCurrentPage");
    store2.commit("category/removePriceFilter");
    store2.dispatch("category/loadCategoryFilters");
  },
  /**
   *
   * @param {object} state
   * @param {object} data
   */
  setAggregations(state2, data) {
    state2.aggregations = data;
  }
};
const getters$j = {
  getCurrentCategory: (state2) => state2.current,
  getProductFilters: (state2) => state2.productFilters,
  getActiveFilter: (state2) => state2.activeFilter,
  getLoadProducts: (state2) => state2.loadProducts,
  getShowProducts: (state2) => state2.ShowProducts,
  getCurrentPage: (state2) => state2.currentPage,
  getProductsPerPage: (state2) => state2.prodsPerPage || 15,
  getTotalPages: (state2) => state2.totalPages,
  getTotalProducts: (state2) => state2.totalProducts,
  getPriceFilter: (state2) => state2.priceFilter,
  getPriceFilterMin: (state2) => state2.priceFilterMin,
  getPriceFilterMax: (state2) => state2.priceFilterMax,
  getIsPriceFilterActive: (state2) => !(state2.priceFilter[0] === 0 && state2.priceFilter[1] === 0) && !(state2.priceFilter[0] === state2.priceFilterMin && state2.priceFilter[1] === state2.priceFilterMax),
  getSorting: (state2) => state2.sorting,
  getCurrentSorting: (state2) => state2.currentSorting,
  getBestSellersSimple: (state2) => state2.bestSellersSimple,
  getBestSellers: (state2) => state2.bestSellers,
  getSlider: (state2) => state2.slider,
  getGtmProducts: (state2) => state2.gtmProducts,
  getGa4Products: (state2) => state2.ga4Products,
  getGtmProductsCount: (state2) => state2.gtmProductsCount,
  getCurrentCategoryId: (state2) => {
    if (state2.current != null) {
      return state2.current.id;
    } else {
      return 0;
    }
  },
  getAggregations: (state2) => state2.aggregations
};
const Category = {
  namespaced: true,
  state: state$j,
  actions: actions$j,
  mutations: mutations$j,
  getters: getters$j
};
async function loadGeneralMsg() {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = " { globalMessages { background_color text_color text }}";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadCategoryById", "data-resolver categories", e)();
    throw e;
  });
  if (retval.data.data.globalMessages != null) {
    return retval.data.data.globalMessages;
  } else {
    return false;
  }
}
const state$i = () => ({
  msgItems: [],
  msgIndex: 0,
  lastMsg: 0,
  generalMsg: { text: "", background_color: "#fff", text_color: "#fff" }
});
const actions$i = {
  /**
   * Send message
   *
   * @param {object} object message
   */
  sendMessage({ commit }, { message }) {
    commit("setMessage", message);
  },
  /**
   * give last messages
   *
   * @returns array
   */
  giveLastMessages({ commit, state: state2 }) {
    const msgs = state2.msgItems.map((obj) => ({ ...obj }));
    const send = [];
    for (let i = state2.lastMsg; i <= state2.msgItems.length; i++) {
      if (msgs[i] != null) {
        send.push(msgs[i]);
      }
      commit("setLastMsg", i);
    }
    return send;
  },
  /**
   * Load the general message from magento
   *
   */
  async loadGeneralMsg({ commit }) {
    const generalMsg = await loadGeneralMsg().catch((e) => {
      logger.error("loadGeneralMessage", "load general message in store", e)();
      throw e;
    });
    if (generalMsg != false) {
      commit("setGeneralMsg", generalMsg);
    }
  }
};
const mutations$i = {
  // always and only change vuex state through mutations.
  /**
   * set message
   *
   * @param {object} data
   */
  setMessage(state2, data) {
    state2.msgItems.push(data);
    state2.msgIndex++;
  },
  /**
   * set last message
   *
   * @param {integer} data
   */
  setLastMsg(state2, data) {
    state2.lastMsg = data;
  },
  /**
   * set general message
   *
   * @param {object} data
   * @private
   */
  setGeneralMsg(state2, data) {
    state2.generalMsg = data;
  }
};
const getters$i = {
  getMessages: (state2) => {
    return state2.msgItems;
  },
  getGeneralMsg: (state2) => state2.generalMsg
};
const Messages = {
  namespaced: true,
  state: state$i,
  actions: actions$i,
  mutations: mutations$i,
  getters: getters$i
};
const state$h = () => ({
  current: null,
  // shown product
  currentGallery: [],
  currentChildSku: null,
  currentOptions: [],
  currentBundle: [],
  selectedBundles: [],
  currentGrouped: [],
  parent: null,
  brands: [],
  related: [],
  crossSell: [],
  upsell: [],
  ProductReviewRatingsMetadata: [],
  compare: [],
  brandProducts: [],
  currentPage: 1,
  brandDetailData: {},
  brandPageInfo: {},
  brandProductsTotalCount: 0,
  sorting: "default",
  currentSorting: null,
  prodsPerPage: 15,
  aggregations: [],
  productFilters: [],
  priceFilter: [0, 0],
  priceFilterMin: 0,
  priceFilterMax: 0,
  activeFilter: []
});
const actions$h = {
  /**
   * load product
   *
   * @param {object} string path
   * @returns product
   */
  async load({ commit, dispatch }, { path = "", store: store2 }) {
    const prodUrl = path.replace(".html", "");
    let urlKey = prodUrl.split("/").pop();
    if (urlKey == "") {
      urlKey = prodUrl.split("/")[0];
    }
    if (typeof urlKey == "string") {
      const products = await getProductByUrl(urlKey).catch((e) => {
        logger.error("getProductByUrl", "product store actions load", e)();
        throw e;
      });
      const product2 = products.items[0];
      if (product2 == null) {
        return false;
      } else {
        commit("setCurrentProduct", product2);
        dispatch("loadRelated", { sku: product2.sku });
        dispatch("loadCrossSell", { sku: product2.sku });
        dispatch("loadUpSell", { sku: product2.sku });
        if (product2.__typename == "ConfigurableProduct") {
          dispatch("loadConfigProduct", {
            sku: product2.sku,
            type: product2.__typename
          });
        }
        if (product2.__typename == "BundleProduct") {
          dispatch("loadBundleProduct", {
            sku: product2.sku,
            type: product2.__typename
          });
        }
        if (product2.__typename == "GroupedProduct") {
          dispatch("loadGroupedProduct", {
            sku: product2.sku,
            type: product2.__typename
          });
        }
        const breadcrumbs = [];
        let currentName = "undefined";
        if (typeof product2.name == "string") {
          currentName = product2.name;
        }
        const bcrumb = { current: currentName, routes: [] };
        if (breadcrumbs != null) {
          breadcrumbs.sort((a, b) => {
            if (a.category_level < b.category_level) {
              return -1;
            }
            if (a.category_level > b.category_level) {
              return 1;
            }
            return 0;
          });
          let path2 = "";
          breadcrumbs.forEach((element) => {
            if (path2.length > 0) {
              path2 = path2 + "/";
            }
            path2 = path2 + element.category_url_key;
            let name = "undefined";
            if (typeof element.category_name == "string") {
              name = element.category_name;
            }
            const bc = {
              name,
              route_link: path2
            };
            bcrumb.routes.push(bc);
          });
        }
        store2.commit("breadcrumbs/set", bcrumb);
        return product2;
      }
    }
    return false;
  },
  /**
   * load product
   *
   * @param {object} string path
   * @returns product
   */
  async loadWithSku({ commit, dispatch }, { sku = "", store: store2 }) {
    const products = await getProductBySku(sku).catch((e) => {
      logger.error("getProductBySku", "product store actions setProduct", e)();
      throw e;
    });
    const product2 = products.items[0];
    if (product2 == null) {
      return false;
    } else {
      commit("setCurrentProduct", product2);
      dispatch("loadRelated", { sku: product2.sku });
      dispatch("loadCrossSell", { sku: product2.sku });
      dispatch("loadUpSell", { sku: product2.sku });
      if (product2.__typename == "ConfigurableProduct") {
        dispatch("loadConfigProduct", {
          sku: product2.sku,
          type: product2.__typename
        });
      }
      if (product2.__typename == "BundleProduct") {
        dispatch("loadBundleProduct", {
          sku: product2.sku,
          type: product2.__typename
        });
      }
      if (product2.__typename == "GroupedProduct") {
        dispatch("loadGroupedProduct", {
          sku: product2.sku,
          type: product2.__typename
        });
      }
      const breadcrumbs = [];
      let currentName = "undefined";
      if (typeof product2.name == "string") {
        currentName = product2.name;
      }
      const bcrumb = { current: currentName, routes: [] };
      if (breadcrumbs != null) {
        breadcrumbs.sort((a, b) => {
          if (a.category_level < b.category_level) {
            return -1;
          }
          if (a.category_level > b.category_level) {
            return 1;
          }
          return 0;
        });
        let path = "";
        breadcrumbs.forEach((element) => {
          if (path.length > 0) {
            path = path + "/";
          }
          path = path + element.category_url_key;
          let name = "undefined";
          if (typeof element.category_name == "string") {
            name = element.category_name;
          }
          const bc = {
            name,
            route_link: path
          };
          bcrumb.routes.push(bc);
        });
      }
      store2.commit("breadcrumbs/set", bcrumb);
      return product2;
    }
  },
  /**
   * load related products
   *
   * @param {object} string sku
   */
  async loadRelated({ commit }, { sku }) {
    const products = await getProductRelated(sku).catch((e) => {
      logger.error("getProductRelated", "product store actions load", e)();
      throw e;
    });
    const product2 = products == null ? void 0 : products.items[0];
    commit("setRelated", product2 == null ? void 0 : product2.related_products);
  },
  loadCompareProducts({ commit }) {
    const compareProducts = JSON.parse(localStorage.getItem("compareProducts")) || [];
    commit("initializeCompareProducts", compareProducts);
  },
  async addCompareProduct({ commit }, { sku }) {
    try {
      const products = await getProductBySku(sku);
      const product2 = products.items[0];
      let compareProducts = JSON.parse(localStorage.getItem("compareProducts")) || [];
      compareProducts.push(product2);
      localStorage.setItem("compareProducts", JSON.stringify(compareProducts));
      commit("setProductToCompare", product2);
    } catch (e) {
      logger.error("addCompareProduct", "product store actions load", e)();
      throw e;
    }
  },
  async removeCompareProduct({ commit }, { sku }) {
    commit("removeProductFromCompare", sku);
    let compareProducts = JSON.parse(localStorage.getItem("compareProducts")) || [];
    compareProducts = compareProducts.filter((product2) => product2.sku !== sku);
    localStorage.setItem("compareProducts", JSON.stringify(compareProducts));
  },
  async loadCrossSell({ commit }, { sku }) {
    const products = await getProductCrossSell(sku).catch((e) => {
      logger.error("getProductCrossSell", "product store actions load", e)();
      throw e;
    });
    const product2 = products.items[0];
    if (product2.crosssell_products) {
      commit("setCrossSell", product2.crosssell_products);
    }
  },
  async loadCrossSellForCart({ commit }, { skus }) {
    const products = await getCartCrossSell(skus).catch((e) => {
      logger.error("loadCrossSellForCart", "product store actions load", e)();
      throw e;
    });
    if (products) {
      commit("setCrossSell", products);
    }
  },
  async loadRelatedForCart({ commit }, { skus }) {
    const products = await getCartRelated(skus).catch((e) => {
      logger.error("loadRelatedForCart", "product store actions load", e)();
      throw e;
    });
    if (products) {
      commit("setRelated", products);
    }
  },
  async loadUpSell({ commit }, { sku }) {
    const products = await getProductUpSell(sku).catch((e) => {
      logger.error("getProductUpSell", "product store actions load", e)();
      throw e;
    });
    const product2 = products.items[0];
    commit("setUpSell", product2.upsell_products);
  },
  async loadConfigProduct({ commit }, { sku, type }) {
    const products = await getProductDetails(sku, type).catch((e) => {
      logger.error("getProductDetails", "product store actions load", e)();
      throw e;
    });
    const product2 = products.items[0];
    commit("setCurrentConfig", product2);
    const prodOptions = [];
    if ((product2 == null ? void 0 : product2.configurable_options.length) == 1) {
      const values = [];
      product2.variants.forEach((element) => {
        const value = {
          label: element.attributes[0].label,
          value_index: element.product.sku,
          price: element.product.price_range.minimum_price.final_price.value.toFixed(
            2
          )
        };
        values.push(value);
      });
      const prodOption = {
        index: 0,
        attribute_code: product2.configurable_options[0].attribute_code,
        label: product2.configurable_options[0].label,
        id: product2.configurable_options[0].id,
        choice: null,
        values
      };
      prodOptions.push(prodOption);
    } else {
      product2.configurable_options.forEach((option, index2) => {
        if (index2 == 0) {
          const prodOption = {
            index: index2,
            attribute_code: option.attribute_code,
            label: option.label,
            id: option.id,
            choice: null,
            values: option.values
          };
          prodOptions.push(prodOption);
        } else {
          const prodOption = {
            index: index2,
            attribute_code: option.attribute_code,
            label: option.label,
            choice: null,
            id: option.id,
            values: []
          };
          prodOptions.push(prodOption);
        }
      });
    }
    commit("setCurrentOptions", prodOptions);
    commit("setCurrentChildSku", null);
  },
  async loadBundleProduct({ commit }, { sku, type }) {
    const products = await getProductDetails(sku, "BundleProduct").catch(
      (e) => {
        logger.error("getProductDetails", "product store actions load", e)();
        throw e;
      }
    );
    const bundleOptions = products.items[0].items;
    commit("setCurrentBundle", bundleOptions);
    const selectedBundles = [];
    bundleOptions.forEach((bundles, index2) => {
      const bundleID = bundles.option_id;
      const selectedOption = bundles.options[0];
      const value = {
        bundle_id: bundleID,
        option_selection_id: selectedOption.id,
        quantity: selectedOption.quantity
      };
      selectedBundles[index2] = value;
    });
    commit("setSelectedBundles", selectedBundles);
  },
  async loadGroupedProduct({ commit }, { sku, type }) {
    const products = await getProductDetails(sku, type).catch((e) => {
      logger.error("getProductDetails", "product store actions load", e)();
      throw e;
    });
    const product2 = products.items[0].items;
    commit("setCurrentGrouped", product2);
  },
  /**
   * Load the brand slider
   *
   * @returns object or false
   */
  async loadBrandSlider({ commit }) {
    const brandsliders = await getBrandSlider().catch((e) => {
      logger.error("getBrandSlider", "product store actions load", e)();
      throw e;
    });
    if (brandsliders.items[0] == null) {
      return false;
    } else {
      commit("setBrandslider", brandsliders.items);
      return brandsliders.items[0];
    }
  },
  /**
   * get the brand details
   *
   * @returns object or false
   */
  async getBrandDetail({ commit }, { urlKey }) {
    const brandDetail = await getBrandDetail(urlKey).catch((e) => {
      logger.error("getBrandDetail", "product store actions load", e)();
      throw e;
    });
    if (brandDetail) {
      commit("setBrandDetail", brandDetail[0]);
      return true;
    } else {
      return false;
    }
  },
  /**
   * get products for brand details
   *
   * @returns object or false
   */
  async getProductByBrand({ commit, getters: getters2, dispatch }) {
    try {
      const brandDetail = getters2["getBrandDetailData"];
      const currPage = getters2.getBrandDetailCurrentPage || 1;
      const sort = getters2["getCurrentSorting"];
      const perPage = getters2["getProductsPerPage"];
      const isPriceFilterActive = getters2["getIsPriceFilterActive"];
      const filters = [];
      if (isPriceFilterActive) {
        const priceFilter = getters2["getPriceFilter"];
        filters.push({ attribute_code: "price", values: priceFilter });
      }
      const activeFilters = getters2["getActiveFilter"];
      if (activeFilters) {
        activeFilters.forEach((el) => {
          const index2 = filters.findIndex((o) => o.attribute_code == el.attribute_code);
          if (index2 != -1) {
            filters[index2].values.push(el.value);
          } else {
            filters.push({ attribute_code: el.attribute_code, values: [el.value] });
          }
        });
      }
      if (activeFilters.length <= 0) {
        await dispatch("loadAggregations");
        const aggregations = await getters2["getAggregations"];
        if (aggregations && aggregations.length) {
          aggregations.forEach((element) => {
            if (element.attribute_code != "category_id" && element.attribute_code != "category_uid") {
              if (element.attribute_code == "price") {
                if (parseInt(element.min_value) < 0) {
                  element.min_value = 0;
                }
                element.min = parseInt(element.min_value);
                if (Math.ceil(element.max_value) < element.min_value) {
                  element.max = element.min_value;
                } else {
                  element.max = Math.ceil(element.max_value);
                }
                if (element.min < 0) {
                  element.min = 0;
                }
                if (element.max < 0) {
                  element.max = 0;
                }
                const priceFilter = getters2["getPriceFilter"];
                if (priceFilter[0] == 0 && priceFilter[1] === 0) {
                  commit("setPriceFilterMin", element.min);
                  commit("setPriceFilterMax", element.max);
                  commit("addPriceFilter", [element.min, element.max]);
                }
              }
            }
          });
        }
      }
      if (brandDetail && currPage) {
        const retval = await getProductByBrand(
          brandDetail.attributeValue,
          currPage,
          perPage,
          {
            sort,
            filters
          }
        ).catch((e) => {
          logger.error(
            "getProductFiltersByFilteredCategory",
            "category store actions load",
            e
          )();
          throw e;
        });
        if (retval) {
          const aggregations = retval.data.data.products.aggregations;
          if (aggregations && aggregations.length) {
            if (!isPriceFilterActive) {
              aggregations.forEach((element) => {
                if (element.attribute_code == "price") {
                  if (parseInt(element.min_value) < 0) {
                    element.min_value = 0;
                  }
                  element.min = parseInt(element.min_value);
                  if (Math.ceil(element.max_value) < element.min_value) {
                    element.max = element.min_value;
                  } else {
                    element.max = Math.ceil(element.max_value);
                  }
                  if (element.min < 0) {
                    element.min = 0;
                  }
                  if (element.max < 0) {
                    element.max = 0;
                  }
                  commit("setPriceFilterMin", element.min);
                  commit("setPriceFilterMax", element.max);
                  commit("addPriceFilter", [element.min, element.max]);
                }
              });
            }
            commit("setAggregations", aggregations);
            commit("setProductFilters", aggregations);
          }
          const products = retval.data.data.products || [];
          commit("setBrandProducts", products);
        } else {
          return false;
        }
      } else {
        commit("resetBrandProducts");
        return false;
      }
    } catch (error) {
      console.error("Error fetching brand products:", error);
      return false;
    }
  },
  // Update the pagination
  async updateCurrentPage({ commit, getters: getters2, dispatch }, pageNo) {
    commit("setCurrentPage", pageNo);
    const brandDetail = getters2["getBrandDetailData"];
    if (brandDetail && brandDetail.attributeValue) {
      dispatch("getProductByBrand", { attributeValue: brandDetail.attributeValue });
    } else {
      console.warn("No brand detail available or attributeValue is missing");
    }
  },
  /**
   * Loads aggregations for brand filtering
   * @param {object}
   * @param {object} integer brand_id
   */
  async loadAggregations({ commit, getters: getters2 }) {
    const brandDetail = getters2["getBrandDetailData"];
    if (brandDetail) {
      const aggregations = await getAggregationsByBrand(brandDetail.attributeValue);
      commit("setAggregations", aggregations);
      commit("setProductFilters", aggregations);
    } else {
      return false;
    }
  },
  /**
   * Load product review ratings meta data
   *
   * @returns object or false
   */
  async productReviewRatingsMetadata({ commit }) {
    const metaData = await productReviewRatingsMetadata().catch((e) => {
      logger.error("getBrandSlider", "product store actions load", e)();
      throw e;
    });
    if (metaData.items.length == 0) {
      return false;
    } else {
      commit("setProductReviewRatingsMetadata", metaData.items);
      return metaData.items;
    }
  }
};
const mutations$h = {
  initializeCompareProducts(state2, products) {
    state2.compare = products;
  },
  setProductToCompare(state2, data) {
    state2.compare.push(data);
  },
  removeProductFromCompare(state2, sku) {
    state2.compare.forEach((prod, index2) => {
      if (prod.sku == sku) {
        state2.compare.splice(index2, 1);
      }
    });
  },
  /**
   * Set current Product
   *
   * @param {object} data
   * @private
   */
  setCurrentProduct(state2, data) {
    state2.current = data;
  },
  /**
   * set current product options
   *
   * @param {array} data
   * @private
   */
  setCurrentOptions(state2, data) {
    state2.currentOptions = data;
  },
  /**
   * Set current Child SKU
   *
   * @param {string} data
   */
  setCurrentChildSku(state2, data) {
    state2.currentChildSku = data;
  },
  /**
   * Set product review rating Meta data
   *
   * @param {array} data
   */
  setProductReviewRatingsMetadata(state2, data) {
    state2.ProductReviewRatingsMetadata = data;
  },
  /**
   * set the brand slider
   *
   * @param {array} data
   * @private
   */
  setBrandslider(state2, data) {
    state2.brands = data;
  },
  /**
   * set related products
   *
   * @param {array} data
   * @private
   */
  setRelated(state2, data) {
    state2.related = data;
  },
  /**
   * set related products
   *
   * @param {array} data
   * @private
   */
  setCrossSell(state2, data) {
    state2.crossSell = data;
  },
  /**
   * set related products
   *
   * @param {array} data
   * @private
   */
  setUpSell(state2, data) {
    state2.upsell = data;
  },
  /**
   * set current configuration of the configural product
   *
   * @param {object} data
   * @private
   */
  setCurrentConfig(state2, data) {
    state2.currentConfig = data;
  },
  /**
   * set current bundles of the bundle product
   *
   * @param {object} data
   * @private
   */
  setCurrentBundle(state2, data) {
    state2.currentBundle = data;
  },
  /**
   * set selected bundles of the bundle product
   *
   * @param {object} data
   * @private
   */
  setSelectedBundles(state2, data) {
    state2.selectedBundles = data;
  },
  setBundleOptionValue(state2, data) {
    const currentIndex = data.index;
    if (state2.selectedBundles[currentIndex]) {
      const selectedBundles = [...state2.selectedBundles];
      const newVal = {
        bundle_id: data.bundle_id,
        option_selection_id: data.value,
        quantity: data.quantity
      };
      selectedBundles[currentIndex] = newVal;
      data.store.commit("product/setSelectedBundles", selectedBundles);
    }
  },
  /**
   * set current grouped of the grouped product
   *
   * @param {object} data
   * @private
   */
  setCurrentGrouped(state2, data) {
    state2.currentGrouped = data;
  },
  /**
   * Set the products and page info
   *
   * @param {array, object, integer} state
   * @param {object} data
   */
  setBrandProducts(state2, data) {
    state2.brandProducts = data.items;
    state2.brandPageInfo = data.page_info;
    state2.brandProductsTotalCount = data.total_count;
  },
  /**
   * Reset the products and page info
   *
   * @param {array, object, integer} state
   */
  resetBrandProducts(state2) {
    state2.brandProducts = [];
    state2.brandPageInfo = {};
    state2.brandProductsTotalCount = 0;
  },
  /**
   * set currentPage
   *
   * @param {integer} state
   * @param {integer} data
   * @private
   */
  setCurrentPage(state2, data) {
    if (data >= 1) {
      state2.currentPage = data;
    }
  },
  /**
   * set brandDetailData
   *
   * @param {object} state
   * @param {object} data
   * @private
   */
  setBrandDetail(state2, data) {
    state2.brandDetailData = data;
  },
  /**
   * set sorting
   *
   * @param {object} state
   * @param {string} data
   */
  setSorting(state2, data) {
    if (CONFIG_JSON$1.sortingOptions[data]) {
      state2.sorting = data;
      const [sortBy, direction = "ASC"] = CONFIG_JSON$1.sortingOptions[data];
      let currentSorting = null;
      if (sortBy && direction) {
        currentSorting = { sortBy, direction };
      }
      data.store.commit("product/setCurrentSorting", currentSorting);
    }
  },
  /**
   * add current sorting
   *
   * @param {object} state
   * @param {object} data
   */
  addCurrentSorting(state2, data) {
    state2.currentSorting = data;
  },
  /**
   * reset sorting
   *
   * @param {object} state
   * @param {array} data
   */
  resetSorting(state2) {
    state2.sorting = "default";
    state2.currentSorting = null;
  },
  /**
   * set current sorting
   *
   * @param {object} state
   * @param {object} data
   */
  setCurrentSorting(state2, data) {
    state2.currentSorting = data;
    data.store.commit("resetCurrentPage");
    data.store.dispatch("product/getProductByBrand");
  },
  resetCurrentPage(state2) {
    state2.currentPage = 1;
  },
  /**
   * set productPerPage
   *
   * @param {object} state
   * @param {integer} data
   * @private
   */
  setProductsPerPage(state2, data) {
    state2.prodsPerPage = data;
    data.store.commit("resetCurrentPage");
    const totalProducts = state2.brandProductsTotalCount;
    const totalPages = Math.ceil(state2.brandProductsTotalCount / data);
    state2.totalPages = totalPages;
    if (totalProducts > 0) {
      data.store.dispatch("product/getProductByBrand");
    }
  },
  /**
   *
   * @param {object} state
   * @param {object} data
   */
  setAggregations(state2, data) {
    state2.aggregations = data;
  },
  /**
   * set product filters
   *
   * @param {object} state
   * @param {object} data
   * @private
   *
   */
  setProductFilters(state2, data) {
    state2.productFilters = data;
  },
  /**
   * add price filter
   *
   * @param {object} state
   * @param {array} data
   */
  addPriceFilter(state2, data) {
    state2.priceFilter = data;
  },
  /**
   * set price filter
   *
   * @param {object} state
   * @param {array} data
   */
  setPriceFilter(state2, data) {
    state2.priceFilter = data;
    data.store.commit("product/resetCurrentPage");
    data.store.dispatch("product/getProductByBrand");
  },
  /**
   * reset price filter
   *
   * @param {object} state
   */
  resetPriceFilter(state2) {
    state2.priceFilter = [0, 0];
  },
  /**
   * set min price
   *
   * @param {object} state
   * @param {integer} data
   */
  setPriceFilterMin(state2, data) {
    state2.priceFilterMin = data;
  },
  /**
   * set max price
   *
   * @param {object} state
   * @param {integer} data
   */
  setPriceFilterMax(state2, data) {
    state2.priceFilterMax = data;
  },
  /**
   * remove price filter
   *
   * @param {object} state
   */
  removePriceFilter(state2) {
    const priceMin = state2.priceFilterMin;
    const priceMax = state2.priceFilterMax;
    state2.priceFilter = [priceMin, priceMax];
  },
  /**
   * add active filter
   *
   * @param {object} state
   * @param {object} data
   */
  addActiveFilter(state2, data) {
    state2.activeFilter = data;
  },
  /**
   * reset active filter
   *
   * @param {object} state
   */
  resetActiveFilter(state2) {
    state2.activeFilter = [];
  },
  /**
   * set active filter
   *
   * @param {object} state
   * @param {object} data
   */
  setActiveFilter(state2, data) {
    const obj = state2.activeFilter.find((o) => {
      if (o.value == data.filter.value) {
        return true;
      }
    });
    if (obj == null || !obj) {
      state2.activeFilter.push(data);
    }
    data.store.commit("product/resetCurrentPage");
    data.store.dispatch("product/getProductByBrand");
  },
  /**
   * remove active filter
   *
   * @param {object} state
   * @param {object} data
   */
  removeActiveFilter(state2, data) {
    if (state2.activeFilter.length > 0) {
      state2.activeFilter.find((o, i) => {
        if (o.value == data.filter.value) {
          state2.activeFilter.splice(i, 1);
          return true;
        }
      });
      data.store.commit("product/resetCurrentPage");
      data.store.dispatch("product/getProductByBrand");
    }
  },
  /**
   * remove all active filter
   *
   * @param {object} state
   */
  removeAllActiveFilter(state2, store2) {
    state2.activeFilter = [];
    store2.commit("product/resetCurrentPage");
    store2.commit("product/removePriceFilter");
    store2.dispatch("product/getProductByBrand");
  }
};
const getters$h = {
  getCurrentProduct: (state2) => state2.current,
  getProductCompare: (state2) => state2.compare,
  getCurrentProductConfiguration: (state2) => state2.currentConfiguration,
  getCurrentProductOptions: (state2) => state2.currentOptions,
  getProductGallery: (state2) => state2.currrentGallery,
  getBrandSlider: (state2) => state2.brands,
  getBrandSliderByCode: (state2) => (code) => state2.brands.find(
    (item) => typeof item === "object" && item.urlKey === code
  ),
  getBrandProducts: (state2) => state2.brandProducts,
  getBrandPageInfo: (state2) => state2.brandPageInfo,
  getBrandProductsTotalCount: (state2) => state2.brandProductsTotalCount,
  getBrandDetailCurrentPage: (state2) => state2.currentPage,
  getBrandDetailData: (state2) => state2.brandDetailData,
  getSorting: (state2) => state2.sorting,
  getCurrentSorting: (state2) => state2.currentSorting,
  getProductsPerPage: (state2) => state2.prodsPerPage || 15,
  getAggregations: (state2) => state2.aggregations,
  getProductFilters: (state2) => state2.productFilters,
  getPriceFilterMin: (state2) => state2.priceFilterMin,
  getPriceFilterMax: (state2) => state2.priceFilterMax,
  getIsPriceFilterActive: (state2) => !(state2.priceFilter[0] === 0 && state2.priceFilter[1] === 0) && !(state2.priceFilter[0] === state2.priceFilterMin && state2.priceFilter[1] === state2.priceFilterMax),
  getPriceFilter: (state2) => state2.priceFilter,
  getActiveFilter: (state2) => state2.activeFilter,
  getProductReviewRatingsMetadata: (state2) => state2.ProductReviewRatingsMetadata,
  getCurrentChildSku: (state2) => state2.currentChildSku,
  getRelated: (state2) => state2.related,
  getCrossSell: (state2) => state2.crossSell,
  getUpSell: (state2) => state2.upsell,
  getCurrentConfig: (state2) => state2.currentConfig,
  getCurrentBundle: (state2) => state2.currentBundle,
  getSelectedBundles: (state2) => state2.selectedBundles,
  getSelectedBundlesOptions: (state2) => {
    const selectedOptions = [];
    state2.selectedBundles.forEach((element) => {
      let selectedOption = "bundle";
      selectedOption += "/" + element.bundle_id;
      selectedOption += "/" + element.option_selection_id;
      selectedOption += "/" + element.quantity;
      selectedOption = btoa(selectedOption);
      selectedOptions.push(selectedOption);
    });
    return selectedOptions;
  },
  getCurrentGrouped: (state2) => state2.currentGrouped,
  getGroupedTotalPrice: (state2) => {
    let price = 0;
    if (state2.currentGrouped) {
      state2.currentGrouped.forEach((element) => {
        let p = element.qty * element.product.price_range.maximum_price.final_price.value;
        price = price + p;
      });
    }
    return price;
  }
};
const coreProduct = {
  namespaced: true,
  state: state$h,
  actions: actions$h,
  mutations: mutations$h,
  getters: getters$h
};
const state$g = () => ({
  current: null,
  currentSearch: "",
  menuCategories: [],
  productFilters: [],
  activeFilter: [],
  priceFilter: [0, 0],
  priceFilterMin: 0,
  priceFilterMax: 0,
  filteredCount: 0,
  products: [],
  ShowProducts: [],
  currentPage: 1,
  prodsPerPage: null,
  totalPages: 1,
  totalProducts: 0,
  sorting: "default",
  currentSorting: null,
  loadProducts: false,
  isBusy: false
});
const actions$g = {
  /**
   * Load products by search string
   *
   *
   * @param {object} string search, integer totalPages
   */
  async loadProductsBySearch({ commit, getters: getters2 }) {
    commit("setLoadProducts", true);
    const searchVal = getters2["getCurrentSearch"];
    const currPage = getters2["getCurrentPage"];
    const perPage = getters2["getProductsPerPage"];
    const totalPages = getters2["getTotalPages"];
    if (currPage > totalPages) {
      commit("setLoadProducts", false);
      return;
    }
    const sort = getters2["getCurrentSorting"];
    const filters = [];
    const isPriceFilterActive = getters2["getIsPriceFilterActive"];
    if (isPriceFilterActive) {
      const priceFilter = getters2["getPriceFilter"];
      filters.push({ attribute_code: "price", values: priceFilter });
    }
    const activeFilters = getters2["getActiveFilter"];
    activeFilters.forEach((el) => {
      const index2 = filters.findIndex((o) => o.attribute_code == el.attribute_code);
      if (index2 != -1) {
        filters[index2].values.push(el.value);
      } else {
        filters.push({ attribute_code: el.attribute_code, values: [el.value] });
      }
    });
    const retv = await getProductByFilteredSearch(searchVal, currPage, perPage, { sort, filters });
    if (retv.items) {
      commit("setProducts", retv.items);
    } else {
      commit("setProducts", []);
    }
    commit("setLoadProducts", false);
  },
  /**
   * load product filters based on search
   *
   * @param {object} string search
   */
  async loadSearchFilters({ commit, getters: getters2 }, store2) {
    commit("setLoadProducts", true);
    const searchVal = getters2["getCurrentSearch"];
    const sort = getters2["getCurrentSorting"];
    const filters = [];
    const isPriceFilterActive = getters2["getIsPriceFilterActive"];
    if (isPriceFilterActive) {
      const priceFilter = getters2["getPriceFilter"];
      filters.push({ attribute_code: "price", values: priceFilter });
    }
    const activeFilters = getters2["getActiveFilter"];
    activeFilters.forEach((el) => {
      let matched = false;
      for (const o of filters) {
        if (o.attribute_code === el.attribute_code) {
          matched = true;
          if (el.value !== void 0) {
            o.values.push(el.value);
          }
          break;
        }
      }
      if (!matched) {
        if (Array.isArray(el.value)) {
          filters.push({ attribute_code: el.attribute_code, values: el.value });
        } else {
          filters.push({ attribute_code: el.attribute_code, values: [el.value] });
        }
      }
    });
    const currPage = getters2["getCurrentPage"];
    const perPage = getters2["getProductsPerPage"];
    const retval = await getProductFiltersByFilteredSearch(searchVal, currPage, perPage, {
      sort,
      filters
    }).catch((e) => {
      logger.error("getProductFiltersByFilteredSearch", "category store actions load", e)();
      throw e;
    });
    const products = retval.items;
    const totalPages = retval.page_info.total_pages;
    const totalProducts = retval.total_count;
    commit("setTotalPages", totalPages);
    commit("setTotalProducts", totalProducts);
    commit("setProducts", products);
    commit("setLoadProducts", false);
    const uFilters = [];
    if (retval.aggregations && retval.aggregations.length) {
      retval.aggregations.forEach((element) => {
        if (element.attribute_code != "category_id" && element.attribute_code != "category_uid") {
          if (element.attribute_code == "price") {
            if (parseInt(element.min_value) < 0) {
              element.min_value = 0;
            }
            element.min = parseInt(element.min_value);
            if (Math.ceil(element.max_value) < element.min_value) {
              element.max = element.min_value;
            } else {
              element.max = Math.ceil(element.max_value);
            }
            if (element.min < 0) {
              element.min = 0;
            }
            if (element.max < 0) {
              element.max = 0;
            }
            const priceFilter = getters2["getPriceFilter"];
            if (priceFilter[0] === 0 && priceFilter[1] === 0) {
              commit("setPriceFilterMin", element.min);
              commit("setPriceFilterMax", element.max);
              commit("addPriceFilter", [element.min, element.max]);
            }
          }
          uFilters.push(element);
        }
      });
    }
    commit("setProductFilters", uFilters);
  },
  /**
   * load product filters based on search and filters
   *
   * @param {object} string search
   */
  async applySearchFilters({ commit, dispatch, getters: getters2 }, { filter, store: store2 }) {
    const searchVal = getters2["getCurrentSearch"];
    const { sort, page, filters } = filter;
    let { pageSize } = filter;
    if (isNaN(parseInt(pageSize))) pageSize = 12;
    const retval = await getProductFiltersBySearch(searchVal, pageSize);
    const totalPages = retval.page_info.total_pages;
    const totalProducts = retval.total_count;
    commit("setTotalPages", totalPages);
    commit("setTotalProducts", totalProducts);
    const priceFilter = [0, 0];
    const productFilters = [];
    if (retval.aggregations && retval.aggregations.length) {
      retval.aggregations.forEach((element) => {
        if (element.attribute_code != "category_id" && element.attribute_code != "category_uid") {
          if (element.attribute_code == "price") {
            if (parseInt(element.min_value) < 0) {
              element.min_value = 0;
            }
            element.min = parseInt(element.min_value);
            if (Math.ceil(element.max_value) < element.min_value) {
              element.max = element.min_value;
            } else {
              element.max = Math.ceil(element.max_value);
            }
            if (element.min < 0) {
              element.min = 0;
            }
            if (element.max < 0) {
              element.max = 0;
            }
            priceFilter[0] = element.min;
            priceFilter[1] = element.max;
            commit("setPriceFilterMin", element.min);
            commit("setPriceFilterMax", element.max);
            commit("addPriceFilter", priceFilter);
          }
          productFilters.push(element);
        }
      });
    }
    commit("setProductFilters", productFilters);
    if (!isNaN(parseInt(page)) && parseInt(page) <= totalPages) {
      commit("addCurrentPage", page);
    }
    if (!isNaN(parseInt(pageSize))) {
      commit("addProductsPerPage", pageSize);
    } else {
      commit("addProductsPerPage", 12);
    }
    if (sort) commit("addSorting", { data: sort, store: store2 });
    const activeFilters = [];
    let activePriceFilter = [];
    if (filters) {
      Object.keys(filters).forEach((element) => {
        const attrFilters = productFilters.find((el) => el.attribute_code == element);
        if (attrFilters != null) {
          if (element == "price") {
            const [priceMin, priceMax] = priceFilter;
            const [min, max] = filters["price"].split("-");
            if (!isNaN(parseInt(min)) && !isNaN(parseInt(max))) {
              activePriceFilter = [
                priceMin > parseInt(min) ? priceMin : parseInt(min),
                priceMax < parseInt(max) ? priceMax : parseInt(max)
              ];
            }
          } else {
            filters[element].split(",").forEach((value) => {
              const activeFilter = attrFilters.options.find((option) => option.value == value);
              if (activeFilter) {
                const filterBy = {
                  attribute_code: element,
                  type_label: attrFilters.label,
                  value,
                  label: activeFilter.label
                };
                activeFilters.push(filterBy);
              }
            });
          }
        }
      });
    }
    if (activeFilters.length) commit("addActiveFilter", activeFilters);
    if (activePriceFilter.length) commit("addPriceFilter", activePriceFilter);
    if (activeFilters.length || activePriceFilter.length) {
      const filters2 = [];
      const isPriceFilterActive = getters2["getIsPriceFilterActive"];
      if (isPriceFilterActive) {
        const priceFilter2 = getters2["getPriceFilter"];
        filters2.push({ attribute_code: "price", values: priceFilter2 });
      }
      const activeFilters2 = getters2["getActiveFilter"];
      activeFilters2.forEach((el) => {
        const index2 = filters2.findIndex((o) => o.attribute_code == el.attribute_code);
        if (index2 != -1) {
          filters2[index2].values.push(el.value);
        } else {
          filters2.push({
            attribute_code: el.attribute_code,
            values: [el.value]
          });
        }
      });
      const retval2 = await getProductFiltersBySearch(searchVal, pageSize, filters2).catch((e) => {
        logger.error("getProductFiltersBySearch", "category store actions load", e)();
        throw e;
      });
      const currentPage = getters2["getCurrentPage"];
      const totalPages2 = retval2.page_info.total_pages;
      const totalProducts2 = retval2.total_count;
      commit("setTotalPages", totalPages2);
      commit("setTotalProducts", totalProducts2);
      if (currentPage > totalPages2) commit("addCurrentPage", 1);
      const uFilters = [];
      if (retval2.aggregations && retval2.aggregations.length) {
        retval2.aggregations.forEach((element) => {
          if (element.attribute_code != "category_id" && element.attribute_code != "category_uid") {
            if (element.attribute_code == "price") {
              if (parseInt(element.min_value) < 0) {
                element.min_value = 0;
              }
              element.min = parseInt(element.min_value);
              if (Math.ceil(element.max_value) < element.min_value) {
                element.max = element.min_value;
              } else {
                element.max = Math.ceil(element.max_value);
              }
              if (element.min < 0) {
                element.min = 0;
              }
              if (element.max < 0) {
                element.max = 0;
              }
              const priceFilter2 = getters2["getPriceFilter"];
              if (priceFilter2[0] === 0 && priceFilter2[1] === 0) {
                commit("setPriceFilterMin", element.min);
                commit("setPriceFilterMax", element.max);
                commit("addPriceFilter", [element.min, element.max]);
              }
            }
            uFilters.push(element);
          }
        });
      }
      commit("setProductFilters", uFilters);
    }
    await dispatch("loadProductsBySearch");
  },
  /**
   * load the search
   *
   * @param {object} string search
   * @returns search object
   */
  async load({ commit, dispatch }, { search = null, filter = false, store: store2 }) {
    commit("setCurrentSearch", search);
    if (search == null) {
      commit("setProductFilters", {});
      commit("resetActiveFilter");
      commit("resetPriceFilter");
      commit("resetPageInfo");
      commit("resetSorting");
      return false;
    } else {
      commit("setProducts", []);
      commit("setProductFilters", {});
      commit("resetActiveFilter");
      commit("resetPriceFilter");
      commit("resetPageInfo");
      commit("resetSorting");
      commit("setConfigSettings");
      if (filter !== false) {
        await dispatch("applySearchFilters", { filter, store: store2 });
      } else {
        await dispatch("loadSearchFilters", store2);
      }
    }
    return true;
  },
  async loadPartfinder({ commit, dispatch }) {
    commit("setProducts", []);
    dispatch("loadFiltersPathfinder");
    const retval = await getProductByPartfinder(1);
    commit("addProducts", retval.items);
    const totalPages = retval.page_info.total_pages;
    if (!isServer) {
      dispatch("loadProductsPathfinder", {
        totalPages
      });
    }
    return true;
  },
  async loadFilteredSortedPartfinder({ getters: getters2, commit, dispatch }) {
    commit("setProducts", []);
    dispatch("loadFiltersPathfinder");
    const filters = [];
    const isPriceFilterActive = getters2["getIsPriceFilterActive"];
    if (isPriceFilterActive) {
      const priceFilter = getters2["getPriceFilter"];
      filters.push({ attribute_code: "price", values: priceFilter });
    }
    const activeFilters = getters2["getActiveFilter"];
    activeFilters.forEach((el) => {
      let matched = false;
      for (const o of filters) {
        if (o.attribute_code === el.attribute_code) {
          matched = true;
          if (el.value !== void 0) {
            o.values.push(el.value);
          }
          break;
        }
      }
      if (!matched) {
        if (Array.isArray(el.value)) {
          filters.push({ attribute_code: el.attribute_code, values: el.value });
        } else {
          filters.push({ attribute_code: el.attribute_code, values: [el.value] });
        }
      }
    });
    const currPage = getters2["getCurrentPage"] || 1;
    const perPage = getters2["getProductsPerPage"] || 12;
    const sort = getters2["getCurrentSorting"];
    const retval = await getProductFilteredSortedByPartfinder(
      currPage,
      perPage,
      { sort, filters }
    );
    const products = retval.items;
    const totalPages = retval.page_info.total_pages;
    const totalProducts = retval.total_count;
    commit("setProducts", products);
    commit("setTotalPages", totalPages);
    commit("setTotalProducts", totalProducts);
    if (!isServer) {
      dispatch("loadProductsPathfinder", {
        totalPages
      });
    }
    return true;
  },
  async loadProductsPathfinder() {
  },
  async loadFiltersPathfinder({ getters: getters2, commit }) {
    const getFilters = [];
    const isPriceFilterActive = getters2["getIsPriceFilterActive"];
    if (isPriceFilterActive) {
      const priceFilter = getters2["getPriceFilter"];
      getFilters.push({ attribute_code: "price", values: priceFilter });
    }
    const activeFilters = getters2["getActiveFilter"];
    if (activeFilters) {
      activeFilters.forEach((el) => {
        let matched = false;
        for (const o of getFilters) {
          if (o.attribute_code === el.attribute_code) {
            matched = true;
            if (el.value !== void 0) {
              o.values.push(el.value);
            }
            break;
          }
        }
        if (!matched) {
          if (Array.isArray(el.value)) {
            getFilters.push({ attribute_code: el.attribute_code, values: el.value });
          } else {
            getFilters.push({ attribute_code: el.attribute_code, values: [el.value] });
          }
        }
      });
    }
    const filters = await getProductFiltersByPartfinder(getFilters).catch((e) => {
      logger.error(
        "getProductFiltersBySearch",
        "category store actions load",
        e
      )();
      throw e;
    });
    const uFilters = [];
    if (filters.aggregations && filters.aggregations.length) {
      filters.aggregations.forEach((element) => {
        if (element.attribute_code != "category_id" && element.attribute_code != "category_uid") {
          if (element.attribute_code == "price") {
            element.min = parseInt(element.min_value);
            element.max = Math.ceil(element.max_value);
            const priceFilter = getters2["getPriceFilter"];
            if (priceFilter[0] === 0 && priceFilter[1] === 0) {
              commit("setPriceFilterMin", element.min);
              commit("setPriceFilterMax", element.max);
              commit("addPriceFilter", [element.min, element.max]);
            }
            if (priceFilter[0] < element.min || priceFilter[1] > element.max) {
              commit("setPartFinderPriceFilter", [element.min, element.max]);
            }
            uFilters.push(element);
          } else {
            if (element.options) {
              element.value = element.options.map((option) => option.value);
              uFilters.push(element);
            }
          }
        }
      });
    }
    commit("setProductFilters", uFilters);
  },
  async loadPartfinderFilters({ commit }, store2) {
    const filters = await getProductFiltersByPartfinder().catch((e) => {
      logger.error("getProductFiltersByPartfinder", "category store actions load", e)();
      throw e;
    });
    const uFilters = [];
    if (filters.aggregations && filters.aggregations.length) {
      filters.aggregations.forEach((element) => {
        if (element.attribute_code != "category_id" && element.attribute_code != "category_uid") {
          if (element.attribute_code == "price") {
            element.min = parseInt(element.min_value);
            element.max = Math.ceil(element.max_value);
            commit("setPriceFilter", { data: [element.min, element.max], store: store2 });
          }
          uFilters.push(element);
        }
      });
    }
    commit("setProductFilters", uFilters);
  }
};
const mutations$g = {
  // always and only change vuex state through mutations.
  setCurrentCategory(state2, data) {
    state2.current = data;
    const breadcrumbs = data.breadcrumbs;
    let currentName = "undefined";
    if (typeof data.name == "string") {
      currentName = data.name;
    }
    const bcrumb = { current: currentName, routes: [] };
    if (breadcrumbs != null) {
      breadcrumbs.sort((a, b) => {
        if (a.category_level < b.category_level) {
          return -1;
        }
        if (a.category_level > b.category_level) {
          return 1;
        }
        return 0;
      });
      let path = "";
      breadcrumbs.forEach((element) => {
        if (path.length > 0) {
          path = path + "/";
        }
        path = path + element.category_url_key;
        let name = "undefined";
        if (typeof element.category_name == "string") {
          name = element.category_name;
        }
        const bc = {
          name,
          route_link: path
        };
        bcrumb.routes.push(bc);
      });
    }
    store$1.commit("breadcrumbs/set", bcrumb);
  },
  setConfigSettings(state2) {
    var _a;
    if (state2.prodsPerPage === null) {
      if ((_a = CONFIG_JSON$1.products) == null ? void 0 : _a.perPage) {
        state2.prodsPerPage = CONFIG_JSON$1.products.perPage;
      } else {
        state2.prodsPerPage = 12;
      }
    }
  },
  setCurrentSearch(state2, data) {
    state2.currentSearch = data;
  },
  setProductFilters(state2, data) {
    state2.productFilters = data;
  },
  addActiveFilter(state2, data) {
    state2.activeFilter = data;
  },
  setLoadProducts(state2, data) {
    state2.loadProducts = data;
  },
  resetActiveFilter(state2) {
    state2.activeFilter = [];
  },
  setProducts(state2, data) {
    state2.products = data;
    state2.ShowProducts = data;
  },
  addCurrentPage(state2, data) {
    if (data >= 1) {
      state2.currentPage = data;
    }
  },
  setCurrentPage(state2, { pageNo: data, store: store2 }) {
    if (data >= 1 && data <= state2.totalPages) {
      state2.currentPage = data;
      store2.dispatch("search/loadProductsBySearch");
    }
  },
  setPartfinderCurrentPage(state2, data) {
    if (data >= 1 && data <= state2.totalPages) {
      state2.currentPage = data;
      store$1.dispatch("search/loadFilteredSortedPartfinder");
    }
  },
  resetCurrentPage(state2) {
    state2.currentPage = 1;
  },
  addProductsPerPage(state2, data) {
    state2.prodsPerPage = data;
  },
  setProductsPerPage(state2, { perPage: data, store: store2 }) {
    state2.prodsPerPage = data;
    store2.commit("search/resetCurrentPage");
    const totalProducts = state2.totalProducts;
    const totalPages = Math.ceil(state2.totalProducts / data);
    state2.totalPages = totalPages;
    if (totalProducts > 0) {
      store2.dispatch("search/loadProductsBySearch");
    }
  },
  setTotalPages(state2, data) {
    state2.totalPages = data;
  },
  setTotalProducts(state2, data) {
    state2.totalProducts = data;
  },
  resetPageInfo(state2) {
    state2.currentPage = 1;
    state2.totalPages = 1;
    state2.totalProducts = 0;
  },
  addProducts(state2, data) {
    data.forEach((element) => {
      const retval = state2.products.find((o) => {
        if (o.sku == element.sku) {
          return true;
        }
      });
      if (retval == null) {
        state2.products.push(element);
      } else {
        state2.ShowProducts.push(element);
      }
    });
  },
  addPriceFilter(state2, data) {
    state2.priceFilter = data;
  },
  setPriceFilter(state2, { data, store: store2 }) {
    state2.priceFilter = data;
    store2.commit("search/resetCurrentPage");
    store2.dispatch("search/loadSearchFilters", store2);
  },
  setPartFinderPriceFilter(state2, data) {
    state2.priceFilter = data;
    store$1.commit("search/resetCurrentPage");
    store$1.dispatch("search/loadFilteredSortedPartfinder");
  },
  resetPriceFilter(state2) {
    state2.priceFilter = [0, 0];
  },
  setPriceFilterMin(state2, data) {
    state2.priceFilterMin = data;
  },
  setPriceFilterMax(state2, data) {
    state2.priceFilterMax = data;
  },
  removePriceFilter(state2) {
    const priceMin = state2.priceFilterMin;
    const priceMax = state2.priceFilterMax;
    state2.priceFilter = [priceMin, priceMax];
  },
  addSorting(state2, { data, store: store2 }) {
    if (CONFIG_JSON$1.sortingOptions[data]) {
      state2.sorting = data;
      const [sortBy, direction = "ASC"] = CONFIG_JSON$1.sortingOptions[data];
      let currentSorting = null;
      if (sortBy && direction) {
        currentSorting = { sortBy, direction };
      }
      store2.commit("search/addCurrentSorting", currentSorting);
    }
  },
  setSorting(state2, { data, store: store2 }) {
    if (CONFIG_JSON$1.sortingOptions[data]) {
      state2.sorting = data;
      const [sortBy, direction = "ASC"] = CONFIG_JSON$1.sortingOptions[data];
      let currentSorting = null;
      if (sortBy && direction) {
        currentSorting = { sortBy, direction };
      }
      store2.commit("search/setCurrentSorting", { data: currentSorting, store: store2 });
    }
  },
  addCurrentSorting(state2, data) {
    state2.currentSorting = data;
  },
  setCurrentSorting(state2, { data, store: store2 }) {
    state2.currentSorting = data;
    store2.commit("search/resetCurrentPage");
    store2.dispatch("search/loadProductsBySearch");
  },
  resetSorting(state2) {
    state2.sorting = "default";
    state2.currentSorting = null;
  },
  setActiveFilter(state2, { filter: data, store: store2 }) {
    const obj = state2.activeFilter.find((o) => {
      if (o.value == data.value) {
        return true;
      }
    });
    if (obj == null) {
      state2.activeFilter.push(data);
    }
    store2.commit("search/resetCurrentPage");
    store2.dispatch("search/loadSearchFilters", store2);
  },
  //Set filters for partfinder search
  setPartfinderActiveFilter(state2, data) {
    const obj = state2.activeFilter.find((o) => {
      if (o.value == data.value) {
        return true;
      }
    });
    if (obj == null) {
      state2.activeFilter.push(data);
    }
    store$1.commit("search/resetCurrentPage");
    store$1.dispatch("search/loadFilteredSortedPartfinder");
  },
  //Remove filters for partfinder search
  removePartfinderActiveFilter(state2, data) {
    if (state2.activeFilter.length > 0) {
      state2.activeFilter.find((o, i) => {
        if (o.value == data.value) {
          state2.activeFilter.splice(i, 1);
          return true;
        }
      });
      store$1.commit("search/resetCurrentPage");
      store$1.dispatch("search/loadFilteredSortedPartfinder");
    }
  },
  removeActiveFilter(state2, { filter: data, store: store2 }) {
    if (state2.activeFilter.length > 0) {
      state2.activeFilter.find((o, i) => {
        if (o.value == data.value) {
          state2.activeFilter.splice(i, 1);
          return true;
        }
      });
      store2.commit("search/resetCurrentPage");
      store2.dispatch("search/loadSearchFilters", store2);
    }
  },
  removeAllActiveFilter(state2, store2) {
    state2.activeFilter = [];
    store2.commit("search/resetCurrentPage");
    store2.commit("search/removePriceFilter");
    store2.dispatch("search/loadSearchFilters", store2);
  },
  removeAllActiveFilterForPartfinder(state2) {
    state2.activeFilter = [];
    store$1.commit("search/resetCurrentPage");
    store$1.commit("search/removePriceFilter");
    store$1.commit("search/resetPriceFilter");
    store$1.dispatch("search/loadFilteredSortedPartfinder");
  },
  setIsBusy(state2, data) {
    state2.isBusy = data;
  }
};
const getters$g = {
  getCurrentCategory: (state2) => state2.current,
  getCurrentSearch: (state2) => state2.currentSearch,
  getProductFilters: (state2) => state2.productFilters,
  getActiveFilter: (state2) => state2.activeFilter,
  getShowProducts: (state2) => state2.ShowProducts,
  getCurrentPage: (state2) => state2.currentPage,
  getProductsPerPage: (state2) => state2.prodsPerPage || 12,
  getTotalPages: (state2) => state2.totalPages,
  getTotalProducts: (state2) => state2.totalProducts,
  getPriceFilter: (state2) => state2.priceFilter,
  getPriceFilterMin: (state2) => state2.priceFilterMin,
  getPriceFilterMax: (state2) => state2.priceFilterMax,
  getIsPriceFilterActive: (state2) => !(state2.priceFilter[0] === 0 && state2.priceFilter[1] === 0) && !(state2.priceFilter[0] === state2.priceFilterMin && state2.priceFilter[1] === state2.priceFilterMax),
  getSorting: (state2) => state2.sorting,
  getCurrentSorting: (state2) => state2.currentSorting,
  getLoadProducts: (state2) => state2.loadProducts,
  getIsBusy: (state2) => state2.isBusy
};
const Search = {
  namespaced: true,
  state: state$g,
  actions: actions$g,
  mutations: mutations$g,
  getters: getters$g
};
async function loadContentBlocks(blockId) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = "{ cmsBlocks(identifiers: " + JSON.stringify(blockId) + ") {items {identifier title content }}}";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadContentBlocks", "data-resolver cms", e)();
    throw e;
  });
  return retval.data.data.cmsBlocks;
}
async function loadContentPage(id) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = "{ cmsPage(id: " + id + ") {url_key title content content_heading page_layout meta_title meta_description meta_keywords}}";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadContentPage", "data-resolver cms", e)();
    throw e;
  });
  if (retval.data.data.cmsPage != null) {
    return retval.data.data.cmsPage;
  } else {
    return false;
  }
}
async function loadContentPageByIdentifier(id) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = '{ cmsPage(identifier: "' + id + '") {url_key title content content_heading page_layout meta_title meta_description meta_keywords}}';
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadContentPageByIdentifier", "data-resolver cms", e)();
    throw e;
  });
  if (retval.data.data.cmsPage != null) {
    return retval.data.data.cmsPage;
  } else {
    return false;
  }
}
async function loadStores() {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = "{phisicalStores{ items { name url_key pickup_location_code street postcode city country_id phone fax email description banner_image {url label} map_image {url label} base_image {url label} storefront_image {url label} images {url label} opening_hours {day, label, times {from to} } alternate_opening_hours {date, times{from to} reason } } }}";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadContentPageByIdentifier", "data-resolver cms", e)();
    throw e;
  });
  if (retval.data.data.phisicalStores != null) {
    return retval.data.data.phisicalStores.items;
  } else {
    return false;
  }
}
const state$f = () => ({
  items: [],
  checkoutStatus: null
});
const actions$f = {
  async single({ getters: getters2, commit }, { key = "identifier", value = "" }) {
    const cmsBlock = getters2.findCmsBlocks({ key, value });
    if (!cmsBlock) {
      const blockResponse = await loadContentBlocks([value]).catch((e) => {
        logger.error("loadContentBlocks", "cms block store actions single", e)();
        throw e;
      });
      if (blockResponse.items.length > 0) {
        if (blockResponse.items[0].content.indexOf("rel") == -1) ;
        commit("setCmsBlock", blockResponse.items[0]);
        return blockResponse.items[0];
      }
    }
    return cmsBlock[0];
  },
  async multiple({ commit }, {
    //key = "identifier",
    value = []
  }) {
    const blockResponse = await loadContentBlocks(value).catch((e) => {
      logger.error("loadContentBlocks", "cms block store actions multiple", e)();
      throw e;
    });
    if (blockResponse.items.length > 0) {
      blockResponse.items.forEach((element) => {
        if (element) {
          if (element.identifier == "header_links" || element.identifier == "footer_menu_information") {
            element.content = element.content.replace(
              /komtnietvoor/g,
              '<a onclick="redirect(event)" href='
            );
          } else {
            element.content = element.content.replace(
              /<a(.*?)href="(.*?)"(.*?)>/g,
              '<a$1href="$2"$3 onclick="redirect(event)">'
            );
            element.content = element.content.replace(
              /<a((?!<\/a>).)to="(http|mailto|tel)(.*?)<\/a>/g,
              '<a$1href="$2$3</a>'
            );
          }
          commit("setCmsBlock", element);
        }
      });
      return blockResponse.items;
    }
  }
};
const mutations$f = {
  // always and only change vuex state through mutations.
  setCmsBlock(state2, data) {
    if (typeof data == "object") {
      const record = state2.items.findIndex((c) => c.identifier === data.identifier);
      if (record != -1) {
        state2.items.splice(record, 1);
      }
      state2.items.push(data);
    }
  }
};
const getters$f = {
  getCmsBlockByIdentifier: (state2) => (identifier) => state2.items.find((item) => typeof item === "object" && item.identifier === identifier),
  findCmsBlocks: (state2) => ({ key, value }) => state2.items.filter((item) => item[key] === value)
};
const cmsBlocks = {
  namespaced: true,
  state: state$f,
  actions: actions$f,
  mutations: mutations$f,
  getters: getters$f
};
const state$e = () => ({
  items: []
});
const actions$e = {
  async single({ getters: getters2, commit }, { key = "identifier", value = "" }) {
    const slider = getters2.findSliders({ key, value });
    if (!slider) {
      const blockResponse = await loadSliderByIdentifiers([value]).catch(
        (e) => {
          logger.error(
            "loadSliderByIdentifiers",
            "sliders store actions single",
            e
          )();
          throw e;
        }
      );
      if (blockResponse.items.length > 0) {
        commit("setSlider", blockResponse.items[0]);
        return blockResponse.items[0];
      }
    }
    return slider[0];
  },
  async multiple({ commit }, { value = [] }) {
    const blockResponse = await loadSliderByIdentifiers(value).catch((e) => {
      logger.error(
        "loadSliderByIdentifiers",
        "sliders store actions multiple",
        e
      )();
      throw e;
    });
    if (blockResponse.length > 0) {
      blockResponse.forEach((element) => {
        commit("setSlider", element);
      });
      return blockResponse;
    }
  }
};
const mutations$e = {
  // always and only change vuex state through mutations.
  setSlider(state2, data) {
    if (typeof data == "object") {
      const record = state2.items.findIndex(
        (c) => c.identifier === data.identifier
      );
      if (record != -1) {
        state2.items.splice(record, 1);
      }
      state2.items.push(data);
    }
  }
};
const getters$e = {
  getSliderByIdentifier: (state2) => (identifier) => state2.items.find(
    (item) => typeof item === "object" && item.identifier === identifier
  ),
  getSlidesByIdentifier: (state2) => (identifier) => {
    const slider = state2.items.find(
      (item) => typeof item === "object" && item.identifier === identifier
    );
    if (typeof slider != "undefined") {
      return slider.slides;
    } else {
      return [];
    }
  },
  findSliders: (state2) => ({ key, value }) => state2.items.filter((item) => item[key] === value)
};
const sliders = {
  namespaced: true,
  state: state$e,
  actions: actions$e,
  mutations: mutations$e,
  getters: getters$e
};
const state$d = () => ({
  stores: []
  // shown product
});
const actions$d = {
  async load({ commit }) {
    const page = await loadStores().catch((e) => {
      logger.error("stores", "store", e)();
      throw e;
    });
    commit("setStores", page);
    return page;
  }
};
const mutations$d = {
  // always and only change vuex state through mutations.
  setStores(state2, data) {
    const d = /* @__PURE__ */ new Date();
    const curday = d.getDay();
    data.forEach((store2, index2) => {
      const openingHours = [];
      store2.opening_hours.forEach((day) => {
        const today = /* @__PURE__ */ new Date();
        let adddays = day.day;
        if (day.day < curday) {
          adddays = 7 + day.day;
        }
        const searchdate = /* @__PURE__ */ new Date();
        searchdate.setDate(today.getDate() + adddays - curday);
        const dateComp = searchdate.getFullYear() + "-" + String(searchdate.getMonth() + 1).padStart(2, "0") + "-" + String(searchdate.getDate()).padStart(2, "0");
        if (day.day == 0) {
          day.day = 7;
        }
        let label = day.label;
        let hours = day.times;
        const special = store2.alternate_opening_hours.find((v) => {
          if (v.date == dateComp) {
            return true;
          }
        });
        if (special != null) {
          if (special.reason != null) {
            label = special.reason;
          }
          hours = [special.times];
        }
        const openingHour = { label, hours };
        openingHours[day.day - 1] = openingHour;
      });
      data[index2].openingHours = openingHours;
    });
    state2.stores = data;
  }
};
const getters$d = {
  getStores: (state2) => state2.stores,
  getStoreByCode: (state2) => (code) => state2.stores.find(
    (item) => typeof item === "object" && item.url_key === code
  )
  /*
  getOpeningTimes: (state) => (code) => {
    const store = state.stores.find(
      (item) =>
        typeof item === "object" && item.pickup_location_code === code
    );
    const d = new Date();
    //const curday = d.getDay();
    //const openingHours = [];
    //store.opening_hours.forEach((element) => {});
  },*/
};
const stores = {
  namespaced: true,
  state: state$d,
  actions: actions$d,
  mutations: mutations$d,
  getters: getters$d
};
const state$c = () => ({
  current: null,
  // shown product
  default: null,
  currentId: null
});
const actions$c = {
  async load({ commit }, { id = 0 }) {
    const page = await loadContentPage(id).catch((e) => {
      logger.error("loadContentPage", "cms block store actions single", e)();
      throw e;
    });
    page.content = page.content.replace(
      /<a(.*?)href="(.*?)"(.*?)>/g,
      '<a$1href="$2"$3 onclick="redirect(event)">'
    );
    page.content = page.content.replace(
      /<a((?!<\/a>).)href="(http|mailto|tel)(.*?)<\/a>/g,
      '<a$1href="$2$3</a>'
    );
    page.content.replace(/<a id="(.*?)"><\/a>/, '<a id="$1"></a>').replace(/<a href="#(.+?)"(.*?)<\/a>/, '<a href="#$1"$2</a>');
    commit("setCurrentPage", page);
    return page;
  },
  async loadDefault({ commit }, { id = "" }) {
    const page = await loadContentPageByIdentifier(id).catch((e) => {
      logger.error("loadContentPageByIdentifier", "cms block store actions loadDefault", e)();
      throw e;
    });
    commit("setDefaultPage", page);
    return page;
  },
  setPage({ commit }, { page }) {
    logger.debug(page.content)();
    page.content = page.content.replace(
      /<a (.*?)href="(?!#)(.*?)<\/a>/g,
      '<a onclick="redirect(event)" $1href="$2</a>'
    );
    commit("setCurrentPage", page);
  }
};
const mutations$c = {
  // always and only change vuex state through mutations.
  setCurrentPage(state2, data) {
    state2.current = data;
  },
  setDefaultPage(state2, data) {
    state2.default = data;
  },
  setCurrentId(state2, data) {
    state2.currentId = data;
  }
};
const getters$c = {
  getCurrentPage: (state2) => state2.current,
  getDefaultPage: (state2) => state2.default,
  getCurrentId: (state2) => state2.currentId
};
const cmsPage = {
  namespaced: true,
  state: state$c,
  actions: actions$c,
  mutations: mutations$c,
  getters: getters$c
};
const state$b = () => ({
  isLoggedIn: false,
  isApproved: false,
  userToken: null,
  userEmail: null,
  current: {},
  countries: [],
  accountTabIndex: 0,
  editAddressId: 0,
  editUser: false,
  editEmail: false,
  editPassword: false,
  editAddresses: false,
  Fake: null,
  wishlist: { id: null, items: [] },
  myOrders: [],
  totalOrdersCount: 0,
  reviews: []
});
const actions$b = {
  /**
   * Load active user
   *
   */
  async loadUser({ getters: getters2, commit, dispatch }, { store: store2 }) {
    if (getters2["getIsLoggedIn"] == false) {
      if (getters2["getUserToken"] == null) {
        const userToken = localStorage.getItem("userServerToken");
        if (userToken !== null) {
          commit("setUserToken", userToken);
          commit("setIsLoggedIn", true);
          const me = await getCurrent(store2);
          if (!me) {
            dispatch("logout", { store: store2 });
          } else {
            commit("setCurrentUser", me);
            commit("setIsApproved", me.is_approved ?? false);
            dispatch("loadOrders", { page: 1, perPage: 10, search: null, store: store2 });
            dispatch("loadReviews", { store: store2 });
            let wl = me.wishlist;
            if (wl == null) {
              wl = { id: null, items: [] };
            }
            commit("setWishlist", wl);
            const newCartToken = await getCustomerCartToken(store2);
            store2.commit("cart/setServerToken", newCartToken);
            await store2.dispatch("cart/loadCart", { store: store2 });
          }
        }
      }
    } else {
      const me = await getCurrent(store2);
      if (me != false) {
        commit("setCurrentUser", me);
        let wl = me.wishlist;
        if (wl == null) {
          wl = { id: null, items: [] };
        }
        commit("setWishlist", wl);
        commit("setIsApproved", me.is_approved ?? false);
        dispatch("loadOrders", { page: 1, perPage: 10, search: null, store: store2 });
        dispatch("loadReviews", { store: store2 });
      }
    }
  },
  /**
   * Load user orders
   *
   */
  async loadOrders({ commit }, { page = "1", perPage = "10", search, store: store2 }) {
    const myOrders = await getMyOrders({ page, perPage, search }, store2);
    if (myOrders != false) {
      commit("setMyOrdersTotalCount", myOrders.total_count);
      commit("setMyOrders", myOrders.items);
      return myOrders;
    }
  },
  async login({ commit, getters: getters2 }, { username = "", password = "", store: store2 }) {
    const retval = await login(username, password, store2);
    if (retval != false) {
      commit("setUserToken", retval);
      commit("setIsLoggedIn", true);
      const me = await getCurrent(store2);
      if (me != false) {
        const newCartToken = await getCustomerCartToken(store2);
        const oldCartToken = store2.getters["cart/getCartServerToken"];
        if (oldCartToken != null) {
          await mergeCart(oldCartToken, newCartToken, store2);
        }
        store2.commit("cart/setServerToken", newCartToken);
        let wl = me.wishlist;
        if (wl == null) {
          wl = { id: null, items: [] };
        }
        if (getters2["getWishlist"].length > 0) {
          await mergeGuestWishlist(getters2["getWishlistId"], wl.id, store2);
          wl = {
            ...wl,
            items: wl.items.concat(
              getters2["getWishlist"].filter(
                (item) => !wl.items.map((item2) => item2.product.sku).includes(item.product.sku)
              )
            )
          };
        }
        commit("setWishlist", wl);
        await store2.dispatch("cart/loadCart", { store: store2 });
        commit("setCurrentUser", me);
        commit("setIsApproved", me.is_approved ?? false);
      } else {
        commit("setUserToken", null);
        commit("setIsLoggedIn", false);
        commit("setIsApproved", false);
        commit("setCurrentUser", {});
      }
    } else {
      return false;
    }
    return true;
  },
  /**
   * Signup for newsletter
   *
   * @param {object} string email
   * @returns
   */
  async newsletterSignup({ commit, dispatch }, { email = "", store: store2 }) {
    commit("setFake", null);
    const retval = await newsletterSignup(email, store2);
    if (retval != false) {
      dispatch("loadUser", { store: store2 });
      return true;
    }
    return false;
  },
  /**
   * Load countries
   *
   * @returns true
   */
  async loadCountries({ commit }) {
    const retval = await getCountries();
    commit("setCountries", retval);
    return true;
  },
  /**
   * Create user account
   *
   * @param {object} object account
   * @returns
   */
  async createAccount({ commit }, { account, store: store2 }) {
    commit("setFake", null);
    const retval = await createAccount(account, store2);
    if (retval != false) {
      commit("setUserToken", retval);
      commit("setIsLoggedIn", true);
      commit("setIsApproved", false);
      const me = await getCurrent(store2);
      if (me != false) {
        let wl = me.wishlist;
        if (wl == null) {
          wl = { id: null, items: [] };
        }
        commit("setWishlist", wl);
        commit("setCurrentUser", me);
        const newCartToken = await getCustomerCartToken(store2);
        const oldCartToken = store2.getters["cart/getCartServerToken"];
        if (oldCartToken != null) {
          await mergeCart(oldCartToken, newCartToken, store2);
        }
        store2.commit("cart/setServerToken", newCartToken);
        await store2.dispatch("cart/loadCart", { store: store2 });
      } else {
        commit("setUserToken", null);
        commit("setIsLoggedIn", false);
        commit("setIsApproved", false);
        commit("setCurrentUser", {});
      }
    } else {
      return false;
    }
    return true;
  },
  /**
   * add product to wishlist
   *
   * @param {object} string sku, string parentSku
   * @returns true or false
   */
  async addProductToWishlist({ dispatch }, { sku, parentSku, store: store2 }) {
    const retval = await addProductToWishlist(sku, parentSku, store2);
    if (retval == true) {
      dispatch("loadUser", { store: store2 });
    }
    return retval;
  },
  /**
   * remove product from wishlist
   *
   * @param {object} integer id
   * @returns true or false
   */
  async removeProductFromWishlist({ dispatch }, { id, store: store2 }) {
    const retval = await removeProductFromWishlist(id, store2);
    if (retval == true) {
      dispatch("loadUser", { store: store2 });
    }
    return retval;
  },
  /**
   * update account
   *
   * @param {object} object account
   * @returns
   */
  async updateAccount({ commit }, { account, store: store2 }) {
    const retval = await updateAccount(account, store2);
    if (retval == true) {
      const me = await getCurrent(store2);
      if (me != false) {
        commit("setCurrentUser", me);
      }
    }
    return retval;
  },
  /**
   * add address
   *
   * @param {object} object address
   * @returns true or false
   */
  async addAddress({ commit }, { address, store: store2 }) {
    const retval = await createAddress(address, store2);
    if (retval == true) {
      const me = await getCurrent(store2);
      if (me != false) {
        commit("setCurrentUser", me);
      }
    }
    return retval;
  },
  /**
   * updaet address
   *
   * @param {object} object address
   * @returns true or false
   */
  async updateAddress({ commit }, { address, store: store2 }) {
    const retval = await updateAddress(address.id, address, store2);
    if (retval == true) {
      const me = await getCurrent(store2);
      if (me != false) {
        commit("setCurrentUser", me);
      }
    }
    return retval;
  },
  /**
   * update user newsletter
   *
   * @param {object} boolean is_subscribed
   * @returns true or false
   */
  async updateUserNewsletter({ commit }, { is_subscribed, store: store2 }) {
    console.log("is_subscribed :>> ", is_subscribed);
    const account = { is_subscribed };
    const retval = await updateAccount(account, store2);
    if (retval == true) {
      const msg = {
        type: "success",
        title: i18n.global.t("newsletter_success"),
        text: is_subscribed ? i18n.global.t("newsletter_subscribed") : i18n.global.t("newsletter_unsubscribed")
      };
      store2.dispatch("messages/sendMessage", { message: msg });
      const me = await getCurrent(store2);
      if (me != false) {
        commit("setCurrentUser", me);
      }
    } else {
      const msg = {
        type: "danger",
        title: i18n.global.t("newsletter_error"),
        text: i18n.global.t("something_went_wrong")
      };
      store2.dispatch("messages/sendMessage", { message: msg });
    }
    return retval;
  },
  /**
   * delete address
   *
   * @param {object} integer id
   * @returns
   */
  async deleteAddress({ commit }, { id, store: store2 }) {
    const retval = await deleteAddress(id, store2);
    if (retval == true) {
      const me = await getCurrent(store2);
      if (me != false) {
        commit("setCurrentUser", me);
      }
    }
    return retval;
  },
  /**
   * change password
   *
   * @param {object} string currentPassword, string newPassword
   * @returns
   */
  async changePassword({ commit }, { currentPassword, newPassword, store: store2 }) {
    commit("setFake", null);
    const retval = await changePassword(currentPassword, newPassword, store2);
    return retval;
  },
  /**
   * logout
   *
   */
  logout({ commit }, { store: store2 }) {
    commit("setUserToken", null);
    commit("setIsLoggedIn", false);
    commit("setIsApproved", false);
    commit("setCurrentUser", {});
    commit("setWishlist", { id: null, items: [] });
    localStorage.removeItem("checkoutPayment");
    localStorage.removeItem("wishListId");
    store2.dispatch("cart/unLoad");
  },
  /**
   * session expired
   *
   */
  sessionExpired({ dispatch }, { store: store2 }) {
    dispatch("logout", { store: store2 });
    const msg = {
      type: "danger",
      title: "session_expired",
      text: i18n.global.t("session_expired_error")
    };
    store2.dispatch("messages/sendMessage", { message: msg });
  },
  /**
   * set product wishlist status
   *
   * @param {object} string sku, string parentSku
   */
  async setProductWishlistStatus({ getters: getters2, dispatch, commit }, { sku, parentSku, store: store2 }) {
    const id = getters2["getProductInWishlistId"](sku);
    if (id == null) {
      if (getters2["getIsLoggedIn"]) {
        const retval = await addProductToWishlist(sku, parentSku, store2);
        if (retval) {
          dispatch("loadUser", { store: store2 });
        }
      } else {
        if (!getters2["getWishlistId"]) {
          const guestWishlistid = await createGuestWishlist();
          commit("setWishlist", { id: guestWishlistid, items: [] });
        }
        const retval = await addProductToWishlist(sku, parentSku, store2);
        if (retval) {
          commit("setWishlist", retval.data.data.addProductsToWishlist.wishlist);
        }
      }
    } else {
      if (getters2["getIsLoggedIn"]) {
        const retval = await removeProductFromWishlist(id, store2);
        if (retval) {
          dispatch("loadUser", { store: store2 });
        }
      } else {
        if (!getters2["getWishlistId"]) {
          const guestWishlistid = await createGuestWishlist();
          commit("setWishlist", { id: guestWishlistid, items: [] });
        }
        const retval = await removeProductFromWishlist(id, store2);
        if (retval) {
          commit("setWishlist", retval.data.data.removeProductsFromWishlist.wishlist);
        }
      }
    }
  },
  /**
   * remove product wishlist
   *
   * @param {object} integer id
   */
  async removeProductWishlist({ dispatch }, { id, store: store2 }) {
    const retval = await removeProductFromWishlist(id, store2);
    if (retval) {
      dispatch("loadUser", { store: store2 });
    }
  },
  /** wishlist related */
  async addWishItemDescription(_, { wishItemId, description, qty, store: store2 }) {
    const retval = await addWishlistItemDescription({ wishItemId, description, qty }, store2);
    return retval;
  },
  async shareWishlist(_, { name, emails, message, store: store2 }) {
    const retval = await handleShareWishlist({ name, emails, message }, store2);
    return retval;
  },
  async getSharedWishlist(_, sharing_code) {
    const retval = await getSharedWishlistBySharingCode(sharing_code);
    return retval;
  },
  /**
   * Create user account
   *
   * @param {object} object account
   * @returns
   */
  async createAccountFromOrder({ commit }, { account, store: store2 }) {
    commit("setFake", null);
    const retval = await createAccountFromOrder(account, store2);
    if (retval != false) {
      commit("setUserToken", retval);
      commit("setIsLoggedIn", true);
      commit("setIsApproved", false);
      const me = await getCurrent(store2);
      if (me != false) {
        let wl = me.wishlist;
        if (wl == null) {
          wl = { id: null, items: [] };
        }
        commit("setWishlist", wl);
        commit("setCurrentUser", me);
        const newCartToken = await getCustomerCartToken(store2);
        const oldCartToken = store2.getters["cart/getCartServerToken"];
        if (oldCartToken != null) {
          await mergeCart(oldCartToken, newCartToken, store2);
        }
        store2.commit("cart/setServerToken", newCartToken);
        await store2.dispatch("cart/loadCart", { store: store2 });
      } else {
        commit("setUserToken", null);
        commit("setIsLoggedIn", false);
        commit("setIsApproved", false);
        commit("setCurrentUser", {});
      }
    } else {
      return false;
    }
    return true;
  },
  async loadReviews({ commit }, { store: store2 }) {
    const myReviews = await getReviews(store2);
    if (myReviews.items && myReviews.items.length > 0) {
      commit("setReviews", myReviews.items);
      return myReviews;
    }
  }
};
const mutations$b = {
  /**
   * set user token
   *
   * @param {string} payload
   */
  setUserToken(state2, payload) {
    state2.userToken = payload;
    if (payload != null) {
      localStorage.setItem("userServerToken", payload);
    } else {
      localStorage.removeItem("userServerToken");
    }
  },
  /**
   * Set is logged in
   *
   * @param {boolean} payload
   * @private
   */
  setIsLoggedIn(state2, payload) {
    state2.isLoggedIn = payload;
  },
  /**
   * Set is approved
   *
   * @param {boolean} payload
   * @private
   */
  setIsApproved(state2, payload) {
    state2.isApproved = payload;
  },
  /**
   * set Current user
   *
   * @param {object} payload
   * @private
   */
  setCurrentUser(state2, payload) {
    state2.current = payload;
  },
  /**
   * set countries
   *
   * @param {array} payload
   * @private
   */
  setCountries(state2, payload) {
    state2.countries = payload;
  },
  /**
   * set account tab index
   *
   * @param {integer} payload
   */
  setAccountTabIndex(state2, payload) {
    state2.accountTabIndex = payload;
  },
  /**
   * set Edit address id
   *
   * @param {integer} payload
   */
  setEditAddressId(state2, payload) {
    state2.editAddressId = payload;
  },
  setEditAddresses(state2, payload) {
    state2.editAddresses = payload;
  },
  /**
   * set wishlist
   *
   * @param {object} payload
   */
  setWishlist(state2, payload) {
    if (payload == null) {
      payload = { id: null, items: [] };
    }
    state2.wishlist = payload;
  },
  /**
   * a fake set when you don't need any other object in you dispatch
   *
   * @param {object} state
   * @param {any} payload
   * @private
   *
   */
  setFake(state2, payload) {
    state2.fake = payload;
  },
  /**
   * set orders
   *
   * @param {array} payload
   */
  setMyOrders(state2, payload) {
    state2.myOrders = payload;
  },
  setMyOrdersTotalCount(state2, payload) {
    state2.totalOrdersCount = payload;
  },
  setEditUser(state2, payload) {
    state2.editUser = payload;
  },
  setEditPassword(state2, payload) {
    state2.editPassword = payload;
  },
  setEditEmail(state2, payload) {
    state2.editEmail = payload;
  },
  setReviews(state2, payload) {
    state2.reviews = payload;
  }
};
const getters$b = {
  getIsLoggedIn: (state2) => state2.isLoggedIn,
  getIsApproved: (state2) => state2.isApproved,
  getCurrentUser: (state2) => state2.current,
  getUserToken: (state2) => state2.userToken,
  getUserEmail: (state2) => state2.userEmail,
  getWishlist: (state2) => state2.wishlist.items,
  getMyOrders: (state2) => state2.myOrders,
  getMyOrdersTotalCount: (state2) => state2.totalOrdersCount,
  getWishlistId: (state2) => state2.wishlist.id,
  getEditUser: (state2) => state2.editUser,
  getEditPassword: (state2) => state2.editPassword,
  getEditAddresses: (state2) => state2.editAddresses,
  getEditEmail: (state2) => state2.editEmail,
  getWishlistQuantity: (state2) => state2.wishlist.items.length,
  getCountries: (state2) => {
    const countries = [];
    state2.countries.forEach(function(row) {
      const country = { value: row.id, text: row.full_name_locale };
      countries.push(country);
    });
    return countries;
  },
  getRegions: (state2) => (id) => {
    const country = state2.countries.find((o) => {
      if (o.id == id) {
        return true;
      }
    });
    if (country != null) {
      if (country.available_regions != null) {
        const regions = [];
        country.available_regions.forEach((element) => {
          const option = {
            value: element.id,
            text: element.name
          };
          regions.push(option);
        });
        return regions;
      } else {
        return null;
      }
    }
  },
  getDefaultShippingAddress: (state2) => {
    if (typeof state2.current.addresses != "undefined") {
      const index2 = state2.current.addresses.findIndex(
        (item) => item.id == state2.current.default_shipping
      );
      return state2.current.addresses[index2];
    } else {
      return null;
    }
  },
  getDefaultBillingAddress: (state2) => {
    if (typeof state2.current.addresses != "undefined") {
      const index2 = state2.current.addresses.findIndex(
        (item) => item.id == state2.current.default_billing
      );
      return state2.current.addresses[index2];
    } else {
      return null;
    }
  },
  getAddressByID: (state2) => (id) => {
    if (typeof state2.current.addresses != "undefined") {
      const index2 = state2.current.addresses.findIndex((item) => item.id == id);
      return state2.current.addresses[index2];
    } else {
      return null;
    }
  },
  isProductInWishlist: (state2) => (sku) => {
    if (state2.wishlist.items.length > 0) {
      const obj = state2.wishlist.items.find((o) => {
        if (o.product.sku == sku) {
          return true;
        }
      });
      if (obj == null) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  },
  getProductInWishlistId: (state2) => (sku) => {
    if (state2.wishlist.items.length > 0) {
      const obj = state2.wishlist.items.find((o) => {
        if (o.product.sku == sku) {
          return true;
        }
      });
      if (obj == null) {
        return null;
      } else {
        return obj.id;
      }
    } else {
      return null;
    }
  },
  getAccountTabIndex: (state2) => state2.accountTabIndex,
  getEditAddressId: (state2) => state2.editAddressId,
  getReviews: (state2) => state2.reviews
};
const User = {
  namespaced: true,
  state: state$b,
  actions: actions$b,
  mutations: mutations$b,
  getters: getters$b
};
async function loadFAQ() {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = "query { faq { page_info { current_page page_size total_pages } total_count items { category_id title url_key url faq { total_count items { question short_answer long_answer } } } } }";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadFAQ", "data-resolver faq", e)();
    throw e;
  });
  return retval.data.data.faq;
}
const state$a = () => ({
  faq: null
  // shown product
});
const actions$a = {
  /**
   * load FAQ data
   *
   */
  async load({ commit }) {
    const faq = await loadFAQ().catch((e) => {
      logger.error("loadFAQ", "faq store actions", e)();
      throw e;
    });
    if (faq != null) {
      commit("setFaq", faq.items);
    }
  }
};
const mutations$a = {
  // always and only change vuex state through mutations.
  /**
   * set the faq
   *
   * @param {array} data
   */
  setFaq(state2, data) {
    state2.faq = data;
  }
};
const getters$a = {
  getFaq: (state2) => state2.faq
};
const FAQ = {
  namespaced: true,
  state: state$a,
  actions: actions$a,
  mutations: mutations$a,
  getters: getters$a
};
const state$9 = () => ({
  cartIsLoaded: false,
  cartItems: [],
  cartQuantity: 0,
  cartServerToken: null,
  cartShippingAddress: null,
  cartBillingAddress: null,
  cartShippingMethods: [],
  cartPaymentMethods: [],
  cartShippingMethod: null,
  cartPaymentMethod: null,
  cartPaymentMethodOptions: null,
  freeShippingAmount: 0,
  freeShipping: null,
  cartShippingAddressId: null,
  cartBillingAddressId: null,
  cartEmail: null,
  cartPrices: {},
  defaultShipping: {},
  pickupLocations: [],
  comment: "",
  Fake: null,
  delivery_time: {},
  applied_coupons: [],
  storeValidation: {},
  accountPassword: "",
  createAccount: false,
  shippingAddressUpdatingStatus: false
});
const actions$9 = {
  /**
   * Load Shopping cart
   *
   */
  async loadCart({ getters: getters2, commit, dispatch }, { store: store2 }) {
    if (getters2["getCartIsLoaded"] == false) {
      if (getters2["getCartServerToken"] == null) {
        const serverToken = localStorage.getItem("cartServerToken");
        if (serverToken !== null) {
          commit("setServerToken", serverToken);
        }
      }
    }
    if (getters2["getCartServerToken"] != null) {
      const cart = await loadCart(store2);
      dispatch("getFreeShipping");
      if (cart == false) {
        commit("setCartItems", []);
        commit("setCartIsLoaded", false);
        commit("setServerToken", null);
        commit("setShippingAddress", null);
        commit("setShippingAddressId", null);
        commit("setBillingAddress", null);
        commit("setBillingAddressId", null);
        commit("setShippingMethods", []);
        commit("setShippingMethod", null);
        commit("setPaymentMethods", []);
        commit("setPaymentMethod", null);
        commit("setEmail", null);
        commit("setCartPrices", {});
        commit("setDefaultShipping", {});
        commit("setAppliedCouponCodes", []);
      } else {
        cart.items.forEach((element, index2) => {
          if (element == null) {
            cart.items.splice(index2, 1);
          }
        });
        commit("setCartItems", cart.items);
        commit("setCartIsLoaded", true);
        commit("setBillingAddress", cart.billing_address);
        commit("setEmail", cart.email);
        commit("setCartPrices", cart.prices);
        commit("setDefaultShipping", cart.default_shipping_method);
        commit("setAppliedCouponCodes", cart.applied_coupons);
        if (cart.available_payment_methods && (getters2["cart/getPaymentMethods"] == [] || getters2["cart/getPaymentMethods"] == null)) {
          const methods = await getPaymentmethods(store2);
          commit("setPaymentMethods", methods);
        }
        try {
          if (typeof cart.selected_payment_method != "undefined") {
            const localStorageData = JSON.parse(localStorage.getItem("checkoutPayment"));
            if (localStorageData) {
              commit("setPaymentMethod", localStorageData);
            } else if (cart.selected_payment_method.code != "") {
              commit("setPaymentMethod", cart.selected_payment_method.code);
            } else {
              commit("setPaymentMethod", null);
            }
          }
        } catch (error) {
          console.error("Error occurred:", error);
        }
        try {
          if (typeof cart.shipping_addresses != "undefined") {
            if (cart.shipping_addresses.length > 0) {
              const address = {
                id: null,
                firstname: "",
                lastname: "",
                street: [],
                postcode: "",
                city: "",
                country: {},
                telephone: "",
                company: ""
              };
              address.id = cart.shipping_addresses[0].id;
              address.firstname = cart.shipping_addresses[0].firstname;
              address.lastname = cart.shipping_addresses[0].lastname;
              address.street = cart.shipping_addresses[0].street;
              address.postcode = cart.shipping_addresses[0].postcode;
              address.city = cart.shipping_addresses[0].city;
              address.country = cart.shipping_addresses[0].country;
              address.telephone = cart.shipping_addresses[0].telephone;
              address.company = cart.shipping_addresses[0].company;
              address.vat_id = cart.shipping_addresses[0].vat_id;
              commit("setShippingAddress", address);
              commit("setShippingMethods", cart.shipping_addresses[0].available_shipping_methods);
              commit("setShippingMethod", cart.shipping_addresses[0].selected_shipping_method);
            } else {
              commit("setShippingAddress", null);
              commit("setShippingMethods", []);
              commit("setShippingMethod", null);
            }
          } else {
            commit("setShippingAddress", null);
            commit("setShippingMethods", []);
            commit("setShippingMethod", null);
          }
        } catch (error) {
          console.error("Error occurred:", error);
        }
        commit("setCartDeliveryTime", cart.delivery_time);
      }
    }
  },
  /**
   *Unload shopping cart
   *
   */
  unLoad({ commit }) {
    commit("setCartItems", []);
    commit("setCartIsLoaded", false);
    commit("setServerToken", null);
    commit("setShippingAddress", null);
    commit("setShippingAddressId", null);
    commit("setBillingAddress", null);
    commit("setBillingAddressId", null);
    commit("setShippingMethods", []);
    commit("setShippingMethod", null);
    commit("setPaymentMethods", []);
    commit("setPaymentMethod", null);
    commit("setEmail", null);
    commit("setCartPrices", {});
    commit("setDefaultShipping", {});
    commit("setCartDeliveryTime", {});
    commit("setAppliedCouponCodes", []);
  },
  /**
   * Get freeshipping amount from magento
   *
   */
  async getFreeShipping({ commit }) {
    if (CONFIG_JSON$1.useFreeShippingAmount) {
      const freeS = await getFreeShipping();
      commit("setFreeShipping", freeS);
      if (freeS != null) {
        commit("setFreeShippingAmount", freeS.default_amount);
      }
    }
  },
  /**
   *
   *
   * @param {object} integer id  integer quantity
   * @returns true or false
   */
  async updateCartItem({ commit }, { id, quantity, store: store2 }) {
    commit("setFake", null);
    const retval = await updateCartItem(id, quantity, store2);
    if (retval == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * Remove item from shopping cart
   *
   * @param {object} integer id
   * @returns
   */
  async removeCartItem({ commit }, { id, store: store2 }) {
    commit("setFake", null);
    const retval = await removeCartItem(id, store2);
    if (retval == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * Add Product to Shopping cart
   *
   * @param {object} string type object item
   * @returns
   */
  async addToCart({ getters: getters2, commit }, { type, item, store: store2 }) {
    if (getters2["getCartIsLoaded"] == false) {
      if (getters2["getCartServerToken"] == null) {
        const serverToken = await createGuestCart();
        commit("setServerToken", serverToken);
      }
    }
    let retval;
    switch (type) {
      case "SimpleProduct":
        retval = await addSimpleProduct(item, store2);
        break;
      case "ConfigurableProduct":
        retval = await addConfigurableProduct(item, store2);
        break;
      case "BundleProduct":
        retval = await addBundleProduct(item, store2);
        break;
      default:
        retval = false;
        break;
    }
    if (retval == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * Add Sample Product to Shopping cart
   *
   * @param {object} string type object item
   * @returns
   */
  async addSampleProductToCart({ getters: getters2, commit }, { sku }) {
    if (getters2["getCartIsLoaded"] == false) {
      if (getters2["getCartServerToken"] == null) {
        const serverToken = await createGuestCart();
        commit("setServerToken", serverToken);
      }
    }
    let retval = await addSampleProductToCart(sku);
    if (retval == true) {
      store.dispatch("cart/loadCart");
    }
    return retval;
  },
  async addProductToCart({ getters: getters2, commit }, { items, store: store2 }) {
    if (getters2["getCartIsLoaded"] == false) {
      if (getters2["getCartServerToken"] == null) {
        const serverToken = await createGuestCart();
        commit("setServerToken", serverToken);
      }
    }
    let retval = await addProduct(items, store2);
    if (retval == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * Add shipping address to shopping cart by id
   *
   * @param {object} integer id
   * @returns true or false
   */
  async addShippingAddressById({ commit }, { id, store: store2 }) {
    commit("setFake", null);
    const retval = await setShippingAddressById(id, store2);
    if (retval == true) {
      await store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * add shipping method to shopping cart
   *
   * @param {object} string carries string method
   * @returns true or false
   */
  async addShippingMethod({ commit }, { carrier, method, store: store2 }) {
    commit("setFake", null);
    const retval = await setShippingMethodsOnCart(carrier, method, store2);
    if (retval == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * add payment method to shopping cart
   * @returns true or false
   */
  async addPaymentMethod(_, store2) {
    const retval = await setPaymentMethod(store2);
    return retval;
  },
  /**
   * loadPickupLocations
   * @returns true or false
   */
  async loadPickupLocations({ commit }) {
    const retval = await getPickupLocations();
    commit("setPickupLocations", retval.items);
    return retval;
  },
  /**
   * add shipping address to shopping cart
   *
   * @param {object} object address
   * @returns true or false
   */
  async addShippingAddress({ commit }, { address, reloadCart = true, store: store2 }) {
    commit("setFake", null);
    const retval = await setShippingAddress(address, store2);
    if (retval == true && reloadCart == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  async setPickupLocation({ commit, getters: getters2 }, { code, store: store2 }) {
    commit("setFake", null);
    let address = getters2["getShippingAddress"];
    if (address === null) {
      await store2.dispatch("cart/loadCart", { store: store2 });
      address = getters2["getShippingAddress"];
    }
    let address_id = getters2["getShippingAddressId"];
    const retval = await setPickupLocation(code, address, address_id, store2);
    if (retval != false) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * Add billing address to shopping cart by id
   *
   * @param {object} integer id
   * @returns true or false
   */
  async addBillingAddressById({ commit }, { id, store: store2 }) {
    commit("setFake", null);
    const retval = await setBillingAddressById(id, store2);
    if (retval == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * add billing address to shopping cart
   *
   * @param {object} object address
   * @returns true or false
   */
  async addBillingAddress({ commit }, { address, reloadCart = true, store: store2 }) {
    commit("setFake", null);
    const retval = await setBillingAddress(address, store2);
    if (retval == true && reloadCart == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * add email address to shpping cart
   *
   * @param {object} string email
   * @returns
   */
  async addCartEmail({ commit }, { email, store: store2 }) {
    commit("setFake", null);
    const retval = await setEmailToCart(email, store2);
    if (retval == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * add coupon code to shopping cart
   *
   * @param {object} string code
   * @returns true or false
   */
  async addCouponCode({ commit }, { code, store: store2 }) {
    commit("setFake", null);
    const retval = await addCouponCode(code, store2);
    if (retval == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  },
  /**
   * Remove coupon code from shopping cart
   *
   * @param {object} string code
   * @returns true or false
   */
  async removeCouponCode({ commit }, { store: store2 }) {
    commit("setFake", null);
    const retval = await removeCouponCode(store2);
    if (retval == true) {
      store2.dispatch("cart/loadCart", { store: store2 });
    }
    return retval;
  }
};
const mutations$9 = {
  /**
   * Set shopping cart token
   *
   * @param {object} state
   * @param {string} payload
   * @private
   *
   */
  setServerToken(state2, payload) {
    state2.cartServerToken = payload;
    if (payload != null) {
      localStorage.setItem("cartServerToken", payload);
    } else {
      localStorage.removeItem("cartServerToken");
    }
  },
  /**
   * set if the shopping cart is loaded
   *
   * @param {object} state
   * @param {boolean} payload
   * @private
   *
   */
  setCartIsLoaded(state2, payload) {
    state2.cartIsLoaded = payload;
  },
  setPickupLocations(state2, payload) {
    state2.pickupLocations = payload;
  },
  setComment(state2, payload) {
    state2.comment = payload;
  },
  /**
   * Set the shopping cart items
   *
   * @param {object} state
   * @param {object} payload
   * @private
   *
   */
  setCartItems(state2, payload) {
    state2.cartItems = payload;
    if (state2.cartItems.length > 0) {
      {
        let qty = 0;
        state2.cartItems.forEach((element) => {
          qty = qty + element.quantity;
        });
        state2.cartQuantity = qty;
      }
    } else {
      state2.cartQuantity = 0;
    }
  },
  /**
   * set shipping address
   *
   * @param {object} state
   * @param {object} payload
   * @private
   *
   */
  setShippingAddress(state2, payload) {
    state2.cartShippingAddress = payload;
  },
  /**
   * set billing address
   *
   * @param {object} state
   * @param {object} payload
   * @private
   *
   */
  setBillingAddress(state2, payload) {
    state2.cartBillingAddress = payload;
  },
  /**
   * set shipping methods
   *
   * @param {object} state
   * @param {array} payload
   * @private
   *
   */
  setShippingMethods(state2, payload) {
    state2.cartShippingMethods = payload;
  },
  /**
   * set payment methods
   *
   * @param {object} state
   * @param {array} payload
   * @private
   */
  setPaymentMethods(state2, payload) {
    const obj = {};
    if (payload) {
      payload.forEach((opt) => {
        const option = {};
        if (opt.additional_fields && opt.additional_fields.length > 0) {
          opt.additional_fields.forEach((element) => {
            option[element.code] = null;
          });
          obj[opt.code] = option;
        }
      });
    }
    state2.cartPaymentMethodOptions = obj;
    state2.cartPaymentMethods = payload;
  },
  /**
   * set Shipping method
   *
   * @param {object} state
   * @param {object} payload
   * @private
   *
   */
  setShippingMethod(state2, payload) {
    state2.cartShippingMethod = payload;
  },
  /**
   * set payment method
   *
   * @param {object} state
   * @param {object} payload
   * @private
   *
   */
  setPaymentMethod(state2, payload) {
    state2.cartPaymentMethod = payload;
  },
  /**
   * set billing address id
   *
   * @param {object} state
   * @param {integer} payload
   * @private
   *
   */
  setBillingAddressId(state2, payload) {
    state2.cartBillingAddressId = payload;
  },
  /**
   * set shipping address id
   *
   * @param {object} state
   * @param {integer} payload
   * @private
   *
   */
  setShippingAddressId(state2, payload) {
    state2.cartShippingAddressId = payload;
  },
  /**
   * set email address
   *
   * @param {object} state
   * @param {string} payload
   * @private
   *
   */
  setEmail(state2, payload) {
    state2.cartEmail = payload;
  },
  /**
   * set free shupping amount
   *
   * @param {object} state
   * @param {double} payload
   * @private
   */
  setFreeShippingAmount(state2, payload) {
    state2.freeShippingAmount = payload;
  },
  /**
   * set free shipping info
   *
   * @param {object} state
   * @param {object} payload
   * @private
   *
   */
  setFreeShipping(state2, payload) {
    state2.freeShipping = payload;
  },
  /**
   * a fake set when you don't need any other object in you dispatch
   *
   * @param {object} state
   * @param {any} payload
   * @private
   *
   */
  setFake(state2, payload) {
    state2.Fake = payload;
  },
  /**
   * set cart prices
   *
   * @param {object} state
   * @param {object} payload
   * @private
   */
  setCartPrices(state2, payload) {
    state2.cartPrices = payload;
  },
  /**
   * set default shipping
   *
   * @param {object} state
   * @param {object} payload
   * @private
   */
  setDefaultShipping(state2, payload) {
    state2.defaultShipping = payload;
  },
  /**
   * set shopping cart payment method options
   *
   * @param {object} state
   * @param {array} payload
   * @private
   */
  setCartPaymentMethodOptions(state2, payload) {
    state2.cartPaymentMethodOptions = payload;
  },
  /**
   * update shopping cart payment method options
   *
   * @param {object} state
   * @param {object} payload
   * @private
   */
  updateCartPaymentMethodOptions(state2, payload) {
    state2.cartPaymentMethodOptions[payload.key][payload.sub] = payload.value;
  },
  /**
   * update shopping cart delivery time information
   *
   * @param {object} state
   * @param {object} payload
   * @private
   */
  setCartDeliveryTime(state2, payload) {
    state2.delivery_time = payload;
  },
  /**
   * update shopping cart delivery time information
   *
   * @param {object} state
   * @param {object} payload
   * @private
   */
  setAppliedCouponCodes(state2, payload) {
    state2.applied_coupons = payload;
  },
  /**
   * update shopping cart delivery time information
   *
   * @param {object} state
   * @param {object} payload
   * @private
   */
  setStoreValidation(state2, payload) {
    for (const property in payload) {
      state2.storeValidation[property] = payload[property];
    }
  },
  /**
   * Should an account be created on checkout?
   *
   * @param {object} state
   * @param {bool} payload
   * @private
   */
  setCreateAccount(state2, payload) {
    state2.createAccount = payload;
  },
  /**
   * Store password until account is created
   *
   * @param {object} state
   * @param {string} payload
   * @private
   */
  setAccountPassword(state2, payload) {
    state2.accountPassword = payload;
  },
  /**
   * Used to disable Proceed/ Pay button at checkout page
   *
   * @param {object} state
   * @param {boolean} payload
   */
  setShippingAddressUpdatingStatus(state2, payload) {
    state2.shippingAddressUpdatingStatus = payload;
  }
};
const getters$9 = {
  getCartServerToken: (state2) => state2.cartServerToken,
  getCartItems: (state2) => state2.cartItems,
  getCartIsLoaded: (state2) => state2.cartIsLoaded,
  getShippingAddress: (state2) => state2.cartShippingAddress,
  getBillingAddress: (state2) => state2.cartBillingAddress,
  getShippingMethods: (state2) => state2.cartShippingMethods,
  getBillingAddressId: (state2) => state2.cartBillingAddressId,
  getShippingAddressId: (state2) => state2.cartShippingAddressId,
  getPaymentMethods: (state2) => state2.cartPaymentMethods,
  getPaymentMethodOptions: (state2) => state2.cartPaymentMethodOptions,
  getShippingMethod: (state2) => state2.cartShippingMethod,
  getPaymentMethod: (state2) => state2.cartPaymentMethod,
  getEmail: (state2) => state2.cartEmail,
  getComment: (state2) => state2.comment,
  getFreeShippingAmount: (state2) => {
    let subTotal = 0;
    if (typeof state2.cartPrices.subtotal_including_tax != "undefined") {
      subTotal = state2.cartPrices.subtotal_including_tax.value;
    }
    let freeS = state2.freeShippingAmount - subTotal;
    if (freeS < 0) {
      freeS = 0;
    }
    return freeS;
  },
  getCartPrices: (state2) => state2.cartPrices,
  getDefaultShipping: (state2) => state2.defaultShipping,
  getItemsTotalQuantity: (state2) => state2.cartQuantity,
  getPickupLocations: (state2) => state2.pickupLocations,
  getCartDeliveryTime: (state2) => state2.delivery_time,
  getAppliedCouponCodes: (state2) => state2.applied_coupons,
  getStoreValidation: (state2) => state2.storeValidation,
  getCreateAccount: (state2) => state2.createAccount,
  getAccountPassword: (state2) => state2.accountPassword,
  getShippingAddressUpdatingStatus: (state2) => state2.shippingAddressUpdatingStatus
};
const Cart = {
  namespaced: true,
  state: state$9,
  actions: actions$9,
  mutations: mutations$9,
  getters: getters$9
};
const state$8 = () => ({
  contactForm: null,
  productForm: null,
  categoryForm: null
});
const actions$8 = {
  /**
   * Load the dynamic forms
   *
   */
  loadForms({ dispatch }) {
    dispatch("loadContactForm");
    dispatch("loadProductForm");
    dispatch("loadCategoryForm");
  },
  /**
   * Load contact form
   *
   */
  async loadContactForm({ commit }) {
    const form = await loadForms("contact");
    commit("setContactForm", form);
  },
  /**
   * Load product form
   *
   */
  async loadProductForm({ commit }) {
    const form = await loadForms("product");
    commit("setProductForm", form);
  },
  /**
   * Load category form
   *
   */
  async loadCategoryForm({ commit }) {
    const form = await loadForms("category");
    commit("setCategoryForm", form);
  }
};
const mutations$8 = {
  // always and only change vuex state through mutations.
  /**
   * set contact form
   *
   * @param {object} data
   */
  setContactForm(state2, data) {
    state2.contactForm = data;
  },
  /**
   * set product form
   *
   * @param {object} data
   */
  setProductForm(state2, data) {
    state2.productForm = data;
  },
  /**
   * set category form
   *
   * @param {object} data
   */
  setCategoryForm(state2, data) {
    state2.categoryForm = data;
  }
};
const getters$8 = {
  getContactForm: (state2) => state2.contactForm,
  getProductForm: (state2) => state2.productForm,
  getCategoryForm: (state2) => state2.categoryForm
};
const Forms = {
  namespaced: true,
  state: state$8,
  actions: actions$8,
  mutations: mutations$8,
  getters: getters$8
};
async function loadBlogList(currentPage, pageSize) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = "{ blogPosts(currentPage: " + currentPage + ", pageSize: " + pageSize + ', sort: ["DESC"]) { total_count total_pages items { identifier categories { title category_url_path } post_id title short_filtered_content featured_image featured_img_alt first_image creation_time author { identifier author_id name author_url } } } }';
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadContentBlocks", "data-resolver cms", e)();
    throw e;
  });
  return retval.data.data.blogPosts;
}
async function loadBlog(identifier) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = "{ blogPost (id: " + JSON.stringify(identifier) + " ){ identifier categories { title category_url_path } post_id title short_filtered_content content filtered_content featured_image featured_img_alt first_image creation_time author { identifier author_id name author_url } post_url creation_time post_url meta_title meta_keywords meta_description} }";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadContentBlocks", "data-resolver cms", e)();
    throw e;
  });
  return retval.data.data.blogPost;
}
async function loadSearchBlogs(search) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = '{ blogPosts(filter: {search: {eq: "' + search + '"}}) { total_count total_pages items { identifier post_id title short_filtered_content featured_image featured_img_alt first_image creation_time author { identifier author_id name author_url } } } }';
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadContentBlocks", "data-resolver cms", e)();
    throw e;
  });
  return retval.data.data.blogPosts;
}
const state$7 = () => ({
  current: null,
  // shown product
  list: [],
  currentPageNr: 1,
  currentPage: [],
  totalPages: 1,
  totalBlogs: 0,
  blogsPerPage: 9
});
const actions$7 = {
  /**
   *
   * load blogs
   */
  async load({ commit, getters: getters2 }) {
    const currentPage = 1;
    const page = await loadBlogList(
      currentPage,
      getters2["getBlogsPerPage"]
    ).catch((e) => {
      logger.error("load", "blog store actions", e)();
      throw e;
    });
    if (page != null) {
      if (page.items != null) {
        commit("setTotalPages", page.total_pages);
        commit("setTotalBlogs", page.total_count);
        const obj = { page: currentPage, items: page.items };
        commit("setListPage", obj);
        commit("setCurrentPage", page.items);
      }
    }
  },
  /**
   * go to page on blog overview
   * @param {json} pageNr
   */
  async goToPage({ commit, getters: getters2 }, { pageNr }) {
    if (pageNr > 0) {
      if (getters2["getTotalPages"] >= pageNr) {
        const found = getters2["getList"].find((v) => {
          if (v.page == pageNr) {
            return true;
          }
        });
        if (found != null) {
          commit("setCurrentPage", found.items);
        } else {
          const page = await loadBlogList(pageNr, getters2["getBlogsPerPage"]).catch((e) => {
            logger.error("load", "blog store actions", e)();
            throw e;
          });
          if (page != null) {
            if (page.items != null) {
              const obj = { page: pageNr, items: page.items };
              commit("setListPage", obj);
              commit("setCurrentPage", page.items);
              commit("setCurrentPageNr", pageNr);
            }
          }
        }
      }
    }
  },
  /**
   * load Blog by Identifier
   * @param {json} identifier
   */
  async loadBlog({ commit }, { identifier }) {
    const page = await loadBlog(identifier).catch((e) => {
      logger.error("load", "blog store actions", e)();
      throw e;
    });
    if (page != null) {
      commit("setCurrent", page);
    }
  },
  async searchBlogs({ commit }, { search }) {
    const currentPage = 1;
    const page = await loadSearchBlogs(search).catch((e) => {
      logger.error("load", "blog store actions", e)();
      throw e;
    });
    if (page != null) {
      commit("setTotalPages", page.total_pages);
      commit("setTotalBlogs", page.total_count);
      const obj = { page: currentPage, items: page.items };
      commit("setListPage", obj);
      commit("setCurrentPage", page.items);
    }
  }
};
const mutations$7 = {
  /**
   * set list page
   * @param {object} state
   * @param {object} payload
   */
  setListPage(state2, payload) {
    state2.list.push(payload);
  },
  /**
   * set total pages
   * @param {object} state
   * @param {integer} payload
   */
  setTotalPages(state2, payload) {
    state2.totalPages = payload;
  },
  /**
   * set blogs per page
   * @param {object} state
   * @param {integer} payload
   */
  setBlogsPerPage(state2, payload) {
    state2.blogsPerPage = payload;
  },
  /**
   * set set total blogs
   * @param {object} state
   * @param {integer} payload
   */
  setTotalBlogs(state2, payload) {
    state2.totalBlogs = payload;
  },
  /**
   * set current page
   * @param {object} state
   * @param {array} payload
   */
  setCurrentPage(state2, payload) {
    state2.currentPage = payload;
  },
  /**
   *
   * @param {object} state
   * @param {integer} payload
   */
  setCurrentPageNr(state2, payload) {
    if (payload <= state2.totalPages) {
      if (payload >= 1) {
        state2.currentPageNr = payload;
      }
    }
  },
  /**
   *
   * @param {object} state
   * @param {object} payload
   */
  setCurrent(state2, payload) {
    state2.current = payload;
  }
};
const getters$7 = {
  getBlogsPerPage: (state2) => state2.blogsPerPage,
  getTotalPages: (state2) => state2.totalPages,
  getTotalBlogs: (state2) => state2.totalBlogs,
  getList: (state2) => state2.list,
  getCurrentPage: (state2) => state2.currentPage,
  getBreadcrumbsCurrent: (state2) => state2.current,
  getCurrentPageNr: (state2) => state2.currentPageNr,
  getBlog: (state2) => state2.current
};
const Blog = {
  namespaced: true,
  state: state$7,
  actions: actions$7,
  mutations: mutations$7,
  getters: getters$7
};
async function getMeta(urlKey) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  const query = "{landingPage(identifier:" + urlKey + "){content content_heading meta_description meta_keywords meta_title  product_filters relative_url secondary_content title}}";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadContentPageByIdentifier", "data-resolver cms", e)();
    throw e;
  });
  if (retval) {
    return retval;
  } else {
    return false;
  }
}
async function getProducts(productFilterData) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON$1.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
    Store: storeview
  };
  let cleanedData = productFilterData.replace(/"/g, "");
  const query = "{ products(pageSize: 15 currentPage: 1 filter: " + cleanedData + "  ) { total_count page_info { page_size current_page total_pages } aggregations { min_value max_value attribute_code count label options { count label value swatch_data { type value} } }  items { sku unit is_flooring_product stock_qty stock_display_limit titel60 DeliveryTime { color icon long short } labels { id category { type position size text css image_url } product { type position size text css image_url } } cashback_promotion { amount {currency value} description start_date end_date } stock_qty sales_data { last_order_date orders qty_ordered } filter_attributes{ attribute_code attribute_id label values { option_id option_label } }  ... on BundleProduct { items { option_id title position } } thumbnail { thumbnail small medium large x_large } url_key name __typename canonical_url rating_summary review_count meta_title meta_keyword meta_description new_from_date new_to_date created_at stock_status information_attributes { attribute_code attribute_id label value } manufacturer_price { price { currency value } discount { amount_off percent_off } } price_range { minimum_price { discount { amount_off percent_off } regular_price { value } final_price { value } } maximum_price { discount { amount_off percent_off } regular_price { value } final_price { value } } } special_from_date special_to_date special_price ... on ConfigurableProduct { configurable_options { label position use_default attribute_code values { value_index label } } } } } }";
  const retval = await axios({
    url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("loadContentPageByIdentifier", "data-resolver cms", e)();
    throw e;
  });
  if (retval) {
    return retval;
  } else {
    return false;
  }
}
const state$6 = () => ({
  landingPageData: null,
  totalPages: 1,
  totalProducts: 0,
  productFilter: null
});
const actions$6 = {
  /**
   * get Landing Page Resolve / Meta
   *
   */
  async getMeta({ commit }, { meta }) {
    const urlKey = meta.relative_url;
    const retval = await getMeta(urlKey);
    const productFilter = retval.data.data.landingPage.product_filters;
    const landingPageData = retval.data.data.landingPage;
    commit("setProductFilter", productFilter);
    commit("setLandingPageData", landingPageData);
    if (retval) {
      return retval;
    }
  },
  /**
   * load Landing Page products data
   *
   */
  async getProducts({ commit, getters: getters2 }) {
    const productFilterData = getters2["getProductFilters"];
    const retval = await getProducts(productFilterData);
    const totalPages = retval.data.data.products.page_info.total_pages;
    const totalProducts = retval.data.data.products.total_count;
    commit("setTotalPages", totalPages);
    commit("setTotalProducts", totalProducts);
    if (retval) {
      return retval;
    }
  }
};
const mutations$6 = {
  // always and only change vuex state through mutations.
  /**
   * set productFilter
   *
   * @param {object} state
   * @param {object} data
   * @private
   */
  setProductFilter(state2, payload) {
    state2.productFilter = payload;
  },
  /**
   * set landingPageData
   *
   * @param {object} state
   * @param {object} data
   * @private
   */
  setLandingPageData(state2, payload) {
    state2.landingPageData = payload;
  },
  /**
   * set totalPages
   *
   * @param {object} state
   * @param {integer} data
   * @private
   */
  setTotalPages(state2, data) {
    state2.totalPages = data;
  },
  /**
   * set totalProducts
   *
   * @param {object} state
   * @param {integer} data
   * @private
   */
  setTotalProducts(state2, data) {
    state2.totalProducts = data;
  }
};
const getters$6 = {
  getLandingPageData: (state2) => state2.landingPageData,
  getTotalPages: (state2) => state2.totalPages,
  getTotalProducts: (state2) => state2.totalProducts,
  getProductFilters: (state2) => state2.productFilter
};
const LandingPage = {
  namespaced: true,
  state: state$6,
  actions: actions$6,
  mutations: mutations$6,
  getters: getters$6
};
const state$5 = () => ({
  isLoading: false
});
const actions$5 = {
  setLoading({ commit }, loading) {
    commit("setLoading", loading);
  }
};
const mutations$5 = {
  setLoading(state2, loading) {
    state2.isLoading = loading;
  }
};
const getters$5 = {
  isLoading: (state2) => state2.isLoading
};
const Loader = {
  state: state$5,
  actions: actions$5,
  mutations: mutations$5,
  getters: getters$5
};
const plugin = {
  install(app) {
    app.config.globalProperties.helpers = helpers;
    app.config.globalProperties.$helpers = helpers;
  }
};
function registers$1(app, store2) {
  app.use(plugin);
  store2.registerModule("breadcrumbs", BreadCrumbs);
  store2.registerModule("category", Category);
  store2.registerModule("messages", Messages);
  store2.registerModule("cmsBlock", cmsBlocks);
  store2.registerModule("sliders", sliders);
  store2.registerModule("stores", stores);
  store2.registerModule("user", User);
  store2.registerModule("cart", Cart);
  store2.registerModule("search", Search);
  store2.registerModule("forms", Forms);
  store2.registerModule("faq", FAQ);
  store2.registerModule("blog", Blog);
  store2.registerModule("landingPage", LandingPage);
  store2.registerModule("loader", Loader);
  store2.registerModule("cmsPage", cmsPage);
}
const coreRegisters = [registers$1];
const state$4 = () => ({
  menuItems: [],
  menuState: [],
  navBar: false
});
const actions$4 = {
  toggleNavbar({ state: state2, commit }) {
    if (state2.navBar == true) {
      commit("setNavBar", false);
      state2.menuState.forEach((s) => s.state = false);
    } else {
      commit("setNavBar", true);
    }
  },
  async loadMenu({ commit }) {
    const lang = getCurrentLanguage();
    const storelang = CONFIG_JSON$1.languages[lang];
    const root_category = storelang["root_category"];
    const category2 = await loadCategoryMenu(root_category).catch((e) => {
      logger.error("loadMenu", "menu.ts", e)();
      throw e;
    });
    const menu2 = [];
    category2.children.forEach((child) => {
      if (child.include_in_menu == 1) {
        const item = {
          id: child.id,
          itemName: child.name,
          linkTo: "/" + child.url_path,
          hasDropMenu: false,
          dropMenu: []
        };
        child.linkTo = "/" + child.url_path;
        child.children.sort((a, b) => {
          if (a.position < b.position) {
            return -1;
          }
          if (a.position > b.position) {
            return 1;
          }
          return 0;
        });
        let iCount = 1;
        let subItems = [];
        child.children.forEach((sChild) => {
          if (sChild.include_in_menu == 1) {
            const sItem = {
              id: sChild.id,
              name: sChild.name,
              linkTo: "/" + sChild.url_path
            };
            subItems.push(sItem);
          }
        });
        if (subItems.length > 0 && iCount < 11) {
          item.dropMenu.push(subItems);
        }
        if (item.dropMenu.length > 0) {
          item.hasDropMenu = true;
          item.dropMenuState = "collapsed";
        }
        menu2.push(item);
        commit("setMenuState", { id: item.id, state: false });
      }
    });
    commit("setMenuItems", menu2);
  }
};
const mutations$4 = {
  setMenuItems(state2, payload) {
    state2.menuItems = payload;
  },
  setMenuState(state2, payload) {
    state2.menuState.push(payload);
  },
  setNavBar(state2, payload) {
    state2.navBar = payload;
  },
  updateMenuState(state2, payload) {
    state2.menuState.find((v) => {
      if (v.id == payload.id) {
        v.state = payload.state;
        return true;
      }
    });
  }
};
const getters$4 = {
  getMenuItems: (state2) => state2.menuItems,
  getMenuItemState: (state2) => (id) => state2.menuState.find((v) => {
    if (v.id == id) {
      return true;
    }
  }),
  getNavbar: (state2) => {
    return state2.navBar;
  }
};
const menu = {
  namespaced: true,
  state: state$4,
  actions: actions$4,
  mutations: mutations$4,
  getters: getters$4
};
const state$3 = () => ({
  Bundles: [],
  mostPurchased: [],
  retargeted: [],
  aw_source: null
});
const actions$3 = {
  async loadBundles({ commit }, { store: store2 }) {
    const products = await getProductByCategoryId(CONFIG_JSON$1.bundleList, 1, store2).catch((e) => {
      logger.error("loadBundles", "menu.ts", e)();
      throw e;
    });
    commit("setBundleProducts", products.items);
  },
  async loadMostPurchasedProducts({ commit }, { hello_retail_id }) {
    const graphqlResolved = await CONFIG_JSON;
    const lang = getCurrentLanguage();
    const storelang = CONFIG_JSON$1.languages[lang];
    const storeview = storelang["storeview"];
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
      Store: storeview
    };
    let query = '{ mostPurchased(pageType: "home",pageSize: 10, currentPage: 1) {';
    query = query + graphqlResolved.queryFields.productOverview.replace(
      "__typename",
      '__typename aw_source(pageType: "home" trackingUserId:"' + hello_retail_id + '" requestType: "mostPurchased")'
    ) + "} }";
    const retval = await axios({
      url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
      method: "GET",
      headers
    }).catch((e) => {
      logger.error("loadMostPurchasedProducts", "home", e)();
      throw e;
    });
    if (retval && retval.data && retval.data.data && retval.data.data.mostPurchased) {
      const products = retval.data.data.mostPurchased;
      if (products.items && products.items.length > 0) {
        products.items.forEach((item) => {
          const aw_source = item.aw_source;
          const sku = item.sku;
          commit("setAwSource", { sku, aw_source });
        });
      }
      commit("setMostPurchasedProducts", products.items);
    } else {
      commit("setMostPurchasedProducts", []);
    }
  },
  async loadRetargetedProducts({ commit }, { hello_retail_id, page }) {
    const graphqlResolved = await CONFIG_JSON;
    const lang = getCurrentLanguage();
    const storelang = CONFIG_JSON$1.languages[lang];
    const storeview = storelang["storeview"];
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
      Store: storeview
    };
    let query = '{ retargeted(pageType: "' + page + '",pageSize: 10, currentPage: 1,trackingUserId:"' + hello_retail_id + '") {';
    query = query + graphqlResolved.queryFields.productOverview.replace(
      "__typename",
      '__typename aw_source(pageType: "' + page + '" trackingUserId:"' + hello_retail_id + '" requestType: "retargeted")'
    ) + "} }";
    const retval = await axios({
      url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
      method: "GET",
      headers
    }).catch((e) => {
      logger.error("loadRetargetedProducts", "home", e)();
      throw e;
    });
    if (retval && retval.data && retval.data.data && retval.data.data.retargeted) {
      const products = retval.data.data.retargeted;
      if (products.items && products.items.length > 0) {
        products.items.forEach((item) => {
          const aw_source = item.aw_source;
          const sku = item.sku;
          commit("setAwSource", { sku, aw_source });
        });
      }
      commit("setRetargetedProducts", products.items);
    } else {
      commit("setRetargetedProducts", []);
    }
  }
};
const mutations$3 = {
  setBundleProducts(state2, payload) {
    state2.Bundles = payload;
  },
  setMostPurchasedProducts(state2, payload) {
    state2.mostPurchased = payload;
  },
  setRetargetedProducts(state2, payload) {
    state2.retargeted = payload;
  },
  setAwSource(state2, payload) {
    let awSource = JSON.parse(localStorage.getItem("aw_source")) ?? [];
    awSource.push(payload);
    localStorage.setItem("aw_source", JSON.stringify(awSource));
  }
};
const getters$3 = {
  getBundleProducts: (state2) => state2.Bundles,
  getRandomBundles: (state2) => (nr) => {
    const bundles = JSON.parse(JSON.stringify(state2.Bundles));
    const shuffled = bundles.sort(() => 0.5 - Math.random());
    if (nr > bundles.length) {
      nr = bundles.length;
    }
    return shuffled.slice(0, nr);
  },
  getMostPurchasedProducts: (state2) => state2.mostPurchased,
  getRetargetedProducts: (state2) => state2.retargeted,
  getAwSource: (state2) => state2.aw_source
};
const home = {
  namespaced: true,
  state: state$3,
  actions: actions$3,
  mutations: mutations$3,
  getters: getters$3
};
const state$2 = () => ({
  current: null,
  menuCategories: [],
  productFilters: [],
  activeFilter: [],
  priceFilter: [0, 0],
  filteredCount: 0,
  products: [],
  ShowProducts: [],
  sorting: "default",
  cartCrossSell: [],
  aw_source: null
});
const actions$2 = {
  async loadProducts({ commit }, { filter, totalPages, store: store2 }) {
    for (let page = 2; page < totalPages + 1; page++) {
      const retv = await getProductByFilter(filter, page);
      commit("addProducts", { data: retv.items, store: store2 });
    }
  },
  async loadFilters({ commit }, { filter = "", store: store2 }) {
    const filters = await getProductFiltersByFilter(filter).catch((e) => {
      throw e;
    });
    const uFilters = [];
    filters.aggregations.forEach((element) => {
      if (element.attribute_code != "category_id") {
        if (element.attribute_code == "price") {
          element.min = parseInt(element.min_value);
          element.max = Math.ceil(element.max_value);
          commit("setPriceFilter", { data: [element.min, element.max], store: store2 });
        }
        uFilters.push(element);
      }
    });
    commit("setProductFilters", uFilters);
  },
  async load({ commit, dispatch }, { filter = null, store: store2 }) {
    if (filter == null) {
      commit("setProductFilters", {});
      commit("resetActiveFilter", store2);
      commit("setPriceFilter", { data: [0, 0], store: store2 });
      return false;
    } else {
      commit("setProducts", []);
      dispatch("loadFilters", { filter, store: store2 });
      const retval = await getProductByFilter(filter, 1);
      commit("addProducts", { data: retval.items, store: store2 });
      const totalPages = retval.page_info.total_pages;
      if (!isServer) {
        dispatch("loadProducts", { filter, totalPages, store: store2 });
      }
    }
    return true;
  },
  async loadPartfinder({ commit, dispatch }, { store: store2 }) {
    commit("setProducts", []);
    dispatch("loadFiltersPathfinder", { store: store2 });
    const retval = await getProductByPartfinder(1);
    commit("addProducts", { data: retval.items, store: store2 });
    const totalPages = retval.page_info.total_pages;
    if (!isServer) {
      dispatch("loadProductsPathfinder", {
        totalPages,
        store: store2
      });
    }
    return true;
  },
  async loadProductsPathfinder({ commit }, { totalPages, store: store2 }) {
    for (let page = 2; page < totalPages + 1; page++) {
      const retv = await getProductByPartfinder(page);
      commit("addProducts", { data: retv.items, store: store2 });
    }
  },
  async loadFiltersPathfinder({ commit }, { store: store2 }) {
    const filters = await getProductFiltersByPartfinder().catch((e) => {
      throw e;
    });
    const uFilters = [];
    filters.aggregations.forEach((element) => {
      if (element.attribute_code != "category_id") {
        if (element.attribute_code == "price") {
          element.min = parseInt(element.min_value);
          element.max = Math.ceil(element.max_value);
          commit("setPriceFilter", { data: [element.min, element.max], store: store2 });
        }
        uFilters.push(element);
      }
    });
    commit("setProductFilters", uFilters);
  },
  async loadPartfinderFilters({ commit }, { store: store2 }) {
    const filters = await getProductFiltersByPartfinder().catch((e) => {
      throw e;
    });
    const uFilters = [];
    filters.aggregations.forEach((element) => {
      if (element.attribute_code != "category_id") {
        if (element.attribute_code == "price") {
          element.min = parseInt(element.min_value);
          element.max = Math.ceil(element.max_value);
          commit("setPriceFilter", { data: [element.min, element.max], store: store2 });
        }
        uFilters.push(element);
      }
    });
    commit("setProductFilters", uFilters);
  },
  loadCrossSellProducts({ commit, dispatch }, { skus }) {
    const products = [];
    skus == null ? void 0 : skus.forEach((sku) => {
      dispatch("loadCrossSellProduct", { sku }).then((productData) => {
        productData.forEach((product2) => {
          products.push(product2);
        });
      });
    });
    commit("setCrossSellProducts", products);
  },
  async loadCrossSellForCart({ commit }, { skus }) {
    const products = await getCartCrossSell(skus).catch((e) => {
      logger.error("loadCrossSellForCart", "product store actions load", e)();
      throw e;
    });
    if (products) {
      commit("setCrossSellProducts", products);
    }
  },
  async loadCrossSellProduct({ commit }, { sku, hello_retail_id }) {
    const graphqlResolved = await CONFIG_JSON;
    const lang = getCurrentLanguage();
    const storelang = CONFIG_JSON$1.languages[lang];
    const storeview = storelang["storeview"];
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
      Store: storeview
    };
    let query = "";
    query = '{ purchasedTogether(sku:"' + sku + '",pageType: "product",pageSize: 10, currentPage: 1) {';
    query = query + graphqlResolved.queryFields.productOverview.replace(
      "__typename",
      '__typename aw_source(pageType: "product" trackingUserId:"' + hello_retail_id + '" requestType: "purchasedTogether" sku:"' + sku + '")'
    ) + "} }";
    const products = await axios({
      url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
      method: "GET",
      headers
    }).catch((e) => {
      logger.error("loadCrossSellProducts", "sale", e)();
      throw e;
    }).then((response) => {
      const products2 = response.data.data.purchasedTogether;
      if (products2 && products2.items && products2.items.length > 0) {
        products2.items.forEach((item) => {
          const aw_source = item.aw_source;
          const sku2 = item.sku;
          commit("setAwSource", { sku: sku2, aw_source });
        });
        return products2.items;
      }
      return [];
    });
    return products;
  }
};
const mutations$2 = {
  // always and only change vuex state through mutations.
  setCurrentCategory(state2, data) {
    state2.current = data;
    const breadcrumbs = data.breadcrumbs;
    let currentName = "undefined";
    if (typeof data.name == "string") {
      currentName = data.name;
    }
    const bcrumb = { current: currentName, routes: [] };
    if (breadcrumbs != null) {
      breadcrumbs.sort((a, b) => {
        if (a.category_level < b.category_level) {
          return -1;
        }
        if (a.category_level > b.category_level) {
          return 1;
        }
        return 0;
      });
      let path = "";
      breadcrumbs.forEach((element) => {
        if (path.length > 0) {
          path = path + "/";
        }
        path = path + element.category_url_key;
        let name = "undefined";
        if (typeof element.category_name == "string") {
          name = element.category_name;
        }
        const bc = {
          name,
          route_link: path
        };
        bcrumb.routes.push(bc);
      });
    }
    store$1.commit("breadcrumbs/set", bcrumb);
  },
  setProductFilters(state2, data) {
    state2.productFilters = data;
  },
  setActiveFilter(state2, data) {
    state2.activeFilter.push(data);
    store$1.commit("sale/doFilterProducts");
  },
  resetActiveFilter(state2, store2) {
    state2.activeFilter = [];
    store2.commit("sale/doFilterProducts");
  },
  setProducts(state2, data) {
    state2.products = data;
    state2.ShowProducts = data;
  },
  addProducts(state2, payload) {
    const { data, store: store2 } = payload;
    data.forEach((element) => {
      const retval = state2.products.find((o) => {
        if (o.sku == element.sku) {
          return true;
        }
      });
      if (retval == null) {
        state2.products.push(element);
      }
    });
    store2.commit("sale/doFilterProducts");
  },
  setPriceFilter(state2, payload) {
    const { data, store: store2 } = payload;
    state2.priceFilter = data;
    store2.commit("sale/doFilterProducts");
  },
  setSorting(state2, data) {
    state2.sorting = data;
    store$1.commit("sale/doSorting");
  },
  addActiveFilter(state2, payload) {
    const { data, store: store2 } = payload;
    const obj = state2.activeFilter.find((o) => {
      if (o.value == data.value) {
        return true;
      }
    });
    if (obj == null) {
      state2.activeFilter.push(data);
    }
    store2.commit("sale/doFilterProducts");
  },
  removeActiveFilter(state2, payload) {
    const { data, store: store2 } = payload;
    if (state2.activeFilter.length > 0) {
      state2.activeFilter.find((o, i) => {
        if (o.value == data.value) {
          state2.activeFilter.splice(i, 1);
          return true;
        }
      });
      store2.commit("sale/doFilterProducts");
    }
  },
  doSorting(state2) {
    if (state2.sorting == "default") {
      store$1.commit("sale/doFilterProducts");
    } else {
      state2.ShowProducts.sort((a, b) => {
        if (state2.sorting == "name_up") {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
        } else if (state2.sorting == "name_down") {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
        } else if (state2.sorting == "price_up") {
          if (a.price_range.minimum_price.final_price.value < b.price_range.minimum_price.final_price.value) {
            return -1;
          }
          if (a.price_range.minimum_price.final_price.value > b.price_range.minimum_price.final_price.value) {
            return 1;
          }
        } else if (state2.sorting == "price_down") {
          if (a.price_range.minimum_price.final_price.value > b.price_range.minimum_price.final_price.value) {
            return -1;
          }
          if (a.price_range.minimum_price.final_price.value < b.price_range.minimum_price.final_price.value) {
            return 1;
          }
        } else if (state2.sorting == "newest") {
          if (a.created_at < b.created_at) {
            return -1;
          }
          if (a.created_at > b.created_at) {
            return 1;
          }
        } else if (state2.sorting == "bestsold") {
          if (a.sales_data.orders < b.sales_data.orders) {
            return -1;
          }
          if (a.sales_data.orders > b.sales_data.orders) {
            return 1;
          }
        }
        return 0;
      });
    }
  },
  doFilterProducts(state2) {
    const filters = [];
    state2.activeFilter.forEach((el) => {
      if (filters.length > 0) {
        const obj = filters.find((o, i) => {
          if (o.attribute_code == el.attribute_code) {
            filters[i].values.push(el.label);
            return true;
          }
        });
        if (obj == null) {
          const values = [el.label];
          const filter = { attribute_code: el.attribute_code, values };
          filters.push(filter);
        }
      } else {
        const values = [el.label];
        const filter = { attribute_code: el.attribute_code, values };
        filters.push(filter);
      }
    });
    if (state2.products.length > 0) {
      const products = state2.products.filter(function(item) {
        if (item.price_range.minimum_price.final_price.value >= state2.priceFilter[0] && item.price_range.minimum_price.final_price.value <= state2.priceFilter[1]) {
          let doShow = true;
          if (filters.length > 0) {
            doShow = false;
            const isFound = [];
            filters.forEach((element, index2) => {
              isFound[index2] = false;
              element.values.forEach((el) => {
                const retval = item.filter_attributes.find((o) => {
                  if (o.attribute_code == element.attribute_code) {
                    const found = o.values.find((v) => {
                      if (v.option_label == el) {
                        return true;
                      }
                    });
                    if (found != null) {
                      return true;
                    }
                  } else {
                    return false;
                  }
                });
                if (retval != null) {
                  isFound[index2] = true;
                  return true;
                }
              });
            });
            if (isFound.find((o) => {
              return o == false;
            }) == null) {
              doShow = true;
            }
          }
          return doShow;
        } else {
          return false;
        }
      });
      state2.ShowProducts = products;
    }
  },
  setCrossSellProducts(state2, data) {
    state2.cartCrossSell = data;
  },
  setAwSource(state2, payload) {
    let awSource = JSON.parse(localStorage.getItem("aw_source")) ?? [];
    awSource.push(payload);
    localStorage.setItem("aw_source", JSON.stringify(awSource));
  }
};
const getters$2 = {
  getCurrentCategory: (state2) => state2.current,
  getProductFilters: (state2) => state2.productFilters,
  getActiveFilter: (state2) => state2.activeFilter,
  getShowProducts: (state2) => state2.ShowProducts,
  getPriceFilter: (state2) => state2.priceFilter,
  getSorting: (state2) => state2.sorting,
  getCrossSellProducts: (state2) => state2.cartCrossSell,
  getAwSource: (state2) => state2.aw_source
};
const sale = {
  namespaced: true,
  state: state$2,
  actions: actions$2,
  mutations: mutations$2,
  getters: getters$2
};
const state$1 = () => ({
  ...coreProduct.state(),
  currentConfig: null,
  currentCustomMeasures: [],
  currentProdBundle: [],
  currentProdBundleOptions: {},
  currentProdSelectedBundles: {},
  currentProdSelectedBundleChildSku: {},
  crossSellProducts: [],
  upSellProducts: [],
  aw_source: null
});
const actions$1 = {
  ...coreProduct.actions,
  async loadConfigProduct({ commit }, { sku, type }) {
    const products = await getProductDetails(sku, type).catch((e) => {
      logger.error("getProductDetails", "product store actions load", e)();
      throw e;
    });
    const product2 = products.items[0];
    commit("setCurrentConfig", product2);
    const prodOptions = [];
    if ((product2 == null ? void 0 : product2.configurable_options.length) == 1) {
      const values = [];
      product2.variants.forEach((element) => {
        const value = {
          label: element.attributes[0].label,
          value_index: element.product.sku,
          price: element.product.price_range.minimum_price.final_price.value.toFixed(2)
        };
        values.push(value);
      });
      const prodOption = {
        index: 0,
        attribute_code: product2.configurable_options[0].attribute_code,
        label: product2.configurable_options[0].label,
        id: product2.configurable_options[0].id,
        choice: null,
        values
      };
      prodOptions.push(prodOption);
      if (product2.configurable_options[0].attribute_code == "fkv_maten") {
        const cvalues = [];
        if (product2.size_chart != null) {
          if (product2.size_chart.sizes && product2.size_chart.sizes.length != null) {
            product2.variants.forEach((element) => {
              const found = product2.size_chart.sizes.find((v) => {
                if (v.from.option_id == element.attributes[0].value_index) {
                  return true;
                }
              });
              if (found != null) {
                const cvalue = {
                  label: found.to.label,
                  value_index: element.product.sku
                };
                cvalues.push(cvalue);
              }
            });
          }
        }
        commit("setCurrentCustomMeasures", cvalues);
      }
    } else {
      product2.configurable_options.forEach((option, index2) => {
        if (index2 == 0) {
          const prodOption = {
            index: index2,
            attribute_code: option.attribute_code,
            label: option.label,
            id: option.id,
            choice: null,
            values: option.values
          };
          prodOptions.push(prodOption);
          if (option.attribute_code == "fkv_maten") {
            const cvalues = [];
            if (product2.size_chart.sizes.length != null) {
              option.values.forEach((element) => {
                const found = product2.size_chart.sizes.find((v) => {
                  if (v.from.option_id == element.value_index) {
                    return true;
                  }
                });
                if (found != null) {
                  const cvalue = {
                    label: found.to.label,
                    value_index: element.value_index
                  };
                  cvalues.push(cvalue);
                }
              });
              commit("setCurrentCustomMeasures", cvalues);
            }
          }
        } else {
          const prodOption = {
            index: index2,
            attribute_code: option.attribute_code,
            label: option.label,
            choice: null,
            id: option.id,
            values: []
          };
          prodOptions.push(prodOption);
        }
      });
    }
    let sortArray = [];
    product2.configurable_options[0].values.forEach((v) => {
      sortArray.push(v.label);
    });
    prodOptions.forEach((prodOption) => {
      if (prodOption.attribute_code == "fkv_maten") {
        prodOption.values.sort((a, b) => sortArray.indexOf(a.label) - sortArray.indexOf(b.label));
      }
    });
    commit("setCurrentOptions", prodOptions);
    commit("setCurrentChildSku", null);
  },
  /**
   * Load the bundle product
   * @param {object} string sku, string type
   *
   */
  async loadBundleProduct({ commit }, { sku, type }) {
    const products = await getProductDetails(sku, type).catch((e) => {
      logger.error("getProductDetails", "product store actions load", e)();
      throw e;
    });
    const selectedBundles = {};
    const selectedBundleChildSku = {};
    const bundleOptions = products.items[0].items;
    commit("setCurrentProdBundle", bundleOptions);
    const bundleProdOptions = {};
    bundleOptions.forEach((bundles) => {
      var _a;
      const bundleID = bundles.uid;
      if (bundles.options.length == 1) {
        selectedBundles[bundleID] = (_a = bundles.options[0].product) == null ? void 0 : _a.sku;
        selectedBundleChildSku[bundleID] = null;
      }
      bundles.options.forEach((option) => {
        const prodOptions = [];
        if (option.product) {
          if (option.product.configurable_options.length == 1) {
            const values = [];
            option.product.variants.forEach((element) => {
              const value = {
                label: element.attributes[0].label,
                value_index: element.product.sku,
                price: element.product.price_range.minimum_price.final_price.value.toFixed(2)
              };
              values.push(value);
            });
            const prodOption = {
              index: 0,
              attribute_code: option.product.configurable_options[0].attribute_code,
              label: option.product.configurable_options[0].label,
              id: option.product.configurable_options[0].id,
              choice: null,
              values
            };
            prodOptions.push(prodOption);
          } else {
            option.product.configurable_options.forEach((option2, index2) => {
              if (index2 == 0) {
                const prodOption = {
                  index: index2,
                  attribute_code: option2.attribute_code,
                  label: option2.label,
                  id: option2.id,
                  choice: null,
                  values: option2.values
                };
                prodOptions.push(prodOption);
              } else {
                const prodOption = {
                  index: index2,
                  attribute_code: option2.attribute_code,
                  label: option2.label,
                  choice: null,
                  id: option2.id,
                  values: []
                };
                prodOptions.push(prodOption);
              }
            });
          }
          let sortArray = [];
          option.product.configurable_options[0].values.forEach((v) => {
            sortArray.push(v.label);
          });
          prodOptions.forEach((prodOption) => {
            if (prodOption.attribute_code == "fkv_maten") {
              prodOption.values.sort(
                (a, b) => sortArray.indexOf(a.label) - sortArray.indexOf(b.label)
              );
            }
          });
          bundleProdOptions[bundleID] = prodOptions;
        }
      });
    });
    commit("setCurrentProdBundleOptions", bundleProdOptions);
    commit("setCurrentProdSelectedBundles", selectedBundles);
    commit("setCurrentProdSelectedBundleChildSku", selectedBundleChildSku);
  },
  async addNotifyEmail(_, { email, sku }) {
    const lang = getCurrentLanguage();
    const storelang = CONFIG_JSON$1.languages[lang];
    const storeview = storelang["storeview"];
    let headers = {};
    if (store$1.getters["user/getIsLoggedIn"] != false) {
      headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + store$1.getters["user/getUserToken"],
        Store: storeview
      };
    } else {
      headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + CONFIG_JSON$1.shop.consumerKey,
        Store: storeview
      };
    }
    let query = 'mutation { productAlertSubscription( input: { email: "' + email + '" ';
    query = query + 'sku:"' + sku + '"';
    query = query + "type:stock}";
    query = query + " ) { email sku type } }";
    const retval = await axios({
      url: CONFIG_JSON$1.shop.graphQLURL,
      method: "POST",
      headers,
      data: { query }
    }).catch((e) => {
      logger.error("addNotifyEmail", "product store", e)();
      throw e;
    });
    if (retval.data.data.productAlertSubscription != null) {
      return true;
    } else {
      if (retval.data.errors != null) {
        retval.data.errors.forEach((element) => {
          const msg = {
            type: "danger",
            title: i18n.t("Add to cart"),
            text: element.message
          };
          store$1.dispatch("messages/sendMessage", { message: msg });
        });
      }
      return false;
    }
  },
  async loadCrossSellProducts({ commit }, { sku, hello_retail_id }) {
    const graphqlResolved = await CONFIG_JSON;
    const lang = getCurrentLanguage();
    const storelang = CONFIG_JSON$1.languages[lang];
    const storeview = storelang["storeview"];
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
      Store: storeview
    };
    let query = '{ purchasedTogether(sku:"' + sku + '",pageType: "product",pageSize: 10, currentPage: 1) {';
    query = query + graphqlResolved.queryFields.productOverview.replace(
      "__typename",
      '__typename aw_source(pageType: "product" trackingUserId:"' + hello_retail_id + '" requestType: "purchasedTogether" sku:"' + sku + '")'
    ) + "} }";
    const retval = await axios({
      url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
      method: "GET",
      headers
    }).catch((e) => {
      logger.error("loadCrossSellProducts", "home", e)();
      throw e;
    });
    if (retval && retval.data && retval.data.data && retval.data.data.purchasedTogether) {
      const products = retval.data.data.purchasedTogether;
      if (products.items && products.items.length > 0) {
        products.items.forEach((item) => {
          const aw_source = item.aw_source;
          const sku2 = item.sku;
          commit("setAwSource", { sku: sku2, aw_source });
        });
      }
      commit("setCrossSellProducts", products.items);
    } else {
      commit("setCrossSellProducts", []);
    }
  },
  async loadUpSellProducts({ commit }, { sku, hello_retail_id }) {
    const graphqlResolved = await CONFIG_JSON;
    const lang = getCurrentLanguage();
    const storelang = CONFIG_JSON$1.languages[lang];
    const storeview = storelang["storeview"];
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
      Store: storeview
    };
    let query = '{ alternatives(sku:"' + sku + '",pageType: "product",pageSize: 10, currentPage: 1) {';
    query = query + graphqlResolved.queryFields.productOverview.replace(
      "__typename",
      '__typename aw_source(pageType: "product" trackingUserId:"' + hello_retail_id + '" requestType: "alternatives" sku:"' + sku + '")'
    ) + "} }";
    const retval = await axios({
      url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
      method: "GET",
      headers
    }).catch((e) => {
      logger.error("loadUpSellProducts", "product", e)();
      throw e;
    });
    if (retval && retval.data && retval.data.data && retval.data.data.alternatives) {
      const products = retval.data.data.alternatives;
      if (products.items && products.items.length > 0) {
        products.items.forEach((item) => {
          const aw_source = item.aw_source;
          const sku2 = item.sku;
          commit("setAwSource", { sku: sku2, aw_source });
        });
      }
      commit("setUpSellProducts", products.items);
    } else {
      commit("setUpSellProducts", []);
    }
  }
};
const mutations$1 = {
  ...coreProduct.mutations,
  setCurrentCustomMeasures(state2, data) {
    state2.currentCustomMeasures = data;
  },
  setOptionValue(state2, data) {
    for (let i = data.index + 1; i < state2.currentOptions.length; i++) {
      if (state2.currentOptions[i].attribute_code == "fkv_maten") {
        state2.currentCustomMeasures = [];
      }
      state2.currentOptions[i].choice = null;
      state2.currentOptions[i].values = [];
    }
    if (data.index == state2.currentOptions.length - 1) {
      state2.currentChildSku = data.value;
    } else {
      state2.currentOptions[data.index].choice = data.value;
      state2.currentChildSku = null;
      let products = state2.currentConfig.variants;
      for (let i = 0; i <= data.index; i++) {
        products = products.filter(function(item) {
          const retval = item.attributes.find((o) => {
            if (o.value_index == state2.currentOptions[i].choice) {
              return true;
            }
          });
          if (retval != null) {
            return true;
          }
        });
      }
      if (data.index == state2.currentOptions.length - 2) {
        const values = [];
        const cvalues = [];
        products.forEach((element) => {
          const retval = element.attributes.find((o) => {
            if (o.code == state2.currentOptions[data.index + 1].attribute_code) {
              return true;
            }
          });
          const value = {
            label: retval.label,
            value_index: element.product.sku
          };
          values.push(value);
          if (retval.code == "fkv_maten") {
            if (state2.currentConfig.size_chart.sizes.length != null) {
              const found = state2.currentConfig.size_chart.sizes.find((v) => {
                if (v.from.option_id == retval.value_index) {
                  return true;
                }
              });
              if (found != null) {
                const cvalue = {
                  label: found.to.label,
                  value_index: element.product.sku
                };
                cvalues.push(cvalue);
              }
            }
          }
        });
        state2.currentOptions[data.index + 1].values = values;
        state2.currentCustomMeasures = cvalues;
      }
    }
  },
  /**
   * set bundle option value
   *
   * @param {array} data
   */
  setCurrentProdBundleOptionValue(state2, data) {
    for (let i = data.index + 1; i < state2.currentProdBundleOptions[data.bundle_id].length; i++) {
      state2.currentProdBundleOptions[data.bundle_id][i].choice = null;
      state2.currentProdBundleOptions[data.bundle_id][i].values = [];
    }
    if (data.index == state2.currentProdBundleOptions[data.bundle_id].length - 1) {
      state2.currentProdSelectedBundleChildSku = {
        ...state2.currentProdSelectedBundleChildSku,
        [data.bundle_id]: data.value
      };
    } else {
      state2.currentProdBundleOptions[data.bundle_id][data.index].choice = data.value;
      state2.currentProdSelectedBundleChildSku = {
        ...state2.currentProdSelectedBundleChildSku,
        [data.bundle_id]: null
      };
      let prod = state2.currentProdBundle.find((v) => {
        if (v.option_id == data.bundle_id) {
          return true;
        }
      });
      let products = prod.options[0].product.variants;
      for (let i = 0; i <= data.index; i++) {
        products = products.filter(function(item) {
          const retval = item.attributes.find((o) => {
            if (o.value_index == state2.currentProdBundleOptions[data.bundle_id][i].choice) {
              return true;
            }
          });
          if (retval != null) {
            return true;
          }
        });
      }
      if (data.index == state2.currentProdBundleOptions[data.bundle_id].length - 2) {
        const values = [];
        products.forEach((element) => {
          const retval = element.attributes.find((o) => {
            if (o.code == state2.currentProdBundleOptions[data.bundle_id][data.index + 1].attribute_code) {
              return true;
            }
          });
          const value = {
            label: retval.label,
            value_index: element.product.sku
          };
          values.push(value);
        });
        state2.currentProdBundleOptions[data.bundle_id][data.index + 1].values = values;
      }
    }
  },
  setCurrentProdBundleOptionQty(state2, data) {
    const bundle = state2.currentProdBundle.find((v) => v.uid == data.bundle_id);
    if (!bundle) return;
    const bundleOption = bundle.options[data.index];
    if (bundleOption) bundleOption.quantity = data.value;
  },
  /**
   * set current bundle configuration
   *
   * @param {object} data
   * @private
   */
  setCurrentProdBundle(state2, data) {
    state2.currentProdBundle = data;
  },
  /**
   * set current bundle options
   *
   * @param {array} data
   * @private
   */
  setCurrentProdBundleOptions(state2, data) {
    state2.currentProdBundleOptions = data;
  },
  /**
   * set selected bundles
   *
   * @param {array} data
   * @private
   */
  setCurrentProdSelectedBundles(state2, data) {
    state2.currentProdSelectedBundles = data;
  },
  /**
   * set Selected Bundle child sku
   *
   * @param {array} data
   * @private
   */
  setCurrentProdSelectedBundleChildSku(state2, data) {
    state2.currentProdSelectedBundleChildSku = data;
  },
  setCrossSellProducts(state2, data) {
    state2.crossSellProducts = data;
  },
  setUpSellProducts(state2, data) {
    state2.upSellProducts = data;
  },
  setAwSource(state2, payload) {
    let awSource = JSON.parse(localStorage.getItem("aw_source")) ?? [];
    awSource.push(payload);
    localStorage.setItem("aw_source", JSON.stringify(awSource));
  }
};
const getters$1 = {
  ...coreProduct.getters,
  getCurrentCustomMeasures: (state2) => state2.currentCustomMeasures,
  getCurrentProdBundle: (state2) => state2.currentProdBundle,
  getCurrentProdBundleOptions: (state2) => state2.currentProdBundleOptions,
  getCurrentProdSelectedBundles: (state2) => state2.currentProdSelectedBundles,
  getCurrentProdSelectedChildSkus: (state2) => state2.currentProdSelectedBundleChildSku,
  getCrossSellProducts: (state2) => state2.crossSellProducts,
  getUpSellProducts: (state2) => state2.upSellProducts,
  getAwSource: (state2) => state2.aw_source
};
const product = {
  namespaced: true,
  state: state$1,
  actions: actions$1,
  mutations: mutations$1,
  getters: getters$1
};
const state = () => ({
  bestsellerProducts: [],
  aw_source: null
});
const actions = {
  async loadBestsellerProducts({ commit }, { category: category2, hello_retail_id }) {
    const graphqlResolved = await CONFIG_JSON;
    const lang = getCurrentLanguage();
    const storelang = CONFIG_JSON$1.languages[lang];
    const storeview = storelang["storeview"];
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG_JSON$1.shop.accessToken,
      Store: storeview
    };
    let query = '{ topHierarchies(categoryName:"' + category2 + '",pageType: "category",pageSize: 10, currentPage: 1) {';
    query = query + graphqlResolved.queryFields.productOverview.replace(
      "__typename",
      '__typename aw_source(pageType: "category" trackingUserId:"' + hello_retail_id + '" requestType: "topHierarchies" categoryName:"' + category2 + '")'
    ) + "} }";
    const retval = await axios({
      url: CONFIG_JSON$1.shop.graphQLURL + "?query=" + encodeURIComponent(query),
      method: "GET",
      headers
    }).catch((e) => {
      logger.error("loadBestSellerProducts", "home", e)();
      throw e;
    });
    if (retval && retval.data && retval.data.data && retval.data.data.topHierarchies) {
      const products = retval.data.data.topHierarchies;
      if (products.items && products.items.length > 0) {
        products.items.forEach((item) => {
          const aw_source = item.aw_source;
          const sku = item.sku;
          commit("setAwSource", { sku, aw_source });
        });
      }
      commit("setBestsellerProducts", products.items);
    } else {
      commit("setBestsellerProducts", []);
    }
  }
};
const mutations = {
  setBestsellerProducts(state2, payload) {
    state2.bestsellerProducts = payload;
  },
  setAwSource(state2, payload) {
    let awSource = JSON.parse(localStorage.getItem("aw_source")) ?? [];
    awSource.push(payload);
    localStorage.setItem("aw_source", JSON.stringify(awSource));
  }
};
const getters = {
  getBestsellerProducts: (state2) => state2.bestsellerProducts,
  getAwSource: (state2) => state2.aw_source
};
const category = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
function registers(app, store2) {
  store2.registerModule("menu", menu);
  store2.registerModule("home", home);
  store2.registerModule("sale", sale);
  store2.registerModule("product", product);
  store2.registerModule("category_local", category);
}
const baseRegisters = [...coreRegisters, registers];
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: baseRegisters
}, Symbol.toStringTag, { value: "Module" }));
export {
  baseRegisters as b,
  index as i,
  loadCategoryMenu as l
};
//# sourceMappingURL=index-PklOOZQD.js.map
