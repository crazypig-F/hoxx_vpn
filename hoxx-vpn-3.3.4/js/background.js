/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _folders = __webpack_require__(9);

var _folders2 = _interopRequireDefault(_folders);

var _errorcodes = __webpack_require__(15);

var _errorcodes2 = _interopRequireDefault(_errorcodes);

var _platform = __webpack_require__(16);

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	VERSION: chrome.runtime.getManifest().version,
	PLATFORM: _platform2.default.name,
	BROWSERLANG: chrome.i18n.getUILanguage(),
	FALLBACKLINK: "https://base0-hx.trlone.com/client/",
	SERVERSJSONFILE: _folders2.default.ASSETS + "/servers.json",
	UNINSTALLPATH: "html/uninstalled.php",
	BASEDOMAIN: "trlone.com",
	BACKUPBASEDOMAIN: "mainbackupdomain.com",
	TESTREQUESTREGEX: "proxytest[0-9]+.com",
	SERVICE: "Hoxx VPN",
	SERVICESHORT: "hoxx",
	REALM: "hoxx.com",
	CONTACTSUPPORTURL: "https://hoxx.com/contact/",
	PACSCRIPT: "js/PAC.js",
	DOWNLOADLINKS: {
		ANDROID: "https://play.google.com/store/apps/details?id=com.hoxxvpn.main",
		DESKTOP: "http://desktopclient.net/gw/index.html#/hoxx"
	},
	RATEUS: {
		LINKS: {
			FIREFOX: "https://addons.mozilla.org/en-US/firefox/addon/hoxx-vpn-proxy/reviews/",
			CHROME: "https://chrome.google.com/webstore/detail/hoxx-vpn-proxy/nbcojefnccbanplpoffopkoepjmhgdgh/reviews"
		},
		INTERVAL: 1000 * 60 * 60 * 24 * 3, // 3 days
		DONTASKINTERVAL: 1000 * 60 * 60 * 24 * 3 * 30 // 3 months
	},
	WEBRTCADDON: {
		URL: _platform2.default.WebRTCAddon.url,
		ID: _platform2.default.WebRTCAddon.id
	},
	PROXYADDONS: _platform2.default.proxyAddons,
	STORAGEKEYS: {
		BASELINK: "baselink",
		LASTBASELINK: "lastBaselink",
		BASELINKNOTFOUND: "baselinkNotFound",
		LOCALE: "locale",
		LANGUAGE: "language",
		USERDATA: "userData",
		CONFIGDATA: "configData",
		CONFIGDATATTL: "configDataTTL",
		PROXYSEARCHFAILED: "proxySearchFailed",
		PROXYSEARCHFAILEDCOUNTRY: "proxySearchFailedCountry",
		PROXYSEARCHLOCK: "proxySearchLock",
		ISPROXYON: "isProxyOn",
		CURRENTPROXY: "currentSelectedProxy",
		DCACHE: "dCache",
		NOTIFICATIONS: "cachedNotifications",
		RATEUSNEXTTIME: "ratingNextTime",
		PROXYEXTENSIONS: "activeProxyExtensionList",
		IPLOOKUPURL: "ipLookUpUrl",
		STICKEDCOUNTRIES: "stickedCountries",
		ISCOUNTRYSORTED: "isCountrySorted",
		LASTSELECTEDTAB: "lastSelectedTab",
		BYPASSLIST: "bypassList",
		ISINAPPNOTIFICATIONOFF: "isInAppNotificationOff",
		LASTLOGINRESULT: "lastLoginResult",
		INSTALLID: "installId"
	},
	STATUS: {
		BLOCKED: "BLOCKED",
		OK: "OK"
	},
	IMAGES: {
		ONICON: _folders2.default.IMAGES + "/symbol48.png",
		OFFICON: _folders2.default.IMAGES + "/symbol-disabled48.png",
		HEADERLOGO: _folders2.default.IMAGES + "/logo-header.png",
		LOGOLARGE: _folders2.default.IMAGES + "/logo.png",
		FEATUREPINGIF: "img/feature_pin.gif",
		FEATURESORTGIF: "img/feature_sorting.gif"
	},
	ERRORCODES: _errorcodes2.default,
	LOADINGIMG: '<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/' + 'C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyk' + 'lrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG' + '4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8p' + 'ByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIu' + 'mIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzI' + 'IunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAAD' + 'Mwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQ' + 'AAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAA' + 'QABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==">'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _folders = __webpack_require__(9);

var _folders2 = _interopRequireDefault(_folders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, [{
        key: 'isEmpty',
        value: function isEmpty(obj) {

            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) return false;
            }

            return true;
        }
    }, {
        key: 'shuffleArray',
        value: function shuffleArray(o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {}
            return o;
        }
    }, {
        key: 'loadTemplate',
        value: function loadTemplate(html, locale) {
            var template = html;
            var htmlKeys = html.match(/(?:\{)[^\{\}]*?(?:\})/g);

            if (!htmlKeys) return template;

            htmlKeys.forEach(function (htmlKey) {
                var localeKey = htmlKey.replace("{", "").replace("}", "");

                if (locale[localeKey]) template = template.replace(htmlKey, locale[localeKey]);
            });

            return template;
        }
    }, {
        key: 'getConfigTTL',
        value: function getConfigTTL() {
            return Math.floor(Date.now() / 1000) + 5 * 60;
        }
    }, {
        key: 'getLocaleInStorage',
        value: function getLocaleInStorage() {
            return new Promise(function (resolve, reject) {
                chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.LOCALE, function (storage) {
                    if (storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]) return resolve(storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]);

                    reject();
                });
            });
        }
    }, {
        key: 'isUserPremium',
        value: function isUserPremium(serverData) {
            if (serverData.premium == 0) {
                return false;
            } else {
                if (!Date.now) {
                    Date.now = function () {
                        return new Date().getTime();
                    };
                }

                var datenow = Math.floor(Date.now() / 1000);
                //console.log("UTC TIME" + datenow);
                var expiredate = serverData.premium;

                if (expiredate > datenow) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }, {
        key: 'getUserExpirationData',
        value: function getUserExpirationData(timestamp) {
            var a = new Date(timestamp * 1000);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();

            return date + ". " + month + " " + year;
        }
    }, {
        key: 'generateIdentifierDomain',
        value: function generateIdentifierDomain() {
            var it = Math.floor(Math.random() * 100000 + 1);
            return _ServiceMeta2.default.SERVICESHORT + "proxytest" + it + ".com";
        }
    }, {
        key: 'getDateNow',
        value: function getDateNow() {
            return Math.floor(Date.now() / 1000);
        }
    }, {
        key: 'openNewTab',
        value: function openNewTab(url) {
            chrome.tabs.create({ "url": url });
        }
    }, {
        key: 'setProxyStatusIcon',
        value: function setProxyStatusIcon(isProxyOn) {
            var icon = isProxyOn ? _ServiceMeta2.default.IMAGES.ONICON : _ServiceMeta2.default.IMAGES.OFFICON;
            chrome.browserAction.setIcon({ path: { 38: icon } });
        }
    }, {
        key: 'showConnectionNotification',
        value: function showConnectionNotification(title, message, isProxyOn) {
            var icon = isProxyOn ? _ServiceMeta2.default.IMAGES.ONICON : _ServiceMeta2.default.IMAGES.OFFICON;
            var options = {
                type: "basic",
                title: title,
                message: message,
                iconUrl: icon
            };

            chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

                var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
                var uid = configData && configData.uid ? configData.uid : "";
                var inAppNoti = storage[_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF];

                var condition = inAppNoti && inAppNoti[uid] === false ? true : false;

                if (!condition) chrome.notifications.create(options);
            });
        }
    }, {
        key: 'showNotification',
        value: function showNotification(title, message) {
            var options = {
                type: "basic",
                title: title,
                message: message,
                iconUrl: _ServiceMeta2.default.IMAGES.ONICON
            };

            chrome.notifications.create(options);
        }
    }, {
        key: 'removePort',
        value: function removePort(hostnameWithPort) {

            if (hostnameWithPort && hostnameWithPort.indexOf(":") > -1) {

                return hostnameWithPort.substring(0, hostnameWithPort.indexOf(":"));
            }

            return hostnameWithPort;
        }
    }, {
        key: 'escapeParamsOfUrl',
        value: function escapeParamsOfUrl(url) {
            var esurl = "" + url;
            if (esurl.indexOf("?") > -1) {
                esurl = esurl.substr(0, esurl.indexOf("?"));
            }
            return esurl;
        }
    }, {
        key: 'addMetaParameter',
        value: function addMetaParameter(parameter) {
            return parameter = parameter + "&cv=" + _ServiceMeta2.default.VERSION + "&platform=" + _ServiceMeta2.default.PLATFORM;
        }
    }, {
        key: 'getRemainingTime',
        value: function getRemainingTime(blockTime, locales) {
            if (blockTime > 1) {
                var timeNow = Math.floor(Date.now() / 1000);
                var remaining = blockTime - timeNow;
                var timeleft = "";
                if (remaining < 3600) {
                    timeleft = Math.floor(remaining / 60) + " " + locales.tempBlockMinutes;
                } else {
                    timeleft = Math.floor(remaining / 3600) + " " + locales.tempBlockHours;
                }
                return timeleft;
            }
            return 0;
        }
    }, {
        key: 'hideElement',
        value: function hideElement(element) {
            if (element && element.css) element.css('display', 'none');
        }
    }, {
        key: 'showElement',
        value: function showElement(element) {
            if (element && element.css) element.css('display', 'block');
        }
    }, {
        key: 'stripProtocol',
        value: function stripProtocol(url) {
            return url.replace("http://", "").replace("https://", "");
        }
    }, {
        key: 'sortObject',
        value: function sortObject(o) {
            return Object.keys(o).sort().reduce(function (r, k) {
                return r[k] = o[k], r;
            }, {});
        }
    }, {
        key: 'getTabIdByServerType',
        value: function getTabIdByServerType(serverType) {
            if (!serverType) return 0;

            serverType = serverType.toUpperCase();
            switch (serverType) {
                case "REGULAR":
                    return 0;
                    break;
                case "PREMIUM":
                    return 1;
                    break;
                case "PUBLIC":
                    return 2;
                    break;
            }
        }
    }, {
        key: 'openPlatformLink',
        value: function openPlatformLink(platform) {
            if (platform === "desktop") return this.openNewTab(_ServiceMeta2.default.DOWNLOADLINKS.DESKTOP);
            if (platform === "android") return this.openNewTab(_ServiceMeta2.default.DOWNLOADLINKS.ANDROID);
        }
    }, {
        key: 'createUniqueId',
        value: function createUniqueId() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16);
            });
        }
    }, {
        key: 'setInstallId',
        value: function setInstallId() {
            var _this = this;

            chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.INSTALLID], function (storage) {
                if (!storage[_ServiceMeta2.default.STORAGEKEYS.INSTALLID]) {
                    chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.INSTALLID, _this.createUniqueId()));
                }
            });
        }
    }, {
        key: 'isInt',
        value: function isInt(value) {
            return !isNaN(value) && function (x) {
                return (x | 0) === x;
            }(parseFloat(value));
        }
    }]);

    return Utils;
}();

exports.default = new Utils();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	REST: 'rest',
	LANGUAGELIST: 'rest/lang/list',
	GETLOCALE: 'rest/lang/get',
	CONFIG: 'rest/config/extension',
	REGISTER: 'rest/user/register2',
	FORGOTPASS: 'rest/user/forgotpassword',
	TICKET: 'rest/misc/ticket',
	PRODUCTS: 'rest/info/products',
	PROFILE: 'rest/user/profile',
	AUTOPROXY: 'rest/misc/autoproxy',
	FEEDBACK: 'rest/misc/feedback',
	NOTIFICATION: 'rest/user/profile/notification',
	PING: 'rest/ping',
	SUPPORT: 'support/',
	TICKETTOKEN: 'rest/misc/persist',
	DISCONNECTS: 'rest/misc/disconnects'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Api = __webpack_require__(5);

var _Api2 = _interopRequireDefault(_Api);

var _Proxy = __webpack_require__(4);

