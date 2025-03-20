import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { BLink } from "bootstrap-vue-next/components/BLink";
import { BCarousel, BCarouselSlide } from "bootstrap-vue-next/components/BCarousel";
import { computed, ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { useStore } from "vuex";
import { isBrowser, isMobile, isTablet } from "mobile-device-detect";
const _sfc_main$1 = {
  __name: "CatBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const slider1 = computed(() => store.getters["category/getSlider"]);
    const slide = ref(0);
    const sliding = ref(false);
    const slider = computed(() => {
      let sliderValue = slider1.value;
      if (sliderValue != null) {
        if (sliderValue.slides != null) {
          sliderValue.slides.forEach((element) => {
            if (mobileCheck.value == "browser") {
              element.optImage = element.media.url;
            } else if (mobileCheck.value == "tablet") {
              element.optImage = element.media.larger;
            } else {
              element.optImage = element.media.medium;
            }
          });
        }
      }
      return sliderValue;
    });
    const mobileCheck = computed(() => {
      if (isBrowser) {
        return "browser";
      }
      if (isMobile && isTablet) {
        return "tablet";
      }
      return "mobile";
    });
    const onSlideStart = () => {
      sliding.value = true;
    };
    const onSlideEnd = () => {
      sliding.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_carousel = BCarousel;
      const _component_b_carousel_slide = BCarouselSlide;
      const _component_b_link = BLink;
      if (slider.value != null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ id: "catBanner" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_b_carousel, {
          id: "carousel-cat-banner",
          modelValue: slide.value,
          "onUpdate:modelValue": ($event) => slide.value = $event,
          interval: 5e3,
          indicators: "",
          "img-width": "1920",
          "img-height": "300",
          style: { "text-shadow": "1px 1px 2px #333" },
          onSlidingStart: onSlideStart,
          onSlidingEnd: onSlideEnd,
          class: "hero-banner-carousel category"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(slider.value.slides, (bSlide, index) => {
                _push2(ssrRenderComponent(_component_b_carousel_slide, {
                  key: index,
                  style: { backgroundImage: `url(${bSlide.optImage})` },
                  id: "carousel-cat-banner" + index
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="container"${_scopeId2}><span class="d-block text-uppercase text-light font-weight-normal"${_scopeId2}>${ssrInterpolate(bSlide.title)}</span>`);
                      if (bSlide.description != null) {
                        _push3(`<div${_scopeId2}>${bSlide.description ?? ""}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (bSlide.link != null) {
                        _push3(ssrRenderComponent(_component_b_link, {
                          to: bSlide.link,
                          class: "btn btn-blue ml-md-0"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(bSlide.buttonText)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(bSlide.buttonText), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "container" }, [
                          createVNode("span", { class: "d-block text-uppercase text-light font-weight-normal" }, toDisplayString(bSlide.title), 1),
                          bSlide.description != null ? (openBlock(), createBlock("div", {
                            key: 0,
                            innerHTML: bSlide.description
                          }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                          bSlide.link != null ? (openBlock(), createBlock(_component_b_link, {
                            key: 1,
                            to: bSlide.link,
                            class: "btn btn-blue ml-md-0"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(bSlide.buttonText), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(slider.value.slides, (bSlide, index) => {
                  return openBlock(), createBlock(_component_b_carousel_slide, {
                    key: index,
                    style: { backgroundImage: `url(${bSlide.optImage})` },
                    id: "carousel-cat-banner" + index
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "container" }, [
                        createVNode("span", { class: "d-block text-uppercase text-light font-weight-normal" }, toDisplayString(bSlide.title), 1),
                        bSlide.description != null ? (openBlock(), createBlock("div", {
                          key: 0,
                          innerHTML: bSlide.description
                        }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                        bSlide.link != null ? (openBlock(), createBlock(_component_b_link, {
                          key: 1,
                          to: bSlide.link,
                          class: "btn btn-blue ml-md-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(bSlide.buttonText), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["style", "id"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/CatBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AdvertisingBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/base/core/components/AdvertisingBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
//# sourceMappingURL=AdvertisingBanner-BW7fLnPX.js.map
