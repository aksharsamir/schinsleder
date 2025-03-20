import { ref, watch, provide, computed, defineComponent, createElementBlock, openBlock, normalizeClass, unref, renderSlot, createBlock, Transition, mergeProps, toHandlers, withCtx, inject, createElementVNode, createVNode, withKeys, withModifiers, createTextVNode, toDisplayString, resolveDynamicComponent, withDirectives, vShow, onMounted, onBeforeUnmount, useSSRContext, useTemplateRef, resolveComponent, createCommentVNode, Fragment, renderList, onServerPrefetch, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderAttr, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderSlot, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { BContainer } from "bootstrap-vue-next/components/BContainer";
import { BImg } from "bootstrap-vue-next/components/BImg";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BButton } from "bootstrap-vue-next/components/BButton";
import { A as getProductsBySearchPreview } from "./products-Dsi6ZmTY.js";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { _ as _export_sfc$1 } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { vBToggle } from "bootstrap-vue-next/directives/BToggle";
import { BBadge } from "bootstrap-vue-next/components/BBadge";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { u as useCartInfo, H as HeaderIconsDropdownMenu, a as HeaderIconsDropdown, _ as _sfc_main$i, b as _sfc_main$k } from "./FooterCopyRight-CMwhH0WW.js";
import { BCollapse } from "bootstrap-vue-next/components/BCollapse";
import { BCarousel, BCarouselSlide } from "bootstrap-vue-next/components/BCarousel";
import { u as useWindowSize } from "./useWindowSize-DyvB4JBF.js";
import { b as buildProps, C as CHANGE_EVENT, U as UPDATE_MODEL_EVENT, d as definePropType, _ as _export_sfc, w as withInstall, i as iconPropType, E as ElIcon, a as withNoopInstall } from "./base-_onQVhQ4.js";
import { _ as _sfc_main$j } from "./BlockSimple-BHbXwFf2.js";
import { d as isNumber, u as useNamespace, e as useIdInjection } from "../entry-server.js";
import { isString, isArray } from "@vue/shared";
import { castArray } from "lodash-unified";
import { ArrowRight } from "@element-plus/icons-vue";
import { useGtm } from "@gtm-support/vue-gtm";
import VueCookies from "vue-cookies";
const mutable = (val) => val;
const emitChangeFn = (value) => isNumber(value) || isString(value) || isArray(value);
const collapseProps = buildProps({
  accordion: Boolean,
  modelValue: {
    type: definePropType([Array, String, Number]),
    default: () => mutable([])
  }
});
const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn
};
const collapseContextKey = Symbol("collapseContextKey");
const useCollapse = (props, emit) => {
  const activeNames = ref(castArray(props.modelValue));
  const setActiveNames = (_activeNames) => {
    activeNames.value = _activeNames;
    const value = props.accordion ? activeNames.value[0] : activeNames.value;
    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
  };
  const handleItemClick = (name) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? "" : name]);
    } else {
      const _activeNames = [...activeNames.value];
      const index = _activeNames.indexOf(name);
      if (index > -1) {
        _activeNames.splice(index, 1);
      } else {
        _activeNames.push(name);
      }
      setActiveNames(_activeNames);
    }
  };
  watch(() => props.modelValue, () => activeNames.value = castArray(props.modelValue), { deep: true });
  provide(collapseContextKey, {
    activeNames,
    handleItemClick
  });
  return {
    activeNames,
    setActiveNames
  };
};
const useCollapseDOM = () => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => ns.b());
  return {
    rootKls
  };
};
const __default__$2 = defineComponent({
  name: "ElCollapse"
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: collapseProps,
  emits: collapseEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { activeNames, setActiveNames } = useCollapse(props, emit);
    const { rootKls } = useCollapseDOM();
    expose({
      activeNames,
      setActiveNames
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "collapse.vue"]]);
const __default__$1 = defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const ns = useNamespace("collapse-transition");
    const reset = (el) => {
      el.style.maxHeight = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    };
    const on = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        if (el.style.height)
          el.dataset.elExistsHeight = el.style.height;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        requestAnimationFrame(() => {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.dataset.elExistsHeight) {
            el.style.maxHeight = el.dataset.elExistsHeight;
          } else if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
          } else {
            el.style.maxHeight = 0;
          }
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          el.style.overflow = "hidden";
        });
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      enterCancelled(el) {
        reset(el);
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        reset(el);
      },
      leaveCancelled(el) {
        reset(el);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns).b()
      }, toHandlers(on)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "collapse-transition.vue"]]);
