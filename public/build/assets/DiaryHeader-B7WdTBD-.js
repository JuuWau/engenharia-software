import { I as openBlock, _ as createElementBlock, bt as toDisplayString, m as createBaseVNode, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
//#region resources/js/pages/diary/components/DiaryHeader.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "w-full max-w-5xl flex justify-between items-center mb-6" };
var _hoisted_2 = { class: "flex items-center gap-3" };
var _hoisted_3 = { class: "text-sm font-medium text-zinc-700 min-w-[140px] text-center capitalize" };
//#endregion
//#region resources/js/pages/diary/components/DiaryHeader.vue
var DiaryHeader_default = /* @__PURE__ */ defineComponent({
	__name: "DiaryHeader",
	props: { currentMonthLabel: {} },
	emits: [
		"previous",
		"next",
		"today"
	],
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [_cache[5] || (_cache[5] = createBaseVNode("div", { class: "min-w-0" }, [createBaseVNode("h1", { class: "text-2xl font-semibold sm:text-3xl" }, " Diário "), createBaseVNode("p", { class: "mt-1 text-sm text-muted-foreground sm:text-base" }, " Registre e acompanhe anotações diárias com segurança. ")], -1)), createBaseVNode("div", _hoisted_2, [
				createBaseVNode("button", {
					class: "p-2 rounded-lg hover:bg-zinc-100 transition text-zinc-600",
					title: "Mês anterior",
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("previous"))
				}, [..._cache[3] || (_cache[3] = [createBaseVNode("svg", {
					class: "w-5 h-5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24"
				}, [createBaseVNode("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					"stroke-width": "2",
					d: "M15 19l-7-7 7-7"
				})], -1)])]),
				createBaseVNode("span", _hoisted_3, toDisplayString(__props.currentMonthLabel), 1),
				createBaseVNode("button", {
					class: "p-2 rounded-lg hover:bg-zinc-100 transition text-zinc-600 cursor-pointer",
					title: "Próximo mês",
					onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("next"))
				}, [..._cache[4] || (_cache[4] = [createBaseVNode("svg", {
					class: "w-5 h-5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24"
				}, [createBaseVNode("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					"stroke-width": "2",
					d: "M9 5l7 7-7 7"
				})], -1)])]),
				createBaseVNode("button", {
					class: "px-3 py-1 text-sm rounded-lg hover:bg-zinc-100 transition text-zinc-600 border border-zinc-200 cursor-pointer",
					onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("today"))
				}, " Hoje ")
			])]);
		};
	}
});
//#endregion
export { DiaryHeader_default as default };
