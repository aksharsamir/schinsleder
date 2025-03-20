import { computed, onBeforeMount, onServerPrefetch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useStore } from "vuex";
const _sfc_main = {
  __name: "BlockSimple",
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
    const store = useStore();
    const props = __props;
    const getCmsData = computed(() => {
      if (props.id) {
        return store.getters[`cmsBlock/getCmsBlockById`](props.id);
      } else if (props.identifier) {
        return store.getters[`cmsBlock/getCmsBlockByIdentifier`](props.identifier);
      }
      return null;
    });
    function fetchCmsBlock() {
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
    }
    onBeforeMount(() => {
      fetchCmsBlock();
    });
    onServerPrefetch(fetchCmsBlock);
    return (_ctx, _push, _parent, _attrs) => {
      if (getCmsData.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["cms-block-content", { container: __props.sync }]
        }, _attrs))}><div>${getCmsData.value.content ?? ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/core/BlockSimple.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=BlockSimple-BHbXwFf2.js.map
