import { I as openBlock, _ as createElementBlock, at as reactive, b as createVNode, ht as unref, m as createBaseVNode, p as computed, st as ref, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as DiaryEditor_default } from "./DiaryEditor-BVLEF_7x.js";
import { t as DiaryHeader_default } from "./DiaryHeader-B_IR3cgF.js";
import { G as l } from "./app-BF-ImWg4.js";
import { t as axios } from "./axios-CQ4cH468.js";
import { a as string, i as object, t as _enum } from "./schemas-D1AZt847.js";
import { t as DiaryCalendar_default } from "./DiaryCalendar-DvST20Mj.js";
//#region resources/js/pages/diary/composables/useDiaryCalendar.ts
function useDiaryCalendar(currentDisplayDate) {
	const weekDays = [
		"D",
		"S",
		"T",
		"Q",
		"Q",
		"S",
		"S"
	];
	const calendarDays = computed(() => {
		const year = currentDisplayDate.value.getFullYear();
		const month = currentDisplayDate.value.getMonth();
		const firstDayOfMonth = new Date(year, month, 1).getDay();
		const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
		const lastDateOfPrevMonth = new Date(year, month, 0).getDate();
		const days = [];
		for (let i = firstDayOfMonth - 1; i >= 0; i--) {
			const prevMonthDay = lastDateOfPrevMonth - i;
			const date = new Date(year, month - 1, prevMonthDay);
			days.push({
				day: prevMonthDay,
				date: formatDate(date),
				isCurrentMonth: false
			});
		}
		for (let i = 1; i <= lastDateOfMonth; i++) {
			const date = new Date(year, month, i);
			days.push({
				day: i,
				date: formatDate(date),
				isCurrentMonth: true
			});
		}
		const remainingDays = 42 - days.length;
		for (let i = 1; i <= remainingDays; i++) {
			const date = new Date(year, month + 1, i);
			days.push({
				day: i,
				date: formatDate(date),
				isCurrentMonth: false
			});
		}
		return days;
	});
	function formatDate(date) {
		return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
	}
	return {
		weekDays,
		calendarDays,
		formatDate
	};
}
//#endregion
//#region resources/js/pages/diary/schemas/diary.schema.ts
var moodSchema = _enum([
	"happy",
	"sad",
	"angry",
	"fear",
	"anxious",
	"neutral"
]);
var diaryEntrySchema = object({
	title: string().nullable(),
	content: string().nullable(),
	entry_date: string().min(1, "A data é obrigatória"),
	mood: moodSchema.nullable()
});
//#endregion
//#region resources/js/pages/diary/composables/useDiaryEntries.ts
function useDiaryEntries(entries) {
	const selectedDate = ref(null);
	const entry = ref({
		title: "",
		content: "",
		mood: null
	});
	const errors = reactive({});
	const diaryStore = ref(entries.reduce((acc, item) => {
		acc[item.entry_date] = item;
		return acc;
	}, {}));
	function clearEntry() {
		entry.value = {
			title: "",
			content: "",
			mood: null
		};
	}
	function selectDay(date) {
		selectedDate.value = date;
		const stored = diaryStore.value[date];
		entry.value = {
			title: stored?.title ?? "",
			content: stored?.content ?? "",
			mood: stored?.mood ?? null
		};
	}
	async function saveEntry() {
		if (!selectedDate.value) return;
		Object.keys(errors).forEach((key) => {
			delete errors[key];
		});
		const payload = {
			title: entry.value.title,
			content: entry.value.content,
			mood: entry.value.mood,
			entry_date: selectedDate.value
		};
		const result = diaryEntrySchema.safeParse(payload);
		if (!result.success) {
			result.error.issues.forEach((issue) => {
				const field = issue.path[0];
				errors[field] = issue.message;
			});
			l.error(result.error.issues[0].message);
			return;
		}
		try {
			const { data } = await axios.post("/diary", result.data);
			diaryStore.value[selectedDate.value] = data.data;
			l.success(data.message);
		} catch (error) {
			console.error(error);
			l.error("Não foi possível salvar o registro.");
		}
	}
	return {
		selectedDate,
		entry,
		errors,
		diaryStore,
		selectDay,
		saveEntry,
		clearEntry
	};
}
//#endregion
//#region resources/js/pages/diary/composables/useDiaryNavigation.ts
function useDiaryNavigation() {
	const currentDisplayDate = ref(/* @__PURE__ */ new Date());
	const currentMonthLabel = computed(() => currentDisplayDate.value.toLocaleString("pt-BR", {
		month: "long",
		year: "numeric"
	}));
	function previousMonth() {
		const date = new Date(currentDisplayDate.value);
		date.setMonth(date.getMonth() - 1);
		currentDisplayDate.value = date;
	}
	function nextMonth() {
		const date = new Date(currentDisplayDate.value);
		date.setMonth(date.getMonth() + 1);
		currentDisplayDate.value = date;
	}
	function goToToday() {
		currentDisplayDate.value = /* @__PURE__ */ new Date();
	}
	return {
		currentDisplayDate,
		currentMonthLabel,
		previousMonth,
		nextMonth,
		goToToday
	};
}
//#endregion
//#region resources/js/pages/diary/DiaryIndex.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "min-h-screen bg-white text-zinc-900 flex flex-col items-center p-6" };
var _hoisted_2 = { class: "w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6" };
//#endregion
//#region resources/js/pages/diary/DiaryIndex.vue
var DiaryIndex_default = /* @__PURE__ */ defineComponent({
	__name: "DiaryIndex",
	props: { entries: {} },
	setup(__props) {
		const props = __props;
		const navigation = useDiaryNavigation();
		const calendar = useDiaryCalendar(navigation.currentDisplayDate);
		console.log(props.entries);
		const diary = useDiaryEntries(props.entries.data);
		function handleSelectDay(date, isCurrentMonth) {
			if (!isCurrentMonth) {
				const [year, month] = date.split("-").map(Number);
				navigation.currentDisplayDate.value = new Date(year, month - 1, 1);
			}
			diary.selectDay(date);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(DiaryHeader_default, {
				"current-month-label": unref(navigation).currentMonthLabel.value,
				onPrevious: unref(navigation).previousMonth,
				onNext: unref(navigation).nextMonth,
				onToday: unref(navigation).goToToday
			}, null, 8, [
				"current-month-label",
				"onPrevious",
				"onNext",
				"onToday"
			]), createBaseVNode("div", _hoisted_2, [createVNode(DiaryCalendar_default, {
				"week-days": unref(calendar).weekDays,
				"calendar-days": unref(calendar).calendarDays.value,
				"selected-date": unref(diary).selectedDate.value,
				"diary-store": unref(diary).diaryStore.value,
				onSelect: handleSelectDay
			}, null, 8, [
				"week-days",
				"calendar-days",
				"selected-date",
				"diary-store"
			]), createVNode(DiaryEditor_default, {
				"selected-date": unref(diary).selectedDate.value,
				entry: unref(diary).entry.value,
				onClear: unref(diary).clearEntry,
				onSave: unref(diary).saveEntry
			}, null, 8, [
				"selected-date",
				"entry",
				"onClear",
				"onSave"
			])])]);
		};
	}
});
//#endregion
export { DiaryIndex_default as default };
