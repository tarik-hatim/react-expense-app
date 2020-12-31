"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*let count = 0;

const addOne = () =>{
    count++
    renderApp();
};

const minusOne = () => {
    count--;
    renderApp();
};
const reset = () => {
    count = 0;
    renderApp();
};

const renderApp = () => {
    var templateTwo = (
        <div>
        <h1>Count : {count}</h1>
       <button onClick={addOne}>+1</button>
       <button onClick={minusOne}>-1</button>
       <button onClick={reset}>reset</button>
    </div>    
    );

    const appRoot = document.getElementById('app');

    ReactDOM.render(templateTwo, appRoot);
};

renderApp();
*/
var Counter = /*#__PURE__*/function (_React$Component) {
  _inherits(Counter, _React$Component);

  var _super = _createSuper(Counter);

  function Counter(props) {
    var _this;

    _classCallCheck(this, Counter);

    _this = _super.call(this, props);
    _this.addOne = _this.addOne.bind(_assertThisInitialized(_this));
    _this.minusOne = _this.minusOne.bind(_assertThisInitialized(_this));
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var count = parseInt(localStorage.getItem('count'), 10);

      if (!isNaN(count)) {
        this.setState(function () {
          return {
            count: count
          };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
      }
    }
  }, {
    key: "addOne",
    value: function addOne() {
      this.setState(function (state) {
        return {
          count: state.count + 1
        };
      });
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      this.setState(function (state) {
        return {
          count: state.count - 1
        };
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count : ", this.state.count), /*#__PURE__*/React.createElement("button", {
        onClick: this.addOne
      }, "+1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.minusOne
      }, "-1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.reset
      }, "reset"));
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Counter, {
  count: 50
}), document.getElementById('app'));
