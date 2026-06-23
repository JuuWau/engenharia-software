import { I as openBlock, St as __exportAll, _ as createElementBlock, b as createVNode, bt as toDisplayString, ht as unref, m as createBaseVNode, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as createLucideIcon } from "./createLucideIcon-BEi0wWPe.js";
import { _ as ChevronRight } from "./app-BF-ImWg4.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/chevron-left.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronLeft = createLucideIcon("ChevronLeftIcon", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
//#endregion
//#region resources/js/pages/diary/components/header/DiaryHeader.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "w-full max-w-5xl flex justify-between items-center mb-6 pt-10" };
var _hoisted_2 = { class: "flex items-center gap-3" };
var DiaryHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DiaryHeader",
	props: { currentMonthLabel: {} },
	emits: [
		"previous",
		"next",
		"today"
	],
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [_cache[3] || (_cache[3] = createBaseVNode("div", null, [createBaseVNode("h1", { class: "text-2xl font-semibold sm:text-3xl" }, " Diário "), createBaseVNode("p", { class: "mt-1 text-sm text-muted-foreground sm:text-base" }, " Registre e acompanhe anotações diárias com segurança. ")], -1)), createBaseVNode("div", _hoisted_2, [
				createBaseVNode("button", {
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("previous")),
					class: "hover:"
				}, [createVNode(unref(ChevronLeft))]),
				createBaseVNode("span", null, toDisplayString(__props.currentMonthLabel), 1),
				createBaseVNode("button", { onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("next")) }, [createVNode(unref(ChevronRight))]),
				createBaseVNode("button", { onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("today")) }, " Hoje ")
			])]);
		};
	}
});
//#endregion
//#region resources/js/pages/diary/components/header/DiaryHeader.vue
var DiaryHeader_exports = /* @__PURE__ */ __exportAll({ default: () => DiaryHeader_default });
var DiaryHeader_default = DiaryHeader_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { DiaryHeader_exports as n, DiaryHeader_default as t };
