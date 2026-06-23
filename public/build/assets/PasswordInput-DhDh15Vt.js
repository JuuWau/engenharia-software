import { A as mergeProps, G as useTemplateRef, I as openBlock, _ as createElementBlock, _t as normalizeClass, b as createVNode, h as createBlock, ht as unref, m as createBaseVNode, st as ref, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as cn } from "./utils-C3GTyuW_.js";
import { t as createLucideIcon } from "./createLucideIcon-BEi0wWPe.js";
import { t as Input_default } from "./Input-CyYI105W.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/eye-off.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var EyeOff = createLucideIcon("EyeOffIcon", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/icons/eye.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Eye = createLucideIcon("EyeIcon", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
//#endregion
//#region resources/js/components/PasswordInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative" };
var _hoisted_2 = ["aria-label"];
//#endregion
//#region resources/js/components/PasswordInput.vue
var PasswordInput_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PasswordInput",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props, { expose: __expose }) {
		const props = __props;
		const showPassword = ref(false);
		const inputRef = useTemplateRef("inputRef");
		__expose({
			$el: inputRef,
			focus: () => inputRef.value?.$el?.focus()
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(Input_default), mergeProps({
				ref_key: "inputRef",
				ref: inputRef,
				type: showPassword.value ? "text" : "password",
				class: unref(cn)("pr-10", props.class)
			}, _ctx.$attrs), null, 16, ["type", "class"]), createBaseVNode("button", {
				type: "button",
				onClick: _cache[0] || (_cache[0] = ($event) => showPassword.value = !showPassword.value),
				class: normalizeClass(unref(cn)("absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 text-muted-foreground hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none")),
				"aria-label": showPassword.value ? "Hide password" : "Show password",
				tabindex: -1
			}, [showPassword.value ? (openBlock(), createBlock(unref(EyeOff), {
				key: 0,
				class: "size-4"
			})) : (openBlock(), createBlock(unref(Eye), {
				key: 1,
				class: "size-4"
			}))], 10, _hoisted_2)]);
		};
	}
});
//#endregion
export { Eye as n, EyeOff as r, PasswordInput_default as t };
