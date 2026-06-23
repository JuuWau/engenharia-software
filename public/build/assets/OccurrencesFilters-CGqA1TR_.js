import { I as openBlock, St as __exportAll, W as useModel, Y as withCtx, b as createVNode, h as createBlock, ht as unref, m as createBaseVNode, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { a as Select_default, i as SelectItem_default, n as SelectValue_default, r as SelectTrigger_default, t as SelectContent_default } from "./SelectContent-CWJYWzmP.js";
import { t as FilterX } from "./filter-x-CMVkHJv_.js";
import { t as Input_default } from "./Input-CyYI105W.js";
import { m as Button_default } from "./app-BF-ImWg4.js";
import { t as Card_default } from "./Card-CmPAyxh4.js";
import { t as CardContent_default } from "./CardContent-C8HpFZmd.js";
//#region resources/js/pages/occurrences/components/filters/OccurrencesFilters.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col gap-4 lg:flex-row" };
var OccurrencesFilters_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrencesFilters",
	props: {
		"search": {},
		"searchModifiers": {},
		"severity": {},
		"severityModifiers": {},
		"date": {},
		"dateModifiers": {}
	},
	emits: [
		"update:search",
		"update:severity",
		"update:date"
	],
	setup(__props) {
		const search = useModel(__props, "search");
		const severity = useModel(__props, "severity");
		const date = useModel(__props, "date");
		function clearFilters() {
			search.value = "";
			severity.value = "";
			date.value = "";
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Card_default, null, {
				default: withCtx(() => [createVNode(CardContent_default, { class: "p-4" }, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
						createVNode(Input_default, {
							modelValue: search.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event),
							placeholder: "\n            Buscar ocorrência...\n          ",
							class: "flex-1"
						}, null, 8, ["modelValue"]),
						createVNode(Select_default, {
							modelValue: severity.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => severity.value = $event)
						}, {
							default: withCtx(() => [createVNode(SelectTrigger_default, { class: "w-full lg:w-[180px]" }, {
								default: withCtx(() => [createVNode(SelectValue_default, { placeholder: "\n                Severidade\n              " })]),
								_: 1
							}), createVNode(SelectContent_default, null, {
								default: withCtx(() => [
									createVNode(SelectItem_default, { value: "low" }, {
										default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Baixa ", -1)])]),
										_: 1
									}),
									createVNode(SelectItem_default, { value: "medium" }, {
										default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode(" Média ", -1)])]),
										_: 1
									}),
									createVNode(SelectItem_default, { value: "high" }, {
										default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode(" Alta ", -1)])]),
										_: 1
									})
								]),
								_: 1
							})]),
							_: 1
						}, 8, ["modelValue"]),
						createVNode(Input_default, {
							modelValue: date.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => date.value = $event),
							type: "date",
							class: "w-full lg:w-[180px]"
						}, null, 8, ["modelValue"]),
						createVNode(Button_default, {
							variant: "outline",
							class: "w-full lg:w-auto",
							onClick: clearFilters
						}, {
							default: withCtx(() => [createVNode(unref(FilterX), { class: "mr-2 h-4 w-4" }), _cache[6] || (_cache[6] = createTextVNode(" Limpar ", -1))]),
							_: 1
						})
					])]),
					_: 1
				})]),
				_: 1
			});
		};
	}
});
//#endregion
//#region resources/js/pages/occurrences/components/filters/OccurrencesFilters.vue
var OccurrencesFilters_exports = /* @__PURE__ */ __exportAll({ default: () => OccurrencesFilters_default });
var OccurrencesFilters_default = OccurrencesFilters_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { OccurrencesFilters_exports as n, OccurrencesFilters_default as t };
