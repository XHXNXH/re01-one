"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      content: "",
      list: []
    };
  },
  onLoad() {
    common_vendor.Vs.callFunction({
      name: "fun",
      data: {
        api: "getMessage"
      }
    }).then((res) => {
      this.list = res.result.data;
    });
  },
  methods: {
    publish() {
      common_vendor.Vs.callFunction({
        name: "fun",
        data: {
          api: "publish",
          content: this.content
        }
      }).then((res) => {
        console.log(res);
        this.content = "";
        common_vendor.index.showToast({
          title: "留言成功",
          icon: "success"
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.content,
    b: common_vendor.o(($event) => $data.content = $event.detail.value),
    c: common_vendor.o(($event) => $options.publish()),
    d: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.content),
        b: item._id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
