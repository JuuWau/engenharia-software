import { I as openBlock, Y as withCtx, h as createBlock, ht as unref, x as defineComponent, z as renderSlot } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { o as link_default } from "./wayfinder-DBTLeCO_.js";
import { t as createLucideIcon } from "./createLucideIcon-BEi0wWPe.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/mail.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("MailIcon", [["rect", {
	width: "20",
	height: "16",
	x: "2",
	y: "4",
	rx: "2",
	key: "18n3k1"
}], ["path", {
	d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
	key: "1ocrg3"
}]]);
//#endregion
//#region resources/js/components/TextLink.vue
var TextLink_default = /* @__PURE__ */ defineComponent({
	__name: "TextLink",
	props: {
		href: {},
		tabindex: {},
		method: {},
		as: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(link_default), {
				href: __props.href,
				tabindex: __props.tabindex,
				method: __props.method,
				as: __props.as,
				class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"href",
				"tabindex",
				"method",
				"as"
			]);
		};
	}
});
//#endregion
export { Mail as n, TextLink_default as t };