var _Proxy2 = _interopRequireDefault(_Proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TokenWatcher = function () {
	function TokenWatcher() {
		_classCallCheck(this, TokenWatcher);

		this.init();
		chrome.webRequest.onBeforeSendHeaders.addListener(this.onBeforeSendHeaders.bind(this), { urls: ["<all_urls>"] });
	}

	_createClass(TokenWatcher, [{
		key: 'init',
		value: function init() {
			var _this = this;

			this.pendingRequest = [];
			this.currentRequest = {};
			this.running = false;
			this.cacheUsed = false;
			this.identifyRunning = false;
			this.identifyId = 0;
			this.identifyLink = "";
			this.nextEnteringKill = false;
		}

		/* Actions */

	}, {
		key: 'startIdentifyRequest',
		value: function startIdentifyRequest() {
			var _this = this;

			chrome.storage.local.get([], function (storage) {

				var verifyLink = "http://" + _Utils2.default.generateIdentifierDomain() + "/";

				var xhr = new XMLHttpRequest();
				xhr.open('GET', verifyLink, true);

				xhr.timeout = 10000;

				xhr.onreadystatechange = function () {

					// If the request completed
					if (xhr.readyState == 4) {
						var result = xhr.responseText;

						//console.log(result);
						if (result.indexOf(verifyLink) != -1 && result.indexOf("ERR_DNS_FAIL") != -1) {

							_this.tokenSuccess();
						} else {
							_this.closeAllCallbacks();

							//showDisabledNotification(storage.locale.NotifyVPNDisconnectTitle, storage.locale.NotifyVPNDisconnectMsg);
						}
					}
				};

				// Send the request and set status
				_this.identifyLink = verifyLink;
				_this.identifyRunning = true;
				xhr.send();
			});
		}
	}, {
		key: 'useCache',
		value: function useCache(resolve) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				_this.setCacheUsed(true);

				resolve({
					authCredentials: {
						username: storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].s_login ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].s_login : '',
						password: storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].s_token ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].s_token : ''
					}

				});
			});
		}
	}, {
		key: 'freshToken',
		value: function freshToken(resolve) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {

				var loginData = {
					hitReason: "getToken",
					userData: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA]
				};

				_Api2.default.login(function (response) {

					if (response && response.errorcode == 0) {

						resolve({
							authCredentials: {
								username: response.s_login ? response.s_login : '',
								password: response.s_token ? response.s_token : ''
							}

						});
					} else {

						resolve({ cancel: true });
						_this.closeAllCallbacks();
					}
				}, loginData);
			});
		}
	}, {
		key: 'tokenSuccess',
		value: function tokenSuccess() {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				for (var i = 0; i < _this.pendingRequest.length; i++) {
					_this.pendingRequest[i]({
						authCredentials: {
							username: storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].s_login ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].s_login : '',
							password: storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].s_token ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].s_token : ''
						}
					});
				};

				_this.init();
			});
		}
	}, {
		key: 'closeAllCallbacks',
		value: function closeAllCallbacks() {
			var _this = this;

			//ProxySetting.clearProxySetting();

			for (var i = 0; i < _this.pendingRequest.length; i++) {
				_this.pendingRequest[i]({ cancel: true });
			};

			_this.init();

			_Proxy2.default.unset().then(function (unsetOptions) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
					var _proxyDefaultSettings;

					if (storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON] && storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]) _Utils2.default.showConnectionNotification(storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectTitle, storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectMsg);

					var proxyDefaultSettings = (_proxyDefaultSettings = {}, _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.ISPROXYON, false), _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, false), _proxyDefaultSettings);

					chrome.storage.local.set(proxyDefaultSettings);
				});
			});

			//proxy.setIconOff();
			//proxy.clearProxySetting();
		}
	}, {
		key: 'clearTokenWatcher',
		value: function clearTokenWatcher() {

			var _this = this;
			if (_this.pendingRequest.length > 0) {
				for (var i = 0; i < _this.pendingRequest.length; i++) {
					_this.pendingRequest[i]({ cancel: true });
				};
				_this.init();
			}
		}

		/* Setter and Getter */

	}, {
		key: 'setIdentifyId',
		value: function setIdentifyId(id) {
			var _this = this;

			_this.identifyId = id;
		}
	}, {
		key: 'setCurrentRequest',
		value: function setCurrentRequest(request) {
			var _this = this;

			_this.currentRequest = request;
		}
	}, {
		key: 'setRunning',
		value: function setRunning() {
			var _this = this;
			_this.running = true;
		}
	}, {
		key: 'setPendingRequest',
		value: function setPendingRequest(request) {
			var _this = this;

			_this.pendingRequest.push(request);
		}
	}, {
		key: 'setNextEnteringKill',
		value: function setNextEnteringKill(v) {
			var _this = this;
			_this.nextEnteringKill = v;
		}
	}, {
		key: 'setCacheUsed',
		value: function setCacheUsed(v) {
			var _this = this;

			_this.cacheUsed = v;
		}
	}, {
		key: 'getNextEnteringKill',
		value: function getNextEnteringKill() {
			var _this = this;

			return _this.nextEnteringKill;
		}
	}, {
		key: 'getIdentifyId',
		value: function getIdentifyId() {
			var _this = this;

			return _this.identifyId;
		}
	}, {
		key: 'getIdentifyLink',
		value: function getIdentifyLink() {
			var _this = this;

			return _this.identifyLink;
		}
	}, {
		key: 'getCurrentRequest',
		value: function getCurrentRequest() {
			var _this = this;

			return _this.currentRequest;
		}
	}, {
		key: 'isRunning',
		value: function isRunning() {
			var _this = this;
			return _this.running;
		}
	}, {
		key: 'isIdentifyRunning',
		value: function isIdentifyRunning() {
			var _this = this;

			return _this.identifyRunning;
		}
	}, {
		key: 'isCachedUsed',
		value: function isCachedUsed() {
			var _this = this;
			return _this.cacheUsed;
		}

		/* Events */

	}, {
		key: 'onBeforeSendHeaders',
		value: function onBeforeSendHeaders(details) {
			var _this = this;

			if (_this.isRunning() && details.url.indexOf(_this.getIdentifyLink()) != -1 && _this.isIdentifyRunning()) {

				_this.setIdentifyId(details.requestId);
			}
		}
	}]);

	return TokenWatcher;
}();

exports.default = new TokenWatcher();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _ProxyApi = __webpack_require__(18);

var _ProxyApi2 = _interopRequireDefault(_ProxyApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Proxy = function () {
	function Proxy() {
		_classCallCheck(this, Proxy);
	}

	_createClass(Proxy, [{
		key: 'set',
		value: function set(config) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_ProxyApi2.default.set(config).then(function (config) {
					resolve(config);
				});
			});
		}
	}, {
		key: 'setTest',
		value: function setTest(config) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_ProxyApi2.default.setTest(config).then(function (config) {
					resolve(config);
				});
			});
		}
	}, {
		key: 'unset',
		value: function unset() {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_ProxyApi2.default.unset().then(function () {
					resolve();
				});
			});
		}
	}]);

	return Proxy;
}();

exports.default = new Proxy();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _endpoints = __webpack_require__(2);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _BaseFinder = __webpack_require__(6);

var _BaseFinder2 = _interopRequireDefault(_BaseFinder);

var _TokenWatcher = __webpack_require__(3);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _constants = __webpack_require__(7);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
	function Api() {
		_classCallCheck(this, Api);
	}

	_createClass(Api, [{
		key: 'getLanguage',
		value: function getLanguage(callback) {
			var _this = this;
			chrome.runtime.getPlatformInfo(function (platformInfo) {
				var os = _this.getOS(platformInfo);
				var parameter = _this.addMetaData("") + os;
				_this.request(_endpoints2.default.LANGUAGELIST, 'POST', parameter, callback);
			});
		}
	}, {
		key: 'getLocale',
		value: function getLocale(callback) {
			var _this = this;

			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.LANGUAGE, function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var os = _this.getOS(platformInfo);
					var parameter = "lang=" + storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] + os;

					_this.request(_endpoints2.default.GETLOCALE, 'GET', parameter, callback);
				});
			});
		}

		// data = { hitreason: "", userData: {email: "", password: ""}}

	}, {
		key: 'login',
		value: function login(callback, data) {
			var _this = this;

			var storageKeys = [_ServiceMeta2.default.STORAGEKEYS.LOCALE, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.INSTALLID];

			chrome.storage.local.get(storageKeys, function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
					var uidparam = _this.getUidParam(userdata);
					var lid = _this.getInstallId(storage[_ServiceMeta2.default.STORAGEKEYS.INSTALLID], "lid");

					var os = _this.getOS(platformInfo);

					var locale = storage[storageKeys[0]];
					var language = storage[storageKeys[1]];
					var lserial = locale ? locale.SERIAL : 0;

					var email = encodeURIComponent(data.userData.email);
					var password = encodeURIComponent(data.userData.password);
					var hitReason = data.hitReason ? data.hitReason : "";
					var ua = navigator && navigator.userAgent ? encodeURIComponent(navigator.userAgent) : "";

					var parameter = "u=" + email + "&p=" + password + "&cv=" + _ServiceMeta2.default.VERSION + "&lan=" + _ServiceMeta2.default.BROWSERLANG + "&lser=" + lserial + "&lang=" + language + "&h=" + hitReason + "&platform=" + _ServiceMeta2.default.PLATFORM + "&base=" + storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + "&ua=" + ua + uidparam + lid + os;

					_this.request(_endpoints2.default.CONFIG, 'POST', parameter, function (response) {

						if (response && response != "" && response.errorcode !== undefined) chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LASTLOGINRESULT, response.errorcode));

						if (response && response != "" && response.errorcode == 0) {
							var _dataToUpdate;

							var configDataTTL = _Utils2.default.getConfigTTL();

							//Add uid to userdata
							if (data && data.userData && data.userData.email && response.uid) data.userData.uid = response.uid;

							var dataToUpdate = (_dataToUpdate = {}, _defineProperty(_dataToUpdate, _ServiceMeta2.default.STORAGEKEYS.USERDATA, data.userData), _defineProperty(_dataToUpdate, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, response), _defineProperty(_dataToUpdate, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL, configDataTTL), _dataToUpdate);

							//Update IPLookupURL
							if (response.ipcheck_url) dataToUpdate[_ServiceMeta2.default.STORAGEKEYS.IPLOOKUPURL] = response.ipcheck_url;

							chrome.storage.local.set(dataToUpdate, function () {

								//todo setUserTag, setUninstallLink, user load
								if (response.locale) chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, response.locale));

								return callback(response);
							});
						} else {

							_TokenWatcher2.default.closeAllCallbacks();

							//todo: maybe change this? We need to test this.

							return callback(response);
						}
					});
				}); // end of getPlatformInfo
			});
		}
	}, {
		key: 'register',
		value: function register(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.INSTALLID], function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var installid = _this.getInstallId(storage[_ServiceMeta2.default.STORAGEKEYS.INSTALLID], "iid");
					var os = _this.getOS(platformInfo);

					var parameter = "firstname=" + encodeURIComponent(data.firstname) + "&lastname=" + encodeURIComponent(data.lastname) + "&email=" + encodeURIComponent(data.email) + "&tosok=confirmed&eulaok=confirmed&ppok=confirmed" + "&lang=" + storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] + "&base=" + storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + "&lang=" + storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] + installid + os;

					parameter = _this.addMetaData(parameter);

					_this.request(_endpoints2.default.REGISTER, 'POST', parameter, callback);
				});
			});
		}
	}, {
		key: 'forgotPass',
		value: function forgotPass(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE], function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var os = _this.getOS(platformInfo);
					var parameter = "email=" + encodeURIComponent(data.email) + "&base=" + storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + "&lang=" + storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] + os;

					parameter = _this.addMetaData(parameter);

					_this.request(_endpoints2.default.FORGOTPASS, 'POST', parameter, callback);
				});
			});
		}
	}, {
		key: 'contactSupport',
		value: function contactSupport(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
					var uidparam = _this.getUidParam(userdata);
					var os = _this.getOS(platformInfo);

					var parameter = "email=" + encodeURIComponent(data.email) + "&message=" + encodeURIComponent(data.message) + uidparam + "&base=" + storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + "&lang=" + storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] + os;

					parameter = _this.addMetaData(parameter);

					_this.request(_endpoints2.default.TICKET, 'POST', parameter, callback);
				});
			});
		}
	}, {
		key: 'getProducts',
		value: function getProducts(callback) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
					var uidparam = _this.getUidParam(userdata);
					var os = _this.getOS(platformInfo);

					var parameter = "base=" + storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + "&lang=" + storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] + uidparam + os;

					parameter = _this.addMetaData(parameter);

					_this.request(_endpoints2.default.PRODUCTS, 'POST', parameter, callback);
				});
			});
		}
	}, {
		key: 'getPaymentLink',
		value: function getPaymentLink(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
					var uidparam = _this.getUidParam(userdata);
					var os = _this.getOS(platformInfo);

					var parameter = "&email=" + encodeURIComponent(storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].email) + "&pass=" + encodeURIComponent(storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].password) + uidparam + "&productid=" + data.productId + "&baseurl=" + storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + "&lang=" + storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] + os;

					parameter = _this.addMetaData(parameter);

					var paymentEndpoint = _endpoints2.default.REST + data.paymentPath;
					_this.request(paymentEndpoint, 'POST', parameter, callback);
				});
			});
		}
	}, {
		key: 'changeProfile',
		value: function changeProfile(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var changes = "";

					if (data != undefined) {
						for (var key in data) {
							if (data.hasOwnProperty(key)) {
								changes = changes + "&" + key + "=" + encodeURIComponent(data[key]);
							}
						}
					}

					var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
					var uidparam = _this.getUidParam(userdata);
					var os = _this.getOS(platformInfo);

					var parameter = "&email=" + encodeURIComponent(storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].email) + "&pass=" + encodeURIComponent(storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].password) + uidparam + changes + "&base=" + storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + "&lang=" + storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] + os;

					parameter = _this.addMetaData(parameter);

					_this.request(_endpoints2.default.PROFILE, 'POST', parameter, function (response) {

						// Password has changed. We need to update local storage here if response is positive from server.
						if (data && data.newpass && response && response.Retcode == 200) {

							var updatedUserData = {
								email: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].email,
								password: data.newpass
							};

							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.USERDATA, updatedUserData), function () {
								return callback(response);
							});
						}

						return callback(response);
					});
				});
			});
		}
	}, {
		key: 'setNotificationState',
		value: function setNotificationState(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {

				chrome.runtime.getPlatformInfo(function (platformInfo) {

					var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
					var uidparam = _this.getUidParam(userdata);
					var os = _this.getOS(platformInfo);

					var parameter = "&email=" + encodeURIComponent(storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].email) + "&pass=" + encodeURIComponent(storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].password) + uidparam + "&state=" + data.state + "&base=" + storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + "&lang=" + storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] + os;

					parameter = _this.addMetaData(parameter);

					_this.request(_endpoints2.default.NOTIFICATION, 'POST', parameter, callback);
				});
			});
		}
	}, {
		key: 'getTicketToken',
		value: function getTicketToken(callback, data) {
			var _this = this;

			chrome.runtime.getPlatformInfo(function (platformInfo) {
				var os = _this.getOS(platformInfo);
				var parameter = "&data=" + encodeURIComponent(data) + os;

				parameter = _this.addMetaData(parameter);

				_this.request(_endpoints2.default.TICKETTOKEN, 'POST', parameter, callback);
			});
		}
	}, {
		key: 'request',
		value: function request(endpoint, method, parameter, callback) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {

				//todo what happens when baselink does not exists? 

				var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
				var xhr = new XMLHttpRequest();

				var requestUrl = Baselink + endpoint;

				if (method == "GET") requestUrl = requestUrl + "?" + parameter;

				xhr.open(method, requestUrl, true);
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

				// Register takes sometimes more than 10 seconds, so no timeout for register endpoint for now.
				if (endpoint != _endpoints2.default.REGISTER) xhr.timeout = _Utils2.default.stripProtocol(Baselink).includes(':') ? _constants2.default.TIERPINGTIMEOUT : _constants2.default.PINGTIMEOUT;

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							var result = "";
							try {
								result = JSON.parse(xhr.responseText);
							} catch (e) {}

							if (endpoint != _endpoints2.default.CONFIG && (result == "" || !result.hasOwnProperty('Retcode') || _Utils2.default.isEmpty(result))) _this.findNewBase(Baselink);

							if (endpoint == _endpoints2.default.CONFIG && (result == "" || !result.hasOwnProperty('errorcode') || _Utils2.default.isEmpty(result))) _this.findNewBase(Baselink);

							return callback(result);
						} else {

							_this.findNewBase(Baselink);
							return callback(0);
						}
					}
				};

				xhr.send(parameter);
			});
		}
	}, {
		key: 'findNewBase',
		value: function findNewBase(failedBaselink) {
			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function (storage) {

				if (storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] != undefined && failedBaselink == storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK]) {

					//console.log("BU");
					chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function () {
						_BaseFinder2.default.init();
					});
				}
			});
		}
	}, {
		key: 'popupCallback',
		value: function popupCallback(port, requestId, method) {

			return function (data) {

				port.postMessage({ response: method, requestId: requestId, data: data });
			};
		}
	}, {
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {

			switch (method) {
				case "getLanguage":
					this.getLanguage(this.popupCallback(port, requestId, method));
					break;
				case "getLocale":
					this.getLocale(this.popupCallback(port, requestId, method));
					break;
				case "login":
					this.login(this.popupCallback(port, requestId, method), data);
					break;
				case "register":
					this.register(this.popupCallback(port, requestId, method), data);
					break;
				case "forgotPass":
					this.forgotPass(this.popupCallback(port, requestId, method), data);
					break;
				case "contactSupport":
					this.contactSupport(this.popupCallback(port, requestId, method), data);
					break;
				case "getProducts":
					this.getProducts(this.popupCallback(port, requestId, method), data);
					break;
				case "getPaymentLink":
					this.getPaymentLink(this.popupCallback(port, requestId, method), data);
					break;
				case "changeProfile":
					this.changeProfile(this.popupCallback(port, requestId, method), data);
					break;
				case "setNotificationState":
					this.setNotificationState(this.popupCallback(port, requestId, method), data);
					break;
				case "getTicketToken":
					this.getTicketToken(this.popupCallback(port, requestId, method), data);
					break;
				default:

					this.popupCallback(port, requestId, method)("");
			}
		}
	}, {
		key: 'findBase',
		value: function findBase() {
			//todo: implement findBase();
		}
	}, {
		key: 'getOS',
		value: function getOS(platformInfo) {
			return platformInfo && platformInfo.os ? '&os=' + platformInfo.os : '';
		}
	}, {
		key: 'getUidParam',
		value: function getUidParam(userdata) {
			return userdata && userdata.uid ? "&uid=" + userdata.uid : "";
		}
	}, {
		key: 'getInstallId',
		value: function getInstallId(installid, param) {
			return installid ? "&" + param + "=" + installid : "";
		}
	}, {
		key: 'addMetaData',
		value: function addMetaData(parameter) {
			return parameter = parameter + "&cv=" + _ServiceMeta2.default.VERSION + "&platform=" + _ServiceMeta2.default.PLATFORM;
		}
	}]);

	return Api;
}();

