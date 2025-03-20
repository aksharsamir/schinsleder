import { onMounted, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, useSSRContext, watch, onBeforeUnmount } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { C as CONFIG_JSON, r as extractSearchFilters } from "../entry-server.js";
import { _ as _sfc_main$5 } from "./AppLayout-CdCGV8yT.js";
import { _ as _sfc_main$6 } from "./Breadcrumbs-DwhHUqbs.js";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BPagination } from "bootstrap-vue-next/components/BPagination";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$4 } from "./ProductsSection-BLxEW36e.js";
import { useHead } from "@unhead/vue";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "axios";
import "vuex-router-sync";
import "vue3-lazyload";
import "@gtm-support/vue-gtm";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/vue-fontawesome";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
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
import "bootstrap-vue-next/components/BNav";
import "vue-cookies";
import "bootstrap-vue-next/components/BContainer";
import "./ProductCard-Bq44aF8S.js";
import "./default-placeholder-image-BaAVikZT.js";
import "./ProductAddtoCart-D_Yf37pC.js";
const _sfc_main$3 = {
  __name: "SearchPageContentFilter",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    onMounted(async () => {
      var _a;
      const { page } = route.query;
      const { path } = route;
      const query = { ...route.query };
      if (page && totalPages.value < parseInt(page)) {
        delete query["page"];
      }
      const pageSize = (_a = CONFIG_JSON.products) == null ? void 0 : _a.perPage;
      const perPage = store.getters["search/getProductsPerPage"];
      if (perPage != pageSize) query["page-size"] = perPage;
      router.replace({ path, query });
    });
    computed(() => {
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
    computed(() => store.getters["search/getSorting"]);
    const currentPage = computed(() => store.getters["search/getCurrentPage"]);
    const totalProds = computed(() => store.getters["search/getTotalProducts"]);
    const prodsPerPage = computed(() => store.getters["search/getProductsPerPage"]);
    const totalPages = computed(() => store.getters["search/getTotalPages"]);
    const changePage = (pageNo) => {
      router.currentRoute.value.meta = "top";
      store.commit("search/setCurrentPage", { pageNo, store });
      const { path } = route;
      const query = { ...route.query };
      if (pageNo != 1) query["page"] = pageNo;
      else delete query["page"];
      router.replace({ path, query });
    };
    const goToPage = (page) => {
      const { path } = route;
      const query = { ...route.query };
      if (page != 1) query["page"] = page;
      else delete query["page"];
      return { path, query };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BPagination = BPagination;
      const _component_BLink = BLink;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-filter" }, _attrs))}><div class="cst-pagination-bar"><label class="pagination-bar-title"><span class="pagination-text"> Pagina </span><span class="fw-bold">${ssrInterpolate(currentPage.value)}</span><span class="pagination-text"> van </span><span class="fw-bold">${ssrInterpolate(Math.ceil(totalProds.value / prodsPerPage.value))}</span></label><div class="d-flex align-items-center"><span class="pagination-btn">Pagina:</span>`);
      _push(ssrRenderComponent(_component_BPagination, {
        "total-rows": totalProds.value,
        "per-page": prodsPerPage.value,
        "model-value": currentPage.value,
        "onUpdate:modelValue": changePage,
        class: "cst-pagination align-items-center mb-0",
        "aria-controls": "cat-item",
        limit: "3",
        "hide-goto-end-buttons": "true"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BLink, {
              class: "page-link",
              to: goToPage(_ctx.page)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.page)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.page), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BLink, {
                class: "page-link",
                to: goToPage(_ctx.page)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.page), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><p class="fw-bold article-para mt-15">${ssrInterpolate(unref(t)("articles_match", { totalproduct: totalProds.value }))}</p><p class="article-para">${ssrInterpolate(_ctx.$t("search_function"))}</p></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/search/SearchPageContentFilter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "SearchFilteredProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isLoading = computed(() => store.getters["search/getLoadProducts"]);
    const productList = computed(() => store.getters["search/getShowProducts"]);
    const totalProducts = computed(() => store.getters["search/getTotalProducts"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filtered-products" }, _attrs))}>`);
      if (isLoading.value) {
        _push(`<div class="loader-box"><div class="reverse-spinner"></div></div>`);
      } else if (totalProducts.value === 0) {
        _push(`<div>NO Products Found</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(_sfc_main$4), { "products-list": productList.value }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/search/SearchFilteredProducts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ProductsListingSearch",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-listing" }, _attrs))}><section class="page-content">`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`<div class="pagination-bottom">`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/search/ProductsListingSearch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: () => "Search",
      meta: [
        { name: "title", content: () => "Search" },
        { name: "keywords", content: () => "Search" },
        { name: "description", content: () => "Search" }
      ]
    });
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const searchWord = computed(() => {
      return route.query.q || "";
    });
    watch(searchWord, async (newSearchWord) => {
      var _a;
      if (newSearchWord) {
        await store.dispatch("search/load", { search: newSearchWord, store });
        const bcrumb = { current: newSearchWord, routes: [] };
        store.commit("breadcrumbs/set", bcrumb);
        const { path } = route;
        const query = { ...route.query };
        const pageSize = (_a = CONFIG_JSON.products) == null ? void 0 : _a.perPage;
        const perPage = store.getters["search/getProductsPerPage"];
        if (perPage !== pageSize) query["page-size"] = perPage;
        router.push({ path, query });
      }
    });
    onMounted(async () => {
      if (searchWord.value) {
        const filter = extractSearchFilters(route);
        await store.dispatch("search/load", {
          search: searchWord.value,
          filter,
          store
        });
      }
      const bcrumb = { current: route.query.q, routes: [] };
      store.commit("breadcrumbs/set", bcrumb);
    });
    onBeforeUnmount(() => {
      store.commit("search/setLoadProducts", false);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$5), mergeProps({ wrapperClass: "search" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent2, _scopeId));
            _push2(`<div class="search-page"${_scopeId}><div class="px-md-15 px-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$1), { class: "" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(unref(_sfc_main$6)),
              createVNode("div", { class: "search-page" }, [
                createVNode("div", { class: "px-md-15 px-10" }, [
                  createVNode(unref(_sfc_main$1), { class: "" })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/Search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Search-BSic8pUO.js.map
