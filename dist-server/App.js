"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Home = _interopRequireDefault(require("./pages/Home"));

var _About = _interopRequireDefault(require("./pages/About"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const App = () => {
  const [page, setPage] = (0, _react.useState)();

  _react.default.useEffect(() => {
    window.addEventListener("popstate", event => {
      setPage(event.state);
    });
  }, []);

  const onChangePage = e => {
    const page = e.target.dataset.page;
    window.history.pushState(page, "", `/${page}`);
    setPage(page);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    "data-page": "home",
    onClick: onChangePage
  }, "Home"), /*#__PURE__*/_react.default.createElement("button", {
    "data-page": "about",
    onClick: onChangePage
  }, "About")), page === "home" ? /*#__PURE__*/_react.default.createElement(_Home.default, null) : /*#__PURE__*/_react.default.createElement(_About.default, null));
};

exports.App = App;