exports.default = new Api();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _Ping = __webpack_require__(17);

var _Ping2 = _interopRequireDefault(_Ping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseFinder = function () {
	function BaseFinder() {
		_classCallCheck(this, BaseFinder);

		this.fallbackLink = _ServiceMeta2.default.FALLBACKLINK;

		this.running = 0;
		this.worker = [];
		this.currentFound = "";
		this.lastFound = "";
		this.serversJson = false;

		this.countOfMain = 0;
		this.mainBaseResults = [];

		this.abortFlag = false;

		this.turn = 0;
		this.currentTier = false;

		this.searchPort = false;

		if (!this.searchPort) this.connectPort();
	}

	_createClass(BaseFinder, [{
		key: 'init',
		value: function init() {
			var _this = this;

			if (!this.serversJson) return this.loadJsonFile().then(_this.checkStorageForBaselink.bind(this));

			_this.checkStorageForBaselink();
		}
	}, {
		key: 'checkStorageForBaselink',
		value: function checkStorageForBaselink() {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LASTBASELINK, _ServiceMeta2.default.STORAGEKEYS.BASELINKNOTFOUND], function (storage) {

				if (_this.isSecondRunning) {
					_this.onProgress(_this);
					return 0;
				}

				if (storage[_ServiceMeta2.default.STORAGEKEYS.BASELINKNOTFOUND]) {
					if (_this.searchPort) _this.searchPort.postMessage({ action: 'failed' });
					return 0;
				}

				if (storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] && storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] != "") {
					_this.lastFound = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
				}

				_this.currentFound = storage[_ServiceMeta2.default.STORAGEKEYS.LASTBASELINK];

				if (_this.worker.length == 0) _this.startMainSearch();
			});
		}
	}, {
		key: 'connectPort',
		value: function connectPort() {
			chrome.runtime.onConnect.addListener(this.onConnect.bind(this));
		}
	}, {
		key: 'onConnect',
		value: function onConnect(port) {
			if (port.name == "basesearch-port") {
				this.searchPort = port;
				this.searchPort.onMessage.addListener(this.onMessage.bind(this));
				this.searchPort.onDisconnect.addListener(this.onDisconnect.bind(this));
			}
		}
	}, {
		key: 'onMessage',
		value: function onMessage() {}
	}, {
		key: 'onDisconnect',
		value: function onDisconnect() {
			this.searchPort = false;
		}
	}, {
		key: 'startMainSearch',
		value: function startMainSearch() {

			var _this = this;
			var n;

			_this.abortFlag = false;

			_this.running = 0;
			_this.mainBaseResults = [];
			_this.baseLinks = _Utils2.default.shuffleArray(_this.serversJson["tier0"]);

			_this.isMainRunning = true;

			// First create Ping request for all main baselinks
			for (n = 0; n < _this.baseLinks.length; n++) {
				_this.worker[n] = new _Ping2.default(_this.baseLinks[n]);
				_this.worker[n].setOnDoneEvent(_this.onMainWorkerDone.bind(_this));
			}

			_this.countOfMain = _this.worker.length;

			// Start all Ping request for all main baselinks
			for (n = 0; n < _this.worker.length; n++) {
				_this.worker[n].start();
			}
		}
	}, {
		key: 'startTierSearch',
		value: function startTierSearch() {
			var _this = this,
			    n,
			    done = false;

			_this.tier1 = _this.serversJson['tier1'].slice();
			_this.tier2 = _this.serversJson['tier2'].slice();
			_this.tier3 = _this.serversJson['tier3'].slice();
			_this.tier4 = _this.serversJson['tier4'].slice();

			_this.turn = 0;

			_this.isSecondRunning = true;

			_this.progressCurrent = 0;
			_this.progressEnd = _this.tier1.length + _this.tier2.length + _this.tier3.length + _this.tier4.length;

			_this.nextTierBaselink();
		}
	}, {
		key: 'nextTierBaselink',
		value: function nextTierBaselink() {
			var current = "";
			var _this = this;

			if (_this.turn == 1) current = _this.tier1.pop();
			if (_this.turn == 2) current = _this.tier2.pop();
			if (_this.turn == 3) current = _this.tier3.pop();
			if (_this.turn == 4) current = _this.tier4.pop();

			_this.turn = _this.turn + 1;
			if (_this.turn >= 5) _this.turn = 1;

			if (current != undefined) {
				_this.currentTier = new _Ping2.default(current);
				_this.currentTier.setOnDoneEvent(_this.onTierWorkerDone.bind(_this));

				return _this.currentTier.start();
			}

			if (_this.tier1.length === 0 && _this.tier2.length === 0 && _this.tier3.length === 0 && _this.tier4.length === 0) return _this.onNotFound(true);

			_this.nextTierBaselink();
		}
	}, {
		key: 'onMainWorkerDone',
		value: function onMainWorkerDone(baselink, isWorking) {

			var _this = this;
			var n;

			++_this.running;
			_this.mainBaseResults.push(isWorking);

			if (isWorking && baselink != _this.currentFound) {
				var workingURLobj = {};
				workingURLobj[_ServiceMeta2.default.STORAGEKEYS.BASELINK] = baselink;
				workingURLobj[_ServiceMeta2.default.STORAGEKEYS.LASTBASELINK] = workingURLobj[_ServiceMeta2.default.STORAGEKEYS.BASELINK];

				chrome.storage.local.set(workingURLobj, function () {
					_this.onFound();
				});

				for (n = 0; n < _this.worker.length; n++) {
					_this.worker[n].terminate();
				}

				return _this.worker = [];
			} else {
				//  if(baselink == _this.currentFound)
				//     console.log("new found: " + baselink + " old found: " + _this.currentFound + " SKIP");
			}

			if (_this.running === _this.countOfMain) {

				_this.worker = [];
				_this.mainBaseResults.sort(function (x, y) {
					return x === y ? 0 : x ? -1 : 1;
				});
				for (var i = 0; i < _this.mainBaseResults.length; i++) {
					if (_this.mainBaseResults[i]) return;

					if (!_this.mainBaseResults[i] && !_this.isSecondRunning) _this.startTierSearch();
				};
			}
		}
	}, {
		key: 'onTierWorkerDone',
		value: function onTierWorkerDone(baselink, isWorking) {
			var _this = this;

			++_this.progressCurrent;
			_this.onProgress(_this);

			if (!isWorking) {

				if (!_this.abortFlag) {
					setTimeout(function () {
						_this.nextTierBaselink(1);
					}, 600);
				}
				return;
			}

			var workingURLobj = {};
			workingURLobj[_ServiceMeta2.default.STORAGEKEYS.BASELINK] = baselink;
			workingURLobj[_ServiceMeta2.default.STORAGEKEYS.LASTBASELINK] = workingURLobj[_ServiceMeta2.default.STORAGEKEYS.BASELINK];

			chrome.storage.local.set(workingURLobj, function () {
				_this.onFound(true);
			});
		}
	}, {
		key: 'abortAll',
		value: function abortAll() {
			var _this = this;

			_this.abortFlag = true;

			if (_this.currentTier) _this.currentTier.terminate();

			_this.onNotFound(true);
		}
	}, {
		key: 'onFound',
		value: function onFound(isTier) {
			var _this = this;

			if (_this.searchPort) _this.searchPort.postMessage({ action: 'success' });

			if (isTier) {
				_this.isSecondRunning = false;
			}
		}
	}, {
		key: 'onNotFound',
		value: function onNotFound(isTier) {
			var _this = this;

			chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.BASELINKNOTFOUND, true));
			if (_this.searchPort) _this.searchPort.postMessage({ action: 'failed' });

			if (isTier) {
				_this.isSecondRunning = false;
			}
		}
	}, {
		key: 'onProgress',
		value: function onProgress(t) {
			var _this = t;

			var progress = "Progress " + _this.progressCurrent + " / " + _this.progressEnd;

			if (_this.searchPort && _this.isSecondRunning) _this.searchPort.postMessage({ action: "progress", data: progress });
		}
	}, {
		key: 'loadJsonFile',
		value: function loadJsonFile() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				var xhr = new XMLHttpRequest();
				xhr.open("GET", _ServiceMeta2.default.SERVERSJSONFILE, true);
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {

						var response = xhr.responseText;

						try {
							_this.serversJson = JSON.parse(response);

							resolve();
						} catch (e) {}
						//_this.notFound();


						//_this.initSecond(response);
					}
				};
				xhr.send();
			});
		}
	}, {
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {
			var _this = this;

			switch (method) {
				case "init":
					_this.init();
					port.postMessage({ response: method, requestId: requestId, data: "init" });
					break;
				case "abortAll":
					_this.abortAll();
					port.postMessage({ response: method, requestId: requestId, data: "abortAll" });
					break;
				default:

					break;
			}
		}
	}, {
		key: 'cacheBypass',
		value: function cacheBypass() {
			//todo implement cacheBypass
		}
	}]);

	return BaseFinder;
}();

exports.default = new BaseFinder();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	PINGTIMEOUT: 10000,
	TIERPINGTIMEOUT: 15000,
	PROXYSEARCHTIMEOUT: 10000
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TokenWatcher = __webpack_require__(3);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _Proxy = __webpack_require__(4);

var _Proxy2 = _interopRequireDefault(_Proxy);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ConnectionWatcher = __webpack_require__(20);

var _ConnectionWatcher2 = _interopRequireDefault(_ConnectionWatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxySetting = function () {
	function ProxySetting() {
		_classCallCheck(this, ProxySetting);

		chrome.storage.onChanged.addListener(this.onSettingsChanged.bind(this));

		this.clearSettings();
	}

	_createClass(ProxySetting, [{
		key: 'clearSettings',
		value: function clearSettings(callback) {

			_ConnectionWatcher2.default.stopSession();

			_TokenWatcher2.default.clearTokenWatcher();

			_Proxy2.default.unset().then(function () {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
					var _proxyDefaultSettings;

					if (storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON] && storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]) _Utils2.default.showConnectionNotification(storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectTitle, storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectMsg);

					var proxyDefaultSettings = (_proxyDefaultSettings = {}, _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.ISPROXYON, false), _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, false), _proxyDefaultSettings);

					chrome.storage.local.set(proxyDefaultSettings);

					if (callback) callback();
				});
			});
		}
	}, {
		key: 'onSettingsChanged',
		value: function onSettingsChanged(changes, namespace) {
			var _this = this;

			var changedItems = Object.keys(changes);

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.ISPROXYON) === -1) return;

			var isProxyOn = changes[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON].newValue;

			_Utils2.default.setProxyStatusIcon(isProxyOn);
			_this.setBadge(isProxyOn);

			if (isProxyOn) {
				_ConnectionWatcher2.default.startSession();
			} else {
				_ConnectionWatcher2.default.stopSession();
			}
		}
	}, {
		key: 'setBadge',
		value: function setBadge(isProxyOn) {
			var _this = this;

			if (!isProxyOn) return chrome.browserAction.setBadgeText({ text: "" });

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY], function (storage) {

				var currentProxy = storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY];

				if (isProxyOn && currentProxy && currentProxy.CountryCode) {
					chrome.browserAction.setBadgeText({ text: currentProxy.CountryCode.toUpperCase() });
					chrome.browserAction.setBadgeBackgroundColor({ color: "#1aaa54" });
				}
			});
		}
	}, {
		key: 'popupCallback',
		value: function popupCallback(port, requestId, method) {

			return function (data) {
				port.postMessage({ response: method, requestId: requestId, data: data });
			};
		}
	}, {
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {

			switch (method) {
				case "clearSettings":
					this.clearSettings(this.popupCallback(port, requestId, method));
					break;
				default:

					this.popupCallback(port, requestId, method)("");
			}
		}
	}]);

	return ProxySetting;
}();

