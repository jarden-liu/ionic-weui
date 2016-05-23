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
}(document, "/*!\n" +
" * 针对ionic框架做了微调。\n" +
" *\n" +
" * WeUI v0.4.2 (https://github.com/weui/weui)\n" +
" * Copyright 2016 Tencent, Inc.\n" +
" * Licensed under the MIT license\n" +
" */\n" +
"\n" +
"@font-face {\n" +
"  font-weight: normal;\n" +
"  font-style: normal;\n" +
"  font-family: \"weui\";\n" +
"  src: url('data:application/octet-stream;base64,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') format('truetype');\n" +
"}\n" +
"[class^=\"weui_icon_\"]:before,\n" +
"[class*=\" weui_icon_\"]:before {\n" +
"  font-family: \"weui\";\n" +
"  font-style: normal;\n" +
"  font-weight: normal;\n" +
"  speak: none;\n" +
"  display: inline-block;\n" +
"  vertical-align: middle;\n" +
"  text-decoration: inherit;\n" +
"  width: 1em;\n" +
"  margin-right: .2em;\n" +
"  text-align: center;\n" +
"  /* opacity: .8; */\n" +
"  /* For safety - reset parent styles, that can break glyph codes*/\n" +
"  font-variant: normal;\n" +
"  text-transform: none;\n" +
"  /* fix buttons height, for twitter bootstrap */\n" +
"  line-height: 1em;\n" +
"  /* Animation center compensation - margins should be symmetric */\n" +
"  /* remove if not needed */\n" +
"  margin-left: .2em;\n" +
"  /* you can be more comfortable with increased icons size */\n" +
"  /* font-size: 120%; */\n" +
"  /* Uncomment for 3D effect */\n" +
"  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\n" +
"}\n" +
".weui_icon_circle:before {\n" +
"  content: \"\\EA01\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_download:before {\n" +
"  content: \"\\EA02\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_info:before {\n" +
"  content: \"\\EA03\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_safe_success:before {\n" +
"  content: \"\\EA04\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_safe_warn:before {\n" +
"  content: \"\\EA05\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_success:before {\n" +
"  content: \"\\EA06\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_success_circle:before {\n" +
"  content: \"\\EA07\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_success_no_circle:before {\n" +
"  content: \"\\EA08\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_waiting:before {\n" +
"  content: \"\\EA09\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_waiting_circle:before {\n" +
"  content: \"\\EA0A\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_warn:before {\n" +
"  content: \"\\EA0B\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_info_circle:before {\n" +
"  content: \"\\EA0C\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_cancel:before {\n" +
"  content: \"\\EA0D\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_search:before {\n" +
"  content: \"\\EA0E\";\n" +
"}\n" +
"/* '' */\n" +
".weui_icon_clear:before {\n" +
"  content: \"\\EA0F\";\n" +
"}\n" +
"/* '' */\n" +
"[class^=\"weui_icon_\"]:before,\n" +
"[class*=\" weui_icon_\"]:before {\n" +
"  margin: 0;\n" +
"}\n" +
".weui_icon_success:before {\n" +
"  font-size: 23px;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui_icon_waiting:before {\n" +
"  font-size: 23px;\n" +
"  color: #10AEFF;\n" +
"}\n" +
".weui_icon_warn:before {\n" +
"  font-size: 23px;\n" +
"  color: #F43530;\n" +
"}\n" +
".weui_icon_info:before {\n" +
"  font-size: 23px;\n" +
"  color: #10AEFF;\n" +
"}\n" +
".weui_icon_success_circle:before {\n" +
"  font-size: 23px;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui_icon_success_no_circle:before {\n" +
"  font-size: 23px;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui_icon_waiting_circle:before {\n" +
"  font-size: 23px;\n" +
"  color: #10AEFF;\n" +
"}\n" +
".weui_icon_circle:before {\n" +
"  font-size: 23px;\n" +
"  color: #C9C9C9;\n" +
"}\n" +
".weui_icon_download:before {\n" +
"  font-size: 23px;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui_icon_info_circle:before {\n" +
"  font-size: 23px;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui_icon_safe_success:before {\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui_icon_safe_warn:before {\n" +
"  color: #FFBE00;\n" +
"}\n" +
".weui_icon_cancel:before {\n" +
"  color: #F43530;\n" +
"  font-size: 22px;\n" +
"}\n" +
".weui_icon_search:before {\n" +
"  color: #B2B2B2;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui_icon_clear:before {\n" +
"  color: #B2B2B2;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui_icon_msg:before {\n" +
"  font-size: 104px;\n" +
"}\n" +
".weui_icon_warn.weui_icon_msg:before {\n" +
"  color: #F76260;\n" +
"}\n" +
".weui_icon_safe:before {\n" +
"  font-size: 104px;\n" +
"}\n" +
".weui_btn.weui_btn_mini {\n" +
"  line-height: 1.9;\n" +
"  font-size: 14px;\n" +
"  padding: 0 .75em;\n" +
"  display: inline-block;\n" +
"}\n" +
"button.weui_btn,\n" +
"input.weui_btn {\n" +
"  width: 100%;\n" +
"  border-width: 0;\n" +
"  outline: 0;\n" +
"  -webkit-appearance: none;\n" +
"}\n" +
"button.weui_btn:focus,\n" +
"input.weui_btn:focus {\n" +
"  outline: 0;\n" +
"}\n" +
"button.weui_btn_inline,\n" +
"input.weui_btn_inline,\n" +
"button.weui_btn_mini,\n" +
"input.weui_btn_mini {\n" +
"  width: auto;\n" +
"}\n" +
"/*gap between btn*/\n" +
".weui_btn + .weui_btn {\n" +
"  margin-top: 15px;\n" +
"}\n" +
".weui_btn.weui_btn_inline + .weui_btn.weui_btn_inline {\n" +
"  margin-top: auto;\n" +
"  margin-left: 15px;\n" +
"}\n" +
".weui_btn_area {\n" +
"  margin: 1.17647059em 15px 0.3em;\n" +
"}\n" +
".weui_btn_area.weui_btn_area_inline {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"}\n" +
".weui_btn_area.weui_btn_area_inline .weui_btn {\n" +
"  margin-top: auto;\n" +
"  margin-right: 15px;\n" +
"  width: 100%;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"      -ms-flex: 1;\n" +
"          flex: 1;\n" +
"}\n" +
".weui_btn_area.weui_btn_area_inline .weui_btn:last-child {\n" +
"  margin-right: 0;\n" +
"}\n" +
".weui_btn {\n" +
"  position: relative;\n" +
"  display: block;\n" +
"  margin-left: auto;\n" +
"  margin-right: auto;\n" +
"  padding-left: 14px;\n" +
"  padding-right: 14px;\n" +
"  box-sizing: border-box;\n" +
"  font-size: 18px;\n" +
"  text-align: center;\n" +
"  text-decoration: none;\n" +
"  color: #FFFFFF;\n" +
"  line-height: 2.33333333;\n" +
"  border-radius: 5px;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui_btn:after {\n" +
"  content: \" \";\n" +
"  width: 200%;\n" +
"  height: 200%;\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  border: 1px solid rgba(0, 0, 0, 0.2);\n" +
"  -webkit-transform: scale(0.5);\n" +
"          transform: scale(0.5);\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  box-sizing: border-box;\n" +
"  border-radius: 10px;\n" +
"}\n" +
".weui_btn.weui_btn_inline {\n" +
"  display: inline-block;\n" +
"}\n" +
".weui_btn_default {\n" +
"  background-color: #F7F7F7;\n" +
"  color: #454545;\n" +
"}\n" +
".weui_btn_default:not(.weui_btn_disabled):visited {\n" +
"  color: #454545;\n" +
"}\n" +
".weui_btn_default:not(.weui_btn_disabled):active {\n" +
"  color: #A1A1A1;\n" +
"  background-color: #DEDEDE;\n" +
"}\n" +
".weui_btn_primary {\n" +
"  background-color: #04BE02;\n" +
"}\n" +
".weui_btn_primary:not(.weui_btn_disabled):visited {\n" +
"  color: #FFFFFF;\n" +
"}\n" +
".weui_btn_primary:not(.weui_btn_disabled):active {\n" +
"  color: rgba(255, 255, 255, 0.4);\n" +
"  background-color: #039702;\n" +
"}\n" +
".weui_btn_warn {\n" +
"  background-color: #EF4F4F;\n" +
"}\n" +
".weui_btn_warn:not(.weui_btn_disabled):visited {\n" +
"  color: #FFFFFF;\n" +
"}\n" +
".weui_btn_warn:not(.weui_btn_disabled):active {\n" +
"  color: rgba(255, 255, 255, 0.4);\n" +
"  background-color: #C13E3E;\n" +
"}\n" +
".weui_btn_disabled {\n" +
"  color: rgba(255, 255, 255, 0.6);\n" +
"}\n" +
".weui_btn_disabled.weui_btn_default {\n" +
"  color: #C9C9C9;\n" +
"}\n" +
".weui_btn_plain_primary {\n" +
"  color: #04BE02;\n" +
"  border: 1px solid #04BE02;\n" +
"}\n" +
"button.weui_btn_plain_primary,\n" +
"input.weui_btn_plain_primary {\n" +
"  border-width: 1px;\n" +
"  background-color: transparent;\n" +
"}\n" +
".weui_btn_plain_primary:active {\n" +
"  border-color: #039702;\n" +
"}\n" +
".weui_btn_plain_primary:after {\n" +
"  border-width: 0;\n" +
"}\n" +
".weui_btn_plain_default {\n" +
"  color: #5A5A5A;\n" +
"  border: 1px solid #5A5A5A;\n" +
"}\n" +
"button.weui_btn_plain_default,\n" +
"input.weui_btn_plain_default {\n" +
"  border-width: 1px;\n" +
"  background-color: transparent;\n" +
"}\n" +
".weui_btn_plain_default:after {\n" +
"  border-width: 0;\n" +
"}\n" +
".weui_cell {\n" +
"  position: relative;\n" +
"}\n" +
".weui_cell:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"  left: 15px;\n" +
"}\n" +
".weui_cell:first-child:before {\n" +
"  display: none;\n" +
"}\n" +
".weui_cells {\n" +
"  margin-top: 1.17647059em;\n" +
"  background-color: #FFFFFF;\n" +
"  line-height: 1.41176471;\n" +
"  font-size: 17px;\n" +
"  overflow: hidden;\n" +
"  position: relative;\n" +
"}\n" +
".weui_cells:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_cells:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_cells_title {\n" +
"  margin-top: .77em;\n" +
"  margin-bottom: .3em;\n" +
"  padding-left: 15px;\n" +
"  padding-right: 15px;\n" +
"  color: #888;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui_cells_title + .weui_cells {\n" +
"  margin-top: 0;\n" +
"}\n" +
".weui_cells_tips {\n" +
"  margin-top: .3em;\n" +
"  color: #888;\n" +
"  padding-left: 15px;\n" +
"  padding-right: 15px;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui_cell {\n" +
"  padding: 10px 15px;\n" +
"  position: relative;\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"  -webkit-box-align: center;\n" +
"  -webkit-align-items: center;\n" +
"      -ms-flex-align: center;\n" +
"          align-items: center;\n" +
"}\n" +
".weui_cell_ft {\n" +
"  text-align: right;\n" +
"  color: #888;\n" +
"}\n" +
".weui_cell_primary {\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"      -ms-flex: 1;\n" +
"          flex: 1;\n" +
"}\n" +
".weui_cells_access .weui_cell:not(.no_access) {\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui_cells_access .weui_cell:not(.no_access):active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui_cells_access a.weui_cell {\n" +
"  color: inherit;\n" +
"}\n" +
".weui_cells_access .weui_cell_ft:after {\n" +
"  content: \" \";\n" +
"  display: inline-block;\n" +
"  -webkit-transform: rotate(45deg);\n" +
"          transform: rotate(45deg);\n" +
"  height: 6px;\n" +
"  width: 6px;\n" +
"  border-width: 2px 2px 0 0;\n" +
"  border-color: #C8C8CD;\n" +
"  border-style: solid;\n" +
"  position: relative;\n" +
"  top: -2px;\n" +
"  top: -1px;\n" +
"  margin-left: .3em;\n" +
"}\n" +
".weui_check_label {\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui_check {\n" +
"  position: absolute;\n" +
"  left: -9999em;\n" +
"}\n" +
".weui_cells_radio .weui_cell_ft {\n" +
"  padding-left: 0.35em;\n" +
"}\n" +
".weui_cells_radio .weui_cell:active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui_cells_radio .weui_check:checked + .weui_icon_checked:before {\n" +
"  display: block;\n" +
"  content: '\\EA08';\n" +
"  color: #09BB07;\n" +
"  font-size: 16px;\n" +
"}\n" +
".weui_cells_checkbox .weui_cell_hd {\n" +
"  padding-right: 0.35em;\n" +
"}\n" +
".weui_cells_checkbox .weui_cell:active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui_cells_checkbox .weui_icon_checked:before {\n" +
"  content: '\\EA01';\n" +
"  color: #C9C9C9;\n" +
"  font-size: 23px;\n" +
"  display: block;\n" +
"}\n" +
".weui_cells_checkbox .weui_check:checked + .weui_icon_checked:before {\n" +
"  content: '\\EA06';\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui_label {\n" +
"  display: block;\n" +
"  width: 105px;\n" +
"  word-wrap: break-word;\n" +
"  word-break: break-all;\n" +
"}\n" +
".weui_input {\n" +
"  width: 100%;\n" +
"  border: 0;\n" +
"  outline: 0;\n" +
"  -webkit-appearance: none;\n" +
"  background-color: transparent;\n" +
"  font-size: inherit;\n" +
"  color: inherit;\n" +
"  height: 1.41176471em;\n" +
"  line-height: 1.41176471;\n" +
"}\n" +
".weui_input::-webkit-outer-spin-button,\n" +
".weui_input::-webkit-inner-spin-button {\n" +
"  -webkit-appearance: none;\n" +
"  margin: 0;\n" +
"}\n" +
".weui_textarea {\n" +
"  display: block;\n" +
"  border: 0;\n" +
"  resize: none;\n" +
"  width: 100%;\n" +
"  color: inherit;\n" +
"  font-size: 1em;\n" +
"  line-height: inherit;\n" +
"  outline: 0;\n" +
"}\n" +
".weui_textarea_counter {\n" +
"  color: #B2B2B2;\n" +
"  text-align: right;\n" +
"}\n" +
".weui_cell_warn .weui_textarea_counter {\n" +
"  color: #E64340;\n" +
"}\n" +
".weui_toptips {\n" +
"  display: none;\n" +
"  position: fixed;\n" +
"  -webkit-transform: translateZ(0);\n" +
"  width: 100%;\n" +
"  top: 0;\n" +
"  line-height: 2.3;\n" +
"  font-size: 14px;\n" +
"  text-align: center;\n" +
"  color: #FFF;\n" +
"  z-index: 2;\n" +
"}\n" +
".weui_toptips.weui_warn {\n" +
"  background-color: #E64340;\n" +
"}\n" +
".weui_cells_form .weui_cell_warn {\n" +
"  color: #E64340;\n" +
"}\n" +
".weui_cells_form .weui_cell_warn .weui_icon_warn {\n" +
"  display: inline-block;\n" +
"}\n" +
".weui_cells_form .weui_cell_ft {\n" +
"  font-size: 0;\n" +
"}\n" +
".weui_cells_form .weui_icon_warn {\n" +
"  display: none;\n" +
"}\n" +
".weui_cells_form input,\n" +
".weui_cells_form textarea,\n" +
".weui_cells_form label[for] {\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui_cell_select {\n" +
"  padding: 0;\n" +
"}\n" +
".weui_cell_select .weui_select {\n" +
"  padding-right: 30px;\n" +
"}\n" +
".weui_cell_select .weui_cell_bd:after {\n" +
"  content: \" \";\n" +
"  display: inline-block;\n" +
"  -webkit-transform: rotate(45deg);\n" +
"          transform: rotate(45deg);\n" +
"  height: 6px;\n" +
"  width: 6px;\n" +
"  border-width: 2px 2px 0 0;\n" +
"  border-color: #C8C8CD;\n" +
"  border-style: solid;\n" +
"  position: relative;\n" +
"  top: -2px;\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  right: 15px;\n" +
"  margin-top: -3px;\n" +
"}\n" +
".weui_select {\n" +
"  -webkit-appearance: none;\n" +
"  border: 0;\n" +
"  outline: 0;\n" +
"  background-color: transparent;\n" +
"  width: 100%;\n" +
"  font-size: inherit;\n" +
"  height: 44px;\n" +
"  line-height: 44px;\n" +
"  position: relative;\n" +
"  z-index: 1;\n" +
"  padding-left: 15px;\n" +
"}\n" +
".weui_select_before {\n" +
"  padding-right: 15px;\n" +
"}\n" +
".weui_select_before .weui_select {\n" +
"  width: 105px;\n" +
"  box-sizing: border-box;\n" +
"}\n" +
".weui_select_before .weui_cell_hd {\n" +
"  position: relative;\n" +
"}\n" +
".weui_select_before .weui_cell_hd:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  right: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  height: 100%;\n" +
"  border-right: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 100% 0;\n" +
"          transform-origin: 100% 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui_select_before .weui_cell_hd:before {\n" +
"  content: \" \";\n" +
"  display: inline-block;\n" +
"  -webkit-transform: rotate(45deg);\n" +
"          transform: rotate(45deg);\n" +
"  height: 6px;\n" +
"  width: 6px;\n" +
"  border-width: 2px 2px 0 0;\n" +
"  border-color: #C8C8CD;\n" +
"  border-style: solid;\n" +
"  position: relative;\n" +
"  top: -2px;\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  right: 15px;\n" +
"  margin-top: -3px;\n" +
"}\n" +
".weui_select_before .weui_cell_bd {\n" +
"  padding-left: 15px;\n" +
"}\n" +
".weui_select_before .weui_cell_bd:after {\n" +
"  display: none;\n" +
"}\n" +
".weui_select_after {\n" +
"  padding-left: 15px;\n" +
"}\n" +
".weui_select_after .weui_select {\n" +
"  padding-left: 0;\n" +
"}\n" +
".weui_vcode {\n" +
"  padding-top: 0;\n" +
"  padding-right: 0;\n" +
"  padding-bottom: 0;\n" +
"}\n" +
".weui_vcode .weui_cell_ft img {\n" +
"  margin-left: 5px;\n" +
"  height: 44px;\n" +
"  vertical-align: middle;\n" +
"}\n" +
".weui_cell_switch {\n" +
"  padding-top: 6px;\n" +
"  padding-bottom: 6px;\n" +
"}\n" +
".weui_switch {\n" +
"  -webkit-appearance: none;\n" +
"     -moz-appearance: none;\n" +
"          appearance: none;\n" +
"  position: relative;\n" +
"  width: 52px;\n" +
"  height: 32px;\n" +
"  border: 1px solid #DFDFDF;\n" +
"  outline: 0;\n" +
"  border-radius: 16px;\n" +
"  box-sizing: border-box;\n" +
"  background: #DFDFDF;\n" +
"}\n" +
".weui_switch:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  width: 50px;\n" +
"  height: 30px;\n" +
"  border-radius: 15px;\n" +
"  background-color: #FDFDFD;\n" +
"  -webkit-transition: -webkit-transform .3s;\n" +
"  transition: -webkit-transform .3s;\n" +
"  transition: transform .3s;\n" +
"  transition: transform .3s, -webkit-transform .3s;\n" +
"}\n" +
".weui_switch:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  width: 30px;\n" +
"  height: 30px;\n" +
"  border-radius: 15px;\n" +
"  background-color: #FFFFFF;\n" +
"  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n" +
"  -webkit-transition: -webkit-transform .3s;\n" +
"  transition: -webkit-transform .3s;\n" +
"  transition: transform .3s;\n" +
"  transition: transform .3s, -webkit-transform .3s;\n" +
"}\n" +
".weui_switch:checked {\n" +
"  border-color: #04BE02;\n" +
"  background-color: #04BE02;\n" +
"}\n" +
".weui_switch:checked:before {\n" +
"  -webkit-transform: scale(0);\n" +
"          transform: scale(0);\n" +
"}\n" +
".weui_switch:checked:after {\n" +
"  -webkit-transform: translateX(20px);\n" +
"          transform: translateX(20px);\n" +
"}\n" +
".weui_uploader_hd {\n" +
"  padding-top: 0;\n" +
"  padding-right: 0;\n" +
"  padding-left: 0;\n" +
"}\n" +
".weui_uploader_hd .weui_cell_ft {\n" +
"  font-size: 1em;\n" +
"}\n" +
".weui_uploader_bd {\n" +
"  margin-bottom: -4px;\n" +
"  margin-right: -9px;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui_uploader_files {\n" +
"  list-style: none;\n" +
"}\n" +
".weui_uploader_file {\n" +
"  float: left;\n" +
"  margin-right: 9px;\n" +
"  margin-bottom: 9px;\n" +
"  width: 79px;\n" +
"  height: 79px;\n" +
"  background: no-repeat center center;\n" +
"  background-size: cover;\n" +
"}\n" +
".weui_uploader_status {\n" +
"  position: relative;\n" +
"}\n" +
".weui_uploader_status:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  background-color: rgba(0, 0, 0, 0.5);\n" +
"}\n" +
".weui_uploader_status .weui_uploader_status_content {\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  left: 50%;\n" +
"  -webkit-transform: translate(-50%, -50%);\n" +
"          transform: translate(-50%, -50%);\n" +
"  color: #FFFFFF;\n" +
"}\n" +
".weui_uploader_status .weui_icon_warn {\n" +
"  display: block;\n" +
"}\n" +
".weui_uploader_input_wrp {\n" +
"  float: left;\n" +
"  position: relative;\n" +
"  margin-right: 9px;\n" +
"  margin-bottom: 9px;\n" +
"  width: 77px;\n" +
"  height: 77px;\n" +
"  border: 1px solid #D9D9D9;\n" +
"}\n" +
".weui_uploader_input_wrp:before,\n" +
".weui_uploader_input_wrp:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  left: 50%;\n" +
"  -webkit-transform: translate(-50%, -50%);\n" +
"          transform: translate(-50%, -50%);\n" +
"  background-color: #D9D9D9;\n" +
"}\n" +
".weui_uploader_input_wrp:before {\n" +
"  width: 2px;\n" +
"  height: 39.5px;\n" +
"}\n" +
".weui_uploader_input_wrp:after {\n" +
"  width: 39.5px;\n" +
"  height: 2px;\n" +
"}\n" +
".weui_uploader_input_wrp:active {\n" +
"  border-color: #999999;\n" +
"}\n" +
".weui_uploader_input_wrp:active:before,\n" +
".weui_uploader_input_wrp:active:after {\n" +
"  background-color: #999999;\n" +
"}\n" +
".weui_uploader_input {\n" +
"  position: absolute;\n" +
"  z-index: 1;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"  opacity: 0;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui_msg {\n" +
"  padding-top: 36px;\n" +
"  text-align: center;\n" +
"}\n" +
".weui_msg .weui_icon_area {\n" +
"  margin-bottom: 30px;\n" +
"}\n" +
".weui_msg .weui_text_area {\n" +
"  margin-bottom: 25px;\n" +
"  padding: 0 20px;\n" +
"}\n" +
".weui_msg .weui_msg_title {\n" +
"  margin-bottom: 5px;\n" +
"  font-weight: 400;\n" +
"  font-size: 20px;\n" +
"}\n" +
".weui_msg .weui_msg_desc {\n" +
"  font-size: 14px;\n" +
"  color: #888;\n" +
"}\n" +
".weui_msg .weui_opr_area {\n" +
"  margin-bottom: 25px;\n" +
"}\n" +
".weui_msg .weui_extra_area {\n" +
"  margin-bottom: 15px;\n" +
"  font-size: 14px;\n" +
"  color: #888;\n" +
"}\n" +
".weui_msg .weui_extra_area a {\n" +
"  color: #61749B;\n" +
"}\n" +
"@media screen and (min-height: 438px) {\n" +
"  .weui_extra_area {\n" +
"    position: fixed;\n" +
"    left: 0;\n" +
"    bottom: 0;\n" +
"    width: 100%;\n" +
"    text-align: center;\n" +
"  }\n" +
"}\n" +
".weui_article {\n" +
"  padding: 20px 15px;\n" +
"  font-size: 15px;\n" +
"}\n" +
".weui_article section {\n" +
"  margin-bottom: 1.5em;\n" +
"}\n" +
".weui_article h1 {\n" +
"  font-size: 17px;\n" +
"  font-weight: 400;\n" +
"  margin-bottom: .75em;\n" +
"}\n" +
".weui_article h2 {\n" +
"  font-size: 16px;\n" +
"  font-weight: 400;\n" +
"  margin-bottom: .3em;\n" +
"}\n" +
".weui_article h3 {\n" +
"  font-weight: 400;\n" +
"  font-size: 15px;\n" +
"}\n" +
".weui_article * {\n" +
"  max-width: 100%;\n" +
"  box-sizing: border-box;\n" +
"  word-wrap: break-word;\n" +
"}\n" +
".weui_article p {\n" +
"  margin: 10px 0;\n" +
"}\n" +
".weui_tabbar {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"  position: absolute;\n" +
"  bottom: 0;\n" +
"  width: 100%;\n" +
"  background-color: #f7f7fa;\n" +
"}\n" +
".weui_tabbar:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #979797;\n" +
"  color: #979797;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_tabbar_item {\n" +
"  display: block;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"      -ms-flex: 1;\n" +
"          flex: 1;\n" +
"  padding: 7px 0 0;\n" +
"  -webkit-tap-highlight-color: transparent;\n" +
"}\n" +
".weui_tabbar_item.weui_bar_item_on .weui_tabbar_label {\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui_tabbar_icon {\n" +
"  margin: 0 auto;\n" +
"  width: 24px;\n" +
"  height: 24px;\n" +
"}\n" +
".weui_tabbar_icon img {\n" +
"  display: block;\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"}\n" +
".weui_tabbar_icon + .weui_tabbar_label {\n" +
"  margin-top: 5px;\n" +
"}\n" +
".weui_tabbar_label {\n" +
"  text-align: center;\n" +
"  color: #888;\n" +
"  font-size: 12px;\n" +
"}\n" +
".weui_navbar {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"  position: absolute;\n" +
"  z-index: 1;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  background-color: #fafafa;\n" +
"}\n" +
".weui_navbar:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #BCBAB6;\n" +
"  color: #BCBAB6;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_navbar + .weui_tab_bd {\n" +
"  padding-top: 50px;\n" +
"  padding-bottom: 0;\n" +
"}\n" +
".weui_navbar_item {\n" +
"  position: relative;\n" +
"  display: block;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"      -ms-flex: 1;\n" +
"          flex: 1;\n" +
"  padding: 13px 0;\n" +
"  text-align: center;\n" +
"  font-size: 15px;\n" +
"  -webkit-tap-highlight-color: transparent;\n" +
"}\n" +
".weui_navbar_item:active {\n" +
"  background-color: #ededed;\n" +
"}\n" +
".weui_navbar_item.weui_bar_item_on {\n" +
"  background-color: #eaeaea;\n" +
"}\n" +
".weui_navbar_item:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  right: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  height: 100%;\n" +
"  border-right: 1px solid #cccccc;\n" +
"  color: #cccccc;\n" +
"  -webkit-transform-origin: 100% 0;\n" +
"          transform-origin: 100% 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui_navbar_item:last-child:after {\n" +
"  display: none;\n" +
"}\n" +
".weui_tab {\n" +
"  position: relative;\n" +
"  height: 100%;\n" +
"}\n" +
".weui_tab_bd {\n" +
"  box-sizing: border-box;\n" +
"  height: 100%;\n" +
"  padding-bottom: 55px;\n" +
"  overflow: auto;\n" +
"  -webkit-overflow-scrolling: touch;\n" +
"}\n" +
".weui_tab_bd_item {\n" +
"  display: none;\n" +
"}\n" +
".weui_progress {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"  -webkit-box-align: center;\n" +
"  -webkit-align-items: center;\n" +
"      -ms-flex-align: center;\n" +
"          align-items: center;\n" +
"}\n" +
".weui_progress_bar {\n" +
"  background-color: #EBEBEB;\n" +
"  height: 3px;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"      -ms-flex: 1;\n" +
"          flex: 1;\n" +
"}\n" +
".weui_progress_inner_bar {\n" +
"  width: 0;\n" +
"  height: 100%;\n" +
"  background-color: #09BB07;\n" +
"}\n" +
".weui_progress_opr {\n" +
"  display: block;\n" +
"  margin-left: 15px;\n" +
"  font-size: 0;\n" +
"}\n" +
".weui_panel {\n" +
"  background-color: #FFFFFF;\n" +
"  margin-top: 10px;\n" +
"  position: relative;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui_panel:first-child {\n" +
"  margin-top: 0;\n" +
"}\n" +
".weui_panel:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_panel:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_panel_hd {\n" +
"  padding: 14px 15px 10px;\n" +
"  color: #999999;\n" +
"  font-size: 13px;\n" +
"  position: relative;\n" +
"}\n" +
".weui_panel_hd:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"  left: 15px;\n" +
"}\n" +
".weui_panel_ft {\n" +
"  padding: 10px 15px 12px;\n" +
"  color: #999999;\n" +
"  font-size: 14px;\n" +
"  position: relative;\n" +
"}\n" +
".weui_panel_ft:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"  left: 15px;\n" +
"}\n" +
".weui_panel_access .weui_panel_ft {\n" +
"  display: block;\n" +
"  color: #586C94;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui_panel_access .weui_panel_ft:active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui_panel_access .weui_panel_ft:after {\n" +
"  content: \" \";\n" +
"  display: inline-block;\n" +
"  -webkit-transform: rotate(45deg);\n" +
"          transform: rotate(45deg);\n" +
"  height: 6px;\n" +
"  width: 6px;\n" +
"  border-width: 2px 2px 0 0;\n" +
"  border-color: #C7C7CC;\n" +
"  border-style: solid;\n" +
"  position: relative;\n" +
"  top: -2px;\n" +
"  position: absolute;\n" +
"  right: 15px;\n" +
"  top: 50%;\n" +
"  margin-top: -4px;\n" +
"}\n" +
".weui_media_box {\n" +
"  padding: 15px;\n" +
"  position: relative;\n" +
"}\n" +
".weui_media_box:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"  left: 15px;\n" +
"}\n" +
".weui_media_box:first-child:before {\n" +
"  display: none;\n" +
"}\n" +
"a.weui_media_box {\n" +
"  color: #000000;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
"a.weui_media_box:active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui_media_box .weui_media_title {\n" +
"  font-weight: 400;\n" +
"  font-size: 17px;\n" +
"  width: auto;\n" +
"  overflow: hidden;\n" +
"  text-overflow: ellipsis;\n" +
"  white-space: nowrap;\n" +
"  word-wrap: normal;\n" +
"  word-wrap: break-word;\n" +
"  word-break: break-all;\n" +
"}\n" +
".weui_media_box .weui_media_desc {\n" +
"  color: #999999;\n" +
"  font-size: 13px;\n" +
"  line-height: 1.2;\n" +
"  overflow: hidden;\n" +
"  text-overflow: ellipsis;\n" +
"  display: -webkit-box;\n" +
"  -webkit-box-orient: vertical;\n" +
"  -webkit-line-clamp: 2;\n" +
"}\n" +
".weui_media_box.weui_media_text .weui_media_title {\n" +
"  margin-bottom: 8px;\n" +
"}\n" +
".weui_media_box.weui_media_text .weui_media_info {\n" +
"  margin-top: 15px;\n" +
"  padding-bottom: 5px;\n" +
"  font-size: 13px;\n" +
"  color: #CECECE;\n" +
"  line-height: 1em;\n" +
"  list-style: none;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui_media_box.weui_media_text .weui_media_info_meta {\n" +
"  float: left;\n" +
"  padding-right: 1em;\n" +
"}\n" +
".weui_media_box.weui_media_text .weui_media_info_meta.weui_media_info_meta_extra {\n" +
"  padding-left: 1em;\n" +
"  border-left: 1px solid #CECECE;\n" +
"}\n" +
".weui_media_box.weui_media_appmsg {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"  -webkit-box-align: center;\n" +
"  -webkit-align-items: center;\n" +
"      -ms-flex-align: center;\n" +
"          align-items: center;\n" +
"}\n" +
".weui_media_box.weui_media_appmsg .weui_media_hd {\n" +
"  margin-right: .8em;\n" +
"  width: 60px;\n" +
"  height: 60px;\n" +
"  line-height: 60px;\n" +
"  text-align: center;\n" +
"}\n" +
".weui_media_box.weui_media_appmsg .weui_media_appmsg_thumb {\n" +
"  width: 100%;\n" +
"  max-height: 100%;\n" +
"  vertical-align: middle;\n" +
"}\n" +
".weui_media_box.weui_media_appmsg .weui_media_bd {\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"      -ms-flex: 1;\n" +
"          flex: 1;\n" +
"  min-width: 0;\n" +
"}\n" +
".weui_media_box.weui_media_small_appmsg {\n" +
"  padding: 0;\n" +
"}\n" +
".weui_media_box.weui_media_small_appmsg .weui_cells {\n" +
"  margin-top: 0;\n" +
"}\n" +
".weui_media_box.weui_media_small_appmsg .weui_cells:before {\n" +
"  display: none;\n" +
"}\n" +
".weui_grids {\n" +
"  position: relative;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui_grids:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_grids:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  height: 100%;\n" +
"  border-left: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui_grid {\n" +
"  position: relative;\n" +
"  float: left;\n" +
"  padding: 20px 10px;\n" +
"  width: 33.33333333%;\n" +
"  box-sizing: border-box;\n" +
"}\n" +
".weui_grid:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  right: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  height: 100%;\n" +
"  border-right: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 100% 0;\n" +
"          transform-origin: 100% 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui_grid:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_grid:active {\n" +
"  background-color: #E4E4E4;\n" +
"}\n" +
".weui_grid_icon {\n" +
"  width: 28px;\n" +
"  height: 28px;\n" +
"  margin: 0 auto;\n" +
"}\n" +
".weui_grid_icon img {\n" +
"  display: block;\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"}\n" +
".weui_grid_icon + .weui_grid_label {\n" +
"  margin-top: 5px;\n" +
"}\n" +
".weui_grid_label {\n" +
"  display: block;\n" +
"  text-align: center;\n" +
"  color: #000;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui_dialog {\n" +
"  position: fixed;\n" +
"  z-index: 13;\n" +
"  width: 85%;\n" +
"  top: 50%;\n" +
"  left: 50%;\n" +
"  -webkit-transform: translate(-50%, -50%);\n" +
"          transform: translate(-50%, -50%);\n" +
"  background-color: #FAFAFC;\n" +
"  text-align: center;\n" +
"  border-radius: 3px;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui_dialog_confirm .weui_dialog .weui_dialog_hd {\n" +
"  padding: 1.2em 20px .5em;\n" +
"}\n" +
".weui_dialog_confirm .weui_dialog .weui_dialog_bd {\n" +
"  text-align: left;\n" +
"}\n" +
".weui_dialog_hd {\n" +
"  padding: 1.2em 0 .5em;\n" +
"}\n" +
".weui_dialog_title {\n" +
"  font-weight: 400;\n" +
"  font-size: 17px;\n" +
"}\n" +
".weui_dialog_bd {\n" +
"  padding: 0 20px;\n" +
"  font-size: 15px;\n" +
"  color: #888;\n" +
"  word-wrap: break-word;\n" +
"  word-break: break-all;\n" +
"}\n" +
".weui_dialog_ft {\n" +
"  position: relative;\n" +
"  line-height: 42px;\n" +
"  margin-top: 20px;\n" +
"  font-size: 17px;\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"}\n" +
".weui_dialog_ft a {\n" +
"  display: block;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"      -ms-flex: 1;\n" +
"          flex: 1;\n" +
"  color: #3CC51F;\n" +
"  text-decoration: none;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui_dialog_ft a:active {\n" +
"  background-color: #EEEEEE;\n" +
"}\n" +
".weui_dialog_ft:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D5D5D6;\n" +
"  color: #D5D5D6;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_dialog_confirm .weui_dialog_ft a {\n" +
"  position: relative;\n" +
"}\n" +
".weui_dialog_confirm .weui_dialog_ft a:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  height: 100%;\n" +
"  border-left: 1px solid #D5D5D6;\n" +
"  color: #D5D5D6;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui_dialog_confirm .weui_dialog_ft a:first-child:after {\n" +
"  display: none;\n" +
"}\n" +
".weui_btn_dialog.default {\n" +
"  color: #353535;\n" +
"}\n" +
".weui_btn_dialog.primary {\n" +
"  color: #0BB20C;\n" +
"}\n" +
"@media screen and (min-width: 1024px) {\n" +
"  .weui_dialog {\n" +
"    width: 35%;\n" +
"  }\n" +
"}\n" +
".weui_toast {\n" +
"  position: fixed;\n" +
"  z-index: 3;\n" +
"  width: 7.6em;\n" +
"  min-height: 7.6em;\n" +
"  top: 180px;\n" +
"  left: 50%;\n" +
"  margin-left: -3.8em;\n" +
"  background: rgba(40, 40, 40, 0.75);\n" +
"  text-align: center;\n" +
"  border-radius: 5px;\n" +
"  color: #FFFFFF;\n" +
"}\n" +
".weui_icon_toast {\n" +
"  margin: 22px 0 0;\n" +
"  display: block;\n" +
"}\n" +
".weui_icon_toast:before {\n" +
"  content: '\\EA08';\n" +
"  color: #FFFFFF;\n" +
"  font-size: 55px;\n" +
"}\n" +
".weui_toast_content {\n" +
"  margin: 0 0 15px;\n" +
"}\n" +
".weui_loading_toast .weui_toast_content {\n" +
"  margin-top: 64%;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui_loading {\n" +
"  position: absolute;\n" +
"  width: 0px;\n" +
"  z-index: 2000000000;\n" +
"  left: 50%;\n" +
"  top: 38%;\n" +
"}\n" +
".weui_loading_leaf {\n" +
"  position: absolute;\n" +
"  top: -1px;\n" +
"  opacity: 0.25;\n" +
"}\n" +
".weui_loading_leaf:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  width: 8.14px;\n" +
"  height: 3.08px;\n" +
"  background: #d1d1d5;\n" +
"  box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;\n" +
"  border-radius: 1px;\n" +
"  -webkit-transform-origin: left 50% 0px;\n" +
"          transform-origin: left 50% 0px;\n" +
"}\n" +
".weui_loading_leaf_0 {\n" +
"  -webkit-animation: opacity-60-25-0-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-0-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_0:before {\n" +
"  -webkit-transform: rotate(0deg) translate(7.92px, 0px);\n" +
"          transform: rotate(0deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_1 {\n" +
"  -webkit-animation: opacity-60-25-1-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-1-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_1:before {\n" +
"  -webkit-transform: rotate(30deg) translate(7.92px, 0px);\n" +
"          transform: rotate(30deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_2 {\n" +
"  -webkit-animation: opacity-60-25-2-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-2-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_2:before {\n" +
"  -webkit-transform: rotate(60deg) translate(7.92px, 0px);\n" +
"          transform: rotate(60deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_3 {\n" +
"  -webkit-animation: opacity-60-25-3-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-3-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_3:before {\n" +
"  -webkit-transform: rotate(90deg) translate(7.92px, 0px);\n" +
"          transform: rotate(90deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_4 {\n" +
"  -webkit-animation: opacity-60-25-4-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-4-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_4:before {\n" +
"  -webkit-transform: rotate(120deg) translate(7.92px, 0px);\n" +
"          transform: rotate(120deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_5 {\n" +
"  -webkit-animation: opacity-60-25-5-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-5-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_5:before {\n" +
"  -webkit-transform: rotate(150deg) translate(7.92px, 0px);\n" +
"          transform: rotate(150deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_6 {\n" +
"  -webkit-animation: opacity-60-25-6-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-6-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_6:before {\n" +
"  -webkit-transform: rotate(180deg) translate(7.92px, 0px);\n" +
"          transform: rotate(180deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_7 {\n" +
"  -webkit-animation: opacity-60-25-7-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-7-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_7:before {\n" +
"  -webkit-transform: rotate(210deg) translate(7.92px, 0px);\n" +
"          transform: rotate(210deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_8 {\n" +
"  -webkit-animation: opacity-60-25-8-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-8-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_8:before {\n" +
"  -webkit-transform: rotate(240deg) translate(7.92px, 0px);\n" +
"          transform: rotate(240deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_9 {\n" +
"  -webkit-animation: opacity-60-25-9-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-9-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_9:before {\n" +
"  -webkit-transform: rotate(270deg) translate(7.92px, 0px);\n" +
"          transform: rotate(270deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_10 {\n" +
"  -webkit-animation: opacity-60-25-10-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-10-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_10:before {\n" +
"  -webkit-transform: rotate(300deg) translate(7.92px, 0px);\n" +
"          transform: rotate(300deg) translate(7.92px, 0px);\n" +
"}\n" +
".weui_loading_leaf_11 {\n" +
"  -webkit-animation: opacity-60-25-11-12 1.25s linear infinite;\n" +
"          animation: opacity-60-25-11-12 1.25s linear infinite;\n" +
"}\n" +
".weui_loading_leaf_11:before {\n" +
"  -webkit-transform: rotate(330deg) translate(7.92px, 0px);\n" +
"          transform: rotate(330deg) translate(7.92px, 0px);\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-0-12 {\n" +
"  0% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  0.01% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  0.02% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  60.01% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-1-12 {\n" +
"  0% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  8.34333% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  8.35333% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  68.3433% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-2-12 {\n" +
"  0% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  16.6767% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  16.6867% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  76.6767% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-3-12 {\n" +
"  0% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  25.01% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  25.02% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  85.01% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-4-12 {\n" +
"  0% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  33.3433% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  33.3533% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  93.3433% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-5-12 {\n" +
"  0% {\n" +
"    opacity: 0.270958333333333;\n" +
"  }\n" +
"  41.6767% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  41.6867% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  1.67667% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.270958333333333;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-6-12 {\n" +
"  0% {\n" +
"    opacity: 0.375125;\n" +
"  }\n" +
"  50.01% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  50.02% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  10.01% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.375125;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-7-12 {\n" +
"  0% {\n" +
"    opacity: 0.479291666666667;\n" +
"  }\n" +
"  58.3433% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  58.3533% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  18.3433% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.479291666666667;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-8-12 {\n" +
"  0% {\n" +
"    opacity: 0.583458333333333;\n" +
"  }\n" +
"  66.6767% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  66.6867% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  26.6767% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.583458333333333;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-9-12 {\n" +
"  0% {\n" +
"    opacity: 0.687625;\n" +
"  }\n" +
"  75.01% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  75.02% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  35.01% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.687625;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-10-12 {\n" +
"  0% {\n" +
"    opacity: 0.791791666666667;\n" +
"  }\n" +
"  83.3433% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  83.3533% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  43.3433% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.791791666666667;\n" +
"  }\n" +
"}\n" +
"@-webkit-keyframes opacity-60-25-11-12 {\n" +
"  0% {\n" +
"    opacity: 0.895958333333333;\n" +
"  }\n" +
"  91.6767% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  91.6867% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  51.6767% {\n" +
"    opacity: 0.25;\n" +
"  }\n" +
"  100% {\n" +
"    opacity: 0.895958333333333;\n" +
"  }\n" +
"}\n" +
".weui_mask {\n" +
"  position: fixed;\n" +
"  z-index: 1;\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  background: rgba(0, 0, 0, 0.6);\n" +
"}\n" +
".weui_mask_transparent {\n" +
"  position: fixed;\n" +
"  z-index: 1;\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"}\n" +
".weui_mask_transition {\n" +
"  display: none;\n" +
"  position: fixed;\n" +
"  z-index: 1;\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  background: rgba(0, 0, 0, 0);\n" +
"  -webkit-transition: background .3s;\n" +
"  transition: background .3s;\n" +
"}\n" +
".weui_fade_toggle {\n" +
"  background: rgba(0, 0, 0, 0.6);\n" +
"}\n" +
".weui_actionsheet {\n" +
"  position: fixed;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  -webkit-transform: translate(0, 100%);\n" +
"          transform: translate(0, 100%);\n" +
"  -webkit-backface-visibility: hidden;\n" +
"          backface-visibility: hidden;\n" +
"  z-index: 2;\n" +
"  width: 100%;\n" +
"  background-color: #EFEFF4;\n" +
"  -webkit-transition: -webkit-transform .3s;\n" +
"  transition: -webkit-transform .3s;\n" +
"  transition: transform .3s;\n" +
"  transition: transform .3s, -webkit-transform .3s;\n" +
"}\n" +
".weui_actionsheet_menu {\n" +
"  background-color: #FFFFFF;\n" +
"}\n" +
".weui_actionsheet_action {\n" +
"  margin-top: 6px;\n" +
"  background-color: #FFFFFF;\n" +
"}\n" +
".weui_actionsheet_cell {\n" +
"  position: relative;\n" +
"  padding: 10px 0;\n" +
"  text-align: center;\n" +
"  font-size: 18px;\n" +
"}\n" +
".weui_actionsheet_cell:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_actionsheet_cell:active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui_actionsheet_cell:first-child:before {\n" +
"  display: none;\n" +
"}\n" +
".weui_actionsheet_toggle {\n" +
"  -webkit-transform: translate(0, 0);\n" +
"          transform: translate(0, 0);\n" +
"}\n" +
".weui_search_bar {\n" +
"  position: relative;\n" +
"  padding: 8px 10px;\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"  box-sizing: border-box;\n" +
"  background-color: #EFEFF4;\n" +
"  z-index: 2;\n" +
"}\n" +
".weui_search_bar:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #C7C7C7;\n" +
"  color: #C7C7C7;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_search_bar:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  width: 100%;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #C7C7C7;\n" +
"  color: #C7C7C7;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui_search_bar.weui_search_focusing .weui_search_cancel {\n" +
"  display: block;\n" +
"}\n" +
".weui_search_bar.weui_search_focusing .weui_search_text {\n" +
"  display: none;\n" +
"}\n" +
".weui_search_outer {\n" +
"  position: relative;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: auto;\n" +
"      -ms-flex: auto;\n" +
"          flex: auto;\n" +
"  background-color: #EFEFF4;\n" +
"}\n" +
".weui_search_outer:after {\n" +
"  content: '';\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 200%;\n" +
"  height: 200%;\n" +
"  -webkit-transform: scale(0.5);\n" +
"          transform: scale(0.5);\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  border-radius: 10px;\n" +
"  border: 1px solid #E6E6EA;\n" +
"  box-sizing: border-box;\n" +
"  background: #FFFFFF;\n" +
"}\n" +
".weui_search_inner {\n" +
"  position: relative;\n" +
"  padding-left: 30px;\n" +
"  padding-right: 30px;\n" +
"  height: 100%;\n" +
"  width: 100%;\n" +
"  box-sizing: border-box;\n" +
"  z-index: 1;\n" +
"}\n" +
".weui_search_inner .weui_search_input {\n" +
"  padding: 4px 0;\n" +
"  width: 100%;\n" +
"  height: 1.42857143em;\n" +
"  border: 0;\n" +
"  font-size: 14px;\n" +
"  line-height: 1.42857143em;\n" +
"  box-sizing: content-box;\n" +
"  background: transparent;\n" +
"}\n" +
".weui_search_inner .weui_search_input:focus {\n" +
"  outline: none;\n" +
"}\n" +
".weui_search_inner .weui_icon_search {\n" +
"  position: absolute;\n" +
"  left: 10px;\n" +
"  top: -2px;\n" +
"  line-height: 28px;\n" +
"}\n" +
".weui_search_inner .weui_icon_clear {\n" +
"  position: absolute;\n" +
"  top: -2px;\n" +
"  right: 0;\n" +
"  padding: 0 10px;\n" +
"  line-height: 28px;\n" +
"}\n" +
".weui_search_text {\n" +
"  position: absolute;\n" +
"  top: 1px;\n" +
"  right: 1px;\n" +
"  bottom: 1px;\n" +
"  left: 1px;\n" +
"  z-index: 2;\n" +
"  border-radius: 3px;\n" +
"  text-align: center;\n" +
"  color: #9B9B9B;\n" +
"  background: #FFFFFF;\n" +
"}\n" +
".weui_search_text span {\n" +
"  display: inline-block;\n" +
"  font-size: 14px;\n" +
"  vertical-align: middle;\n" +
"}\n" +
".weui_search_text .weui_icon_search {\n" +
"  margin-right: 5px;\n" +
"}\n" +
".weui_search_cancel {\n" +
"  display: none;\n" +
"  margin-left: 10px;\n" +
"  line-height: 28px;\n" +
"  white-space: nowrap;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui_search_input:not(:valid) ~ .weui_icon_clear {\n" +
"  display: none;\n" +
"}\n" +
"input[type=\"search\"]::-webkit-search-decoration,\n" +
"input[type=\"search\"]::-webkit-search-cancel-button,\n" +
"input[type=\"search\"]::-webkit-search-results-button,\n" +
"input[type=\"search\"]::-webkit-search-results-decoration {\n" +
"  display: none;\n" +
"}"));
