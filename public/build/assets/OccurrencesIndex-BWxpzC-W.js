import { I as openBlock, L as provide, _ as createElementBlock, b as createVNode, p as computed, st as ref, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as OccurrencesDeleteModal_default } from "./OccurrencesDeleteModal-Bz-yYj9M.js";
import { t as OccurrencesStats_default } from "./OccurrencesStats-BDfUIdet.js";
import { t as OccurrencesHeader_default } from "./OccurrencesHeader-cJHcGF0O.js";
import { t as OccurrencesFilters_default } from "./OccurrencesFilters-CGqA1TR_.js";
import { t as OccurrencesTable_default } from "./OccurrencesTable-BJrvCltg.js";
import { t as OccurrencesCreateModal_default } from "./OccurrencesCreateModal-CrZi-EsP.js";
import { t as OccurrencesEditModal_default } from "./OccurrencesEditModal-joWYfBDX.js";
//#region resources/js/pages/occurrences/OccurrencesIndex.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "space-y-6 m-10" };
//#endregion
//#region resources/js/pages/occurrences/OccurrencesIndex.vue
var OccurrencesIndex_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrencesIndex",
	props: { occurrences: {} },
	setup(__props) {
		const props = __props;
		const createModalOpen = ref(false);
		const editModalOpen = ref(false);
		const deleteModalOpen = ref(false);
		const selectedOccurrence = ref(null);
		const search = ref("");
		const severity = ref("");
		const date = ref("");
		const filteredOccurrences = computed(() => {
			return occurrences.value.filter((occurrence) => {
				const matchesSearch = occurrence.title.toLowerCase().includes(search.value.toLowerCase());
				const matchesSeverity = !severity.value || occurrence.severity === severity.value;
				const matchesDate = !date.value || occurrence.occurred_at.split(" ")[0] === date.value;
				return matchesSearch && matchesSeverity && matchesDate;
			});
		});
		provide("selectedOccurrence", selectedOccurrence);
		provide("editModalOpen", editModalOpen);
		provide("deleteModalOpen", deleteModalOpen);
		const occurrences = ref(props.occurrences.data ?? []);
		provide("occurrences", occurrences);
		const total = computed(() => occurrences.value.length);
		function countBySeverity(severity) {
			return occurrences.value.filter((occurrence) => occurrence.severity === severity).length;
		}
		const high = computed(() => countBySeverity("high"));
		const medium = computed(() => countBySeverity("medium"));
		const low = computed(() => countBySeverity("low"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createVNode(OccurrencesHeader_default, { onCreate: _cache[0] || (_cache[0] = ($event) => createModalOpen.value = true) }),
				createVNode(OccurrencesStats_default, {
					total: total.value,
					high: high.value,
					medium: medium.value,
					low: low.value
				}, null, 8, [
					"total",
					"high",
					"medium",
					"low"
				]),
				createVNode(OccurrencesFilters_default, {
					search: search.value,
					"onUpdate:search": _cache[1] || (_cache[1] = ($event) => search.value = $event),
					severity: severity.value,
					"onUpdate:severity": _cache[2] || (_cache[2] = ($event) => severity.value = $event),
					date: date.value,
					"onUpdate:date": _cache[3] || (_cache[3] = ($event) => date.value = $event)
				}, null, 8, [
					"search",
					"severity",
					"date"
				]),
				createVNode(OccurrencesTable_default, { items: filteredOccurrences.value }, null, 8, ["items"]),
				createVNode(OccurrencesCreateModal_default, {
					modelValue: createModalOpen.value,
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => createModalOpen.value = $event)
				}, null, 8, ["modelValue"]),
				createVNode(OccurrencesEditModal_default, {
					modelValue: editModalOpen.value,
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => editModalOpen.value = $event),
					occurrence: selectedOccurrence.value
				}, null, 8, ["modelValue", "occurrence"]),
				createVNode(OccurrencesDeleteModal_default, {
					modelValue: deleteModalOpen.value,
					"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => deleteModalOpen.value = $event),
					occurrence: selectedOccurrence.value
				}, null, 8, ["modelValue", "occurrence"])
			]);
		};
	}
});
//#endregion
export { OccurrencesIndex_default as default };
