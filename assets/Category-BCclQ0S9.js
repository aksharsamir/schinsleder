import { computed, onMounted, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, unref, watch, createBlock, openBlock, createCommentVNode, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { useGtm } from "@gtm-support/vue-gtm";
import { useHead } from "@unhead/vue";
import { C as CONFIG_JSON, i as isServer } from "../entry-server.js";
import { _ as _sfc_main$7 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$8 } from "./Breadcrumbs-BN1xAQs-.js";
import { _ as _sfc_main$5, a as _sfc_main$a } from "./FilteredProducts-CNOiFZh2.js";
import { _ as _sfc_main$9 } from "./CategoryOverview-BAz7TrE4.js";
import { BFormSelect } from "bootstrap-vue-next/components/BFormSelect";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BPagination } from "bootstrap-vue-next/components/BPagination";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$6 } from "./AdvertisingBanner-BW7fLnPX.js";
import { _ as _imports_0 } from "./heart-DpQotoa5.js";
import VueCookies from "vue-cookies";
import { _ as _sfc_main$b } from "./DynamicForms-BMAeaiy-.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "axios";
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
import "bootstrap-vue-next/components/BContainer";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BBadge";
import "./FooterCopyRight-CMwhH0WW.js";
import "bootstrap-vue-next/components/BCollapse";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@element-plus/icons-vue";
import "./BlockSimple-BHbXwFf2.js";
import "vue-3-slider-component";
import "./ProductsSection-BPtJ28sJ.js";
import "./ProductCard-zGPQ-XdA.js";
import "./default-placeholder-image-BaAVikZT.js";
import "bootstrap-vue-next/components/BFormTextarea";
import "bootstrap-vue-next/components/BForm";
import "bootstrap-vue-next/components/BFormGroup";
import "bootstrap-vue-next/components/BModal";
import "./forms-BxHSFE8a.js";
const _sfc_main$4 = {
  __name: "CategoryPageContentFilter",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const sorting = computed(() => store.getters["category/getSorting"]);
    const currentPage = computed(() => store.getters["category/getCurrentPage"]);
    const totalProds = computed(() => store.getters["category/getTotalProducts"]);
    const prodsPerPage = computed(
      () => store.getters["category/getProductsPerPage"]
    );
    const totalPages = computed(() => store.getters["category/getTotalPages"]);
    const category = computed(() => store.getters["category/getCurrentCategory"]);
    const selectOptions = computed(() => {
      const sortOpt = [];
      Object.keys(CONFIG_JSON.sortingOptions).forEach((element) => {
        const option = {
          value: element,
          text: t(`sortingOptions.${element}`)
        };
        sortOpt.push(option);
      });
      return sortOpt;
    });
    const changePage = (pageNo) => {
      router.currentRoute.value.meta = "top";
      store.commit("category/setCurrentPage", { pageNo, store });
      const { path } = route;
      const query = { ...route.query };
      if (pageNo != 1) query["page"] = pageNo;
      else delete query["page"];
      router.replace({ path, query });
    };
    const changeSorting = (sortVal) => {
      router.currentRoute.value.meta = "top";
      store.commit("category/setSorting", { sortVal, store });
      const { path } = route;
      const query = { ...route.query };
      const { sortDefault } = CONFIG_JSON;
      if (CONFIG_JSON.sortingOptions[sortVal] && sortVal !== sortDefault) {
        query["sort"] = sortVal;
      } else {
        delete query["sort"];
      }
      delete query["page"];
      router.replace({ path, query });
    };
    const goToPage = (page) => {
      const { path } = route;
      const query = { ...route.query };
      if (page != 1) query["page"] = page;
      else delete query["page"];
      return { path, query };
    };
    onMounted(() => {
      var _a;
      const { page } = route.query;
      const path = "/" + category.value.url_path;
      const query = { ...route.query };
      if (page && totalPages.value < parseInt(page)) {
        delete query["page"];
      }
      const pageSize = (_a = CONFIG_JSON.products) == null ? void 0 : _a.perPage;
      const perPage = store.getters["category/getProductsPerPage"];
      if (perPage != pageSize) query["page-size"] = perPage;
      router.replace({ path, query });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BPagination = BPagination;
      const _component_BLink = BLink;
      const _component_BFormSelect = BFormSelect;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-filter" }, _attrs))}><div class="cst-pagination-bar"><label>Pagina<span>${ssrInterpolate(currentPage.value)}</span>van<span>${ssrInterpolate(Math.ceil(totalProds.value / prodsPerPage.value))}</span></label>`);
      _push(ssrRenderComponent(_component_BPagination, {
        "total-rows": totalProds.value,
        "per-page": prodsPerPage.value,
        "model-value": currentPage.value,
        "onUpdate:modelValue": changePage,
        class: "cst-pagination",
        "aria-controls": "cat-item"
      }, {
        page: withCtx(({ page }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BLink, {
              class: "page-link",
              to: goToPage(page)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(page)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(page), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BLink, {
                class: "page-link",
                to: goToPage(page)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(page), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pagination-bar-down"><div class="left"><div class="display-drop"><label>${ssrInterpolate(_ctx.$t("view"))}:</label><select${ssrRenderAttr("value", prodsPerPage.value)}><option value="12">12</option><option value="24">24</option><option value="36">36</option></select></div></div><div class="select-wrapper">`);
      _push(ssrRenderComponent(_component_BFormSelect, {
        id: "sorting",
        options: selectOptions.value,
        class: "select",
        "onUpdate:modelValue": changeSorting,
        "model-value": sorting.value
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/CategoryPageContentFilter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CategoryPageContent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-content" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/CategoryPageContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "BestSellers",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { t } = useI18n();
    const router = useRouter();
    const bestsellers = computed(() => {
      let bestsellers2 = [];
      if (CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled) {
        bestsellers2 = store.getters["category_local/getBestsellerProducts"];
      } else {
        bestsellers2 = store.getters["category/getBestSellersSimple"];
      }
      return bestsellers2;
    });
    const category = computed(() => store.getters["category/getCurrentCategory"]);
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    async function loadBestsellers() {
      if (!isServer) {
        if (CONFIG_JSON.helloRetail && CONFIG_JSON.helloRetail.enabled) {
          const hello_retail_id = VueCookies.get("hello_retail_id");
          await store.dispatch("category_local/loadBestsellerProducts", {
            category: category.value.name,
            hello_retail_id
          });
        } else {
          await store.dispatch("category/loadBestsellerProducts");
        }
      }
    }
    function onClickWishListIcon(productId, typename, url_key) {
      if (store.getters["user/isProductInWishlist"](productId) == true) {
        store.dispatch("user/setProductWishlistStatus", {
          sku: productId,
          parentSku: null,
          store
        });
      } else {
        if (typename == "SimpleProduct") {
          store.dispatch("user/setProductWishlistStatus", {
            sku: productId,
            parentSku: null,
            store
          });
        } else {
          const msg = {
            type: "danger",
            title: t("wishlist error"),
            text: t("wishlist_select_options")
          };
          store.dispatch("messages/sendMessage", { message: msg });
          router.push("/" + url_key);
        }
      }
    }
    watch(() => category.value.name, loadBestsellers);
    onMounted(loadBestsellers);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_link = BLink;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "best-sellers" }, _attrs))}><div class="best-seller--category">${ssrInterpolate(category.value.name)}</div>`);
      if (bestsellers.value.length > 0) {
        _push(`<span class="section-title">${ssrInterpolate(_ctx.$t("bestsellers_for_you"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (bestsellers.value.length > 0) {
        _push(`<div class="row"><!--[-->`);
        ssrRenderList(bestsellers.value.slice(0, 4), (product) => {
          _push(`<div class="col-6 col-md-3 position-relative best-seller--card-holder">`);
          if (_ctx.$store.getters["user/isProductInWishlist"](product.sku) && isLoggedIn.value) {
            _push(ssrRenderComponent(_component_b_link, {
              class: "add-to-wishlist",
              onClick: ($event) => onClickWishListIcon(product.sku, product.__typename, product.url_key)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (_ctx.$store.getters["user/isProductInWishlist"](product.sku)) {
                    _push2(`<div class="heart"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="heart"${_scopeId}></div>`);
                  } else {
                    _push2(`<i class="lnr lnr-heart"${_scopeId}></i>`);
                  }
                } else {
                  return [
                    _ctx.$store.getters["user/isProductInWishlist"](product.sku) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "heart"
                    }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "heart"
                      })
                    ])) : (openBlock(), createBlock("i", {
                      key: 1,
                      class: "lnr lnr-heart"
                    }))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_b_link, {
            class: "bestsellers-card",
            to: `/` + product.url_key
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bestsellers-card--img" style="${ssrRenderStyle({ backgroundImage: `url(${product.image.medium})` })}"${_scopeId}><div class="actionbuttons"${_scopeId}>`);
                if (product.sale == 1) {
                  _push2(`<span class="sale-txt"${_scopeId}>Sale</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (product.new == 1) {
                  _push2(`<span class="new-txt"${_scopeId}>Nieuw</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><span class="bestsellers-card--product-name"${_scopeId}>${ssrInterpolate(product.name)}</span>`);
                if (product.price_range.minimum_price.final_price.value == product.price_range.maximum_price.final_price.value) {
                  _push2(`<span class="d-block bestsellers-card--price"${_scopeId}>€${ssrInterpolate(product.price_range.minimum_price.final_price.value.toFixed(2).replace(".", ","))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (product.price_range.minimum_price.final_price.value != product.price_range.maximum_price.final_price.value) {
                  _push2(`<span class="d-block bestsellers-card--price"${_scopeId}>€${ssrInterpolate(product.price_range.minimum_price.final_price.value.toFixed(2).replace(".", ","))} - €${ssrInterpolate(product.price_range.maximum_price.final_price.value.toFixed(2).replace(".", ","))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (product.price_range.minimum_price.discount.percent_off > 0) {
                  _push2(`<span class="d-block bestsellers-card--sale-comment"${_scopeId}>${ssrInterpolate(_ctx.$t("discount"))} ${ssrInterpolate(product.price_range.minimum_price.discount.percent_off.toFixed(0))}%</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (product.price_range.minimum_price.discount.percent_off == 0) {
                  _push2(`<span class="d-block bestsellers-card--sale-comment" style="${ssrRenderStyle({ "visibility": "hidden" })}"${_scopeId}>${ssrInterpolate(_ctx.$t("discount"))} ${ssrInterpolate(product.price_range.minimum_price.discount.percent_off.toFixed(0))}%</span>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("div", {
                    class: "bestsellers-card--img",
                    style: { backgroundImage: `url(${product.image.medium})` }
                  }, [
                    createVNode("div", { class: "actionbuttons" }, [
                      product.sale == 1 ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "sale-txt"
                      }, "Sale")) : createCommentVNode("", true),
                      product.new == 1 ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "new-txt"
                      }, "Nieuw")) : createCommentVNode("", true)
                    ])
                  ], 4),
                  createVNode("span", { class: "bestsellers-card--product-name" }, toDisplayString(product.name), 1),
                  product.price_range.minimum_price.final_price.value == product.price_range.maximum_price.final_price.value ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "d-block bestsellers-card--price"
                  }, "€" + toDisplayString(product.price_range.minimum_price.final_price.value.toFixed(2).replace(".", ",")), 1)) : createCommentVNode("", true),
                  product.price_range.minimum_price.final_price.value != product.price_range.maximum_price.final_price.value ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "d-block bestsellers-card--price"
                  }, "€" + toDisplayString(product.price_range.minimum_price.final_price.value.toFixed(2).replace(".", ",")) + " - €" + toDisplayString(product.price_range.maximum_price.final_price.value.toFixed(2).replace(".", ",")), 1)) : createCommentVNode("", true),
                  product.price_range.minimum_price.discount.percent_off > 0 ? (openBlock(), createBlock("span", {
                    key: 2,
                    class: "d-block bestsellers-card--sale-comment"
                  }, toDisplayString(_ctx.$t("discount")) + " " + toDisplayString(product.price_range.minimum_price.discount.percent_off.toFixed(0)) + "%", 1)) : createCommentVNode("", true),
                  product.price_range.minimum_price.discount.percent_off == 0 ? (openBlock(), createBlock("span", {
                    key: 3,
                    class: "d-block bestsellers-card--sale-comment",
                    style: { "visibility": "hidden" }
                  }, toDisplayString(_ctx.$t("discount")) + " " + toDisplayString(product.price_range.minimum_price.discount.percent_off.toFixed(0)) + "%", 1)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/BestSellers.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ProductListingV2",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const category = computed(() => store.getters["category/getCurrentCategory"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-listing" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), { class: "col-12 my-30 mt-lg-0" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`<section class="bottom-txt"><div>${category.value.description ?? ""}</div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/ProductListingV2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Category",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const gtm = useGtm();
    const category = computed(() => store.getters["category/getCurrentCategory"]);
    const categories = computed(() => category.value.children);
    const categoryForm = computed(() => store.getters["forms/getCategoryForm"]);
    const gtmProducts = computed(() => store.getters["category/getGtmProducts"]);
    useHead({
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "title",
          content: () => category.value ? category.value.meta_title ?? category.value.name ?? "" : ""
        },
        {
          name: "keywords",
          content: () => category.value ? category.value.meta_keywords ?? "" : ""
        },
        {
          name: "description",
          content: () => category.value ? category.value.meta_description ?? "" : ""
        }
      ],
      title: () => category.value.meta_title ?? category.value.name ?? ""
    });
    const setBreadcrumb = () => {
      const breadcrumbs = category.value.breadcrumbs;
      let currentName = "undefined";
      if (typeof category.value.name == "string") {
        currentName = category.value.name;
      }
      const bcrumb = { current: currentName, routes: [] };
      if (breadcrumbs != null) {
        breadcrumbs.sort((a, b) => {
          if (a.category_level < b.category_level) return -1;
          if (a.category_level > b.category_level) return 1;
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
      store.commit("breadcrumbs/set", bcrumb);
    };
    watch(gtmProducts, () => {
      if (gtm.enabled()) {
        if (gtmProducts.value.length > 0) {
          window.dataLayer.push({
            event: "eec.impressionView",
            ecommerce: {
              impressions: gtmProducts.value
            }
          });
        }
      }
    });
    onUnmounted(() => store.commit("category/setLoadProducts", false));
    onMounted(() => setBreadcrumb());
    watch(
      () => route.path,
      () => {
        var _a;
        const query = {};
        const pageSize = (_a = CONFIG_JSON.products) == null ? void 0 : _a.perPage;
        const perPage = store.getters["category/getProductsPerPage"];
        if (perPage != pageSize) query["page-size"] = perPage;
        router.replace({ path: route.path, query });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$7), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent2, _scopeId));
            if (category.value.brand == null) {
              _push2(`<div class="category"${_scopeId}>`);
              if (category.value.is_anchor == 0) {
                _push2(ssrRenderComponent(unref(_sfc_main$9), {
                  category: category.value,
                  categories: categories.value
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (category.value.is_anchor == 1) {
                _push2(`<div class="container"${_scopeId}><div class="row"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$a), { class: "col-lg-3" }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$1), { class: "col-lg-9" }, null, _parent2, _scopeId));
                _push2(`</div>`);
                if (categoryForm.value != null) {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(_sfc_main$b), {
                    category_id: category.value.id,
                    type: "category"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (category.value.brand != null) {
              _push2(`<div${_scopeId}><div class="container clearfix"${_scopeId}><div class="category_description"${_scopeId}>${category.value.description ?? ""}</div><div class="brand_logo"${_scopeId}><img${ssrRenderAttr("src", category.value.brand.logo)}${_scopeId}></div></div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$9), { category: category.value }, null, _parent2, _scopeId));
              if (category.value.is_anchor == 1) {
                _push2(`<div class="container"${_scopeId}><div class="row"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$a), { class: "col-lg-3" }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$1), { class: "col-lg-9" }, null, _parent2, _scopeId));
                _push2(`</div>`);
                if (categoryForm.value != null) {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(_sfc_main$b), {
                    category_id: category.value.id,
                    type: "category",
                    categories: categories.value
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(_sfc_main$8)),
              category.value.brand == null ? (openBlock(), createBlock("div", {
                key: 0,
                class: "category"
              }, [
                category.value.is_anchor == 0 ? (openBlock(), createBlock(unref(_sfc_main$9), {
                  key: 0,
                  category: category.value,
                  categories: categories.value
                }, null, 8, ["category", "categories"])) : createCommentVNode("", true),
                category.value.is_anchor == 1 ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "container"
                }, [
                  createVNode("div", { class: "row" }, [
                    createVNode(unref(_sfc_main$a), { class: "col-lg-3" }),
                    createVNode(unref(_sfc_main$1), { class: "col-lg-9" })
                  ]),
                  categoryForm.value != null ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(unref(_sfc_main$b), {
                      category_id: category.value.id,
                      type: "category"
                    }, null, 8, ["category_id"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              category.value.brand != null ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "container clearfix" }, [
                  createVNode("div", {
                    class: "category_description",
                    innerHTML: category.value.description
                  }, null, 8, ["innerHTML"]),
                  createVNode("div", { class: "brand_logo" }, [
                    createVNode("img", {
                      src: category.value.brand.logo
                    }, null, 8, ["src"])
                  ])
                ]),
                createVNode(unref(_sfc_main$9), { category: category.value }, null, 8, ["category"]),
                category.value.is_anchor == 1 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "container"
                }, [
                  createVNode("div", { class: "row" }, [
                    createVNode(unref(_sfc_main$a), { class: "col-lg-3" }),
                    createVNode(unref(_sfc_main$1), { class: "col-lg-9" })
                  ]),
                  categoryForm.value != null ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(unref(_sfc_main$b), {
                      category_id: category.value.id,
                      type: "category",
                      categories: categories.value
                    }, null, 8, ["category_id", "categories"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Category-BCclQ0S9.js.map