const ElCollapseTransition = withInstall(CollapseTransition);
const collapseItemProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: definePropType([String, Number]),
    default: void 0
  },
  icon: {
    type: iconPropType,
    default: ArrowRight
  },
  disabled: Boolean
});
const useCollapseItem = (props) => {
  const collapse = inject(collapseContextKey);
  const { namespace } = useNamespace("collapse");
  const focusing = ref(false);
  const isClick = ref(false);
  const idInjection = useIdInjection();
  const id = computed(() => idInjection.current++);
  const name = computed(() => {
    var _a;
    return (_a = props.name) != null ? _a : `${namespace.value}-id-${idInjection.prefix}-${unref(id)}`;
  });
  const isActive = computed(() => collapse == null ? void 0 : collapse.activeNames.value.includes(unref(name)));
  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true;
      } else {
        isClick.value = false;
      }
    }, 50);
  };
  const handleHeaderClick = () => {
    if (props.disabled)
      return;
    collapse == null ? void 0 : collapse.handleItemClick(unref(name));
    focusing.value = false;
    isClick.value = true;
  };
  const handleEnterClick = () => {
    collapse == null ? void 0 : collapse.handleItemClick(unref(name));
  };
  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick
  };
};
const useCollapseItemDOM = (props, { focusing, isActive, id }) => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => [
    ns.b("item"),
    ns.is("active", unref(isActive)),
    ns.is("disabled", props.disabled)
  ]);
  const headKls = computed(() => [
    ns.be("item", "header"),
    ns.is("active", unref(isActive)),
    { focusing: unref(focusing) && !props.disabled }
  ]);
  const arrowKls = computed(() => [
    ns.be("item", "arrow"),
    ns.is("active", unref(isActive))
  ]);
  const itemWrapperKls = computed(() => ns.be("item", "wrap"));
  const itemContentKls = computed(() => ns.be("item", "content"));
  const scopedContentId = computed(() => ns.b(`content-${unref(id)}`));
  const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`));
  return {
    arrowKls,
    headKls,
    rootKls,
    itemWrapperKls,
    itemContentKls,
    scopedContentId,
    scopedHeadId
  };
};
const __default__ = defineComponent({
  name: "ElCollapseItem"
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: collapseItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const {
      focusing,
      id,
      isActive,
      handleFocus,
      handleHeaderClick,
      handleEnterClick
    } = useCollapseItem(props);
    const {
      arrowKls,
      headKls,
      rootKls,
      itemWrapperKls,
      itemContentKls,
      scopedContentId,
      scopedHeadId
    } = useCollapseItemDOM(props, { focusing, isActive, id });
    expose({
      isActive
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        createElementVNode("button", {
          id: unref(scopedHeadId),
          class: normalizeClass(unref(headKls)),
          "aria-expanded": unref(isActive),
          "aria-controls": unref(scopedContentId),
          "aria-describedby": unref(scopedContentId),
          tabindex: _ctx.disabled ? -1 : 0,
          type: "button",
          onClick: unref(handleHeaderClick),
          onKeydown: withKeys(withModifiers(unref(handleEnterClick), ["stop", "prevent"]), ["space", "enter"]),
          onFocus: unref(handleFocus),
          onBlur: ($event) => focusing.value = false
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          renderSlot(_ctx.$slots, "icon", { isActive: unref(isActive) }, () => [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(arrowKls))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
              ]),
              _: 1
            }, 8, ["class"])
          ])
        ], 42, ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex", "onClick", "onKeydown", "onFocus", "onBlur"]),
        createVNode(unref(ElCollapseTransition), null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              id: unref(scopedContentId),
              role: "region",
              class: normalizeClass(unref(itemWrapperKls)),
              "aria-hidden": !unref(isActive),
              "aria-labelledby": unref(scopedHeadId)
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(itemContentKls))
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ], 10, ["id", "aria-hidden", "aria-labelledby"]), [
              [vShow, unref(isActive)]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
var CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "collapse-item.vue"]]);
const ElCollapse = withInstall(Collapse, {
  CollapseItem
});
const ElCollapseItem = withNoopInstall(CollapseItem);
const _imports_0$1 = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA9AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkREOUQ3RTEwMDE4QzExRUJCRjlCQTE4QjM4NEJFRTE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkREOUQ3RTExMDE4QzExRUJCRjlCQTE4QjM4NEJFRTE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REQ5RDdFMEUwMThDMTFFQkJGOUJBMThCMzg0QkVFMTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REQ5RDdFMEYwMThDMTFFQkJGOUJBMThCMzg0QkVFMTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkKCAYGCAoMCgoKCgoMDwwMDAwMDA8MDg4PDg4MEhIUFBISGhoaGhoeHh4eHh4eHh4eAQcHBwwLDBcPDxcaFBEUGh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABOAEkDAREAAhEBAxEB/8QAhgAAAgMBAQEAAAAAAAAAAAAAAAYBBQcEAwgBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAABAgUBBAgFAgUFAAAAAAABAgMAEQQFBhIhMdEHQWGRIjJSkhNRcYGxFPChQnIjMxbSU5MVVREBAAICAwADAQEAAAAAAAAAAAECEQMhMRJBUSIEE//aAAwDAQACEQMRAD8A+fgVS8S+n+JXGKqZq86/UrjAE1edfqVxgCavOv1K4wBNXnX6lcYAmrzr9SuMATV51+pXGAJq86/UrjAQSqR76vUrjEDFI+ZfqVxjIXRx+8aBAEAQBAEoAgCADuP66YBinGQujd2/eND0YYffdDTDanXVeFCRMn6CHXYsP8Wyb/zKj/jVwjPuv2YVz7TlO8pl9JbeQZLbVsIPXGo5HmVJlvijQ8c5TUt9sr12Zv7DbNMnXWJVp/pdR70ea+/zOMNYKWQ2ihtdWlmjuDdyaUJl5uUh2FUdq2mY5ZlVRoB3H9dMAwxkLw3dv3jQcuU14pLVmDVVV05eYW241r0ag2pYAC9uzZHLfWbVahs2MUl/OWB1F4RdLa0ldQ6wGUCSZ7G/AnoVHi2TXz1iVhnuT3jle9kFau7Wisp7gtwl5uQEj1d+O9K7IjiU4VSqzk0RP8SsB6Bs/wBcaxtODxkuL0Ft5Q1CcVSpH5kn6+mX/f8Ab2y2AnZtHTHGl5nZ+l+GHM2u5OMhxmieU1LxBGyPd6hnDwUlSVFK0lChvSoSMVEHcfpAMUZBgmJHJrz+M657Fvp0l2uqdwQgTMp9cozt2eIWINNy5rtWAuWfDaFhm30xKBXOJJcdKdhVOY3/ACjnGn1zZcnCl5r3axYLQ1mQMIqH7w/JQSJLTTgqBI2/ECOE/wA8Wv8An4WHZzAxCyZ1jdLfrCQq5FBUwsyBeCRNSFTltAmYmrZNLYkmGPYHjT9zzGnoqtkoaoHPeuCFCWhDRmoGfyMevbfFcwzENgcybH8fvxyq+LURWkUtutw8HsNyQVKTI9KI8kUm0eYaUHMTmJmuPX1P4AYbslUPctpSjurbPQdvVHTTqpaOe0mVbR3rHuZKHLddqRu3ZOEE2+qYGlLygPCqereZRrzOvmOhmFdR1NDVP0dSgofYWULSeoyn9Y9MTnlmV5KIuDRiA/G5O5FV0+yscfDbix4g3NGz944bOdsQsdM2pA17lP739gKQXpb9E9semWTdzKyy35DcaJNrSUWugp0MstkS7wSNRl/NOOWnXNY57WZMGKXi6UfKe4VNO8ply21CHaFwEiSypAUB80xzvWJ2RH2sdGzFM75e3S3Ov1q/+rym5BNPXvpQNLuqYUR4Zapxx2a7xPHNYVz80sYwapv1O3cL6aX2adCWWNMwElKTqHeG/fDTsv54glUZTVYRU8vG7Mm9GvuVuINucUmRCNndJ1Hrjpr9+84xCT0zHHn32L/bHmSQ+iob0kfHUI9N+pZg287WGWs8f9pISXGKdbgHnLSCY5fzT+Fspo6iy5aZJQUL9VYrwdNlvCS285/tr6FdoEc91JnmO4WHJlPLu/WStWmkp13C1LOqkrmBqSpB3T3bZRqm2J77SYcdjwbKbzVopqagcabUZOVDg0obHSSYtttYjsiDRnt0tVkxymwS0PJqxTL9641yNzi5AaR8tIjlrrNrepWZZyQZhSdi0maT8CN0ellqNVbGeY+N01dRuoRk9qb9l2iUZKqEDcU9cgI8sT/nOJ6lZ5Z89jWRU75YetT6HgZFOjpj0e6/aYO+FYO5aB/lmUkUFHb/AOrS0Tmx19wbUyHzHxjhs2evzVYgmZLfqm/XqrulQJLfV3U/BCdiR6RHalIrGEl3wC7IESPX940GbHuZOZ49TimtteoUo3MOd5AjlfTW3cLl03jmznl3pVUlTXlunWJLbZGkKHXEropX4MlAD6k7yY7ImA9aOsq6GqRV0bymKlszQ4gyIMJiJ4kOrPO3mK00G/zUuFIkHFpmrtjhP81JXJXv+TX7IaoVN4rF1Tg8IUdg+QEda0ivSZVh3GNBinGQujd2/eNAgJgCAICICYCIAO4/rpgGGMihCUS8Y7DwjYNKPOOw8IgNKPOOw8IA0o847DwgDSjzjsPCANKPOOw8IA0o847DwgDSjzjsPCChSUSPfHYeEEX8j8U/vwjKv//Z";
const _sfc_main$e = {
  __name: "HeaderSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const { t } = useI18n();
    const router = useRouter();
    const search = ref("");
    const searchTimer = ref(null);
    const closeSignal = ref(null);
    const output = ref(null);
    const searchSuggestions = ref([]);
    const recommendedProducts = ref([]);
    const isSearchGroupShown = ref(false);
    const isSearchResultsShown = ref(false);
    const searchInput = ref(null);
    const resize = () => {
      document.body.classList.add("resize-active");
      if (window.innerWidth > 575) {
        isSearchGroupShown.value = false;
      }
      clearTimeout(searchTimer.value);
      resizeTimer();
    };
    const resizeTimer = () => {
      setTimeout(() => {
        document.body.classList.remove("resize-active");
      }, 400);
    };
    const close = () => {
      isSearchGroupShown.value = false;
    };
    const showSearchResults = () => {
      isSearchResultsShown.value = true;
    };
    const hideSearchResults = () => {
      isSearchResultsShown.value = false;
    };
    const getSearchPreview = async () => {
      const controller = new AbortController();
      const { signal } = controller;
      closeSignal.value = controller;
      output.value = await getProductsBySearchPreview(search.value, signal);
      closeSignal.value = null;
      recommendedProducts.value = output.value.items;
      searchSuggestions.value = output.value.search_suggestions;
      showSearchResults();
    };
    const goSearch = () => {
      hideSearchResults();
      if (search.value.trim().length > 0 && search.value.trim().length < 35 && !search.value.includes("/")) {
        clearTimeout(searchTimer.value);
        if (closeSignal.value !== null) closeSignal.value.abort();
        router.push({
          path: "/search",
          query: { q: search.value.trim() }
        });
      } else if (search.value.trim().length > 35 && !search.value.includes("/")) {
        const msg = {
          type: "danger",
          title: t("search_error"),
          text: t("searchname_too_long")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      } else if (search.value.includes("/")) {
        const msg = {
          type: "danger",
          title: t("search_error"),
          text: t("search_validation")
        };
        store.dispatch("messages/sendMessage", { message: msg });
      }
    };
    const goClose = () => {
      close();
    };
    const hideSearchResultsTimer = () => {
      return setTimeout(() => {
        search.value = "";
        hideSearchResults();
      }, 300);
    };
    watch(search, () => {
      if (search.value.length > 2) {
        if (searchTimer.value !== null) {
          clearTimeout(searchTimer.value);
        }
        searchTimer.value = setTimeout(() => {
          if (closeSignal.value !== null) {
            closeSignal.value.abort();
          }
          getSearchPreview();
        }, 2e3);
      } else {
        clearTimeout(searchTimer.value);
        if (closeSignal.value !== null) {
          closeSignal.value.abort();
        }
        hideSearchResults();
      }
    });
    onMounted(() => {
      window.addEventListener("resize", resize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", resize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BButton = BButton;
      const _component_BFormInput = BFormInput;
      const _component_b_img = BImg;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav-form" }, _attrs))} data-v-e4a4a17f><div class="d-md-none" data-v-e4a4a17f><a class="lnr lnr-magnifier" href="#" data-v-e4a4a17f></a></div><div class="${ssrRenderClass([{ show: isSearchGroupShown.value }, "search-group"])}" data-v-e4a4a17f>`);
      _push(ssrRenderComponent(_component_BButton, {
        onClick: ($event) => goClose(),
        class: "close-btn",
        variant: "light",
        squared: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`X`);
          } else {
            return [
              createTextVNode("X")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BFormInput, {
        ref_key: "searchInput",
        ref: searchInput,
        modelValue: search.value,
        "onUpdate:modelValue": ($event) => search.value = $event,
        type: "text",
        required: "",
        onBlur: ($event) => hideSearchResultsTimer(),
        placeholder: _ctx.$t("search_placeholder"),
        onKeyup: ($event) => goSearch(),
        class: "search-input"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BButton, {
        onClick: ($event) => goSearch(),
        class: "search-btn",
        variant: "light",
        squared: "",
        "aria-label": "Search"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lnr lnr-magnifier" data-v-e4a4a17f${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "lnr lnr-magnifier" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{ show: isSearchResultsShown.value }, "search-results"])}" data-v-e4a4a17f><span class="search--title" data-v-e4a4a17f>${ssrInterpolate(_ctx.$t("suggestions"))}:</span><ul class="search-suggestions" data-v-e4a4a17f><!--[-->`);
      ssrRenderList(searchSuggestions.value, (suggestion) => {
        _push(`<li class="d-block" data-v-e4a4a17f><a data-v-e4a4a17f>${ssrInterpolate(suggestion.word)}</a></li>`);
      });
      _push(`<!--]--></ul><span class="search--title" data-v-e4a4a17f>${ssrInterpolate(_ctx.$t("recommended_products"))}:</span><ul class="recommended-products" data-v-e4a4a17f><!--[-->`);
      ssrRenderList(recommendedProducts.value, (recommendedProduct) => {
        _push(`<li class="d-inline-block" data-v-e4a4a17f><a class="d-flex align-items-center" data-v-e4a4a17f><div class="product-img" data-v-e4a4a17f>`);
        _push(ssrRenderComponent(_component_b_img, {
          src: recommendedProduct.image.small,
          alt: recommendedProduct.name,
          width: "41",
          height: "51",
          fluid: ""
        }, null, _parent));
        _push(`</div><span class="product-name" data-v-e4a4a17f>${ssrInterpolate(recommendedProduct.name)}</span></a></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/HeaderSearch.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const HeaderSearch = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__scopeId", "data-v-e4a4a17f"]]);
const _sfc_main$d = {
  __name: "HeaderIconsDropdownCart",
  __ssrInlineRender: true,
  props: {
    icon: Object,
    showType: String
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { quantityDown, quantityUp, removeItem, cartCount } = useCartInfo();
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const isServer = typeof window === "undefined";
    const visible = ref(false);
    const dropDownStyle = ref("max-height: calc(100vh - 0px) !important");
    const cartRef = useTemplateRef("cart");
    __expose({
      cartRef
    });
    const btnDisable = computed(() => {
      return cartCount.value <= 0;
    });
    const isLoggedIn = computed(() => store.getters["user/getIsLoggedIn"]);
    function closeDropdownMenu(e) {
      const cartDropdown = cartRef.value && cartRef.value.parentElement;
      if (cartDropdown && !cartDropdown.contains(e.target)) {
        visible.value = false;
        document.removeEventListener("click", closeDropdownMenu);
      }
    }
    watch(visible, () => {
      if (!isServer) {
        if (visible.value === true) {
          document.addEventListener("click", closeDropdownMenu);
          document.body.classList.add("noScroll");
        } else {
          document.body.classList.remove("noScroll");
        }
      }
    });
    function closeOnClick() {
      visible.value = false;
    }
    function recalculateHeight() {
      if (!isServer) {
        const cartDropdown = cartRef.value;
        var height = cartDropdown ? cartDropdown.getBoundingClientRect().top : 0;
        dropDownStyle.value = "#topIconsCollapseM3 { max-height: calc(100vh - " + height + "px) !important}";
      }
    }
    const itemCount = computed(() => cartCount.value);
    const decodeHtmlEntities = (str) => {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = str;
      return textarea.value;
    };
    const decodeHtmlEntitiesSafe = (str) => {
      if (typeof window !== "undefined") {
        return decodeHtmlEntities(str);
      } else {
        return str.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      }
    };
    const formattedDropHeading = computed(() => {
      if (props.icon && props.icon.dropHeading) {
        const decodedString = decodeHtmlEntitiesSafe(props.icon.dropHeading);
        return decodedString.replace(/{numberOf}/g, itemCount.value);
      }
      return "";
    });
    const onClickCheckout = () => {
      visible.value = false;
      router.push({ name: "checkout" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BCollapse = BCollapse;
      const _component_router_link = resolveComponent("router-link");
      const _component_BButton = BButton;
      const _component_BLink = BLink;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-952404f5>`);
      _push(ssrRenderComponent(_component_BCollapse, {
        ref: "cart",
        id: "topIconsCollapse" + __props.showType + __props.icon.iconNumber,
        class: [{ collapsed: visible.value }, "top-icons--drop cart"],
        "aria-expanded": visible.value,
        modelValue: visible.value,
        "onUpdate:modelValue": ($event) => visible.value = $event,
        onShown: recalculateHeight,
        "is-nav": true,
        style: [isLoggedIn.value ? "right : -95px" : "right : -75px"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(`style`), null, null), _parent2, _scopeId);
            if (__props.icon.dropHeading) {
              _push2(`<span class="drop-heading" data-v-952404f5${_scopeId}>${formattedDropHeading.value ?? ""}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<ul class="drop-items" data-v-952404f5${_scopeId}><!--[-->`);
            ssrRenderList(__props.icon.dropItems, (dropItem) => {
              _push2(`<li data-v-952404f5${_scopeId}><div class="d-flex align-items-start" data-v-952404f5${_scopeId}><div class="drop-item--img" data-v-952404f5${_scopeId}><img${ssrRenderAttr("src", dropItem.product.image.x_small)}${ssrRenderAttr("alt", dropItem.product.name)} style="${ssrRenderStyle({ "width": "100%", "height": "auto" })}" data-v-952404f5${_scopeId}></div><div class="drop-item--info" data-v-952404f5${_scopeId}><span class="product-name d-block" data-v-952404f5${_scopeId}>${ssrInterpolate(dropItem.product.name)}</span>`);
              if (typeof dropItem.configurable_options != "undefined") {
                _push2(`<div data-v-952404f5${_scopeId}><!--[-->`);
                ssrRenderList(dropItem.configurable_options, (option, index) => {
                  _push2(`<span class="product-options d-block" data-v-952404f5${_scopeId}><span class="product-options-title" data-v-952404f5${_scopeId}>${ssrInterpolate(option.option_label)}: </span><span class="product-options-value" data-v-952404f5${_scopeId}>${ssrInterpolate(option.value_label)}</span></span>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (typeof dropItem.bundle_options != "undefined") {
                _push2(`<div data-v-952404f5${_scopeId}><div data-v-952404f5${_scopeId}><!--[-->`);
                ssrRenderList(dropItem.bundle_options, (option, index) => {
                  _push2(`<span class="product-options d-block" data-v-952404f5${_scopeId}><span data-v-952404f5${_scopeId}>${ssrInterpolate(option.label)}: </span>`);
                  if (typeof option.values[0].configurable_options != "undefined") {
                    _push2(`<span data-v-952404f5${_scopeId}><!--[-->`);
                    ssrRenderList(option.values[0].configurable_options, (opt, idx) => {
                      _push2(`<span data-v-952404f5${_scopeId}><span class="product-options-title" data-v-952404f5${_scopeId}>${ssrInterpolate(opt.option_label)}: </span><span class="product-options-value" data-v-952404f5${_scopeId}>${ssrInterpolate(opt.value_label)}</span></span>`);
                    });
                    _push2(`<!--]--></span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</span>`);
                });
                _push2(`<!--]--></div><!--[-->`);
                ssrRenderList(dropItem.configurable_options, (option, index) => {
                  _push2(`<span class="product-options d-block" data-v-952404f5${_scopeId}><span class="product-options-title" data-v-952404f5${_scopeId}>${ssrInterpolate(option.option_label)}: </span><span class="product-options-value" data-v-952404f5${_scopeId}>${ssrInterpolate(option.value_label)}</span></span>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="quantity-price-box" data-v-952404f5${_scopeId}><div class="price-box price" data-v-952404f5${_scopeId}> €  ${ssrInterpolate(dropItem.prices.row_total_including_tax.value.toFixed(2).replace(".", ","))}</div><div class="quantity-box" data-v-952404f5${_scopeId}><div class="quantity-input d-flex" data-v-952404f5${_scopeId}><a href="#" class="step-down-btn" data-v-952404f5${_scopeId}></a><input type="number" min="1"${ssrRenderAttr("value", dropItem.quantity)} name="quantity" disabled data-v-952404f5${_scopeId}><a href="#" class="step-up-btn" data-v-952404f5${_scopeId}></a></div></div></div></div></div><a href="#" class="lnr lnr-cross" data-v-952404f5${_scopeId}></a></li>`);
            });
            _push2(`<!--]--></ul><div class="d-flex drop-bottom align-items-center" data-v-952404f5${_scopeId}><span class="total" data-v-952404f5${_scopeId}>${ssrInterpolate(_ctx.$t("total"))}: € ${ssrInterpolate(__props.icon.cartFooter.totalPrice.toFixed(2).replace(".", ","))}</span></div>`);
            if (__props.icon.cartFooter) {
              _push2(`<div class="d-flex drop-bottom justify-content-between align-items-center" data-v-952404f5${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                class: { "goto-cart-disabled": btnDisable.value },
                to: "/checkout/cart",
                onClick: closeOnClick
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("goto_cart"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("goto_cart")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BButton, {
                variant: "success",
                onClick: onClickCheckout,
                disabled: btnDisable.value || unref(route).path === "/checkout"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!isServer) {
                      _push3(`<i class="fa fa-check-circle" data-v-952404f5${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<i class="lnr lnr-cart" data-v-952404f5${_scopeId2}></i>${ssrInterpolate(__props.icon.cartFooter.btnText)}`);
                  } else {
                    return [
                      !isServer ? (openBlock(), createBlock("i", {
                        key: 0,
                        class: "fa fa-check-circle"
                      })) : createCommentVNode("", true),
                      createVNode("i", { class: "lnr lnr-cart" }),
                      createTextVNode(toDisplayString(__props.icon.cartFooter.btnText), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.icon.language) {
              _push2(`<div class="language-block" data-v-952404f5${_scopeId}><ul class="d-flex list-unstyled" data-v-952404f5${_scopeId}><!--[-->`);
              ssrRenderList(__props.icon.language, (lang) => {
                _push2(`<li data-v-952404f5${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BLink, {
                  href: lang.href
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", lang.img)}${ssrRenderAttr("alt", lang.alt)} data-v-952404f5${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: lang.img,
                          alt: lang.alt
                        }, null, 8, ["src", "alt"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(`style`), { innerHTML: dropDownStyle.value }, null, 8, ["innerHTML"])),
              __props.icon.dropHeading ? (openBlock(), createBlock("span", {
                key: 0,
                class: "drop-heading",
                innerHTML: formattedDropHeading.value
              }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
              createVNode("ul", { class: "drop-items" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.icon.dropItems, (dropItem) => {
                  return openBlock(), createBlock("li", {
                    key: dropItem.dropItemId
                  }, [
                    createVNode("div", { class: "d-flex align-items-start" }, [
                      createVNode("div", { class: "drop-item--img" }, [
                        createVNode("img", {
                          src: dropItem.product.image.x_small,
                          alt: dropItem.product.name,
                          style: { "width": "100%", "height": "auto" }
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "drop-item--info" }, [
                        createVNode("span", { class: "product-name d-block" }, toDisplayString(dropItem.product.name), 1),
                        typeof dropItem.configurable_options != "undefined" ? (openBlock(), createBlock("div", { key: 0 }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(dropItem.configurable_options, (option, index) => {
                            return openBlock(), createBlock("span", {
                              key: index,
                              class: "product-options d-block"
                            }, [
                              createVNode("span", { class: "product-options-title" }, toDisplayString(option.option_label) + ": ", 1),
                              createVNode("span", { class: "product-options-value" }, toDisplayString(option.value_label), 1)
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        typeof dropItem.bundle_options != "undefined" ? (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("div", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(dropItem.bundle_options, (option, index) => {
                              return openBlock(), createBlock("span", {
                                key: index,
                                class: "product-options d-block"
                              }, [
                                createVNode("span", null, toDisplayString(option.label) + ": ", 1),
                                typeof option.values[0].configurable_options != "undefined" ? (openBlock(), createBlock("span", { key: 0 }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(option.values[0].configurable_options, (opt, idx) => {
                                    return openBlock(), createBlock("span", { key: idx }, [
                                      createVNode("span", { class: "product-options-title" }, toDisplayString(opt.option_label) + ": ", 1),
                                      createVNode("span", { class: "product-options-value" }, toDisplayString(opt.value_label), 1)
                                    ]);
                                  }), 128))
                                ])) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(dropItem.configurable_options, (option, index) => {
                            return openBlock(), createBlock("span", {
                              key: index,
                              class: "product-options d-block"
                            }, [
                              createVNode("span", { class: "product-options-title" }, toDisplayString(option.option_label) + ": ", 1),
                              createVNode("span", { class: "product-options-value" }, toDisplayString(option.value_label), 1)
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "quantity-price-box" }, [
                          createVNode("div", { class: "price-box price" }, " €  " + toDisplayString(dropItem.prices.row_total_including_tax.value.toFixed(2).replace(".", ",")), 1),
                          createVNode("div", { class: "quantity-box" }, [
                            createVNode("div", { class: "quantity-input d-flex" }, [
                              createVNode("a", {
                                href: "#",
                                class: "step-down-btn",
                                onClick: withModifiers(($event) => unref(quantityDown)(dropItem.id, dropItem.quantity), ["prevent"])
                              }, null, 8, ["onClick"]),
                              createVNode("input", {
                                type: "number",
                                min: "1",
                                value: dropItem.quantity,
                                name: "quantity",
                                ref_for: true,
                                ref: "inputQuantity",
                                disabled: ""
                              }, null, 8, ["value"]),
                              createVNode("a", {
                                href: "#",
                                class: "step-up-btn",
                                onClick: withModifiers(($event) => unref(quantityUp)(dropItem.id, dropItem.quantity), ["prevent"])
                              }, null, 8, ["onClick"])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("a", {
                      href: "#",
                      class: "lnr lnr-cross",
                      onClick: withModifiers(($event) => unref(removeItem)(dropItem.id), ["prevent"])
                    }, null, 8, ["onClick"])
                  ]);
                }), 128))
              ]),
              createVNode("div", { class: "d-flex drop-bottom align-items-center" }, [
                createVNode("span", { class: "total" }, toDisplayString(_ctx.$t("total")) + ": € " + toDisplayString(__props.icon.cartFooter.totalPrice.toFixed(2).replace(".", ",")), 1)
              ]),
              __props.icon.cartFooter ? (openBlock(), createBlock("div", {
                key: 1,
                class: "d-flex drop-bottom justify-content-between align-items-center"
              }, [
                createVNode(_component_router_link, {
                  class: { "goto-cart-disabled": btnDisable.value },
                  to: "/checkout/cart",
                  onClick: withModifiers(closeOnClick, ["stop"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("goto_cart")), 1)
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode(_component_BButton, {
                  variant: "success",
                  onClick: withModifiers(onClickCheckout, ["stop"]),
                  disabled: btnDisable.value || unref(route).path === "/checkout"
                }, {
                  default: withCtx(() => [
                    !isServer ? (openBlock(), createBlock("i", {
                      key: 0,
                      class: "fa fa-check-circle"
                    })) : createCommentVNode("", true),
                    createVNode("i", { class: "lnr lnr-cart" }),
                    createTextVNode(toDisplayString(__props.icon.cartFooter.btnText), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])) : createCommentVNode("", true),
              __props.icon.language ? (openBlock(), createBlock("div", {
                key: 2,
                class: "language-block"
              }, [
                createVNode("ul", { class: "d-flex list-unstyled" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.icon.language, (lang) => {
                    return openBlock(), createBlock("li", {
                      key: lang.alt
                    }, [
                      createVNode(_component_BLink, {
                        href: lang.href
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: lang.img,
                            alt: lang.alt
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/HeaderIconsDropdownCart.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const HeaderIconsDropdownCart = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__scopeId", "data-v-952404f5"]]);
const infoIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAABWUlEQVRIia1WwY2DQAycoGuAFvjc9yRaoIW0QAu0cC3QAlcClEBKICXkSsjJ0Rg5gWXtU0baD8zaHtvr3RN8aADUhvkL4ML1b4jRHsCdawYwci38dgPwDaCKOCmN4QHA+YDX0rFwO4/xmhtmKvCipZqBjpMRZUnO4HZx+NOgPUhbZeryhI4/cpHXprgpNOQ8pfjmLFLJDhoyvNFyWmf0EaiKqqDsHx6ed2ECcBVH6uCaMXyO9jtP+eP0bwqyg5Lrzvx6IIGMH06yTV9o/hQBrqoMO5heJmUKypkCAV0KWwzPhkC31ap27dnMhkgHbc7Wsjc/DJqgg4Ujf2MglarKzKAh09Y61zYZ6TMjo3KcFw20TRFmyvMU/RWa9/6IVBol3Y6aLwCfiT2RGq151MtDpFtnki6ZT2pYVEeu2DUykS2zR18WdmnBU7fbA953kUDqoipk+uYmMADgD8ROaordHXW2AAAAAElFTkSuQmCC";
const _sfc_main$c = {
  __name: "HeaderTopIcons",
  __ssrInlineRender: true,
  props: {
    showType: String
  },
  setup(__props) {
    const { cartCount, wishlistCount, cartItems, wishlistItems, cartSubTotalPrice, isLoggedIn } = useCartInfo();
    const { t } = useI18n();
    const icons = computed(() => [
      {
        iconNumber: 1,
        isLinearIcon: true,
        hasBadge: false,
        iconName: "lnr-map-marker",
        text: "Onze winkel",
        hasDropdown: false,
        link: "/winkels",
        isEnabled: true
      },
      {
        iconNumber: 2,
        isLinearIcon: false,
        hasBadge: false,
        iconName: infoIcon,
        text: "Klantenservice",
        hasDropdown: false,
        link: "/contact",
        isEnabled: true
      },
      {
        iconNumber: 3,
        isLinearIcon: true,
        hasBadge: true,
        badgeValue: cartCount.value,
        badgeColor: "success",
        iconName: "lnr-cart",
        text: "Winkelmand",
        isEnabled: true,
        hasDropdown: true,
        dropHeading: t("items_in_cart", { numberOf: cartCount.value }),
        dropItems: cartItems.value,
        menuId: "cart",
        cartFooter: {
          totalPrice: cartSubTotalPrice.value,
          btnText: t("goto_checkout"),
          btnVariant: "success"
        }
      },
      {
        iconNumber: 4,
        isLinearIcon: true,
        hasBadge: true,
        badgeValue: wishlistCount.value,
        badgeColor: "success",
        iconName: "lnr-heart",
        text: "Wensenlijst",
        hasDropdown: true,
        menuId: "wishList",
        isEnabled: isLoggedIn.value,
        dropHeading: t("items_in_wishlist", {
          numberOf: wishlistCount.value
        }),
        dropItems: wishlistItems.value
      },
      {
        iconNumber: 5,
        isLinearIcon: true,
        hasBadge: false,
        iconName: "lnr-user",
        text: t("login"),
        hasDropdown: false,
        link: "/login",
        isEnabled: !isLoggedIn.value
      },
      {
        iconNumber: 6,
        isLinearIcon: true,
        hasBadge: false,
        iconName: "lnr-user",
        text: t("account"),
        menuId: "account",
        hasDropdown: true,
        isEnabled: isLoggedIn.value
      }
    ]);
    function onClick() {
    }
    function renderPopovers(icon) {
      let component = null;
      if (icon.hasDropdown && icon.isEnabled == true) {
        switch (icon.menuId) {
          case "cart":
            component = HeaderIconsDropdownCart;
            break;
          case "wishList":
            component = HeaderIconsDropdown;
            break;
          case "account":
            component = HeaderIconsDropdownMenu;
            break;
        }
      }
      return component;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      const _component_BBadge = BBadge;
      const _directive_b_toggle = vBToggle;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "top-icons" }, _attrs))} data-v-6a93a206><!--[-->`);
      ssrRenderList(icons.value, (icon) => {
        _push(`<li data-v-6a93a206>`);
        if (icon.isEnabled) {
          _push(ssrRenderComponent(_component_BLink, mergeProps({
            to: icon.link,
            onClick
          }, ssrGetDirectiveProps(_ctx, _directive_b_toggle, `topIconsCollapse${__props.showType}${icon.iconNumber}`)), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (icon.isLinearIcon) {
                  _push2(`<i class="${ssrRenderClass([icon.iconName, "lnr"])}" data-v-6a93a206${_scopeId}></i>`);
                } else {
                  _push2(`<div class="img" data-v-6a93a206${_scopeId}><img${ssrRenderAttr("src", icon.iconName)}${ssrRenderAttr("srcset", `${icon.iconName} 1x, ${icon.iconName} 2x`)} width="25" height="25"${ssrRenderAttr("alt", `${icon.text} Image`)} data-v-6a93a206${_scopeId}></div>`);
                }
                _push2(`<span data-v-6a93a206${_scopeId}>${ssrInterpolate(icon.text)}</span>`);
                if (icon.hasBadge) {
                  _push2(ssrRenderComponent(_component_BBadge, {
                    variant: icon.badgeColor,
                    key: icon.badgeValue
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(icon.badgeValue)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(icon.badgeValue), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  icon.isLinearIcon ? (openBlock(), createBlock("i", {
                    key: 0,
                    class: ["lnr", icon.iconName]
                  }, null, 2)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "img"
                  }, [
                    createVNode("img", {
                      src: icon.iconName,
                      srcset: `${icon.iconName} 1x, ${icon.iconName} 2x`,
                      width: "25",
                      height: "25",
                      alt: `${icon.text} Image`
                    }, null, 8, ["src", "srcset", "alt"])
                  ])),
                  createVNode("span", null, toDisplayString(icon.text), 1),
                  icon.hasBadge ? (openBlock(), createBlock(_component_BBadge, {
                    variant: icon.badgeColor,
                    key: icon.badgeValue
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(icon.badgeValue), 1)
                    ]),
                    _: 2
                  }, 1032, ["variant"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(renderPopovers(icon)), {
          icon,
          showType: __props.showType
        }, null), _parent);
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/HeaderTopIcons.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const HeaderTopIcons = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__scopeId", "data-v-6a93a206"]]);
const _sfc_main$b = {
  __name: "BlockSimpleTitle",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      default: null,
      required: false
    },
    identifier: {
      type: String,
      default: null,
      required: false
    },
    sync: {
      type: Boolean,
      default: false,
      required: false
    },
    showtitle: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const store = useStore();
    const fetchCmsBlock = () => {
      let queryKey = "";
      let queryValue = "";
      if (props.id) {
        queryKey = "id";
        queryValue = props.id;
      } else if (props.identifier) {
        queryKey = "identifier";
        queryValue = props.identifier;
      }
      if (queryKey && queryValue) {
        return store.dispatch("cmsBlock/single", {
          key: queryKey,
          value: queryValue
        });
      }
    };
    onServerPrefetch(() => {
      return fetchCmsBlock();
    });
    onMounted(() => {
      fetchCmsBlock();
    });
    const getCmsData = computed(() => {
      if (props.id) {
        return store.getters["cmsBlock/getCmsBlockById"](props.id);
      } else if (props.identifier) {
        return store.getters["cmsBlock/getCmsBlockByIdentifier"](props.identifier);
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (typeof getCmsData.value == "object") {
        _push(`<span${ssrRenderAttrs(_attrs)}>${ssrInterpolate(getCmsData.value.title)}</span>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/core/BlockSimpleTitle.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "HeaderSeparator",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "separator text-uppercase text-center text-light" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$b), { identifier: "header_seperator_title" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/HeaderSeparator.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "NavbarContent",
  __ssrInlineRender: true,
  emits: "clicked",
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const store = useStore();
    const router = useRouter();
    const menuHeight = ref({
      default: 315,
      current: 315
    });
    const navItems = computed(() => store.getters["menu/getMenuItems"]);
    const closeInternal = () => {
      store.commit("menu/setNavBar", false);
    };
    const onClick = (id, route) => {
      store.commit("menu/updateMenuState", { id, state: false });
      store.commit("menu/setNavBar", false);
      router.push(route).catch(() => {
      });
    };
    const toggleNav = (event) => {
      emit("clicked", event);
    };
    const setHeight = (height) => {
      if (height > menuHeight.value.default) {
        menuHeight.value.current = height;
      } else {
        resetHeight();
      }
    };
    const resetHeight = () => {
      menuHeight.value.current = menuHeight.value.default;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      _push(`<div${ssrRenderAttrs(_attrs)}><span class="mobile-menu-header d-lg-none">${ssrInterpolate(_ctx.$t("navbar_choose_category"))}</span>`);
      _push(ssrRenderComponent(_component_BLink, {
        class: "nav-opener inner-close",
        onClick: toggleNav
      }, null, _parent));
      _push(`<ul class="nav-menu"><li class="nav-item"><span class="nav-link has-no-submenu">`);
      _push(ssrRenderComponent(_component_BLink, {
        to: "/",
        onClick: closeInternal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></li><!--[-->`);
      ssrRenderList(navItems.value, (navItem) => {
        _push(`<li class="nav-item"><div class="${ssrRenderClass([{ "has-no-submenu": !(navItem == null ? void 0 : navItem.hasDropMenu) }, "nav-link"])}">`);
        _push(ssrRenderComponent(_component_BLink, {
          to: navItem.linkTo,
          onClick: ($event) => onClick(navItem.id, navItem.linkTo)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(navItem.itemName)}`);
            } else {
              return [
                createTextVNode(toDisplayString(navItem.itemName), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        if (navItem.hasDropMenu) {
          _push(ssrRenderComponent(unref(_sfc_main$i), {
            menuArray: navItem.dropMenu,
            collapseId: "submenu" + navItem.id,
            id: navItem.id,
            onSetHeight: setHeight,
            onResetHeight: resetHeight
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/NavbarContent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const navExpanded = computed({
      get() {
        return store.getters["menu/getNavbar"];
      },
      set() {
      }
    });
    const toggleNav = () => {
      store.dispatch("menu/toggleNavbar");
    };
    const resize = () => {
      document.body.classList.add("resize-active");
      if (window.innerWidth > 991) {
        navExpanded.value = false;
      }
      clearTimeout(resizeTimer);
      resizeTimer();
    };
    const resizeTimer = () => {
      setTimeout(() => {
        document.body.classList.remove("resize-active");
      }, 400);
    };
    onMounted(() => {
      window.addEventListener("resize", resize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", resize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ id: "nav" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "#",
        class: "nav-opener",
        onClick: toggleNav
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}></span>`);
          } else {
            return [
              createVNode("span")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{ show: navExpanded.value }, "nav-overlay"])}"></div><div class="${ssrRenderClass([{ show: navExpanded.value }, "fake-nav-overlay"])}"></div><div class="${ssrRenderClass([{ show: navExpanded.value }, "nav-collapse"])}">`);
      _push(ssrRenderComponent(_sfc_main$9, { onClicked: toggleNav }, null, _parent));
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/Navbar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DiscountCode",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const slideDesktop = ref(0);
    const slideMobile = ref(0);
    const sliderDesktop = computed(() => {
      const sliderName = "discount_header";
      const slider = store.getters["sliders/getSliderByIdentifier"](sliderName);
      if ((slider == null ? void 0 : slider.slides) != null) {
        slider == null ? void 0 : slider.slides.forEach((ele) => {
          ele.optImage = ele.media.url;
        });
      }
      return slider;
    });
    const sliderMobile = computed(() => {
      const sliderName = "discount_header_mobile";
      const slider = store.getters["sliders/getSliderByIdentifier"](sliderName);
      if ((slider == null ? void 0 : slider.slides) != null) {
        slider == null ? void 0 : slider.slides.forEach((ele) => {
          ele.optImage = ele.media.url;
        });
      }
      return slider;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_carousel = BCarousel;
      const _component_b_carousel_slide = BCarouselSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-8be97f56>`);
      _push(ssrRenderComponent(_component_b_carousel, {
        id: "carousel-1",
        modelValue: slideDesktop.value,
        "onUpdate:modelValue": ($event) => slideDesktop.value = $event,
        class: "d-none d-md-block",
        background: "fff"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a = sliderDesktop.value) == null ? void 0 : _a.slides, (bSlide, index) => {
              _push2(ssrRenderComponent(_component_b_carousel_slide, { key: index }, {
                img: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (bSlide.link) {
                      _push3(`<a${ssrRenderAttr("href", bSlide.link)} data-v-8be97f56${_scopeId2}><img${ssrRenderAttr("src", bSlide.optImage)}${ssrRenderAttr("alt", bSlide.title)} width="100%" height="100%" data-v-8be97f56${_scopeId2}></a>`);
                    } else {
                      _push3(`<span data-v-8be97f56${_scopeId2}><img${ssrRenderAttr("src", bSlide.optImage)}${ssrRenderAttr("alt", bSlide.title)} width="100%" height="100%" data-v-8be97f56${_scopeId2}></span>`);
                    }
                  } else {
                    return [
                      bSlide.link ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: bSlide.link
                      }, [
                        createVNode("img", {
                          src: bSlide.optImage,
                          alt: bSlide.title,
                          width: "100%",
                          height: "100%"
                        }, null, 8, ["src", "alt"])
                      ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, [
                        createVNode("img", {
                          src: bSlide.optImage,
                          alt: bSlide.title,
                          width: "100%",
                          height: "100%"
                        }, null, 8, ["src", "alt"])
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_b = sliderDesktop.value) == null ? void 0 : _b.slides, (bSlide, index) => {
                return openBlock(), createBlock(_component_b_carousel_slide, { key: index }, {
                  img: withCtx(() => [
                    bSlide.link ? (openBlock(), createBlock("a", {
                      key: 0,
                      href: bSlide.link
                    }, [
                      createVNode("img", {
                        src: bSlide.optImage,
                        alt: bSlide.title,
                        width: "100%",
                        height: "100%"
                      }, null, 8, ["src", "alt"])
                    ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, [
                      createVNode("img", {
                        src: bSlide.optImage,
                        alt: bSlide.title,
                        width: "100%",
                        height: "100%"
                      }, null, 8, ["src", "alt"])
                    ]))
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_b_carousel, {
        id: "carousel-2",
        modelValue: slideMobile.value,
        "onUpdate:modelValue": ($event) => slideMobile.value = $event,
        class: "d-md-none d-block",
        background: "fff",
        ride: "carousel"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a = sliderMobile.value) == null ? void 0 : _a.slides, (bSlide, index) => {
              _push2(ssrRenderComponent(_component_b_carousel_slide, { key: index }, {
                img: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (bSlide.link) {
                      _push3(`<a${ssrRenderAttr("href", bSlide.link)} data-v-8be97f56${_scopeId2}><img${ssrRenderAttr("src", bSlide.optImage)}${ssrRenderAttr("alt", bSlide.title)} width="100%" height="100%" data-v-8be97f56${_scopeId2}></a>`);
                    } else {
                      _push3(`<span data-v-8be97f56${_scopeId2}><img${ssrRenderAttr("src", bSlide.optImage)}${ssrRenderAttr("alt", bSlide.title)} width="100%" height="100%" data-v-8be97f56${_scopeId2}></span>`);
                    }
                  } else {
                    return [
                      bSlide.link ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: bSlide.link
                      }, [
                        createVNode("img", {
                          src: bSlide.optImage,
                          alt: bSlide.title,
                          width: "100%",
                          height: "100%"
                        }, null, 8, ["src", "alt"])
                      ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, [
                        createVNode("img", {
                          src: bSlide.optImage,
                          alt: bSlide.title,
                          width: "100%",
                          height: "100%"
                        }, null, 8, ["src", "alt"])
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_b = sliderMobile.value) == null ? void 0 : _b.slides, (bSlide, index) => {
                return openBlock(), createBlock(_component_b_carousel_slide, { key: index }, {
                  img: withCtx(() => [
                    bSlide.link ? (openBlock(), createBlock("a", {
                      key: 0,
                      href: bSlide.link
                    }, [
                      createVNode("img", {
                        src: bSlide.optImage,
                        alt: bSlide.title,
                        width: "100%",
                        height: "100%"
                      }, null, 8, ["src", "alt"])
                    ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, [
                      createVNode("img", {
                        src: bSlide.optImage,
                        alt: bSlide.title,
                        width: "100%",
                        height: "100%"
                      }, null, 8, ["src", "alt"])
                    ]))
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/DiscountCode.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const DiscountCode = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-8be97f56"]]);
const _sfc_main$6 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const windowSize = useWindowSize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_router_link = resolveComponent("router-link");
      _push(`<header${ssrRenderAttrs(mergeProps({
        id: "header",
        class: "pt-6 pt-md-10 pb-md- pb-lg-1"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BContainer, { class: "container" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-items-center justify-content-center position-relative"${_scopeId}><div class="logo me-lg-20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_router_link, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0$1)}${ssrRenderAttr("srcset", _imports_0$1 + " 253w, " + _imports_0$1 + " 175w, " + _imports_0$1 + " 75w")} width="320" height="57" alt="Logo"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0$1,
                      srcset: _imports_0$1 + " 253w, " + _imports_0$1 + " 175w, " + _imports_0$1 + " 75w",
                      width: "320",
                      height: "57",
                      alt: "Logo"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(windowSize).width >= 992) {
              _push2(`<div class="d-flex align-items-center justify-content-end search-and-icons"${_scopeId}>`);
              _push2(ssrRenderComponent(HeaderSearch, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(HeaderTopIcons, { showType: "O" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            _push2(`<div class="d-flex pt-1 pt-lg-0 position-relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            if (unref(windowSize).width < 992) {
              _push2(`<div class="d-flex align-items-center justify-content-end search-and-icons pt-6"${_scopeId}>`);
              _push2(ssrRenderComponent(HeaderSearch, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(HeaderTopIcons, { showType: "M" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-items-center justify-content-center position-relative" }, [
                createVNode("div", { class: "logo me-lg-20" }, [
                  createVNode(_component_router_link, { to: "/" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0$1,
                        srcset: _imports_0$1 + " 253w, " + _imports_0$1 + " 175w, " + _imports_0$1 + " 75w",
                        width: "320",
                        height: "57",
                        alt: "Logo"
                      })
                    ]),
                    _: 1
                  })
                ]),
                unref(windowSize).width >= 992 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "d-flex align-items-center justify-content-end search-and-icons"
                }, [
                  createVNode(HeaderSearch),
                  createVNode(HeaderTopIcons, { showType: "O" })
                ])) : createCommentVNode("", true)
              ]),
              createVNode(_sfc_main$a),
              createVNode("div", { class: "d-flex pt-1 pt-lg-0 position-relative" }, [
                createVNode(_sfc_main$8),
                unref(windowSize).width < 992 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "d-flex align-items-center justify-content-end search-and-icons pt-6"
                }, [
                  createVNode(HeaderSearch),
                  createVNode(HeaderTopIcons, { showType: "M" })
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(DiscountCode, null, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0 = "/assets/icon-clock-co-ZzYLZtgD.png";
const _imports_1 = "/assets/icon-delivery-co-BOC_WpDU.png";
const _imports_2 = "/assets/icon-tick-co-DeH6P0NG.png";
const _sfc_main$5 = {
  __name: "FooterDeliverySeparator",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "separator text-light d-none d-lg-block" }, _attrs))}><div class="container"><div class="d-flex align-items-center justify-content-between bg-dark"><div><div class="icon d-inline-block align-middle"><img${ssrRenderAttr("src", _imports_0)} width="24" height="25" alt="Delivery" class="img-fluid"></div><span class="d-inline-block align-middle">`);
      _push(ssrRenderComponent(unref(_sfc_main$j), { identifier: "order_today_tomorrow_at_home" }, null, _parent));
      _push(`</span></div><div class="mx-10"><div class="icon d-inline-block align-middle"><img${ssrRenderAttr("src", _imports_1)} width="24" height="25" alt="Delivery" class="img-fluid"></div><span class="d-inline-block align-middle">`);
      _push(ssrRenderComponent(unref(_sfc_main$j), { identifier: "free_shipping" }, null, _parent));
      _push(`</span></div><div><div class="icon d-inline-block align-middle"><img${ssrRenderAttr("src", _imports_2)} width="18" height="18" alt="Tick" class="img-fluid"></div><span class="d-inline-block align-middle">`);
      _push(ssrRenderComponent(unref(_sfc_main$j), { identifier: "our_advantages" }, null, _parent));
      _push(`</span></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/FooterDeliverySeparator.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "FooterAccordion",
  __ssrInlineRender: true,
  props: ["accordionData", "index"],
  setup(__props) {
    const windowSize = useWindowSize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_collapse_item = ElCollapseItem;
      _push(ssrRenderComponent(_component_el_collapse_item, mergeProps({
        name: __props.index.toString(),
        class: "accordion-block",
        disabled: unref(windowSize).width >= 768
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (typeof __props.accordionData != "undefined") {
              _push2(`<a href="#" class="text-uppercase acc-opener block-heading"${_scopeId}>${ssrInterpolate(__props.accordionData.title)}</a>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              typeof __props.accordionData != "undefined" ? (openBlock(), createBlock("a", {
                key: 0,
                href: "#",
                class: "text-uppercase acc-opener block-heading"
              }, toDisplayString(__props.accordionData.title), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (typeof __props.accordionData == "object") {
              _push2(ssrRenderComponent(unref(_sfc_main$j), {
                identifier: __props.accordionData.identifier
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              typeof __props.accordionData == "object" ? (openBlock(), createBlock(unref(_sfc_main$j), {
                key: 0,
                identifier: __props.accordionData.identifier
              }, null, 8, ["identifier"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/FooterAccordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "BackToTop",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: "Voltar ao topo"
    },
    visibleoffset: {
      type: [String, Number],
      default: 600
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0
    },
    right: {
      type: String,
      default: "30px"
    },
    bottom: {
      type: String,
      default: "40px"
    },
    scrollFn: {
      type: Function,
      default: function() {
      }
    }
  },
  emits: ["scrolled"],
  setup(__props, { emit: __emit }) {
    const isClient = ref(false);
    const props = __props;
    const visible = ref(false);
    function catchScroll() {
      const pastTopOffset = window.pageYOffset > parseInt(props.visibleoffset);
      const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(props.visibleoffsetbottom);
      visible.value = parseInt(props.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset;
      props.scrollFn();
    }
    onMounted(() => {
      isClient.value = true;
      window.smoothscroll = () => {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(window.smoothscroll);
          window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
        }
      };
      window.addEventListener("scroll", catchScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", catchScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isClient.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "vue-back-to-top",
          style: [
            `bottom:${props.bottom};right:${props.right};`,
            visible.value ? null : { display: "none" }
          ]
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`<div class="default"><span>${ssrInterpolate(props.text)}</span></div>`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/core/BackToTop.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const gtm = useGtm();
    const accdata = computed(() => {
      return [
        store.getters[`cmsBlock/getCmsBlockByIdentifier`](
          "footer_menu_information"
        ),
        store.getters[`cmsBlock/getCmsBlockByIdentifier`]("footer_menu_service"),
        store.getters[`cmsBlock/getCmsBlockByIdentifier`](
          "footer_menu_quick_links"
        )
      ];
    });
    const allCookies = computed(() => {
      return gtm.enabled();
    });
    const deliveryPartners = computed(() => {
      return store.getters["sliders/getSliderByIdentifier"]("delivery_partners");
    });
    const paymentPartners = computed(() => {
      return store.getters["sliders/getSliderByIdentifier"]("payment_providers");
    });
    const contactData = computed(() => {
      return store.getters[`cmsBlock/getCmsBlockByIdentifier`]("footer_contact");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_collapse = ElCollapse;
      _push(`<footer${ssrRenderAttrs(mergeProps({ id: "footer" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$3, { class: "back-to-top" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<div class="container">`);
      if (accdata.value.length > 0) {
        _push(`<div class="d-flex flex-column flex-md-row flex-wrap justify-content-start flex-container flex-column flex-md-row"><template>`);
        _push(ssrRenderComponent(_component_el_collapse, {
          class: "d-flex flex-column flex-md-row flex-wrap justify-content-start flex-column flex-md-row",
          accordion: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(accdata.value, (accdatum, index) => {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  key: index,
                  accordionData: accdatum,
                  index
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(accdata.value, (accdatum, index) => {
                  return openBlock(), createBlock(_sfc_main$4, {
                    key: index,
                    accordionData: accdatum,
                    index
                  }, null, 8, ["accordionData", "index"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</template>`);
        if (typeof contactData.value == "object") {
          _push(`<div class="contacts-block"><span class="text-uppercase block-heading">${ssrInterpolate(contactData.value.title)}</span>`);
          if (typeof contactData.value == "object") {
            _push(ssrRenderComponent(_sfc_main$j, {
              identifier: contactData.value.identifier
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="social-block"><div class="social-rating-img d-block">`);
        if (allCookies.value == true) {
          _push(`<div><iframe frameborder="0" allowtransparency="true" src="https://www.kiyoh.com/retrieve-widget.html?color=white&amp;allowTransparency=false&amp;button=true&amp;lang=nl&amp;tenantId=98&amp;locationId=1065068" width="120" height="160" title="Customer reviews and ratings from Kiyoh"></iframe></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="d-flex flex-column flex-lg-row flex-container delivery-and-payment"><div class="payment"><span class="text-uppercase block-heading d-block">${ssrInterpolate(_ctx.$t("secure_payments"))}</span>`);
      if (typeof paymentPartners.value == "object") {
        _push(`<div><ul class="payment-partners"><!--[-->`);
        ssrRenderList(paymentPartners.value.slides, (image, index) => {
          _push(`<li><a class="img"${ssrRenderAttr("href", image.link)} target="_blank"><img${ssrRenderAttr("src", image.media.url)}${ssrRenderAttr("alt", image.title)} class="delivery-icons" width="100%" height="100%"></a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="delivery"><span class="text-uppercase block-heading d-block">${ssrInterpolate(_ctx.$t("delivered_by"))}</span>`);
      if (typeof deliveryPartners.value == "object") {
        _push(`<div><ul class="delivery-partners"><!--[-->`);
        ssrRenderList(deliveryPartners.value.slides, (image, index) => {
          _push(`<li><a class="img"${ssrRenderAttr("href", image.link)} target="_blank"><img class="delivery-icons"${ssrRenderAttr("src", image.media.url)}${ssrRenderAttr("alt", image.title)}></a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CookieBar",
  __ssrInlineRender: true,
  setup(__props) {
    const cookies = VueCookies;
    const gtm = useGtm();
    const allCookies = ref(true);
    const isCookieAgreed = ref(false);
    const setGoogleConsent = (consent) => {
      if (typeof window.gtag !== "function") {
        window.gtag = function() {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(arguments);
        };
      }
      window.gtag("consent", "default", formatConsent(consent));
    };
    const updateGoogleConsent = (consent) => {
      window.gtag("consent", "update", formatConsent(consent));
    };
    const formatConsent = (consent) => {
      return {
        ad_storage: consent,
        analytics_storage: consent,
        functionality_storage: consent,
        personalization_storage: consent,
        security_storage: "granted",
        ad_user_data: consent,
        ad_personalization: consent,
        wait_for_update: 2e3
      };
    };
    const onClick = () => {
      isCookieAgreed.value = true;
      cookies.config("180d");
      cookies.set("websiteCookie", true);
      if (allCookies.value) {
        updateGoogleConsent("granted");
      } else {
        updateGoogleConsent("denied");
      }
    };
    onMounted(() => {
      isCookieAgreed.value = cookies.isKey("websiteCookie");
      setGoogleConsent("denied");
      gtm.enable(true);
      if (allCookies.value && isCookieAgreed.value) {
        updateGoogleConsent("granted");
      } else {
        updateGoogleConsent("denied");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BLink = BLink;
      if (!isCookieAgreed.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "cookie-bar-wrap" }, _attrs))}><div class="container"><div class="cookie-wrap"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)}${ssrRenderAttr("srcset", _imports_0$1 + " 253w, " + _imports_0$1 + " 175w, " + _imports_0$1 + " 75w")} width="320" height="57" alt="Logo"></div><div class="text"><strong class="title">${ssrInterpolate(_ctx.$t("cookiebar_title"))}</strong><p>${ssrInterpolate(_ctx.$t("cookiebar_text"))}</p><div class="sub-wrap"><div class="checkbox-block"><label><input type="checkbox" checked="checked" name="check01" disabled><span class="fake-check">${ssrInterpolate(_ctx.$t("cookiebar_necessary"))}</span></label><label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(allCookies.value) ? ssrLooseContain(allCookies.value, null) : allCookies.value) ? " checked" : ""} name="check02"><span class="fake-check">${ssrInterpolate(_ctx.$t("cookiebar_other"))}</span></label></div><div class="btn-wrap">`);
        _push(ssrRenderComponent(_component_BLink, {
          class: "btn btn-primary text-white",
          onClick
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("cookiebar_accept"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("cookiebar_accept")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/CookieBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "BaseLayout",
  __ssrInlineRender: true,
  props: {
    wrapperClass: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const isClient = ref(false);
    onMounted(() => {
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<main id="main" class="${ssrRenderClass(__props.wrapperClass)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      if (isClient.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/common/BaseLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=BaseLayout-CHxrOdsN.js.map