exports.default = new ProxySetting();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	VIEWS: './views',
	ASSETS: './assets',
	FLAGS: './images/flags',
	IMAGES: './images'
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ["localhost", "127.0.0.1", "local", "intra", "intranet", "onion"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Management = function () {
	function Management() {
		_classCallCheck(this, Management);
	}

	_createClass(Management, [{
		key: 'isExtInstalled',
		value: function isExtInstalled(extensionId) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.getAllExt().then(function (listOfExtensions) {

					for (var i = 0; i < listOfExtensions.length; i++) {
						if (listOfExtensions[i].id == extensionId) return resolve(true);
					};

					reject({
						reason: 'not_installed'
					});
				});
			});
		}
	}, {
		key: 'isExtActive',
		value: function isExtActive(extensionId) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.getAllExt().then(function (listOfExtensions) {

					for (var i = 0; i < listOfExtensions.length; i++) {
						if (listOfExtensions[i].enabled === true && listOfExtensions[i].id == extensionId) {

							return resolve(true);
						}
					};

					reject({
						reason: 'not_active'
					});
				});
			});
		}
	}, {
		key: 'cacheExtWithProxyPerm',
		value: function cacheExtWithProxyPerm(popupCallback) {
			var _this = this;

			_this.getAllProxyExt().then(_this.saveInStorage.bind(this)).then(function (extWithProxy) {
				if (popupCallback) popupCallback(extWithProxy);
			});
		}
	}, {
		key: 'saveInStorage',
		value: function saveInStorage(extWithProxy) {
			return new Promise(function (resolve, reject) {
				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.PROXYEXTENSIONS, extWithProxy), function () {
					resolve(extWithProxy);
				});
			});
		}
	}, {
		key: 'getAllExt',
		value: function getAllExt() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				if (_ServiceMeta2.default.PLATFORM.toUpperCase() == "FIREFOX") return browser.management.getAll().then(resolve);

				return chrome.management.getAll(resolve);
			});
		}
	}, {
		key: 'getAllProxyExt',
		value: function getAllProxyExt(popupCallback) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				function listCallback(listOfExtensions) {

					var extWithProxy = [];

					for (var i = 0; i < listOfExtensions.length; i++) {
						if (_this.hasExtensionProxyPermission(listOfExtensions[i]) && chrome.runtime.id !== listOfExtensions[i].id && _ServiceMeta2.default.PROXYADDONS.indexOf(listOfExtensions[i].id) === -1 && listOfExtensions[i].enabled) extWithProxy.push(listOfExtensions[i]);
					};

					if (popupCallback) return popupCallback(extWithProxy);

					resolve(extWithProxy);
				}

				_this.getAllExt().then(listCallback);
			});
		}
	}, {
		key: 'popupCallback',
		value: function popupCallback(port, requestId, method) {

			return function (data) {
				port.postMessage({ response: method, requestId: requestId, data: data });
			};
		}
	}, {
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {
			var _this = this;

			switch (method) {
				case "cacheExtWithProxyPerm":
					_this.cacheExtWithProxyPerm(_this.popupCallback(port, requestId, method));
					break;
				default:

					break;
			}
		}

		/* Actions */

		/*
  	getIdOfAllExtensionsWithProxyPermission () {
  		var _this = this;
  		return new Promise((resolve, reject) => {
  
  			browser.management.getAll().then((listOfExtensions) => {
  
  
  				var extensionIds = [];
  
  				for (var i = 0; i < listOfExtensions.length; i++) {
  
  					if(_this.hasExtensionProxyPermission(listOfExtensions[i]))
  						extensionIds.push(listOfExtensions[i].id);
  
  				};
  
  				resolve(extensionIds);
  
  			});
  
  
  		});
  	}
  */
		/*
  	disableExtensions (extensionIds) {
  
  		return new Promise((resolve, reject) => {
  			var promises = [];
  
  			for (var i = 0; i < extensionIds.length; i++) {
  				promises.push(browser.management.setEnabled(extensionIds[i], false));
  			};
  
  			Promise.all(promises).then(values => {
  				resolve(values);
  			});
  
  
  		});
  	}
  */

	}, {
		key: 'hasExtensionProxyPermission',
		value: function hasExtensionProxyPermission(ext) {
			return ext && ext.permissions && ext.permissions.indexOf('proxy') > -1 ? true : false;
		}
	}]);

	return Management;
}();

exports.default = new Management();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _TokenWatcher = __webpack_require__(3);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _constants = __webpack_require__(7);

var _constants2 = _interopRequireDefault(_constants);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyIdentifier = function () {
    function ProxyIdentifier() {
        _classCallCheck(this, ProxyIdentifier);

        this.init();
    }

    _createClass(ProxyIdentifier, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var identifierDomain = _Utils2.default.generateIdentifierDomain();
            _this.identifierLink = "http://" + identifierDomain;
            _this.isRunning = false;
            _this.current = "";
            _this.xhr = undefined;
            _this.aborted = false;
        }
    }, {
        key: 'identify',
        value: function identify(identifierLink, callback) {
            var _this = this;

            chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, function (storage) {

                var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
                var searchTimeout = config && config.searchtimeout && _Utils2.default.isInt(config.searchtimeout) && config.searchtimeout > 5000 ? config.searchtimeout : _constants2.default.PROXYSEARCHTIMEOUT;

                if (_this.xhr !== undefined) {

                    _this.xhr.abort();
                }

                _this.init();

                _this.identifierLink = identifierLink;

                _this.xhr = new XMLHttpRequest();
                _this.xhr.open('GET', _this.identifierLink, true);

                _this.xhr.timeout = searchTimeout;

                _this.xhr.onreadystatechange = function () {

                    // If the request completed
                    if (_this.xhr.readyState == 4) {
                        var result = _this.xhr.responseText;
                        //console.log(result);


                        if (result && result.indexOf(_this.identifierLink) != -1 && result.indexOf("ERR_DNS_FAIL") != -1) {
                            _TokenWatcher2.default.tokenSuccess();
                            callback(true);
                        } else {
                            callback(false);
                        }
                    }
                };
                // Send the request and set status
                _this.xhr.send();
            });
        }
    }, {
        key: 'abort',
        value: function abort() {
            var _this = this;

            if (_this.xhr != undefined) _this.xhr.abort();
        }

        /* Getter and Setter */

    }, {
        key: 'getIdentifierLink',
        value: function getIdentifierLink() {
            var _this = this;

            return _this.identifierLink;
        }
    }]);

    return ProxyIdentifier;
}();

exports.default = new ProxyIdentifier();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BackgroundHandler = __webpack_require__(14);

var _BackgroundHandler2 = _interopRequireDefault(_BackgroundHandler);

var _BaseFinder = __webpack_require__(6);

var _BaseFinder2 = _interopRequireDefault(_BaseFinder);

var _ProxyFinder = __webpack_require__(26);

var _ProxyFinder2 = _interopRequireDefault(_ProxyFinder);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Proxy = __webpack_require__(4);

var _Proxy2 = _interopRequireDefault(_Proxy);

var _ProxyAuth = __webpack_require__(29);

var _ProxyAuth2 = _interopRequireDefault(_ProxyAuth);

var _TokenWatcher = __webpack_require__(3);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _AutoProxy = __webpack_require__(30);

var _AutoProxy2 = _interopRequireDefault(_AutoProxy);

var _Extension = __webpack_require__(32);

var _Extension2 = _interopRequireDefault(_Extension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

chrome.storage.onChanged.addListener(function (changes, namespace) {
	for (var key in changes) {
		var storageChange = changes[key];
	}
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Api = __webpack_require__(5);

var _Api2 = _interopRequireDefault(_Api);

var _BaseFinder = __webpack_require__(6);

var _BaseFinder2 = _interopRequireDefault(_BaseFinder);

var _ProxySetting = __webpack_require__(8);

var _ProxySetting2 = _interopRequireDefault(_ProxySetting);

var _Notification = __webpack_require__(22);

var _Notification2 = _interopRequireDefault(_Notification);

var _Management = __webpack_require__(11);

var _Management2 = _interopRequireDefault(_Management);

var _Bypasslist = __webpack_require__(23);

var _Bypasslist2 = _interopRequireDefault(_Bypasslist);

var _TicketTab = __webpack_require__(25);

var _TicketTab2 = _interopRequireDefault(_TicketTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackgroundHandler = function () {
    function BackgroundHandler() {
        _classCallCheck(this, BackgroundHandler);

        this.port = null;
        chrome.runtime.onConnect.addListener(this.onConnect.bind(this));
    }

    _createClass(BackgroundHandler, [{
        key: 'onConnect',
        value: function onConnect(port) {

            if (port.name == "background-page-port") {
                this.port = port;
                this.port.onMessage.addListener(this.onMessage.bind(this));
            }
        }
    }, {
        key: 'onMessage',
        value: function onMessage(message) {
            switch (message.request) {
                case "api":
                    _Api2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);

                    break;
                case "baseFinder":
                    _BaseFinder2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                case "ProxySetting":
                    _ProxySetting2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                case "Notification":
                    _Notification2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                case "Management":
                    _Management2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                case "Bypasslist":
                    _Bypasslist2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                case "TicketTab":
                    _TicketTab2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                default:

            }
        }
    }]);

    return BackgroundHandler;
}();

exports.default = new BackgroundHandler();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	CONNECTIONERROR: "net::ERR_PROXY_CONNECTION_FAILED",
	VERIFYERROR: "net::ERR_NAME_NOT_RESOLVED"
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	name: 'Chrome',
	WebRTCAddon: {
		id: 'bppamachkoflopbagkdoflbgfjflfnfl',
		url: 'https://chrome.google.com/webstore/detail/webrtc-leak-shield/bppamachkoflopbagkdoflbgfjflfnfl'
	},
	proxyAddons: ["oofgbpoabipfcfjapgnbbjjaenockbdp", "nbcojefnccbanplpoffopkoepjmhgdgh"]
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(7);

var _constants2 = _interopRequireDefault(_constants);

var _endpoints = __webpack_require__(2);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ping = function () {
	function Ping(baselink) {
		_classCallCheck(this, Ping);

		this.baselink = baselink;
		this.pingLink = this.baselink + _endpoints2.default.PING;

		this.xhr = new XMLHttpRequest();
		this.xhr.open("GET", this.pingLink, true);
		this.xhr.timeout = _Utils2.default.stripProtocol(baselink).includes(':') ? _constants2.default.TIERPINGTIMEOUT : _constants2.default.PINGTIMEOUT;
		this.xhr.ontimeout = this.onTimeout.bind(this);
		this.xhr.onreadystatechange = this.onXHRStateChanged.bind(this);
	}

	/* */

	_createClass(Ping, [{
		key: 'setOnDoneEvent',
		value: function setOnDoneEvent(eventFunc) {
			this.onDoneEvent = eventFunc;
		}
	}, {
		key: 'onDone',
		value: function onDone(baselink, isSuccess) {
			if (this.onDoneEvent) this.onDoneEvent(baselink, isSuccess);
		}

		/* Events */

	}, {
		key: 'onTimeout',
		value: function onTimeout() {}
	}, {
		key: 'onXHRStateChanged',
		value: function onXHRStateChanged() {
			var _this = this;
			if (_this.xhr.readyState == 4) {

				if (_this.xhr.status != 200) return _this.onDone(_this.baselink, false);

				var result = "";
				try {
					result = JSON.parse(_this.xhr.responseText);

					if (result && result.Message == "pong") return _this.onDone(_this.baselink, true);

					return _this.onDone(_this.baselink, false);
				} catch (e) {
					return _this.onDone(_this.baselink, false);
				}
			}
		}
	}, {
		key: 'startSync',
		value: function startSync() {
			var _this = this;
			return new Promise(function (resolve, reject) {
				_this.setOnDoneEvent(resolve);
				_this.xhr.send();
			});
		}
	}, {
		key: 'start',
		value: function start() {

			if (!this.xhr) return;

			this.xhr.send();
		}
	}, {
		key: 'terminate',
		value: function terminate() {

			if (!this.xhr) return;

			this.xhr.abort();
		}
	}]);

	return Ping;
}();

exports.default = Ping;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bypasslist = __webpack_require__(19);

var _bypasslist2 = _interopRequireDefault(_bypasslist);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* ProxyApi for Chrome */

var ProxyApi = function () {
	function ProxyApi() {
		_classCallCheck(this, ProxyApi);

		chrome.proxy.settings.onChange.addListener(this.onProxySettingChanged.bind(this));
	}

	_createClass(ProxyApi, [{
		key: 'set',
		value: function set(config) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.getRulesForFixedServer(config).then(function (rulesObj) {

					var config = {
						mode: "fixed_servers",
						rules: rulesObj
					};

					chrome.proxy.settings.set({ value: config, scope: 'regular' }, function () {
						resolve(rulesObj);
					});
				});
			});
		}
	}, {
		key: 'setTest',
		value: function setTest(config) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				var pacScript = _this.getSearchPacScript(config.testHost, config.proxy);

				var pacConfig = {
					mode: "pac_script",
					pacScript: {
						data: pacScript
					}
				};

				chrome.proxy.settings.set({ value: pacConfig, scope: 'regular' }, function () {
					resolve(pacScript);
				});
			});
		}
	}, {
		key: 'unset',
		value: function unset() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				chrome.proxy.settings.clear({ scope: 'regular' }, function () {
					resolve();
				});
			});
		}
	}, {
		key: 'getSearchPacScript',
		value: function getSearchPacScript(host, proxyServer) {
			var scheme = proxyServer.Scheme === "http" ? "PROXY" : "HTTPS";
			var pacUri = "function FindProxyForURL(url, host) {" + "if(host == '" + host + "') return '" + scheme + " " + proxyServer.Host + ":" + proxyServer.Port + "'; \n" + "return 'DIRECT';}";

			return pacUri;
		}
	}, {
		key: 'getPacScript',
		value: function getPacScript(proxy) {

			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.BYPASSLIST, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
					var uid = configData && configData.uid ? configData.uid : "";
					var customBypassData = storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST];

					var currentBaselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK].replace("http://", "").replace("https://", "").replace("/client/", "");

					currentBaselink = _Utils2.default.removePort(currentBaselink);
					currentBaselink = currentBaselink.toLowerCase();

					var byPassList = [];
					byPassList.push(currentBaselink);

					// Custom bypasslist
					var customBypassList = [];

					if (_Utils2.default.isUserPremium(configData)) customBypassList = customBypassData && customBypassData[uid] ? customBypassData[uid] : [];

					byPassList = byPassList.concat(_bypasslist2.default, customBypassList);

					var byPassString = "";

					for (var i = 0; i < byPassList.length; i++) {
						byPassString = byPassString + "if(host == '" + byPassList[i] + "') return 'DIRECT'; \n";
					}

					var scheme = proxy.Scheme === "http" ? "PROXY" : "HTTPS";
					var pacUri = "function FindProxyForURL(url, host) {" + "if(isInNet(host, '192.168.0.0', '255.255.0.0')) return 'DIRECT'; \n" + byPassString + "return '" + scheme + " " + proxy.Host + ":" + proxy.Port + "';}";
					resolve(pacUri);
				});
			});
		}
	}, {
		key: 'getRulesForFixedServer',
		value: function getRulesForFixedServer(proxy) {

			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.BYPASSLIST, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
					var uid = configData && configData.uid ? configData.uid : "";
					var customBypassData = storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST];

					var currentBaselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK].replace("http://", "").replace("https://", "").replace("/client/", "");

					currentBaselink = _Utils2.default.removePort(currentBaselink);
					currentBaselink = currentBaselink.toLowerCase();

					var byPassList = [];
					byPassList.push(currentBaselink);

					// Custom bypasslist
					var customBypassList = [];

					if (_Utils2.default.isUserPremium(configData)) customBypassList = customBypassData && customBypassData[uid] ? customBypassData[uid] : [];

					byPassList = byPassList.concat(_bypasslist2.default, customBypassList);

					resolve({
						singleProxy: {
							scheme: proxy.Scheme ? proxy.Scheme.toLowerCase() : "https",
							host: proxy.Host,
							port: proxy.Port
						},
						bypassList: byPassList
					});
				});
			});
		}

		/* Events */

	}, {
		key: 'onProxySettingChanged',
		value: function onProxySettingChanged(details) {
			var _this = this;

			if (details && details.hasOwnProperty('levelOfControl')) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
					if (details.levelOfControl == "controlled_by_other_extensions" && storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON]) {
						_this.unset().then(function () {
							var _proxyDefaultSettings;

							if (storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON] && storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]) _Utils2.default.showConnectionNotification(storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectTitle, storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectMsg);

							var proxyDefaultSettings = (_proxyDefaultSettings = {}, _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.ISPROXYON, false), _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, false), _proxyDefaultSettings);

							chrome.storage.local.set(proxyDefaultSettings);
						});
					}
				});
			}
		}
	}]);

	return ProxyApi;
}();

