// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/power-assert-formatter/power-assert-formatter.d.ts
// Type definitions for power-assert-formatter
// Project: https://github.com/twada/power-assert-formatter
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function powerAssertFormatter(options?:powerAssertFormatter.Options):powerAssertFormatter.Formatter;

declare namespace powerAssertFormatter {
    export interface Options {
        lineDiffThreshold?: number;
        maxDepth?: number;
        outputOffset?: number;
        anonymous?: string;
        circular?: string;
        lineSeparator?: string;
        ambiguousEastAsianCharWidth?: number;
        widthOf?: Function;
        stringify?: Function;
        diff?: Function;
        writerClass?: {new (): any;};
        renderers?: any[]; // { string | Function }[]
    }

    export interface Formatter {
        (powerAssertContext:any): string;
    }

    export function defaultOptions():Options;
}