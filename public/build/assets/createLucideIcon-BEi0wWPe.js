import { w as h } from "./vue.runtime.esm-bundler-B_pudHEa.js";
//#region node_modules/lucide-vue-next/dist/esm/shared/src/utils.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/defaultAttributes.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/Icon.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = ({ size, strokeWidth = 2, absoluteStrokeWidth, color, iconNode, name, class: classes, ...props }, { slots }) => {
	return h("svg", {
		...defaultAttributes,
		width: size || defaultAttributes.width,
		height: size || defaultAttributes.height,
		stroke: color || defaultAttributes.stroke,
		"stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
		class: ["lucide", `lucide-${toKebabCase(name ?? "icon")}`],
		...props
	}, [...iconNode.map((child) => h(...child)), ...slots.default ? [slots.default()] : []]);
};
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/createLucideIcon.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => (props, { slots }) => h(Icon, {
	...props,
	iconNode,
	name: iconName
}, slots);
//#endregion
export { createLucideIcon as t };
