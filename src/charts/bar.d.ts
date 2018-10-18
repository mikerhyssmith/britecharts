import * as D3Selection from 'd3-selection';
// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module template file for function modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ If this module is a UMD module that exposes a global variable 'myFuncLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace Bar;

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = bar;

/*~ This example shows how to have multiple overloads for your function */
declare function bar(selection: D3Selection): Bar;

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block. Often you will want to describe the
 *~ shape of the return type of the function; that type should
 *~ be declared in here, as this example shows.
 */
declare namespace Bar {

    interface BriteChartsMargin {
        left: number;
        right: number;
        top: number;
        bottom: number;
    }
    type BriteChartsCustomEvent = 'customMouseOver' | 'customMouseMove' | 'customMouseOut' | 'customClick';

    export function chartGradient(x: string[]): Bar;
    export function chartGradient(): string[];
    export function betweenBarsPadding(x: number): Bar;
    export function betweenBarsPadding(): number;
    export function colorSchema(x: string[]): Bar;
    export function colorSchema(): string[];
    export function enableLabels(x: boolean): Bar;
    export function enableLabels(): boolean;
    export function exportChart(x?: string, title?: string): void;
    export function hasPercentage(x: boolean): Bar;
    export function hasPercentage(): boolean;
    export function hasSingleBarHighlight(x: boolean): Bar;
    export function hasSingleBarHighlight(): boolean;
    export function height(x: number): Bar;
    export function height(): number;
    export function highlightBarFunction(x: Function<void>): Bar;
    export function highlightBarFunction(): Function<void>
    export function isAnimated(x: boolean): Bar;
    export function isAnimated(): boolean;
    export function isHorizontal(x: boolean): Bar;
    export function isHorizontal(): boolean;
    export function labelsMargin(x: number): Bar;
    export function labelsMargin(): number;
    export function labelsNumberFormat(x: string): Bar; // Should this use d3-format types ifthey exists
    export function labelsNumberFormat(): string;
    export function labelsSize(x: number): Bar;
    export function labelsSize(): number;
    export function loadingState(x: string): Bar;
    export function loadingState(): string;
    export function margin(x: BriteChartsMargin): Bar;
    export function margin(): BriteChartsMargin;
    export function nameLabel(x: number): Bar;
    export function nameLabel(): number; // check this
    export function numberFormat(x: string): Bar;
    export function numberFormat(): string;
    export function on(x: CustomEvent, y: Function<void>): Bar;
    export function percentageAxisToMaxRatio(x: number): Bar;
    export function percentageAxisToMaxRatio(): number;
    export function shouldReverseColorList(x: boolean): Bar;
    export function shouldReverseColorList(): boolean;
    export function orderingFunction(x: Function<void>): Bar;
    export function orderingFunction(): Function<void>;
    export function valueLabel(x: number): Bar;
    export function valueLabel(): number;
    export function width(x: number): Bar;
    export function width(): number;
    export function xAxisLabel(x: string): Bar;
    export function xAxisLabel(): string;
    export function xAxisLabelOffset(x: number): Bar;
    export function xAxisLabelOffset(): number;
    export function xTicks(x: number): Bar;
    export function xTicks(): number;
    export function yAxisLabel(x: string): Bar;
    export function yAxisLabel(): string;
    export function yAxisLabelOffset(x: number): Bar;
    export function yAxisLabelOffset(): number;
    export function yAxisPaddingBetweenChart(x: number): Bar;
    export function yAxisPaddingBetweenChart(): number;
    export function yTicks(x: number): Bar;
    export function yTicks(): number;



    /*~ If the module also has properties, declare them here. For example,
     *~ this declaration says that this code is legal:
     *~   import f = require('myFuncLibrary');
     *~   console.log(f.defaultName);
     */
}
