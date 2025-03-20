import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, createVNode, computed, onMounted } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$4 } from "./BaseLayout-CHxrOdsN.js";
import { _ as _sfc_main$5 } from "./Breadcrumbs-BN1xAQs-.js";
import { _ as _sfc_main$3, a as _sfc_main$6 } from "./FilteredProducts-CNOiFZh2.js";
import { BLink } from "bootstrap-vue-next/components/BLink";
import "bootstrap-vue-next/components/BContainer";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "axios";
import "../entry-server.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
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
import "vue-cookies";
import "vue-3-slider-component";
import "./ProductsSection-BPtJ28sJ.js";
import "./ProductCard-zGPQ-XdA.js";
import "./heart-DpQotoa5.js";
import "./default-placeholder-image-BaAVikZT.js";
const _sfc_main$2 = {
  __name: "BrandPageContentFilter",
  __ssrInlineRender: true,
  setup(__props) {
    const filterType = ref("Merken");
    const selectedFilterItems = ref([{ id: "selectedFilter05", name: "Alpinestars" }]);
    const selectOptions = ref([
      { id: "selectOption01", name: "Nieuwste artikelen" },
      { id: "selectOption02", name: "Option" },
      { id: "selectOption03", name: "Option" },
      { id: "selectOption04", name: "Option" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-content-between align-items-center content-filter mt-25 mt-lg-0" }, _attrs))}><div class="selected-filters d-flex flex-wrap align-items-center"><span class="filter-type d-block">${ssrInterpolate(filterType.value)}:</span><ul class="filter-items d-flex align-items-center flex-wrap list-unstyled p-0 m-0"><!--[-->`);
      ssrRenderList(selectedFilterItems.value, (selectedFilterItem) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_BLink, { class: "filter-items-btn" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(selectedFilterItem.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(selectedFilterItem.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="select-wrapper"><select name="contentFilter" id="contentFilter"><!--[-->`);
      ssrRenderList(selectOptions.value, (selectOption) => {
        _push(`<option${ssrRenderAttr("value", selectOption.name)}>${ssrInterpolate(selectOption.name)}</option>`);
      });
      _push(`<!--]--></select></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/BrandPageContentFilter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "BrandPageContent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-content" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, { class: "pt-0" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_component_BLink, {
        href: "#",
        class: "load-more d-block text-center d-md-none font-weight-normal py-25"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lnr lnr-hourglass mr-6"${_scopeId}></i>Meer laden`);
          } else {
            return [
              createVNode("i", { class: "lnr lnr-hourglass mr-6" }),
              createTextVNode("Meer laden")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/BrandPageContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Brand",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const { t } = useI18n();
    const currentbrand = computed(
      () => store.getters["product/getBrandSliderByCode"](route.params.code)
    );
    onMounted(() => {
      var _a;
      const bcrumb = {
        current: (_a = currentbrand.value) == null ? void 0 : _a.title,
        routes: [
          {
            name: t("brands"),
            route_link: "/merken"
          }
        ]
      };
      store.commit("breadcrumbs/set", bcrumb);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            _push2(`<div class="container"${_scopeId}><div class="row"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: "col-lg-3",
              dontShowActiveFilters: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { class: "col-lg-9" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_sfc_main$5),
              createVNode("div", { class: "container" }, [
                createVNode("div", { class: "row" }, [
                  createVNode(_sfc_main$6, {
                    class: "col-lg-3",
                    dontShowActiveFilters: true
                  }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/views/Brand.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Brand-ZRKR2BMC.js.map
