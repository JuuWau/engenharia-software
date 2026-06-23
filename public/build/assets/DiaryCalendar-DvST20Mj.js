import { I as openBlock, R as renderList, St as __exportAll, _ as createElementBlock, _t as normalizeClass, bt as toDisplayString, g as createCommentVNode, m as createBaseVNode, u as Fragment, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
//#region resources/js/pages/diary/components/calendar/DiaryCalendar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "bg-white border border-zinc-200 rounded-xl p-4 shadow-sm" };
var _hoisted_2 = { class: "grid grid-cols-7 gap-2 text-center text-xs mb-2" };
var _hoisted_3 = { class: "grid grid-cols-7 gap-2" };
var _hoisted_4 = ["onClick"];
var DiaryCalendar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DiaryCalendar",
	props: {
		weekDays: {},
		calendarDays: {},
		selectedDate: {},
		diaryStore: {}
	},
	emits: ["select"],
	setup(__props) {
		function moodColor(mood) {
			return {
				happy: "bg-green-500",
				sad: "bg-blue-500",
				angry: "bg-red-500",
				fear: "bg-purple-500",
				anxious: "bg-amber-500",
				neutral: "bg-zinc-500"
			}[mood ?? ""];
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				_cache[0] || (_cache[0] = createBaseVNode("h2", { class: "text-sm text-zinc-500 mb-3" }, " Dias ", -1)),
				createBaseVNode("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.weekDays, (day) => {
					return openBlock(), createElementBlock("div", { key: day }, toDisplayString(day), 1);
				}), 128))]),
				createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.calendarDays, (day) => {
					return openBlock(), createElementBlock("button", {
						key: day.date,
						onClick: ($event) => _ctx.$emit("select", day.date, day.isCurrentMonth),
						class: normalizeClass([
							"h-10 w-10 rounded-lg transition relative flex items-center justify-center cursor-pointer",
							day.date === __props.selectedDate ? "bg-indigo-600 text-white font-semibold" : "hover:bg-zinc-100",
							!day.isCurrentMonth && "text-zinc-400"
						])
					}, [createTextVNode(toDisplayString(day.day) + " ", 1), __props.diaryStore[day.date] ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(["absolute bottom-1 w-1.5 h-1.5 rounded-full", moodColor(__props.diaryStore[day.date]?.mood)])
					}, null, 2)) : createCommentVNode("", true)], 10, _hoisted_4);
				}), 128))])
			]);
		};
	}
});
//#endregion
//#region resources/js/pages/diary/components/calendar/DiaryCalendar.vue
var DiaryCalendar_exports = /* @__PURE__ */ __exportAll({ default: () => DiaryCalendar_default });
var DiaryCalendar_default = DiaryCalendar_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { DiaryCalendar_exports as n, DiaryCalendar_default as t };
