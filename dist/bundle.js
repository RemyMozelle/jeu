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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Personnage = exports.Personnage = function () {\n    function Personnage(name, hp, dammage) {\n        _classCallCheck(this, Personnage);\n\n        this.name = name;\n        this.hp = hp;\n        this.dammage = dammage;\n    }\n\n    _createClass(Personnage, [{\n        key: \"attack\",\n        value: function attack(victim) {\n            console.log(this.name + \" inflige \" + this.dammage + \" de point de d\\xE9gat \\xE0 \" + victim.name + \".\");\n            victim.sustain(this);\n        }\n    }, {\n        key: \"sustain\",\n        value: function sustain(attack) {\n            var normalDommage = this.dammage;\n            var critical = this.critDommage();\n\n            if (critical === true) {\n                var criticalDommage = normalDommage * 2;\n                console.log(this.name + \" subi une attaque CRITIQUE de \" + attack.name);\n                this.hp -= criticalDommage;\n                console.log(\"il reste \" + this.hp + \" point de vie \\xE0 \" + this.name);\n                this.survive();\n            }\n\n            if (critical === false) {\n                console.log(this.name + \" subi une attaque de \" + attack.name);\n                this.hp -= normalDommage;\n                console.log(\"il reste \" + this.hp + \" point de vie \\xE0 \" + this.name);\n                this.survive();\n            }\n        }\n    }, {\n        key: \"critDommage\",\n        value: function critDommage() {\n            var critChance = Math.round(Math.random() * 5);\n\n            return critChance === 1 ? true : false;\n        }\n    }, {\n        key: \"survive\",\n        value: function survive() {\n            if (this.hp <= 0) {\n                this.hp = 0;\n\n                console.log(this.name + \" est MORT\");\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }]);\n\n    return Personnage;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9QZXJzb25uYWdlLmpzPzQxOWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBlcnNvbm5hZ2Uge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBkYW1tYWdlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5ocCA9IGhwXG4gICAgICAgIHRoaXMuZGFtbWFnZSA9IGRhbW1hZ2VcbiAgICB9XG5cbiAgICBhdHRhY2sodmljdGltKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gaW5mbGlnZSAke3RoaXMuZGFtbWFnZX0gZGUgcG9pbnQgZGUgZMOpZ2F0IMOgICR7dmljdGltLm5hbWV9LmApXG4gICAgICAgIHZpY3RpbS5zdXN0YWluKHRoaXMpXG4gICAgfVxuXG4gICAgc3VzdGFpbihhdHRhY2spIHtcbiAgICAgICAgbGV0IG5vcm1hbERvbW1hZ2UgPSB0aGlzLmRhbW1hZ2VcbiAgICAgICAgbGV0IGNyaXRpY2FsID0gdGhpcy5jcml0RG9tbWFnZSgpXG5cbiAgICAgICAgaWYgKGNyaXRpY2FsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgY3JpdGljYWxEb21tYWdlID0gbm9ybWFsRG9tbWFnZSAqIDJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gc3ViaSB1bmUgYXR0YXF1ZSBDUklUSVFVRSBkZSAke2F0dGFjay5uYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5ocCAtPSBjcml0aWNhbERvbW1hZ2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbCByZXN0ZSAke3RoaXMuaHB9IHBvaW50IGRlIHZpZSDDoCAke3RoaXMubmFtZX1gKVxuICAgICAgICAgICAgdGhpcy5zdXJ2aXZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcml0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gc3ViaSB1bmUgYXR0YXF1ZSBkZSAke2F0dGFjay5uYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5ocCAtPSBub3JtYWxEb21tYWdlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgaWwgcmVzdGUgJHt0aGlzLmhwfSBwb2ludCBkZSB2aWUgw6AgJHt0aGlzLm5hbWV9YClcbiAgICAgICAgICAgIHRoaXMuc3Vydml2ZSgpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyaXREb21tYWdlKCkge1xuICAgICAgICBsZXQgY3JpdENoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUpXG5cbiAgICAgICAgcmV0dXJuIGNyaXRDaGFuY2UgPT09IDEgPyB0cnVlIDogZmFsc2VcbiAgICB9XG5cbiAgICBzdXJ2aXZlKCkge1xuICAgICAgICBpZiAodGhpcy5ocCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhwID0gMFxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGVzdCBNT1JUYClcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1BlcnNvbm5hZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Personnage = __webpack_require__(0);\n\nvar _game = __webpack_require__(2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9pbXBvcnQuanM/ZTI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSAnLi9QZXJzb25uYWdlLmpzJ1xuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vUGVyc29ubmFnZS5qcydcbmltcG9ydCB7IGdhbWUgfSBmcm9tICcuL2dhbWUuanMnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvaW1wb3J0LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Personnage = __webpack_require__(0);\n\nvar _Hero = __webpack_require__(3);\n\nvar _Minion = __webpack_require__(4);\n\nvar denilson = new _Hero.Hero('denilson', 200, 25, 0);\nvar minion = new _Minion.Minion('minion', 500, 25);\n\nvar name = document.querySelectorAll('h4');\nvar life = document.querySelectorAll('.badge-success');\nvar dammage = document.querySelectorAll('.badge-danger');\nvar armor = document.querySelector('.badge-primary');\nvar attack = document.querySelector('button');\n\nname[0].innerHTML = denilson.name;\nname[1].innerHTML = minion.name;\n\nattack.addEventListener('click', function (e) {\n    denilson.attack(minion);\n\n    life[0].innerHTML = denilson.hp;\n    life[1].innerHTML = minion.hp;\n\n    dammage[0].innerHTML = denilson.dammage;\n    dammage[1].innerHTML = minion.dammage;\n\n    armor.innerHTML = denilson.armor;\n    console.log(e);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9nYW1lLmpzPzIwNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gJy4vUGVyc29ubmFnZS5qcydcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL0hlcm8uanMnXG5pbXBvcnQgeyBNaW5pb24gfSBmcm9tICcuL01pbmlvbi5qcydcblxubGV0IGRlbmlsc29uID0gbmV3IEhlcm8oJ2Rlbmlsc29uJywgMjAwLCAyNSwgMClcbmxldCBtaW5pb24gPSBuZXcgTWluaW9uKCdtaW5pb24nLCA1MDAsIDI1KVxuXG5sZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2g0JylcbmxldCBsaWZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhZGdlLXN1Y2Nlc3MnKVxubGV0IGRhbW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFkZ2UtZGFuZ2VyJylcbmxldCBhcm1vciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWRnZS1wcmltYXJ5JylcbmxldCBhdHRhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKVxuXG5uYW1lWzBdLmlubmVySFRNTCA9IGRlbmlsc29uLm5hbWVcbm5hbWVbMV0uaW5uZXJIVE1MID0gbWluaW9uLm5hbWVcblxuYXR0YWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBkZW5pbHNvbi5hdHRhY2sobWluaW9uKTtcblxuICAgIGxpZmVbMF0uaW5uZXJIVE1MID0gZGVuaWxzb24uaHBcbiAgICBsaWZlWzFdLmlubmVySFRNTCA9IG1pbmlvbi5ocFxuXG4gICAgZGFtbWFnZVswXS5pbm5lckhUTUwgPSBkZW5pbHNvbi5kYW1tYWdlXG4gICAgZGFtbWFnZVsxXS5pbm5lckhUTUwgPSBtaW5pb24uZGFtbWFnZVxuXG4gICAgYXJtb3IuaW5uZXJIVE1MID0gZGVuaWxzb24uYXJtb3JcbiAgICBjb25zb2xlLmxvZyhlKTtcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2dhbWUuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Hero = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Personnage2 = __webpack_require__(0);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Hero = exports.Hero = function (_Personnage) {\n    _inherits(Hero, _Personnage);\n\n    function Hero(name, hp, dammage, armor) {\n        _classCallCheck(this, Hero);\n\n        var _this = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, name, hp, dammage));\n\n        _this.armor = armor;\n        return _this;\n    }\n\n    _createClass(Hero, [{\n        key: 'bonusHp',\n        value: function bonusHp() {\n            console.log(this.name + ' gagne 50 point de vie !');\n            this.hp += 50;\n        }\n    }, {\n        key: 'bonusArmor',\n        value: function bonusArmor() {\n            console.log(this.name + ' gagne 20 d\\'armure !');\n            this.armor += 20;\n        }\n    }, {\n        key: 'sustain',\n        value: function sustain(attack) {\n            var dammage = attack.dammage - this.armor;\n\n            if (this.armor > 0) {\n                this.armor -= attack.dammage;\n\n                if (this.armor > 0) {\n                    console.log('il reste encore ' + this.armor + ' d\\'armure \\xE0 ' + this.name);\n                }\n\n                if (Math.sign(this.armor) === -1 || this.armor === 0) {\n                    console.log(this.name + ' n\\'a plus d\\'armure !');\n                    this.armor = 0;\n                }\n            }\n\n            if (this.armor <= 0) {\n                this.hp -= dammage;\n            }\n            console.log('il reste ' + this.hp + ' point de vie \\xE0 ' + this.name);\n            this.survive();\n        }\n    }]);\n\n    return Hero;\n}(_Personnage2.Personnage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9IZXJvLmpzP2JhYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gJy4vUGVyc29ubmFnZS5qcydcblxuZXhwb3J0IGNsYXNzIEhlcm8gZXh0ZW5kcyBQZXJzb25uYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBocCwgZGFtbWFnZSwgYXJtb3IpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgaHAsIGRhbW1hZ2UpXG4gICAgICAgIHRoaXMuYXJtb3IgPSBhcm1vclxuICAgIH1cblxuICAgIGJvbnVzSHAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gZ2FnbmUgNTAgcG9pbnQgZGUgdmllICFgKVxuICAgICAgICB0aGlzLmhwICs9IDUwXG4gICAgfVxuXG4gICAgYm9udXNBcm1vcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBnYWduZSAyMCBkJ2FybXVyZSAhYClcbiAgICAgICAgdGhpcy5hcm1vciArPSAyMFxuICAgIH1cblxuICAgIHN1c3RhaW4oYXR0YWNrKSB7XG4gICAgICAgIGxldCBkYW1tYWdlID0gYXR0YWNrLmRhbW1hZ2UgLSB0aGlzLmFybW9yXG5cbiAgICAgICAgaWYgKHRoaXMuYXJtb3IgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFybW9yIC09IGF0dGFjay5kYW1tYWdlXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFybW9yID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbCByZXN0ZSBlbmNvcmUgJHt0aGlzLmFybW9yfSBkJ2FybXVyZSDDoCAke3RoaXMubmFtZX1gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTWF0aC5zaWduKHRoaXMuYXJtb3IpID09PSAtMSB8fCB0aGlzLmFybW9yID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBuJ2EgcGx1cyBkJ2FybXVyZSAhYClcbiAgICAgICAgICAgICAgICB0aGlzLmFybW9yID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXJtb3IgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5ocCAtPSBkYW1tYWdlXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYGlsIHJlc3RlICR7dGhpcy5ocH0gcG9pbnQgZGUgdmllIMOgICR7dGhpcy5uYW1lfWApXG4gICAgICAgIHRoaXMuc3Vydml2ZSgpXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9IZXJvLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Minion = undefined;\n\nvar _Personnage2 = __webpack_require__(0);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Minion = exports.Minion = function (_Personnage) {\n  _inherits(Minion, _Personnage);\n\n  function Minion() {\n    _classCallCheck(this, Minion);\n\n    return _possibleConstructorReturn(this, (Minion.__proto__ || Object.getPrototypeOf(Minion)).apply(this, arguments));\n  }\n\n  return Minion;\n}(_Personnage2.Personnage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9NaW5pb24uanM/YTA4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSAnLi9QZXJzb25uYWdlJ1xuXG5leHBvcnQgY2xhc3MgTWluaW9uIGV4dGVuZHMgUGVyc29ubmFnZSB7XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvTWluaW9uLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);