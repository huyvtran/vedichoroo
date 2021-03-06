/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ionic-angular/umd/components/toolbar/toolbar-header";
import * as i3 from "ionic-angular/umd/config/config";
import * as i4 from "ionic-angular/umd/navigation/view-controller";
import * as i5 from "../../../node_modules/ionic-angular/umd/components/toolbar/toolbar.ngfactory";
import * as i6 from "ionic-angular/umd/components/toolbar/toolbar";
import * as i7 from "ionic-angular/umd/components/menu/menu-toggle";
import * as i8 from "ionic-angular/umd/components/app/menu-controller";
import * as i9 from "ionic-angular/umd/components/button/button";
import * as i10 from "ionic-angular/umd/components/toolbar/navbar";
import * as i11 from "ionic-angular/umd/components/toolbar/toolbar-item";
import * as i12 from "ionic-angular/umd/components/icon/icon";
import * as i13 from "../../../node_modules/ionic-angular/umd/components/toolbar/toolbar-title.ngfactory";
import * as i14 from "ionic-angular/umd/components/toolbar/toolbar-title";
import * as i15 from "../../../node_modules/ionic-angular/umd/components/content/content.ngfactory";
import * as i16 from "ionic-angular/umd/components/content/content";
import * as i17 from "ionic-angular/umd/platform/platform";
import * as i18 from "ionic-angular/umd/platform/dom-controller";
import * as i19 from "ionic-angular/umd/components/app/app";
import * as i20 from "ionic-angular/umd/platform/keyboard";
import * as i21 from "ionic-angular/umd/navigation/nav-controller";
import * as i22 from "ionic-angular/umd/components/card/card";
import * as i23 from "./dailyforecast";
import * as i24 from "ionic-angular/umd/navigation/nav-params";
import * as i25 from "../../app/share.service";
import * as i26 from "../../app/horoscope.service";
var styles_DailyForecastPage = [];
var RenderType_DailyForecastPage = i0.ɵcrt({ encapsulation: 2, styles: styles_DailyForecastPage, data: {} });
export { RenderType_DailyForecastPage as RenderType_DailyForecastPage };
export function View_DailyForecastPage_0(_l) { return i0.ɵvid(0, [i0.ɵpid(0, i1.DatePipe, [i0.LOCALE_ID]), (_l()(), i0.ɵeld(1, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), i0.ɵdid(2, 16384, null, 0, i2.Header, [i3.Config, i0.ElementRef, i0.Renderer, [2, i4.ViewController]], null, null), (_l()(), i0.ɵeld(3, 0, null, null, 10, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, i5.View_Toolbar_0, i5.RenderType_Toolbar)), i0.ɵdid(4, 49152, null, 0, i6.Toolbar, [i3.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵeld(5, 0, null, 0, 5, "ion-button", [["left", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 6).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(6, 1064960, null, 0, i7.MenuToggle, [i8.MenuController, [2, i4.ViewController], [2, i9.Button], [2, i10.Navbar]], { menuToggle: [0, "menuToggle"] }, null), i0.ɵdid(7, 16384, null, 1, i11.ToolbarItem, [i3.Config, i0.ElementRef, i0.Renderer, [2, i6.Toolbar], [2, i10.Navbar]], null, null), i0.ɵqud(603979776, 1, { _buttons: 1 }), (_l()(), i0.ɵeld(9, 0, null, null, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(10, 147456, null, 0, i12.Icon, [i3.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵeld(11, 0, null, 3, 2, "ion-title", [], null, null, null, i13.View_ToolbarTitle_0, i13.RenderType_ToolbarTitle)), i0.ɵdid(12, 49152, null, 0, i14.ToolbarTitle, [i3.Config, i0.ElementRef, i0.Renderer, [2, i6.Toolbar], [2, i10.Navbar]], null, null), (_l()(), i0.ɵeld(13, 0, null, 0, 0, "img", [["alt", "logo"], ["height", "24"], ["src", "https://78.media.tumblr.com/f068e2426e16157aba924763fabd6234/tumblr_pbdnjgGRLE1xp0noco1_250.png"]], null, null, null, null, null)), (_l()(), i0.ɵeld(14, 0, null, null, 8, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i15.View_Content_0, i15.RenderType_Content)), i0.ɵdid(15, 4374528, null, 0, i16.Content, [i3.Config, i17.Platform, i18.DomController, i0.ElementRef, i0.Renderer, i19.App, i20.Keyboard, i0.NgZone, [2, i4.ViewController], [2, i21.NavController]], null, null), (_l()(), i0.ɵeld(16, 0, null, 1, 6, "ion-card", [], null, null, null, null, null)), i0.ɵdid(17, 16384, null, 0, i22.Card, [i3.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵeld(18, 0, null, null, 0, "img", [["alt", "Nature background"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵeld(19, 0, null, null, 2, "div", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i0.ɵted(20, null, ["", " : ", ""])), i0.ɵppd(21, 2), (_l()(), i0.ɵeld(22, 0, null, null, 0, "div", [["class", "card-subtitle"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 6, 0, currVal_2); var currVal_4 = "menu"; _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0); var currVal_1 = i0.ɵnov(_v, 6).isHidden; _ck(_v, 5, 0, currVal_1); var currVal_3 = i0.ɵnov(_v, 10)._hidden; _ck(_v, 9, 0, currVal_3); var currVal_5 = i0.ɵnov(_v, 15).statusbarPadding; var currVal_6 = i0.ɵnov(_v, 15)._hasRefresher; _ck(_v, 14, 0, currVal_5, currVal_6); var currVal_7 = _co.backgroundImg; _ck(_v, 18, 0, currVal_7); var currVal_8 = _co.rashi; var currVal_9 = i0.ɵunv(_v, 20, 1, _ck(_v, 21, 0, i0.ɵnov(_v, 0), _co.today, "mediumDate")); _ck(_v, 20, 0, currVal_8, currVal_9); var currVal_10 = _co.info; _ck(_v, 22, 0, currVal_10); }); }
export function View_DailyForecastPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-dailyforecast", [], null, null, null, View_DailyForecastPage_0, RenderType_DailyForecastPage)), i0.ɵdid(1, 49152, null, 0, i23.DailyForecastPage, [i21.NavController, i24.NavParams, i25.ShareService, i26.HoroscopeService], null, null)], null, null); }
var DailyForecastPageNgFactory = i0.ɵccf("page-dailyforecast", i23.DailyForecastPage, View_DailyForecastPage_Host_0, {}, {}, []);
export { DailyForecastPageNgFactory as DailyForecastPageNgFactory };
//# sourceMappingURL=dailyforecast.ngfactory.js.map