import { ref, computed, watch, onMounted, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, isRef, useSSRContext, onUnmounted, createBlock, createCommentVNode, openBlock } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$7 } from "./AppLayout-CdCGV8yT.js";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { useGtm } from "@gtm-support/vue-gtm";
import { useHead } from "@unhead/vue";
import { C as CONFIG_JSON } from "../entry-server.js";
import { _ as _sfc_main$8 } from "./Breadcrumbs-DwhHUqbs.js";
import { _ as _sfc_main$9 } from "./CategoryOverview-BAz7TrE4.js";
import { BFormSelect } from "bootstrap-vue-next/components/BFormSelect";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BPagination } from "bootstrap-vue-next/components/BPagination";
import { useI18n } from "vue-i18n";
import "bootstrap-vue-next/directives/BToggle";
import "bootstrap-vue-next/components/BCollapse";
import "vue-3-slider-component";
import { _ as _sfc_main$5 } from "./ProductsSection-BLxEW36e.js";
import { _ as _sfc_main$6 } from "./AdvertisingBanner-BW7fLnPX.js";
import { _ as _sfc_main$a } from "./DynamicForms-BMAeaiy-.js";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "axios";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/components/BBadge";
import "./FooterCopyRight-CMwhH0WW.js";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BNav";
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
import "@vue/shared";
import "lodash-unified";
import "bootstrap-vue-next/components/BContainer";
import "./ProductCard-Bq44aF8S.js";
import "./default-placeholder-image-BaAVikZT.js";
import "./ProductAddtoCart-D_Yf37pC.js";
import "bootstrap-vue-next/components/BCarousel";
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
    let selectedCategory = ref([]);
    let subCategoriesOptions = ref([]);
    let childCategoriesOptions = ref([]);
    let hasSubCategories = ref(false);
    let hasChildCategories = ref(false);
    let selectedSubCategories = ref();
    const selectedChildCategory = ref(null);
    computed(() => store.getters["category/getSorting"]);
    const currentPage = computed(() => store.getters["category/getCurrentPage"]);
    const totalProds = computed(() => store.getters["category/getTotalProducts"]);
    const prodsPerPage = computed(() => store.getters["category/getProductsPerPage"]);
    const totalPages = computed(() => store.getters["category/getTotalPages"]);
    const category = computed(() => store.getters["category/getCurrentCategory"]);
    const menuItems = computed(() => store.getters["sidebar/getSidebarCategoryItems"]);
    watch(selectedCategory, () => {
      menuItems.value.forEach((category2) => {
        if (category2.id == selectedCategory.value) {
          hasSubCategories.value = parseInt(category2.children_count) > 0;
          if (hasSubCategories) {
            subCategoriesOptions.value = category2.children;
          }
          hasChildCategories.value = parseInt(category2.children_count) > 0;
          if (hasChildCategories) {
            hasChildCategories.value = false;
          }
          router.push(`/${category2.url_path}`);
        }
      });
    });
    watch(selectedSubCategories, () => {
      subCategoriesOptions.value.forEach((category2) => {
        if (category2.id == selectedSubCategories.value) {
          hasChildCategories.value = parseInt(category2.children_count) > 0;
          if (hasChildCategories) {
            childCategoriesOptions.value = category2.children;
          }
          router.push(`/${category2.url_path}`);
        }
      });
    });
    watch(selectedChildCategory, () => {
      childCategoriesOptions.value.forEach((category2) => {
        if (category2.id == selectedChildCategory.value) {
          router.push(`/${category2.url_path}`);
        }
      });
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
      let converArray = category.value.path.split("/");
      if (converArray[3]) {
        selectedCategory.value = converArray[3];
      }
      if (converArray[4]) {
        selectedSubCategories.value = converArray[4];
      }
      if (converArray[5]) {
        selectedChildCategory.value = converArray[5];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BPagination = BPagination;
      const _component_BLink = BLink;
      const _component_BFormSelect = BFormSelect;
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
      _push(`</div></div><div class="pagination-bar-down"><div class="left"><div class="display-drop"><div class="dropdown-category d-flex">`);
      _push(ssrRenderComponent(_component_BFormSelect, {
        modelValue: unref(selectedCategory),
        "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : selectedCategory = $event,
        options: menuItems.value,
        class: "rounded-2 w-25",
        "value-field": "id",
        "text-field": "name"
      }, null, _parent));
      if (unref(hasSubCategories)) {
        _push(ssrRenderComponent(_component_BFormSelect, {
          modelValue: unref(selectedSubCategories),
          "onUpdate:modelValue": ($event) => isRef(selectedSubCategories) ? selectedSubCategories.value = $event : selectedSubCategories = $event,
          options: unref(subCategoriesOptions),
          class: "mx-5 mx-md-10 w-25 rounded-2",
          "value-field": "id",
          "text-field": "name"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(hasChildCategories)) {
        _push(ssrRenderComponent(_component_BFormSelect, {
          modelValue: selectedChildCategory.value,
          "onUpdate:modelValue": ($event) => selectedChildCategory.value = $event,
          options: unref(childCategoriesOptions),
          class: "w-25 rounded-2",
          "value-field": "id",
          "text-field": "name"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><p class="fw-bold article-para mt-15">${ssrInterpolate(_ctx.$t("articles_match", { totalproduct: totalProds.value }))}</p><p class="article-para">${ssrInterpolate(_ctx.$t("search_function"))}</p></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/CategoryPageContentFilter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "FilteredProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isLoading = computed(() => store.getters["category/getLoadProducts"]);
    const productList = computed(() => store.getters["category/getShowProducts"]);
    const totalProducts = computed(
      () => store.getters["category/getTotalProducts"]
    );
    const isAlive = () => {
      setTimeout(() => {
        if (isLoading.value) {
          window.location.reload();
        }
      }, 3e3);
    };
    onMounted(() => {
      isAlive();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filtered-products" }, _attrs))}>`);
      if (isLoading.value) {
        _push(`<div class="loader-box"><div class="reverse-spinner"></div></div>`);
      } else if (totalProducts.value === 0) {
        _push(`<div>NO Products Found</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(_sfc_main$5), { "products-list": productList.value }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/FilteredProducts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CategoryPageContent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-content" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`<div class="pagination-bottom">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/CategoryPageContent.vue");
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
      _push(`<section class="bottom-txt"><div>${category.value.description ?? ""}</div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/components/ProductListingV2.vue");
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
    const isClient = ref(false);
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
    onMounted(() => {
      setBreadcrumb();
      isClient.value = true;
    });
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
      if (isClient.value) {
        _push(ssrRenderComponent(_sfc_main$7, _attrs, {
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
                  _push2(`<div class="px-md-15 px-10"${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(_sfc_main$1), { class: "" }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (categoryForm.value != null) {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(_sfc_main$a), {
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
              if (category.value.brand != null) {
                _push2(`<div${_scopeId}><div class="clearfix"${_scopeId}><div class="category_description"${_scopeId}>${category.value.description ?? ""}</div><div class="brand_logo"${_scopeId}><img${ssrRenderAttr("src", category.value.brand.logo)}${_scopeId}></div></div>`);
                _push2(ssrRenderComponent(unref(_sfc_main$9), { category: category.value }, null, _parent2, _scopeId));
                if (category.value.is_anchor == 1) {
                  _push2(`<div class="px-md-15 px-10"${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(_sfc_main$1), { class: "px-md-15 px-10" }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (categoryForm.value != null) {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(_sfc_main$a), {
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
                    class: "px-md-15 px-10"
                  }, [
                    createVNode(unref(_sfc_main$1), { class: "" })
                  ])) : createCommentVNode("", true),
                  categoryForm.value != null ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode(unref(_sfc_main$a), {
                      category_id: category.value.id,
                      type: "category"
                    }, null, 8, ["category_id"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                category.value.brand != null ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "clearfix" }, [
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
                    class: "px-md-15 px-10"
                  }, [
                    createVNode(unref(_sfc_main$1), { class: "px-md-15 px-10" })
                  ])) : createCommentVNode("", true),
                  categoryForm.value != null ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(unref(_sfc_main$a), {
                      category_id: category.value.id,
                      type: "category",
                      categories: categories.value
                    }, null, 8, ["category_id", "categories"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/Category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Category-eF0T-C1T.js.map
