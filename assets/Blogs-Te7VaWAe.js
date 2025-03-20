import { BPagination } from "bootstrap-vue-next/components/BPagination";
import { BCard, BCardBody } from "bootstrap-vue-next/components/BCard";
import { BRow, BCol } from "bootstrap-vue-next/components/BContainer";
import { ref, computed, onMounted, unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createTextVNode, withDirectives, vModelText, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useStore } from "vuex";
import { _ as _sfc_main$1 } from "./AppLayout-CdCGV8yT.js";
import { _ as _sfc_main$2 } from "./Breadcrumbs-DwhHUqbs.js";
import "bootstrap-vue-next/components/BLink";
import "bootstrap-vue-next/components/BImg";
import "bootstrap-vue-next/components/BFormInput";
import "bootstrap-vue-next/components/BButton";
import "./products-Dsi6ZmTY.js";
import "axios";
import "../entry-server.js";
import "node:path";
import "@unhead/ssr";
import "bootstrap-vue-next";
import "vue-router";
import "vue-i18n";
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
import "bootstrap-vue-next/components/BNav";
import "vue-cookies";
const _sfc_main = {
  __name: "Blogs",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isClient = ref(false);
    const search = ref("");
    const totalBlogs = computed(() => store.getters["blog/getTotalBlogs"]);
    const blogsPerPage = computed(() => store.getters["blog/getBlogsPerPage"]);
    const currentPage = computed(() => store.getters["blog/getCurrentPage"]);
    computed(store.getters["blog/getCurrentPageNr"]);
    const onSearch = async () => {
      await store.dispatch("setLoading", true);
      await store.dispatch("blog/searchBlogs", {
        search: search.value
      });
      await store.dispatch("setLoading", false);
    };
    const currentPageNr = computed({
      get: () => store.getters["blog/getCurrentPageNr"],
      set: (val) => store.dispatch("blog/goToPage", { pageNr: val })
    });
    onMounted(() => {
      const bcrumb = {
        current: "Blog",
        routes: []
      };
      store.commit("breadcrumbs/set", bcrumb);
      isClient.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_b_card = BCard;
      const _component_b_card_body = BCardBody;
      const _component_BPagination = BPagination;
      if (isClient.value) {
        _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ wrapperClass: "blogs" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
              _push2(`<section class="static pt-7"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_b_row, {
                "no-gutters": "",
                class: "justify-content-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_b_col, {
                      lg: "9",
                      sm: "12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div${_scopeId3}><div class="title-serch-wrapper"${_scopeId3}><h1 class="title ps-sm-15 ps-lg-0"${_scopeId3}>Blog</h1><div class="d-flex justify-content-between align-items-center gap-5"${_scopeId3}><input type="search"${ssrRenderAttr("value", search.value)} class="form-control" placeholder="Zoek publicatie"${_scopeId3}><button class="btn btn-secondary to-serch"${_scopeId3}>${ssrInterpolate(_ctx.$t("to_serch"))}</button></div></div><div class="blog-list"${_scopeId3}><!--[-->`);
                          ssrRenderList(currentPage.value, (item, index) => {
                            _push4(ssrRenderComponent(_component_b_card, {
                              "no-body": "",
                              class: "overflow-hidden d-flex m-10",
                              key: index
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_b_row, {
                                    "no-gutters": "",
                                    class: ""
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_b_col, {
                                          md: "3",
                                          class: "h-100 text-center align-self-center p-5 mr-md-5"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<img class="blog-img"${ssrRenderAttr("src", item.featured_image || item.first_image)}${ssrRenderAttr("alt", item.title)}${_scopeId6}>`);
                                            } else {
                                              return [
                                                createVNode("img", {
                                                  class: "blog-img",
                                                  src: item.featured_image || item.first_image,
                                                  alt: item.title
                                                }, null, 8, ["src", "alt"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_b_col, {
                                          md: "9",
                                          class: ""
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_b_card_body, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  var _a, _b;
                                                  if (_push8) {
                                                    _push8(`<div${_scopeId7}><h3 class="blog-title"${_scopeId7}>${ssrInterpolate(item.title)}</h3><div class="posted-author-wrapper"${_scopeId7}>`);
                                                    if (item.creation_time) {
                                                      _push8(`<span${_scopeId7}><strong${_scopeId7}>${ssrInterpolate(_ctx.$t("posted"))}: </strong> ${ssrInterpolate(item.creation_time.split(" ")[0])}</span>`);
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                    if ((_a = item.author) == null ? void 0 : _a.name) {
                                                      _push8(`<span${_scopeId7}><strong${_scopeId7}>${ssrInterpolate(_ctx.$t("author"))}: </strong> ${ssrInterpolate(item.author.name)}</span>`);
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                    _push8(`</div></div><div class="blog-short-content"${_scopeId7}>${item.short_filtered_content ?? ""}</div><button type="button" variant="info" class="btn btn-secondary read-more"${_scopeId7}>${ssrInterpolate(_ctx.$t("read_more"))}</button>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", null, [
                                                        createVNode("h3", { class: "blog-title" }, toDisplayString(item.title), 1),
                                                        createVNode("div", { class: "posted-author-wrapper" }, [
                                                          item.creation_time ? (openBlock(), createBlock("span", { key: 0 }, [
                                                            createVNode("strong", null, toDisplayString(_ctx.$t("posted")) + ": ", 1),
                                                            createTextVNode(" " + toDisplayString(item.creation_time.split(" ")[0]), 1)
                                                          ])) : createCommentVNode("", true),
                                                          ((_b = item.author) == null ? void 0 : _b.name) ? (openBlock(), createBlock("span", { key: 1 }, [
                                                            createVNode("strong", null, toDisplayString(_ctx.$t("author")) + ": ", 1),
                                                            createTextVNode(" " + toDisplayString(item.author.name), 1)
                                                          ])) : createCommentVNode("", true)
                                                        ])
                                                      ]),
                                                      createVNode("div", {
                                                        class: "blog-short-content",
                                                        innerHTML: item.short_filtered_content
                                                      }, null, 8, ["innerHTML"]),
                                                      createVNode("button", {
                                                        onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                                        type: "button",
                                                        variant: "info",
                                                        class: "btn btn-secondary read-more"
                                                      }, toDisplayString(_ctx.$t("read_more")), 9, ["onClick"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_b_card_body, null, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createVNode("div", null, [
                                                        createVNode("h3", { class: "blog-title" }, toDisplayString(item.title), 1),
                                                        createVNode("div", { class: "posted-author-wrapper" }, [
                                                          item.creation_time ? (openBlock(), createBlock("span", { key: 0 }, [
                                                            createVNode("strong", null, toDisplayString(_ctx.$t("posted")) + ": ", 1),
                                                            createTextVNode(" " + toDisplayString(item.creation_time.split(" ")[0]), 1)
                                                          ])) : createCommentVNode("", true),
                                                          ((_a = item.author) == null ? void 0 : _a.name) ? (openBlock(), createBlock("span", { key: 1 }, [
                                                            createVNode("strong", null, toDisplayString(_ctx.$t("author")) + ": ", 1),
                                                            createTextVNode(" " + toDisplayString(item.author.name), 1)
                                                          ])) : createCommentVNode("", true)
                                                        ])
                                                      ]),
                                                      createVNode("div", {
                                                        class: "blog-short-content",
                                                        innerHTML: item.short_filtered_content
                                                      }, null, 8, ["innerHTML"]),
                                                      createVNode("button", {
                                                        onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                                        type: "button",
                                                        variant: "info",
                                                        class: "btn btn-secondary read-more"
                                                      }, toDisplayString(_ctx.$t("read_more")), 9, ["onClick"])
                                                    ];
                                                  }),
                                                  _: 2
                                                }, 1024)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_b_col, {
                                            md: "3",
                                            class: "h-100 text-center align-self-center p-5 mr-md-5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                class: "blog-img",
                                                src: item.featured_image || item.first_image,
                                                alt: item.title
                                              }, null, 8, ["src", "alt"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_b_col, {
                                            md: "9",
                                            class: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_b_card_body, null, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createVNode("div", null, [
                                                      createVNode("h3", { class: "blog-title" }, toDisplayString(item.title), 1),
                                                      createVNode("div", { class: "posted-author-wrapper" }, [
                                                        item.creation_time ? (openBlock(), createBlock("span", { key: 0 }, [
                                                          createVNode("strong", null, toDisplayString(_ctx.$t("posted")) + ": ", 1),
                                                          createTextVNode(" " + toDisplayString(item.creation_time.split(" ")[0]), 1)
                                                        ])) : createCommentVNode("", true),
                                                        ((_a = item.author) == null ? void 0 : _a.name) ? (openBlock(), createBlock("span", { key: 1 }, [
                                                          createVNode("strong", null, toDisplayString(_ctx.$t("author")) + ": ", 1),
                                                          createTextVNode(" " + toDisplayString(item.author.name), 1)
                                                        ])) : createCommentVNode("", true)
                                                      ])
                                                    ]),
                                                    createVNode("div", {
                                                      class: "blog-short-content",
                                                      innerHTML: item.short_filtered_content
                                                    }, null, 8, ["innerHTML"]),
                                                    createVNode("button", {
                                                      onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                                      type: "button",
                                                      variant: "info",
                                                      class: "btn btn-secondary read-more"
                                                    }, toDisplayString(_ctx.$t("read_more")), 9, ["onClick"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_b_row, {
                                      "no-gutters": "",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_col, {
                                          md: "3",
                                          class: "h-100 text-center align-self-center p-5 mr-md-5"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              class: "blog-img",
                                              src: item.featured_image || item.first_image,
                                              alt: item.title
                                            }, null, 8, ["src", "alt"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_b_col, {
                                          md: "9",
                                          class: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_card_body, null, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode("h3", { class: "blog-title" }, toDisplayString(item.title), 1),
                                                    createVNode("div", { class: "posted-author-wrapper" }, [
                                                      item.creation_time ? (openBlock(), createBlock("span", { key: 0 }, [
                                                        createVNode("strong", null, toDisplayString(_ctx.$t("posted")) + ": ", 1),
                                                        createTextVNode(" " + toDisplayString(item.creation_time.split(" ")[0]), 1)
                                                      ])) : createCommentVNode("", true),
                                                      ((_a = item.author) == null ? void 0 : _a.name) ? (openBlock(), createBlock("span", { key: 1 }, [
                                                        createVNode("strong", null, toDisplayString(_ctx.$t("author")) + ": ", 1),
                                                        createTextVNode(" " + toDisplayString(item.author.name), 1)
                                                      ])) : createCommentVNode("", true)
                                                    ])
                                                  ]),
                                                  createVNode("div", {
                                                    class: "blog-short-content",
                                                    innerHTML: item.short_filtered_content
                                                  }, null, 8, ["innerHTML"]),
                                                  createVNode("button", {
                                                    onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                                    type: "button",
                                                    variant: "info",
                                                    class: "btn btn-secondary read-more"
                                                  }, toDisplayString(_ctx.$t("read_more")), 9, ["onClick"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                          _push4(ssrRenderComponent(_component_BPagination, {
                            modelValue: currentPageNr.value,
                            "onUpdate:modelValue": ($event) => currentPageNr.value = $event,
                            "total-rows": totalBlogs.value,
                            "per-page": blogsPerPage.value
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode("div", { class: "title-serch-wrapper" }, [
                                createVNode("h1", { class: "title ps-sm-15 ps-lg-0" }, "Blog"),
                                createVNode("div", { class: "d-flex justify-content-between align-items-center gap-5" }, [
                                  withDirectives(createVNode("input", {
                                    type: "search",
                                    "onUpdate:modelValue": ($event) => search.value = $event,
                                    class: "form-control",
                                    placeholder: "Zoek publicatie"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, search.value]
                                  ]),
                                  createVNode("button", {
                                    class: "btn btn-secondary to-serch",
                                    onClick: onSearch
                                  }, toDisplayString(_ctx.$t("to_serch")), 1)
                                ])
                              ]),
                              createVNode("div", { class: "blog-list" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(currentPage.value, (item, index) => {
                                  return openBlock(), createBlock(_component_b_card, {
                                    "no-body": "",
                                    class: "overflow-hidden d-flex m-10",
                                    key: index
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_row, {
                                        "no-gutters": "",
                                        class: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_b_col, {
                                            md: "3",
                                            class: "h-100 text-center align-self-center p-5 mr-md-5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                class: "blog-img",
                                                src: item.featured_image || item.first_image,
                                                alt: item.title
                                              }, null, 8, ["src", "alt"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_b_col, {
                                            md: "9",
                                            class: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_b_card_body, null, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createVNode("div", null, [
                                                      createVNode("h3", { class: "blog-title" }, toDisplayString(item.title), 1),
                                                      createVNode("div", { class: "posted-author-wrapper" }, [
                                                        item.creation_time ? (openBlock(), createBlock("span", { key: 0 }, [
                                                          createVNode("strong", null, toDisplayString(_ctx.$t("posted")) + ": ", 1),
                                                          createTextVNode(" " + toDisplayString(item.creation_time.split(" ")[0]), 1)
                                                        ])) : createCommentVNode("", true),
                                                        ((_a = item.author) == null ? void 0 : _a.name) ? (openBlock(), createBlock("span", { key: 1 }, [
                                                          createVNode("strong", null, toDisplayString(_ctx.$t("author")) + ": ", 1),
                                                          createTextVNode(" " + toDisplayString(item.author.name), 1)
                                                        ])) : createCommentVNode("", true)
                                                      ])
                                                    ]),
                                                    createVNode("div", {
                                                      class: "blog-short-content",
                                                      innerHTML: item.short_filtered_content
                                                    }, null, 8, ["innerHTML"]),
                                                    createVNode("button", {
                                                      onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                                      type: "button",
                                                      variant: "info",
                                                      class: "btn btn-secondary read-more"
                                                    }, toDisplayString(_ctx.$t("read_more")), 9, ["onClick"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              createVNode(_component_BPagination, {
                                modelValue: currentPageNr.value,
                                "onUpdate:modelValue": ($event) => currentPageNr.value = $event,
                                "total-rows": totalBlogs.value,
                                "per-page": blogsPerPage.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "total-rows", "per-page"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_b_col, {
                      md: "2",
                      class: "d-none d-lg-block archive-wrapper"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h3 class="title"${_scopeId3}>${ssrInterpolate(_ctx.$t("archive"))}</h3><div${_scopeId3}><select name="" id=""${_scopeId3}><option value=""${_scopeId3}>Maand</option></select></div><div${_scopeId3}><select name="" id=""${_scopeId3}><option value=""${_scopeId3}>Jaar</option></select></div>`);
                        } else {
                          return [
                            createVNode("h3", { class: "title" }, toDisplayString(_ctx.$t("archive")), 1),
                            createVNode("div", null, [
                              createVNode("select", {
                                name: "",
                                id: ""
                              }, [
                                createVNode("option", { value: "" }, "Maand")
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("select", {
                                name: "",
                                id: ""
                              }, [
                                createVNode("option", { value: "" }, "Jaar")
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_b_col, {
                        lg: "9",
                        sm: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "title-serch-wrapper" }, [
                              createVNode("h1", { class: "title ps-sm-15 ps-lg-0" }, "Blog"),
                              createVNode("div", { class: "d-flex justify-content-between align-items-center gap-5" }, [
                                withDirectives(createVNode("input", {
                                  type: "search",
                                  "onUpdate:modelValue": ($event) => search.value = $event,
                                  class: "form-control",
                                  placeholder: "Zoek publicatie"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, search.value]
                                ]),
                                createVNode("button", {
                                  class: "btn btn-secondary to-serch",
                                  onClick: onSearch
                                }, toDisplayString(_ctx.$t("to_serch")), 1)
                              ])
                            ]),
                            createVNode("div", { class: "blog-list" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(currentPage.value, (item, index) => {
                                return openBlock(), createBlock(_component_b_card, {
                                  "no-body": "",
                                  class: "overflow-hidden d-flex m-10",
                                  key: index
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_row, {
                                      "no-gutters": "",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_col, {
                                          md: "3",
                                          class: "h-100 text-center align-self-center p-5 mr-md-5"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              class: "blog-img",
                                              src: item.featured_image || item.first_image,
                                              alt: item.title
                                            }, null, 8, ["src", "alt"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_b_col, {
                                          md: "9",
                                          class: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_card_body, null, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode("h3", { class: "blog-title" }, toDisplayString(item.title), 1),
                                                    createVNode("div", { class: "posted-author-wrapper" }, [
                                                      item.creation_time ? (openBlock(), createBlock("span", { key: 0 }, [
                                                        createVNode("strong", null, toDisplayString(_ctx.$t("posted")) + ": ", 1),
                                                        createTextVNode(" " + toDisplayString(item.creation_time.split(" ")[0]), 1)
                                                      ])) : createCommentVNode("", true),
                                                      ((_a = item.author) == null ? void 0 : _a.name) ? (openBlock(), createBlock("span", { key: 1 }, [
                                                        createVNode("strong", null, toDisplayString(_ctx.$t("author")) + ": ", 1),
                                                        createTextVNode(" " + toDisplayString(item.author.name), 1)
                                                      ])) : createCommentVNode("", true)
                                                    ])
                                                  ]),
                                                  createVNode("div", {
                                                    class: "blog-short-content",
                                                    innerHTML: item.short_filtered_content
                                                  }, null, 8, ["innerHTML"]),
                                                  createVNode("button", {
                                                    onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                                    type: "button",
                                                    variant: "info",
                                                    class: "btn btn-secondary read-more"
                                                  }, toDisplayString(_ctx.$t("read_more")), 9, ["onClick"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            createVNode(_component_BPagination, {
                              modelValue: currentPageNr.value,
                              "onUpdate:modelValue": ($event) => currentPageNr.value = $event,
                              "total-rows": totalBlogs.value,
                              "per-page": blogsPerPage.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-rows", "per-page"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_col, {
                        md: "2",
                        class: "d-none d-lg-block archive-wrapper"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "title" }, toDisplayString(_ctx.$t("archive")), 1),
                          createVNode("div", null, [
                            createVNode("select", {
                              name: "",
                              id: ""
                            }, [
                              createVNode("option", { value: "" }, "Maand")
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("select", {
                              name: "",
                              id: ""
                            }, [
                              createVNode("option", { value: "" }, "Jaar")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</section>`);
            } else {
              return [
                createVNode(unref(_sfc_main$2)),
                createVNode("section", { class: "static pt-7" }, [
                  createVNode(_component_b_row, {
                    "no-gutters": "",
                    class: "justify-content-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_col, {
                        lg: "9",
                        sm: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "title-serch-wrapper" }, [
                              createVNode("h1", { class: "title ps-sm-15 ps-lg-0" }, "Blog"),
                              createVNode("div", { class: "d-flex justify-content-between align-items-center gap-5" }, [
                                withDirectives(createVNode("input", {
                                  type: "search",
                                  "onUpdate:modelValue": ($event) => search.value = $event,
                                  class: "form-control",
                                  placeholder: "Zoek publicatie"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, search.value]
                                ]),
                                createVNode("button", {
                                  class: "btn btn-secondary to-serch",
                                  onClick: onSearch
                                }, toDisplayString(_ctx.$t("to_serch")), 1)
                              ])
                            ]),
                            createVNode("div", { class: "blog-list" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(currentPage.value, (item, index) => {
                                return openBlock(), createBlock(_component_b_card, {
                                  "no-body": "",
                                  class: "overflow-hidden d-flex m-10",
                                  key: index
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_row, {
                                      "no-gutters": "",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_col, {
                                          md: "3",
                                          class: "h-100 text-center align-self-center p-5 mr-md-5"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              class: "blog-img",
                                              src: item.featured_image || item.first_image,
                                              alt: item.title
                                            }, null, 8, ["src", "alt"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_b_col, {
                                          md: "9",
                                          class: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_b_card_body, null, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode("h3", { class: "blog-title" }, toDisplayString(item.title), 1),
                                                    createVNode("div", { class: "posted-author-wrapper" }, [
                                                      item.creation_time ? (openBlock(), createBlock("span", { key: 0 }, [
                                                        createVNode("strong", null, toDisplayString(_ctx.$t("posted")) + ": ", 1),
                                                        createTextVNode(" " + toDisplayString(item.creation_time.split(" ")[0]), 1)
                                                      ])) : createCommentVNode("", true),
                                                      ((_a = item.author) == null ? void 0 : _a.name) ? (openBlock(), createBlock("span", { key: 1 }, [
                                                        createVNode("strong", null, toDisplayString(_ctx.$t("author")) + ": ", 1),
                                                        createTextVNode(" " + toDisplayString(item.author.name), 1)
                                                      ])) : createCommentVNode("", true)
                                                    ])
                                                  ]),
                                                  createVNode("div", {
                                                    class: "blog-short-content",
                                                    innerHTML: item.short_filtered_content
                                                  }, null, 8, ["innerHTML"]),
                                                  createVNode("button", {
                                                    onClick: ($event) => _ctx.$router.push("/blog/" + item.identifier),
                                                    type: "button",
                                                    variant: "info",
                                                    class: "btn btn-secondary read-more"
                                                  }, toDisplayString(_ctx.$t("read_more")), 9, ["onClick"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            createVNode(_component_BPagination, {
                              modelValue: currentPageNr.value,
                              "onUpdate:modelValue": ($event) => currentPageNr.value = $event,
                              "total-rows": totalBlogs.value,
                              "per-page": blogsPerPage.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-rows", "per-page"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_col, {
                        md: "2",
                        class: "d-none d-lg-block archive-wrapper"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "title" }, toDisplayString(_ctx.$t("archive")), 1),
                          createVNode("div", null, [
                            createVNode("select", {
                              name: "",
                              id: ""
                            }, [
                              createVNode("option", { value: "" }, "Maand")
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("select", {
                              name: "",
                              id: ""
                            }, [
                              createVNode("option", { value: "" }, "Jaar")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/esf_thehague_schinsleder/core/views/blog/Blogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Blogs-Te7VaWAe.js.map
