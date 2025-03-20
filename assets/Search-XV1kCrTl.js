import { ref, reactive, computed, onUpdated, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, withModifiers, toDisplayString, Fragment, renderList, unref, useSSRContext, onMounted, createTextVNode, watch, onBeforeUnmount } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { i as isServer, C as CONFIG_JSON, r as extractSearchFilters } from "../entry-server.js";
import { _ as _sfc_main$9 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$a } from "./Breadcrumbs-BN1xAQs-.js";
import { vBToggle } from "bootstrap-vue-next/directives/BToggle";
import { BCollapse } from "bootstrap-vue-next/components/BCollapse";
import VueRangeSlider from "vue-3-slider-component";
import { BFormSelect } from "bootstrap-vue-next/components/BFormSelect";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BPagination } from "bootstrap-vue-next/components/BPagination";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$7 } from "./ProductsSection-BPtJ28sJ.js";
import { _ as _sfc_main$8 } from "./AdvertisingBanner-BW7fLnPX.js";
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
import "bootstrap-vue-next/components/BContainer";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "bootstrap-vue-next/components/BBadge";
import "./FooterCopyRight-CMwhH0WW.js";
import "mobile-device-detect";
import "bootstrap-vue-next/components/BCarousel";
import "./useWindowSize-DyvB4JBF.js";
import "./base-_onQVhQ4.js";
import "@element-plus/icons-vue";
import "./BlockSimple-BHbXwFf2.js";
import "vue-cookies";
import "./ProductCard-zGPQ-XdA.js";
import "./heart-DpQotoa5.js";
import "./default-placeholder-image-BaAVikZT.js";
const _sfc_main$6 = {
  __name: "SearchProductFilterContent",
  __ssrInlineRender: true,
  emits: ["clicked"],
  setup(__props, { emit: __emit }) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const dontShowActiveFilters = ref(false);
    const enableCross = ref(false);
    const formatter = ref("€ {value}");
    const min = ref(null);
    const max = ref(null);
    const inputRefs = reactive({});
    const priceFilter = computed({
      get() {
        return store.getters["search/getPriceFilter"];
      },
      set(val) {
        store.commit("search/setPriceFilter", { data: val, store });
        const query = { ...route.query };
        if (store.getters["search/getIsPriceFilterActive"]) {
          query["filter-price"] = `${val[0]}-${val[1]}`;
        } else {
          delete query["filter-price"];
        }
        delete query["page"];
        router.replace({ path: route.path, query });
        min.value = null;
        max.value = null;
      }
    });
    const productFilters = computed(() => {
      const filters = store.getters["search/getProductFilters"] || [];
      return filters;
    });
    const searchWord = computed(() => route.query.q || "");
    const filterItemsSelected = computed(
      () => store.getters["search/getActiveFilter"]
    );
    const isPriceFilterActive = computed(
      () => store.getters["search/getIsPriceFilterActive"]
    );
    const priceFilterMin = computed(
      () => store.getters["search/getPriceFilterMin"]
    );
    const priceFilterMax = computed(
      () => store.getters["search/getPriceFilterMax"]
    );
    const priceFilterLabel = computed(() => {
      const filter = productFilters.value.find(
        (filter2) => filter2.attribute_code === "price"
      );
      return filter ? filter.label : null;
    });
    function onChangeFilter(event) {
      const value = event.target.value;
      const filter = value.split(",").reduce((acc, part) => {
        const [key, val] = part.split(":");
        acc[key] = val;
        return acc;
      }, {});
      if (filter.value !== void 0) {
        if (event.target.checked) {
          store.commit("search/setActiveFilter", { filter, store });
        } else {
          store.commit("search/removeActiveFilter", { filter, store });
        }
      }
      updateUrlFilters();
    }
    function removeSelectedItem(id) {
      const filter = { value: id };
      if (inputRefs[id] && inputRefs[id]) {
        inputRefs[id].checked = false;
      }
      store.commit("search/removeActiveFilter", { filter, store });
      updateUrlFilters();
    }
    function removePriceFilter() {
      store.commit("search/setPriceFilter", {
        data: [priceFilterMin.value, priceFilterMax.value],
        store
      });
      const query = { ...route.query };
      delete query["filter-price"];
      delete query["page"];
      router.replace({ path: route.path, query });
    }
    function updateUrlFilters(removeAllFilter = false) {
      const activeFilters = filterItemsSelected.value.reduce((acc, val) => {
        if (acc[val.attribute_code]) {
          acc[val.attribute_code].push(val.value);
        } else {
          acc[val.attribute_code] = [val.value];
        }
        return acc;
      }, {});
      const query = { ...route.query };
      for (const key in query) {
        if (key.startsWith("filter-") && removeAllFilter) {
          delete query[key];
        } else if (key.startsWith("filter-") && key !== "filter-price") {
          delete query[key];
        }
      }
      for (const attr in activeFilters) {
        query[`filter-${attr}`] = activeFilters[attr].toString();
      }
      delete query["page"];
      router.replace({ path: route.path, query });
    }
    onUpdated(() => {
      if (filterItemsSelected.value && filterItemsSelected.value.length) {
        filterItemsSelected.value.forEach((filter) => {
          if (inputRefs[filter.value]) {
            inputRefs[filter.value].checked = true;
          }
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BCollapse = BCollapse;
      const _directive_b_toggle = vBToggle;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "productFilterContent filter-content" }, _attrs))}><div class="d-lg-none filter-top"><span class="filter-collapse-heading">${ssrInterpolate(_ctx.$t("filters"))}</span><a class="lnr lnr-cross"></a></div>`);
      if (!dontShowActiveFilters.value) {
        _push(`<div class="category"><span class="filter--block-heading">${ssrInterpolate(searchWord.value)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isPriceFilterActive.value || filterItemsSelected.value.length) {
        _push(`<div class="active-filters"><a${ssrRenderAttrs(mergeProps({ class: "filter--block-heading filter--collapse" }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, void 0, void 0, { "active-filters": true })))}>${ssrInterpolate(_ctx.$t("used_filters"))}:</a><a class="delete-active-filters"><i class="lnr lnr-cross"></i></a>`);
        _push(ssrRenderComponent(_component_BCollapse, {
          visible: "",
          id: "active-filters"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul class="active-filters-list"${_scopeId}>`);
              if (isPriceFilterActive.value) {
                _push2(`<li${_scopeId}><a${_scopeId}><i class="lnr lnr-cross"${_scopeId}></i></a><span class="active-filter--name"${_scopeId}>${ssrInterpolate(`${priceFilterLabel.value ? priceFilterLabel.value : "Prijs"}`)}: ${ssrInterpolate(priceFilter.value[0] + " - " + priceFilter.value[1])}</span></li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--[-->`);
              ssrRenderList(filterItemsSelected.value, (activeFilterItem, index) => {
                _push2(`<li${_scopeId}><a href="#"${_scopeId}><i class="lnr lnr-cross"${_scopeId}></i></a><span class="active-filter--name"${_scopeId}>${ssrInterpolate(activeFilterItem.type_label)}: ${ssrInterpolate(activeFilterItem.label)}</span></li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                createVNode("ul", { class: "active-filters-list" }, [
                  isPriceFilterActive.value ? (openBlock(), createBlock("li", { key: 0 }, [
                    createVNode("a", {
                      onClick: withModifiers(removePriceFilter, ["prevent"])
                    }, [
                      createVNode("i", { class: "lnr lnr-cross" })
                    ]),
                    createVNode("span", { class: "active-filter--name" }, toDisplayString(`${priceFilterLabel.value ? priceFilterLabel.value : "Prijs"}`) + ": " + toDisplayString(priceFilter.value[0] + " - " + priceFilter.value[1]), 1)
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(filterItemsSelected.value, (activeFilterItem, index) => {
                    return openBlock(), createBlock("li", {
                      key: index + Date.now()
                    }, [
                      createVNode("a", {
                        onClick: withModifiers(($event) => removeSelectedItem(activeFilterItem.value), ["prevent"]),
                        href: "#"
                      }, [
                        createVNode("i", { class: "lnr lnr-cross" })
                      ], 8, ["onClick"]),
                      createVNode("span", { class: "active-filter--name" }, toDisplayString(activeFilterItem.type_label) + ": " + toDisplayString(activeFilterItem.label), 1)
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(productFilters.value, (prodFilter) => {
        _push(`<div>`);
        if (prodFilter.attribute_code == "price") {
          _push(`<div class="price"><a${ssrRenderAttrs(mergeProps({ class: "filter--block-heading filter--collapse" }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, void 0, void 0, { "price-filter": true })))}>${ssrInterpolate(prodFilter.label)}</a>`);
          _push(ssrRenderComponent(_component_BCollapse, {
            visible: "",
            id: "price-filter"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="range-slider"${_scopeId}>`);
                if (!unref(isServer)) {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(VueRangeSlider), {
                    min: priceFilterMin.value,
                    max: priceFilterMax.value,
                    "enable-cross": enableCross.value,
                    formatter: formatter.value,
                    modelValue: priceFilter.value,
                    "onUpdate:modelValue": ($event) => priceFilter.value = $event,
                    logarithmic: true,
                    tooltip: null,
                    lazy: true,
                    onDragging: (value, index) => {
                      if (index) {
                        max.value = value[index];
                      } else {
                        min.value = value[index];
                      }
                    }
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="range-values d-flex justify-content-between"${_scopeId}><span${_scopeId}>€${ssrInterpolate(min.value ?? priceFilter.value[0])}</span><span${_scopeId}>€${ssrInterpolate(max.value ?? priceFilter.value[1])}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "range-slider" }, [
                    !unref(isServer) ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(unref(VueRangeSlider), {
                        min: priceFilterMin.value,
                        max: priceFilterMax.value,
                        "enable-cross": enableCross.value,
                        formatter: formatter.value,
                        modelValue: priceFilter.value,
                        "onUpdate:modelValue": ($event) => priceFilter.value = $event,
                        logarithmic: true,
                        tooltip: null,
                        lazy: true,
                        onDragging: (value, index) => {
                          if (index) {
                            max.value = value[index];
                          } else {
                            min.value = value[index];
                          }
                        }
                      }, null, 8, ["min", "max", "enable-cross", "formatter", "modelValue", "onUpdate:modelValue", "onDragging"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "range-values d-flex justify-content-between" }, [
                      createVNode("span", null, "€" + toDisplayString(min.value ?? priceFilter.value[0]), 1),
                      createVNode("span", null, "€" + toDisplayString(max.value ?? priceFilter.value[1]), 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (prodFilter.attribute_code != "size" && prodFilter.attribute_code != "price") {
          _push(`<div class="brands"><a${ssrRenderAttrs(mergeProps({ class: "filter--block-heading filter--collapse" }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, void 0, void 0, { "brands-filter": true })))}>${ssrInterpolate(_ctx.$t(prodFilter.label))}</a>`);
          _push(ssrRenderComponent(_component_BCollapse, {
            visible: "",
            id: "brands-filter",
            class: "brands-filter"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(prodFilter.options, (brandsFilterItem, index) => {
                  _push2(`<div class="d-flex justify-content-between"${_scopeId}><label${ssrRenderAttr("for", brandsFilterItem.value)} class="d-flex align-items-center"${_scopeId}><input type="checkbox"${ssrRenderAttr("name", brandsFilterItem.label)}${ssrRenderAttr("id", brandsFilterItem.value)}${ssrRenderAttr(
                    "value",
                    `attribute_code:` + prodFilter.attribute_code + `,type_label:` + prodFilter.label + `,value:` + brandsFilterItem.value + `,label:` + brandsFilterItem.label
                  )}${_scopeId}><span class="fake-input"${_scopeId}></span><span class="fake-label"${_scopeId}>${ssrInterpolate(brandsFilterItem.label)}</span></label><span class="number-available"${_scopeId}>(${ssrInterpolate(brandsFilterItem.count)})</span></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(prodFilter.options, (brandsFilterItem, index) => {
                    return openBlock(), createBlock("div", {
                      class: "d-flex justify-content-between",
                      key: index + Date.now()
                    }, [
                      createVNode("label", {
                        for: brandsFilterItem.value,
                        class: "d-flex align-items-center"
                      }, [
                        (openBlock(), createBlock("input", {
                          type: "checkbox",
                          key: brandsFilterItem.value,
                          name: brandsFilterItem.label,
                          id: brandsFilterItem.value,
                          ref_for: true,
                          ref: (el) => inputRefs[brandsFilterItem.value] = el,
                          value: `attribute_code:` + prodFilter.attribute_code + `,type_label:` + prodFilter.label + `,value:` + brandsFilterItem.value + `,label:` + brandsFilterItem.label,
                          onClick: ($event) => onChangeFilter($event)
                        }, null, 8, ["name", "id", "value", "onClick"])),
                        createVNode("span", { class: "fake-input" }),
                        createVNode("span", { class: "fake-label" }, toDisplayString(brandsFilterItem.label), 1)
                      ], 8, ["for"]),
                      createVNode("span", { class: "number-available" }, "(" + toDisplayString(brandsFilterItem.count) + ")", 1)
                    ]);
                  }), 128))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (prodFilter.attribute_code == "size") {
          _push(`<div class="size"><a${ssrRenderAttrs(mergeProps({ class: "filter--block-heading filter--collapse mb-15" }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, void 0, void 0, { "size-filter": true })))}>Kies je maat</a>`);
          _push(ssrRenderComponent(_component_BCollapse, {
            visible: "",
            id: "size-filter",
            class: "size-filter"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<ul class="available-sizes"${_scopeId}><!--[-->`);
                ssrRenderList(prodFilter.options, (sizeFilterItem, index) => {
                  _push2(`<li${_scopeId}><label${ssrRenderAttr("for", sizeFilterItem.name)} class="d-flex align-items-center"${_scopeId}><input type="checkbox"${ssrRenderAttr("id", sizeFilterItem.value)}${ssrRenderAttr("name", sizeFilterItem.label)}${ssrRenderAttr(
                    "value",
                    `attribute_code:` + prodFilter.attribute_code + `,type_label:` + prodFilter.label + `,value:` + sizeFilterItem.value + `,label:` + sizeFilterItem.label
                  )}${_scopeId}><span class="fake-input"${_scopeId}></span><span class="fake-label"${_scopeId}>${ssrInterpolate(sizeFilterItem.name)}</span></label></li>`);
                });
                _push2(`<!--]--></ul>`);
              } else {
                return [
                  createVNode("ul", { class: "available-sizes" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(prodFilter.options, (sizeFilterItem, index) => {
                      return openBlock(), createBlock("li", {
                        key: index + Date.now()
                      }, [
                        createVNode("label", {
                          for: sizeFilterItem.name,
                          class: "d-flex align-items-center"
                        }, [
                          (openBlock(), createBlock("input", {
                            type: "checkbox",
                            key: sizeFilterItem.value,
                            id: sizeFilterItem.value,
                            name: sizeFilterItem.label,
                            ref_for: true,
                            ref: sizeFilterItem.value,
                            value: `attribute_code:` + prodFilter.attribute_code + `,type_label:` + prodFilter.label + `,value:` + sizeFilterItem.value + `,label:` + sizeFilterItem.label,
                            onChange: ($event) => onChangeFilter($event)
                          }, null, 40, ["id", "name", "value", "onChange"])),
                          createVNode("span", { class: "fake-input" }),
                          createVNode("span", { class: "fake-label" }, toDisplayString(sizeFilterItem.name), 1)
                        ], 8, ["for"])
                      ]);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/SearchProductFilterContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "SearchProductFilter",
  __ssrInlineRender: true,
  props: {
    dontShowActiveFilters: {
      type: Boolean
    }
  },
  setup(__props) {
    const filterExpanded = ref(false);
    const overlayIsReady = ref(false);
    const toggleFilter = () => {
      filterExpanded.value = !filterExpanded.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "filter" }, _attrs))}><a class="filter-opener d-lg-none">Filters<span class="plus">+</span></a><div class="${ssrRenderClass([{ show: filterExpanded.value }, "filter-overlay"])}"></div>`);
      if (overlayIsReady.value) {
        _push(`<div class="${ssrRenderClass([{ show: filterExpanded.value }, "fake-overlay"])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ show: filterExpanded.value }, "filter-collapse"])}">`);
      _push(ssrRenderComponent(_sfc_main$6, { onClicked: toggleFilter }, null, _parent));
      _push(`</div></aside>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/SearchProductFilter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
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
    const sorting = computed(() => store.getters["search/getSorting"]);
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
    const changeSorting = (sortVal) => {
      store.commit("search/setSorting", { data: sortVal, store });
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_pagination = BPagination;
      const _component_b_link = BLink;
      const _component_b_form_select = BFormSelect;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-filter" }, _attrs))}><div class="cst-pagination-bar"><label>Pagina<span>${ssrInterpolate(currentPage.value)}</span>van<span>${ssrInterpolate(Math.ceil(totalProds.value / prodsPerPage.value))}</span></label>`);
      _push(ssrRenderComponent(_component_b_pagination, {
        "total-rows": totalProds.value,
        "per-page": prodsPerPage.value,
        "model-value": currentPage.value,
        "onUpdate:modelValue": changePage,
        class: "cst-pagination",
        "aria-controls": "cat-item"
      }, {
        page: withCtx(({ page }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_b_link, {
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
              createVNode(_component_b_link, {
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
      _push(ssrRenderComponent(_component_b_form_select, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/SearchPageContentFilter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
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
        _push(ssrRenderComponent(_sfc_main$7, { "products-list": productList.value }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/SearchFilteredProducts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "SearchPageContent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-content" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/SearchPageContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ProductsListingSearch",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-listing" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$8, { class: "col-12 my-30 mt-lg-0" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/ProductsListingSearch.vue");
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
      _push(ssrRenderComponent(_sfc_main$9, mergeProps({ wrapperClass: "search" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            _push2(`<div class="container"${_scopeId}><div class="row"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, { class: "col-lg-3" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { class: "col-lg-9" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_sfc_main$a),
              createVNode("div", { class: "container" }, [
                createVNode("div", { class: "row" }, [
                  createVNode(_sfc_main$5, { class: "col-lg-3" }),
                  createVNode(_sfc_main$1, { class: "col-lg-9" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Search-XV1kCrTl.js.map
