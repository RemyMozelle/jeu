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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Personnage = exports.Personnage = function () {\n    function Personnage(name, hp, dammage) {\n        _classCallCheck(this, Personnage);\n\n        this.name = name;\n        this.hp = hp;\n        this.dammage = dammage;\n    }\n\n    _createClass(Personnage, [{\n        key: \"attack\",\n        value: function attack(victim) {\n            /* console.log(`${this.name} inflige ${this.dammage} de point de dégat à ${victim.name}.`) */\n            victim.sustain(this);\n        }\n    }, {\n        key: \"sustain\",\n        value: function sustain(attack) {\n            this.hp -= attack.dammage;\n            this.survive();\n            /* if(attack.critChance === true){\n                let normalDommage = attack.dammage;\n                console.log(normalDommage);\n            }\n            else{ */\n\n            /* console.log(`il reste ${this.hp} point de vie à ${this.name}`) */\n\n            /* } */\n        }\n\n        /* critDommage(){\n            let critChance = Math.round(Math.random() * 5);\n            \n            if(critChance === 1){\n                console.log('test');\n                return true;\n            }\n            else{\n                console.log('test');\n                return false;\n            }\n        } */\n\n    }, {\n        key: \"survive\",\n        value: function survive() {\n            if (this.hp <= 0) {\n                console.log(this.name + \" est mort\");\n                this.hp = 0;\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }]);\n\n    return Personnage;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9QZXJzb25uYWdlLmpzPzQxOWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBlcnNvbm5hZ2Uge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBkYW1tYWdlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5ocCA9IGhwXG4gICAgICAgIHRoaXMuZGFtbWFnZSA9IGRhbW1hZ2VcbiAgICB9XG5cbiAgICBhdHRhY2sodmljdGltKSB7XG4gICAgICAgIC8qIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gaW5mbGlnZSAke3RoaXMuZGFtbWFnZX0gZGUgcG9pbnQgZGUgZMOpZ2F0IMOgICR7dmljdGltLm5hbWV9LmApICovXG4gICAgICAgIHZpY3RpbS5zdXN0YWluKHRoaXMpXG4gICAgfVxuXG4gICAgc3VzdGFpbihhdHRhY2spIHtcbiAgICAgICAgdGhpcy5ocCAtPSBhdHRhY2suZGFtbWFnZVxuICAgICAgICB0aGlzLnN1cnZpdmUoKVxuICAgICAgICAvKiBpZihhdHRhY2suY3JpdENoYW5jZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBsZXQgbm9ybWFsRG9tbWFnZSA9IGF0dGFjay5kYW1tYWdlO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm9ybWFsRG9tbWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXsgKi9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyogY29uc29sZS5sb2coYGlsIHJlc3RlICR7dGhpcy5ocH0gcG9pbnQgZGUgdmllIMOgICR7dGhpcy5uYW1lfWApICovXG4gICAgICAgICAgICBcbiAgICAgICAgLyogfSAqL1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKiBjcml0RG9tbWFnZSgpe1xuICAgICAgICBsZXQgY3JpdENoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUpO1xuICAgICAgICBcbiAgICAgICAgaWYoY3JpdENoYW5jZSA9PT0gMSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9ICovXG5cbiAgICBzdXJ2aXZlKCkge1xuICAgICAgICBpZiAodGhpcy5ocCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGVzdCBtb3J0YClcbiAgICAgICAgICAgIHRoaXMuaHAgPSAwXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9QZXJzb25uYWdlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Personnage = __webpack_require__(0);\n\nvar _game = __webpack_require__(2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9pbXBvcnQuanM/ZTI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSAnLi9QZXJzb25uYWdlLmpzJ1xuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vUGVyc29ubmFnZS5qcydcbmltcG9ydCB7IGdhbWUgfSBmcm9tICcuL2dhbWUuanMnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvaW1wb3J0LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Personnage = __webpack_require__(0);\n\nvar _Hero = __webpack_require__(3);\n\nvar _Minion = __webpack_require__(4);\n\nvar denilson = new _Hero.Hero('denilson', 200, 25, 100);\nvar minion = new _Minion.Minion('minion', 300, 25);\n\nwhile (denilson.survive() === false || minion.survive() === false) {\n\n    var gainHp = Math.round(Math.random() * 5);\n    var gainArmor = Math.round(Math.random() * 3);\n\n    if (minion.hp <= 0) {\n        break;\n    }\n\n    if (denilson.hp <= 0) {\n        break;\n    }\n\n    if (denilson.hp > 0) {\n        if (gainArmor === 1) {\n            denilson.bonusArmor();\n        }\n\n        if (gainHp === 1) {\n            denilson.bonusHp();\n        }\n        denilson.attack(minion);\n    }\n\n    if (minion.hp > 0) {\n        minion.attack(denilson);\n    }\n    console.log('-----------------------------------------------------');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9nYW1lLmpzPzIwNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gJy4vUGVyc29ubmFnZS5qcydcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL0hlcm8uanMnXG5pbXBvcnQgeyBNaW5pb24gfSBmcm9tICcuL01pbmlvbi5qcydcblxubGV0IGRlbmlsc29uID0gbmV3IEhlcm8oJ2Rlbmlsc29uJywgMjAwLCAyNSwgMTAwKVxubGV0IG1pbmlvbiA9IG5ldyBNaW5pb24oJ21pbmlvbicsIDMwMCwgMjUpXG5cblxud2hpbGUgKGRlbmlsc29uLnN1cnZpdmUoKSA9PT0gZmFsc2UgfHwgbWluaW9uLnN1cnZpdmUoKSA9PT0gZmFsc2UpIHtcblxuICAgIGxldCBnYWluSHAgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1KVxuICAgIGxldCBnYWluQXJtb3IgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKVxuXG4gICAgaWYgKG1pbmlvbi5ocCA8PSAwKSB7XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGRlbmlsc29uLmhwIDw9IDApIHtcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoZGVuaWxzb24uaHAgPiAwKSB7XG4gICAgICAgIGlmIChnYWluQXJtb3IgPT09IDEpIHtcbiAgICAgICAgICAgIGRlbmlsc29uLmJvbnVzQXJtb3IoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdhaW5IcCA9PT0gMSkge1xuICAgICAgICAgICAgZGVuaWxzb24uYm9udXNIcCgpXG4gICAgICAgIH1cbiAgICAgICAgZGVuaWxzb24uYXR0YWNrKG1pbmlvbilcbiAgICB9XG5cbiAgICBpZiAobWluaW9uLmhwID4gMCkge1xuICAgICAgICBtaW5pb24uYXR0YWNrKGRlbmlsc29uKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9nYW1lLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Hero = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Personnage2 = __webpack_require__(0);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Hero = exports.Hero = function (_Personnage) {\n    _inherits(Hero, _Personnage);\n\n    function Hero(name, hp, dammage, armor) {\n        _classCallCheck(this, Hero);\n\n        var _this = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, name, hp, dammage));\n\n        _this.armor = armor;\n        return _this;\n    }\n\n    _createClass(Hero, [{\n        key: 'bonusHp',\n        value: function bonusHp() {\n            /* console.log(`${this.name} gagne 50 point de vie !`) */\n            this.hp += 50;\n        }\n    }, {\n        key: 'bonusArmor',\n        value: function bonusArmor() {\n            /* console.log(`${this.name} gagne 20 d'armure !`) */\n            this.armor += 20;\n        }\n    }, {\n        key: 'sustain',\n        value: function sustain(attack) {\n            var dammage = attack.dammage - this.armor;\n\n            if (this.armor > 0) {\n                this.armor -= attack.dammage;\n\n                if (this.armor > 0) {\n                    /* console.log(`il reste encore ${this.armor} d'armure à ${this.name}`) */\n                }\n\n                if (Math.sign(this.armor) === -1 || this.armor === 0) {\n                    /* console.log(`${this.name} n'a plus d'armure !`) */\n                    this.armor = 0;\n                }\n            }\n\n            if (this.armor <= 0) {\n                this.hp -= dammage;\n            }\n            /* console.log(`il reste ${this.hp} point de vie à ${this.name}`) */\n            this.survive();\n        }\n    }]);\n\n    return Hero;\n}(_Personnage2.Personnage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9IZXJvLmpzP2JhYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gJy4vUGVyc29ubmFnZS5qcydcblxuZXhwb3J0IGNsYXNzIEhlcm8gZXh0ZW5kcyBQZXJzb25uYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBocCwgZGFtbWFnZSwgYXJtb3IpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgaHAsIGRhbW1hZ2UpXG4gICAgICAgIHRoaXMuYXJtb3IgPSBhcm1vclxuICAgIH1cblxuICAgIGJvbnVzSHAoKSB7XG4gICAgICAgIC8qIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gZ2FnbmUgNTAgcG9pbnQgZGUgdmllICFgKSAqL1xuICAgICAgICB0aGlzLmhwICs9IDUwXG4gICAgfVxuXG4gICAgYm9udXNBcm1vcigpIHtcbiAgICAgICAgLyogY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBnYWduZSAyMCBkJ2FybXVyZSAhYCkgKi9cbiAgICAgICAgdGhpcy5hcm1vciArPSAyMFxuICAgIH1cblxuICAgIHN1c3RhaW4oYXR0YWNrKSB7XG4gICAgICAgIGxldCBkYW1tYWdlID0gYXR0YWNrLmRhbW1hZ2UgLSB0aGlzLmFybW9yXG5cbiAgICAgICAgaWYgKHRoaXMuYXJtb3IgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFybW9yIC09IGF0dGFjay5kYW1tYWdlXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFybW9yID4gMCkge1xuICAgICAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKGBpbCByZXN0ZSBlbmNvcmUgJHt0aGlzLmFybW9yfSBkJ2FybXVyZSDDoCAke3RoaXMubmFtZX1gKSAqL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTWF0aC5zaWduKHRoaXMuYXJtb3IpID09PSAtMSB8fCB0aGlzLmFybW9yID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLyogY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBuJ2EgcGx1cyBkJ2FybXVyZSAhYCkgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmFybW9yID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXJtb3IgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5ocCAtPSBkYW1tYWdlXG4gICAgICAgIH1cbiAgICAgICAgLyogY29uc29sZS5sb2coYGlsIHJlc3RlICR7dGhpcy5ocH0gcG9pbnQgZGUgdmllIMOgICR7dGhpcy5uYW1lfWApICovXG4gICAgICAgIHRoaXMuc3Vydml2ZSgpXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9IZXJvLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Minion = undefined;\n\nvar _Personnage2 = __webpack_require__(0);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Minion = exports.Minion = function (_Personnage) {\n  _inherits(Minion, _Personnage);\n\n  function Minion() {\n    _classCallCheck(this, Minion);\n\n    return _possibleConstructorReturn(this, (Minion.__proto__ || Object.getPrototypeOf(Minion)).apply(this, arguments));\n  }\n\n  return Minion;\n}(_Personnage2.Personnage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9NaW5pb24uanM/YTA4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSAnLi9QZXJzb25uYWdlJ1xuXG5leHBvcnQgY2xhc3MgTWluaW9uIGV4dGVuZHMgUGVyc29ubmFnZSB7XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvTWluaW9uLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);