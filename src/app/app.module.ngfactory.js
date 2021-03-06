/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./app.module";
import * as i2 from "ionic-angular/umd/components/app/app-root";
import * as i3 from "../../node_modules/ionic-angular/umd/components/action-sheet/action-sheet-component.ngfactory";
import * as i4 from "../../node_modules/ionic-angular/umd/components/alert/alert-component.ngfactory";
import * as i5 from "../../node_modules/ionic-angular/umd/components/app/app-root.ngfactory";
import * as i6 from "../../node_modules/ionic-angular/umd/components/loading/loading-component.ngfactory";
import * as i7 from "../../node_modules/ionic-angular/umd/components/modal/modal-component.ngfactory";
import * as i8 from "../../node_modules/ionic-angular/umd/components/picker/picker-component.ngfactory";
import * as i9 from "../../node_modules/ionic-angular/umd/components/popover/popover-component.ngfactory";
import * as i10 from "../../node_modules/ionic-angular/umd/components/select/select-popover-component.ngfactory";
import * as i11 from "../../node_modules/ionic-angular/umd/components/toast/toast-component.ngfactory";
import * as i12 from "./app.component.ngfactory";
import * as i13 from "../pages/personal-details/personal-details.ngfactory";
import * as i14 from "../pages/item-details/item-details.ngfactory";
import * as i15 from "../pages/list/list.ngfactory";
import * as i16 from "../pages/autocomplete/autocomplete.ngfactory";
import * as i17 from "../pages/horoscope/horoscope.ngfactory";
import * as i18 from "../pages/dailyforecast/dailyforecast.ngfactory";
import * as i19 from "../pages/lovehoro/lovehoro.ngfactory";
import * as i20 from "../pages/rajayoga/rajayoga.ngfactory";
import * as i21 from "../pages/star-const/star-const.ngfactory";
import * as i22 from "../pages/stories/stories.ngfactory";
import * as i23 from "../pages/article/article.ngfactory";
import * as i24 from "../pages/kp-astro/kp-astro.ngfactory";
import * as i25 from "../pages/predictions/predictions.ngfactory";
import * as i26 from "../pages/subscribe/subscribe.ngfactory";
import * as i27 from "../pages/credits/credits.ngfactory";
import * as i28 from "../pages/divcharts/divcharts.ngfactory";
import * as i29 from "../pages/chart-analysis/chart-analysis.ngfactory";
import * as i30 from "../pages/choose-lan/choose-lan.ngfactory";
import * as i31 from "../pages/privacy/privacy.ngfactory";
import * as i32 from "../pages/help-desk/help-desk.ngfactory";
import * as i33 from "../pages/mypubz-resp/mypubz-resp.ngfactory";
import * as i34 from "../pages/panchang/panchang.ngfactory";
import * as i35 from "../pages/notifications/notifications.ngfactory";
import * as i36 from "@angular/common";
import * as i37 from "@angular/platform-browser";
import * as i38 from "ionic-angular/umd/gestures/gesture-config";
import * as i39 from "@angular/common/http";
import * as i40 from "@angular/forms";
import * as i41 from "ionic-angular/umd/components/action-sheet/action-sheet-controller";
import * as i42 from "ionic-angular/umd/components/app/app";
import * as i43 from "ionic-angular/umd/config/config";
import * as i44 from "ionic-angular/umd/components/alert/alert-controller";
import * as i45 from "ionic-angular/umd/util/events";
import * as i46 from "ionic-angular/umd/util/form";
import * as i47 from "ionic-angular/umd/tap-click/haptic";
import * as i48 from "ionic-angular/umd/platform/platform";
import * as i49 from "ionic-angular/umd/platform/keyboard";
import * as i50 from "ionic-angular/umd/platform/dom-controller";
import * as i51 from "ionic-angular/umd/components/loading/loading-controller";
import * as i52 from "ionic-angular/umd/module";
import * as i53 from "ionic-angular/umd/navigation/url-serializer";
import * as i54 from "ionic-angular/umd/navigation/deep-linker";
import * as i55 from "ionic-angular/umd/util/module-loader";
import * as i56 from "ionic-angular/umd/components/modal/modal-controller";
import * as i57 from "ionic-angular/umd/components/picker/picker-controller";
import * as i58 from "ionic-angular/umd/components/popover/popover-controller";
import * as i59 from "ionic-angular/umd/tap-click/tap-click";
import * as i60 from "ionic-angular/umd/gestures/gesture-controller";
import * as i61 from "ionic-angular/umd/components/toast/toast-controller";
import * as i62 from "ionic-angular/umd/transitions/transition-controller";
import * as i63 from "@ionic/storage";
import * as i64 from "@ngx-translate/core";
import * as i65 from "@ionic-native/device";
import * as i66 from "@ionic-native/file";
import * as i67 from "@ionic-native/in-app-purchase-2";
import * as i68 from "@ionic-native/status-bar";
import * as i69 from "@ionic-native/splash-screen";
import * as i70 from "./horoscope.service";
import * as i71 from "./share.service";
import * as i72 from "./getjson.service";
import * as i73 from "@ionic-native/app-rate";
import * as i74 from "../providers/language.service";
import * as i75 from "ionic-angular/umd/util/ionic-error-handler";
import * as i76 from "ionic-angular/umd/platform/platform-registry";
import * as i77 from "ionic-angular/umd/components/app/menu-controller";
import * as i78 from "ionic-angular/umd/util/ng-module-loader";
import * as i79 from "ionic-angular/umd/config/mode-registry";
import * as i80 from "./app.component";
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.IonicApp], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ActionSheetCmpNgFactory, i4.AlertCmpNgFactory, i5.IonicAppNgFactory, i6.LoadingCmpNgFactory, i7.ModalCmpNgFactory, i8.PickerCmpNgFactory, i9.PopoverCmpNgFactory, i10.SelectPopoverNgFactory, i11.ToastCmpNgFactory, i12.MyAppNgFactory, i13.PersonalDetailsPageNgFactory, i14.ItemDetailsPageNgFactory, i15.ListPageNgFactory, i16.AutocompletePageNgFactory, i17.HoroscopePageNgFactory, i18.DailyForecastPageNgFactory, i19.LovehoroPageNgFactory, i20.RajayogaPageNgFactory, i21.StarConstPageNgFactory, i22.StoriesPageNgFactory, i23.ArticlePageNgFactory, i24.KpAstroPageNgFactory, i25.PredictionsPageNgFactory, i26.SubscribePageNgFactory, i27.CreditsPageNgFactory, i28.DivchartsPageNgFactory, i29.ChartAnalysisPageNgFactory, i30.ChooseLanPageNgFactory, i31.PrivacyPageNgFactory, i32.HelpDeskPageNgFactory, i33.MypubzRespPageNgFactory, i34.PanchangPageNgFactory, i35.NotificationsPageNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_k, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i36.NgLocalization, i36.NgLocaleLocalization, [i0.LOCALE_ID, [2, i36.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵangular_packages_core_core_f, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_i, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(4608, i37.DomSanitizer, i37.ɵDomSanitizerImpl, [i36.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i37.DomSanitizer]), i0.ɵmpd(4608, i37.HAMMER_GESTURE_CONFIG, i38.IonicGestureConfig, []), i0.ɵmpd(5120, i37.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new i37.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i37.ɵKeyEventsPlugin(p1_0), new i37.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3)]; }, [i36.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i36.DOCUMENT, i36.DOCUMENT, i37.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i37.HAMMER_LOADER]]), i0.ɵmpd(4608, i37.EventManager, i37.EventManager, [i37.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i37.ɵDomSharedStylesHost, i37.ɵDomSharedStylesHost, [i36.DOCUMENT]), i0.ɵmpd(4608, i37.ɵDomRendererFactory2, i37.ɵDomRendererFactory2, [i37.EventManager, i37.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i37.ɵDomRendererFactory2]), i0.ɵmpd(6144, i37.ɵSharedStylesHost, null, [i37.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i39.HttpXsrfTokenExtractor, i39.ɵangular_packages_common_http_http_g, [i36.DOCUMENT, i0.PLATFORM_ID, i39.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i39.ɵangular_packages_common_http_http_h, i39.ɵangular_packages_common_http_http_h, [i39.HttpXsrfTokenExtractor, i39.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i39.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i39.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i39.ɵangular_packages_common_http_http_d, i39.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i39.XhrFactory, null, [i39.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i39.HttpXhrBackend, i39.HttpXhrBackend, [i39.XhrFactory]), i0.ɵmpd(6144, i39.HttpBackend, null, [i39.HttpXhrBackend]), i0.ɵmpd(4608, i39.HttpHandler, i39.ɵHttpInterceptingHandler, [i39.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i39.HttpClient, i39.HttpClient, [i39.HttpHandler]), i0.ɵmpd(4608, i40.ɵangular_packages_forms_forms_j, i40.ɵangular_packages_forms_forms_j, []), i0.ɵmpd(4608, i40.FormBuilder, i40.FormBuilder, []), i0.ɵmpd(4608, i41.ActionSheetController, i41.ActionSheetController, [i42.App, i43.Config]), i0.ɵmpd(4608, i44.AlertController, i44.AlertController, [i42.App, i43.Config]), i0.ɵmpd(4608, i45.Events, i45.Events, []), i0.ɵmpd(4608, i46.Form, i46.Form, []), i0.ɵmpd(4608, i47.Haptic, i47.Haptic, [i48.Platform]), i0.ɵmpd(4608, i49.Keyboard, i49.Keyboard, [i43.Config, i48.Platform, i0.NgZone, i50.DomController]), i0.ɵmpd(4608, i51.LoadingController, i51.LoadingController, [i42.App, i43.Config]), i0.ɵmpd(5120, i36.LocationStrategy, i52.provideLocationStrategy, [i36.PlatformLocation, [2, i36.APP_BASE_HREF], i43.Config]), i0.ɵmpd(4608, i36.Location, i36.Location, [i36.LocationStrategy]), i0.ɵmpd(5120, i53.UrlSerializer, i53.setupUrlSerializer, [i42.App, i53.DeepLinkConfigToken]), i0.ɵmpd(5120, i54.DeepLinker, i54.setupDeepLinker, [i42.App, i53.UrlSerializer, i36.Location, i55.ModuleLoader, i0.ComponentFactoryResolver]), i0.ɵmpd(4608, i56.ModalController, i56.ModalController, [i42.App, i43.Config, i54.DeepLinker]), i0.ɵmpd(4608, i57.PickerController, i57.PickerController, [i42.App, i43.Config]), i0.ɵmpd(4608, i58.PopoverController, i58.PopoverController, [i42.App, i43.Config, i54.DeepLinker]), i0.ɵmpd(4608, i59.TapClick, i59.TapClick, [i43.Config, i48.Platform, i50.DomController, i42.App, i60.GestureController]), i0.ɵmpd(4608, i61.ToastController, i61.ToastController, [i42.App, i43.Config]), i0.ɵmpd(4608, i62.TransitionController, i62.TransitionController, [i48.Platform, i43.Config]), i0.ɵmpd(5120, i63.Storage, i63.ɵa, [i63.StorageConfigToken]), i0.ɵmpd(5120, i64.TranslateLoader, i1.ɵ0, [i39.HttpClient]), i0.ɵmpd(4608, i64.TranslateCompiler, i64.TranslateFakeCompiler, []), i0.ɵmpd(4608, i64.TranslateParser, i64.TranslateDefaultParser, []), i0.ɵmpd(4608, i64.MissingTranslationHandler, i64.FakeMissingTranslationHandler, []), i0.ɵmpd(4608, i64.TranslateStore, i64.TranslateStore, []), i0.ɵmpd(4608, i64.TranslateService, i64.TranslateService, [i64.TranslateStore, i64.TranslateLoader, i64.TranslateCompiler, i64.TranslateParser, i64.MissingTranslationHandler, i64.USE_DEFAULT_LANG, i64.USE_STORE]), i0.ɵmpd(4608, i65.Device, i65.Device, []), i0.ɵmpd(4608, i66.File, i66.File, []), i0.ɵmpd(4608, i67.InAppPurchase2, i67.InAppPurchase2, []), i0.ɵmpd(4608, i68.StatusBar, i68.StatusBar, []), i0.ɵmpd(4608, i69.SplashScreen, i69.SplashScreen, []), i0.ɵmpd(4608, i70.HoroscopeService, i70.HoroscopeService, [i39.HttpClient]), i0.ɵmpd(4608, i71.ShareService, i71.ShareService, [i63.Storage, i45.Events]), i0.ɵmpd(4608, i72.GetJsonService, i72.GetJsonService, [i39.HttpClient]), i0.ɵmpd(4608, i73.AppRate, i73.AppRate, []), i0.ɵmpd(4608, i74.LanguageService, i74.LanguageService, []), i0.ɵmpd(1073742336, i36.CommonModule, i36.CommonModule, []), i0.ɵmpd(512, i0.ErrorHandler, i75.IonicErrorHandler, []), i0.ɵmpd(256, i43.ConfigToken, null, []), i0.ɵmpd(1024, i76.PlatformConfigToken, i76.providePlatformConfigs, []), i0.ɵmpd(1024, i48.Platform, i48.setupPlatform, [i37.DOCUMENT, i76.PlatformConfigToken, i0.NgZone]), i0.ɵmpd(1024, i43.Config, i43.setupConfig, [i43.ConfigToken, i48.Platform]), i0.ɵmpd(512, i50.DomController, i50.DomController, [i48.Platform]), i0.ɵmpd(512, i77.MenuController, i77.MenuController, []), i0.ɵmpd(512, i42.App, i42.App, [i43.Config, i48.Platform, [2, i77.MenuController]]), i0.ɵmpd(512, i60.GestureController, i60.GestureController, [i42.App]), i0.ɵmpd(256, i53.DeepLinkConfigToken, null, []), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i78.NgModuleLoader, i78.NgModuleLoader, [i0.Compiler]), i0.ɵmpd(1024, i55.ModuleLoader, i55.provideModuleLoader, [i78.NgModuleLoader, i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [i37.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i79.registerModeConfigs(p1_0), i45.setupProvideEvents(p2_0, p2_1), i59.setupTapClick(p3_0, p3_1, p3_2, p3_3, p3_4), i55.setupPreloading(p4_0, p4_1, p4_2, p4_3)]; }, [[2, i0.NgProbeToken], i43.Config, i48.Platform, i50.DomController, i43.Config, i48.Platform, i50.DomController, i42.App, i60.GestureController, i43.Config, i53.DeepLinkConfigToken, i55.ModuleLoader, i0.NgZone]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i37.BrowserModule, i37.BrowserModule, [[3, i37.BrowserModule]]), i0.ɵmpd(1073742336, i39.HttpClientXsrfModule, i39.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i39.HttpClientModule, i39.HttpClientModule, []), i0.ɵmpd(1073742336, i40.ɵangular_packages_forms_forms_bc, i40.ɵangular_packages_forms_forms_bc, []), i0.ɵmpd(1073742336, i40.FormsModule, i40.FormsModule, []), i0.ɵmpd(1073742336, i40.ReactiveFormsModule, i40.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i52.IonicModule, i52.IonicModule, []), i0.ɵmpd(1073742336, i63.IonicStorageModule, i63.IonicStorageModule, []), i0.ɵmpd(1073742336, i64.TranslateModule, i64.TranslateModule, []), i0.ɵmpd(1073742336, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i39.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i39.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i2.AppRootToken, i80.MyApp, []), i0.ɵmpd(256, i36.APP_BASE_HREF, "/", []), i0.ɵmpd(256, i63.StorageConfigToken, { name: "__vedichoroo", driverOrder: ["sqlite", "indexeddb", "websql"] }, []), i0.ɵmpd(256, i64.USE_STORE, undefined, []), i0.ɵmpd(256, i64.USE_DEFAULT_LANG, undefined, [])]); });
export { AppModuleNgFactory as AppModuleNgFactory };
//# sourceMappingURL=app.module.ngfactory.js.map