exports.default = new ProxyApi();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _localhosts = __webpack_require__(10);

var _localhosts2 = _interopRequireDefault(_localhosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ["checkout.stripe.com", _ServiceMeta2.default.BASEDOMAIN, _ServiceMeta2.default.BACKUPBASEDOMAIN].concat(_localhosts2.default);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ProxySetting = __webpack_require__(8);

var _ProxySetting2 = _interopRequireDefault(_ProxySetting);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Disconnect = __webpack_require__(21);

var _Disconnect2 = _interopRequireDefault(_Disconnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConnectionWatcher = function () {
	function ConnectionWatcher() {
		_classCallCheck(this, ConnectionWatcher);

		this.init();

		chrome.webRequest.onCompleted.addListener(this.onRequestCompleted.bind(this), { urls: ["<all_urls>"] }, ["responseHeaders"]);
		chrome.webRequest.onErrorOccurred.addListener(this.onRequestError.bind(this), { urls: ["<all_urls>"] });
	}

	_createClass(ConnectionWatcher, [{
		key: 'init',
		value: function init() {
			this.isRunning = false;
			this.startTime = 0;
			this.onSuccess = 0;
			this.proxyServer = "";
			this.lastError = 0;
			this.lastSuccess = 0;
			this.isPendingUnset = false;
			this.nRequest = [];
			this.nRequestCount = 0;

			/* Rescue Parameter */
			this.numberOfAllowedFails = 10;
			this.numberOfCurrentFails = 0;

			this.rescueURL = [];
		}
	}, {
		key: 'startSession',
		value: function startSession(proxy) {
			var _this = this;

			_this.init();
			_this.isRunning = true;
			_this.startTime = Date.now();
			_this.proxyServer = proxy;
		}
	}, {
		key: 'stopSession',
		value: function stopSession() {
			var _this = this;

			_this.abortRemainingRequests();
			_this.init();
		}
	}, {
		key: 'addFailedRescueRequest',
		value: function addFailedRescueRequest(currentProxy) {
			var _this = this;

			++_this.numberOfCurrentFails;

			if (_this.numberOfAllowedFails == _this.numberOfCurrentFails) {
				_ProxySetting2.default.clearSettings();

				_Disconnect2.default.onErrorDisconnect(currentProxy);
			}
		}
	}, {
		key: 'generateRescueURL',
		value: function generateRescueURL() {
			var _this = this;

			for (var i = 0; i < _this.numberOfAllowedFails; i++) {
				_this.rescueURL[i] = "http://" + _Utils2.default.generateIdentifierDomain();
			};
		}
	}, {
		key: 'request',
		value: function request(i, intervalListener, currentProxy) {
			var _this = this;

			_this.nRequest[i] = new XMLHttpRequest();
			_this.nRequest[i].open("GET", i, true);
			_this.nRequest[i].onreadystatechange = function (oEvent) {
				if (_this.nRequest[i].readyState === 4) {
					var result = _this.nRequest[i].responseText;

					if (result.indexOf(i) != -1 && result.indexOf("ERR_DNS_FAIL") != -1) {
						window.clearInterval(intervalListener);
						_this.abortRemainingRequests();

						_this.lastError = 0;
						_this.lastSuccess = 0;
						_this.isPendingUnset = false;
					} else {
						_this.addFailedRescueRequest(currentProxy);
					}
				}
			};

			++_this.nRequestCount;
			_this.nRequest[i].send(null);
		}
	}, {
		key: 'startRescueRequest',
		value: function startRescueRequest(currentProxy) {
			var _this = this;

			_this.numberOfCurrentFails = 0;
			_this.rescueURL = [];
			_this.nRequest = [];

			_this.generateRescueURL();

			var intervalListener = setInterval(func.bind(this), 1000);

			function func() {

				var _this = this;
				if (_this.rescueURL.length > 0) {
					var next = _this.rescueURL.pop();
					_this.request(next, intervalListener, currentProxy);
				} else {
					window.clearInterval(intervalListener);
				}
			};
		}
	}, {
		key: 'setPendingUnset',
		value: function setPendingUnset(currentProxy) {
			var _this = this;

			_this.isPendingUnset = true;

			setTimeout(function () {

				var isGood = _this.lastError - _this.lastSuccess < 0 ? "we are good" : "start help requests";

				if (_this.isRunning && _this.lastError > _this.lastSuccess) {

					if (_this.nRequestCount < 100) return _this.startRescueRequest(currentProxy);

					_ProxySetting2.default.clearSettings();
					_Disconnect2.default.onErrorDisconnect(currentProxy);
				} else {

					// Time window is good. Lets make another round
					_this.lastError = 0;
					_this.lastSuccess = 0;
					_this.isPendingUnset = false;
				}
			}, 2000);
		}
	}, {
		key: 'abortRemainingRequests',
		value: function abortRemainingRequests() {
			var _this = this;

			for (var request in _this.nRequest) {
				if (_this.nRequest.hasOwnProperty(request)) {
					_this.nRequest[request].abort();
					//console.log("REALLY ABORT", request);
				}
			}
		}

		/* Events */

	}, {
		key: 'onRequestError',
		value: function onRequestError(details) {
			var _this = this;

			if (details.error == _ServiceMeta2.default.ERRORCODES.CONNECTIONERROR || _ServiceMeta2.default.ERRORCODES.CONNECTIONERROR2 !== undefined && details.error == _ServiceMeta2.default.ERRORCODES.CONNECTIONERROR2) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY], function (storage) {

					if (storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON]) _this.onProxyErrorHappened(storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY]);
				});
			}
		}
	}, {
		key: 'onRequestCompleted',
		value: function onRequestCompleted(details) {
			var _this = this;

			if (details.hasOwnProperty('ip')) _this.onSuccessfulRequest();
		}
	}, {
		key: 'onSuccessfulRequest',
		value: function onSuccessfulRequest() {
			var _this = this;

			if (_this.isRunning) {
				_this.lastSuccess = Date.now();
			}
		}
	}, {
		key: 'onProxyErrorHappened',
		value: function onProxyErrorHappened(currentProxy) {
			var _this = this;

			if (_this.isRunning && !_this.isPendingUnset) {
				_this.lastError = Date.now();
				_this.setPendingUnset(currentProxy);
			}
		}
	}]);

	return ConnectionWatcher;
}();

exports.default = new ConnectionWatcher();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _endpoints = __webpack_require__(2);

var _endpoints2 = _interopRequireDefault(_endpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Disconnect = function () {
	function Disconnect() {
		_classCallCheck(this, Disconnect);

		this.lastDisconnects = [];
		this.isRunning = false;
	}

	_createClass(Disconnect, [{
		key: 'onErrorDisconnect',
		value: function onErrorDisconnect(currentProxy) {
			var _this = this;

			_this.addDisconnect(currentProxy);
		}
	}, {
		key: 'addDisconnect',
		value: function addDisconnect(currentProxy) {
			var _this = this;

			if (!currentProxy) return;

			var disonnectItem = {
				id: currentProxy['Identifier'],
				type: currentProxy['Type'] ? currentProxy['Type'] : "",
				country: currentProxy['CountryCode'],
				pid: currentProxy['PID'] ? currentProxy['PID'] : ""
			};

			_this.lastDisconnects.push(disonnectItem);
			_this.sendDisconnect();
		}
	}, {
		key: 'sendDisconnect',
		value: function sendDisconnect() {
			var _this = this;

			if (_this.isRunning && _this.lastDisconnects.length <= 0) return;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {

				var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
				var udata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
				var uid = udata && udata.uid ? udata.uid : "";

				var disItem = _this.lastDisconnects.pop();

				if (!Baselink || !disItem) return;

				disItem.uid = uid;
				disItem.cv = _ServiceMeta2.default.VERSION;
				disItem.platform = _ServiceMeta2.default.PLATFORM;

				var disconnectEndpoint = Baselink + _endpoints2.default.DISCONNECTS;
				var params = "disconnect=" + encodeURIComponent(JSON.stringify(disItem));

				var xhr = new XMLHttpRequest();
				xhr.open('POST', disconnectEndpoint, true);
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.timeout = 10000;

				xhr.onreadystatechange = function () {
					// If the request completed
					if (xhr.readyState == 4) {

						if (_this.lastDisconnects.length > 0) _this.sendDisconnect();

						_this.isRunning = false;
					}
				};

				xhr.send(params);
			});
		}
	}]);

	return Disconnect;
}();

exports.default = new Disconnect();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notification = function () {
	function Notification() {
		_classCallCheck(this, Notification);
	}

	_createClass(Notification, [{
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {
			var _this = this;

			switch (method) {
				case "onPopupOpened":
					_this.onPopupOpened();
					port.postMessage({ response: method, requestId: requestId, data: "onPopupOpened" });
					break;
				default:

					break;
			}
		}

		/* Actions */

	}, {
		key: 'showNotification',
		value: function showNotification(notificationToShow, cachedNotifications) {
			var _this = this;

			//First we cache it, then we show the notification.
			_this.cacheNotificationInStorage(notificationToShow, cachedNotifications).then(function () {

				_Utils2.default.openNewTab(notificationToShow.target);
			});
		}
	}, {
		key: 'checkForNotification',
		value: function checkForNotification() {
			var _this = this;

			_this.loadStorageData().then(function (storage) {
				var cachedNotifications = storage[_ServiceMeta2.default.STORAGEKEYS.NOTIFICATIONS];

				var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];

				var isNotificationOn = _this.getNotificationStateFromConfig(config);
				var notifications = _this.getNotificationFromConfig(config);

				if (!isNotificationOn || !notifications) return console.log("Not on or not available");;

				var notificationToShow = _this.getNewNotification(notifications, cachedNotifications);

				if (notificationToShow) _this.showNotification(notificationToShow, cachedNotifications);
			});
		}
	}, {
		key: 'getNotificationStateFromConfig',
		value: function getNotificationStateFromConfig(config) {

			if (config && config.notificationstate && config.notificationstate.toLowerCase() == "y") return true;

			return false;
		}
	}, {
		key: 'getNotificationFromConfig',
		value: function getNotificationFromConfig(config) {

			if (config && config.notifications && config.notifications.length > 0) return config.notifications;

			return false;
		}
	}, {
		key: 'getNewNotification',
		value: function getNewNotification(current, storedNotifications) {

			if (!Array.isArray(current) || current.length == 0) return false;

			if (!storedNotifications) return current[0];

			for (var i = 0; i < current.length; i++) {
				if (current[i].id && current[i].target && !storedNotifications.hasOwnProperty(current[i].id)) return current[i];
			};

			return false;
		}
	}, {
		key: 'cacheNotificationInStorage',
		value: function cacheNotificationInStorage(notification, storedNotifications) {
			return new Promise(function (resolve, reject) {

				if (!storedNotifications) storedNotifications = {};

				storedNotifications[notification.id] = true;

				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.NOTIFICATIONS, storedNotifications), function () {
					resolve();
				});
			});
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.NOTIFICATIONS, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					resolve(storage);
				});
			});
		}

		/* Events */

	}, {
		key: 'onPopupOpened',
		value: function onPopupOpened() {
			var _this = this;

			_this.checkForNotification();
		}
	}]);

	return Notification;
}();

exports.default = new Notification();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Network = __webpack_require__(24);

