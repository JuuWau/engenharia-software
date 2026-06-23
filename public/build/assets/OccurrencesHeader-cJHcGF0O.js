import { I as openBlock, St as __exportAll, Y as withCtx, _ as createElementBlock, b as createVNode, ht as unref, m as createBaseVNode, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as createLucideIcon } from "./createLucideIcon-BEi0wWPe.js";
import { m as Button_default } from "./app-BF-ImWg4.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/plus.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Plus = createLucideIcon("PlusIcon", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
//#endregion
//#region resources/js/pages/occurrences/components/header/OccurrencesHeader.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" };
var OccurrencesHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrencesHeader",
	emits: ["create"],
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [_cache[2] || (_cache[2] = createBaseVNode("div", { class: "min-w-0" }, [createBaseVNode("h1", { class: "text-2xl font-semibold sm:text-3xl" }, " Ocorrências "), createBaseVNode("p", { class: "mt-1 text-sm text-muted-foreground sm:text-base" }, " Registre e acompanhe eventos importantes com segurança. ")], -1)), createVNode(Button_default, {
				variant: "indigo",
				class: "w-full sm:w-auto cursor-pointer",
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("create"))
			}, {
				default: withCtx(() => [createVNode(unref(Plus), { class: "h-4 w-4" }), _cache[1] || (_cache[1] = createTextVNode(" Nova ocorrência ", -1))]),
				_: 1
			})]);
		};
	}
});
//#endregion
//#region resources/js/pages/occurrences/components/header/OccurrencesHeader.vue
var OccurrencesHeader_exports = /* @__PURE__ */ __exportAll({ default: () => OccurrencesHeader_default });
var OccurrencesHeader_default = OccurrencesHeader_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { OccurrencesHeader_exports as n, OccurrencesHeader_default as t };
