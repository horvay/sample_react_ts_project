/// <reference path="../../typings/tsd.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var TestComponent = (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent(props) {
        _super.call(this, props);
    }
    TestComponent.prototype.render = function () {
        return (React.createElement("div", null, "I said ", this.props.prop1, " ", this.props.prop2, " times today!"));
    };
    return TestComponent;
}(React.Component));
exports.TestComponent = TestComponent;
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(React.createElement("div", null, React.createElement(TestComponent, {prop1: "nasus", prop2: 2})), document.getElementById("container"));
}, false);