var _Network2 = _interopRequireDefault(_Network);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _localhosts = __webpack_require__(10);

var _localhosts2 = _interopRequireDefault(_localhosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bypasslist = function () {
	function Bypasslist() {
		_classCallCheck(this, Bypasslist);
	}

	_createClass(Bypasslist, [{
		key: 'validate',
		value: function validate(callback, validationData) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {
				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var ipLookupUrl = configData && configData["ipcheck_url"] ? configData["ipcheck_url"] : "undefined";
				ipLookupUrl = _Utils2.default.stripProtocol(ipLookupUrl);

				var bypasslistString = validationData.newData;
				var currentData = validationData.currentData;

				var bypassList = _this.readByNewLine(bypasslistString);

				var ipToBypass = [];
				var hostnamesAndIpToBypass = [];
				var errorLines = [];

				for (var i = 0; i < bypassList.length; i++) {

					var line = _this.removeUrlComponents(bypassList[i].toLowerCase()).replace(' ', '');

					if ((_Network2.default.isIpv4(line) || _Network2.default.isHostname(line) != null) && ipLookupUrl != line) {
						if (hostnamesAndIpToBypass.indexOf(line) == -1 && _localhosts2.default.indexOf(line) == -1) hostnamesAndIpToBypass.push(line);

						continue;
					}

					if (bypassList[i] != "") errorLines.push(bypassList[i]);
				};

				var bypassData = {
					bypassList: hostnamesAndIpToBypass,
					errorLines: errorLines,
					valid: hostnamesAndIpToBypass.length,
					invalid: errorLines.length
				};

				if (bypassData.bypassList.length > 0) return _this.saveBypassList(bypassData).then(callback);

				return _this.saveBypassList({ bypassList: [] }).then(callback);
			});
		}
	}, {
		key: 'saveBypassList',
		value: function saveBypassList(bypassData) {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {
					var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
					var bypassList = storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST];
					var uid = configData && configData.uid ? configData.uid : "";

					if (!bypassList) bypassList = {};

					bypassList[uid] = bypassData.bypassList;

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.BYPASSLIST, bypassList), function () {
						resolve(bypassData);
					});
				});
			});
		}
	}, {
		key: 'removeUrlComponents',
		value: function removeUrlComponents(l) {
			var pStripped = _Utils2.default.stripProtocol(l);

			if (!pStripped.includes('/')) return pStripped;

			var parts = pStripped.split('/');

			return parts[0];
		}
	}, {
		key: 'readByNewLine',
		value: function readByNewLine(bypasslistString) {
			return bypasslistString.split('\n');
		}
	}, {
		key: 'popupCallback',
		value: function popupCallback(port, requestId, method) {

			return function (data) {
				port.postMessage({ response: method, requestId: requestId, data: data });
			};
		}
	}, {
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {
			var _this = this;

			switch (method) {
				case "validate":
					_this.validate(_this.popupCallback(port, requestId, method), data);
					break;
				default:

					break;
			}
		}
	}]);

	return Bypasslist;
}();

exports.default = new Bypasslist();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Network = function () {
	function Network() {
		_classCallCheck(this, Network);
	}

	_createClass(Network, [{
		key: "isIpv4",
		value: function isIpv4(address) {
			var test = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(address);
			if (test === null) return false;

			var condition = test[1] > 255 || test[2] > 255 || test[3] > 255 || test[4] > 255;
			if (condition) return false; // not an IP address

			return true;
		}
	}, {
		key: "isHostname",
		value: function isHostname(hostname) {
			var regex = "^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$";
			return hostname.match(regex);
		}
	}]);

	return Network;
}();

exports.default = new Network();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _endpoints = __webpack_require__(2);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _Api = __webpack_require__(5);

var _Api2 = _interopRequireDefault(_Api);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TicketTab = function () {
	function TicketTab() {
		_classCallCheck(this, TicketTab);

		this.isCancel = false;
	}

	_createClass(TicketTab, [{
		key: 'onTabCreated',
		value: function onTabCreated(tabId, changeInfo, tab) {}
	}, {
		key: 'openNewTicketTab',
		value: function openNewTicketTab(callback) {
			var _this = this;

			_this.isCancel = false;

			_this.getTicketData().then(_this.getTicketToken.bind(_this)).then(_this.openTicketTab.bind(_this)).then(callback);
		}
	}, {
		key: 'openTicketTab',
		value: function openTicketTab(response) {

			return new Promise(function (resolve, reject) {

				chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function (storage) {

					if (response && response.Retcode == 200) {
						var token = response["persistid"] ? response["persistid"] : "";
						_Utils2.default.openNewTab(storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + _endpoints2.default.SUPPORT + "?t=" + token);
					}

					resolve(response);
				});
			});
		}
	}, {
		key: 'getTicketToken',
		value: function getTicketToken(ticketData) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				_Api2.default.getTicketToken(function (response) {

					resolve(response);
				}, ticketData);
			});
		}
	}, {
		key: 'getTicketData',
		value: function getTicketData() {
			return new Promise(function (resolve, reject) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.LASTLOGINRESULT], function (storage) {

					var infoData = {
						platform: _ServiceMeta2.default.PLATFORM,
						cv: _ServiceMeta2.default.VERSION,
						service: _ServiceMeta2.default.SERVICESHORT,
						lang: storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] ? storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] : "",
						baselink: storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] ? storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] : ""
					};

					if (storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA]) infoData["email"] = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].email;

					if (storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA]) infoData["uid"] = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid;

					if (storage[_ServiceMeta2.default.STORAGEKEYS.LASTLOGINRESULT] !== undefined) infoData["lastLoginResult"] = storage[_ServiceMeta2.default.STORAGEKEYS.LASTLOGINRESULT];

					resolve(JSON.stringify(infoData));
				});
			});
		}
	}, {
		key: 'cancelSupportRequest',
		value: function cancelSupportRequest(callback) {
			var _this = this;

			_this.isCancel = true;
		}
	}, {
		key: 'popupCallback',
		value: function popupCallback(port, requestId, method) {

			return function (data) {
				if (port) port.postMessage({ response: method, requestId: requestId, data: data });
			};
		}
	}, {
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {
			var _this = this;

			switch (method) {
				case "openNewTicketTab":
					_this.openNewTicketTab(_this.popupCallback(port, requestId, method));
					break;
				case "cancelSupportRequest":
					_this.cancelSupportRequest(_this.popupCallback(port, requestId, method));
					break;
				default:

					break;
			}
		}
	}]);

	return TicketTab;
}();

exports.default = new TicketTab();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Proxy = __webpack_require__(4);

var _Proxy2 = _interopRequireDefault(_Proxy);

var _ProxyIdentifier = __webpack_require__(12);

var _ProxyIdentifier2 = _interopRequireDefault(_ProxyIdentifier);

var _TokenWatcher = __webpack_require__(3);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _ProxySetting = __webpack_require__(8);

var _ProxySetting2 = _interopRequireDefault(_ProxySetting);

var _Feedback = __webpack_require__(27);

var _Feedback2 = _interopRequireDefault(_Feedback);

var _Management = __webpack_require__(11);

var _Management2 = _interopRequireDefault(_Management);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyFinder = function () {
    function ProxyFinder() {
        _classCallCheck(this, ProxyFinder);

        var _this = this;

        _this.init();

        chrome.runtime.onConnect.addListener(this.onConnect.bind(this));
    }

    _createClass(ProxyFinder, [{
        key: 'init',
        value: function init() {
            var _this = this;

            _this.isActive = false;
            _this.serverList = [];
            _this.randomSelectedServer = [];
            _this.fallbacks = [];
            _this.activeProxy = {};
            _this.abort = false;
            _this.identifierLink = "";
            _this.identifierDomain = "";

            _this.currentServer = "";

            //_this.Port = false;		
        }
    }, {
        key: 'connectPort',
        value: function connectPort(Port) {
            var _this = this;

            _this.Port = Port;
            _this.Port.onMessage.addListener(_this.onPortMessage.bind(this));
            _this.Port.onDisconnect.addListener(_this.onPortDisconnect.bind(this));
        }
    }, {
        key: 'generateIdentifier',
        value: function generateIdentifier() {
            var _this = this;
            _this.identifierDomain = _Utils2.default.generateIdentifierDomain();
            _this.identifierLink = "http://" + _this.identifierDomain + "/";
        }
    }, {
        key: 'generateFallbacks',
        value: function generateFallbacks(currentServer) {
            var _this = this;

            if (currentServer.hasOwnProperty('Fallbacks')) {

                for (var i = 0; i < currentServer["Fallbacks"].length; i++) {
                    var item = currentServer["Fallbacks"][i];
                    item.Country = currentServer.Country;
                    item.Label = currentServer.Country;
                    item.PID = currentServer["PID"] ? currentServer["PID"] : "";
                    item.Type = currentServer.Type;
                    item.Identifier = currentServer.Identifier;

                    _this.fallbacks.push(item);
                }
            }
        }

        /* Actions */

    }, {
        key: 'startSearch',
        value: function startSearch(searchData) {
            var _this = this;
            chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, true), function () {

                _this.resetAll();

                _this.randomSelectedServer = searchData.randomSelectedServer ? searchData.randomSelectedServer : [];
                _this.serverList = searchData.serverList ? searchData.serverList : [];
                _this.serverListCount = _this.serverList.length;

                _this.searchNext();
            });
        }
    }, {
        key: 'searchNext',
        value: function searchNext() {
            var _this = this;

            if (_this.randomSelectedServer.length > 0) {

                _this.currentServer = _this.randomSelectedServer.pop();
            } else {

                if (_this.serverList.length == 0 && _this.fallbacks.length == 0) {
                    return _this.searchFailed();
                }

                if (_this.fallbacks.length > 0) {
                    _this.currentServer = _this.fallbacks.pop();
                } else {
                    _this.currentServer = _this.serverList.pop();
                }
            }

            _this.updateView();

            _this.testProxy(_this.currentServer, function (isSuccess, identifierDomain) {

                _Feedback2.default.add(_this.currentServer, isSuccess, identifierDomain);

                if (isSuccess) return _this.searchSuccess(_this.currentServer);

                _this.generateFallbacks(_this.currentServer);

                if (_this.serverList.length > 0 || _this.fallbacks.length > 0) {

                    if (_this.abort) return _this.resetAll();

                    _this.searchNext();
                } else {
                    _this.searchFailed(_this.currentServer.Country);
                }
            });
        }
    }, {
        key: 'testProxy',
        value: function testProxy(proxy, callback) {
            var _this = this;

            if (!proxy) return callback(false);

            _this.generateIdentifier();

            var testPacData = {
                proxy: proxy,
                testHost: _this.identifierDomain
            };

            _Proxy2.default.setTest(testPacData).then(function (test) {

                _ProxyIdentifier2.default.identify(_this.identifierLink, function (isSuccess) {

                    callback(isSuccess, _this.identifierDomain);
                });
            });
        }
    }, {
        key: 'searchSuccess',
        value: function searchSuccess(proxy) {
            var _this = this;

            _this.init();

            // Setting a working proxy to the browser settings
            _Proxy2.default.set(proxy).then(function (proxySet) {
                var _chrome$storage$local2;

                chrome.storage.local.set((_chrome$storage$local2 = {}, _defineProperty(_chrome$storage$local2, _ServiceMeta2.default.STORAGEKEYS.ISPROXYON, true), _defineProperty(_chrome$storage$local2, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, proxy), _defineProperty(_chrome$storage$local2, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, false), _chrome$storage$local2), function () {

                    chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.LOCALE, function (storage) {
                        var locale = storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE];
                        if (locale && locale.ConnectedTo && proxy.Country) {
                            var message = locale.ConnectedTo.replace('{0}', proxy.Country);
                            _Utils2.default.showConnectionNotification(locale.ConnectedTitle, message, true);
                        }
                    });

                    _Management2.default.cacheExtWithProxyPerm();

                    if (_this.Port) _this.Port.postMessage({ action: "success" });
                });
            });
        }
    }, {
        key: 'searchFailed',
        value: function searchFailed(country) {
            var _chrome$storage$local3;

            var _this = this;

            chrome.storage.local.set((_chrome$storage$local3 = {}, _defineProperty(_chrome$storage$local3, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILED, true), _defineProperty(_chrome$storage$local3, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILEDCOUNTRY, country), _defineProperty(_chrome$storage$local3, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, true), _chrome$storage$local3), function () {

                _ProxySetting2.default.clearSettings();
                _this.init();

                if (_this.Port) _this.Port.postMessage({ action: "failed", data: country });
            });
        }
    }, {
        key: 'updateView',
        value: function updateView() {
            var _this = this;

            var data = {
                server: _this.currentServer,
                count: _this.serverList.length,
                total: _this.serverListCount
            };

            if (_this.Port) _this.Port.postMessage({ action: "update", data: data });
        }
    }, {
        key: 'resetAll',
        value: function resetAll() {
            var _this = this;

            _ProxyIdentifier2.default.abort();

            _this.init();
        }
    }, {
        key: 'abortSearch',
        value: function abortSearch() {

            var _this = this;

            _this.abort = true;
        }

        /* Events */

    }, {
        key: 'onPortMessage',
        value: function onPortMessage(message) {
            var _this = this;

            switch (message.action) {
                case "search":
                    _this.startSearch(message.data);
                    break;
                case "cancel":
                    _this.abortSearch();
                    break;
                case "getUpdate":
                    _this.updateView();
            }
        }
    }, {
        key: 'onPortDisconnect',
        value: function onPortDisconnect() {
            var _this = this;

            _this.Port = false;
        }
    }, {
        key: 'onConnect',
        value: function onConnect(Port) {
            var _this = this;

            if (Port.name == "proxysearch-port") _this.connectPort(Port);
        }
    }]);

    return ProxyFinder;
}();

exports.default = new ProxyFinder();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Interval = __webpack_require__(28);

var _Interval2 = _interopRequireDefault(_Interval);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _endpoints = __webpack_require__(2);

