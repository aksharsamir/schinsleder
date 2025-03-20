import { BLink } from "bootstrap-vue-next/components/BLink";
import { ref, reactive, computed, onMounted, onUpdated, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, withModifiers, Fragment, renderList, unref, useSSRContext, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { vBToggle } from "bootstrap-vue-next/directives/BToggle";
import { BCollapse } from "bootstrap-vue-next/components/BCollapse";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import VueRangeSlider from "vue-3-slider-component";
import { _ as _sfc_main$3 } from "./ProductsSection-BPtJ28sJ.js";
const _sfc_main$2 = {
  __name: "ProductFilterContent",
  __ssrInlineRender: true,
  props: {
    dontShowActiveFilters: Boolean
  },
  emits: ["clicked"],
  setup(__props, { emit: __emit }) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const readMore = ref({});
    const min = ref(null);
    const max = ref(null);
    const enableCross = ref(false);
    const formatter = ref("€ {value}");
    const refs = reactive({});
    const emit = __emit;
    const filterItemsSelected = computed(
      () => store.getters["category/getActiveFilter"]
    );
    const category = computed(() => {
      const catData = store.getters["category/getCurrentCategory"];
      if (catData) {
        catData.name = catData.name.charAt(0).toUpperCase() + catData.name.slice(1);
        if (catData.children) {
          catData.children.forEach((subcat, index) => {
            var newName = subcat.name.charAt(0).toUpperCase() + subcat.name.slice(1);
            catData.children[index].name = newName;
          });
        }
      }
      return catData;
    });
    const isPriceFilterActive = computed(
      () => store.getters["category/getIsPriceFilterActive"]
    );
    const priceFilterMin = computed(
      () => store.getters["category/getPriceFilterMin"]
    );
    const priceFilterMax = computed(
      () => store.getters["category/getPriceFilterMax"]
    );
    const priceFilterLabel = computed(() => {
      if (productFilters.value) {
        const priceFilter2 = productFilters.value.find(
          (filter) => filter.attribute_code == "price"
        );
        return priceFilter2 && priceFilter2.label;
      }
      return null;
    });
    const priceFilter = computed({
      get() {
        return store.getters["category/getPriceFilter"];
      },
      set(val) {
        store.commit("category/setPriceFilter", { data: val, store });
        const path = "/" + category.value.url_path;
        const query = { ...route.query };
        if (isPriceFilterActive.value) {
          query["filter-price"] = `${val[0]}-${val[1]}`;
        } else {
          delete query["filter-price"];
        }
        delete query["page"];
        router.replace({ path, query });
        min.value = null;
        max.value = null;
      }
    });
    const productFilters = computed(() => {
      const prodFilters = store.getters["category/getProductFilters"];
      if (prodFilters != null && Symbol.iterator in Object(prodFilters)) {
        prodFilters.forEach((filter, index) => {
          prodFilters[index].label = filter.label.charAt(0).toUpperCase() + filter.label.slice(1);
          prodFilters[index].options.forEach((option, optIndex) => {
            prodFilters[index].options[optIndex].label = option.label.charAt(0).toUpperCase() + option.label.slice(1);
          });
        });
      }
      return prodFilters;
    });
    const categories = computed(() => {
      var _a;
      return (_a = category.value) == null ? void 0 : _a.children;
    });
    const toggleFilter = (event) => {
      emit("clicked", event);
    };
    const showMore = (id) => {
      readMore.value[id] = true;
    };
    const showLess = (id) => {
      readMore.value[id] = false;
    };
    const onChangeFilter = (event) => {
      const evSplit = event.target.value.split(",");
      const filter = {
        attribute_code: "",
        type_label: "",
        value: "",
        label: ""
      };
      evSplit.forEach((element) => {
        const part = element.split(":");
        if (part[0] == "attribute_code") {
          filter.attribute_code = part[1];
        } else if (part[0] == "type_label") {
          filter.type_label = part[1];
        } else if (part[0] == "value") {
          filter.value = part[1];
        } else if (part[0] == "label") {
          filter.label = part[1];
        }
      });
      if (typeof filter.value != "undefined") {
        if (event.target.checked) {
          store.commit("category/setActiveFilter", { data: filter, store });
        } else {
          store.commit("category/removeActiveFilter", { data: filter, store });
        }
      }
      updateUrlFilters();
    };
    const removeSelectedItem = (id) => {
      const filter = { value: id };
      if (refs && refs[id]) {
        refs[id].checked = false;
      }
      store.commit("category/removeActiveFilter", { data: filter, store });
      updateUrlFilters();
    };
    const removePriceFilter = () => {
      const priceFilter2 = [priceFilterMin.value, priceFilterMax.value];
      store.commit("category/setPriceFilter", { data: priceFilter2, store });
      const path = "/" + category.value.url_path;
      const query = { ...route.query };
      delete query["filter-price"];
      delete query["page"];
      router.replace({ path, query });
    };
    const removeAllActiveFilter = (filterItemsSelected2) => {
      filterItemsSelected2.forEach((filterItem) => {
        const { value } = filterItem;
        if (refs && refs[value]) {
          refs[value].checked = false;
        }
      });
      store.commit("category/removeAllActiveFilter", store);
      updateUrlFilters(true);
    };
    const updateUrlFilters = (removeAllFilter = false) => {
      const activeFilters = {};
      filterItemsSelected.value.forEach((val) => {
        if (activeFilters[val.attribute_code]) {
          activeFilters[val.attribute_code].push(val.value);
        } else {
          activeFilters[val.attribute_code] = [val.value];
        }
      });
      const path = "/" + category.value.url_path;
      const query = { ...route.query };
      for (const q in query) {
        if (q.startsWith("filter-") && removeAllFilter) {
          delete query[q];
        } else if (q.startsWith("filter-") && q !== "filter-price") {
          delete query[q];
        }
      }
      for (const attr in activeFilters) {
        query[`filter-${attr}`] = activeFilters[attr].toString();
      }
      delete query["page"];
      router.replace({ path, query });
    };
    onMounted(() => {
      filterItemsSelected.value.forEach((filterItem) => {
        refs[filterItem.value].checked = true;
      });
    });
    onUpdated(() => {
      if (filterItemsSelected.value && filterItemsSelected.value.length) {
        filterItemsSelected.value.forEach((filter) => {
          if (refs && refs[filter.value]) {
            refs[filter.value].checked = true;
          }
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_BLink = BLink;
      const _component_BCollapse = BCollapse;
      const _directive_b_toggle = vBToggle;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filter-content" }, _attrs))}><div class="d-lg-none filter-top"><span class="filter-collapse-heading">${ssrInterpolate(_ctx.$t("filters"))}</span>`);
      _push(ssrRenderComponent(_component_BLink, {
        class: "lnr lnr-chevron-left",
        onClick: toggleFilter
      }, null, _parent));
      _push(`</div>`);
      if (!__props.dontShowActiveFilters) {
        _push(`<div class="category"><span class="filter--block-heading">${ssrInterpolate((_a = category.value) == null ? void 0 : _a.name)}</span><ul class="category-list"><!--[-->`);
        ssrRenderList(categories.value, (categoryItem) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_BLink, {
            to: `/` + categoryItem.url_path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(categoryItem.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(categoryItem.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isPriceFilterActive.value || filterItemsSelected.value.length) {
        _push(`<div class="active-filters">`);
        _push(ssrRenderComponent(_component_BLink, mergeProps({
          class: "filter--block-heading filter--collapse",
          onClick: () => {
          }
        }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, void 0, void 0, { "active-filters": true })), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("used_filters"))}:`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("used_filters")) + ":", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BLink, {
          href: "#",
          class: "delete-active-filters",
          onClick: ($event) => removeAllActiveFilter(filterItemsSelected.value)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="lnr lnr-cross"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "lnr lnr-cross" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BCollapse, {
          visible: "",
          id: "active-filters"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul class="active-filters-list"${_scopeId}>`);
              if (isPriceFilterActive.value) {
                _push2(`<li${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BLink, { onClick: removePriceFilter }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="lnr lnr-cross"${_scopeId2}></i>`);
                    } else {
                      return [
                        createVNode("i", { class: "lnr lnr-cross" })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<span class="active-filter--name"${_scopeId}>${ssrInterpolate(`${priceFilterLabel.value ? priceFilterLabel.value : "Prijs"}`)}: ${ssrInterpolate(priceFilter.value[0] + " - " + priceFilter.value[1])}</span></li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--[-->`);
              ssrRenderList(filterItemsSelected.value, (activeFilterItem, index) => {
                _push2(`<li${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BLink, {
                  onClick: ($event) => removeSelectedItem(activeFilterItem.value),
                  href: "#"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="lnr lnr-cross"${_scopeId2}></i>`);
                    } else {
                      return [
                        createVNode("i", { class: "lnr lnr-cross" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<span class="active-filter--name"${_scopeId}>${ssrInterpolate(activeFilterItem == null ? void 0 : activeFilterItem.type_label)}: ${ssrInterpolate(activeFilterItem == null ? void 0 : activeFilterItem.label)}</span></li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                createVNode("ul", { class: "active-filters-list" }, [
                  isPriceFilterActive.value ? (openBlock(), createBlock("li", { key: 0 }, [
                    createVNode(_component_BLink, {
                      onClick: withModifiers(removePriceFilter, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "lnr lnr-cross" })
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "active-filter--name" }, toDisplayString(`${priceFilterLabel.value ? priceFilterLabel.value : "Prijs"}`) + ": " + toDisplayString(priceFilter.value[0] + " - " + priceFilter.value[1]), 1)
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(filterItemsSelected.value, (activeFilterItem, index) => {
                    return openBlock(), createBlock("li", { key: index }, [
                      createVNode(_component_BLink, {
                        onClick: withModifiers(($event) => removeSelectedItem(activeFilterItem.value), ["prevent"]),
                        href: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("i", { class: "lnr lnr-cross" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode("span", { class: "active-filter--name" }, toDisplayString(activeFilterItem == null ? void 0 : activeFilterItem.type_label) + ": " + toDisplayString(activeFilterItem == null ? void 0 : activeFilterItem.label), 1)
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
          _push(`<div class="price">`);
          _push(ssrRenderComponent(_component_BLink, mergeProps({
            class: "filter--block-heading filter--collapse",
            onClick: () => {
            }
          }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, void 0, void 0, { "price-filter": true })), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t(prodFilter.label))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t(prodFilter.label)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_BCollapse, {
            visible: "",
            id: "price-filter"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="range-slider"${_scopeId}><div${_scopeId}>`);
                _push2(ssrRenderComponent(unref(VueRangeSlider), {
                  min: priceFilterMin.value,
                  max: priceFilterMax.value,
                  "enable-cross": enableCross.value,
                  formatter: formatter.value,
                  modelValue: priceFilter.value,
                  "onUpdate:modelValue": ($event) => priceFilter.value = $event,
                  logarithmic: true,
                  tooltip: "",
                  lazy: true,
                  onDragging: (value, index) => {
                    if (index) {
                      max.value = value[index];
                    } else {
                      min.value = value[index];
                    }
                  }
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="range-values d-flex justify-content-between"${_scopeId}><span${_scopeId}>€${ssrInterpolate(min.value ?? priceFilter.value[0])}</span><span${_scopeId}>€${ssrInterpolate(max.value ?? priceFilter.value[1])}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "range-slider" }, [
                    createVNode("div", null, [
                      createVNode(unref(VueRangeSlider), {
                        min: priceFilterMin.value,
                        max: priceFilterMax.value,
                        "enable-cross": enableCross.value,
                        formatter: formatter.value,
                        modelValue: priceFilter.value,
                        "onUpdate:modelValue": ($event) => priceFilter.value = $event,
                        logarithmic: true,
                        tooltip: "",
                        lazy: true,
                        onDragging: (value, index) => {
                          if (index) {
                            max.value = value[index];
                          } else {
                            min.value = value[index];
                          }
                        }
                      }, null, 8, ["min", "max", "enable-cross", "formatter", "modelValue", "onUpdate:modelValue", "onDragging"])
                    ]),
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
          _push(`<div class="brands">`);
          _push(ssrRenderComponent(_component_BLink, mergeProps({
            class: "filter--block-heading filter--collapse",
            onClick: () => {
            }
          }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, `brands-filter-${prodFilter.attribute_code}`)), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t(prodFilter.label))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t(prodFilter.label)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_BCollapse, {
            visible: "",
            id: `brands-filter-${prodFilter.attribute_code}`,
            class: "brands-filter"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(prodFilter.options, (brandsFilterItem, index) => {
                  _push2(`<div${_scopeId}>`);
                  if (index < 10) {
                    _push2(`<div${_scopeId}><div class="d-flex justify-content-between"${_scopeId}><label${ssrRenderAttr("for", brandsFilterItem.value)} class="d-flex align-items-center"${_scopeId}><input type="checkbox"${ssrRenderAttr("name", brandsFilterItem.label)}${ssrRenderAttr("id", brandsFilterItem.value)}${ssrRenderAttr(
                      "value",
                      `attribute_code:` + prodFilter.attribute_code + `,type_label:` + prodFilter.label + `,value:` + brandsFilterItem.value + `,label:` + brandsFilterItem.label
                    )}${_scopeId}><span class="fake-input"${_scopeId}></span><span class="fake-label"${_scopeId}>${ssrInterpolate(brandsFilterItem == null ? void 0 : brandsFilterItem.label)}</span></label><span class="number-available"${_scopeId}>(${ssrInterpolate(brandsFilterItem == null ? void 0 : brandsFilterItem.count)})</span></div></div>`);
                  } else {
                    _push2(`<div${_scopeId}>`);
                    if (readMore.value[prodFilter.attribute_code]) {
                      _push2(`<div class="d-flex justify-content-between"${_scopeId}><label${ssrRenderAttr("for", brandsFilterItem.value)} class="d-flex align-items-center"${_scopeId}><input type="checkbox"${ssrRenderAttr("name", brandsFilterItem.label)}${ssrRenderAttr("id", brandsFilterItem.value)}${ssrRenderAttr(
                        "value",
                        `attribute_code:` + prodFilter.attribute_code + `,type_label:` + prodFilter.label + `,value:` + brandsFilterItem.value + `,label:` + brandsFilterItem.label
                      )}${_scopeId}><span class="fake-input"${_scopeId}></span><span class="fake-label"${_scopeId}>${ssrInterpolate(brandsFilterItem == null ? void 0 : brandsFilterItem.label)}</span></label><span class="number-available"${_scopeId}>(${ssrInterpolate(brandsFilterItem == null ? void 0 : brandsFilterItem.count)})</span></div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  }
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
                if (prodFilter.options.length > 10) {
                  _push2(`<div style="${ssrRenderStyle({ "width": "100%", "text-align": "left" })}"${_scopeId}>`);
                  if (!readMore.value[prodFilter.attribute_code]) {
                    _push2(`<div class="show-more-filter"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_BLink, {
                      class: "filter--block-heading",
                      style: { "display": "block", "cursor": "pointer" },
                      onClick: ($event) => showMore(prodFilter.attribute_code)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`Toon meer`);
                        } else {
                          return [
                            createTextVNode("Toon meer")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (readMore.value[prodFilter.attribute_code]) {
                    _push2(`<div class="show-more-filter"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_BLink, {
                      class: "filter--block-heading",
                      style: { "display": "block", "cursor": "pointer" },
                      onClick: ($event) => showLess(prodFilter.attribute_code)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(` Toon minder `);
                        } else {
                          return [
                            createTextVNode(" Toon minder ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
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
                  (openBlock(true), createBlock(Fragment, null, renderList(prodFilter.options, (brandsFilterItem, index) => {
                    return openBlock(), createBlock("div", {
                      key: brandsFilterItem.value
                    }, [
                      index < 10 ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("div", { class: "d-flex justify-content-between" }, [
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
                              ref: (el) => {
                                refs[brandsFilterItem.value] = el;
                              },
                              value: `attribute_code:` + prodFilter.attribute_code + `,type_label:` + prodFilter.label + `,value:` + brandsFilterItem.value + `,label:` + brandsFilterItem.label,
                              onClick: ($event) => onChangeFilter($event)
                            }, null, 8, ["name", "id", "value", "onClick"])),
                            createVNode("span", { class: "fake-input" }),
                            createVNode("span", { class: "fake-label" }, toDisplayString(brandsFilterItem == null ? void 0 : brandsFilterItem.label), 1)
                          ], 8, ["for"]),
                          createVNode("span", { class: "number-available" }, "(" + toDisplayString(brandsFilterItem == null ? void 0 : brandsFilterItem.count) + ")", 1)
                        ])
                      ])) : (openBlock(), createBlock("div", { key: 1 }, [
                        readMore.value[prodFilter.attribute_code] ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "d-flex justify-content-between"
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
                              ref: (el) => {
                                refs[brandsFilterItem.value] = el;
                              },
                              value: `attribute_code:` + prodFilter.attribute_code + `,type_label:` + prodFilter.label + `,value:` + brandsFilterItem.value + `,label:` + brandsFilterItem.label,
                              onClick: ($event) => onChangeFilter($event)
                            }, null, 8, ["name", "id", "value", "onClick"])),
                            createVNode("span", { class: "fake-input" }),
                            createVNode("span", { class: "fake-label" }, toDisplayString(brandsFilterItem == null ? void 0 : brandsFilterItem.label), 1)
                          ], 8, ["for"]),
                          createVNode("span", { class: "number-available" }, "(" + toDisplayString(brandsFilterItem == null ? void 0 : brandsFilterItem.count) + ")", 1)
                        ])) : createCommentVNode("", true)
                      ]))
                    ]);
                  }), 128)),
                  prodFilter.options.length > 10 ? (openBlock(), createBlock("div", {
                    key: 0,
                    style: { "width": "100%", "text-align": "left" }
                  }, [
                    !readMore.value[prodFilter.attribute_code] ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "show-more-filter"
                    }, [
                      createVNode(_component_BLink, {
                        class: "filter--block-heading",
                        style: { "display": "block", "cursor": "pointer" },
                        onClick: withModifiers(($event) => showMore(prodFilter.attribute_code), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Toon meer")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : createCommentVNode("", true),
                    readMore.value[prodFilter.attribute_code] ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "show-more-filter"
                    }, [
                      createVNode(_component_BLink, {
                        class: "filter--block-heading",
                        style: { "display": "block", "cursor": "pointer" },
                        onClick: withModifiers(($event) => showLess(prodFilter.attribute_code), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Toon minder ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
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
          _push(`<div class="size">`);
          _push(ssrRenderComponent(_component_BLink, mergeProps({
            class: "filter--block-heading filter--collapse mb-15",
            onClick: () => {
            }
          }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, void 0, void 0, { "size-filter": true })), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Kies je maat`);
              } else {
                return [
                  createTextVNode("Kies je maat")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_BCollapse, {
            visible: "",
            id: "size-filter",
            class: "size-filter"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<ul class="available-sizes"${_scopeId}><!--[-->`);
                ssrRenderList(prodFilter.options, (sizeFilterItem) => {
                  _push2(`<li${_scopeId}><label${ssrRenderAttr("for", sizeFilterItem.name)} class="d-flex align-items-center"${_scopeId}><input type="checkbox"${ssrRenderAttr("id", sizeFilterItem.value)}${ssrRenderAttr("name", sizeFilterItem.label)}${ssrRenderAttr(
                    "value",
                    `attribute_code:` + prodFilter.attribute_code + `,type_label:` + prodFilter.label + `,value:` + sizeFilterItem.value + `,label:` + sizeFilterItem.label
                  )}${_scopeId}><span class="fake-input"${_scopeId}></span><span class="fake-label"${_scopeId}>${ssrInterpolate(sizeFilterItem == null ? void 0 : sizeFilterItem.name)}</span></label></li>`);
                });
                _push2(`<!--]--></ul>`);
                if (prodFilter.options.length > 5) {
                  _push2(`<div style="${ssrRenderStyle({ "width": "100%", "text-align": "left" })}"${_scopeId}>`);
                  if (!readMore.value[prodFilter.attribute_code]) {
                    _push2(`<div class="show-more-filter"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_BLink, {
                      class: "filter--block-heading",
                      style: { "display": "block", "cursor": "pointer" },
                      onClick: ($event) => showMore(prodFilter.attribute_code)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`Toon meer`);
                        } else {
                          return [
                            createTextVNode("Toon meer")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (readMore.value[prodFilter.attribute_code]) {
                    _push2(`<div class="show-more-filter"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_BLink, {
                      class: "filter--block-heading",
                      style: { "display": "block", "cursor": "pointer" },
                      onClick: ($event) => showLess(prodFilter.attribute_code)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(` Toon minder `);
                        } else {
                          return [
                            createTextVNode(" Toon minder ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
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
                  createVNode("ul", { class: "available-sizes" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(prodFilter.options, (sizeFilterItem) => {
                      return openBlock(), createBlock("li", {
                        key: sizeFilterItem.value
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
                            ref: (el) => {
                              refs[sizeFilterItem.value] = el;
                            },
                            value: `attribute_code:` + prodFilter.attribute_code + `,type_label:` + prodFilter.label + `,value:` + sizeFilterItem.value + `,label:` + sizeFilterItem.label,
                            onChange: ($event) => onChangeFilter($event)
                          }, null, 40, ["id", "name", "value", "onChange"])),
                          createVNode("span", { class: "fake-input" }),
                          createVNode("span", { class: "fake-label" }, toDisplayString(sizeFilterItem == null ? void 0 : sizeFilterItem.name), 1)
                        ], 8, ["for"])
                      ]);
                    }), 128))
                  ]),
                  prodFilter.options.length > 5 ? (openBlock(), createBlock("div", {
                    key: 0,
                    style: { "width": "100%", "text-align": "left" }
                  }, [
                    !readMore.value[prodFilter.attribute_code] ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "show-more-filter"
                    }, [
                      createVNode(_component_BLink, {
                        class: "filter--block-heading",
                        style: { "display": "block", "cursor": "pointer" },
                        onClick: withModifiers(($event) => showMore(prodFilter.attribute_code), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Toon meer")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : createCommentVNode("", true),
                    readMore.value[prodFilter.attribute_code] ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "show-more-filter"
                    }, [
                      createVNode(_component_BLink, {
                        class: "filter--block-heading",
                        style: { "display": "block", "cursor": "pointer" },
                        onClick: withModifiers(($event) => showLess(prodFilter.attribute_code), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Toon minder ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/ProductFilterContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ProductFilter",
  __ssrInlineRender: true,
  props: {
    dontShowActiveFilters: {
      type: Boolean
    }
  },
  setup(__props) {
    const filterExpanded = ref(false);
    const overlayIsReady = ref(false);
    const resize = () => {
      if (window.innerWidth > 991) filterExpanded.value = false;
    };
    const toggleFilter = () => {
      filterExpanded.value = !filterExpanded.value;
    };
    onMounted(() => {
      window.addEventListener("resize", resize);
      overlayIsReady.value = true;
    });
    onUnmounted(() => {
      window.removeEventListener("resize", resize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "filter mt-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BLink, {
        class: "filter-opener d-lg-none",
        onClick: toggleFilter
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Filters<span class="plus"${_scopeId}>+</span>`);
          } else {
            return [
              createTextVNode("Filters"),
              createVNode("span", { class: "plus" }, "+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{ show: filterExpanded.value }, "filter-overlay"])}"></div>`);
      if (overlayIsReady.value) {
        _push(`<div class="${ssrRenderClass([{ show: filterExpanded.value }, "fake-overlay"])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ show: filterExpanded.value }, "filter-collapse"])}">`);
      _push(ssrRenderComponent(_sfc_main$2, { onClicked: toggleFilter }, null, _parent));
      _push(`</div></aside>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/ProductFilter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
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
        _push(ssrRenderComponent(unref(_sfc_main$3), { "products-list": productList.value }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/FilteredProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
//# sourceMappingURL=FilteredProducts-CNOiFZh2.js.map
