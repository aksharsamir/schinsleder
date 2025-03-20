import axios from "axios";
import { g as getCurrentLanguage, C as CONFIG_JSON, l as logger, a as CONFIG_JSON$1 } from "../entry-server.js";
async function getProductByUrl(url) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = '{products(filter: {url_key:{eq:"' + url + '"}})' + graphqlResolved.queryFields.productDetail + "}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
    //data: { query: query },
  }).catch((e) => {
    logger.error("getProductByUrl", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getProductBySku(sku) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = '{products(filter: {sku:{eq:"' + sku + '"}})' + graphqlResolved.queryFields.productDetail + "}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
    //data: { query: query },
  }).catch((e) => {
    logger.error("getProductBySku", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getProductDetails(sku, type) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = '{products(filter: {sku:{eq:"' + sku + '"}})';
  if (type == "SimpleProduct") {
    query = query + graphqlResolved.queryFields.productSimple;
  } else if (type == "ConfigurableProduct") {
    query = query + graphqlResolved.queryFields.productConfigurable;
  } else if (type == "BundleProduct") {
    query = query + graphqlResolved.queryFields.productBundle;
  } else if (type == "GroupedProduct") {
    query = query + graphqlResolved.queryFields.productGrouped;
  }
  query = query + "}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
    //data: { query: query },
  }).catch((e) => {
    logger.error("getProductByUrl", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getProductRelated(sku) {
  var _a;
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = '{products(filter: {sku:{eq:"' + sku + '"}})' + graphqlResolved.queryFields.productRelated + "}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
    //data: { query: query },
  }).catch((e) => {
    logger.error("getProductByUrl", "data-resolver products", e)();
    throw e;
  });
  return (_a = retval.data.data) == null ? void 0 : _a.products;
}
async function getProductCrossSell(sku) {
  var _a;
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = '{products(filter: {sku:{eq:"' + sku + '"}})' + graphqlResolved.queryFields.productCrossSell + "}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
    //data: { query: query },
  }).catch((e) => {
    logger.error("getProductByUrl", "data-resolver products", e)();
    throw e;
  });
  return (_a = retval.data.data) == null ? void 0 : _a.products;
}
async function getProductUpSell(sku) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = '{products(filter: {sku:{eq:"' + sku + '"}})' + graphqlResolved.queryFields.productUpSell + "}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
    //data: { query: query },
  }).catch((e) => {
    logger.error("getProductByUrl", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getBrandSlider() {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = '{ getBrands( filter: { showInSlider: true }, orderBy: "title", order: "ASC", ) { items { category {id url_key url_path } showInSlider positionInSlider title shortDescription description logo image metaTitle metaDescription metaKeywords urlKey } } }';
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getBrandSlider", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.getBrands;
}
async function getBrandDetail(urlKey) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = '{ getBrands( filter: { urlKey: "' + urlKey + '" }, orderBy: "title", order: "ASC", limit: 15, page: 1 ) { count items { attributeValue category { id url_key url_path } description image logo metaDescription metaKeywords metaTitle positionInSlider shortDescription showInSlider title urlKey } total } }';
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getBrandSlider", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.getBrands.items;
}
async function getProductByBrand(attributeValue, curr_page, page_size, { sort, filters }) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const brand = CONFIG_JSON.brandAttribute || "merk";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = "query { products( pageSize: " + page_size + ", currentPage: " + curr_page + ",filter: { " + brand + ": { in: [" + attributeValue + "] }";
  let subcategoryFilterActive = filters.find((filter) => filter.attribute_code == "subcategory");
  if (subcategoryFilterActive) {
    query += "{in: " + JSON.stringify(subcategoryFilterActive.values.map((v) => v.toString())) + "} ";
  }
  for (const filter of filters.filter((filter2) => filter2.attribute_code != "subcategory")) {
    if (filter.attribute_code === "price") {
      query += 'price: { from: "' + filter.values[0] + '" to: "' + filter.values[1] + '" } ';
    } else {
      query += filter.attribute_code + ": {in: " + JSON.stringify(filter.values) + "} ";
    }
  }
  query += "} ";
  if (sort != null) {
    query += "sort: {" + sort.sortBy + ": " + sort.direction + "}";
  }
  query += " ) { " + graphqlResolved.queryFields.brandProducts + " } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getBrandSlider", "data-resolver products", e)();
    throw e;
  });
  return retval;
}
async function getProductFiltersByCategory(id, page_size = 12, filters = []) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = " { products(pageSize: " + page_size;
  query += " filter: {category_id: ";
  let subcategoryFilterActive = filters.find((filter) => filter.attribute_code == "subcategory");
  if (!subcategoryFilterActive) {
    query += '{eq: "' + id + '"} ';
  } else {
    query += "{in: " + JSON.stringify(subcategoryFilterActive.values.map((v) => v.toString())) + "} ";
  }
  for (const filter of filters.filter((filter2) => filter2.attribute_code != "subcategory")) {
    if (filter.attribute_code === "price") {
      query += 'price: { from: "' + filter.values[0] + '" to: "' + filter.values[1] + '" } ';
    } else {
      query += filter.attribute_code + ": {in: " + JSON.stringify(filter.values) + "} ";
    }
  }
  query = query + "})";
  query = query + "{ " + graphqlResolved.queryFields.pageInfo + " " + graphqlResolved.queryFields.aggregations + " } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductFiltersByCategoryId", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getProductFiltersByFilteredCategory(id, curr_page, page_size, { sort, filters }) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = " { products(pageSize: " + page_size + " currentPage: " + curr_page + " filter: {category_id: ";
  let subcategoryFilterActive = filters.find((filter) => filter.attribute_code == "subcategory");
  if (!subcategoryFilterActive) {
    query += '{eq: "' + id + '"} ';
  } else {
    query += "{in: " + JSON.stringify(subcategoryFilterActive.values.map((v) => v.toString())) + "} ";
  }
  for (const filter of filters.filter((filter2) => filter2.attribute_code != "subcategory")) {
    if (filter.attribute_code === "price") {
      query += 'price: { from: "' + filter.values[0] + '" to: "' + filter.values[1] + '" } ';
    } else {
      query += filter.attribute_code + ": {in: " + JSON.stringify(filter.values) + "} ";
    }
  }
  query += "} ";
  if (sort != null) {
    query += " sort: { " + sort.sortBy + ": " + sort.direction + " } ";
  }
  query += ") { " + graphqlResolved.queryFields.pageInfo + " " + graphqlResolved.queryFields.aggregations + " " + graphqlResolved.queryFields.productOverview + " } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductFiltersByFilteredCategory", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getProductByCategoryId(id, page, store2) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const defaultsort = CONFIG_JSON.sortDefault;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let end_query = "";
  let query = "{ products(pageSize: 12 currentPage: " + page;
  if (typeof defaultsort === "object") {
    query += " sort: { " + defaultsort.sortBy + ": " + defaultsort.direction + " }";
  }
  query += ' filter: {category_id: {eq: "' + id + '"}';
  if (store2.getters["partfinder/getType"] != null) {
    query = query + " partfinder: {";
    query = query + ' type_id: {eq: "' + store2.getters["partfinder/getType"] + '"}';
    end_query = "}";
  }
  if (store2.getters["partfinder/getBrand"] != null) {
    query = query + ' brand_id: {eq: "' + store2.getters["partfinder/getBrand"] + '"}';
  }
  if (store2.getters["partfinder/getModel"] != null) {
    query = query + ' model_id: {eq: "' + store2.getters["partfinder/getModel"] + '"}';
  }
  if (store2.getters["partfinder/getYear"] != null) {
    query = query + ' year_id: {eq: "' + store2.getters["partfinder/getYear"] + '"}';
  }
  if (store2.getters["partfinder/getCilinder"] != null) {
    query = query + ' cilinder_id: {eq: "' + store2.getters["partfinder/getCilinder"] + '"}';
  }
  query = query + end_query + "})";
  query = query + "{ " + graphqlResolved.queryFields.pageInfo + " " + graphqlResolved.queryFields.productOverview + "} }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductByCategoryId", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getProductByFilteredCategory(id, curr_page, page_size, { sort, filters }) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = " { products(pageSize: " + page_size + " currentPage: " + curr_page + " filter: {category_id: ";
  let subcategoryFilterActive = filters.find((filter) => filter.attribute_code == "subcategory");
  if (!subcategoryFilterActive) {
    query += '{eq: "' + id + '"} ';
  } else {
    query += "{in: " + JSON.stringify(subcategoryFilterActive.values.map((v) => v.toString())) + "} ";
  }
  for (const filter of filters.filter((filter2) => filter2.attribute_code != "subcategory")) {
    if (filter.attribute_code === "price") {
      query += 'price: { from: "' + filter.values[0] + '" to: "' + filter.values[1] + '" } ';
    } else {
      query += filter.attribute_code + ": {in: " + JSON.stringify(filter.values) + "} ";
    }
  }
  query += "} ";
  if (sort != null) {
    query += " sort: { " + sort.sortBy + ": " + sort.direction + " }";
  }
  query += " ) { " + graphqlResolved.queryFields.productOverview + " } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductByFilteredCategory", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getProductsBySearchPreview(filter, signal, page_size = 5) {
  var _a;
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = " { products(search: " + JSON.stringify((_a = filter.replace(/\s+/g, " ").trim()) == null ? void 0 : _a.toLowerCase()) + " pageSize: " + page_size + ")" + graphqlResolved.queryFields.productSearchPrev + "}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers,
    signal
  }).catch((e) => {
    throw e;
  });
  return retval.data.data.products;
}
async function getProductFiltersBySearch(search, page_size = 12, filters = []) {
  var _a;
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = " { products(pageSize: " + page_size + " search: " + JSON.stringify((_a = search.replace(/\s+/g, " ").trim()) == null ? void 0 : _a.toLowerCase());
  if (filters.length > 0) {
    query += " filter: {  ";
    for (const filter of filters) {
      if (filter.attribute_code === "price") {
        query += 'price: { from: "' + filter.values[0] + '" to: "' + filter.values[1] + '" } ';
      } else {
        query += filter.attribute_code + ": {in: " + JSON.stringify(filter.values) + "} ";
      }
    }
    query += " } ";
  }
  query += ") { " + graphqlResolved.queryFields.pageInfo + " " + graphqlResolved.queryFields.aggregations + " } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductFiltersBySearch", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getProductFiltersByFilteredSearch(search, curr_page, page_size, { sort, filters }) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = " { products(pageSize: " + page_size + " currentPage: " + curr_page + " search: " + JSON.stringify(search.replace(/\s+/g, " ").trim().toLowerCase());
  if (sort != null) {
    query += " sort: { " + sort.sortBy + ": " + sort.direction + " } ";
  }
  if (filters.length > 0) {
    query += " filter: {  ";
    for (const filter of filters) {
      if (!filter) {
        continue;
      }
      if (filter.values.some((value) => value === void 0 || value === null)) {
        continue;
      }
      if (filter.attribute_code === "price") {
        query += 'price: { from: "' + filter.values[0] + '" to: "' + filter.values[1] + '" } ';
      } else {
        query += filter.attribute_code + ": {in: " + JSON.stringify(filter.values) + "} ";
      }
    }
    query += " } ";
  }
  query += " ) { " + graphqlResolved.queryFields.pageInfo + " " + graphqlResolved.queryFields.aggregations + " " + graphqlResolved.queryFields.productOverview + " } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductFiltersByFilteredSearch", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getProductByFilteredSearch(search, curr_page, page_size, { sort, filters }) {
  var _a;
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = " { products(pageSize: " + page_size + " currentPage: " + curr_page + " search:" + JSON.stringify((_a = search.replace(/\s+/g, " ").trim()) == null ? void 0 : _a.toLowerCase());
  if (filters.length > 0) {
    query += " filter: {  ";
    for (const filter of filters) {
      if (filter.attribute_code === "price") {
        query += 'price: { from: "' + filter.values[0] + '" to: "' + filter.values[1] + '" } ';
      } else {
        query += filter.attribute_code + ": {in: " + JSON.stringify(filter.values) + "} ";
      }
    }
    query += "} ";
  }
  if (sort != null) {
    query += " sort: { " + sort.sortBy + ": " + sort.direction + " }";
  }
  query += " ) { " + graphqlResolved.queryFields.productOverview + " } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductByFilteredSearch", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function productReviewRatingsMetadata() {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = "{ productReviewRatingsMetadata { items { id name values { value_id value } } }}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("productReviewRatingsMetadata", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.productReviewRatingsMetadata;
}
async function getProductFiltersByPartfinder(filters) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = " { partfinderSearch( partFilters: {";
  if (store.getters["partfinder/getType"] != null) {
    query = query + ' type_id: {eq: "' + store.getters["partfinder/getType"] + '"}';
  }
  if (store.getters["partfinder/getBrand"] != null) {
    query = query + ' brand_id: {eq: "' + store.getters["partfinder/getBrand"] + '"}';
  }
  if (store.getters["partfinder/getModel"] != null) {
    query = query + ' model_id: {eq: "' + store.getters["partfinder/getModel"] + '"}';
  }
  if (store.getters["partfinder/getYear"] != null) {
    query = query + ' year_id: {eq: "' + store.getters["partfinder/getYear"] + '"}';
  }
  if (store.getters["partfinder/getCilinder"] != null) {
    query = query + ' cilinder_id: {eq: "' + store.getters["partfinder/getCilinder"] + '"}';
  }
  query = query + "}";
  if (filters && filters.length > 0) {
    query += " filter: {  ";
    for (const filter of filters) {
      if (!filter) {
        continue;
      }
      if (filter.values.some((value) => value === void 0 || value === null)) {
        continue;
      }
      if (filter.attribute_code === "price") {
        query += 'price: { from: "' + filter.values[0] + '" to: "' + filter.values[1] + '" } ';
      } else {
        query += filter.attribute_code + ": {in: " + JSON.stringify(filter.values) + "} ";
      }
    }
    query += " } ";
  }
  query += " ) ";
  query = query + " { total_count aggregations { min_value max_value attribute_code count label options { count label value } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductFiltersBySearch", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.partfinderSearch;
}
async function getProductByPartfinder(page, store2) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = " { partfinderSearch(pageSize: 12 currentPage: " + page + " partFilters: { ";
  if (store2.getters["partfinder/getType"] != null) {
    query = query + ' type_id: {eq: "' + store2.getters["partfinder/getType"] + '"}';
  }
  if (store2.getters["partfinder/getBrand"] != null) {
    query = query + ' brand_id: {eq: "' + store2.getters["partfinder/getBrand"] + '"}';
  }
  if (store2.getters["partfinder/getModel"] != null) {
    query = query + ' model_id: {eq: "' + store2.getters["partfinder/getModel"] + '"}';
  }
  if (store2.getters["partfinder/getYear"] != null) {
    query = query + ' year_id: {eq: "' + store2.getters["partfinder/getYear"] + '"}';
  }
  if (store2.getters["partfinder/getCilinder"] != null) {
    query = query + ' cilinder_id: {eq: "' + store2.getters["partfinder/getCilinder"] + '"}';
  }
  query = query + "})";
  query = query + "{ " + graphqlResolved.queryFields.pageInfo + " " + graphqlResolved.queryFields.productOverview + " } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductBySearch", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.partfinderSearch;
}
async function getProductFilteredSortedByPartfinder(curr_page, page_size, { sort, filters }) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = " { partfinderSearch(pageSize: " + page_size + " currentPage: " + curr_page + //PartFinder Searches Added
  " partFilters: { ";
  if (store.getters["partfinder/getType"] != null) {
    query = query + ' type_id: {eq: "' + store.getters["partfinder/getType"] + '"}';
  }
  if (store.getters["partfinder/getBrand"] != null) {
    query = query + ' brand_id: {eq: "' + store.getters["partfinder/getBrand"] + '"}';
  }
  if (store.getters["partfinder/getModel"] != null) {
    query = query + ' model_id: {eq: "' + store.getters["partfinder/getModel"] + '"}';
  }
  if (store.getters["partfinder/getYear"] != null) {
    query = query + ' year_id: {eq: "' + store.getters["partfinder/getYear"] + '"}';
  }
  if (store.getters["partfinder/getCilinder"] != null) {
    query = query + ' cilinder_id: {eq: "' + store.getters["partfinder/getCilinder"] + '"}';
  }
  query = query + "}";
  if (sort != null && sort != void 0) {
    query += " sort: { " + sort.sortBy + ": " + sort.direction + " } ";
  }
  if (filters && filters.length > 0) {
    query += " filter: {  ";
    for (const filter of filters) {
      if (!filter) {
        continue;
      }
      if (filter.values.some((value) => value === void 0 || value === null)) {
        continue;
      }
      if (filter.attribute_code === "price") {
        query += 'price: { from: "' + filter.values[0] + '" to: "' + filter.values[1] + '" } ';
      } else {
        query += filter.attribute_code + ": {in: " + JSON.stringify(filter.values) + "} ";
      }
    }
    query += " } ";
  }
  query += " ) ";
  query = query + "{ " + CONFIG_JSON$1.queryFields.pageInfo + " " + CONFIG_JSON$1.queryFields.productOverview + " } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductBySearch", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.partfinderSearch;
}
async function getProductFiltersByFilter(filter) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = " { products(pageSize: 12 filter:  " + filter + ") { total_count aggregations { min_value max_value attribute_code count label options { count label value } } } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductFiltersBySearch", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getProductByFilter(filter, page) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  const query = " { products(pageSize: 12 currentPage: " + page + " filter: " + filter + "){ " + graphqlResolved.queryFields.pageInfo + " " + graphqlResolved.queryFields.productOverview + " } }";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getProductBySearch", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products;
}
async function getCartCrossSell(skus) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  if (Array.isArray(skus) && skus.length > 0) {
    const query = "{products(filter: {sku:{in:" + JSON.stringify(skus) + "}})" + graphqlResolved.queryFields.productCrossSell + "}";
    const retval = await axios({
      url: CONFIG_JSON.shop.graphQLURL + "?query=" + query,
      method: "GET",
      headers
      //data: { query: query },
    }).catch((e) => {
      logger.error("getCartCrossSell", "data-resolver products", e)();
      throw e;
    });
    let crosssell_products = [];
    if (retval.data.data.products && retval.data.data.products.items) {
      retval.data.data.products.items.forEach((item) => {
        if (item && item.crosssell_products && item.crosssell_products.length > 0) {
          item.crosssell_products.forEach((product) => {
            crosssell_products.push(product);
          });
        }
      });
    }
    return crosssell_products;
  } else {
    return [];
  }
}
async function getCartRelated(skus) {
  const graphqlResolved = await CONFIG_JSON$1;
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  if (Array.isArray(skus) && skus.length > 0) {
    const query = "{products(filter: {sku:{in:" + JSON.stringify(skus) + "}})" + graphqlResolved.queryFields.productRelated + "}";
    const retval = await axios({
      url: CONFIG_JSON.shop.graphQLURL + "?query=" + query,
      method: "GET",
      headers
      //data: { query: query },
    }).catch((e) => {
      logger.error("getCartRelated", "data-resolver products", e)();
      throw e;
    });
    let related_products = [];
    if (retval.data.data.products && retval.data.data.products.items) {
      retval.data.data.products.items.forEach((item) => {
        if (item && item.related_products && item.related_products.length > 0) {
          item.related_products.forEach((product) => {
            related_products.push(product);
          });
        }
      });
    }
    return related_products;
  } else {
    return [];
  }
}
async function getAggregationsByBrand(brand_id) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const brand = CONFIG_JSON.brandAttribute || "merk";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = " { products(filter:{" + brand + ": {eq: " + brand_id + "}}) {aggregations { min_value max_value attribute_code count label options { count label value swatch_data { type value} } }}}";
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getAggregationsByBrand", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products.aggregations;
}
async function getAggregationsByCategory(category_id) {
  const lang = getCurrentLanguage();
  const storelang = CONFIG_JSON.languages[lang];
  const storeview = storelang["storeview"];
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + CONFIG_JSON.shop.accessToken,
    Store: storeview
  };
  let query = ' { products(filter:{category_id: {eq: "' + category_id + '"}}) {aggregations { min_value max_value attribute_code count label options { count label value swatch_data { type value} } }}}';
  const retval = await axios({
    url: CONFIG_JSON.shop.graphQLURL + "?query=" + encodeURIComponent(query),
    method: "GET",
    headers
  }).catch((e) => {
    logger.error("getAggregationsByCategory", "data-resolver products", e)();
    throw e;
  });
  return retval.data.data.products.aggregations;
}
export {
  getProductsBySearchPreview as A,
  getProductFiltersByCategory as a,
  getProductFiltersByFilteredCategory as b,
  getProductByFilteredCategory as c,
  getAggregationsByBrand as d,
  getProductByBrand as e,
  getBrandDetail as f,
  getAggregationsByCategory as g,
  getBrandSlider as h,
  getProductDetails as i,
  getProductUpSell as j,
  getCartRelated as k,
  getCartCrossSell as l,
  getProductCrossSell as m,
  getProductBySku as n,
  getProductRelated as o,
  productReviewRatingsMetadata as p,
  getProductByUrl as q,
  getProductFiltersByPartfinder as r,
  getProductFilteredSortedByPartfinder as s,
  getProductByPartfinder as t,
  getProductFiltersBySearch as u,
  getProductFiltersByFilteredSearch as v,
  getProductByFilteredSearch as w,
  getProductByCategoryId as x,
  getProductByFilter as y,
  getProductFiltersByFilter as z
};
//# sourceMappingURL=products-Dsi6ZmTY.js.map