var _endpoints2 = _interopRequireDefault(_endpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Feedback = function () {
	function Feedback() {
		_classCallCheck(this, Feedback);

		this.currentBatch = {};
		this.pendingBatches = [];
		this.sendInterval = 1000 * 60 * 30;
		this.batchInterval = false;

		this.errorMapping = {};

		this.FEEDBACKVERSION = 3;

		this.user = "";
		this.uid = "";

		chrome.webRequest.onErrorOccurred.addListener(this.onErrorOccurred.bind(this), { urls: ["<all_urls>"] });

		this.requests = {
			started: {}
		};

		this.isProxyOn = false;

		this.speedBatch = {
			current: {},
			pending: {}
		};

		this.DEFAULTSIZE = 1024 * 1000;

		this.speedFeedback = {
			version: 1,
			isOn: false,
			minSize: this.DEFAULTSIZE
		};

		chrome.webRequest.onSendHeaders.addListener(this.onSendHeaders.bind(this), { urls: ["<all_urls>"] }, ["requestHeaders"]);
		chrome.webRequest.onCompleted.addListener(this.onCompleted.bind(this), { urls: ["<all_urls>"] }, ["responseHeaders"]);
		chrome.webRequest.onErrorOccurred.addListener(this.onErrorOccurred.bind(this), { urls: ["<all_urls>"] });

		chrome.storage.onChanged.addListener(this.onStorageChanged.bind(this));
	}

	_createClass(Feedback, [{
		key: 'onCompleted',
		value: function onCompleted(details) {
			var _this = this;

			if (!_this.isSpeedFeedbackOn()) return;

			if (_this.requests.started.hasOwnProperty(details.requestId)) {
				var requestStart = _this.requests.started[details.requestId];
				var contentLenghtHeader = _this.getContentLenghtFromHeader(details.responseHeaders);

				if (contentLenghtHeader && !details.fromCache) {
					var contentLenght = parseInt(contentLenghtHeader);

					if (!isNaN(contentLenght) && contentLenght >= _this.speedFeedback.minSize) {
						var timeDiff = Math.floor(details.timeStamp) - Math.floor(requestStart.timeStamp);
						var sVal = Math.floor(contentLenght / timeDiff);
						var sSize = Math.floor(contentLenght / 1000);

						_this.addSpeed(sVal, sSize);
					}
				}

				delete _this.requests.started[details.requestId];
			}
		}
	}, {
		key: 'onErrorOccurred',
		value: function onErrorOccurred(details) {
			var _this = this;

			if (!_this.isSpeedFeedbackOn()) return;

			if (_this.requests.started.hasOwnProperty(details.requestId)) delete _this.requests.started[details.requestId];
		}
	}, {
		key: 'onSendHeaders',
		value: function onSendHeaders(details) {
			var _this = this;

			if (!_this.isSpeedFeedbackOn()) return;

			var countKeys = Object.keys(_this.requests.started).length;

			if (countKeys >= 1000) _this.requests.started = {};

			_this.requests.started[details.requestId] = details;
		}
	}, {
		key: 'isSpeedFeedbackOn',
		value: function isSpeedFeedbackOn() {
			var _this = this;

			return _this.isProxyOn && _this.speedFeedback.isOn;
		}
	}, {
		key: 'onStorageChanged',
		value: function onStorageChanged(changes, namespace) {
			var _this = this;
			var changedItems = Object.keys(changes);

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.ISPROXYON) > -1) _this.isProxyOn = changes[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON].newValue;

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA) > -1) {

				var configData = changes[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].newValue;

				if (configData && configData.hasOwnProperty('speedfeedback')) {

					_this.speedFeedback.isOn = true;

					if (configData['speedfeedback'] && configData['speedfeedback'].hasOwnProperty('minsize')) {
						_this.speedFeedback.minSize = configData['speedfeedback']['minsize'];
					} else {
						_this.speedFeedback.minSize = _this.DEFAULTSIZE;
					}
				} else {

					_this.speedFeedback.isOn = false;
				}
			}
		}
	}, {
		key: 'getContentLenghtFromHeader',
		value: function getContentLenghtFromHeader(headers) {

			for (var i = 0; i < headers.length; i++) {

				if (headers[i].name.toLowerCase() === "content-length") return headers[i].value;
			};

			return false;
		}
	}, {
		key: 'onErrorOccurred',
		value: function onErrorOccurred(details) {
			var _this = this;

			var pattern = "http://" + _ServiceMeta2.default.SERVICESHORT + "proxytest";

			if (details && details.url && details.error && details.url.indexOf(pattern) > -1) _this.mapError(details);
		}
	}, {
		key: 'mapError',
		value: function mapError(details) {
			var _this = this;
			var testDomain = "";

			var currentCount = Object.keys(_this.errorMapping).length;

			if (currentCount > 100) _this.errorMapping = {};

			if (details.url) testDomain = details.url.replace('http://', '').replace('/', '');

			_this.errorMapping[testDomain] = details.error;
		}
	}, {
		key: 'addSpeed',
		value: function addSpeed(sVal, sSize) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY], function (storage) {

				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var currentProxy = storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY];

				if (configData && configData.feedback && currentProxy && currentProxy['Identifier']) {
					_this.uid = configData.uid ? configData.uid : "";
					var serverId = currentProxy['Identifier'];

					if (!_this.speedBatch.current.hasOwnProperty(serverId)) _this.createNewSpeedBatch(serverId, currentProxy);

					_this.updateSpeedBatchItem(serverId, sVal, sSize);
				}
			});
		}
	}, {
		key: 'createNewSpeedBatch',
		value: function createNewSpeedBatch(serverId, serverItem) {
			var _this = this;

			var batchItem = {
				id: serverItem['Identifier'],
				type: serverItem['Type'] ? serverItem['Type'] : "",
				country: serverItem['CountryCode'],
				pid: serverItem['PID'] ? serverItem['PID'] : "",
				speed: [],
				avgsize: []
			};

			_this.speedBatch.current[serverId] = batchItem;
		}
	}, {
		key: 'updateSpeedBatchItem',
		value: function updateSpeedBatchItem(serverId, sVal, sSize) {
			var _this = this;

			if (!_this.speedBatch.current.hasOwnProperty(serverId)) return;

			if (_this.speedBatch.current[serverId].speed.length < 10) {

				_this.speedBatch.current[serverId].speed.push(sVal);
				_this.speedBatch.current[serverId].avgsize.push(sSize);
			}
		}
	}, {
		key: 'moveCurrentSpeedBatchToPending',
		value: function moveCurrentSpeedBatchToPending() {
			var _this = this;

			if (_this.pendingBatches.length >= 6) _this.pendingBatches.pop();

			var batchHeader = {
				v: _this.speedFeedback.version,
				t: Math.floor(Date.now() / 1000),
				service: _ServiceMeta2.default.SERVICESHORT.toLowerCase(),
				uid: _this.uid,
				minsize: _this.speedFeedback.minSize
			};

			var batch = _this.aggregateSpeedBatch(batchHeader);

			_this.pendingBatches.unshift(batch);

			_this.speedBatch.current = {};
		}
	}, {
		key: 'aggregateSpeedBatch',
		value: function aggregateSpeedBatch(batchHeader) {
			var _this = this;

			var batch = batchHeader;
			var aggBatch = [];

			for (var key in _this.speedBatch.current) {
				var speedItem = _this.speedBatch.current[key];

				if (speedItem.speed.length === speedItem.avgsize.length) {
					var aggSpeed = 0;
					var aggSize = 0;
					for (var i = 0; i < speedItem.speed.length; i++) {

						aggSpeed += speedItem.speed[i];
						aggSize += speedItem.avgsize[i];
					};

					speedItem.speed = Math.floor(aggSpeed / speedItem.speed.length);
					speedItem.avgsize = Math.floor(aggSize / speedItem.avgsize.length);

					aggBatch.push(speedItem);
				}
			}

			batch['speed'] = aggBatch;

			return batch;
		}
	}, {
		key: 'add',
		value: function add(serverItem, isSuccess, testDomain) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var userData = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];

				if (configData && configData.feedback && serverItem && serverItem['Identifier'] && serverItem["Host"] && serverItem["Port"]) {
					_this.user = userData && userData.email ? userData.email : "";
					_this.uid = configData.uid ? configData.uid : "";

					var errorCode = false;

					if (_this.errorMapping.hasOwnProperty(testDomain)) {

						errorCode = _this.errorMapping[testDomain];
						delete _this.errorMapping[testDomain];
					}

					var serverId = serverItem["Host"] + ":" + serverItem["Port"];

					if (!_this.currentBatch.hasOwnProperty(serverId)) _this.createNewBatchItem(serverId, serverItem);

					_this.updateBatchItem(serverId, serverItem, isSuccess, errorCode);

					if (!_this.batchInterval || _this.batchInterval && !_this.batchInterval.isRunning()) {

						_this.batchInterval = new _Interval2.default(_this.prepareBatch.bind(_this), _this.sendInterval);
						_this.batchInterval.start();
					}
				}
			});
		}
	}, {
		key: 'createNewBatchItem',
		value: function createNewBatchItem(serverId, serverItem) {
			var _this = this;

			var batchItem = {
				id: serverItem['Identifier'],
				type: serverItem['Type'] ? serverItem['Type'] : "",
				country: serverItem['CountryCode'],
				stats: {
					s: 0,
					f: 0
				},
				errorcodes: {}
			};

			_this.currentBatch[serverId] = batchItem;
		}
	}, {
		key: 'updateBatchItem',
		value: function updateBatchItem(serverId, serverItem, isSuccess, errorCode) {
			var _this = this;

			if (!_this.currentBatch.hasOwnProperty(serverId)) return;

			if (errorCode) {

				if (!_this.currentBatch[serverId].errorcodes.hasOwnProperty(errorCode)) {
					_this.currentBatch[serverId].errorcodes[errorCode] = 1;
				} else {
					_this.currentBatch[serverId].errorcodes[errorCode] += 1;
				}
			}

			if (isSuccess) return _this.currentBatch[serverId].stats['s'] += 1;

			_this.currentBatch[serverId].stats['f'] += 1;
		}
	}, {
		key: 'prepareBatch',
		value: function prepareBatch() {
			var _this = this;

			if (!_Utils2.default.isEmpty(_this.currentBatch)) _this.moveCurrentBatchToPending();

			if (!_Utils2.default.isEmpty(_this.speedBatch.current)) _this.moveCurrentSpeedBatchToPending();

			if (_this.pendingBatches.length > 0) _this.sendBatch();
		}
	}, {
		key: 'moveCurrentBatchToPending',
		value: function moveCurrentBatchToPending() {
			var _this = this;

			if (_this.pendingBatches.length >= 5) _this.pendingBatches.pop();

			var batchHeader = {
				v: _this.FEEDBACKVERSION,
				t: Math.floor(Date.now() / 1000),
				service: _ServiceMeta2.default.SERVICESHORT.toLowerCase(),
				login: _this.user,
				uid: _this.uid
			};

			var batch = _this.createFormartedBatch(batchHeader);

			_this.pendingBatches.unshift(batch);

			_this.currentBatch = {};
		}
	}, {
		key: 'createFormartedBatch',
		value: function createFormartedBatch(batchHeader) {
			var _this = this;

			var batch = batchHeader;
			var formattedStats = [];

			for (var key in _this.currentBatch) {
				formattedStats.push(_this.currentBatch[key]);
			}

			batch['stats'] = formattedStats;

			return batch;
		}
	}, {
		key: 'sendBatch',
		value: function sendBatch() {
			var _this = this;

			if (_this.pendingBatches.length <= 0) return;

			var batch = _this.pendingBatches.pop();
			var batchString = JSON.stringify(batch);

			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function (storage) {

				var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];

				if (!Baselink) return;

				var feedbackEndpoint = Baselink + _endpoints2.default.FEEDBACK;
				var paramKey = "feedback";

				if (batch && batch.hasOwnProperty('speed')) paramKey = "speedfeedback";

				var params = paramKey + "=" + encodeURIComponent(batchString) + _Utils2.default.addMetaParameter("");

				var xhr = new XMLHttpRequest();
				xhr.open('POST', feedbackEndpoint, true);
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.timeout = 10000;

				xhr.onreadystatechange = function () {
					// If the request completed
					if (xhr.readyState == 4) {

						if (xhr.status == 200) {
							//console.log("success");
							_this.sendBatch();
						} else {
							//console.log("feedback error");
							_this.pendingBatches.push(batch);
						}
					}
				};

				xhr.send(params);
			});
		}
	}]);

	return Feedback;
}();

exports.default = new Feedback();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interval = function () {
	function Interval(func, interval) {
		_classCallCheck(this, Interval);

		this.timer = false;
		this.func = func;
		this.interval = interval;
	}

	_createClass(Interval, [{
		key: 'start',
		value: function start() {
			var _this = this;

			if (!this.isRunning()) this.timer = setInterval(_this.func, _this.interval);
		}
	}, {
		key: 'stop',
		value: function stop() {

			clearInterval(this.timer);
			this.timer = false;
		}
	}, {
		key: 'isRunning',
		value: function isRunning() {

			return this.timer !== false;
		}
	}]);

	return Interval;
}();

exports.default = Interval;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _TokenWatcher = __webpack_require__(3);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _ProxyIdentifier = __webpack_require__(12);

