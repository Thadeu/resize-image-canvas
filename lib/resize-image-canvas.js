(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("resize-image-canvas", [], factory);
	else if(typeof exports === 'object')
		exports["resize-image-canvas"] = factory();
	else
		root["resize-image-canvas"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FileResize = __webpack_require__(2);

exports.default = _FileResize.FileResize;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileResize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DrawImage = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileResize = exports.FileResize = function () {
  function FileResize(_ref) {
    var boxPreview = _ref.boxPreview,
        files = _ref.files,
        width = _ref.width,
        height = _ref.height,
        loading = _ref.loading;

    _classCallCheck(this, FileResize);

    this.boxPreview = boxPreview;
    this.files = files;
    this.width = width;
    this.height = height;
    this.loading = loading || 'carregando...';

    this.call();
  }

  _createClass(FileResize, [{
    key: 'createBoxPreview',
    value: function createBoxPreview() {
      var boxImage = document.createElement('div');

      boxImage.classList.add('box-image');
      boxImage.innerHTML = this.loading;
      this.boxPreview.appendChild(boxImage);

      return this.boxPreview;
    }
  }, {
    key: 'call',
    value: function call() {
      var _this = this;

      Array.from(this.files).map(function (file, index) {
        if (file) {
          var reader = new FileReader();
          var sourceImage = new Image();
          var targetImage = new Image();

          var boxPreview = _this.createBoxPreview();

          reader.onload = function (e) {
            /**
             * sourceImage
             */
            sourceImage.src = e.target.result;

            // load da imagem
            sourceImage.onload = function () {
              // pega o base64 do canvas com a imagem dentro
              // sourceImage, maxWidth, maxHeight
              targetImage.src = new _DrawImage.DrawImage({
                sourceImage: sourceImage,
                maxWidth: _this.width,
                maxHeight: _this.height
              }).toDataURL();

              // joga a imagem dentro do box de previews redimensionadas
              boxPreview.innerHTML = '';
              boxPreview.appendChild(targetImage);
            };
          };

          reader.readAsDataURL(file);
        }
      });
    }
  }]);

  return FileResize;
}();
// end

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrawImage = exports.DrawImage = function () {
  function DrawImage(_ref) {
    var sourceImage = _ref.sourceImage,
        maxWidth = _ref.maxWidth,
        maxHeight = _ref.maxHeight;

    _classCallCheck(this, DrawImage);

    this.sourceImage = sourceImage;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.imageWidth = this.sourceImage.width;
    this.imageHeight = this.sourceImage.height;
    this.canvas = document.createElement('canvas');

    this.getDimensions = this.getDimensions.bind(this);
  }

  _createClass(DrawImage, [{
    key: 'toDataURL',
    value: function toDataURL() {
      var context = this.canvas.getContext('2d');

      // tamanho do canvas
      this.canvas.width = this.getDimensions().width;
      this.canvas.height = this.getDimensions().height;

      // contexto do canvas
      context.imageSmoothingQuality = 'high';
      context.drawImage(this.sourceImage, 0, 0, this.getDimensions().width, this.getDimensions().height);

      return this.canvas.toDataURL();
    }
  }, {
    key: 'getDimensions',
    value: function getDimensions() {
      // WideScreen 4:3
      // w:1920 X h:1080
      if (this.imageWidth > this.imageHeight) {
        // largura maior do que eu gostaria
        if (this.imageWidth > this.maxWidth) {
          /**
           * e.g:
           * 1080 * (50 / 1920) -> 28.12
           */
          this.imageHeight *= this.maxWidth / this.imageWidth;
          this.imageWidth = this.maxWidth;
        }
      } else {
        // Imagem mais alta do que larga
        if (this.imageHeight > this.maxHeight) {
          this.imageWidth *= this.maxHeight / this.imageHeight;
          this.imageHeight = this.maxHeight;
        }
      }

      return {
        width: this.imageWidth,
        height: this.imageHeight
      };
    } // getDimensions

  }]);

  return DrawImage;
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=resize-image-canvas.js.map