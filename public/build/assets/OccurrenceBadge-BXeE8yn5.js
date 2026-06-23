import { I as openBlock, St as __exportAll, _ as createElementBlock, _t as normalizeClass, bt as toDisplayString, ht as unref, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
//#region resources/js/pages/occurrences/components/shared/OccurrenceBadge.vue?vue&type=script&setup=true&lang.ts
var OccurrenceBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrenceBadge",
	props: { params: {} },
	setup(__props) {
		const props = __props;
		const variants = {
			low: "bg-green-100 text-green-700",
			medium: "bg-amber-100 text-amber-700",
			high: "bg-red-100 text-red-700"
		};
		const labels = {
			low: "Baixa",
			medium: "Média",
			high: "Alta"
		};
		const severity = props.params.value;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass(["rounded-full px-2 py-1 text-xs font-medium", variants[unref(severity)]]) }, toDisplayString(labels[unref(severity)]), 3);
		};
	}
});
//#endregion
//#region resources/js/pages/occurrences/components/shared/OccurrenceBadge.vue
var OccurrenceBadge_exports = /* @__PURE__ */ __exportAll({ default: () => OccurrenceBadge_default });
var OccurrenceBadge_default = OccurrenceBadge_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { OccurrenceBadge_exports as n, OccurrenceBadge_default as t };
