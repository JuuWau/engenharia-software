import { B as resolveDynamicComponent, I as openBlock, R as renderList, St as __exportAll, Y as withCtx, _ as createElementBlock, _t as normalizeClass, b as createVNode, bt as toDisplayString, h as createBlock, m as createBaseVNode, u as Fragment, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as createLucideIcon } from "./createLucideIcon-BEi0wWPe.js";
import { t as ShieldAlert } from "./shield-alert-Cy8fUWsW.js";
import { t as ShieldCheck } from "./shield-check-DRRcEC0L.js";
import { t as Card_default } from "./Card-CmPAyxh4.js";
import { t as CardContent_default } from "./CardContent-C8HpFZmd.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/chart-column.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChartColumn = createLucideIcon("ChartColumnIcon", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M18 17V9",
		key: "2bz60n"
	}],
	["path", {
		d: "M13 17V5",
		key: "1frdt8"
	}],
	["path", {
		d: "M8 17v-3",
		key: "17ska0"
	}]
]);
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/icons/triangle-alert.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TriangleAlert = createLucideIcon("TriangleAlertIcon", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
//#endregion
//#region resources/js/pages/occurrences/components/header/OccurrencesStats.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4" };
var _hoisted_2 = { class: "space-y-2" };
var _hoisted_3 = { class: "text-muted-foreground text-sm font-medium" };
var _hoisted_4 = { class: "text-3xl font-bold tracking-tight" };
var OccurrencesStats_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrencesStats",
	props: {
		total: {},
		high: {},
		medium: {},
		low: {}
	},
	setup(__props) {
		const cards = [
			{
				title: "Total",
				valueKey: "total",
				icon: ChartColumn,
				iconClass: "bg-indigo-100 text-indigo-700"
			},
			{
				title: "Alta severidade",
				valueKey: "high",
				icon: ShieldAlert,
				iconClass: "bg-red-100 text-red-700"
			},
			{
				title: "Média severidade",
				valueKey: "medium",
				icon: TriangleAlert,
				iconClass: "bg-amber-100 text-amber-700"
			},
			{
				title: "Baixa severidade",
				valueKey: "low",
				icon: ShieldCheck,
				iconClass: "bg-emerald-100 text-emerald-700"
			}
		];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createElementBlock(Fragment, null, renderList(cards, (card) => {
				return createVNode(Card_default, {
					key: card.title,
					class: "border-border/50 overflow-hidden border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
				}, {
					default: withCtx(() => [createVNode(CardContent_default, { class: "flex items-center justify-between p-6" }, {
						default: withCtx(() => [createBaseVNode("div", _hoisted_2, [createBaseVNode("p", _hoisted_3, toDisplayString(card.title), 1), createBaseVNode("h2", _hoisted_4, toDisplayString(_ctx.$props[card.valueKey]), 1)]), createBaseVNode("div", { class: normalizeClass(["flex h-12 w-12 items-center justify-center rounded-2xl", card.iconClass]) }, [(openBlock(), createBlock(resolveDynamicComponent(card.icon), { class: "h-6 w-6" }))], 2)]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024);
			}), 64))]);
		};
	}
});
//#endregion
//#region resources/js/pages/occurrences/components/header/OccurrencesStats.vue
var OccurrencesStats_exports = /* @__PURE__ */ __exportAll({ default: () => OccurrencesStats_default });
var OccurrencesStats_default = OccurrencesStats_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { OccurrencesStats_exports as n, OccurrencesStats_default as t };