var _ProxyIdentifier2 = _interopRequireDefault(_ProxyIdentifier);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyAuth = function () {
	function ProxyAuth() {
		_classCallCheck(this, ProxyAuth);

		if (_ServiceMeta2.default.PLATFORM.toUpperCase() === "FIREFOX") {
			chrome.webRequest.onAuthRequired.addListener(this.onAuthFirefoxHandler.bind(this), { urls: ["<all_urls>"] }, ["blocking"]);
		} else {
			chrome.webRequest.onAuthRequired.addListener(this.onAuthChromeHandler.bind(this), { urls: ["<all_urls>"] }, ["asyncBlocking"]);
		}
	}

	_createClass(ProxyAuth, [{
		key: 'onAuthChromeHandler',
		value: function onAuthChromeHandler(details, callback) {
			var request = {
				details: details,
				callback: callback
			};

			// onAuth not from proxy
			if (!details.isProxy) return callback();

			if (details.hasOwnProperty("realm") && details.realm.toLowerCase().indexOf(_ServiceMeta2.default.REALM.toLowerCase()) > -1) {

				if (!_TokenWatcher2.default.isRunning()) {

					// set request to work with
					_TokenWatcher2.default.setRunning();

					//put trigger request to queue (if the request is not identifyRequest) // what if identifyReques is trigger?
					if (!(request.details.url.indexOf(_ProxyIdentifier2.default.getIdentifierLink()) != -1)) {

						_TokenWatcher2.default.setPendingRequest(request.callback);
						_TokenWatcher2.default.startIdentifyRequest();
					} else {

						_TokenWatcher2.default.setIdentifyId(details.requestId);
						_TokenWatcher2.default.setCurrentRequest(details);

						if (!_TokenWatcher2.default.isCachedUsed()) {
							_TokenWatcher2.default.useCache(request.callback);
						} else {
							_TokenWatcher2.default.freshToken(request.callback);
						}
						return 0;
					}
				} else {

					//console.log("identifierID", tokenWatcher.identifyId);


					//console.log("i am id :", details.requestId);
					//console.log("it is running but i need still ###");
					//tokenWatcher.printState();

					// Case: identifyRequest entering 1st time
					if (_TokenWatcher2.default.getIdentifyId() != 0 && _TokenWatcher2.default.getIdentifyId() === details.requestId && _Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest())) {
						_TokenWatcher2.default.setCurrentRequest(details);

						//console.log("second init round");
						if (!_TokenWatcher2.default.isCachedUsed()) {
							_TokenWatcher2.default.useCache(request.callback);
						} else {
							_TokenWatcher2.default.freshToken(request.callback);
						}
						return 0;
					}

					//Case: identifyRequest entering more than 1 time
					if (!_Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest()) && _TokenWatcher2.default.getCurrentRequest().requestId === details.requestId && !_TokenWatcher2.default.getNextEnteringKill()) {

						_TokenWatcher2.default.setNextEnteringKill(true);
						_TokenWatcher2.default.freshToken(request.callback);
						//console.log("this was last try");
						return 0;
					} else if (!_Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest()) && _TokenWatcher2.default.getCurrentRequest().requestId === details.requestId && _TokenWatcher2.default.getNextEnteringKill()) {
						//console.log("ok cancel all");
						request.callback({ cancel: true });
						_TokenWatcher2.default.closeAllCallbacks();
						return 0;
					}

					_TokenWatcher2.default.setPendingRequest(request.callback);
				}
			}
			return 0;
		}
	}, {
		key: 'onAuthFirefoxHandler',
		value: function onAuthFirefoxHandler(request) {

			var _this = this;

			if (!request.isProxy) return;

			if (request.hasOwnProperty("realm") && request.realm.toLowerCase().indexOf(_ServiceMeta2.default.REALM.toLowerCase()) > -1) {

				if (!_TokenWatcher2.default.isRunning()) {

					//Start TokenWatcher
					_TokenWatcher2.default.setRunning();

					var isRequestProxyIdentifier = request.url.indexOf(_ProxyIdentifier2.default.getIdentifierLink()) != -1;

					if (isRequestProxyIdentifier) {

						/*
      	Case: The test request for a proxy triggers authentication. This happens when token
      	is not cached in the browser and we connect for the first time.
      	We init Tokenwatcher with id of this request to make sure that it is handled with 
      	either freshToken or cached Token.
      */

						_TokenWatcher2.default.setIdentifyId(request.requestId);
						_TokenWatcher2.default.setCurrentRequest(request);

						/* 
      	If we have alreay used cached token, return a auth promise: Which promises that
      	this request will be retried with a fresh token
      */

						if (_TokenWatcher2.default.isCachedUsed()) return _this.authPromise(_TokenWatcher2.default.freshToken.bind(_TokenWatcher2.default), false);

						/*
      	Return promise that this request will be tried with a cached token
      */

						return _this.authPromise(_TokenWatcher2.default.useCache.bind(_TokenWatcher2.default), false);
					} else {

						/*
      	Case: When some other request triggers proxy auth. We will add this request to a waiting
      	list and start a identify request via TokenWatcher. Once That identify request is handled
      	with correct credentials. This request will be answered from waiting list
      */

						return _this.authPromise(_TokenWatcher2.default.setPendingRequest.bind(_TokenWatcher2.default), true);
					}
				} else {

					/* TokenWatcher already running */

					/*
     	Case: Since TokenWatcher is running. We have a identify request, which we are following.
     	There are 4 cases:
     		1. 	We have started identify request because some other request triggered Auth. And this is
     			first enterance of the identify request which we have started via TokenWatcher
     				=> Use cache or fresh token
     		2. 	A identify request triggered the Auth in first place, and this is its second enterance
     				=> Use fresh token
     		3.	Identify request entering third time: 
     				=> Cache and fresh Token failed, DISCONNECT
     		4.	Request is not identify request
     				=> Put it in waiting list, until we find a working token
     	 */

					/*
     Case 1: isIdentifyRequestFirstTime
     */

					if (_TokenWatcher2.default.getIdentifyId() != 0 && _TokenWatcher2.default.getIdentifyId() === request.requestId && _Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest())) {

						_TokenWatcher2.default.setCurrentRequest(request);

						if (_TokenWatcher2.default.isCachedUsed()) return _this.authPromise(_TokenWatcher2.default.freshToken, false);

						return _this.authPromise(_TokenWatcher2.default.useCache.bind(_TokenWatcher2.default), false);
					}

					/* Case 2: isIdentifyRequestSecondTime */

					if (!_Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest()) && _TokenWatcher2.default.getCurrentRequest().requestId === request.requestId && !_TokenWatcher2.default.getNextEnteringKill()) {
						_TokenWatcher2.default.setNextEnteringKill(true);

						return _this.authPromise(_TokenWatcher2.default.freshToken.bind(_TokenWatcher2.default), false);
					}

					/* Case 3: isIdentifyRequestThirdTime */

					if (!_Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest()) && _TokenWatcher2.default.getCurrentRequest().requestId === request.requestId && _TokenWatcher2.default.getNextEnteringKill()) {
						_TokenWatcher2.default.closeAllCallbacks();

						return { cancel: true };
					}

					/* Case 4 */

					return _this.authPromise(_TokenWatcher2.default.setPendingRequest.bind(_TokenWatcher2.default), false);
				}
			}
		}
	}, {
		key: 'authPromise',
		value: function authPromise(funct, isIdentify) {
			return new Promise(function (resolve, reject) {

				//tokenWatcher.pendingRequest.push(resolve);

				if (isIdentify) _TokenWatcher2.default.startIdentifyRequest();

				funct(resolve);

				//console.log("pendingRequestPromise", tokenWatcher.pendingRequest);    
			});
		}
	}]);

	return ProxyAuth;
}();

exports.default = new ProxyAuth();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Base = __webpack_require__(31);

var _Base2 = _interopRequireDefault(_Base);

var _endpoints = __webpack_require__(2);

var _endpoints2 = _interopRequireDefault(_endpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutoProxy = function () {
	function AutoProxy() {
		_classCallCheck(this, AutoProxy);

		chrome.webRequest.onErrorOccurred.addListener(this.onRequestError.bind(this), { urls: ["<all_urls>"] });
		this.init();
	}

	_createClass(AutoProxy, [{
		key: 'init',
		value: function init() {
			var _this = this;

			_this.autoProxy = [];
			_this.isRunning = false;
			_this.current = "";
		}
	}, {
		key: 'check',
		value: function check(value) {
			var _this = this;

			if (!value) return;

			_this.getOriginUrl(value).then(function (originUrl) {

				_this.getUserTag().then(function (usertag) {

					value.referer = originUrl;
					value.errorSource = usertag;

					_this.autoProxy.push(value);
					_this.checkProxy();
				});
			});
		}
	}, {
		key: 'getOriginUrl',
		value: function getOriginUrl(details) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				if (!details) return resolve("");

				if (details && details.hasOwnProperty('originUrl') && details.originUrl) {

					return resolve(_Utils2.default.escapeParamsOfUrl(details.originUrl));
				}

				if (chrome && chrome.tabs && chrome.tabs.get && details.hasOwnProperty('tabId') && _this.isInt(details.tabId) && details.tabId > 0) {
					chrome.tabs.get(details.tabId, function (tab) {

						return resolve(_Utils2.default.escapeParamsOfUrl(tab.url));
					});
				} else {

					return resolve("");
				}
			});
		}
	}, {
		key: 'getUserTag',
		value: function getUserTag() {
			return new Promise(function (resolve, reject) {
				chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, function (storage) {

					if (storage && storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA]) return resolve(storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].usertag);

					return resolve("");
				});
			});
		}
	}, {
		key: 'checkProxy',
		value: function checkProxy() {
			var _this = this;

			if (_this.autoProxy.length > 0 && !_this.isRunning) {
				_this.current = _this.autoProxy.pop();
				_this.isRunning = true;

				_this.current.url = _Utils2.default.escapeParamsOfUrl(_this.current.url);

				_this.checkIsCached(_this.current.url).then(function (isCached) {

					if (!isCached) {

						chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.DCACHE, function (storage) {
							var dCache = storage[_ServiceMeta2.default.STORAGEKEYS.DCACHE] != undefined ? storage[_ServiceMeta2.default.STORAGEKEYS.DCACHE] : {};
							var hashLink = _Base2.default.encode(_this.current.url);
							dCache[hashLink] = Math.floor(Date.now() / 1000) + 60 * 60;

							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.DCACHE, dCache), function () {
								var ready = _this.current;
								ready.cv = _ServiceMeta2.default.VERSION;

								var data = JSON.stringify(ready);

								_this.verifyProxy(data);
								_this.isRunning = false;
								_this.checkProxy();
							});
						});
					} else {
						_this.isRunning = false;
					}
				});
			}
		}
	}, {
		key: 'isInt',
		value: function isInt(value) {
			var x;
			if (isNaN(value)) {
				return false;
			}
			x = parseFloat(value);
			return (x | 0) === x;
		}
	}, {
		key: 'checkIsCached',
		value: function checkIsCached(d) {
			return new Promise(function (resolve, reject) {
				var encodedD = _Base2.default.encode(d);

				chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.DCACHE, function (storage) {
					if (d.indexOf(_ServiceMeta2.default.BASEDOMAIN) > -1 || d.indexOf(_ServiceMeta2.default.BACKUPBASEDOMAIN) > -1 || d.match(_ServiceMeta2.default.TESTREQUESTREGEX) != null) {
						return resolve(true);
					}

					var dCache = storage[_ServiceMeta2.default.STORAGEKEYS.DCACHE];

					if (dCache != undefined) {
						if (typeof dCache[encodedD] === 'undefined') {

							return resolve(false);
						} else {
							var timeNow = Math.floor(Date.now() / 1000);

							if (dCache[encodedD] >= timeNow) {

								return resolve(true);
							} else {

								return resolve(false);
							}
						}
					} else {
						return resolve(false);
					}
				});
			});
		}
	}, {
		key: 'verifyProxy',
		value: function verifyProxy(checkData) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {
				var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
				var isBack = Baselink && Baselink.indexOf(_ServiceMeta2.default.BACKUPBASEDOMAIN) > -1 ? true : false;
				var autoProxyLink = _ServiceMeta2.default.FALLBACKLINK + _endpoints2.default.AUTOPROXY;

				if (isBack) {
					autoProxyLink = autoProxyLink.replace(_ServiceMeta2.default.BASEDOMAIN, _ServiceMeta2.default.BACKUPBASEDOMAIN);
				}

				var xhr = new XMLHttpRequest();
				xhr.open('POST', autoProxyLink, true);

				var data = encodeURIComponent(checkData);

				var params = "data=" + data;
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

				xhr.onreadystatechange = function () {
					// If the request completed
					if (xhr.readyState == 4) {

						if (xhr.status == 200) {} else {}
					}
				};

				// Send the request and set status
				xhr.send(params);
			});
		}

		/* Events */

	}, {
		key: 'onRequestError',
		value: function onRequestError(details) {
			var _this = this;
			if (details && (details.error == _ServiceMeta2.default.ERRORCODES.VERIFYERROR || _ServiceMeta2.default.ERRORCODES.VERIFYERROR2 !== undefined && details.error == _ServiceMeta2.default.ERRORCODES.VERIFYERROR2)) _this.check(details);
		}
	}]);

	return AutoProxy;
}();

exports.default = new AutoProxy();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base64 = function () {
    function Base64() {
        _classCallCheck(this, Base64);

        this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    }

    _createClass(Base64, [{
        key: "encode",
        value: function encode(e) {
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = this._utf8_encode(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64;
                } else if (isNaN(i)) {
                    a = 64;
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
            }
            return t;
        }
    }, {
        key: "decode",
        value: function decode(e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r);
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i);
                }
            }
            t = this._utf8_decode(t);

            return t;
        }
    }, {
        key: "_utf8_encode",
        value: function _utf8_encode(e) {
            e = e.replace(/\r\n/g, "\n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                } else if (r > 127 && r < 2048) {
                    t += String.fromCharCode(r >> 6 | 192);
                    t += String.fromCharCode(r & 63 | 128);
                } else {
                    t += String.fromCharCode(r >> 12 | 224);
                    t += String.fromCharCode(r >> 6 & 63 | 128);
                    t += String.fromCharCode(r & 63 | 128);
                }
            }
            return t;
        }
    }, {
        key: "_utf8_decode",
        value: function _utf8_decode(e) {

            var t = "";
            var n = 0;
            var r = c1 = c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++;
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    n += 2;
                } else {
                    c2 = e.charCodeAt(n + 1);
                    c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3;
                }
            }
            return t;
        }
    }]);

    return Base64;
}();

exports.default = new Base64();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Extension = function () {
	function Extension() {
		_classCallCheck(this, Extension);

		this.setUninstallLink();
		this.setInstallId();

		chrome.runtime.onStartup.addListener(this.onStartup.bind(this));
	}

	_createClass(Extension, [{
		key: 'setUninstallLink',
		value: function setUninstallLink() {
			if (chrome.runtime.setUninstallURL) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {

					var config;

					if (storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] && storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] != undefined) {
						var params = "?" + _Utils2.default.addMetaParameter("");
						var uninstallLink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + _ServiceMeta2.default.UNINSTALLPATH;
						chrome.runtime.setUninstallURL(uninstallLink + params);
					}
				});
			}
		}
	}, {
		key: 'setInstallId',
		value: function setInstallId() {
			_Utils2.default.setInstallId();
		}

		/* Events */

	}, {
		key: 'onStartup',
		value: function onStartup() {

			chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.DCACHE);
		}
	}]);

	return Extension;
}();

exports.default = new Extension();

/***/ })
/******/ ]);