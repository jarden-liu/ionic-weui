(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, "@font-face{\n" +
"  font-weight:normal;\n" +
"  font-style:normal;\n" +
"  font-family:\"weui\";\n" +
"  src:url('data:application/octet-stream;base64,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') format('truetype');\n" +
"}\n" +
"[class^=\"weui-icon-\"],\n" +
"[class*=\" weui-icon-\"]{\n" +
"  display:inline-block;\n" +
"  vertical-align:middle;\n" +
"  font:normal normal normal 14px/1 \"weui\";\n" +
"  font-size:inherit;\n" +
"  text-rendering:auto;\n" +
"  -webkit-font-smoothing:antialiased;\n" +
"}\n" +
"[class^=\"weui-icon-\"]:before,\n" +
"[class*=\" weui-icon-\"]:before{\n" +
"  display:inline-block;\n" +
"  margin-left:.2em;\n" +
"  margin-right:.2em;\n" +
"}\n" +
".weui-icon-circle:before{\n" +
"  content:\"\\EA01\";\n" +
"}\n" +
".weui-icon-download:before{\n" +
"  content:\"\\EA02\";\n" +
"}\n" +
".weui-icon-info:before{\n" +
"  content:\"\\EA03\";\n" +
"}\n" +
".weui-icon-safe-success:before{\n" +
"  content:\"\\EA04\";\n" +
"}\n" +
".weui-icon-safe-warn:before{\n" +
"  content:\"\\EA05\";\n" +
"}\n" +
".weui-icon-success:before{\n" +
"  content:\"\\EA06\";\n" +
"}\n" +
".weui-icon-success-circle:before{\n" +
"  content:\"\\EA07\";\n" +
"}\n" +
".weui-icon-success-no-circle:before{\n" +
"  content:\"\\EA08\";\n" +
"}\n" +
".weui-icon-waiting:before{\n" +
"  content:\"\\EA09\";\n" +
"}\n" +
".weui-icon-waiting-circle:before{\n" +
"  content:\"\\EA0A\";\n" +
"}\n" +
".weui-icon-warn:before{\n" +
"  content:\"\\EA0B\";\n" +
"}\n" +
".weui-icon-info-circle:before{\n" +
"  content:\"\\EA0C\";\n" +
"}\n" +
".weui-icon-cancel:before{\n" +
"  content:\"\\EA0D\";\n" +
"}\n" +
".weui-icon-search:before{\n" +
"  content:\"\\EA0E\";\n" +
"}\n" +
".weui-icon-clear:before{\n" +
"  content:\"\\EA0F\";\n" +
"}\n" +
".weui-icon-back:before{\n" +
"  content:\"\\EA10\";\n" +
"}\n" +
".weui-icon-delete:before{\n" +
"  content:\"\\EA11\";\n" +
"}\n" +
"[class^=\"weui-icon_\"]:before,\n" +
"[class*=\" weui-icon_\"]:before{\n" +
"  margin:0;\n" +
"}\n" +
".weui-icon-success{\n" +
"  font-size:23px;\n" +
"  color:#09BB07;\n" +
"}\n" +
".weui-icon-waiting{\n" +
"  font-size:23px;\n" +
"  color:#10AEFF;\n" +
"}\n" +
".weui-icon-warn{\n" +
"  font-size:23px;\n" +
"  color:#F43530;\n" +
"}\n" +
".weui-icon-info{\n" +
"  font-size:23px;\n" +
"  color:#10AEFF;\n" +
"}\n" +
".weui-icon-success-circle{\n" +
"  font-size:23px;\n" +
"  color:#09BB07;\n" +
"}\n" +
".weui-icon-success-no-circle{\n" +
"  font-size:23px;\n" +
"  color:#09BB07;\n" +
"}\n" +
".weui-icon-waiting-circle{\n" +
"  font-size:23px;\n" +
"  color:#10AEFF;\n" +
"}\n" +
".weui-icon-circle{\n" +
"  font-size:23px;\n" +
"  color:#C9C9C9;\n" +
"}\n" +
".weui-icon-download{\n" +
"  font-size:23px;\n" +
"  color:#09BB07;\n" +
"}\n" +
".weui-icon-info-circle{\n" +
"  font-size:23px;\n" +
"  color:#09BB07;\n" +
"}\n" +
".weui-icon-safe-success{\n" +
"  color:#09BB07;\n" +
"}\n" +
".weui-icon-safe-warn{\n" +
"  color:#FFBE00;\n" +
"}\n" +
".weui-icon-cancel{\n" +
"  color:#F43530;\n" +
"  font-size:22px;\n" +
"}\n" +
".weui-icon-search{\n" +
"  color:#B2B2B2;\n" +
"  font-size:14px;\n" +
"}\n" +
".weui-icon-clear{\n" +
"  color:#B2B2B2;\n" +
"  font-size:14px;\n" +
"}\n" +
".weui-icon-delete.weui-icon_gallery-delete{\n" +
"  color:#FFFFFF;\n" +
"  font-size:22px;\n" +
"}\n" +
".weui-icon_msg{\n" +
"  font-size:93px;\n" +
"}\n" +
".weui-icon_msg.weui-icon-warn{\n" +
"  color:#F76260;\n" +
"}\n" +
".weui-icon_msg-primary{\n" +
"  font-size:93px;\n" +
"}\n" +
".weui-icon_msg-primary.weui-icon-warn{\n" +
"  color:#FFBE00;\n" +
"}\n" +
".weui-btn{\n" +
"  position:relative;\n" +
"  display:block;\n" +
"  margin-left:auto;\n" +
"  margin-right:auto;\n" +
"  padding-left:14px;\n" +
"  padding-right:14px;\n" +
"  box-sizing:border-box;\n" +
"  font-size:18px;\n" +
"  text-align:center;\n" +
"  text-decoration:none;\n" +
"  color:#FFFFFF;\n" +
"  line-height:2.55555556;\n" +
"  border-radius:5px;\n" +
"  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n" +
"  overflow:hidden;\n" +
"}\n" +
".weui-btn:after{\n" +
"  content:\" \";\n" +
"  width:200%;\n" +
"  height:200%;\n" +
"  position:absolute;\n" +
"  top:0;\n" +
"  left:0;\n" +
"  border:1px solid rgba(0, 0, 0, 0.2);\n" +
"  -webkit-transform:scale(0.5);\n" +
"          transform:scale(0.5);\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  box-sizing:border-box;\n" +
"  border-radius:10px;\n" +
"}\n" +
".weui-btn_inline{\n" +
"  display:inline-block;\n" +
"}\n" +
".weui-btn_default{\n" +
"  color:#000000;\n" +
"  background-color:#F8F8F8;\n" +
"}\n" +
".weui-btn_default:not(.weui-btn_disabled):visited{\n" +
"  color:#000000;\n" +
"}\n" +
".weui-btn_default:not(.weui-btn_disabled):active{\n" +
"  color:rgba(0, 0, 0, 0.6);\n" +
"  background-color:#DEDEDE;\n" +
"}\n" +
".weui-btn_primary{\n" +
"  background-color:#1AAD19;\n" +
"}\n" +
".weui-btn_primary:not(.weui-btn_disabled):visited{\n" +
"  color:#FFFFFF;\n" +
"}\n" +
".weui-btn_primary:not(.weui-btn_disabled):active{\n" +
"  color:rgba(255, 255, 255, 0.6);\n" +
"  background-color:#179B16;\n" +
"}\n" +
".weui-btn_warn{\n" +
"  background-color:#E64340;\n" +
"}\n" +
".weui-btn_warn:not(.weui-btn_disabled):visited{\n" +
"  color:#FFFFFF;\n" +
"}\n" +
".weui-btn_warn:not(.weui-btn_disabled):active{\n" +
"  color:rgba(255, 255, 255, 0.6);\n" +
"  background-color:#CE3C39;\n" +
"}\n" +
".weui-btn_disabled{\n" +
"  color:rgba(255, 255, 255, 0.6);\n" +
"}\n" +
".weui-btn_disabled.weui-btn_default{\n" +
"  color:rgba(0, 0, 0, 0.3);\n" +
"  background-color:#F7F7F7;\n" +
"}\n" +
".weui-btn_disabled.weui-btn_primary{\n" +
"  background-color:#9ED99D;\n" +
"}\n" +
".weui-btn_disabled.weui-btn_warn{\n" +
"  background-color:#EC8B89;\n" +
"}\n" +
".weui-btn_loading .weui-loading{\n" +
"  margin:-0.2em 0.34em 0 0;\n" +
"}\n" +
".weui-btn_loading.weui-btn_primary,\n" +
".weui-btn_loading.weui-btn_warn{\n" +
"  color:rgba(255, 255, 255, 0.6);\n" +
"}\n" +
".weui-btn_loading.weui-btn_primary{\n" +
"  background-color:#179B16;\n" +
"}\n" +
".weui-btn_loading.weui-btn_warn{\n" +
"  background-color:#CE3C39;\n" +
"}\n" +
".weui-btn_plain-primary{\n" +
"  color:#1aad19;\n" +
"  border:1px solid #1aad19;\n" +
"}\n" +
".weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{\n" +
"  color:rgba(26, 173, 25, 0.6);\n" +
"  border-color:rgba(26, 173, 25, 0.6);\n" +
"}\n" +
".weui-btn_plain-primary:after{\n" +
"  border-width:0;\n" +
"}\n" +
".weui-btn_plain-default{\n" +
"  color:#353535;\n" +
"  border:1px solid #353535;\n" +
"}\n" +
".weui-btn_plain-default:not(.weui-btn_plain-disabled):active{\n" +
"  color:rgba(53, 53, 53, 0.6);\n" +
"  border-color:rgba(53, 53, 53, 0.6);\n" +
"}\n" +
".weui-btn_plain-default:after{\n" +
"  border-width:0;\n" +
"}\n" +
".weui-btn_plain-disabled{\n" +
"  color:rgba(0, 0, 0, 0.2);\n" +
"  border-color:rgba(0, 0, 0, 0.2);\n" +
"}\n" +
"button.weui-btn,\n" +
"input.weui-btn{\n" +
"  width:100%;\n" +
"  border-width:0;\n" +
"  outline:0;\n" +
"  -webkit-appearance:none;\n" +
"}\n" +
"button.weui-btn:focus,\n" +
"input.weui-btn:focus{\n" +
"  outline:0;\n" +
"}\n" +
"button.weui-btn_inline,\n" +
"input.weui-btn_inline,\n" +
"button.weui-btn_mini,\n" +
"input.weui-btn_mini{\n" +
"  width:auto;\n" +
"}\n" +
"button.weui-btn_plain-primary,\n" +
"input.weui-btn_plain-primary,\n" +
"button.weui-btn_plain-default,\n" +
"input.weui-btn_plain-default{\n" +
"  border-width:1px;\n" +
"  background-color:transparent;\n" +
"}\n" +
".weui-btn_mini{\n" +
"  display:inline-block;\n" +
"  padding:0 1.32em;\n" +
"  line-height:2.3;\n" +
"  font-size:13px;\n" +
"}\n" +
".weui-btn + .weui-btn{\n" +
"  margin-top:15px;\n" +
"}\n" +
".weui-btn.weui-btn_inline + .weui-btn.weui-btn_inline{\n" +
"  margin-top:auto;\n" +
"  margin-left:15px;\n" +
"}\n" +
".weui-btn-area{\n" +
"  margin:1.17647059em 15px 0.3em;\n" +
"}\n" +
".weui-btn-area_inline{\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"}\n" +
".weui-btn-area_inline .weui-btn{\n" +
"  margin-top:auto;\n" +
"  margin-right:15px;\n" +
"  width:100%;\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"}\n" +
".weui-btn-area_inline .weui-btn:last-child{\n" +
"  margin-right:0;\n" +
"}\n" +
".weui-cells{\n" +
"  margin-top:1.17647059em;\n" +
"  background-color:#FFFFFF;\n" +
"  line-height:1.47058824;\n" +
"  font-size:17px;\n" +
"  overflow:hidden;\n" +
"  position:relative;\n" +
"}\n" +
".weui-cells:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #e5e5e5;\n" +
"  color:#e5e5e5;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"  z-index:2;\n" +
"}\n" +
".weui-cells:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #e5e5e5;\n" +
"  color:#e5e5e5;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"  z-index:2;\n" +
"}\n" +
".weui-cells__title{\n" +
"  margin-top:.77em;\n" +
"  margin-bottom:.3em;\n" +
"  padding-left:15px;\n" +
"  padding-right:15px;\n" +
"  color:#999999;\n" +
"  font-size:14px;\n" +
"}\n" +
".weui-cells__title + .weui-cells{\n" +
"  margin-top:0;\n" +
"}\n" +
".weui-cells__tips{\n" +
"  margin-top:.3em;\n" +
"  color:#999999;\n" +
"  padding-left:15px;\n" +
"  padding-right:15px;\n" +
"  font-size:14px;\n" +
"}\n" +
".weui-cell{\n" +
"  padding:10px 15px;\n" +
"  position:relative;\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  -webkit-box-align:center;\n" +
"  -webkit-align-items:center;\n" +
"          align-items:center;\n" +
"}\n" +
".weui-cell:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #e5e5e5;\n" +
"  color:#e5e5e5;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"  left:15px;\n" +
"  z-index:2;\n" +
"}\n" +
".weui-cell:first-child:before{\n" +
"  display:none;\n" +
"}\n" +
".weui-cell_primary{\n" +
"  -webkit-box-align:start;\n" +
"  -webkit-align-items:flex-start;\n" +
"          align-items:flex-start;\n" +
"}\n" +
".weui-cell__bd{\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"}\n" +
".weui-cell__ft{\n" +
"  text-align:right;\n" +
"  color:#999999;\n" +
"}\n" +
".weui-cell_swiped{\n" +
"  display:block;\n" +
"  padding:0;\n" +
"}\n" +
".weui-cell_swiped > .weui-cell__bd{\n" +
"  position:relative;\n" +
"  z-index:1;\n" +
"  background-color:#FFFFFF;\n" +
"}\n" +
".weui-cell_swiped > .weui-cell__ft{\n" +
"  position:absolute;\n" +
"  right:0;\n" +
"  top:0;\n" +
"  bottom:0;\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  color:#FFFFFF;\n" +
"}\n" +
".weui-swiped-btn{\n" +
"  display:block;\n" +
"  padding:10px 1em;\n" +
"  line-height:1.47058824;\n" +
"  color:inherit;\n" +
"}\n" +
".weui-swiped-btn_default{\n" +
"  background-color:#C7C7CC;\n" +
"}\n" +
".weui-swiped-btn_warn{\n" +
"  background-color:#FF3B30;\n" +
"}\n" +
".weui-cell_access{\n" +
"  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n" +
"  color:inherit;\n" +
"}\n" +
".weui-cell_access:active{\n" +
"  background-color:#ECECEC;\n" +
"}\n" +
".weui-cell_access .weui-cell__ft{\n" +
"  padding-right:13px;\n" +
"  position:relative;\n" +
"}\n" +
".weui-cell_access .weui-cell__ft:after{\n" +
"  content:\" \";\n" +
"  display:inline-block;\n" +
"  height:6px;\n" +
"  width:6px;\n" +
"  border-width:2px 2px 0 0;\n" +
"  border-color:#C8C8CD;\n" +
"  border-style:solid;\n" +
"  -webkit-transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"          transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"  position:relative;\n" +
"  top:-2px;\n" +
"  position:absolute;\n" +
"  top:50%;\n" +
"  margin-top:-4px;\n" +
"  right:2px;\n" +
"}\n" +
".weui-cell_link{\n" +
"  color:#586C94;\n" +
"  font-size:14px;\n" +
"}\n" +
".weui-cell_link:first-child:before{\n" +
"  display:block;\n" +
"}\n" +
".weui-check__label{\n" +
"  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui-check__label:active{\n" +
"  background-color:#ECECEC;\n" +
"}\n" +
".weui-check{\n" +
"  position:absolute;\n" +
"  left:-9999em;\n" +
"}\n" +
".weui-cells_radio .weui-cell__ft{\n" +
"  padding-left:0.35em;\n" +
"}\n" +
".weui-cells_radio .weui-check:checked + .weui-icon-checked:before{\n" +
"  display:block;\n" +
"  content:'\\EA08';\n" +
"  color:#09BB07;\n" +
"  font-size:16px;\n" +
"}\n" +
".weui-cells_checkbox .weui-cell__hd{\n" +
"  padding-right:0.35em;\n" +
"}\n" +
".weui-cells_checkbox .weui-icon-checked:before{\n" +
"  content:'\\EA01';\n" +
"  color:#C9C9C9;\n" +
"  font-size:23px;\n" +
"  display:block;\n" +
"}\n" +
".weui-cells_checkbox .weui-check:checked + .weui-icon-checked:before{\n" +
"  content:'\\EA06';\n" +
"  color:#09BB07;\n" +
"}\n" +
".weui-label{\n" +
"  display:block;\n" +
"  width:105px;\n" +
"  word-wrap:break-word;\n" +
"  word-break:break-all;\n" +
"}\n" +
".weui-input{\n" +
"  width:100%;\n" +
"  border:0;\n" +
"  outline:0;\n" +
"  -webkit-appearance:none;\n" +
"  background-color:transparent;\n" +
"  font-size:inherit;\n" +
"  color:inherit;\n" +
"  height:1.47058824em;\n" +
"  line-height:1.47058824;\n" +
"}\n" +
".weui-input::-webkit-outer-spin-button,\n" +
".weui-input::-webkit-inner-spin-button{\n" +
"  -webkit-appearance:none;\n" +
"  margin:0;\n" +
"}\n" +
".weui-textarea{\n" +
"  display:block;\n" +
"  border:0;\n" +
"  resize:none;\n" +
"  width:100%;\n" +
"  color:inherit;\n" +
"  font-size:1em;\n" +
"  line-height:inherit;\n" +
"  outline:0;\n" +
"}\n" +
".weui-textarea-counter{\n" +
"  color:#B2B2B2;\n" +
"  text-align:right;\n" +
"}\n" +
".weui-cell_warn .weui-textarea-counter{\n" +
"  color:#E64340;\n" +
"}\n" +
".weui-toptips{\n" +
"  display:none;\n" +
"  position:fixed;\n" +
"  -webkit-transform:translateZ(0);\n" +
"          transform:translateZ(0);\n" +
"  top:0;\n" +
"  left:0;\n" +
"  right:0;\n" +
"  padding:5px;\n" +
"  font-size:14px;\n" +
"  text-align:center;\n" +
"  color:#FFF;\n" +
"  z-index:5000;\n" +
"  word-wrap:break-word;\n" +
"  word-break:break-all;\n" +
"}\n" +
".weui-toptips_warn{\n" +
"  background-color:#E64340;\n" +
"}\n" +
".weui-cells_form .weui-cell__ft{\n" +
"  font-size:0;\n" +
"}\n" +
".weui-cells_form .weui-icon-warn{\n" +
"  display:none;\n" +
"}\n" +
".weui-cells_form input,\n" +
".weui-cells_form textarea,\n" +
".weui-cells_form label[for]{\n" +
"  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui-cell_warn{\n" +
"  color:#E64340;\n" +
"}\n" +
".weui-cell_warn .weui-icon-warn{\n" +
"  display:inline-block;\n" +
"}\n" +
".weui-form-preview{\n" +
"  position:relative;\n" +
"  background-color:#FFFFFF;\n" +
"}\n" +
".weui-form-preview:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #e5e5e5;\n" +
"  color:#e5e5e5;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-form-preview:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #e5e5e5;\n" +
"  color:#e5e5e5;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-form-preview__hd{\n" +
"  position:relative;\n" +
"  padding:10px 15px;\n" +
"  text-align:right;\n" +
"  line-height:2.5em;\n" +
"}\n" +
".weui-form-preview__hd:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #e5e5e5;\n" +
"  color:#e5e5e5;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"  left:15px;\n" +
"}\n" +
".weui-form-preview__hd .weui-form-preview__value{\n" +
"  font-style:normal;\n" +
"  font-size:1.6em;\n" +
"}\n" +
".weui-form-preview__bd{\n" +
"  padding:10px 15px;\n" +
"  font-size:.9em;\n" +
"  text-align:right;\n" +
"  color:#999999;\n" +
"  line-height:2;\n" +
"}\n" +
".weui-form-preview__ft{\n" +
"  position:relative;\n" +
"  line-height:50px;\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"}\n" +
".weui-form-preview__ft:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #D5D5D6;\n" +
"  color:#D5D5D6;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-form-preview__item{\n" +
"  overflow:hidden;\n" +
"}\n" +
".weui-form-preview__label{\n" +
"  float:left;\n" +
"  margin-right:1em;\n" +
"  min-width:4em;\n" +
"  color:#999999;\n" +
"  text-align:justify;\n" +
"  text-align-last:justify;\n" +
"}\n" +
".weui-form-preview__value{\n" +
"  display:block;\n" +
"  overflow:hidden;\n" +
"  word-break:normal;\n" +
"  word-wrap:break-word;\n" +
"}\n" +
".weui-form-preview__btn{\n" +
"  position:relative;\n" +
"  display:block;\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"  color:#3CC51F;\n" +
"  text-align:center;\n" +
"  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n" +
"}\n" +
"button.weui-form-preview__btn{\n" +
"  background-color:transparent;\n" +
"  border:0;\n" +
"  outline:0;\n" +
"  line-height:inherit;\n" +
"  font-size:inherit;\n" +
"}\n" +
".weui-form-preview__btn:active{\n" +
"  background-color:#EEEEEE;\n" +
"}\n" +
".weui-form-preview__btn:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  width:1px;\n" +
"  bottom:0;\n" +
"  border-left:1px solid #D5D5D6;\n" +
"  color:#D5D5D6;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleX(0.5);\n" +
"          transform:scaleX(0.5);\n" +
"}\n" +
".weui-form-preview__btn:first-child:after{\n" +
"  display:none;\n" +
"}\n" +
".weui-form-preview__btn_default{\n" +
"  color:#999999;\n" +
"}\n" +
".weui-form-preview__btn_primary{\n" +
"  color:#0BB20C;\n" +
"}\n" +
".weui-cell_select{\n" +
"  padding:0;\n" +
"}\n" +
".weui-cell_select .weui-select{\n" +
"  padding-right:30px;\n" +
"}\n" +
".weui-cell_select .weui-cell__bd:after{\n" +
"  content:\" \";\n" +
"  display:inline-block;\n" +
"  height:6px;\n" +
"  width:6px;\n" +
"  border-width:2px 2px 0 0;\n" +
"  border-color:#C8C8CD;\n" +
"  border-style:solid;\n" +
"  -webkit-transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"          transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"  position:relative;\n" +
"  top:-2px;\n" +
"  position:absolute;\n" +
"  top:50%;\n" +
"  right:15px;\n" +
"  margin-top:-4px;\n" +
"}\n" +
".weui-select{\n" +
"  -webkit-appearance:none;\n" +
"  border:0;\n" +
"  outline:0;\n" +
"  background-color:transparent;\n" +
"  width:100%;\n" +
"  font-size:inherit;\n" +
"  height:45px;\n" +
"  line-height:45px;\n" +
"  position:relative;\n" +
"  z-index:1;\n" +
"  padding-left:15px;\n" +
"}\n" +
".weui-cell_select-before{\n" +
"  padding-right:15px;\n" +
"}\n" +
".weui-cell_select-before .weui-select{\n" +
"  width:105px;\n" +
"  box-sizing:border-box;\n" +
"}\n" +
".weui-cell_select-before .weui-cell__hd{\n" +
"  position:relative;\n" +
"}\n" +
".weui-cell_select-before .weui-cell__hd:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  right:0;\n" +
"  top:0;\n" +
"  width:1px;\n" +
"  bottom:0;\n" +
"  border-right:1px solid #e5e5e5;\n" +
"  color:#e5e5e5;\n" +
"  -webkit-transform-origin:100% 0;\n" +
"          transform-origin:100% 0;\n" +
"  -webkit-transform:scaleX(0.5);\n" +
"          transform:scaleX(0.5);\n" +
"}\n" +
".weui-cell_select-before .weui-cell__hd:before{\n" +
"  content:\" \";\n" +
"  display:inline-block;\n" +
"  height:6px;\n" +
"  width:6px;\n" +
"  border-width:2px 2px 0 0;\n" +
"  border-color:#C8C8CD;\n" +
"  border-style:solid;\n" +
"  -webkit-transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"          transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"  position:relative;\n" +
"  top:-2px;\n" +
"  position:absolute;\n" +
"  top:50%;\n" +
"  right:15px;\n" +
"  margin-top:-4px;\n" +
"}\n" +
".weui-cell_select-before .weui-cell__bd{\n" +
"  padding-left:15px;\n" +
"}\n" +
".weui-cell_select-before .weui-cell__bd:after{\n" +
"  display:none;\n" +
"}\n" +
".weui-cell_select-after{\n" +
"  padding-left:15px;\n" +
"}\n" +
".weui-cell_select-after .weui-select{\n" +
"  padding-left:0;\n" +
"}\n" +
".weui-cell_vcode{\n" +
"  padding-top:0;\n" +
"  padding-right:0;\n" +
"  padding-bottom:0;\n" +
"}\n" +
".weui-vcode-img{\n" +
"  margin-left:5px;\n" +
"  height:45px;\n" +
"  vertical-align:middle;\n" +
"}\n" +
".weui-vcode-btn{\n" +
"  display:inline-block;\n" +
"  height:45px;\n" +
"  margin-left:5px;\n" +
"  padding:0 0.6em 0 0.7em;\n" +
"  border-left:1px solid #E5E5E5;\n" +
"  line-height:45px;\n" +
"  vertical-align:middle;\n" +
"  font-size:17px;\n" +
"  color:#3CC51F;\n" +
"}\n" +
"button.weui-vcode-btn{\n" +
"  background-color:transparent;\n" +
"  border-top:0;\n" +
"  border-right:0;\n" +
"  border-bottom:0;\n" +
"  outline:0;\n" +
"}\n" +
".weui-vcode-btn:active{\n" +
"  color:#52a341;\n" +
"}\n" +
".weui-gallery{\n" +
"  display:none;\n" +
"  position:fixed;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  bottom:0;\n" +
"  left:0;\n" +
"  background-color:#000000;\n" +
"  z-index:1000;\n" +
"}\n" +
".weui-gallery__img{\n" +
"  position:absolute;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  bottom:60px;\n" +
"  left:0;\n" +
"  background:center center no-repeat;\n" +
"  background-size:contain;\n" +
"}\n" +
".weui-gallery__opr{\n" +
"  position:absolute;\n" +
"  right:0;\n" +
"  bottom:0;\n" +
"  left:0;\n" +
"  background-color:#0D0D0D;\n" +
"  color:#FFFFFF;\n" +
"  line-height:60px;\n" +
"  text-align:center;\n" +
"}\n" +
".weui-gallery__del{\n" +
"  display:block;\n" +
"}\n" +
".weui-cell_switch{\n" +
"  padding-top:6.5px;\n" +
"  padding-bottom:6.5px;\n" +
"}\n" +
".weui-switch{\n" +
"  -webkit-appearance:none;\n" +
"          appearance:none;\n" +
"}\n" +
".weui-switch,\n" +
".weui-switch-cp__box{\n" +
"  position:relative;\n" +
"  width:52px;\n" +
"  height:32px;\n" +
"  border:1px solid #DFDFDF;\n" +
"  outline:0;\n" +
"  border-radius:16px;\n" +
"  box-sizing:border-box;\n" +
"  background-color:#DFDFDF;\n" +
"  -webkit-transition:background-color 0.1s, border 0.1s;\n" +
"  transition:background-color 0.1s, border 0.1s;\n" +
"}\n" +
".weui-switch:before,\n" +
".weui-switch-cp__box:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  top:0;\n" +
"  left:0;\n" +
"  width:50px;\n" +
"  height:30px;\n" +
"  border-radius:15px;\n" +
"  background-color:#FDFDFD;\n" +
"  -webkit-transition:-webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n" +
"  transition:-webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n" +
"  transition:transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n" +
"  transition:transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n" +
"}\n" +
".weui-switch:after,\n" +
".weui-switch-cp__box:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  top:0;\n" +
"  left:0;\n" +
"  width:30px;\n" +
"  height:30px;\n" +
"  border-radius:15px;\n" +
"  background-color:#FFFFFF;\n" +
"  box-shadow:0 1px 3px rgba(0, 0, 0, 0.4);\n" +
"  -webkit-transition:-webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n" +
"  transition:-webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n" +
"  transition:transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n" +
"  transition:transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n" +
"}\n" +
".weui-switch:checked,\n" +
".weui-switch-cp__input:checked ~ .weui-switch-cp__box{\n" +
"  border-color:#04BE02;\n" +
"  background-color:#04BE02;\n" +
"}\n" +
".weui-switch:checked:before,\n" +
".weui-switch-cp__input:checked ~ .weui-switch-cp__box:before{\n" +
"  -webkit-transform:scale(0);\n" +
"          transform:scale(0);\n" +
"}\n" +
".weui-switch:checked:after,\n" +
".weui-switch-cp__input:checked ~ .weui-switch-cp__box:after{\n" +
"  -webkit-transform:translateX(20px);\n" +
"          transform:translateX(20px);\n" +
"}\n" +
".weui-switch-cp__input{\n" +
"  position:absolute;\n" +
"  left:-9999px;\n" +
"}\n" +
".weui-switch-cp__box{\n" +
"  display:block;\n" +
"}\n" +
".weui-uploader__hd{\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  padding-bottom:10px;\n" +
"  -webkit-box-align:center;\n" +
"  -webkit-align-items:center;\n" +
"          align-items:center;\n" +
"}\n" +
".weui-uploader__title{\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"}\n" +
".weui-uploader__info{\n" +
"  color:#B2B2B2;\n" +
"}\n" +
".weui-uploader__bd{\n" +
"  margin-bottom:-4px;\n" +
"  margin-right:-9px;\n" +
"  overflow:hidden;\n" +
"}\n" +
".weui-uploader__files{\n" +
"  list-style:none;\n" +
"}\n" +
".weui-uploader__file{\n" +
"  float:left;\n" +
"  margin-right:9px;\n" +
"  margin-bottom:9px;\n" +
"  width:79px;\n" +
"  height:79px;\n" +
"  background:no-repeat center center;\n" +
"  background-size:cover;\n" +
"}\n" +
".weui-uploader__file_status{\n" +
"  position:relative;\n" +
"}\n" +
".weui-uploader__file_status:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  bottom:0;\n" +
"  left:0;\n" +
"  background-color:rgba(0, 0, 0, 0.5);\n" +
"}\n" +
".weui-uploader__file_status .weui-uploader__file-content{\n" +
"  display:block;\n" +
"}\n" +
".weui-uploader__file-content{\n" +
"  display:none;\n" +
"  position:absolute;\n" +
"  top:50%;\n" +
"  left:50%;\n" +
"  -webkit-transform:translate(-50%, -50%);\n" +
"          transform:translate(-50%, -50%);\n" +
"  color:#FFFFFF;\n" +
"}\n" +
".weui-uploader__file-content .weui-icon-warn{\n" +
"  display:inline-block;\n" +
"}\n" +
".weui-uploader__input-box{\n" +
"  float:left;\n" +
"  position:relative;\n" +
"  margin-right:9px;\n" +
"  margin-bottom:9px;\n" +
"  width:77px;\n" +
"  height:77px;\n" +
"  border:1px solid #D9D9D9;\n" +
"}\n" +
".weui-uploader__input-box:before,\n" +
".weui-uploader__input-box:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  top:50%;\n" +
"  left:50%;\n" +
"  -webkit-transform:translate(-50%, -50%);\n" +
"          transform:translate(-50%, -50%);\n" +
"  background-color:#D9D9D9;\n" +
"}\n" +
".weui-uploader__input-box:before{\n" +
"  width:2px;\n" +
"  height:39.5px;\n" +
"}\n" +
".weui-uploader__input-box:after{\n" +
"  width:39.5px;\n" +
"  height:2px;\n" +
"}\n" +
".weui-uploader__input-box:active{\n" +
"  border-color:#999999;\n" +
"}\n" +
".weui-uploader__input-box:active:before,\n" +
".weui-uploader__input-box:active:after{\n" +
"  background-color:#999999;\n" +
"}\n" +
".weui-uploader__input{\n" +
"  position:absolute;\n" +
"  z-index:1;\n" +
"  top:0;\n" +
"  left:0;\n" +
"  width:100%;\n" +
"  height:100%;\n" +
"  opacity:0;\n" +
"  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui-msg{\n" +
"  padding-top:36px;\n" +
"  text-align:center;\n" +
"}\n" +
".weui-msg__icon-area{\n" +
"  margin-bottom:30px;\n" +
"}\n" +
".weui-msg__text-area{\n" +
"  margin-bottom:25px;\n" +
"  padding:0 20px;\n" +
"}\n" +
".weui-msg__text-area a{\n" +
"  color:#586C94;\n" +
"}\n" +
".weui-msg__title{\n" +
"  margin-bottom:5px;\n" +
"  font-weight:400;\n" +
"  font-size:20px;\n" +
"}\n" +
".weui-msg__desc{\n" +
"  font-size:14px;\n" +
"  color:#999999;\n" +
"}\n" +
".weui-msg__opr-area{\n" +
"  margin-bottom:25px;\n" +
"}\n" +
".weui-msg__extra-area{\n" +
"  margin-bottom:15px;\n" +
"  font-size:14px;\n" +
"  color:#999999;\n" +
"}\n" +
".weui-msg__extra-area a{\n" +
"  color:#586C94;\n" +
"}\n" +
"@media screen and (min-height: 438px){\n" +
"  .weui-msg__extra-area{\n" +
"    position:fixed;\n" +
"    left:0;\n" +
"    bottom:0;\n" +
"    width:100%;\n" +
"    text-align:center;\n" +
"  }\n" +
"}\n" +
".weui-article{\n" +
"  padding:20px 15px;\n" +
"  font-size:15px;\n" +
"}\n" +
".weui-article section{\n" +
"  margin-bottom:1.5em;\n" +
"}\n" +
".weui-article h1{\n" +
"  font-size:18px;\n" +
"  font-weight:400;\n" +
"  margin-bottom:.9em;\n" +
"}\n" +
".weui-article h2{\n" +
"  font-size:16px;\n" +
"  font-weight:400;\n" +
"  margin-bottom:.34em;\n" +
"}\n" +
".weui-article h3{\n" +
"  font-weight:400;\n" +
"  font-size:15px;\n" +
"  margin-bottom:.34em;\n" +
"}\n" +
".weui-article *{\n" +
"  max-width:100%;\n" +
"  box-sizing:border-box;\n" +
"  word-wrap:break-word;\n" +
"}\n" +
".weui-article p{\n" +
"  margin:0 0 .8em;\n" +
"}\n" +
".weui-tabbar{\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  position:absolute;\n" +
"  z-index:500;\n" +
"  bottom:0;\n" +
"  width:100%;\n" +
"  background-color:#F7F7FA;\n" +
"}\n" +
".weui-tabbar:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #C0BFC4;\n" +
"  color:#C0BFC4;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-tabbar__item{\n" +
"  display:block;\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"  padding:5px 0 0;\n" +
"  font-size:0;\n" +
"  color:#999999;\n" +
"  text-align:center;\n" +
"  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,\n" +
".weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,\n" +
".weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{\n" +
"  color:#09BB07;\n" +
"}\n" +
".weui-tabbar__icon{\n" +
"  display:inline-block;\n" +
"  width:27px;\n" +
"  height:27px;\n" +
"}\n" +
"i.weui-tabbar__icon,\n" +
".weui-tabbar__icon > i{\n" +
"  font-size:24px;\n" +
"  color:#999999;\n" +
"}\n" +
".weui-tabbar__icon img{\n" +
"  width:100%;\n" +
"  height:100%;\n" +
"}\n" +
".weui-tabbar__label{\n" +
"  text-align:center;\n" +
"  color:#999999;\n" +
"  font-size:10px;\n" +
"  line-height:1.8;\n" +
"}\n" +
".weui-navbar{\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  position:absolute;\n" +
"  z-index:500;\n" +
"  top:0;\n" +
"  width:100%;\n" +
"  background-color:#FAFAFA;\n" +
"}\n" +
".weui-navbar:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #CCCCCC;\n" +
"  color:#CCCCCC;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-navbar + .weui-tab__panel{\n" +
"  padding-top:50px;\n" +
"  padding-bottom:0;\n" +
"}\n" +
".weui-navbar__item{\n" +
"  position:relative;\n" +
"  display:block;\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"  padding:13px 0;\n" +
"  text-align:center;\n" +
"  font-size:15px;\n" +
"  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui-navbar__item:active{\n" +
"  background-color:#EDEDED;\n" +
"}\n" +
".weui-navbar__item.weui-bar__item_on{\n" +
"  background-color:#EAEAEA;\n" +
"}\n" +
".weui-navbar__item:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  right:0;\n" +
"  top:0;\n" +
"  width:1px;\n" +
"  bottom:0;\n" +
"  border-right:1px solid #CCCCCC;\n" +
"  color:#CCCCCC;\n" +
"  -webkit-transform-origin:100% 0;\n" +
"          transform-origin:100% 0;\n" +
"  -webkit-transform:scaleX(0.5);\n" +
"          transform:scaleX(0.5);\n" +
"}\n" +
".weui-navbar__item:last-child:after{\n" +
"  display:none;\n" +
"}\n" +
".weui-tab{\n" +
"  position:relative;\n" +
"  height:100%;\n" +
"}\n" +
".weui-tab__panel{\n" +
"  box-sizing:border-box;\n" +
"  height:100%;\n" +
"  padding-bottom:50px;\n" +
"  overflow:auto;\n" +
"  -webkit-overflow-scrolling:touch;\n" +
"}\n" +
".weui-tab__content{\n" +
"  display:none;\n" +
"}\n" +
".weui-progress{\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  -webkit-box-align:center;\n" +
"  -webkit-align-items:center;\n" +
"          align-items:center;\n" +
"}\n" +
".weui-progress__bar{\n" +
"  background-color:#EBEBEB;\n" +
"  height:3px;\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"}\n" +
".weui-progress__inner-bar{\n" +
"  width:0;\n" +
"  height:100%;\n" +
"  background-color:#09BB07;\n" +
"}\n" +
".weui-progress__opr{\n" +
"  display:block;\n" +
"  margin-left:15px;\n" +
"  font-size:0;\n" +
"}\n" +
".weui-panel{\n" +
"  background-color:#FFFFFF;\n" +
"  margin-top:10px;\n" +
"  position:relative;\n" +
"  overflow:hidden;\n" +
"}\n" +
".weui-panel:first-child{\n" +
"  margin-top:0;\n" +
"}\n" +
".weui-panel:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #E5E5E5;\n" +
"  color:#E5E5E5;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-panel:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #E5E5E5;\n" +
"  color:#E5E5E5;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-panel__hd{\n" +
"  padding:14px 15px 10px;\n" +
"  color:#999999;\n" +
"  font-size:13px;\n" +
"  position:relative;\n" +
"}\n" +
".weui-panel__hd:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #E5E5E5;\n" +
"  color:#E5E5E5;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"  left:15px;\n" +
"}\n" +
".weui-media-box{\n" +
"  padding:15px;\n" +
"  position:relative;\n" +
"}\n" +
".weui-media-box:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #E5E5E5;\n" +
"  color:#E5E5E5;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"  left:15px;\n" +
"}\n" +
".weui-media-box:first-child:before{\n" +
"  display:none;\n" +
"}\n" +
"a.weui-media-box{\n" +
"  color:#000000;\n" +
"  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n" +
"}\n" +
"a.weui-media-box:active{\n" +
"  background-color:#ECECEC;\n" +
"}\n" +
".weui-media-box__title{\n" +
"  font-weight:400;\n" +
"  font-size:17px;\n" +
"  width:auto;\n" +
"  overflow:hidden;\n" +
"  text-overflow:ellipsis;\n" +
"  white-space:nowrap;\n" +
"  word-wrap:normal;\n" +
"  word-wrap:break-word;\n" +
"  word-break:break-all;\n" +
"}\n" +
".weui-media-box__desc{\n" +
"  color:#999999;\n" +
"  font-size:13px;\n" +
"  line-height:1.2;\n" +
"  overflow:hidden;\n" +
"  text-overflow:ellipsis;\n" +
"  display:-webkit-box;\n" +
"  -webkit-box-orient:vertical;\n" +
"  -webkit-line-clamp:2;\n" +
"}\n" +
".weui-media-box__info{\n" +
"  margin-top:15px;\n" +
"  padding-bottom:5px;\n" +
"  font-size:13px;\n" +
"  color:#CECECE;\n" +
"  line-height:1em;\n" +
"  list-style:none;\n" +
"  overflow:hidden;\n" +
"}\n" +
".weui-media-box__info__meta{\n" +
"  float:left;\n" +
"  padding-right:1em;\n" +
"}\n" +
".weui-media-box__info__meta_extra{\n" +
"  padding-left:1em;\n" +
"  border-left:1px solid #CECECE;\n" +
"}\n" +
".weui-media-box_text .weui-media-box__title{\n" +
"  margin-bottom:8px;\n" +
"}\n" +
".weui-media-box_appmsg{\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  -webkit-box-align:center;\n" +
"  -webkit-align-items:center;\n" +
"          align-items:center;\n" +
"}\n" +
".weui-media-box_appmsg .weui-media-box__hd{\n" +
"  margin-right:.8em;\n" +
"  width:60px;\n" +
"  height:60px;\n" +
"  line-height:60px;\n" +
"  text-align:center;\n" +
"}\n" +
".weui-media-box_appmsg .weui-media-box__thumb{\n" +
"  width:100%;\n" +
"  max-height:100%;\n" +
"  vertical-align:top;\n" +
"}\n" +
".weui-media-box_appmsg .weui-media-box__bd{\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"  min-width:0;\n" +
"}\n" +
".weui-media-box_small-appmsg{\n" +
"  padding:0;\n" +
"}\n" +
".weui-media-box_small-appmsg .weui-cells{\n" +
"  margin-top:0;\n" +
"}\n" +
".weui-media-box_small-appmsg .weui-cells:before{\n" +
"  display:none;\n" +
"}\n" +
".weui-grids{\n" +
"  position:relative;\n" +
"  overflow:hidden;\n" +
"}\n" +
".weui-grids:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #D9D9D9;\n" +
"  color:#D9D9D9;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-grids:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  width:1px;\n" +
"  bottom:0;\n" +
"  border-left:1px solid #D9D9D9;\n" +
"  color:#D9D9D9;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleX(0.5);\n" +
"          transform:scaleX(0.5);\n" +
"}\n" +
".weui-grid{\n" +
"  position:relative;\n" +
"  float:left;\n" +
"  padding:20px 10px;\n" +
"  width:33.33333333%;\n" +
"  box-sizing:border-box;\n" +
"}\n" +
".weui-grid:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  right:0;\n" +
"  top:0;\n" +
"  width:1px;\n" +
"  bottom:0;\n" +
"  border-right:1px solid #D9D9D9;\n" +
"  color:#D9D9D9;\n" +
"  -webkit-transform-origin:100% 0;\n" +
"          transform-origin:100% 0;\n" +
"  -webkit-transform:scaleX(0.5);\n" +
"          transform:scaleX(0.5);\n" +
"}\n" +
".weui-grid:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #D9D9D9;\n" +
"  color:#D9D9D9;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-grid:active{\n" +
"  background-color:#ECECEC;\n" +
"}\n" +
".weui-grid__icon{\n" +
"  width:28px;\n" +
"  height:28px;\n" +
"  margin:0 auto;\n" +
"}\n" +
".weui-grid__icon img{\n" +
"  display:block;\n" +
"  width:100%;\n" +
"  height:100%;\n" +
"}\n" +
".weui-grid__icon + .weui-grid__label{\n" +
"  margin-top:5px;\n" +
"}\n" +
".weui-grid__label{\n" +
"  display:block;\n" +
"  text-align:center;\n" +
"  color:#000000;\n" +
"  font-size:14px;\n" +
"  white-space:nowrap;\n" +
"  text-overflow:ellipsis;\n" +
"  overflow:hidden;\n" +
"}\n" +
".weui-footer{\n" +
"  color:#999999;\n" +
"  font-size:14px;\n" +
"  text-align:center;\n" +
"}\n" +
".weui-footer a{\n" +
"  color:#586C94;\n" +
"}\n" +
".weui-footer_fixed-bottom{\n" +
"  position:fixed;\n" +
"  bottom:.52em;\n" +
"  left:0;\n" +
"  right:0;\n" +
"}\n" +
".weui-footer__links{\n" +
"  font-size:0;\n" +
"}\n" +
".weui-footer__link{\n" +
"  display:inline-block;\n" +
"  vertical-align:top;\n" +
"  margin:0 .62em;\n" +
"  position:relative;\n" +
"  font-size:14px;\n" +
"}\n" +
".weui-footer__link:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  width:1px;\n" +
"  bottom:0;\n" +
"  border-left:1px solid #C7C7C7;\n" +
"  color:#C7C7C7;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleX(0.5);\n" +
"          transform:scaleX(0.5);\n" +
"  left:-0.65em;\n" +
"  top:.36em;\n" +
"  bottom:.36em;\n" +
"}\n" +
".weui-footer__link:first-child:before{\n" +
"  display:none;\n" +
"}\n" +
".weui-footer__text{\n" +
"  padding:0 .34em;\n" +
"  font-size:12px;\n" +
"}\n" +
".weui-flex{\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"}\n" +
".weui-flex__item{\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"}\n" +
".weui-dialog{\n" +
"  position:fixed;\n" +
"  z-index:5000;\n" +
"  width:80%;\n" +
"  max-width:300px;\n" +
"  top:50%;\n" +
"  left:50%;\n" +
"  -webkit-transform:translate(-50%, -50%);\n" +
"          transform:translate(-50%, -50%);\n" +
"  background-color:#FFFFFF;\n" +
"  text-align:center;\n" +
"  border-radius:3px;\n" +
"  overflow:hidden;\n" +
"}\n" +
".weui-dialog__hd{\n" +
"  padding:1.3em 1.6em 0.5em;\n" +
"}\n" +
".weui-dialog__title{\n" +
"  font-weight:400;\n" +
"  font-size:18px;\n" +
"}\n" +
".weui-dialog__bd{\n" +
"  padding:0 1.6em 0.8em;\n" +
"  min-height:40px;\n" +
"  font-size:15px;\n" +
"  line-height:1.3;\n" +
"  word-wrap:break-word;\n" +
"  word-break:break-all;\n" +
"  color:#999999;\n" +
"}\n" +
".weui-dialog__bd:first-child{\n" +
"  padding:2.7em 20px 1.7em;\n" +
"  color:#353535;\n" +
"}\n" +
".weui-dialog__ft{\n" +
"  position:relative;\n" +
"  line-height:48px;\n" +
"  font-size:18px;\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"}\n" +
".weui-dialog__ft:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #D5D5D6;\n" +
"  color:#D5D5D6;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-dialog__btn{\n" +
"  display:block;\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"  color:#3CC51F;\n" +
"  text-decoration:none;\n" +
"  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\n" +
"  position:relative;\n" +
"}\n" +
".weui-dialog__btn:active{\n" +
"  background-color:#EEEEEE;\n" +
"}\n" +
".weui-dialog__btn:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  width:1px;\n" +
"  bottom:0;\n" +
"  border-left:1px solid #D5D5D6;\n" +
"  color:#D5D5D6;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleX(0.5);\n" +
"          transform:scaleX(0.5);\n" +
"}\n" +
".weui-dialog__btn:first-child:after{\n" +
"  display:none;\n" +
"}\n" +
".weui-dialog__btn_default{\n" +
"  color:#353535;\n" +
"}\n" +
".weui-dialog__btn_primary{\n" +
"  color:#0BB20C;\n" +
"}\n" +
".weui-skin_android .weui-dialog{\n" +
"  text-align:left;\n" +
"  box-shadow:0 6px 30px 0 rgba(0, 0, 0, 0.1);\n" +
"}\n" +
".weui-skin_android .weui-dialog__title{\n" +
"  font-size:21px;\n" +
"}\n" +
".weui-skin_android .weui-dialog__hd{\n" +
"  text-align:left;\n" +
"}\n" +
".weui-skin_android .weui-dialog__bd{\n" +
"  color:#999999;\n" +
"  padding:0.25em 1.6em 2em;\n" +
"  font-size:17px;\n" +
"  text-align:left;\n" +
"}\n" +
".weui-skin_android .weui-dialog__bd:first-child{\n" +
"  padding:1.6em 1.6em 2em;\n" +
"  color:#353535;\n" +
"}\n" +
".weui-skin_android .weui-dialog__ft{\n" +
"  display:block;\n" +
"  text-align:right;\n" +
"  line-height:42px;\n" +
"  font-size:16px;\n" +
"  padding:0 1.6em 0.7em;\n" +
"}\n" +
".weui-skin_android .weui-dialog__ft:after{\n" +
"  display:none;\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn{\n" +
"  display:inline-block;\n" +
"  vertical-align:top;\n" +
"  padding:0 .8em;\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn:after{\n" +
"  display:none;\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn:active{\n" +
"  background-color:rgba(0, 0, 0, 0.06);\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn:visited{\n" +
"  background-color:rgba(0, 0, 0, 0.06);\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn:last-child{\n" +
"  margin-right:-0.8em;\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn_default{\n" +
"  color:#808080;\n" +
"}\n" +
"@media screen and (min-width: 1024px){\n" +
"  .weui-dialog{\n" +
"    width:35%;\n" +
"  }\n" +
"}\n" +
".weui-toast{\n" +
"  position:fixed;\n" +
"  z-index:5000;\n" +
"  width:7.6em;\n" +
"  min-height:7.6em;\n" +
"  top:180px;\n" +
"  left:50%;\n" +
"  margin-left:-3.8em;\n" +
"  background:rgba(17, 17, 17, 0.7);\n" +
"  text-align:center;\n" +
"  border-radius:5px;\n" +
"  color:#FFFFFF;\n" +
"}\n" +
".weui-icon_toast{\n" +
"  margin:22px 0 0;\n" +
"  display:block;\n" +
"}\n" +
".weui-icon_toast.weui-icon-success-no-circle:before{\n" +
"  color:#FFFFFF;\n" +
"  font-size:55px;\n" +
"}\n" +
".weui-icon_toast.weui-loading{\n" +
"  margin:30px 0 0;\n" +
"  width:38px;\n" +
"  height:38px;\n" +
"  vertical-align:baseline;\n" +
"}\n" +
".weui-toast__content{\n" +
"  margin:0 0 15px;\n" +
"}\n" +
".weui-mask{\n" +
"  position:fixed;\n" +
"  z-index:1000;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  background:rgba(0, 0, 0, 0.6);\n" +
"}\n" +
".weui-mask_transparent{\n" +
"  position:fixed;\n" +
"  z-index:1000;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"}\n" +
".weui-actionsheet{\n" +
"  position:fixed;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  -webkit-transform:translate(0, 100%);\n" +
"          transform:translate(0, 100%);\n" +
"  -webkit-backface-visibility:hidden;\n" +
"          backface-visibility:hidden;\n" +
"  z-index:5000;\n" +
"  width:100%;\n" +
"  background-color:#EFEFF4;\n" +
"  -webkit-transition:-webkit-transform .3s;\n" +
"  transition:-webkit-transform .3s;\n" +
"  transition:transform .3s;\n" +
"  transition:transform .3s, -webkit-transform .3s;\n" +
"}\n" +
".weui-actionsheet__title{\n" +
"  position:relative;\n" +
"  height:65px;\n" +
"  padding:0 20px;\n" +
"  line-height:1.4;\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  -webkit-box-pack:center;\n" +
"  -webkit-justify-content:center;\n" +
"          justify-content:center;\n" +
"  -webkit-box-orient:vertical;\n" +
"  -webkit-box-direction:normal;\n" +
"  -webkit-flex-direction:column;\n" +
"          flex-direction:column;\n" +
"  text-align:center;\n" +
"  font-size:14px;\n" +
"  color:#888;\n" +
"  background:#FCFCFD;\n" +
"}\n" +
".weui-actionsheet__title:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #e5e5e5;\n" +
"  color:#e5e5e5;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-actionsheet__title .weui-actionsheet__title-text{\n" +
"  overflow:hidden;\n" +
"  text-overflow:ellipsis;\n" +
"  display:-webkit-box;\n" +
"  -webkit-box-orient:vertical;\n" +
"  -webkit-line-clamp:2;\n" +
"}\n" +
".weui-actionsheet__menu{\n" +
"  background-color:#FCFCFD;\n" +
"}\n" +
".weui-actionsheet__action{\n" +
"  margin-top:6px;\n" +
"  background-color:#FCFCFD;\n" +
"}\n" +
".weui-actionsheet__cell{\n" +
"  position:relative;\n" +
"  padding:10px 0;\n" +
"  text-align:center;\n" +
"  font-size:18px;\n" +
"}\n" +
".weui-actionsheet__cell:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #e5e5e5;\n" +
"  color:#e5e5e5;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-actionsheet__cell:active{\n" +
"  background-color:#ECECEC;\n" +
"}\n" +
".weui-actionsheet__cell:first-child:before{\n" +
"  display:none;\n" +
"}\n" +
".weui-skin_android .weui-actionsheet{\n" +
"  position:fixed;\n" +
"  left:50%;\n" +
"  top:50%;\n" +
"  bottom:auto;\n" +
"  -webkit-transform:translate(-50%, -50%);\n" +
"          transform:translate(-50%, -50%);\n" +
"  width:274px;\n" +
"  box-sizing:border-box;\n" +
"  -webkit-backface-visibility:hidden;\n" +
"          backface-visibility:hidden;\n" +
"  background:transparent;\n" +
"  -webkit-transition:-webkit-transform .3s;\n" +
"  transition:-webkit-transform .3s;\n" +
"  transition:transform .3s;\n" +
"  transition:transform .3s, -webkit-transform .3s;\n" +
"}\n" +
".weui-skin_android .weui-actionsheet__action{\n" +
"  display:none;\n" +
"}\n" +
".weui-skin_android .weui-actionsheet__menu{\n" +
"  border-radius:2px;\n" +
"  box-shadow:0 6px 30px 0 rgba(0, 0, 0, 0.1);\n" +
"}\n" +
".weui-skin_android .weui-actionsheet__cell{\n" +
"  padding:13px 24px;\n" +
"  font-size:16px;\n" +
"  line-height:1.4;\n" +
"  text-align:left;\n" +
"}\n" +
".weui-skin_android .weui-actionsheet__cell:first-child{\n" +
"  border-top-left-radius:2px;\n" +
"  border-top-right-radius:2px;\n" +
"}\n" +
".weui-skin_android .weui-actionsheet__cell:last-child{\n" +
"  border-bottom-left-radius:2px;\n" +
"  border-bottom-right-radius:2px;\n" +
"}\n" +
".weui-actionsheet_toggle{\n" +
"  -webkit-transform:translate(0, 0);\n" +
"          transform:translate(0, 0);\n" +
"}\n" +
".weui-loadmore{\n" +
"  width:65%;\n" +
"  margin:1.5em auto;\n" +
"  line-height:1.6em;\n" +
"  font-size:14px;\n" +
"  text-align:center;\n" +
"}\n" +
".weui-loadmore__tips{\n" +
"  display:inline-block;\n" +
"  vertical-align:middle;\n" +
"}\n" +
".weui-loadmore_line{\n" +
"  border-top:1px solid #E5E5E5;\n" +
"  margin-top:2.4em;\n" +
"}\n" +
".weui-loadmore_line .weui-loadmore__tips{\n" +
"  position:relative;\n" +
"  top:-0.9em;\n" +
"  padding:0 .55em;\n" +
"  background-color:#FFFFFF;\n" +
"  color:#999999;\n" +
"}\n" +
".weui-loadmore_dot .weui-loadmore__tips{\n" +
"  padding:0 .16em;\n" +
"}\n" +
".weui-loadmore_dot .weui-loadmore__tips:before{\n" +
"  content:\" \";\n" +
"  width:4px;\n" +
"  height:4px;\n" +
"  border-radius:50%;\n" +
"  background-color:#E5E5E5;\n" +
"  display:inline-block;\n" +
"  position:relative;\n" +
"  vertical-align:0;\n" +
"  top:-0.16em;\n" +
"}\n" +
".weui-badge{\n" +
"  display:inline-block;\n" +
"  padding:.15em .4em;\n" +
"  min-width:8px;\n" +
"  border-radius:18px;\n" +
"  background-color:#F43530;\n" +
"  color:#FFFFFF;\n" +
"  line-height:1.2;\n" +
"  text-align:center;\n" +
"  font-size:12px;\n" +
"  vertical-align:middle;\n" +
"}\n" +
".weui-badge_dot{\n" +
"  padding:.4em;\n" +
"  min-width:0;\n" +
"}\n" +
".weui-search-bar{\n" +
"  position:relative;\n" +
"  padding:8px 10px;\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  box-sizing:border-box;\n" +
"  background-color:#EFEFF4;\n" +
"}\n" +
".weui-search-bar:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #D7D6DC;\n" +
"  color:#D7D6DC;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-search-bar:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #D7D6DC;\n" +
"  color:#D7D6DC;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn{\n" +
"  display:block;\n" +
"}\n" +
".weui-search-bar.weui-search-bar_focusing .weui-search-bar__label{\n" +
"  display:none;\n" +
"}\n" +
".weui-search-bar__form{\n" +
"  position:relative;\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:auto;\n" +
"          flex:auto;\n" +
"  background-color:#EFEFF4;\n" +
"}\n" +
".weui-search-bar__form:after{\n" +
"  content:'';\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  width:200%;\n" +
"  height:200%;\n" +
"  -webkit-transform:scale(0.5);\n" +
"          transform:scale(0.5);\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  border-radius:10px;\n" +
"  border:1px solid #E6E6EA;\n" +
"  box-sizing:border-box;\n" +
"  background:#FFFFFF;\n" +
"}\n" +
".weui-search-bar__box{\n" +
"  position:relative;\n" +
"  padding-left:30px;\n" +
"  padding-right:30px;\n" +
"  height:100%;\n" +
"  width:100%;\n" +
"  box-sizing:border-box;\n" +
"  z-index:1;\n" +
"}\n" +
".weui-search-bar__box .weui-search-bar__input{\n" +
"  padding:4px 0;\n" +
"  width:100%;\n" +
"  height:1.42857143em;\n" +
"  border:0;\n" +
"  font-size:14px;\n" +
"  line-height:1.42857143em;\n" +
"  box-sizing:content-box;\n" +
"  background:transparent;\n" +
"}\n" +
".weui-search-bar__box .weui-search-bar__input:focus{\n" +
"  outline:none;\n" +
"}\n" +
".weui-search-bar__box .weui-icon-search{\n" +
"  position:absolute;\n" +
"  left:10px;\n" +
"  top:0;\n" +
"  line-height:28px;\n" +
"}\n" +
".weui-search-bar__box .weui-icon-clear{\n" +
"  position:absolute;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  padding:0 10px;\n" +
"  line-height:28px;\n" +
"}\n" +
".weui-search-bar__label{\n" +
"  position:absolute;\n" +
"  top:1px;\n" +
"  right:1px;\n" +
"  bottom:1px;\n" +
"  left:1px;\n" +
"  z-index:2;\n" +
"  border-radius:3px;\n" +
"  text-align:center;\n" +
"  color:#9B9B9B;\n" +
"  background:#FFFFFF;\n" +
"}\n" +
".weui-search-bar__label span{\n" +
"  display:inline-block;\n" +
"  font-size:14px;\n" +
"  vertical-align:middle;\n" +
"}\n" +
".weui-search-bar__label .weui-icon-search{\n" +
"  margin-right:5px;\n" +
"}\n" +
".weui-search-bar__cancel-btn{\n" +
"  display:none;\n" +
"  margin-left:10px;\n" +
"  line-height:28px;\n" +
"  color:#09BB07;\n" +
"  white-space:nowrap;\n" +
"}\n" +
".weui-search-bar__input:not(:valid) ~ .weui-icon-clear{\n" +
"  display:none;\n" +
"}\n" +
"input[type=\"search\"]::-webkit-search-decoration,\n" +
"input[type=\"search\"]::-webkit-search-cancel-button,\n" +
"input[type=\"search\"]::-webkit-search-results-button,\n" +
"input[type=\"search\"]::-webkit-search-results-decoration{\n" +
"  display:none;\n" +
"}\n" +
".weui-picker{\n" +
"  position:fixed;\n" +
"  width:100%;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  z-index:5000;\n" +
"  -webkit-backface-visibility:hidden;\n" +
"          backface-visibility:hidden;\n" +
"  -webkit-transform:translate(0, 100%);\n" +
"          transform:translate(0, 100%);\n" +
"  -webkit-transition:-webkit-transform .3s;\n" +
"  transition:-webkit-transform .3s;\n" +
"  transition:transform .3s;\n" +
"  transition:transform .3s, -webkit-transform .3s;\n" +
"}\n" +
".weui-picker__hd{\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  padding:9px 15px;\n" +
"  background-color:#fff;\n" +
"  position:relative;\n" +
"  text-align:center;\n" +
"  font-size:17px;\n" +
"}\n" +
".weui-picker__hd:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #E5E5E5;\n" +
"  color:#E5E5E5;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-picker__action{\n" +
"  display:block;\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"  color:#1AAD19;\n" +
"}\n" +
".weui-picker__action:first-child{\n" +
"  text-align:left;\n" +
"  color:#888;\n" +
"}\n" +
".weui-picker__action:last-child{\n" +
"  text-align:right;\n" +
"}\n" +
".weui-picker__bd{\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  position:relative;\n" +
"  background-color:#fff;\n" +
"  height:238px;\n" +
"  overflow:hidden;\n" +
"}\n" +
".weui-picker__group{\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"  position:relative;\n" +
"  height:100%;\n" +
"}\n" +
".weui-picker__mask{\n" +
"  position:absolute;\n" +
"  top:0;\n" +
"  left:0;\n" +
"  width:100%;\n" +
"  height:100%;\n" +
"  margin:0 auto;\n" +
"  z-index:3;\n" +
"  background:-webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));\n" +
"  background:linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));\n" +
"  background-position:top, bottom;\n" +
"  background-size:100% 102px;\n" +
"  background-repeat:no-repeat;\n" +
"  -webkit-transform:translateZ(0);\n" +
"          transform:translateZ(0);\n" +
"}\n" +
".weui-picker__indicator{\n" +
"  width:100%;\n" +
"  height:34px;\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:102px;\n" +
"  z-index:3;\n" +
"}\n" +
".weui-picker__indicator:before{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-top:1px solid #E5E5E5;\n" +
"  color:#E5E5E5;\n" +
"  -webkit-transform-origin:0 0;\n" +
"          transform-origin:0 0;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-picker__indicator:after{\n" +
"  content:\" \";\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  bottom:0;\n" +
"  right:0;\n" +
"  height:1px;\n" +
"  border-bottom:1px solid #E5E5E5;\n" +
"  color:#E5E5E5;\n" +
"  -webkit-transform-origin:0 100%;\n" +
"          transform-origin:0 100%;\n" +
"  -webkit-transform:scaleY(0.5);\n" +
"          transform:scaleY(0.5);\n" +
"}\n" +
".weui-picker__content{\n" +
"  position:absolute;\n" +
"  top:0;\n" +
"  left:0;\n" +
"  width:100%;\n" +
"}\n" +
".weui-picker__item{\n" +
"  padding:0;\n" +
"  height:34px;\n" +
"  line-height:34px;\n" +
"  text-align:center;\n" +
"  color:#000;\n" +
"  text-overflow:ellipsis;\n" +
"  white-space:nowrap;\n" +
"  overflow:hidden;\n" +
"}\n" +
".weui-picker__item_disabled{\n" +
"  color:#999999;\n" +
"}\n" +
"@-webkit-keyframes slideUp{\n" +
"  from{\n" +
"    -webkit-transform:translate3d(0, 100%, 0);\n" +
"            transform:translate3d(0, 100%, 0);\n" +
"  }\n" +
"  to{\n" +
"    -webkit-transform:translate3d(0, 0, 0);\n" +
"            transform:translate3d(0, 0, 0);\n" +
"  }\n" +
"}\n" +
"@keyframes slideUp{\n" +
"  from{\n" +
"    -webkit-transform:translate3d(0, 100%, 0);\n" +
"            transform:translate3d(0, 100%, 0);\n" +
"  }\n" +
"  to{\n" +
"    -webkit-transform:translate3d(0, 0, 0);\n" +
"            transform:translate3d(0, 0, 0);\n" +
"  }\n" +
"}\n" +
".weui-animate-slide-up{\n" +
"  -webkit-animation:slideUp ease .3s forwards;\n" +
"          animation:slideUp ease .3s forwards;\n" +
"}\n" +
"@-webkit-keyframes slideDown{\n" +
"  from{\n" +
"    -webkit-transform:translate3d(0, 0, 0);\n" +
"            transform:translate3d(0, 0, 0);\n" +
"  }\n" +
"  to{\n" +
"    -webkit-transform:translate3d(0, 100%, 0);\n" +
"            transform:translate3d(0, 100%, 0);\n" +
"  }\n" +
"}\n" +
"@keyframes slideDown{\n" +
"  from{\n" +
"    -webkit-transform:translate3d(0, 0, 0);\n" +
"            transform:translate3d(0, 0, 0);\n" +
"  }\n" +
"  to{\n" +
"    -webkit-transform:translate3d(0, 100%, 0);\n" +
"            transform:translate3d(0, 100%, 0);\n" +
"  }\n" +
"}\n" +
".weui-animate-slide-down{\n" +
"  -webkit-animation:slideDown ease .3s forwards;\n" +
"          animation:slideDown ease .3s forwards;\n" +
"}\n" +
"@-webkit-keyframes fadeIn{\n" +
"  from{\n" +
"    opacity:0;\n" +
"  }\n" +
"  to{\n" +
"    opacity:1;\n" +
"  }\n" +
"}\n" +
"@keyframes fadeIn{\n" +
"  from{\n" +
"    opacity:0;\n" +
"  }\n" +
"  to{\n" +
"    opacity:1;\n" +
"  }\n" +
"}\n" +
".weui-animate-fade-in{\n" +
"  -webkit-animation:fadeIn ease .3s forwards;\n" +
"          animation:fadeIn ease .3s forwards;\n" +
"}\n" +
"@-webkit-keyframes fadeOut{\n" +
"  from{\n" +
"    opacity:1;\n" +
"  }\n" +
"  to{\n" +
"    opacity:0;\n" +
"  }\n" +
"}\n" +
"@keyframes fadeOut{\n" +
"  from{\n" +
"    opacity:1;\n" +
"  }\n" +
"  to{\n" +
"    opacity:0;\n" +
"  }\n" +
"}\n" +
".weui-animate-fade-out{\n" +
"  -webkit-animation:fadeOut ease .3s forwards;\n" +
"          animation:fadeOut ease .3s forwards;\n" +
"}\n" +
".weui-agree{\n" +
"  display:block;\n" +
"  padding:.5em 15px;\n" +
"  font-size:13px;\n" +
"}\n" +
".weui-agree a{\n" +
"  color:#586C94;\n" +
"}\n" +
".weui-agree__text{\n" +
"  color:#999999;\n" +
"}\n" +
".weui-agree__checkbox{\n" +
"  -webkit-appearance:none;\n" +
"          appearance:none;\n" +
"  outline:0;\n" +
"  font-size:0;\n" +
"  border:1px solid #D1D1D1;\n" +
"  background-color:#FFFFFF;\n" +
"  border-radius:3px;\n" +
"  width:13px;\n" +
"  height:13px;\n" +
"  position:relative;\n" +
"  vertical-align:0;\n" +
"  top:2px;\n" +
"}\n" +
".weui-agree__checkbox:checked:before{\n" +
"  font-family:\"weui\";\n" +
"  font-style:normal;\n" +
"  font-weight:normal;\n" +
"  font-variant:normal;\n" +
"  text-transform:none;\n" +
"  text-align:center;\n" +
"  speak:none;\n" +
"  display:inline-block;\n" +
"  vertical-align:middle;\n" +
"  text-decoration:inherit;\n" +
"  content:\"\\EA08\";\n" +
"  color:#09BB07;\n" +
"  font-size:13px;\n" +
"  position:absolute;\n" +
"  top:50%;\n" +
"  left:50%;\n" +
"  -webkit-transform:translate(-50%, -48%) scale(0.73);\n" +
"          transform:translate(-50%, -48%) scale(0.73);\n" +
"}\n" +
".weui-agree__checkbox:disabled{\n" +
"  background-color:#E1E1E1;\n" +
"}\n" +
".weui-agree__checkbox:disabled:before{\n" +
"  color:#ADADAD;\n" +
"}\n" +
".weui-loading{\n" +
"  width:20px;\n" +
"  height:20px;\n" +
"  display:inline-block;\n" +
"  vertical-align:middle;\n" +
"  -webkit-animation:weuiLoading 1s steps(12, end) infinite;\n" +
"          animation:weuiLoading 1s steps(12, end) infinite;\n" +
"  background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;\n" +
"  background-size:100%;\n" +
"}\n" +
".weui-loading.weui-loading_transparent,\n" +
".weui-btn_loading.weui-btn_primary .weui-loading,\n" +
".weui-btn_loading.weui-btn_warn .weui-loading{\n" +
"  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\");\n" +
"}\n" +
"@-webkit-keyframes weuiLoading{\n" +
"  0%{\n" +
"    -webkit-transform:rotate3d(0, 0, 1, 0deg);\n" +
"            transform:rotate3d(0, 0, 1, 0deg);\n" +
"  }\n" +
"  100%{\n" +
"    -webkit-transform:rotate3d(0, 0, 1, 360deg);\n" +
"            transform:rotate3d(0, 0, 1, 360deg);\n" +
"  }\n" +
"}\n" +
"@keyframes weuiLoading{\n" +
"  0%{\n" +
"    -webkit-transform:rotate3d(0, 0, 1, 0deg);\n" +
"            transform:rotate3d(0, 0, 1, 0deg);\n" +
"  }\n" +
"  100%{\n" +
"    -webkit-transform:rotate3d(0, 0, 1, 360deg);\n" +
"            transform:rotate3d(0, 0, 1, 360deg);\n" +
"  }\n" +
"}\n" +
".weui-slider{\n" +
"  padding:15px 18px;\n" +
"  -webkit-user-select:none;\n" +
"          user-select:none;\n" +
"}\n" +
".weui-slider__inner{\n" +
"  position:relative;\n" +
"  height:2px;\n" +
"  background-color:#E9E9E9;\n" +
"}\n" +
".weui-slider__track{\n" +
"  height:2px;\n" +
"  background-color:#1AAD19;\n" +
"  width:0;\n" +
"}\n" +
".weui-slider__handler{\n" +
"  position:absolute;\n" +
"  left:0;\n" +
"  top:50%;\n" +
"  width:28px;\n" +
"  height:28px;\n" +
"  margin-left:-14px;\n" +
"  margin-top:-14px;\n" +
"  border-radius:50%;\n" +
"  background-color:#FFFFFF;\n" +
"  box-shadow:0 0 4px rgba(0, 0, 0, 0.2);\n" +
"}\n" +
".weui-slider-box{\n" +
"  display:-webkit-box;\n" +
"  display:-webkit-flex;\n" +
"  display:flex;\n" +
"  -webkit-box-align:center;\n" +
"  -webkit-align-items:center;\n" +
"          align-items:center;\n" +
"}\n" +
".weui-slider-box .weui-slider{\n" +
"  -webkit-box-flex:1;\n" +
"  -webkit-flex:1;\n" +
"          flex:1;\n" +
"}\n" +
".weui-slider-box__value{\n" +
"  margin-left:.5em;\n" +
"  min-width:24px;\n" +
"  color:#888888;\n" +
"  text-align:center;\n" +
"  font-size:14px;\n" +
"}\n" +
"\n" +
"/*# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlL2Jhc2UvcmVzZXQubGVzcyIsInN0eWxlL3dldWkuY3NzIiwic3R5bGUvYmFzZS9taXhpbi9tb2JpbGUubGVzcyIsInN0eWxlL2ljb24vd2V1aS1mb250Lmxlc3MiLCJzdHlsZS9pY29uL3dldWktaWNvbl9mb250Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fZ2xvYmFsLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fZGVmYXVsdC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktYnV0dG9uL3dldWktYnRuX3ByaW1hcnkubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWJ1dHRvbi93ZXVpLWJ0bl93YXJuLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fZGlzYWJsZWQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWJ1dHRvbi93ZXVpLWJ0bl9sb2FkaW5nLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fcGxhaW4ubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWJ1dHRvbi93ZXVpLWJ1dHRvbi5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWNlbGxfZ2xvYmFsLmxlc3MiLCJzdHlsZS9iYXNlL21peGluL3NldE9uZXB4Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1jZWxsL3dldWktY2VsbF9zd2lwZWQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1hY2Nlc3MubGVzcyIsInN0eWxlL2Jhc2UvbWl4aW4vc2V0QXJyb3cubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1jaGVjay93ZXVpLWNoZWNrX2NvbW1vbi5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWNoZWNrL3dldWktcmFkaW8ubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1jaGVjay93ZXVpLWNoZWNrYm94Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1jZWxsL3dldWktZm9ybS93ZXVpLWZvcm1fY29tbW9uLmxlc3MiLCJzdHlsZS9iYXNlL21peGluL3RleHQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1mb3JtL3dldWktZm9ybS1wcmV2aWV3Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1jZWxsL3dldWktZm9ybS93ZXVpLXNlbGVjdC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWZvcm0vd2V1aS12Y29kZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWdhbGxlcnkubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1zd2l0Y2gubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS11cGxvYWRlci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktcGFnZS93ZXVpLW1zZy5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktcGFnZS93ZXVpLWFydGljbGUubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRhYi93ZXVpLXRhYmJhci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktdGFiL3dldWktbmF2YmFyLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS10YWIvd2V1aS10YWIubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXByb2dyZXNzL3dldWktcHJvZ3Jlc3MubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXBhbmVsL3dldWktcGFuZWwubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLW1lZGlhLWJveC93ZXVpLW1lZGlhLWJveC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktZ3JpZC93ZXVpLWdyaWQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWZvb3Rlci93ZXVpLWZvb3Rlci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktZmxleC93ZXVpLWZsZXgubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRpcHMvd2V1aS1kaWFsb2cubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRpcHMvd2V1aS10b2FzdC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktdGlwcy93ZXVpLW1hc2subGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRpcHMvd2V1aS1hY3Rpb25zaGVldC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktdGlwcy93ZXVpLWxvYWRtb3JlLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS10aXBzL3dldWktYmFkZ2UubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXNlYXJjaGJhci93ZXVpLXNlYXJjaGJhci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktcGlja2VyL3dldWktcGlja2VyLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1hbmltYXRlL3dldWktYW5pbWF0ZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktYWdyZWUvd2V1aS1hZ3JlZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktbG9hZGluZy93ZXVpLWxvYWRpbmcubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXNsaWRlci93ZXVpLXNsaWRlci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBa0JBO0VBQ0ksMEJBQUE7RUFDQSw4QkFBQTtDQ2dOSDtBRDdNRDtFQUNJLGdCQUFBO0VBQ0EsNkRBQUE7Q0MrTUg7QUQ1TUQ7RUFDSSxTQUFBO0VBQ0EsVUFBQTtDQzhNSDtBRDNNRDtFQUNJLFNBQUE7Q0M2TUg7QUQxTUQ7RUFDSSxxQkFBQTtFRXJCQSw2Q0FBQTtDRGtPSDtBRW5PRDtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9tTUFBQTtDRm1RSDtBRS9QRDs7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7Q0ZrUUg7QUVqUUc7O0VBRUkscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0NGbVFQO0FFL1BEO0VBQTJCLGdCQUFBO0NGa1ExQjtBRWpRRDtFQUE2QixnQkFBQTtDRnFRNUI7QUVwUUQ7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ZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcImZuXCI7XG5cbmh0bWwge1xuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBmb250LWZhbWlseTogQHdldWlGb250RGVmYXVsdDtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmEgaW1nIHtcbiAgICBib3JkZXI6IDA7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAuc2V0VGFwQ29sb3IoKTtcbn0iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5odG1sIHtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbS1mb250LCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuYSBpbWcge1xuICBib3JkZXI6IDA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwid2V1aVwiO1xuICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LEFBRUFBQUFMQUlBQUF3QXdSMU5WUXJEK3MrMEFBQUU0QUFBQVFrOVRMekpBS0V4K0FBQUJmQUFBQUZaamJXRnc2NWNGSFFBQUFod0FBQUpRWjJ4NVp2Q1JSL0VBQUFTVUFBQUt0R2hsWVdRTVBST3RBQUFBNEFBQUFEWm9hR1ZoQ0N3RCtnQUFBTHdBQUFBa2FHMTBlRUpvLy84QUFBSFVBQUFBU0d4dlkyRVlxaFc0QUFBRWJBQUFBQ1p0WVhod0FTRUFWUUFBQVJnQUFBQWdibUZ0WmVOY0h0Z0FBQTlJQUFBQjVuQnZjM1Q2YkxoTEFBQVJNQUFBQU9ZQUFRQUFBK2dBQUFCYUErai8vLy8vQStrQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUJJQUFRQUFBQUVBQUNiWmJ4dGZEenoxQUFzRDZBQUFBQURVbTJkdkFBQUFBTlNiWjIvLy93QUFBK2tENmdBQUFBZ0FBZ0FBQUFBQUFBQUJBQUFBRWdCSkFBVUFBQUFBQUFJQUFBQUtBQW9BQUFEL0FBQUFBQUFBQUFFQUFBQUtBQjRBTEFBQlJFWk1WQUFJQUFRQUFBQUFBQUFBQVFBQUFBRnNhV2RoQUFnQUFBQUJBQUFBQVFBRUFBUUFBQUFCQUFnQUFRQUdBQUFBQVFBQUFBQUFBUU93QVpBQUJRQUlBbm9DdkFBQUFJd0NlZ0s4QUFBQjRBQXhBUUlBQUFJQUJRTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVUdaRlpBQkE2Z0hxRVFQb0FBQUFXZ1BxQUFBQUFBQUJBQUFBQUFBQUFBQUFBQVBvQUFBRDZBQUFBK2dBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2dBQUFQb0FBQUQ2QUFBQStqLy93UG9BQUFENkFBQUFBQUFCUUFBQUFNQUFBQXNBQUFBQkFBQUFYUUFBUUFBQUFBQWJnQURBQUVBQUFBc0FBTUFDZ0FBQVhRQUJBQkNBQUFBQkFBRUFBRUFBT29SLy84QUFPb0IvLzhBQUFBQkFBUUFBQUFCQUFJQUF3QUVBQVVBQmdBSEFBZ0FDUUFLQUFzQURBQU5BQTRBRHdBUUFCRUFBQUVHQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdBQUFBQUFOd0FBQUFBQUFBQUVRQUE2Z0VBQU9vQkFBQUFBUUFBNmdJQUFPb0NBQUFBQWdBQTZnTUFBT29EQUFBQUF3QUE2Z1FBQU9vRUFBQUFCQUFBNmdVQUFPb0ZBQUFBQlFBQTZnWUFBT29HQUFBQUJnQUE2Z2NBQU9vSEFBQUFCd0FBNmdnQUFPb0lBQUFBQ0FBQTZna0FBT29KQUFBQUNRQUE2Z29BQU9vS0FBQUFDZ0FBNmdzQUFPb0xBQUFBQ3dBQTZnd0FBT29NQUFBQURBQUE2ZzBBQU9vTkFBQUFEUUFBNmc0QUFPb09BQUFBRGdBQTZnOEFBT29QQUFBQUR3QUE2aEFBQU9vUUFBQUFFQUFBNmhFQUFPb1JBQUFBRVFBQUFBQUFSZ0NNQU5JQkpBRjRBY1FDTWdKZ0FxZ0MvQU5JQTZZRC9nUk9CS0FFOUFWYUFBQUFBZ0FBQUFBRHJ3T3RBQlFBS1FBQUFTSUhCZ2NHRkJjV0Z4WXlOelkzTmpRbkppY21BeUluSmljbU5EYzJOell5RnhZWEZoUUhCZ2NHQWZWNFoyUTdQRHc3Wkdmd1ptUTdQRHc3WkdaNGJsNWJOamMzTmx0ZTIxNWJOamMzTmx0ZUE2MDhPMlJuOEdkak96dzhPMk5uOEdka096ejhyemMxVzE3YlhsdzFOemMxWEY3YlhsczFOd0FBQUFBQ0FBQUFBQU96QTdNQUZ3QXRBQUFCSWdjR0J3WVZGQmNXRnhZek1qYzJOelkxTkNjbUp5WVRCd1lpTHdFbU5qc0JFVFEyT3dFeUZoVVJNeklXQWU1MloyUTdQVDA3WkdkMmZHcG1PejQrTzJacElYWU9LQTUyRGcwWFhRc0hKZ2NMWFJjTkE3TStPMlpxZkhablpEczlQVHRrWjNaOWFXWTdQdjN3bWhJU21oSWFBUmNJQ3dzSS91a2FBQU1BQUFBQUErVUQ1UUFYQUNNQUxBQUFBU0lIQmdjR0ZSUVhGaGNXTXpJM05qYzJOVFFuSmljbUF4UXJBU0kxQXpRN0FUSUhKeUltTkRZeUZoUUdBZTZFY205QlJFUkJiM0tFaVhaeFFrUkVRbkYxYVFJeEF3Z0NRZ01CSXhJWkdTUVpHUVBrUkVKeGRvbUVjbTlCUkVSQmIzS0VpblZ4UWtUOUhRSUNBV0lDQWpFWkl4a1pJeGtBQUFBQUFnQUFBQUFEc1FQa0FCa0FMZ0FBQVFZSEJnYzJCUkVVRnhZWEZoYzJOelkzTmpVUkpCY21KeVlUQVFZdkFTWS9BVFl5SHdFV05qY2xOaklmQVJZQjlWVlZRayt2L3RGSFBteGViR3hkYlQxSS90R3ZUMEpWby83VkJBU0tBd01TQVFVQmNRRUZBZ0VTQWdVQkVRUUQ0eE1ZRWhrM1lQNnNqblZsU0Q4Y0hEOUlaWFdPQVZSZ054a1NHUDYyL3RrREE0OEVCQmtDQVZZQ0FRSGxBUUlRQkFBQUFBQURBQUFBQUFPeEErUUFHd0FxQURNQUFBRUdCd1lIQmdjR054RVVGeFlYRmhjMk56WTNOalVSSkJjbUp5WUhNeklXRlFNVUJpc0JJaWNETkRZVElpWTBOaklXRkFZQjlVRkJPRHNzTzM4Z1J6NXNYbXhzWFcwOVNQN1lxRkJCVlc4MEJBWU1Bd0ltQlFFTEJoNFBGaFllRlJVRDVBOFNEaElPRWlrSy9xMlBkV1JKUGgwZFBrbGtkWThCVTE0MUdSSVkvQVlFL3NZQ0F3VUJPZ1FHL2tBVkh4VVZIeFVBQUFBQ0FBQUFBQVBrQStRQUZ3QXRBQUFCSWdjR0J3WVZGQmNXRnhZek1qYzJOelkxTkNjbUp5WVRBUVlpTHdFbVB3RTJNaDhCRmpJM0FUWXlId0VXQWU2RWNtOUJRME5DYm5PRGlYVnhRa1JFUW5GMWtmNmdBUVVCb3dNREZnRUZBWVVDQlFFQlF3SUZBUlVFQStORVFuRjFpWU56YmtKRFEwRnZjb1NKZFhGQ1JQNmovcVVCQWFnRUJSNENBV1lCQVFFTkFnSVZCQUFBQUFRQUFBQUFBNjhEclFBVUFDa0FQd0JEQUFBQklnY0dCd1lVRnhZWEZqSTNOamMyTkNjbUp5WURJaWNtSnlZME56WTNOaklYRmhjV0ZBY0dCd1lUQlE0Qkx3RW1CZzhCQmhZZkFSWXlOd0UrQVNZaUZ6QWZBUUgxZUdka096dzhPMlJuOEdaa096dzhPMlJtZUc1ZVd6WTNOelpiWHR0ZVd6WTNOelpiWG1uKzlnWVNCbUFHRHdVREJRRUdmUVVRQmdFbEJRRUxFQlVCQVFPdFBEdGtaL0JuWXpzOFBEdGpaL0JuWkRzOC9LODNOVnRlMjE1Y05UYzNOVnhlMjE1Yk5UY0NKdDBGQVFWSkJRSUdCQWNSQm9BR0JRRWhCUThMQkFFQkFBQUJBQUFBQUFPN0F6b0FGd0FBRXk0QlB3RStBUjhCRmpZM0FUWVdGeWNXRkFjQkJpSW5QUW9HQndVSEdnekxEQ0VMQWgwTEh3c05DZ3I5dVFvZUNnR3pDeUVPQ3cwSENaTUpBUW9CdmdrQ0NnMExIUXY5c1FzS0FBQUFBQUlBQUFBQUErVUQ1Z0FYQUN3QUFBRWlCd1lIQmhVVUZ4WVhGak15TnpZM05qVTBKeVluSmhNSEJpOEJKaWNtTlJNME5qc0JNaFlWRXhjZUFRSHZoSEp2UVVORFFtNXpnNGwxY1VKRVJFSnhkVmNRQXdUNkF3SUVFQU1DS3dJRERzVUNBUVBsUkVKeGRZbURjMjVDUTBOQmIzS0VpWFZ4UWtUOVZod0VBbmNDQWdNR0FYb0NBd01DL3EyRkFnUUFBQVFBQUFBQUE2OERyUUFEQUJnQUxRQXpBQUFCTUI4QkF5SUhCZ2NHRkJjV0Z4WXlOelkzTmpRbkppY21BeUluSmljbU5EYzJOell5RnhZWEZoUUhCZ2NHQXlNVk16VWpBdVVCQWZKNFoyUTdQRHc3Wkdmd1ptUTdQRHc3WkdaNGJsNWJOamMzTmx0ZTIxNWJOamMzTmx0ZW15VDkyUUtEQVFFQkxEdzdaR2Z3WjJNN1BEdzdZMmZ3WjJRN1BQeXZOelZiWHR0ZVhEVTNOelZjWHR0ZVd6VTNBakg5SkFBQUFBTUFBQUFBQStRRDVBQVhBQ2NBTUFBQUFTSUhCZ2NHRlJRWEZoY1dNekkzTmpjMk5UUW5KaWNtQXpNeUZoVURGQVlyQVNJbU5RTTBOaE1pSmpRMk1oWVVCZ0h1aEhKdlFVTkRRbTV6ZzRsMWNVSkVSRUp4ZFo0MkJBWU1Bd0luQXdNTUJoOFBGaFllRmhZRDQwUkNjWFdKZzNOdVFrTkRRVzl5aElsMWNVSkUvdllHQmY3QUFnTURBZ0ZBQlFiK05oWWZGaFlmRmdBQUJBQUFBQUFEd0FQQUFBZ0FFZ0FvQUQwQUFBRXlOalFtSWdZVUZoY2pGVE1SSXhVek5TTURJZ2NHQndZVkZCWVhGak15TnpZM05qVTBKeTRCQXlJbkppY21ORGMyTnpZeUZ4WVhGaFFIQmdjR0FmUVlJU0V3SVNGUmp6azV5VG9yaEc1clBUOTlhbStEZG1obFBENCtQTXlGYlY1Yk5UYzNOVnRlMmw1Yk5UYzNOVnRlQXFBaUx5SWlMeUk1SGY3RUhCd0NzVDg5YTI2RWQ4dzhQajQ4WldoMmcyOXFmZnlqTnpWYlh0cGVXelUzTnpWYlh0cGVXelUzQUFBREFBQUFBQU9vQTZnQUN3QWdBRFVBQUFFSEp3Y1hCeGMzRnpjbk53TWlCd1lIQmhRWEZoY1dNamMyTnpZMEp5WW5KZ01pSnlZbkpqUTNOamMyTWhjV0Z4WVVCd1lIQmdLT21wb2NtcG9jbXBvY21wcTJkbVppT2pzN09tSm03R1ppT2pzN09tSm1kbXRkV1RRMk5qUlpYZFpkV1RRMk5qUlpYUUtxbXBvY21wb2NtcG9jbXBvQkdUczZZbWJzWm1JNk96czZZbWJzWm1JNk8vekNOalJaWGRaZFdUUTJOalJaWGRaZFdUUTJBQU1BQUFBQUEra0Q2Z0FhQUM4QU1BQUFBUVlIQmlNaUp5WW5KalEzTmpjMk1oY1dGeFlWRkFjR0J3RUhBVEkzTmpjMk5DY21KeVlpQndZSEJoUVhGaGNXTXdLT05VQkNSMjFkV2pVM056VmFYZHBkV3pVMkdCY3JBU001L2VCWFMwZ3JLeXNyU0V1dVNra3FMQ3dxU1VwWEFTTXJGeGcyTlZ0ZDJsMWFOVGMzTlZwZGJVZENRRFgrM2prQkdTc3JTRXV1U2trcUxDd3FTVXF1UzBnckt3QUMvLzhBQUFQb0ErZ0FGQUF3QUFBQklnY0dCd1lRRnhZWEZpQTNOamMyRUNjbUp5WVRGZzRCSWk4QkJ3WXVBVFEvQVNjbVBnRVdId0UzTmg0QkJnOEJBZlNJZEhGRFJFUkRjWFFCRUhSeFEwUkVRM0YwU1FvQkZCc0tvcWdLR3hNS3FLSUtBUlFiQ3FLb0Noc1VBUXFvQStoRVEzRjAvdkIwY1VORVJFTnhkQUVRZEhGRFJQMWpDaHNUQ3FpaUNnRVVHd3FpcUFvYkZBRUtxS0lLQVJRYkNxSUFBQUlBQUFBQUErUUQ1QUFYQURRQUFBRWlCd1lIQmhVVUZ4WVhGak15TnpZM05qVTBKeVluSmhNVUJpTUZGeFlVRHdFR0x3RXVBVDhCTmg4QkZoUVBBUVV5RmgwQkFlNkVjbTlCUTBOQ2JuT0RpWFZ4UWtSRVFuRjFmd1FDL3BHREFRRVZBd1RzQWdFQzdBUUVGQUlCaEFGd0FnTUQ0MFJDY1hXSmczTnVRa05EUVc5eWhJbDFjVUpFL2ZZQ0F3dVZBZ1FDRkFRRTBBSUZBdEVFQkJRQ0JRR1ZDd01ESndBQUFBVUFBQUFBQTlRRDB3QWpBQ2NBTndCSEFFZ0FBQUVSRkFZaklTSW1OUkVqSWlZOUFUUTJNeUUxTkRZeklUSVdIUUVoTWhZZEFSUUdJeUVSSVJFSElnWVZFUlFXT3dFeU5qVVJOQ1lqSVNJR0ZSRVVGanNCTWpZMUVUUW1Ld0VEZXlZYi9YWWJKa01KRFEwSkFRWVpFZ0V2RXhrQkJna05EUW45Q1FKYzBRa05EUWt0Q1EwTkNmN3NDUTBOQ1MwSkRRMEpMUU1pL1RRYkppWWJBc3dNQ2l3SkRTNFNHUmtTTGcwSkxBb00vVXdDdEdzTkNmNU5DUTBOQ1FHekNRME5DZjVOQ1EwTkNRR3pDUTBBQUFBQUVBREdBQUVBQUFBQUFBRUFCQUFBQUFFQUFBQUFBQUlBQndBRUFBRUFBQUFBQUFNQUJBQUxBQUVBQUFBQUFBUUFCQUFQQUFFQUFBQUFBQVVBQ3dBVEFBRUFBQUFBQUFZQUJBQWVBQUVBQUFBQUFBb0FLd0FpQUFFQUFBQUFBQXNBRXdCTkFBTUFBUVFKQUFFQUNBQmdBQU1BQVFRSkFBSUFEZ0JvQUFNQUFRUUpBQU1BQ0FCMkFBTUFBUVFKQUFRQUNBQitBQU1BQVFRSkFBVUFGZ0NHQUFNQUFRUUpBQVlBQ0FDY0FBTUFBUVFKQUFvQVZnQ2tBQU1BQVFRSkFBc0FKZ0Q2ZDJWMWFWSmxaM1ZzWVhKM1pYVnBkMlYxYVZabGNuTnBiMjRnTVM0d2QyVjFhVWRsYm1WeVlYUmxaQ0JpZVNCemRtY3lkSFJtSUdaeWIyMGdSbTl1ZEdWc2JHOGdjSEp2YW1WamRDNW9kSFJ3T2k4dlptOXVkR1ZzYkc4dVkyOXRBSGNBWlFCMUFHa0FVZ0JsQUdjQWRRQnNBR0VBY2dCM0FHVUFkUUJwQUhjQVpRQjFBR2tBVmdCbEFISUFjd0JwQUc4QWJnQWdBREVBTGdBd0FIY0FaUUIxQUdrQVJ3QmxBRzRBWlFCeUFHRUFkQUJsQUdRQUlBQmlBSGtBSUFCekFIWUFad0F5QUhRQWRBQm1BQ0FBWmdCeUFHOEFiUUFnQUVZQWJ3QnVBSFFBWlFCc0FHd0Fid0FnQUhBQWNnQnZBR29BWlFCakFIUUFMZ0JvQUhRQWRBQndBRG9BTHdBdkFHWUFid0J1QUhRQVpRQnNBR3dBYndBdUFHTUFid0J0QUFBQUFnQUFBQUFBQUFBS0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFTQVFJQkF3RUVBUVVCQmdFSEFRZ0JDUUVLQVFzQkRBRU5BUTRCRHdFUUFSRUJFZ0VUQUFaamFYSmpiR1VJWkc5M2JteHZZV1FFYVc1bWJ3eHpZV1psWDNOMVkyTmxjM01KYzJGbVpWOTNZWEp1QjNOMVkyTmxjM01PYzNWalkyVnpjeTFqYVhKamJHVVJjM1ZqWTJWemN5MXVieTFqYVhKamJHVUhkMkZwZEdsdVp3NTNZV2wwYVc1bkxXTnBjbU5zWlFSM1lYSnVDMmx1Wm04dFkybHlZMnhsQm1OaGJtTmxiQVp6WldGeVkyZ0ZZMnhsWVhJRVltRmphd1prWld4bGRHVUFBQUFBJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuW2NsYXNzXj1cIndldWktaWNvbi1cIl0sXG5bY2xhc3MqPVwiIHdldWktaWNvbi1cIl0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBcIndldWlcIjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5bY2xhc3NePVwid2V1aS1pY29uLVwiXTpiZWZvcmUsXG5bY2xhc3MqPVwiIHdldWktaWNvbi1cIl06YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogLjJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuMmVtO1xufVxuLndldWktaWNvbi1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMDFcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLWRvd25sb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTAyXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1pbmZvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTAzXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1zYWZlLXN1Y2Nlc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMDRcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLXNhZmUtd2FybjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwNVwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc3VjY2VzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwNlwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc3VjY2Vzcy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMDdcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLXN1Y2Nlc3Mtbm8tY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTA4XCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi13YWl0aW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTA5XCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi13YWl0aW5nLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwQVwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24td2FybjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwQlwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24taW5mby1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMENcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLWNhbmNlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwRFwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTBFXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1jbGVhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwRlwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tYmFjazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUExMFwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tZGVsZXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTExXCI7XG59XG4vKiAn7qCAJyAqL1xuW2NsYXNzXj1cIndldWktaWNvbl9cIl06YmVmb3JlLFxuW2NsYXNzKj1cIiB3ZXVpLWljb25fXCJdOmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbn1cbi53ZXVpLWljb24tc3VjY2VzcyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMwOUJCMDc7XG59XG4ud2V1aS1pY29uLXdhaXRpbmcge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjMTBBRUZGO1xufVxuLndldWktaWNvbi13YXJuIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogI0Y0MzUzMDtcbn1cbi53ZXVpLWljb24taW5mbyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMxMEFFRkY7XG59XG4ud2V1aS1pY29uLXN1Y2Nlc3MtY2lyY2xlIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogIzA5QkIwNztcbn1cbi53ZXVpLWljb24tc3VjY2Vzcy1uby1jaXJjbGUge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktaWNvbi13YWl0aW5nLWNpcmNsZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMxMEFFRkY7XG59XG4ud2V1aS1pY29uLWNpcmNsZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICNDOUM5Qzk7XG59XG4ud2V1aS1pY29uLWRvd25sb2FkIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogIzA5QkIwNztcbn1cbi53ZXVpLWljb24taW5mby1jaXJjbGUge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktaWNvbi1zYWZlLXN1Y2Nlc3Mge1xuICBjb2xvcjogIzA5QkIwNztcbn1cbi53ZXVpLWljb24tc2FmZS13YXJuIHtcbiAgY29sb3I6ICNGRkJFMDA7XG59XG4ud2V1aS1pY29uLWNhbmNlbCB7XG4gIGNvbG9yOiAjRjQzNTMwO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ud2V1aS1pY29uLXNlYXJjaCB7XG4gIGNvbG9yOiAjQjJCMkIyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud2V1aS1pY29uLWNsZWFyIHtcbiAgY29sb3I6ICNCMkIyQjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi53ZXVpLWljb24tZGVsZXRlLndldWktaWNvbl9nYWxsZXJ5LWRlbGV0ZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ud2V1aS1pY29uX21zZyB7XG4gIGZvbnQtc2l6ZTogOTNweDtcbn1cbi53ZXVpLWljb25fbXNnLndldWktaWNvbi13YXJuIHtcbiAgY29sb3I6ICNGNzYyNjA7XG59XG4ud2V1aS1pY29uX21zZy1wcmltYXJ5IHtcbiAgZm9udC1zaXplOiA5M3B4O1xufVxuLndldWktaWNvbl9tc2ctcHJpbWFyeS53ZXVpLWljb24td2FybiB7XG4gIGNvbG9yOiAjRkZCRTAwO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxpbmUtaGVpZ2h0OiAyLjU1NTU1NTU2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLWJ0bjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAyMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi53ZXVpLWJ0bl9pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWJ0bl9kZWZhdWx0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG59XG4ud2V1aS1idG5fZGVmYXVsdDpub3QoLndldWktYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ud2V1aS1idG5fZGVmYXVsdDpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREVERURFO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1idG5fcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQUFEMTk7XG59XG4ud2V1aS1idG5fcHJpbWFyeTpub3QoLndldWktYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ud2V1aS1idG5fcHJpbWFyeTpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc5QjE2O1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1idG5fd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjQzNDA7XG59XG4ud2V1aS1idG5fd2Fybjpub3QoLndldWktYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ud2V1aS1idG5fd2Fybjpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0UzQzM5O1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1idG5fZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuLndldWktYnRuX2Rpc2FibGVkLndldWktYnRuX2RlZmF1bHQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xufVxuLndldWktYnRuX2Rpc2FibGVkLndldWktYnRuX3ByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUVEOTlEO1xufVxuLndldWktYnRuX2Rpc2FibGVkLndldWktYnRuX3dhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUM4Qjg5O1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1idG5fbG9hZGluZyAud2V1aS1sb2FkaW5nIHtcbiAgbWFyZ2luOiAtMC4yZW0gMC4zNGVtIDAgMDtcbn1cbi53ZXVpLWJ0bl9sb2FkaW5nLndldWktYnRuX3ByaW1hcnksXG4ud2V1aS1idG5fbG9hZGluZy53ZXVpLWJ0bl93YXJuIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi53ZXVpLWJ0bl9sb2FkaW5nLndldWktYnRuX3ByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc5QjE2O1xufVxuLndldWktYnRuX2xvYWRpbmcud2V1aS1idG5fd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRTNDMzk7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWJ0bl9wbGFpbi1wcmltYXJ5IHtcbiAgY29sb3I6ICMxYWFkMTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYWFkMTk7XG59XG4ud2V1aS1idG5fcGxhaW4tcHJpbWFyeTpub3QoLndldWktYnRuX3BsYWluLWRpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgyNiwgMTczLCAyNSwgMC42KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI2LCAxNzMsIDI1LCAwLjYpO1xufVxuLndldWktYnRuX3BsYWluLXByaW1hcnk6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDA7XG59XG4ud2V1aS1idG5fcGxhaW4tZGVmYXVsdCB7XG4gIGNvbG9yOiAjMzUzNTM1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzUzNTM1O1xufVxuLndldWktYnRuX3BsYWluLWRlZmF1bHQ6bm90KC53ZXVpLWJ0bl9wbGFpbi1kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoNTMsIDUzLCA1MywgMC42KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUzLCA1MywgNTMsIDAuNik7XG59XG4ud2V1aS1idG5fcGxhaW4tZGVmYXVsdDphZnRlciB7XG4gIGJvcmRlci13aWR0aDogMDtcbn1cbi53ZXVpLWJ0bl9wbGFpbi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuYnV0dG9uLndldWktYnRuLFxuaW5wdXQud2V1aS1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5idXR0b24ud2V1aS1idG46Zm9jdXMsXG5pbnB1dC53ZXVpLWJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5idXR0b24ud2V1aS1idG5faW5saW5lLFxuaW5wdXQud2V1aS1idG5faW5saW5lLFxuYnV0dG9uLndldWktYnRuX21pbmksXG5pbnB1dC53ZXVpLWJ0bl9taW5pIHtcbiAgd2lkdGg6IGF1dG87XG59XG5idXR0b24ud2V1aS1idG5fcGxhaW4tcHJpbWFyeSxcbmlucHV0LndldWktYnRuX3BsYWluLXByaW1hcnksXG5idXR0b24ud2V1aS1idG5fcGxhaW4tZGVmYXVsdCxcbmlucHV0LndldWktYnRuX3BsYWluLWRlZmF1bHQge1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ud2V1aS1idG5fbWluaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxLjMyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi8qZ2FwIGJldHdlZW4gYnRuKi9cbi53ZXVpLWJ0biArIC53ZXVpLWJ0biB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ud2V1aS1idG4ud2V1aS1idG5faW5saW5lICsgLndldWktYnRuLndldWktYnRuX2lubGluZSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLndldWktYnRuLWFyZWEge1xuICBtYXJnaW46IDEuMTc2NDcwNTllbSAxNXB4IDAuM2VtO1xufVxuLndldWktYnRuLWFyZWFfaW5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53ZXVpLWJ0bi1hcmVhX2lubGluZSAud2V1aS1idG4ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xufVxuLndldWktYnRuLWFyZWFfaW5saW5lIC53ZXVpLWJ0bjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuei1pbmRleDpcbjA6IC53ZXVpLXN3aXBlZC1idG5cbjE6IC53ZXVpLWNlbGxfc3dpcGVkIC53ZXVpLWNlbGxfX2JkXG4yOiAud2V1aS1jZWxsc+WSjC53ZXVpLWNlbGznmoQxcHjnur9cbiovXG4ud2V1aS1jZWxscyB7XG4gIG1hcmdpbi10b3A6IDEuMTc2NDcwNTllbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgbGluZS1oZWlnaHQ6IDEuNDcwNTg4MjQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndldWktY2VsbHM6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xuICB6LWluZGV4OiAyO1xufVxuLndldWktY2VsbHM6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGNvbG9yOiAjZTVlNWU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gIHotaW5kZXg6IDI7XG59XG4ud2V1aS1jZWxsc19fdGl0bGUge1xuICBtYXJnaW4tdG9wOiAuNzdlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjNlbTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLndldWktY2VsbHNfX3RpdGxlICsgLndldWktY2VsbHMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLndldWktY2VsbHNfX3RpcHMge1xuICBtYXJnaW4tdG9wOiAuM2VtO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud2V1aS1jZWxsIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2V1aS1jZWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgY29sb3I6ICNlNWU1ZTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMjtcbn1cbi53ZXVpLWNlbGw6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLWNlbGxfcHJpbWFyeSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLndldWktY2VsbF9fYmQge1xuICBmbGV4OiAxO1xufVxuLndldWktY2VsbF9fZnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWNlbGxfc3dpcGVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG59XG4ud2V1aS1jZWxsX3N3aXBlZCA+IC53ZXVpLWNlbGxfX2JkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLndldWktY2VsbF9zd2lwZWQgPiAud2V1aS1jZWxsX19mdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi53ZXVpLXN3aXBlZC1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ3MDU4ODI0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi53ZXVpLXN3aXBlZC1idG5fZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDN0M3Q0M7XG59XG4ud2V1aS1zd2lwZWQtYnRuX3dhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzQjMwO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1jZWxsX2FjY2VzcyB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ud2V1aS1jZWxsX2FjY2VzczphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xufVxuLndldWktY2VsbF9hY2Nlc3MgLndldWktY2VsbF9fZnQge1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS1jZWxsX2FjY2VzcyAud2V1aS1jZWxsX19mdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICBib3JkZXItY29sb3I6ICNDOEM4Q0Q7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHRyYW5zZm9ybTogbWF0cml4KDAuNzEsIDAuNzEsIC0wLjcxLCAwLjcxLCAwLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIHJpZ2h0OiAycHg7XG59XG4ud2V1aS1jZWxsX2xpbmsge1xuICBjb2xvcjogIzU4NkM5NDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLndldWktY2VsbF9saW5rOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWNoZWNrX19sYWJlbCB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi53ZXVpLWNoZWNrX19sYWJlbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xufVxuLndldWktY2hlY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC05OTk5ZW07XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWNlbGxzX3JhZGlvIC53ZXVpLWNlbGxfX2Z0IHtcbiAgcGFkZGluZy1sZWZ0OiAwLjM1ZW07XG59XG4ud2V1aS1jZWxsc19yYWRpbyAud2V1aS1jaGVjazpjaGVja2VkICsgLndldWktaWNvbi1jaGVja2VkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiAnXFxFQTA4JztcbiAgY29sb3I6ICMwOUJCMDc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktY2VsbHNfY2hlY2tib3ggLndldWktY2VsbF9faGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjM1ZW07XG59XG4ud2V1aS1jZWxsc19jaGVja2JveCAud2V1aS1pY29uLWNoZWNrZWQ6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcRUEwMSc7XG4gIGNvbG9yOiAjQzlDOUM5O1xuICBmb250LXNpemU6IDIzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndldWktY2VsbHNfY2hlY2tib3ggLndldWktY2hlY2s6Y2hlY2tlZCArIC53ZXVpLWljb24tY2hlY2tlZDpiZWZvcmUge1xuICBjb250ZW50OiAnXFxFQTA2JztcbiAgY29sb3I6ICMwOUJCMDc7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwNXB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi53ZXVpLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgaGVpZ2h0OiAxLjQ3MDU4ODI0ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ3MDU4ODI0O1xufVxuLndldWktaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4ud2V1aS1pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLndldWktdGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAwO1xuICByZXNpemU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBvdXRsaW5lOiAwO1xufVxuLndldWktdGV4dGFyZWEtY291bnRlciB7XG4gIGNvbG9yOiAjQjJCMkIyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi53ZXVpLWNlbGxfd2FybiAud2V1aS10ZXh0YXJlYS1jb3VudGVyIHtcbiAgY29sb3I6ICNFNjQzNDA7XG59XG4ud2V1aS10b3B0aXBzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGO1xuICB6LWluZGV4OiA1MDAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi53ZXVpLXRvcHRpcHNfd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjQzNDA7XG59XG4ud2V1aS1jZWxsc19mb3JtIC53ZXVpLWNlbGxfX2Z0IHtcbiAgZm9udC1zaXplOiAwO1xufVxuLndldWktY2VsbHNfZm9ybSAud2V1aS1pY29uLXdhcm4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktY2VsbHNfZm9ybSBpbnB1dCxcbi53ZXVpLWNlbGxzX2Zvcm0gdGV4dGFyZWEsXG4ud2V1aS1jZWxsc19mb3JtIGxhYmVsW2Zvcl0ge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4ud2V1aS1jZWxsX3dhcm4ge1xuICBjb2xvcjogI0U2NDM0MDtcbn1cbi53ZXVpLWNlbGxfd2FybiAud2V1aS1pY29uLXdhcm4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWZvcm0tcHJldmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbi53ZXVpLWZvcm0tcHJldmlldzpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGNvbG9yOiAjZTVlNWU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1mb3JtLXByZXZpZXc6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGNvbG9yOiAjZTVlNWU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2hkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMi41ZW07XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2hkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xuICBsZWZ0OiAxNXB4O1xufVxuLndldWktZm9ybS1wcmV2aWV3X19oZCAud2V1aS1mb3JtLXByZXZpZXdfX3ZhbHVlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuLndldWktZm9ybS1wcmV2aWV3X19iZCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAuOWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuLndldWktZm9ybS1wcmV2aWV3X19mdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2Z0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q1RDVENjtcbiAgY29sb3I6ICNENUQ1RDY7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19faXRlbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2xhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBtaW4td2lkdGg6IDRlbTtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtYWxpZ24tbGFzdDoganVzdGlmeTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2J0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjM0NDNTFGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbmJ1dHRvbi53ZXVpLWZvcm0tcHJldmlld19fYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2J0bjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDFweDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNENUQ1RDY7XG4gIGNvbG9yOiAjRDVENUQ2O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2J0bjpmaXJzdC1jaGlsZDphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2J0bl9kZWZhdWx0IHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2J0bl9wcmltYXJ5IHtcbiAgY29sb3I6ICMwQkIyMEM7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWNlbGxfc2VsZWN0IHtcbiAgcGFkZGluZzogMDtcbn1cbi53ZXVpLWNlbGxfc2VsZWN0IC53ZXVpLXNlbGVjdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4ud2V1aS1jZWxsX3NlbGVjdCAud2V1aS1jZWxsX19iZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICBib3JkZXItY29sb3I6ICNDOEM4Q0Q7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHRyYW5zZm9ybTogbWF0cml4KDAuNzEsIDAuNzEsIC0wLjcxLCAwLjcxLCAwLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuLndldWktc2VsZWN0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi53ZXVpLWNlbGxfc2VsZWN0LWJlZm9yZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4ud2V1aS1jZWxsX3NlbGVjdC1iZWZvcmUgLndldWktc2VsZWN0IHtcbiAgd2lkdGg6IDEwNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIC53ZXVpLWNlbGxfX2hkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIC53ZXVpLWNlbGxfX2hkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDFweDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIC53ZXVpLWNlbGxfX2hkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICBib3JkZXItY29sb3I6ICNDOEM4Q0Q7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHRyYW5zZm9ybTogbWF0cml4KDAuNzEsIDAuNzEsIC0wLjcxLCAwLjcxLCAwLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIC53ZXVpLWNlbGxfX2JkIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIC53ZXVpLWNlbGxfX2JkOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLWNlbGxfc2VsZWN0LWFmdGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLndldWktY2VsbF9zZWxlY3QtYWZ0ZXIgLndldWktc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1jZWxsX3Zjb2RlIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLndldWktdmNvZGUtaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndldWktdmNvZGUtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDAgMC42ZW0gMCAwLjdlbTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTVFNUU1O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzNDQzUxRjtcbn1cbmJ1dHRvbi53ZXVpLXZjb2RlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIG91dGxpbmU6IDA7XG59XG4ud2V1aS12Y29kZS1idG46YWN0aXZlIHtcbiAgY29sb3I6ICM1MmEzNDE7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWdhbGxlcnkge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi53ZXVpLWdhbGxlcnlfX2ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA2MHB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLndldWktZ2FsbGVyeV9fb3ByIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQwRDBEO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53ZXVpLWdhbGxlcnlfX2RlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1jZWxsX3N3aXRjaCB7XG4gIHBhZGRpbmctdG9wOiA2LjVweDtcbiAgcGFkZGluZy1ib3R0b206IDYuNXB4O1xufVxuLndldWktc3dpdGNoIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cbi53ZXVpLXN3aXRjaCxcbi53ZXVpLXN3aXRjaC1jcF9fYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjREZERkRGO1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZERkRGO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMsIGJvcmRlciAwLjFzO1xufVxuLndldWktc3dpdGNoOmJlZm9yZSxcbi53ZXVpLXN3aXRjaC1jcF9fYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzIGN1YmljLWJlemllcigwLjQ1LCAxLCAwLjQsIDEpO1xufVxuLndldWktc3dpdGNoOmFmdGVyLFxuLndldWktc3dpdGNoLWNwX19ib3g6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cyBjdWJpYy1iZXppZXIoMC40LCAwLjQsIDAuMjUsIDEuMzUpO1xufVxuLndldWktc3dpdGNoOmNoZWNrZWQsXG4ud2V1aS1zd2l0Y2gtY3BfX2lucHV0OmNoZWNrZWQgfiAud2V1aS1zd2l0Y2gtY3BfX2JveCB7XG4gIGJvcmRlci1jb2xvcjogIzA0QkUwMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QkUwMjtcbn1cbi53ZXVpLXN3aXRjaDpjaGVja2VkOmJlZm9yZSxcbi53ZXVpLXN3aXRjaC1jcF9faW5wdXQ6Y2hlY2tlZCB+IC53ZXVpLXN3aXRjaC1jcF9fYm94OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG4ud2V1aS1zd2l0Y2g6Y2hlY2tlZDphZnRlcixcbi53ZXVpLXN3aXRjaC1jcF9faW5wdXQ6Y2hlY2tlZCB+IC53ZXVpLXN3aXRjaC1jcF9fYm94OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufVxuLndldWktc3dpdGNoLWNwX19pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTk5OTlweDtcbn1cbi53ZXVpLXN3aXRjaC1jcF9fYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLXVwbG9hZGVyX19oZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndldWktdXBsb2FkZXJfX3RpdGxlIHtcbiAgZmxleDogMTtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbmZvIHtcbiAgY29sb3I6ICNCMkIyQjI7XG59XG4ud2V1aS11cGxvYWRlcl9fYmQge1xuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xuICBtYXJnaW4tcmlnaHQ6IC05cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS11cGxvYWRlcl9fZmlsZXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGUge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgd2lkdGg6IDc5cHg7XG4gIGhlaWdodDogNzlweDtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ud2V1aS11cGxvYWRlcl9fZmlsZV9zdGF0dXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS11cGxvYWRlcl9fZmlsZV9zdGF0dXM6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ud2V1aS11cGxvYWRlcl9fZmlsZV9zdGF0dXMgLndldWktdXBsb2FkZXJfX2ZpbGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGUtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGUtY29udGVudCAud2V1aS1pY29uLXdhcm4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ud2V1aS11cGxvYWRlcl9faW5wdXQtYm94IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgd2lkdGg6IDc3cHg7XG4gIGhlaWdodDogNzdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3g6YmVmb3JlLFxuLndldWktdXBsb2FkZXJfX2lucHV0LWJveDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xufVxuLndldWktdXBsb2FkZXJfX2lucHV0LWJveDpiZWZvcmUge1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDM5LjVweDtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3g6YWZ0ZXIge1xuICB3aWR0aDogMzkuNXB4O1xuICBoZWlnaHQ6IDJweDtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3g6YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTk5OTk5O1xufVxuLndldWktdXBsb2FkZXJfX2lucHV0LWJveDphY3RpdmU6YmVmb3JlLFxuLndldWktdXBsb2FkZXJfX2lucHV0LWJveDphY3RpdmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xufVxuLndldWktdXBsb2FkZXJfX2lucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktbXNnIHtcbiAgcGFkZGluZy10b3A6IDM2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53ZXVpLW1zZ19faWNvbi1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi53ZXVpLW1zZ19fdGV4dC1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLndldWktbXNnX190ZXh0LWFyZWEgYSB7XG4gIGNvbG9yOiAjNTg2Qzk0O1xufVxuLndldWktbXNnX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLndldWktbXNnX19kZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLW1zZ19fb3ByLWFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLndldWktbXNnX19leHRyYS1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLW1zZ19fZXh0cmEtYXJlYSBhIHtcbiAgY29sb3I6ICM1ODZDOTQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDM4cHgpIHtcbiAgLndldWktbXNnX19leHRyYS1hcmVhIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWFydGljbGUge1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi53ZXVpLWFydGljbGUgc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuLndldWktYXJ0aWNsZSBoMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogLjllbTtcbn1cbi53ZXVpLWFydGljbGUgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IC4zNGVtO1xufVxuLndldWktYXJ0aWNsZSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogLjM0ZW07XG59XG4ud2V1aS1hcnRpY2xlICoge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi53ZXVpLWFydGljbGUgcCB7XG4gIG1hcmdpbjogMCAwIC44ZW07XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktdGFiYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1MDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RkE7XG59XG4ud2V1aS10YWJiYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzBCRkM0O1xuICBjb2xvcjogI0MwQkZDNDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktdGFiYmFyX19pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuLndldWktdGFiYmFyX19pdGVtLndldWktYmFyX19pdGVtX29uIC53ZXVpLXRhYmJhcl9faWNvbixcbi53ZXVpLXRhYmJhcl9faXRlbS53ZXVpLWJhcl9faXRlbV9vbiAud2V1aS10YWJiYXJfX2ljb24gPiBpLFxuLndldWktdGFiYmFyX19pdGVtLndldWktYmFyX19pdGVtX29uIC53ZXVpLXRhYmJhcl9fbGFiZWwge1xuICBjb2xvcjogIzA5QkIwNztcbn1cbi53ZXVpLXRhYmJhcl9faWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI3cHg7XG4gIGhlaWdodDogMjdweDtcbn1cbmkud2V1aS10YWJiYXJfX2ljb24sXG4ud2V1aS10YWJiYXJfX2ljb24gPiBpIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLXRhYmJhcl9faWNvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndldWktdGFiYmFyX19sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktbmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1MDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG4ud2V1aS1uYXZiYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1uYXZiYXIgKyAud2V1aS10YWJfX3BhbmVsIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLndldWktbmF2YmFyX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTNweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuLndldWktbmF2YmFyX19pdGVtOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG59XG4ud2V1aS1uYXZiYXJfX2l0ZW0ud2V1aS1iYXJfX2l0ZW1fb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQUVBO1xufVxuLndldWktbmF2YmFyX19pdGVtOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDFweDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBjb2xvcjogI0NDQ0NDQztcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xufVxuLndldWktbmF2YmFyX19pdGVtOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktdGFiIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud2V1aS10YWJfX3BhbmVsIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cbi53ZXVpLXRhYl9fY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLXByb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZXVpLXByb2dyZXNzX19iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xuICBoZWlnaHQ6IDNweDtcbiAgZmxleDogMTtcbn1cbi53ZXVpLXByb2dyZXNzX19pbm5lci1iYXIge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktcHJvZ3Jlc3NfX29wciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAwO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLXBhbmVsOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi53ZXVpLXBhbmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U1RTVFNTtcbiAgY29sb3I6ICNFNUU1RTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXBhbmVsOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTVFNUU1O1xuICBjb2xvcjogI0U1RTVFNTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktcGFuZWxfX2hkIHtcbiAgcGFkZGluZzogMTRweCAxNXB4IDEwcHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53ZXVpLXBhbmVsX19oZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcbiAgY29sb3I6ICNFNUU1RTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbiAgbGVmdDogMTVweDtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktbWVkaWEtYm94IHtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndldWktbWVkaWEtYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U1RTVFNTtcbiAgY29sb3I6ICNFNUU1RTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbiAgbGVmdDogMTVweDtcbn1cbi53ZXVpLW1lZGlhLWJveDpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuYS53ZXVpLW1lZGlhLWJveCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5hLndldWktbWVkaWEtYm94OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XG59XG4ud2V1aS1tZWRpYS1ib3hfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi53ZXVpLW1lZGlhLWJveF9fZGVzYyB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xufVxuLndldWktbWVkaWEtYm94X19pbmZvIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI0NFQ0VDRTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLW1lZGlhLWJveF9faW5mb19fbWV0YSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG4ud2V1aS1tZWRpYS1ib3hfX2luZm9fX21ldGFfZXh0cmEge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0VDRUNFO1xufVxuLndldWktbWVkaWEtYm94X3RleHQgLndldWktbWVkaWEtYm94X190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi53ZXVpLW1lZGlhLWJveF9hcHBtc2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndldWktbWVkaWEtYm94X2FwcG1zZyAud2V1aS1tZWRpYS1ib3hfX2hkIHtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndldWktbWVkaWEtYm94X2FwcG1zZyAud2V1aS1tZWRpYS1ib3hfX3RodW1iIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ud2V1aS1tZWRpYS1ib3hfYXBwbXNnIC53ZXVpLW1lZGlhLWJveF9fYmQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG4ud2V1aS1tZWRpYS1ib3hfc21hbGwtYXBwbXNnIHtcbiAgcGFkZGluZzogMDtcbn1cbi53ZXVpLW1lZGlhLWJveF9zbWFsbC1hcHBtc2cgLndldWktY2VsbHMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLndldWktbWVkaWEtYm94X3NtYWxsLWFwcG1zZyAud2V1aS1jZWxsczpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1ncmlkcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLWdyaWRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLWdyaWRzOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0Q5RDlEOTtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbn1cbi53ZXVpLWdyaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIHdpZHRoOiAzMy4zMzMzMzMzMyU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ud2V1aS1ncmlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxcHg7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0Q5RDlEOTtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbn1cbi53ZXVpLWdyaWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1ncmlkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XG59XG4ud2V1aS1ncmlkX19pY29uIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ud2V1aS1ncmlkX19pY29uIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndldWktZ3JpZF9faWNvbiArIC53ZXVpLWdyaWRfX2xhYmVsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLndldWktZ3JpZF9fbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktZm9vdGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndldWktZm9vdGVyIGEge1xuICBjb2xvcjogIzU4NkM5NDtcbn1cbi53ZXVpLWZvb3Rlcl9maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogLjUyZW07XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLndldWktZm9vdGVyX19saW5rcyB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cbi53ZXVpLWZvb3Rlcl9fbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luOiAwIC42MmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi53ZXVpLWZvb3Rlcl9fbGluazpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxcHg7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQzdDN0M3O1xuICBjb2xvcjogI0M3QzdDNztcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xuICBsZWZ0OiAtMC42NWVtO1xuICB0b3A6IC4zNmVtO1xuICBib3R0b206IC4zNmVtO1xufVxuLndldWktZm9vdGVyX19saW5rOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2V1aS1mb290ZXJfX3RleHQge1xuICBwYWRkaW5nOiAwIC4zNGVtO1xuICBmb250LXNpemU6IDEycHg7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLndldWktZmxleF9faXRlbSB7XG4gIGZsZXg6IDE7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTAwMDtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndldWktZGlhbG9nX19oZCB7XG4gIHBhZGRpbmc6IDEuM2VtIDEuNmVtIDAuNWVtO1xufVxuLndldWktZGlhbG9nX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi53ZXVpLWRpYWxvZ19fYmQge1xuICBwYWRkaW5nOiAwIDEuNmVtIDAuOGVtO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLWRpYWxvZ19fYmQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nOiAyLjdlbSAyMHB4IDEuN2VtO1xuICBjb2xvcjogIzM1MzUzNTtcbn1cbi53ZXVpLWRpYWxvZ19fZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2V1aS1kaWFsb2dfX2Z0OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRDVENUQ2O1xuICBjb2xvcjogI0Q1RDVENjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktZGlhbG9nX19idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbiAgY29sb3I6ICMzQ0M1MUY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS1kaWFsb2dfX2J0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xufVxuLndldWktZGlhbG9nX19idG46YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxcHg7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRDVENUQ2O1xuICBjb2xvcjogI0Q1RDVENjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xufVxuLndldWktZGlhbG9nX19idG46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktZGlhbG9nX19idG5fZGVmYXVsdCB7XG4gIGNvbG9yOiAjMzUzNTM1O1xufVxuLndldWktZGlhbG9nX19idG5fcHJpbWFyeSB7XG4gIGNvbG9yOiAjMEJCMjBDO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2hkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2JkIHtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIHBhZGRpbmc6IDAuMjVlbSAxLjZlbSAyZW07XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2JkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZzogMS42ZW0gMS42ZW0gMmVtO1xuICBjb2xvcjogIzM1MzUzNTtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2Z0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogNDJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwIDEuNmVtIDAuN2VtO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fZnQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiAwIC44ZW07XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX19idG46YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX19idG46dmlzaXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX19idG46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogLTAuOGVtO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fYnRuX2RlZmF1bHQge1xuICBjb2xvcjogIzgwODA4MDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud2V1aS1kaWFsb2cge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktdG9hc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDUwMDA7XG4gIHdpZHRoOiA3LjZlbTtcbiAgbWluLWhlaWdodDogNy42ZW07XG4gIHRvcDogMTgwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zLjhlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNywgMTcsIDE3LCAwLjcpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ud2V1aS1pY29uX3RvYXN0IHtcbiAgbWFyZ2luOiAyMnB4IDAgMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2V1aS1pY29uX3RvYXN0LndldWktaWNvbi1zdWNjZXNzLW5vLWNpcmNsZTpiZWZvcmUge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiA1NXB4O1xufVxuLndldWktaWNvbl90b2FzdC53ZXVpLWxvYWRpbmcge1xuICBtYXJnaW46IDMwcHggMCAwO1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4ud2V1aS10b2FzdF9fY29udGVudCB7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLW1hc2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLndldWktbWFza190cmFuc3BhcmVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1hY3Rpb25zaGVldCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiA1MDAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZGNDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcbn1cbi53ZXVpLWFjdGlvbnNoZWV0X190aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4ODg7XG4gIGJhY2tncm91bmQ6ICNGQ0ZDRkQ7XG59XG4ud2V1aS1hY3Rpb25zaGVldF9fdGl0bGU6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktYWN0aW9uc2hlZXRfX3RpdGxlIC53ZXVpLWFjdGlvbnNoZWV0X190aXRsZS10ZXh0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG59XG4ud2V1aS1hY3Rpb25zaGVldF9fbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZDRkQ7XG59XG4ud2V1aS1hY3Rpb25zaGVldF9fYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZEO1xufVxuLndldWktYWN0aW9uc2hlZXRfX2NlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ud2V1aS1hY3Rpb25zaGVldF9fY2VsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGNvbG9yOiAjZTVlNWU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1hY3Rpb25zaGVldF9fY2VsbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xufVxuLndldWktYWN0aW9uc2hlZXRfX2NlbGw6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1hY3Rpb25zaGVldCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm90dG9tOiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDI3NHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWFjdGlvbnNoZWV0X19hY3Rpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWFjdGlvbnNoZWV0X19tZW51IHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDZweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWFjdGlvbnNoZWV0X19jZWxsIHtcbiAgcGFkZGluZzogMTNweCAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktYWN0aW9uc2hlZXRfX2NlbGw6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktYWN0aW9uc2hlZXRfX2NlbGw6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbn1cbi53ZXVpLWFjdGlvbnNoZWV0X3RvZ2dsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1sb2FkbW9yZSB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMS41ZW0gYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53ZXVpLWxvYWRtb3JlX190aXBzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndldWktbG9hZG1vcmVfbGluZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTVFNUU1O1xuICBtYXJnaW4tdG9wOiAyLjRlbTtcbn1cbi53ZXVpLWxvYWRtb3JlX2xpbmUgLndldWktbG9hZG1vcmVfX3RpcHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTAuOWVtO1xuICBwYWRkaW5nOiAwIC41NWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLWxvYWRtb3JlX2RvdCAud2V1aS1sb2FkbW9yZV9fdGlwcyB7XG4gIHBhZGRpbmc6IDAgLjE2ZW07XG59XG4ud2V1aS1sb2FkbW9yZV9kb3QgLndldWktbG9hZG1vcmVfX3RpcHM6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogMDtcbiAgdG9wOiAtMC4xNmVtO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogLjE1ZW0gLjRlbTtcbiAgbWluLXdpZHRoOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDM1MzA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53ZXVpLWJhZGdlX2RvdCB7XG4gIHBhZGRpbmc6IC40ZW07XG4gIG1pbi13aWR0aDogMDtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktc2VhcmNoLWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRjQ7XG59XG4ud2V1aS1zZWFyY2gtYmFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q3RDZEQztcbiAgY29sb3I6ICNEN0Q2REM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXNlYXJjaC1iYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEN0Q2REM7XG4gIGNvbG9yOiAjRDdENkRDO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1zZWFyY2gtYmFyLndldWktc2VhcmNoLWJhcl9mb2N1c2luZyAud2V1aS1zZWFyY2gtYmFyX19jYW5jZWwtYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2V1aS1zZWFyY2gtYmFyLndldWktc2VhcmNoLWJhcl9mb2N1c2luZyAud2V1aS1zZWFyY2gtYmFyX19sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkY0O1xufVxuLndldWktc2VhcmNoLWJhcl9fZm9ybTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNkU2RUE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMTtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2JveCAud2V1aS1zZWFyY2gtYmFyX19pbnB1dCB7XG4gIHBhZGRpbmc6IDRweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxLjQyODU3MTQzZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0M2VtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19ib3ggLndldWktc2VhcmNoLWJhcl9faW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLndldWktc2VhcmNoLWJhcl9fYm94IC53ZXVpLWljb24tc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLndldWktc2VhcmNoLWJhcl9fYm94IC53ZXVpLWljb24tY2xlYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcHg7XG4gIHJpZ2h0OiAxcHg7XG4gIGJvdHRvbTogMXB4O1xuICBsZWZ0OiAxcHg7XG4gIHotaW5kZXg6IDI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzlCOUI5QjtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2xhYmVsIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2xhYmVsIC53ZXVpLWljb24tc2VhcmNoIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19jYW5jZWwtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBjb2xvcjogIzA5QkIwNztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2lucHV0Om5vdCg6dmFsaWQpIH4gLndldWktaWNvbi1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktcGlja2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA1MDAwO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xufVxuLndldWktcGlja2VyX19oZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLndldWktcGlja2VyX19oZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcbiAgY29sb3I6ICNFNUU1RTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXBpY2tlcl9fYWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjMUFBRDE5O1xufVxuLndldWktcGlja2VyX19hY3Rpb246Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzg4ODtcbn1cbi53ZXVpLXBpY2tlcl9fYWN0aW9uOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi53ZXVpLXBpY2tlcl9fYmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMjM4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS1waWNrZXJfX2dyb3VwIHtcbiAgZmxleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud2V1aS1waWNrZXJfX21hc2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSksIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AsIGJvdHRvbTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG4ud2V1aS1waWNrZXJfX2luZGljYXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAxMDJweDtcbiAgei1pbmRleDogMztcbn1cbi53ZXVpLXBpY2tlcl9faW5kaWNhdG9yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U1RTVFNTtcbiAgY29sb3I6ICNFNUU1RTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXBpY2tlcl9faW5kaWNhdG9yOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTVFNUU1O1xuICBjb2xvcjogI0U1RTVFNTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktcGlja2VyX19jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndldWktcGlja2VyX19pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS1waWNrZXJfX2l0ZW1fZGlzYWJsZWQge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLndldWktYW5pbWF0ZS1zbGlkZS11cCB7XG4gIGFuaW1hdGlvbjogc2xpZGVVcCBlYXNlIC4zcyBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgfVxufVxuLndldWktYW5pbWF0ZS1zbGlkZS1kb3duIHtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gZWFzZSAuM3MgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi53ZXVpLWFuaW1hdGUtZmFkZS1pbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgLjNzIGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLndldWktYW5pbWF0ZS1mYWRlLW91dCB7XG4gIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIC4zcyBmb3J3YXJkcztcbn1cbi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLndldWktYWdyZWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogLjVlbSAxNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ud2V1aS1hZ3JlZSBhIHtcbiAgY29sb3I6ICM1ODZDOTQ7XG59XG4ud2V1aS1hZ3JlZV9fdGV4dCB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuLndldWktYWdyZWVfX2NoZWNrYm94IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IDA7XG4gIHRvcDogMnB4O1xufVxuLndldWktYWdyZWVfX2NoZWNrYm94OmNoZWNrZWQ6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwid2V1aVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBzcGVhazogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIGNvbnRlbnQ6IFwiXFxFQTA4XCI7XG4gIGNvbG9yOiAjMDlCQjA3O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ4JSkgc2NhbGUoMC43Myk7XG59XG4ud2V1aS1hZ3JlZV9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFMUUxO1xufVxuLndldWktYWdyZWVfX2NoZWNrYm94OmRpc2FibGVkOmJlZm9yZSB7XG4gIGNvbG9yOiAjQURBREFEO1xufVxuLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4ud2V1aS1sb2FkaW5nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbmltYXRpb246IHdldWlMb2FkaW5nIDFzIHN0ZXBzKDEyLCBlbmQpIGluZmluaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TWpBaUlHaGxhV2RvZEQwaU1USXdJaUIyYVdWM1FtOTRQU0l3SURBZ01UQXdJREV3TUNJK1BIQmhkR2dnWm1sc2JEMGlibTl1WlNJZ1pEMGlUVEFnTUdneE1EQjJNVEF3U0RCNklpOCtQSEpsWTNRZ2QybGtkR2c5SWpjaUlHaGxhV2RvZEQwaU1qQWlJSGc5SWpRMkxqVWlJSGs5SWpRd0lpQm1hV3hzUFNJalJUbEZPVVU1SWlCeWVEMGlOU0lnY25rOUlqVWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RBZ0xUTXdLU0l2UGp4eVpXTjBJSGRwWkhSb1BTSTNJaUJvWldsbmFIUTlJakl3SWlCNFBTSTBOaTQxSWlCNVBTSTBNQ0lnWm1sc2JEMGlJems0T1RZNU55SWdjbmc5SWpVaUlISjVQU0kxSWlCMGNtRnVjMlp2Y20wOUluSnZkR0YwWlNnek1DQXhNRFV1T1RnZ05qVXBJaTgrUEhKbFkzUWdkMmxrZEdnOUlqY2lJR2hsYVdkb2REMGlNakFpSUhnOUlqUTJMalVpSUhrOUlqUXdJaUJtYVd4c1BTSWpPVUk1T1RsQklpQnllRDBpTlNJZ2NuazlJalVpSUhSeVlXNXpabTl5YlQwaWNtOTBZWFJsS0RZd0lEYzFMams0SURZMUtTSXZQanh5WldOMElIZHBaSFJvUFNJM0lpQm9aV2xuYUhROUlqSXdJaUI0UFNJME5pNDFJaUI1UFNJME1DSWdabWxzYkQwaUkwRXpRVEZCTWlJZ2NuZzlJalVpSUhKNVBTSTFJaUIwY21GdWMyWnZjbTA5SW5KdmRHRjBaU2c1TUNBMk5TQTJOU2tpTHo0OGNtVmpkQ0IzYVdSMGFEMGlOeUlnYUdWcFoyaDBQU0l5TUNJZ2VEMGlORFl1TlNJZ2VUMGlOREFpSUdacGJHdzlJaU5CUWtFNVFVRWlJSEo0UFNJMUlpQnllVDBpTlNJZ2RISmhibk5tYjNKdFBTSnliM1JoZEdVb01USXdJRFU0TGpZMklEWTFLU0l2UGp4eVpXTjBJSGRwWkhSb1BTSTNJaUJvWldsbmFIUTlJakl3SWlCNFBTSTBOaTQxSWlCNVBTSTBNQ0lnWm1sc2JEMGlJMEl5UWpKQ01pSWdjbmc5SWpVaUlISjVQU0kxSWlCMGNtRnVjMlp2Y20wOUluSnZkR0YwWlNneE5UQWdOVFF1TURJZ05qVXBJaTgrUEhKbFkzUWdkMmxrZEdnOUlqY2lJR2hsYVdkb2REMGlNakFpSUhnOUlqUTJMalVpSUhrOUlqUXdJaUJtYVd4c1BTSWpRa0ZDT0VJNUlpQnllRDBpTlNJZ2NuazlJalVpSUhSeVlXNXpabTl5YlQwaWNtOTBZWFJsS0RFNE1DQTFNQ0EyTlNraUx6NDhjbVZqZENCM2FXUjBhRDBpTnlJZ2FHVnBaMmgwUFNJeU1DSWdlRDBpTkRZdU5TSWdlVDBpTkRBaUlHWnBiR3c5SWlORE1rTXdRekVpSUhKNFBTSTFJaUJ5ZVQwaU5TSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9MVEUxTUNBME5TNDVPQ0EyTlNraUx6NDhjbVZqZENCM2FXUjBhRDBpTnlJZ2FHVnBaMmgwUFNJeU1DSWdlRDBpTkRZdU5TSWdlVDBpTkRBaUlHWnBiR3c5SWlORFFrTkNRMElpSUhKNFBTSTFJaUJ5ZVQwaU5TSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9MVEV5TUNBME1TNHpOQ0EyTlNraUx6NDhjbVZqZENCM2FXUjBhRDBpTnlJZ2FHVnBaMmgwUFNJeU1DSWdlRDBpTkRZdU5TSWdlVDBpTkRBaUlHWnBiR3c5SWlORU1rUXlSRElpSUhKNFBTSTFJaUJ5ZVQwaU5TSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9MVGt3SURNMUlEWTFLU0l2UGp4eVpXTjBJSGRwWkhSb1BTSTNJaUJvWldsbmFIUTlJakl3SWlCNFBTSTBOaTQxSWlCNVBTSTBNQ0lnWm1sc2JEMGlJMFJCUkVGRVFTSWdjbmc5SWpVaUlISjVQU0kxSWlCMGNtRnVjMlp2Y20wOUluSnZkR0YwWlNndE5qQWdNalF1TURJZ05qVXBJaTgrUEhKbFkzUWdkMmxrZEdnOUlqY2lJR2hsYVdkb2REMGlNakFpSUhnOUlqUTJMalVpSUhrOUlqUXdJaUJtYVd4c1BTSWpSVEpGTWtVeUlpQnllRDBpTlNJZ2NuazlJalVpSUhSeVlXNXpabTl5YlQwaWNtOTBZWFJsS0Mwek1DQXROUzQ1T0NBMk5Ta2lMejQ4TDNOMlp6ND0pIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuLndldWktbG9hZGluZy53ZXVpLWxvYWRpbmdfdHJhbnNwYXJlbnQsXG4ud2V1aS1idG5fbG9hZGluZy53ZXVpLWJ0bl9wcmltYXJ5IC53ZXVpLWxvYWRpbmcsXG4ud2V1aS1idG5fbG9hZGluZy53ZXVpLWJ0bl93YXJuIC53ZXVpLWxvYWRpbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTIwJyBoZWlnaHQ9JzEyMCcgdmlld0JveD0nMCAwIDEwMCAxMDAnJTNFJTNDcGF0aCBmaWxsPSdub25lJyBkPSdNMCAwaDEwMHYxMDBIMHonLyUzRSUzQ3JlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC41KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgzMCAxMDUuOTggNjUpJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuNDMpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDYwIDc1Ljk4IDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4zMiknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTIwIDU4LjY2IDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjI4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTQuMDIgNjUpJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtMTUwIDQ1Ljk4IDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE3KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtMTIwIDQxLjM0IDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMSknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTYwIDI0LjAyIDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjAzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtMzAgLTUuOTggNjUpJy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHdldWlMb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHdldWlMb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAzNjBkZWcpO1xuICB9XG59XG4vKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi53ZXVpLXNsaWRlciB7XG4gIHBhZGRpbmc6IDE1cHggMThweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ud2V1aS1zbGlkZXJfX2lubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RTlFOTtcbn1cbi53ZXVpLXNsaWRlcl9fdHJhY2sge1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBQUQxOTtcbiAgd2lkdGg6IDA7XG59XG4ud2V1aS1zbGlkZXJfX2hhbmRsZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLndldWktc2xpZGVyLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2V1aS1zbGlkZXItYm94IC53ZXVpLXNsaWRlciB7XG4gIGZsZXg6IDE7XG59XG4ud2V1aS1zbGlkZXItYm94X192YWx1ZSB7XG4gIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIGNvbG9yOiAjODg4ODg4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG4uc2V0VGFwQ29sb3IoQGM6cmdiYSgwLDAsMCwwKSkge1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogQGM7XG59XG5cblxuXG5cbiIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWZhbWlseTogXCJ3ZXVpXCI7XG4gICAgc3JjOiB1cmwoJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxBQUVBQUFBTEFJQUFBd0F3UjFOVlFyRCtzKzBBQUFFNEFBQUFRazlUTHpKQUtFeCtBQUFCZkFBQUFGWmpiV0Z3NjVjRkhRQUFBaHdBQUFKUVoyeDVadkNSUi9FQUFBU1VBQUFLdEdobFlXUU1QUk90QUFBQTRBQUFBRFpvYUdWaENDd0QrZ0FBQUx3QUFBQWthRzEwZUVKby8vOEFBQUhVQUFBQVNHeHZZMkVZcWhXNEFBQUViQUFBQUNadFlYaHdBU0VBVlFBQUFSZ0FBQUFnYm1GdFplTmNIdGdBQUE5SUFBQUI1bkJ2YzNUNmJMaExBQUFSTUFBQUFPWUFBUUFBQStnQUFBQmFBK2ovLy8vL0Era0FBUUFBQUFBQUFBQUFBQUFBQUFBQUFCSUFBUUFBQUFFQUFDYlpieHRmRHp6MUFBc0Q2QUFBQUFEVW0yZHZBQUFBQU5TYloyLy8vd0FBQStrRDZnQUFBQWdBQWdBQUFBQUFBQUFCQUFBQUVnQkpBQVVBQUFBQUFBSUFBQUFLQUFvQUFBRC9BQUFBQUFBQUFBRUFBQUFLQUI0QUxBQUJSRVpNVkFBSUFBUUFBQUFBQUFBQUFRQUFBQUZzYVdkaEFBZ0FBQUFCQUFBQUFRQUVBQVFBQUFBQkFBZ0FBUUFHQUFBQUFRQUFBQUFBQVFPd0FaQUFCUUFJQW5vQ3ZBQUFBSXdDZWdLOEFBQUI0QUF4QVFJQUFBSUFCUU1BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVHWkZaQUJBNmdIcUVRUG9BQUFBV2dQcUFBQUFBQUFCQUFBQUFBQUFBQUFBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2dBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUErai8vd1BvQUFBRDZBQUFBQUFBQlFBQUFBTUFBQUFzQUFBQUJBQUFBWFFBQVFBQUFBQUFiZ0FEQUFFQUFBQXNBQU1BQ2dBQUFYUUFCQUJDQUFBQUJBQUVBQUVBQU9vUi8vOEFBT29CLy84QUFBQUJBQVFBQUFBQkFBSUFBd0FFQUFVQUJnQUhBQWdBQ1FBS0FBc0FEQUFOQUE0QUR3QVFBQkVBQUFFR0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF3QUFBQUFBTndBQUFBQUFBQUFFUUFBNmdFQUFPb0JBQUFBQVFBQTZnSUFBT29DQUFBQUFnQUE2Z01BQU9vREFBQUFBd0FBNmdRQUFPb0VBQUFBQkFBQTZnVUFBT29GQUFBQUJRQUE2Z1lBQU9vR0FBQUFCZ0FBNmdjQUFPb0hBQUFBQndBQTZnZ0FBT29JQUFBQUNBQUE2Z2tBQU9vSkFBQUFDUUFBNmdvQUFPb0tBQUFBQ2dBQTZnc0FBT29MQUFBQUN3QUE2Z3dBQU9vTUFBQUFEQUFBNmcwQUFPb05BQUFBRFFBQTZnNEFBT29PQUFBQURnQUE2ZzhBQU9vUEFBQUFEd0FBNmhBQUFPb1FBQUFBRUFBQTZoRUFBT29SQUFBQUVRQUFBQUFBUmdDTUFOSUJKQUY0QWNRQ01nSmdBcWdDL0FOSUE2WUQvZ1JPQktBRTlBVmFBQUFBQWdBQUFBQURyd090QUJRQUtRQUFBU0lIQmdjR0ZCY1dGeFl5TnpZM05qUW5KaWNtQXlJbkppY21ORGMyTnpZeUZ4WVhGaFFIQmdjR0FmVjRaMlE3UER3N1pHZndabVE3UER3N1pHWjRibDViTmpjM05sdGUyMTViTmpjM05sdGVBNjA4TzJSbjhHZGpPenc4TzJObjhHZGtPeno4cnpjMVcxN2JYbHcxTnpjMVhGN2JYbHMxTndBQUFBQUNBQUFBQUFPekE3TUFGd0F0QUFBQklnY0dCd1lWRkJjV0Z4WXpNamMyTnpZMU5DY21KeVlUQndZaUx3RW1OanNCRVRRMk93RXlGaFVSTXpJV0FlNTJaMlE3UFQwN1pHZDJmR3BtT3o0K08yWnBJWFlPS0E1MkRnMFhYUXNISmdjTFhSY05BN00rTzJacWZIWm5aRHM5UFR0a1ozWjlhV1k3UHYzd21oSVNtaElhQVJjSUN3c0kvdWthQUFNQUFBQUFBK1VENVFBWEFDTUFMQUFBQVNJSEJnY0dGUlFYRmhjV016STNOamMyTlRRbkppY21BeFFyQVNJMUF6UTdBVElISnlJbU5EWXlGaFFHQWU2RWNtOUJSRVJCYjNLRWlYWnhRa1JFUW5GMWFRSXhBd2dDUWdNQkl4SVpHU1FaR1FQa1JFSnhkb21FY205QlJFUkJiM0tFaW5WeFFrVDlIUUlDQVdJQ0FqRVpJeGtaSXhrQUFBQUFBZ0FBQUFBRHNRUGtBQmtBTGdBQUFRWUhCZ2MyQlJFVUZ4WVhGaGMyTnpZM05qVVJKQmNtSnlZVEFRWXZBU1kvQVRZeUh3RVdOamNsTmpJZkFSWUI5VlZWUWsrdi90RkhQbXhlYkd4ZGJUMUkvdEd2VDBKVm8vN1ZCQVNLQXdNU0FRVUJjUUVGQWdFU0FnVUJFUVFENHhNWUVoazNZUDZzam5WbFNEOGNIRDlJWlhXT0FWUmdOeGtTR1A2Mi90a0RBNDhFQkJrQ0FWWUNBUUhsQVFJUUJBQUFBQUFEQUFBQUFBT3hBK1FBR3dBcUFETUFBQUVHQndZSEJnY0dOeEVVRnhZWEZoYzJOelkzTmpVUkpCY21KeVlITXpJV0ZRTVVCaXNCSWljRE5EWVRJaVkwTmpJV0ZBWUI5VUZCT0Rzc08zOGdSejVzWG14c1hXMDlTUDdZcUZCQlZXODBCQVlNQXdJbUJRRUxCaDRQRmhZZUZSVUQ1QThTRGhJT0Vpa0svcTJQZFdSSlBoMGRQa2xrZFk4QlUxNDFHUklZL0FZRS9zWUNBd1VCT2dRRy9rQVZIeFVWSHhVQUFBQUNBQUFBQUFQa0ErUUFGd0F0QUFBQklnY0dCd1lWRkJjV0Z4WXpNamMyTnpZMU5DY21KeVlUQVFZaUx3RW1Qd0UyTWg4QkZqSTNBVFl5SHdFV0FlNkVjbTlCUTBOQ2JuT0RpWFZ4UWtSRVFuRjFrZjZnQVFVQm93TURGZ0VGQVlVQ0JRRUJRd0lGQVJVRUErTkVRbkYxaVlOemJrSkRRMEZ2Y29TSmRYRkNSUDZqL3FVQkFhZ0VCUjRDQVdZQkFRRU5BZ0lWQkFBQUFBUUFBQUFBQTY4RHJRQVVBQ2tBUHdCREFBQUJJZ2NHQndZVUZ4WVhGakkzTmpjMk5DY21KeVlESWljbUp5WTBOelkzTmpJWEZoY1dGQWNHQndZVEJRNEJMd0VtQmc4QkJoWWZBUll5TndFK0FTWWlGekFmQVFIMWVHZGtPenc4TzJSbjhHWmtPenc4TzJSbWVHNWVXelkzTnpaYlh0dGVXelkzTnpaYlhtbis5Z1lTQm1BR0R3VURCUUVHZlFVUUJnRWxCUUVMRUJVQkFRT3RQRHRrWi9Cbll6czhQRHRqWi9CblpEczgvSzgzTlZ0ZTIxNWNOVGMzTlZ4ZTIxNWJOVGNDSnQwRkFRVkpCUUlHQkFjUkJvQUdCUUVoQlE4TEJBRUJBQUFCQUFBQUFBTzdBem9BRndBQUV5NEJQd0UrQVI4QkZqWTNBVFlXRnljV0ZBY0JCaUluUFFvR0J3VUhHZ3pMRENFTEFoMExId3NOQ2dyOXVRb2VDZ0d6Q3lFT0N3MEhDWk1KQVFvQnZna0NDZzBMSFF2OXNRc0tBQUFBQUFJQUFBQUFBK1VENWdBWEFDd0FBQUVpQndZSEJoVVVGeFlYRmpNeU56WTNOalUwSnlZbkpoTUhCaThCSmljbU5STTBOanNCTWhZVkV4Y2VBUUh2aEhKdlFVTkRRbTV6ZzRsMWNVSkVSRUp4ZFZjUUF3VDZBd0lFRUFNQ0t3SUREc1VDQVFQbFJFSnhkWW1EYzI1Q1EwTkJiM0tFaVhWeFFrVDlWaHdFQW5jQ0FnTUdBWG9DQXdNQy9xMkZBZ1FBQUFRQUFBQUFBNjhEclFBREFCZ0FMUUF6QUFBQk1COEJBeUlIQmdjR0ZCY1dGeFl5TnpZM05qUW5KaWNtQXlJbkppY21ORGMyTnpZeUZ4WVhGaFFIQmdjR0F5TVZNelVqQXVVQkFmSjRaMlE3UER3N1pHZndabVE3UER3N1pHWjRibDViTmpjM05sdGUyMTViTmpjM05sdGVteVQ5MlFLREFRRUJMRHc3Wkdmd1oyTTdQRHc3WTJmd1oyUTdQUHl2TnpWYlh0dGVYRFUzTnpWY1h0dGVXelUzQWpIOUpBQUFBQU1BQUFBQUErUUQ1QUFYQUNjQU1BQUFBU0lIQmdjR0ZSUVhGaGNXTXpJM05qYzJOVFFuSmljbUF6TXlGaFVERkFZckFTSW1OUU0wTmhNaUpqUTJNaFlVQmdIdWhISnZRVU5EUW01emc0bDFjVUpFUkVKeGRaNDJCQVlNQXdJbkF3TU1CaDhQRmhZZUZoWUQ0MFJDY1hXSmczTnVRa05EUVc5eWhJbDFjVUpFL3ZZR0JmN0FBZ01EQWdGQUJRYitOaFlmRmhZZkZnQUFCQUFBQUFBRHdBUEFBQWdBRWdBb0FEMEFBQUV5TmpRbUlnWVVGaGNqRlRNUkl4VXpOU01ESWdjR0J3WVZGQllYRmpNeU56WTNOalUwSnk0QkF5SW5KaWNtTkRjMk56WXlGeFlYRmhRSEJnY0dBZlFZSVNFd0lTRlJqems1eVRvcmhHNXJQVDk5YW0rRGRtaGxQRDQrUE15RmJWNWJOVGMzTlZ0ZTJsNWJOVGMzTlZ0ZUFxQWlMeUlpTHlJNUhmN0VIQndDc1Q4OWEyNkVkOHc4UGo0OFpXaDJnMjlxZmZ5ak56VmJYdHBlV3pVM056VmJYdHBlV3pVM0FBQURBQUFBQUFPb0E2Z0FDd0FnQURVQUFBRUhKd2NYQnhjM0Z6Y25Od01pQndZSEJoUVhGaGNXTWpjMk56WTBKeVluSmdNaUp5WW5KalEzTmpjMk1oY1dGeFlVQndZSEJnS09tcG9jbXBvY21wb2NtcHEyZG1aaU9qczdPbUptN0daaU9qczdPbUptZG10ZFdUUTJOalJaWGRaZFdUUTJOalJaWFFLcW1wb2NtcG9jbXBvY21wb0JHVHM2WW1ic1ptSTZPenM2WW1ic1ptSTZPL3pDTmpSWlhkWmRXVFEyTmpSWlhkWmRXVFEyQUFNQUFBQUFBK2tENmdBYUFDOEFNQUFBQVFZSEJpTWlKeVluSmpRM05qYzJNaGNXRnhZVkZBY0dCd0VIQVRJM05qYzJOQ2NtSnlZaUJ3WUhCaFFYRmhjV013S09OVUJDUjIxZFdqVTNOelZhWGRwZFd6VTJHQmNyQVNNNS9lQlhTMGdyS3lzclNFdXVTa2txTEN3cVNVcFhBU01yRnhnMk5WdGQybDFhTlRjM05WcGRiVWRDUURYKzNqa0JHU3NyU0V1dVNra3FMQ3dxU1VxdVMwZ3JLd0FDLy84QUFBUG9BK2dBRkFBd0FBQUJJZ2NHQndZUUZ4WVhGaUEzTmpjMkVDY21KeVlURmc0QklpOEJCd1l1QVRRL0FTY21QZ0VXSHdFM05oNEJCZzhCQWZTSWRIRkRSRVJEY1hRQkVIUnhRMFJFUTNGMFNRb0JGQnNLb3FnS0d4TUtxS0lLQVJRYkNxS29DaHNVQVFxb0EraEVRM0YwL3ZCMGNVTkVSRU54ZEFFUWRIRkRSUDFqQ2hzVENxaWlDZ0VVR3dxaXFBb2JGQUVLcUtJS0FSUWJDcUlBQUFJQUFBQUFBK1FENUFBWEFEUUFBQUVpQndZSEJoVVVGeFlYRmpNeU56WTNOalUwSnlZbkpoTVVCaU1GRnhZVUR3RUdMd0V1QVQ4Qk5oOEJGaFFQQVFVeUZoMEJBZTZFY205QlEwTkNibk9EaVhWeFFrUkVRbkYxZndRQy9wR0RBUUVWQXdUc0FnRUM3QVFFRkFJQmhBRndBZ01ENDBSQ2NYV0pnM051UWtORFFXOXloSWwxY1VKRS9mWUNBd3VWQWdRQ0ZBUUUwQUlGQXRFRUJCUUNCUUdWQ3dNREp3QUFBQVVBQUFBQUE5UUQwd0FqQUNjQU53QkhBRWdBQUFFUkZBWWpJU0ltTlJFaklpWTlBVFEyTXlFMU5EWXpJVElXSFFFaE1oWWRBUlFHSXlFUklSRUhJZ1lWRVJRV093RXlOalVSTkNZaklTSUdGUkVVRmpzQk1qWTFFVFFtS3dFRGV5WWIvWFliSmtNSkRRMEpBUVlaRWdFdkV4a0JCZ2tORFFuOUNRSmMwUWtORFFrdENRME5DZjdzQ1EwTkNTMEpEUTBKTFFNaS9UUWJKaVliQXN3TUNpd0pEUzRTR1JrU0xnMEpMQW9NL1V3Q3RHc05DZjVOQ1EwTkNRR3pDUTBOQ2Y1TkNRME5DUUd6Q1EwQUFBQUFFQURHQUFFQUFBQUFBQUVBQkFBQUFBRUFBQUFBQUFJQUJ3QUVBQUVBQUFBQUFBTUFCQUFMQUFFQUFBQUFBQVFBQkFBUEFBRUFBQUFBQUFVQUN3QVRBQUVBQUFBQUFBWUFCQUFlQUFFQUFBQUFBQW9BS3dBaUFBRUFBQUFBQUFzQUV3Qk5BQU1BQVFRSkFBRUFDQUJnQUFNQUFRUUpBQUlBRGdCb0FBTUFBUVFKQUFNQUNBQjJBQU1BQVFRSkFBUUFDQUIrQUFNQUFRUUpBQVVBRmdDR0FBTUFBUVFKQUFZQUNBQ2NBQU1BQVFRSkFBb0FWZ0NrQUFNQUFRUUpBQXNBSmdENmQyVjFhVkpsWjNWc1lYSjNaWFZwZDJWMWFWWmxjbk5wYjI0Z01TNHdkMlYxYVVkbGJtVnlZWFJsWkNCaWVTQnpkbWN5ZEhSbUlHWnliMjBnUm05dWRHVnNiRzhnY0hKdmFtVmpkQzVvZEhSd09pOHZabTl1ZEdWc2JHOHVZMjl0QUhjQVpRQjFBR2tBVWdCbEFHY0FkUUJzQUdFQWNnQjNBR1VBZFFCcEFIY0FaUUIxQUdrQVZnQmxBSElBY3dCcEFHOEFiZ0FnQURFQUxnQXdBSGNBWlFCMUFHa0FSd0JsQUc0QVpRQnlBR0VBZEFCbEFHUUFJQUJpQUhrQUlBQnpBSFlBWndBeUFIUUFkQUJtQUNBQVpnQnlBRzhBYlFBZ0FFWUFid0J1QUhRQVpRQnNBR3dBYndBZ0FIQUFjZ0J2QUdvQVpRQmpBSFFBTGdCb0FIUUFkQUJ3QURvQUx3QXZBR1lBYndCdUFIUUFaUUJzQUd3QWJ3QXVBR01BYndCdEFBQUFBZ0FBQUFBQUFBQUtBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBU0FRSUJBd0VFQVFVQkJnRUhBUWdCQ1FFS0FRc0JEQUVOQVE0QkR3RVFBUkVCRWdFVEFBWmphWEpqYkdVSVpHOTNibXh2WVdRRWFXNW1id3h6WVdabFgzTjFZMk5sYzNNSmMyRm1aVjkzWVhKdUIzTjFZMk5sYzNNT2MzVmpZMlZ6Y3kxamFYSmpiR1VSYzNWalkyVnpjeTF1YnkxamFYSmpiR1VIZDJGcGRHbHVadzUzWVdsMGFXNW5MV05wY21Oc1pRUjNZWEp1QzJsdVptOHRZMmx5WTJ4bEJtTmhibU5sYkFaelpXRnlZMmdGWTJ4bFlYSUVZbUZqYXdaa1pXeGxkR1VBQUFBQScpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuXG5bY2xhc3NePVwid2V1aS1pY29uLVwiXSwgW2NsYXNzKj1cIiB3ZXVpLWljb24tXCJdIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgXCJ3ZXVpXCI7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICY6YmVmb3Jle1xuICAgICAgICAvLyDlubPmu5HljYfnuqdcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogLjJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuMmVtO1xuICAgIH1cbn1cblxuLndldWktaWNvbi1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDFcIiB9IC8qICfuoIAnICovXG4ud2V1aS1pY29uLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTAyXCIgfSAvKiAn7qCAJyAqL1xuLndldWktaWNvbi1pbmZvOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTAzXCIgfSAvKiAn7qCAJyAqL1xuLndldWktaWNvbi1zYWZlLXN1Y2Nlc3M6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDRcIiB9IC8qICfuoIAnICovXG4ud2V1aS1pY29uLXNhZmUtd2FybjpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwNVwiIH0gLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc3VjY2VzczpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwNlwiIH0gLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc3VjY2Vzcy1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDdcIiB9IC8qICfuoIAnICovXG4ud2V1aS1pY29uLXN1Y2Nlc3Mtbm8tY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTA4XCIgfSAvKiAn7qCAJyAqL1xuLndldWktaWNvbi13YWl0aW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTA5XCIgfSAvKiAn7qCAJyAqL1xuLndldWktaWNvbi13YWl0aW5nLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwQVwiIH0gLyogJ+6ggCcgKi9cbi53ZXVpLWljb24td2FybjpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwQlwiIH0gLyogJ+6ggCcgKi9cbi53ZXVpLWljb24taW5mby1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMENcIiB9IC8qICfuoIAnICovXG4ud2V1aS1pY29uLWNhbmNlbDpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwRFwiIH0gLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc2VhcmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTBFXCIgfSAvKiAn7qCAJyAqL1xuLndldWktaWNvbi1jbGVhcjpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwRlwiIH0gLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tYmFjazpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUExMFwiIH0gLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tZGVsZXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTExXCIgfSAvKiAn7qCAJyAqL1xuIiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCJ3ZXVpLWZvbnRcIjtcblxuW2NsYXNzXj1cIndldWktaWNvbl9cIl06YmVmb3JlLCBbY2xhc3MqPVwiIHdldWktaWNvbl9cIl06YmVmb3JlIHtcbiAgICBtYXJnaW46IDA7XG59XG4ud2V1aS1pY29uLXN1Y2Nlc3Mge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogIzA5QkIwNztcbn1cbi53ZXVpLWljb24td2FpdGluZyB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiAjMTBBRUZGO1xufVxuLndldWktaWNvbi13YXJuIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6ICNGNDM1MzA7XG59XG4ud2V1aS1pY29uLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogIzEwQUVGRjtcbn1cblxuLndldWktaWNvbi1zdWNjZXNzLWNpcmNsZSB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktaWNvbi1zdWNjZXNzLW5vLWNpcmNsZSB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktaWNvbi13YWl0aW5nLWNpcmNsZSB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiAjMTBBRUZGO1xufVxuLndldWktaWNvbi1jaXJjbGUge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogI0M5QzlDOTtcbn1cbi53ZXVpLWljb24tZG93bmxvYWQge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogIzA5QkIwNztcbn1cblxuLndldWktaWNvbi1pbmZvLWNpcmNsZSB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiAjMDlCQjA3O1xufVxuXG4ud2V1aS1pY29uLXNhZmUtc3VjY2VzcyB7XG4gICAgY29sb3I6ICMwOUJCMDc7XG59XG4ud2V1aS1pY29uLXNhZmUtd2FybiB7XG4gICAgY29sb3I6ICNGRkJFMDA7XG59XG5cbi53ZXVpLWljb24tY2FuY2VsIHtcbiAgICBjb2xvcjogI0Y0MzUzMDtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbi53ZXVpLWljb24tc2VhcmNoIHtcbiAgICBjb2xvcjogI0IyQjJCMjtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi53ZXVpLWljb24tY2xlYXIge1xuICAgIGNvbG9yOiAjQjJCMkIyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLndldWktaWNvbi1kZWxldGUge1xuICAgICYud2V1aS1pY29uX2dhbGxlcnktZGVsZXRle1xuICAgICAgICBjb2xvcjojRkZGRkZGO1xuICAgICAgICBmb250LXNpemU6MjJweDtcbiAgICB9XG59XG5cbi53ZXVpLWljb25fbXNnIHtcbiAgICBmb250LXNpemU6IDkzcHg7XG4gICAgJi53ZXVpLWljb24td2FybiB7XG4gICAgICAgIGNvbG9yOiAjRjc2MjYwO1xuICAgIH1cbn1cbi53ZXVpLWljb25fbXNnLXByaW1hcnkge1xuICAgIGZvbnQtc2l6ZTogOTNweDtcbiAgICAmLndldWktaWNvbi13YXJuIHtcbiAgICAgICAgY29sb3I6ICNGRkJFMDA7XG4gICAgfVxufVxuIiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogQHdldWlCdG5Gb250U2l6ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBAd2V1aUJ0bkZvbnRDb2xvcjtcbiAgICBsaW5lLWhlaWdodDogdW5pdChAd2V1aUJ0bkhlaWdodC9Ad2V1aUJ0bkZvbnRTaXplKTtcbiAgICBib3JkZXItcmFkaXVzOiBAd2V1aUJ0bkJvcmRlclJhZGl1cztcbiAgICAuc2V0VGFwQ29sb3IoKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgd2lkdGg6IDIwMCU7XG4gICAgICAgIGhlaWdodDogMjAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiBAd2V1aUJ0bkJvcmRlclJhZGl1cyoyO1xuICAgIH1cbn1cbi53ZXVpLWJ0bl9pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcblxuLndldWktYnRuX2RlZmF1bHQge1xuICAgIGNvbG9yOiBAd2V1aUJ0bkRlZmF1bHRGb250Q29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5EZWZhdWx0Qmc7XG4gICAgJjpub3QoLndldWktYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6IEB3ZXVpQnRuRGVmYXVsdEZvbnRDb2xvcjtcbiAgICB9XG4gICAgJjpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xuICAgICAgICBjb2xvcjogQHdldWlCdG5EZWZhdWx0QWN0aXZlRm9udENvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0bkRlZmF1bHRBY3RpdmVCZztcbiAgICB9XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLWJ0bl9wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0blByaW1hcnlCZztcbiAgICAmOm5vdCgud2V1aS1idG5fZGlzYWJsZWQpOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogQHdldWlCdG5Gb250Q29sb3I7XG4gICAgfVxuICAgICY6bm90KC53ZXVpLWJ0bl9kaXNhYmxlZCk6YWN0aXZlIHtcbiAgICAgICAgY29sb3I6IEB3ZXVpQnRuQWN0aXZlRm9udENvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0blByaW1hcnlBY3RpdmVCZztcbiAgICB9XG59XG4iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcblxuLndldWktYnRuX3dhcm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQnRuV2FybkJnO1xuICAgICY6bm90KC53ZXVpLWJ0bl9kaXNhYmxlZCk6dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkZvbnRDb2xvcjtcbiAgICB9XG4gICAgJjpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xuICAgICAgICBjb2xvcjogQHdldWlCdG5BY3RpdmVGb250Q29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQnRuV2FybkFjdGl2ZUJnO1xuICAgIH1cbn1cbiIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xuXG4ud2V1aS1idG5fZGlzYWJsZWQge1xuICAgIGNvbG9yOiBAd2V1aUJ0bkRpc2FibGVkRm9udENvbG9yO1xuICAgICYud2V1aS1idG5fZGVmYXVsdCB7XG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkRlZmF1bHREaXNhYmxlZEZvbnRDb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5EZWZhdWx0RGlzYWJsZWRCZztcbiAgICB9XG4gICAgJi53ZXVpLWJ0bl9wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5QcmltYXJ5RGlzYWJsZWRCZztcbiAgICB9XG4gICAgJi53ZXVpLWJ0bl93YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG53YXJuRGlzYWJsZWRCZztcbiAgICB9XG59XG4iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcblxuLndldWktYnRuX2xvYWRpbmd7XG5cdC53ZXVpLWxvYWRpbmd7XG5cdFx0bWFyZ2luOi0uMmVtIC4zNGVtIDAgMDtcblx0fVxuICAgICYud2V1aS1idG5fcHJpbWFyeSwgJi53ZXVpLWJ0bl93YXJuIHtcbiAgICAgICAgY29sb3I6IEB3ZXVpQnRuQWN0aXZlRm9udENvbG9yO1xuICAgIH1cblx0Ji53ZXVpLWJ0bl9wcmltYXJ5e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0blByaW1hcnlBY3RpdmVCZztcblx0fVxuXHQmLndldWktYnRuX3dhcm57XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQnRuV2FybkFjdGl2ZUJnO1xuXHR9XG59XG4iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcblxuLndldWktYnRuX3BsYWluLXByaW1hcnkge1xuICAgIGNvbG9yOiBAd2V1aUJ0blBsYWluUHJpbWFyeUNvbG9yO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIEB3ZXVpQnRuUGxhaW5QcmltYXJ5Qm9yZGVyQ29sb3I7XG4gICAgJjpub3QoLndldWktYnRuX3BsYWluLWRpc2FibGVkKTphY3RpdmUge1xuICAgICAgICBjb2xvcjpAd2V1aUJ0blBsYWluUHJpbWFyeUFjdGl2ZUNvbG9yO1xuICAgICAgICBib3JkZXItY29sb3I6IEB3ZXVpQnRuUGxhaW5QcmltYXJ5QWN0aXZlQm9yZGVyQ29sb3I7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgfVxufVxuXG4ud2V1aS1idG5fcGxhaW4tZGVmYXVsdCB7XG4gICAgY29sb3I6IEB3ZXVpQnRuUGxhaW5EZWZhdWx0Q29sb3I7XG4gICAgYm9yZGVyOiAxcHggc29saWQgQHdldWlCdG5QbGFpbkRlZmF1bHRCb3JkZXJDb2xvcjtcbiAgICAmOm5vdCgud2V1aS1idG5fcGxhaW4tZGlzYWJsZWQpOmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOkB3ZXVpQnRuUGxhaW5EZWZhdWx0QWN0aXZlQ29sb3I7XG4gICAgICAgIGJvcmRlci1jb2xvcjogQHdldWlCdG5QbGFpbkRlZmF1bHRBY3RpdmVCb3JkZXJDb2xvcjtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMDtcbiAgICB9XG59XG4ud2V1aS1idG5fcGxhaW4tZGlzYWJsZWR7XG4gICAgY29sb3I6cmdiYSgwLDAsMCwuMik7XG4gICAgYm9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjIpO1xufSIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xuQGltcG9ydCBcIndldWktYnRuX2dsb2JhbFwiO1xuQGltcG9ydCBcIndldWktYnRuX2RlZmF1bHRcIjtcbkBpbXBvcnQgXCJ3ZXVpLWJ0bl9wcmltYXJ5XCI7XG5AaW1wb3J0IFwid2V1aS1idG5fd2FyblwiO1xuQGltcG9ydCBcIndldWktYnRuX2Rpc2FibGVkXCI7XG5AaW1wb3J0IFwid2V1aS1idG5fbG9hZGluZ1wiO1xuQGltcG9ydCBcIndldWktYnRuX3BsYWluXCI7XG5cbmJ1dHRvbiwgaW5wdXQge1xuICAgICYud2V1aS1idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLndldWktYnRuX2lubGluZSwmLndldWktYnRuX21pbmkge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gICAgJi53ZXVpLWJ0bl9wbGFpbi1wcmltYXJ5LCYud2V1aS1idG5fcGxhaW4tZGVmYXVsdHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLndldWktYnRuX21pbmkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwIDEuMzJlbTtcbiAgICBsaW5lLWhlaWdodDogQHdldWlCdG5NaW5pSGVpZ2h0O1xuICAgIGZvbnQtc2l6ZTogQHdldWlCdG5NaW5pRm9udFNpemU7XG59XG5cblxuLypnYXAgYmV0d2VlbiBidG4qL1xuLndldWktYnRuICsgLndldWktYnRuIHtcbiAgICBtYXJnaW4tdG9wOiBAd2V1aUJ0bkRlZmF1bHRHYXA7XG59XG5cbi53ZXVpLWJ0bi53ZXVpLWJ0bl9pbmxpbmUgKyAud2V1aS1idG4ud2V1aS1idG5faW5saW5lIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBAd2V1aUJ0bkRlZmF1bHRHYXA7XG59XG5cbi53ZXVpLWJ0bi1hcmVhIHtcbiAgICBtYXJnaW46IEB3ZXVpQ2VsbHNNYXJnaW5Ub3AgQHdldWlCdG5EZWZhdWx0R2FwIC4zZW07IFxufVxuLndldWktYnRuLWFyZWFfaW5saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC53ZXVpLWJ0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHdldWlCdG5EZWZhdWx0R2FwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xuXG4vKlxuei1pbmRleDpcbjA6IC53ZXVpLXN3aXBlZC1idG5cbjE6IC53ZXVpLWNlbGxfc3dpcGVkIC53ZXVpLWNlbGxfX2JkXG4yOiAud2V1aS1jZWxsc+WSjC53ZXVpLWNlbGznmoQxcHjnur9cbiovXG5cbi53ZXVpLWNlbGxzIHtcbiAgICBtYXJnaW4tdG9wOiBAd2V1aUNlbGxzTWFyZ2luVG9wO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQ2VsbEJnO1xuICAgIGxpbmUtaGVpZ2h0OiBAd2V1aUNlbGxMaW5lSGVpZ2h0O1xuICAgIGZvbnQtc2l6ZTogQHdldWlDZWxsRm9udFNpemU7IC8vY2VsbOS4remXtOacieaViOmrmOW6pjIzcHjvvIzot5/lrqLmiLfnq6/pu5jorqTlm77moIflsLrlr7jkuIDoh7RcblxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8v5Zug5Li65q+P5LiqY2VsbOeahGJvcmRlcuS9v+eUqGJlZm9yZeWFg+e0oGxlZnTmkJ7nmoTvvIxpZeS4i+S8quWFg+e0oOeahGNvbnRhaW5pbmcgYmxvY2vkvLDorqHot5/moIflh4bkuI3lkIzvvIzlnKhjZWxs5LiK55Sob2jkuI3nlJ/mlYhcblxuICAgIC8vIG9uZXB4XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgLnNldFRvcExpbmUoQHdldWlDZWxsQm9yZGVyQ29sb3IpO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgLnNldEJvdHRvbUxpbmUoQHdldWlDZWxsQm9yZGVyQ29sb3IpO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbn1cblxuLndldWktY2VsbHNfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAuNzdlbTsgLy8gMTVweCAtIOihjOmrmFxuICAgIG1hcmdpbi1ib3R0b206IC4zZW07IC8vIDhweCAtIOihjOmrmFxuICAgIHBhZGRpbmctbGVmdDogQHdldWlDZWxsR2FwSDtcbiAgICBwYWRkaW5nLXJpZ2h0OiBAd2V1aUNlbGxHYXBIO1xuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XG4gICAgZm9udC1zaXplOiBAd2V1aUNlbGxUaXBzRm9udFNpemU7XG5cbiAgICAmICsgLndldWktY2VsbHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbn1cblxuLndldWktY2VsbHNfX3RpcHMge1xuICAgIG1hcmdpbi10b3A6IC4zZW07IC8vIDhweCAtIOihjOmrmFxuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XG4gICAgcGFkZGluZy1sZWZ0OiBAd2V1aUNlbGxHYXBIO1xuICAgIHBhZGRpbmctcmlnaHQ6IEB3ZXVpQ2VsbEdhcEg7XG4gICAgZm9udC1zaXplOiBAd2V1aUNlbGxUaXBzRm9udFNpemU7XG59XG5cbi53ZXVpLWNlbGwge1xuICAgIHBhZGRpbmc6IEB3ZXVpQ2VsbEdhcFYgQHdldWlDZWxsR2FwSDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8v6L+Z5Liq5piv5Li65LqG5YW85a65Y2VsbHPlrrnlmahvbmVweOaWueahiOiiq2JlZm9yZeaMoeS9j+iAjOWBmueahFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcbiAgICAgICAgbGVmdDogQHdldWlDZWxsR2FwSDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG4ud2V1aS1jZWxsX3ByaW1hcnl7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ud2V1aS1jZWxsX19iZHtcbiAgICBmbGV4OiAxO1xufVxuLndldWktY2VsbF9fZnQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbi5zZXRUb3BMaW5lKEBjOiAjQzdDN0M3KSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBAYztcbiAgICBjb2xvcjogQGM7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG5cbi5zZXRCb3R0b21MaW5lKEBjOiAjQzdDN0M3KSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAYztcbiAgICBjb2xvcjogQGM7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG5cbi5zZXRMZWZ0TGluZShAYzogI0M3QzdDNykge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIEBjO1xuICAgIGNvbG9yOiBAYztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbn1cblxuLnNldFJpZ2h0TGluZShAYzogI0M3QzdDNykge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDFweDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgQGM7XG4gICAgY29sb3I6IEBjO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xufSIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xuXG4ud2V1aS1jZWxsX3N3aXBlZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgICA+IC53ZXVpLWNlbGxfX2JkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIH1cbiAgICA+IC53ZXVpLWNlbGxfX2Z0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIH1cbn1cbi53ZXVpLXN3aXBlZC1idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IEB3ZXVpQ2VsbEdhcFYgMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiBAd2V1aUNlbGxMaW5lSGVpZ2h0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuLndldWktc3dpcGVkLWJ0bl9kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzdDN0NDO1xufVxuLndldWktc3dpcGVkLWJ0bl93YXJuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzQjMwO1xufSIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xuXG4ud2V1aS1jZWxsX2FjY2VzcyB7XG4gICAgLnNldFRhcENvbG9yKCk7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xuICAgIH1cbiAgICAud2V1aS1jZWxsX19mdCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgIC5zZXRBcnJvdyhyaWdodCwgNnB4LCAjQzhDOENELCAycHgpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi53ZXVpLWNlbGxfbGlua3tcbiAgICBjb2xvcjogQHdldWlMaW5rQ29sb3JEZWZhdWx0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIC8vIOeUseS6jndldWktY2VsbDpmaXJzdC1jaGlsZOeahDpiZWZvcmXkuLrpmpDol4/vvIzmiYDku6Xov5nph4zopoHph43mlrDmmL7npLrlh7rmnaVcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAmOmJlZm9yZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbi5fc2V0QXJyb3coQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLCBAYm9yZGVyV2lkdGgpe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IEBhcnJvd3NpemU7XG4gICAgd2lkdGg6IEBhcnJvd3NpemU7XG4gICAgYm9yZGVyLXdpZHRoOiBAYm9yZGVyV2lkdGggQGJvcmRlcldpZHRoIDAgMDtcbiAgICBib3JkZXItY29sb3I6IEBib3JkZXJDb2xvcjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uc2V0QXJyb3coQGRpcmVjdGlvbiwgQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLCBAYm9yZGVyV2lkdGgpIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAuX3NldEFycm93KEBhcnJvd3NpemUsIEBib3JkZXJDb2xvciwgQGJvcmRlcldpZHRoKTtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgwLjcxLC0wLjcxLDAuNzEsMC43MSwwLDApOyAvLyByb3RhdGUoLTQ1ZGVnKVxufVxuXG4uc2V0QXJyb3coQGRpcmVjdGlvbiwgQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLEBib3JkZXJXaWR0aCkgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgLl9zZXRBcnJvdyhAYXJyb3dzaXplLCBAYm9yZGVyQ29sb3IsIEBib3JkZXJXaWR0aCk7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMC43MSwwLjcxLC0wLjcxLDAuNzEsMCwwKTsgLy8gcm90YXRlKDQ1ZGVnKTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG59XG5cbi5zZXRBcnJvdyhAZGlyZWN0aW9uLCBAYXJyb3dzaXplLCBAYm9yZGVyQ29sb3IsQGJvcmRlcldpZHRoKSB3aGVuIChAZGlyZWN0aW9uID0gZG93bikge1xuICAgIC5fc2V0QXJyb3coQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLCBAYm9yZGVyV2lkdGgpO1xuICAgIHRyYW5zZm9ybTogbWF0cml4KC0wLjcxLDAuNzEsLTAuNzEsLTAuNzEsMCwwKTsgLy8gcm90YXRlKDEzNWRlZyk7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtM3B4O1xufVxuXG4uc2V0QXJyb3coQGRpcmVjdGlvbiwgQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLEBib3JkZXJXaWR0aCkgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAuX3NldEFycm93KEBhcnJvd3NpemUsIEBib3JkZXJDb2xvciwgQGJvcmRlcldpZHRoKTtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgtMC43MSwtMC43MSwwLjcxLC0wLjcxLDAsMCk7IC8vIHJvdGF0ZSgtMTM1ZGVnKTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLWNoZWNrX19sYWJlbCB7XG4gICAgLnNldFRhcENvbG9yKCk7XG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xuICAgIH1cbn1cblxuLndldWktY2hlY2t7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC05OTk5ZW07XG59XG4iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uLy4uL2Jhc2UvZm5cIjtcblxuLy8gbWV0aG9kMiBhY2Nlc3NiaWxpdHlcbi53ZXVpLWNlbGxzX3JhZGlve1xuICAgIC53ZXVpLWNlbGxfX2Z0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBAd2V1aUNlbGxJbm5lckdhcEg7XG4gICAgfVxufVxuLndldWktY2hlY2sge1xuICAgIC8vIHJhZGlvXG4gICAgLndldWktY2VsbHNfcmFkaW8gJiB7XG4gICAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgICAgICAmICsgLndldWktaWNvbi1jaGVja2VkIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxFQTA4JztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwOUJCMDc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLWNlbGxzX2NoZWNrYm94IHtcbiAgICAud2V1aS1jZWxsX19oZCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IEB3ZXVpQ2VsbElubmVyR2FwSDtcbiAgICB9XG4gICAgLndldWktaWNvbi1jaGVja2VkIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ1xcRUEwMSc7XG4gICAgICAgICAgICBjb2xvcjogI0M5QzlDOTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBtZXRob2QyIGFjY2Vzc2JpbGl0eVxuLndldWktY2hlY2sge1xuICAgIC8vIGNoZWNrYm94XG4gICAgLndldWktY2VsbHNfY2hlY2tib3ggJiB7XG4gICAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgICAgICAmICsgLndldWktaWNvbi1jaGVja2VkIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXEVBMDYnO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA5QkIwNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLWxhYmVse1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDpAd2V1aUNlbGxMYWJlbFdpZHRoO1xuICAudGV4dF93cmFwKCk7XG59XG4ud2V1aS1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IHVuaXQoQHdldWlDZWxsTGluZUhlaWdodCwgZW0pO1xuICAgIGxpbmUtaGVpZ2h0OiBAd2V1aUNlbGxMaW5lSGVpZ2h0O1xuXG4gICAgLy8gaGlkZXMgdGhlIHNwaW4tYnV0dG9uXG4gICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbntcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuLndldWktdGV4dGFyZWEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLndldWktdGV4dGFyZWEtY291bnRlcntcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JUaXBzO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIC53ZXVpLWNlbGxfd2FybiAme1xuICAgICAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JXYXJuO1xuICAgIH1cbn1cblxuLndldWktdG9wdGlwcyB7XG4gICAgZGlzcGxheTpub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIHotaW5kZXg6IDUwMDA7XG4gICAgLnRleHRfd3JhcCgpO1xufVxuLndldWktdG9wdGlwc193YXJuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUNvbG9yV2Fybjtcbn1cbi53ZXVpLWNlbGxzX2Zvcm0ge1xuICAgIC53ZXVpLWNlbGxfX2Z0e1xuICAgICAgICBmb250LXNpemU6MDtcbiAgICB9XG4gICAgLndldWktaWNvbi13YXJue1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIGlucHV0LCB0ZXh0YXJlYSwgbGFiZWxbZm9yXXtcbiAgICAgICAgLnNldFRhcENvbG9yKCk7XG4gICAgfVxufVxuLndldWktY2VsbF93YXJue1xuICAgIGNvbG9yOkB3ZXVpVGV4dENvbG9yV2FybjtcbiAgICAud2V1aS1pY29uLXdhcm57ZGlzcGxheTppbmxpbmUtYmxvY2s7fVxufVxuIiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbi5lbGxpcHNpcyhAdzphdXRvKSB7XG4gICAgd2lkdGg6IEB3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuLmVsbGlwc2lzTG4oQGxpbmUpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiBAbGluZTtcbn1cbi50ZXh0X3dyYXAoKSB7XG4gICAgd29yZC13cmFwOmJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazpicmVhay1hbGw7XG59XG4uaHlwaGVucygpIHtcbiAgICB3b3JkLXdyYXA6YnJlYWstd29yZDtcbiAgICAtd2Via2l0LWh5cGhlbnM6YXV0bztcbiAgICBoeXBoZW5zOmF1dG87XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLWZvcm0tcHJldmlld3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICAmOmJlZm9yZXtcbiAgICAgICAgLnNldFRvcExpbmUoQHdldWlDZWxsQm9yZGVyQ29sb3IpO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgICAuc2V0Qm90dG9tTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XG4gICAgfVxufVxuLndldWktZm9ybS1wcmV2aWV3X19oZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogQHdldWlDZWxsR2FwViBAd2V1aUNlbGxHYXBIO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgICAmOmFmdGVye1xuICAgICAgICAuc2V0Qm90dG9tTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XG4gICAgICAgIGxlZnQ6IEB3ZXVpQ2VsbEdhcEg7XG4gICAgfVxuICAgIC53ZXVpLWZvcm0tcHJldmlld19fdmFsdWV7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICB9XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2Jke1xuICAgIHBhZGRpbmc6IEB3ZXVpQ2VsbEdhcFYgQHdldWlDZWxsR2FwSDtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcbiAgICBsaW5lLWhlaWdodDogMjtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fZnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICAuc2V0VG9wTGluZShAd2V1aURpYWxvZ0xpbmVDb2xvcik7XG4gICAgfVxufVxuLndldWktZm9ybS1wcmV2aWV3X19pdGVte1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2xhYmVse1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIG1pbi13aWR0aDogNGVtO1xuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGp1c3RpZnk7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX3ZhbHVle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd29yZC1icmVhazpub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLndldWktZm9ybS1wcmV2aWV3X19idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbGV4OiAxO1xuICAgIGNvbG9yOiBAd2V1aURpYWxvZ0xpbmtDb2xvcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLnNldFRhcENvbG9yKCk7XG4gICAgYnV0dG9uJntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aURpYWxvZ0xpbmtBY3RpdmVCYztcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICAgIC5zZXRMZWZ0TGluZShAd2V1aURpYWxvZ0xpbmVDb2xvcik7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2J0bl9kZWZhdWx0IHtcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xufVxuLndldWktZm9ybS1wcmV2aWV3X19idG5fcHJpbWFyeSB7XG4gICAgY29sb3I6ICMwQkIyMEM7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLWNlbGxfc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC53ZXVpLXNlbGVjdCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIC53ZXVpLWNlbGxfX2Jke1xuICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICAuc2V0QXJyb3cocmlnaHQsIDZweCwgI0M4QzhDRCwgMnB4KTtcblxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICByaWdodDogQHdldWlDZWxsR2FwSDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi53ZXVpLXNlbGVjdCB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IEB3ZXVpQ2VsbEhlaWdodDtcbiAgICBsaW5lLWhlaWdodDogQHdldWlDZWxsSGVpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmctbGVmdDogQHdldWlDZWxsR2FwSDtcbn1cblxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OkB3ZXVpQ2VsbEdhcEg7XG4gICAgLndldWktc2VsZWN0e1xuICAgICAgICB3aWR0aDpAd2V1aUNlbGxMYWJlbFdpZHRoO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICAud2V1aS1jZWxsX19oZCB7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIC5zZXRSaWdodExpbmUoQHdldWlDZWxsQm9yZGVyQ29sb3IpO1xuICAgICAgICB9XG4gICAgICAgICY6YmVmb3Jle1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICAuc2V0QXJyb3cocmlnaHQsIDZweCwgI0M4QzhDRCwgMnB4KTtcblxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICByaWdodDogQHdldWlDZWxsR2FwSDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLndldWktY2VsbF9fYmQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6QHdldWlDZWxsR2FwSDtcbiAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLndldWktY2VsbF9zZWxlY3QtYWZ0ZXIge1xuICAgIHBhZGRpbmctbGVmdDpAd2V1aUNlbGxHYXBIO1xuICAgIC53ZXVpLXNlbGVjdCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgIH1cbn0iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uLy4uL2Jhc2UvZm5cIjtcblxuLndldWktY2VsbF92Y29kZSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi53ZXVpLXZjb2RlLWltZ3tcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGhlaWdodDogQHdldWlDZWxsSGVpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi53ZXVpLXZjb2RlLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogQHdldWlDZWxsSGVpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZzogMCAwLjZlbSAwIDAuN2VtO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQHdldWlMaW5lQ29sb3JMaWdodDtcbiAgICBsaW5lLWhlaWdodDogQHdldWlDZWxsSGVpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiBAd2V1aUNlbGxGb250U2l6ZTtcbiAgICBjb2xvcjogQHdldWlEaWFsb2dMaW5rQ29sb3I7XG4gICAgYnV0dG9uJntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgICBjb2xvcjogZGVzYXR1cmF0ZShAd2V1aURpYWxvZ0xpbmtDb2xvciwgMzAlKTtcbiAgICB9XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbkB3ZXVpR2FsbGVyeU9wckhlaWdodDogNjBweDtcbi53ZXVpLWdhbGxlcnkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG4ud2V1aS1nYWxsZXJ5X19pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiBAd2V1aUdhbGxlcnlPcHJIZWlnaHQ7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4ud2V1aS1nYWxsZXJ5X19vcHIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQwRDBEO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGxpbmUtaGVpZ2h0OiBAd2V1aUdhbGxlcnlPcHJIZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndldWktZ2FsbGVyeV9fZGVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcblxuLndldWktY2VsbF9zd2l0Y2h7XG4gICAgcGFkZGluZy10b3A6IChAd2V1aUNlbGxIZWlnaHQgLSBAd2V1aVN3aXRjaEhlaWdodCkgLyAyO1xuICAgIHBhZGRpbmctYm90dG9tOiAoQHdldWlDZWxsSGVpZ2h0IC0gQHdldWlTd2l0Y2hIZWlnaHQpIC8gMjtcbn1cbi53ZXVpLXN3aXRjaHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xufVxuLndldWktc3dpdGNoLFxuLndldWktc3dpdGNoLWNwX19ib3h7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIGhlaWdodDogQHdldWlTd2l0Y2hIZWlnaHQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZERkRGO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjFzLCBib3JkZXIgLjFzO1xuXG4gICAgJjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogQHdldWlTd2l0Y2hIZWlnaHQgLSAyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGREZEO1xuICAgICAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMzVzIGN1YmljLWJlemllcigwLjQ1LCAxLCAwLjQsIDEpO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2V1aVN3aXRjaEhlaWdodCAtIDI7XG4gICAgICAgIGhlaWdodDogQHdldWlTd2l0Y2hIZWlnaHQgLSAyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMzVzIGN1YmljLWJlemllcigwLjQsIDAuNCwgMC4yNSwgMS4zNSk7XG4gICAgfVxufVxuLndldWktc3dpdGNoOmNoZWNrZWQsXG4ud2V1aS1zd2l0Y2gtY3BfX2lucHV0OmNoZWNrZWQgfiAud2V1aS1zd2l0Y2gtY3BfX2JveHtcbiAgICBib3JkZXItY29sb3I6ICMwNEJFMDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QkUwMjtcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgfVxufVxuXG4vLyDlhbzlrrlJRSBFZGdl55qE54mI5pysXG4ud2V1aS1zd2l0Y2gtY3BfX2lucHV0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtOTk5OXB4O1xufVxuLndldWktc3dpdGNoLWNwX19ib3h7XG4gICAgZGlzcGxheTogYmxvY2s7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLXVwbG9hZGVye31cbi53ZXVpLXVwbG9hZGVyX19oZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctYm90dG9tOiBAd2V1aUNlbGxHYXBWO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2V1aS11cGxvYWRlcl9fdGl0bGV7XG4gICAgZmxleDogMTtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbmZve1xuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvclRpcHM7XG59XG5cbi53ZXVpLXVwbG9hZGVyX19iZHtcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aUNlbGxHYXBIIC0gKEB3ZXVpQ2VsbEdhcFYgKyBAd2V1aVVwbG9hZGVyRmlsZVNwYWNpbmcpO1xuICAgIG1hcmdpbi1yaWdodDogLUB3ZXVpVXBsb2FkZXJGaWxlU3BhY2luZztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGVze1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ud2V1aS11cGxvYWRlcl9fZmlsZXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IEB3ZXVpVXBsb2FkZXJGaWxlU3BhY2luZztcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aVVwbG9hZGVyRmlsZVNwYWNpbmc7XG4gICAgd2lkdGg6IEB3ZXVpVXBsb2FkZXJTaXplO1xuICAgIGhlaWdodDogQHdldWlVcGxvYWRlclNpemU7XG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi53ZXVpLXVwbG9hZGVyX19maWxlX3N0YXR1c3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgfVxuICAgIC53ZXVpLXVwbG9hZGVyX19maWxlLWNvbnRlbnR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbi53ZXVpLXVwbG9hZGVyX19maWxlLWNvbnRlbnR7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIC53ZXVpLWljb24td2FybntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbn1cbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3h7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiBAd2V1aVVwbG9hZGVyRmlsZVNwYWNpbmc7XG4gICAgbWFyZ2luLWJvdHRvbTogQHdldWlVcGxvYWRlckZpbGVTcGFjaW5nO1xuICAgIHdpZHRoOiBAd2V1aVVwbG9hZGVyU2l6ZSAtIEB3ZXVpVXBsb2FkZXJCb3JkZXJXaWR0aCAqIDI7XG4gICAgaGVpZ2h0OiBAd2V1aVVwbG9hZGVyU2l6ZSAtIEB3ZXVpVXBsb2FkZXJCb3JkZXJXaWR0aCAqIDI7XG4gICAgYm9yZGVyOiBAd2V1aVVwbG9hZGVyQm9yZGVyV2lkdGggc29saWQgQHdldWlVcGxvYWRlckJvcmRlckNvbG9yO1xuICAgICY6YmVmb3JlLCAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlVcGxvYWRlckJvcmRlckNvbG9yO1xuICAgIH1cbiAgICAmOmJlZm9yZXtcbiAgICAgICAgd2lkdGg6IEB3ZXVpVXBsb2FkZXJCb3JkZXJXaWR0aCArIDE7XG4gICAgICAgIGhlaWdodDogQHdldWlVcGxvYWRlclNpemUgLyAyO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgICB3aWR0aDogQHdldWlVcGxvYWRlclNpemUgLyAyO1xuICAgICAgICBoZWlnaHQ6IEB3ZXVpVXBsb2FkZXJCb3JkZXJXaWR0aCArIDE7XG4gICAgfVxuICAgICY6YWN0aXZle1xuICAgICAgICBib3JkZXItY29sb3I6IEB3ZXVpVXBsb2FkZXJBY3RpdmVCb3JkZXJDb2xvcjtcbiAgICAgICAgJjpiZWZvcmUsICY6YWZ0ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aVVwbG9hZGVyQWN0aXZlQm9yZGVyQ29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4ud2V1aS11cGxvYWRlcl9faW5wdXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLnNldFRhcENvbG9yKCk7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5AaW1wb3J0IFwiLi4vd2V1aS1idXR0b24vd2V1aS1idXR0b25cIjtcblxuLndldWktbXNnIHtcbiAgICBwYWRkaW5nLXRvcDogQHdldWlNc2dQYWRkaW5nVG9wO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53ZXVpLW1zZ19faWNvbi1hcmVhIHtcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aU1zZ0ljb25HYXA7XG59XG4ud2V1aS1tc2dfX3RleHQtYXJlYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogQHdldWlNc2dUZXh0R2FwO1xuICAgIHBhZGRpbmc6MCAyMHB4O1xufVxuLndldWktbXNnX190ZXh0LWFyZWEgYXtcbiAgICBjb2xvcjpAd2V1aUxpbmtDb2xvckRlZmF1bHQ7XG59XG4ud2V1aS1tc2dfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aU1zZ1RpdGxlR2FwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLndldWktbXNnX19kZXNjIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcbn1cbi53ZXVpLW1zZ19fb3ByLWFyZWEge1xuICAgIG1hcmdpbi1ib3R0b206IEB3ZXVpTXNnT3ByR2FwO1xufVxuLndldWktbXNnX19leHRyYS1hcmVhIHtcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aU1zZ0V4dHJhQXJlYUdhcDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcbiAgICBhe2NvbG9yOiBAd2V1aUxpbmtDb2xvckRlZmF1bHQ7fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogQHdldWlNc2dFeHRyYUFyZWFPZk1pbkhlaWdodCkge1xuICAgIC53ZXVpLW1zZ19fZXh0cmEtYXJlYSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn0iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcblxuLndldWktYXJ0aWNsZSB7XG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC45ZW07XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC4zNGVtO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuMzRlbTtcbiAgICB9XG4gICAgKiB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgLjhlbTtcbiAgICB9XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLXRhYmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNTAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZBO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICAuc2V0VG9wTGluZSgjQzBCRkM0KTtcbiAgICB9XG59XG5cbi53ZXVpLXRhYmJhcl9faXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiA1cHggMCAwO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuc2V0VGFwQ29sb3IoKTtcblxuICAgICYud2V1aS1iYXJfX2l0ZW1fb24ge1xuICAgICAgICAud2V1aS10YWJiYXJfX2ljb24sXG4gICAgICAgIC53ZXVpLXRhYmJhcl9faWNvbiA+IGksXG4gICAgICAgIC53ZXVpLXRhYmJhcl9fbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICMwOUJCMDc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi53ZXVpLXRhYmJhcl9faWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyN3B4O1xuICAgIGhlaWdodDogMjdweDtcblxuICAgIGkmLFxuICAgID4gaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cblxuLndldWktdGFiYmFyX19sYWJlbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLW5hdmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNTAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIC5zZXRCb3R0b21MaW5lKCNDQ0NDQ0MpO1xuICAgIH1cblxuICAgICYgKyAud2V1aS10YWJfX3BhbmVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbn1cblxuLndldWktbmF2YmFyX19pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxM3B4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAuc2V0VGFwQ29sb3IoKTtcblxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgICB9XG5cbiAgICAmLndldWktYmFyX19pdGVtX29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgLnNldFJpZ2h0TGluZSgjQ0NDQ0NDKTtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5AaW1wb3J0IFwid2V1aS10YWJiYXJcIjtcbkBpbXBvcnQgXCJ3ZXVpLW5hdmJhclwiO1xuXG4ud2V1aS10YWIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi53ZXVpLXRhYl9fcGFuZWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cbi53ZXVpLXRhYl9fY29udGVudHtcbiAgICBkaXNwbGF5OiBub25lO1xufSIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xuXG4ud2V1aS1wcm9ncmVzcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2V1aS1wcm9ncmVzc19fYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aVByb2dyZXNzQmc7XG4gICAgaGVpZ2h0OiBAd2V1aVByb2dyZXNzSGVpZ2h0O1xuICAgIGZsZXg6IDE7XG59XG5cbi53ZXVpLXByb2dyZXNzX19pbm5lci1iYXIge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aVByb2dyZXNzQ29sb3I7XG59XG5cbi53ZXVpLXByb2dyZXNzX19vcHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMDtcbn0iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcblxuXG4ud2V1aS1wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgLnNldFRvcExpbmUoQHdldWlMaW5lQ29sb3JMaWdodCk7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgICAuc2V0Qm90dG9tTGluZShAd2V1aUxpbmVDb2xvckxpZ2h0KTtcbiAgICB9XG59XG5cbi53ZXVpLXBhbmVsX19oZCB7XG4gICAgcGFkZGluZzogMTRweCAxNXB4IDEwcHg7XG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6YWZ0ZXIge1xuICAgICAgICAuc2V0Qm90dG9tTGluZShAd2V1aUxpbmVDb2xvckxpZ2h0KTtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICB9XG59XG5cblxuXG5cbiIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xuXG4ud2V1aS1tZWRpYS1ib3gge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgLnNldFRvcExpbmUoQHdldWlMaW5lQ29sb3JMaWdodCk7XG4gICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhJntcbiAgICAgICAgY29sb3I6IzAwMDAwMDtcbiAgICAgICAgLnNldFRhcENvbG9yKCk7XG4gICAgICAgICY6YWN0aXZle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRUNFQ0VDO1xuICAgICAgICB9XG4gICAgfVxufVxuLndldWktbWVkaWEtYm94X190aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgLmVsbGlwc2lzKCk7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi53ZXVpLW1lZGlhLWJveF9fZGVzYyB7XG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAuZWxsaXBzaXNMbigyKTtcbn1cbi53ZXVpLW1lZGlhLWJveF9faW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogI0NFQ0VDRTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLW1lZGlhLWJveF9faW5mb19fbWV0YSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xufVxuLndldWktbWVkaWEtYm94X19pbmZvX19tZXRhX2V4dHJhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNDRUNFQ0U7XG59XG4ud2V1aS1tZWRpYS1ib3hfdGV4dCB7XG4gICAgLndldWktbWVkaWEtYm94X190aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG59XG4ud2V1aS1tZWRpYS1ib3hfYXBwbXNnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLndldWktbWVkaWEtYm94X19oZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLndldWktbWVkaWEtYm94X190aHVtYiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIH1cbiAgICAud2V1aS1tZWRpYS1ib3hfX2JkIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgIH1cbn1cbi53ZXVpLW1lZGlhLWJveF9zbWFsbC1hcHBtc2cge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLndldWktY2VsbHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xuXG4ud2V1aS1ncmlkcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpR3JpZEJvcmRlckNvbG9yKTtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICAgIC5zZXRMZWZ0TGluZShAd2V1aUdyaWRCb3JkZXJDb2xvcik7XG4gICAgfVxufVxuXG4ud2V1aS1ncmlkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlIC8gQHdldWlHcmlkQ29sdW1uQ291bnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgLnNldFJpZ2h0TGluZShAd2V1aUdyaWRCb3JkZXJDb2xvcik7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgICAuc2V0Qm90dG9tTGluZShAd2V1aUdyaWRCb3JkZXJDb2xvcik7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJnQ29sb3JBY3RpdmU7XG4gICAgfVxufVxuXG4ud2V1aS1ncmlkX19pY29uIHtcbiAgICB3aWR0aDogQHdldWlHcmlkSWNvblNpemU7XG4gICAgaGVpZ2h0OiBAd2V1aUdyaWRJY29uU2l6ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgKyAud2V1aS1ncmlkX19sYWJlbHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbn1cblxuLndldWktZ3JpZF9fbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JUaXRsZTtcbiAgICBmb250LXNpemU6IEB3ZXVpR3JpZEZvbnRTaXplO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xuXG4ud2V1aS1mb290ZXIge1xuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhe1xuICAgICAgICBjb2xvcjogQHdldWlMaW5rQ29sb3JEZWZhdWx0O1xuICAgIH1cbn1cbi53ZXVpLWZvb3Rlcl9maXhlZC1ib3R0b217XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLjUyZW07XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cbi53ZXVpLWZvb3Rlcl9fbGlua3N7XG4gICAgZm9udC1zaXplOiAwO1xufVxuLndldWktZm9vdGVyX19saW5re1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbjogMCAuNjJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgICY6YmVmb3Jle1xuICAgICAgICAuc2V0TGVmdExpbmUoKTtcbiAgICAgICAgbGVmdDogLS42NWVtO1xuICAgICAgICB0b3A6IC4zNmVtO1xuICAgICAgICBib3R0b206IC4zNmVtO1xuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAmOmJlZm9yZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG4ud2V1aS1mb290ZXJfX3RleHR7XG4gICAgcGFkZGluZzogMCAuMzRlbTtcbiAgICBmb250LXNpemU6IDEycHg7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ud2V1aS1mbGV4X19pdGVte1xuICAgIGZsZXg6IDE7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLWRpYWxvZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDUwMDA7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpRGlhbG9nQmFja2dyb3VuZENvbG9yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLWRpYWxvZ19faGQge1xuICAgIHBhZGRpbmc6IDEuM2VtIEB3ZXVpRGlhbG9nR2FwV2lkdGggLjVlbTtcbn1cbi53ZXVpLWRpYWxvZ19fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLndldWktZGlhbG9nX19iZCB7XG4gICAgcGFkZGluZzogMCBAd2V1aURpYWxvZ0dhcFdpZHRoIC44ZW07XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgcGFkZGluZzoyLjdlbSAyMHB4IDEuN2VtO1xuICAgICAgICBjb2xvcjojMzUzNTM1O1xuICAgIH1cbn1cbi53ZXVpLWRpYWxvZ19fZnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpRGlhbG9nTGluZUNvbG9yKTtcbiAgICB9XG59XG4ud2V1aS1kaWFsb2dfX2J0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleDogMTtcbiAgICBjb2xvcjogQHdldWlEaWFsb2dMaW5rQ29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC5zZXRUYXBDb2xvcigpO1xuICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlEaWFsb2dMaW5rQWN0aXZlQmM7XG4gICAgfVxuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgLnNldExlZnRMaW5lKEB3ZXVpRGlhbG9nTGluZUNvbG9yKTtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi53ZXVpLWRpYWxvZ19fYnRuX2RlZmF1bHQge1xuICAgIGNvbG9yOiAjMzUzNTM1O1xufVxuLndldWktZGlhbG9nX19idG5fcHJpbWFyeSB7XG4gICAgY29sb3I6ICMwQkIyMEM7XG59XG5cbi53ZXVpLXNraW5fYW5kcm9pZHtcbiAgICAud2V1aS1kaWFsb2cge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgfVxuICAgIC53ZXVpLWRpYWxvZ19fdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICB9XG4gICAgLndldWktZGlhbG9nX19oZHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLndldWktZGlhbG9nX19iZHtcbiAgICAgICAgY29sb3I6QHdldWlUZXh0Q29sb3JHcmF5O1xuICAgICAgICBwYWRkaW5nOi4yNWVtIEB3ZXVpRGlhbG9nR2FwV2lkdGggMmVtO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICBwYWRkaW5nOjEuNmVtIEB3ZXVpRGlhbG9nR2FwV2lkdGggMmVtO1xuICAgICAgICAgICAgY29sb3I6IzM1MzUzNTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAud2V1aS1kaWFsb2dfX2Z0e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6MCBAd2V1aURpYWxvZ0dhcFdpZHRoIC43ZW07XG4gICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC53ZXVpLWRpYWxvZ19fYnRue1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHBhZGRpbmc6MCAuOGVtO1xuICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDYpO1xuICAgICAgICB9XG4gICAgICAgICY6dmlzaXRlZHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA2KTtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0uOGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC53ZXVpLWRpYWxvZ19fYnRuX2RlZmF1bHQge1xuICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC53ZXVpLWRpYWxvZyB7XG4gICAgICAgIHdpZHRoOiAzNSU7XG4gICAgfVxufVxuIiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLXRvYXN0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNTAwMDtcbiAgICB3aWR0aDogNy42ZW07XG4gICAgbWluLWhlaWdodDogNy42ZW07XG4gICAgdG9wOiAxODBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0zLjhlbTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3LDE3LDE3LDAuNyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi53ZXVpLWljb25fdG9hc3Qge1xuICAgIG1hcmdpbjogMjJweCAwIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgJi53ZXVpLWljb24tc3VjY2Vzcy1uby1jaXJjbGV7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmLndldWktbG9hZGluZ3tcbiAgICAgIG1hcmdpbjozMHB4IDAgMDtcbiAgICAgIHdpZHRoOjM4cHg7XG4gICAgICBoZWlnaHQ6MzhweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICB9XG59XG5cbi53ZXVpLXRvYXN0X19jb250ZW50IHtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xufVxuIiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLW1hc2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC42KTtcbn1cblxuLndldWktbWFza190cmFuc3BhcmVudHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5Ad2V1aUFjdGlvblNoZWV0QW5kcm9pZEJvcmRlclJhZGl1czogMnB4O1xuXG4ud2V1aS1hY3Rpb25zaGVldCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB6LWluZGV4OiA1MDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQmdDb2xvckRlZmF1bHQ7XG4gICAgLy9zbGlkZSB1cCBhbmltYXRpb25cbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xufVxuLndldWktYWN0aW9uc2hlZXRfX3RpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGJhY2tncm91bmQ6ICNGQ0ZDRkQ7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICAuc2V0Qm90dG9tTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XG4gICAgfVxuICAgIC53ZXVpLWFjdGlvbnNoZWV0X190aXRsZS10ZXh0IHtcbiAgICAgICAgLmVsbGlwc2lzTG4oMik7XG4gICAgfVxufVxuLndldWktYWN0aW9uc2hlZXRfX21lbnV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGRDtcbn1cbi53ZXVpLWFjdGlvbnNoZWV0X19hY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZEOztcbn1cbi53ZXVpLWFjdGlvbnNoZWV0X19jZWxsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XG4gICAgfVxuICAgICY6YWN0aXZle1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJnQ29sb3JBY3RpdmU7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICY6YmVmb3Jle1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vL2FuZHJvaWQgYWN0aW9uU2hlZXRcbi53ZXVpLXNraW5fYW5kcm9pZHtcbiAgICAud2V1aS1hY3Rpb25zaGVldCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLy9wYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgIHdpZHRoOiAyNzRweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLy9zbGlkZSB1cCBhbmltYXRpb25cbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcbiAgICB9XG4gICAgLndldWktYWN0aW9uc2hlZXRfX2FjdGlvbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLndldWktYWN0aW9uc2hlZXRfX21lbnUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiBAd2V1aUFjdGlvblNoZWV0QW5kcm9pZEJvcmRlclJhZGl1cztcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMzBweCAwIHJnYmEoMCwwLDAsLjEpO1xuICAgIH1cbiAgICAud2V1aS1hY3Rpb25zaGVldF9fY2VsbCB7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMjRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IEB3ZXVpQWN0aW9uU2hlZXRBbmRyb2lkQm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEB3ZXVpQWN0aW9uU2hlZXRBbmRyb2lkQm9yZGVyUmFkaXVzO1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBAd2V1aUFjdGlvblNoZWV0QW5kcm9pZEJvcmRlclJhZGl1cztcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBAd2V1aUFjdGlvblNoZWV0QW5kcm9pZEJvcmRlclJhZGl1cztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy9hY3Rpb25TaGVldCBhbmlhbXRpb25cbi53ZXVpLWFjdGlvbnNoZWV0X3RvZ2dsZXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbn0iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcblxuLndldWktbG9hZG1vcmV7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46MS41ZW0gYXV0bztcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndldWktbG9hZG1vcmVfX3RpcHN7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi53ZXVpLWxvYWRtb3JlX2xpbmV7XG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgQHdldWlMaW5lQ29sb3JMaWdodDtcbiAgICBtYXJnaW4tdG9wOjIuNGVtO1xuICAgIC53ZXVpLWxvYWRtb3JlX190aXBze1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDotLjllbTtcbiAgICAgICAgcGFkZGluZzowIC41NWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBjb2xvcjpAd2V1aVRleHRDb2xvckdyYXk7XG4gICAgfVxufVxuLndldWktbG9hZG1vcmVfZG90e1xuICAgIC53ZXVpLWxvYWRtb3JlX190aXBze1xuICAgICAgICBwYWRkaW5nOjAgLjE2ZW07XG4gICAgICAgICY6YmVmb3Jle1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICB3aWR0aDo0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6NHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUxpbmVDb2xvckxpZ2h0O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IDA7XG4gICAgICAgICAgICB0b3A6LS4xNmVtO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8qXG4qIFRlbmNlbnQgaXMgcGxlYXNlZCB0byBzdXBwb3J0IHRoZSBvcGVuIHNvdXJjZSBjb21tdW5pdHkgYnkgbWFraW5nIFdlVUkgYXZhaWxhYmxlLlxuKiBcbiogQ29weXJpZ2h0IChDKSAyMDE3IFRITCBBMjkgTGltaXRlZCwgYSBUZW5jZW50IGNvbXBhbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFxuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qIFxuKiAgICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4qIFxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzXG4qIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4qIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5AaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xuXG4ud2V1aS1iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IC4xNWVtIC40ZW07XG4gICAgbWluLXdpZHRoOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQzNTMwO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndldWktYmFkZ2VfZG90IHtcbiAgICBwYWRkaW5nOiAuNGVtO1xuICAgIG1pbi13aWR0aDogMDtcbn0iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcbi53ZXVpLXNlYXJjaC1iYXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZGNDtcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIC5zZXRUb3BMaW5lKCNEN0Q2REMpO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgLnNldEJvdHRvbUxpbmUoI0Q3RDZEQyk7XG4gICAgfVxuICAgICYud2V1aS1zZWFyY2gtYmFyX2ZvY3VzaW5ne1xuICAgICAgICAud2V1aS1zZWFyY2gtYmFyX19jYW5jZWwtYnRue1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLndldWktc2VhcmNoLWJhcl9fbGFiZWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuLndldWktc2VhcmNoLWJhcl9fZm9ybSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZGNDtcbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgd2lkdGg6IDIwMCU7XG4gICAgICAgIGhlaWdodDogMjAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U2RTZFQTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICB9XG59XG4ud2V1aS1zZWFyY2gtYmFyX19ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAxO1xuICAgIC53ZXVpLXNlYXJjaC1iYXJfX2lucHV0IHtcbiAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwLzE0ZW07XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjAvMTRlbTtcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLndldWktaWNvbi1zZWFyY2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgfVxuICAgIC53ZXVpLWljb24tY2xlYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgfVxufVxuLndldWktc2VhcmNoLWJhcl9fbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFweDtcbiAgICByaWdodDogMXB4O1xuICAgIGJvdHRvbTogMXB4O1xuICAgIGxlZnQ6IDFweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5QjlCOUI7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICAgIC53ZXVpLWljb24tc2VhcmNoIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxufVxuLndldWktc2VhcmNoLWJhcl9fY2FuY2VsLWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBjb2xvcjogIzA5QkIwNztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLndldWktc2VhcmNoLWJhcl9faW5wdXQ6bm90KDp2YWxpZCkgfiAud2V1aS1pY29uLWNsZWFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vL+W5suaOiWlucHV0W3NlYXJjaF3pu5jorqTnmoRjbGVhciBidXR0b25cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbkBwaWNrZXJJdGVtSGVpZ2h0OiAzNHB4O1xuLndldWktcGlja2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogNTAwMDtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XG4gICAgLy9zbGlkZSB1cCBhbmltYXRpb25cbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xufVxuXG4ud2V1aS1waWNrZXJfX2hkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDlweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgJjphZnRlciB7XG4gICAgICAgIC5zZXRCb3R0b21MaW5lKEB3ZXVpTGluZUNvbG9yTGlnaHQpO1xuICAgIH1cbn1cblxuLndldWktcGlja2VyX19hY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXg6IDE7XG4gICAgY29sb3I6IEB3ZXVpQ29sb3JQcmltYXJ5O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjODg4O1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59XG5cbi53ZXVpLXBpY2tlcl9fYmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAyMzhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2V1aS1waWNrZXJfX2dyb3VwIHtcbiAgICBmbGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8td2Via2l0LW1hc2stYm94LWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sdHJhbnNwYXJlbnQsdHJhbnNwYXJlbnQgNSUsI2ZmZiA1MCUsI2ZmZiA1MCUsdHJhbnNwYXJlbnQgOTUlLHRyYW5zcGFyZW50KTtcbn1cblxuLndldWktcGlja2VyX19tYXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDM7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgaHNsYSgwLCAwJSwgMTAwJSwgLjk1KSwgaHNsYSgwLCAwJSwgMTAwJSwgLjYpKSwgbGluZWFyLWdyYWRpZW50KDBkZWcsIGhzbGEoMCwgMCUsIDEwMCUsIC45NSksIGhzbGEoMCwgMCUsIDEwMCUsIC42KSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wLCBib3R0b207XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMnB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuXG4ud2V1aS1waWNrZXJfX2luZGljYXRvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBAcGlja2VySXRlbUhlaWdodDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDEwMnB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUxpbmVDb2xvckxpZ2h0KTtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICAgIC5zZXRCb3R0b21MaW5lKEB3ZXVpTGluZUNvbG9yTGlnaHQpO1xuICAgIH1cbn1cblxuLndldWktcGlja2VyX19jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZXVpLXBpY2tlcl9faXRlbSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IEBwaWNrZXJJdGVtSGVpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiBAcGlja2VySXRlbUhlaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2V1aS1waWNrZXJfX2l0ZW1fZGlzYWJsZWQge1xuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbn1cblxuLndldWktYW5pbWF0ZS1zbGlkZS11cCB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIGVhc2UgLjNzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIH1cbn1cblxuLndldWktYW5pbWF0ZS1zbGlkZS1kb3duIHtcbiAgICBhbmltYXRpb246IHNsaWRlRG93biBlYXNlIC4zcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4ud2V1aS1hbmltYXRlLWZhZGUtaW4ge1xuICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgLjNzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG4ud2V1aS1hbmltYXRlLWZhZGUtb3V0IHtcbiAgICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAuM3MgZm9yd2FyZHM7XG59IiwiLypcbiogVGVuY2VudCBpcyBwbGVhc2VkIHRvIHN1cHBvcnQgdGhlIG9wZW4gc291cmNlIGNvbW11bml0eSBieSBtYWtpbmcgV2VVSSBhdmFpbGFibGUuXG4qIFxuKiBDb3B5cmlnaHQgKEMpIDIwMTcgVEhMIEEyOSBMaW1pdGVkLCBhIFRlbmNlbnQgY29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiogXG4qICAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiogXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXNcbiogZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiogZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XG5cbi53ZXVpLWFncmVle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IC41ZW0gMTVweDtcbiAgICBmb250LXNpemUgOjEzcHg7XG5cbiAgICBhe1xuICAgICAgICBjb2xvcjogQHdldWlMaW5rQ29sb3JEZWZhdWx0O1xuICAgIH1cbn1cbi53ZXVpLWFncmVlX190ZXh0e1xuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XG59XG4ud2V1aS1hZ3JlZV9fY2hlY2tib3h7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGZvbnQtc2l6ZTogMDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgaGVpZ2h0OiAxM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHZlcnRpY2FsLWFsaWduOiAwO1xuICAgIHRvcDogMnB4O1xuXG4gICAgJjpjaGVja2Vke1xuICAgICAgICAmOmJlZm9yZXtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIndldWlcIjtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgc3BlYWs6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgICAgICAgY29udGVudDogXCJcXEVBMDhcIjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDlCQjA3O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTQ4JSkgc2NhbGUoLjczKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmOmRpc2FibGVke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFMUUxRTE7XG4gICAgICAgICY6YmVmb3Jle1xuICAgICAgICAgICAgY29sb3I6I0FEQURBRDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcblxuLndldWktbG9hZGluZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGFuaW1hdGlvbjogd2V1aUxvYWRpbmcgMXMgc3RlcHMoMTIsIGVuZCkgaW5maW5pdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE1qQWlJR2hsYVdkb2REMGlNVEl3SWlCMmFXVjNRbTk0UFNJd0lEQWdNVEF3SURFd01DSStQSEJoZEdnZ1ptbHNiRDBpYm05dVpTSWdaRDBpVFRBZ01HZ3hNREIyTVRBd1NEQjZJaTgrUEhKbFkzUWdkMmxrZEdnOUlqY2lJR2hsYVdkb2REMGlNakFpSUhnOUlqUTJMalVpSUhrOUlqUXdJaUJtYVd4c1BTSWpSVGxGT1VVNUlpQnllRDBpTlNJZ2NuazlJalVpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEQWdMVE13S1NJdlBqeHlaV04wSUhkcFpIUm9QU0kzSWlCb1pXbG5hSFE5SWpJd0lpQjRQU0kwTmk0MUlpQjVQU0kwTUNJZ1ptbHNiRDBpSXprNE9UWTVOeUlnY25nOUlqVWlJSEo1UFNJMUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3pNQ0F4TURVdU9UZ2dOalVwSWk4K1BISmxZM1FnZDJsa2RHZzlJamNpSUdobGFXZG9kRDBpTWpBaUlIZzlJalEyTGpVaUlIazlJalF3SWlCbWFXeHNQU0lqT1VJNU9UbEJJaUJ5ZUQwaU5TSWdjbms5SWpVaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtEWXdJRGMxTGprNElEWTFLU0l2UGp4eVpXTjBJSGRwWkhSb1BTSTNJaUJvWldsbmFIUTlJakl3SWlCNFBTSTBOaTQxSWlCNVBTSTBNQ0lnWm1sc2JEMGlJMEV6UVRGQk1pSWdjbmc5SWpVaUlISjVQU0kxSWlCMGNtRnVjMlp2Y20wOUluSnZkR0YwWlNnNU1DQTJOU0EyTlNraUx6NDhjbVZqZENCM2FXUjBhRDBpTnlJZ2FHVnBaMmgwUFNJeU1DSWdlRDBpTkRZdU5TSWdlVDBpTkRBaUlHWnBiR3c5SWlOQlFrRTVRVUVpSUhKNFBTSTFJaUJ5ZVQwaU5TSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9NVEl3SURVNExqWTJJRFkxS1NJdlBqeHlaV04wSUhkcFpIUm9QU0kzSWlCb1pXbG5hSFE5SWpJd0lpQjRQU0kwTmk0MUlpQjVQU0kwTUNJZ1ptbHNiRDBpSTBJeVFqSkNNaUlnY25nOUlqVWlJSEo1UFNJMUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3hOVEFnTlRRdU1ESWdOalVwSWk4K1BISmxZM1FnZDJsa2RHZzlJamNpSUdobGFXZG9kRDBpTWpBaUlIZzlJalEyTGpVaUlIazlJalF3SWlCbWFXeHNQU0lqUWtGQ09FSTVJaUJ5ZUQwaU5TSWdjbms5SWpVaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtERTRNQ0ExTUNBMk5Ta2lMejQ4Y21WamRDQjNhV1IwYUQwaU55SWdhR1ZwWjJoMFBTSXlNQ0lnZUQwaU5EWXVOU0lnZVQwaU5EQWlJR1pwYkd3OUlpTkRNa013UXpFaUlISjRQU0kxSWlCeWVUMGlOU0lnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTFRFMU1DQTBOUzQ1T0NBMk5Ta2lMejQ4Y21WamRDQjNhV1IwYUQwaU55SWdhR1ZwWjJoMFBTSXlNQ0lnZUQwaU5EWXVOU0lnZVQwaU5EQWlJR1pwYkd3OUlpTkRRa05DUTBJaUlISjRQU0kxSWlCeWVUMGlOU0lnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTFRFeU1DQTBNUzR6TkNBMk5Ta2lMejQ4Y21WamRDQjNhV1IwYUQwaU55SWdhR1ZwWjJoMFBTSXlNQ0lnZUQwaU5EWXVOU0lnZVQwaU5EQWlJR1pwYkd3OUlpTkVNa1F5UkRJaUlISjRQU0kxSWlCeWVUMGlOU0lnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTFRrd0lETTFJRFkxS1NJdlBqeHlaV04wSUhkcFpIUm9QU0kzSWlCb1pXbG5hSFE5SWpJd0lpQjRQU0kwTmk0MUlpQjVQU0kwTUNJZ1ptbHNiRDBpSTBSQlJFRkVRU0lnY25nOUlqVWlJSEo1UFNJMUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3ROakFnTWpRdU1ESWdOalVwSWk4K1BISmxZM1FnZDJsa2RHZzlJamNpSUdobGFXZG9kRDBpTWpBaUlIZzlJalEyTGpVaUlIazlJalF3SWlCbWFXeHNQU0lqUlRKRk1rVXlJaUJ5ZUQwaU5TSWdjbms5SWpVaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtDMHpNQ0F0TlM0NU9DQTJOU2tpTHo0OEwzTjJaejQ9KSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXG4gICAgJi53ZXVpLWxvYWRpbmdfdHJhbnNwYXJlbnQsXG4gICAgLndldWktYnRuX2xvYWRpbmcud2V1aS1idG5fcHJpbWFyeSAmLFxuICAgIC53ZXVpLWJ0bl9sb2FkaW5nLndldWktYnRuX3dhcm4gJlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyUzRSUzQ3BhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8lM0UlM0NyZWN0IHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC41NiknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMCAtMzApJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuNSknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMzAgMTA1Ljk4IDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4zOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNjUgNjUpJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMzIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA1OC42NiA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjI1KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNjUpJy8lM0UlM0NyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMiknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTE1MCA0NS45OCA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTkwIDM1IDY1KScvJTNFJTNDcmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjEpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC02MCAyNC4wMiA2NSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB3ZXVpTG9hZGluZyB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDM2MGRlZyk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHdldWlMb2FkaW5nIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMzYwZGVnKTtcbiAgICB9XG59XG4iLCIvKlxuKiBUZW5jZW50IGlzIHBsZWFzZWQgdG8gc3VwcG9ydCB0aGUgb3BlbiBzb3VyY2UgY29tbXVuaXR5IGJ5IG1ha2luZyBXZVVJIGF2YWlsYWJsZS5cbiogXG4qIENvcHlyaWdodCAoQykgMjAxNyBUSEwgQTI5IExpbWl0ZWQsIGEgVGVuY2VudCBjb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiBcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4qIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKiBcbiogICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuKiBcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpc1xuKiBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELFxuKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcblxuLndldWktc2xpZGVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDE4cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi53ZXVpLXNsaWRlcl9faW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFOUU5O1xufVxuXG4ud2V1aS1zbGlkZXJfX3RyYWNrIHtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUNvbG9yUHJpbWFyeTtcbiAgICB3aWR0aDogMDtcbn1cblxuLndldWktc2xpZGVyX19oYW5kbGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAuMik7XG59XG5cblxuLndldWktc2xpZGVyLWJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLndldWktc2xpZGVye1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cbi53ZXVpLXNsaWRlci1ib3hfX3ZhbHVlIHtcbiAgICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgY29sb3I6ICM4ODg4ODg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"));
