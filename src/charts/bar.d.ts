import { D3Selection } from 'd3-selection';
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

    export function chartGradient(gradient: string[]): Bar;
    export function chartGradient(): string[];
    export function betweenBarsPadding(padding: number): Bar;
    export function betweenBarsPadding(module: Bar): number;
    export function colorSchema(): string[];
    export function colorSchema(schema: string[]): Bar;
    export function enableLabels(): boolean;
    export function enableLabels(enabled: boolean): Bar;
    export function exportChart(fileName?: string, title?: string): void;
    export function hasPercentage(hasPercentage: boolean): Bar;
    export function hasPercentage(): boolean;
    export function hasSingleBarHighlight(hasSingleBarHighlight: boolean): Bar;
    export function hasSingleBarHighlight(): boolean;
    export function height(height: number): Bar;
    export function height(): number;
    export function highlightBarFunction(highlightFunction: Function<void>): Bar;
    export function highlightBarFunction(): Function<void>
    export function isAnimated(isAnimated: boolean): Bar;
    export function isAnimated(): boolean;
    export function isHorizontal(isHorizontal: boolean): Bar;
    export function isHorizontal(): boolean;
    export function labelsMargin(margin: number): Bar;
    export function labelsMargin(): number;
    export function labelsNumberFormat(format: string): Bar; // Should this use d3-format types ifthey exists
    export function labelsNumberFormat(): string;
    export function labelsSize(size: number): Bar;
    export function labelsSize(): number;
    export function loadingState(markup: string): Bar;
    export function loadingState(): string;
    export function margin(margin: BriteChartsMargin): Bar;
    export function margin(): BriteChartsMargin;
    export function nameLabel(label: number): Bar;
    export function nameLabel(): number; // check this
    export function numberFormat(format: string): Bar;
    export function numberFormat(): string;
    export function on(event: CustomEvent, func: Function<void>): Bar;
    export function percentageAxisToMaxRatio(axisToMaxRation: number): Bar;
    export function percentageAxisToMaxRatio(): number;
    export function shouldReverseColorList(shouldReverseColorList: boolean): Bar;
    export function shouldReverseColorList(): boolean;
    export function orderingFunction(func: Function<void>): Bar;
    export function orderingFunction(): Function<void>;
    export function valueLabel(label: number): Bar;
    export function valueLabel(): number;
    export function width(width: number): Bar;
    export function width(): number;
    export function xAxisLabel(label: string): Bar;
    export function xAxisLabel(): string;
    export function xAxisLabelOffset(offset: number): Bar;
    export function xAxisLabelOffset(): number;
    export function xTicks(ticks: number): Bar;
    export function xTicks(): number;
    export function yAxisLabel(label: string): Bar;
    export function yAxisLabel(): string;
    export function yAxisLabelOffset(labelOffset: number): Bar;
    export function yAxisLabelOffset(): number;
    export function yAxisPaddingBetweenChart(yPadding: number): Bar;
    export function yAxisPaddingBetweenChart(): number;
    export function yTicks(ticks: number): Bar;
    export function yTicks(): number;



    /*~ If the module also has properties, declare them here. For example,
     *~ this declaration says that this code is legal:
     *~   import f = require('myFuncLibrary');
     *~   console.log(f.defaultName);
     */

    export interface BriteChartsMargin {
        left: number;
        right: number;
        top: number;
        bottom: number;
    }
    export type CustomEvent = 'customMouseOver' | 'customMouseMove' | 'customMouseOut' | 'customClick';
}
