/// <reference path="../../typings/tsd.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from "react";
import * as ReactDOM from "react-dom";

export interface ITestProps {
    prop1: string;
    prop2: number;
}

export class TestComponent extends React.Component<ITestProps, {}>
{
    constructor(props: ITestProps) {
        super(props);
    }

    render() {
        return (<div>I said {this.props.prop1} {this.props.prop2} times today!</div>);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<div><TestComponent prop1={"nasus"} prop2={2} /></div>, document.getElementById("container"));
}, false);

