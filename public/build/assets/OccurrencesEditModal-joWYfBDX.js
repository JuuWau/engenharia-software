import { E as inject, I as openBlock, K as watch, St as __exportAll, W as useModel, Y as withCtx, at as reactive, b as createVNode, bt as toDisplayString, h as createBlock, ht as unref, m as createBaseVNode, nt as isRef, st as ref, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as Save } from "./save-CNwRDMOU.js";
import { G as l, h as X, m as Button_default } from "./app-BF-ImWg4.js";
import { t as axios } from "./axios-CQ4cH468.js";
import { a as Dialog_default, i as DialogContent_default, n as DialogHeader_default, r as DialogDescription_default, t as DialogTitle_default } from "./DialogTitle-e0kQ4xKh.js";
import { t as DialogFooter_default } from "./DialogFooter-Cl4LZ1vk.js";
import { t as LoadingKey } from "./loadingKey-D-Ewg4ng.js";
import { t as occurrenceSchema } from "./occurrence.schema-DEPhPDCX.js";
import { t as OccurrenceForm_default } from "./OccurrenceForm-S82vZlZs.js";
//#region resources/js/pages/occurrences/components/modals/OccurrencesEditModal.vue?vue&type=script&setup=true&lang.ts
var OccurrencesEditModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrencesEditModal",
	props: {
		"modelValue": {
			type: Boolean,
			required: true
		},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const loading = inject(LoadingKey, ref(false));
		const errors = reactive({});
		const open = useModel(__props, "modelValue");
		const selectedOccurrence = inject("selectedOccurrence");
		const occurrences = inject("occurrences");
		const existingImages = ref([]);
		let form = reactive({
			title: "",
			description: "",
			occurred_at: "",
			severity: "medium",
			images: []
		});
		watch(selectedOccurrence, (occurrence) => {
			if (!occurrence) return;
			Object.assign(form, {
				title: occurrence.title,
				description: occurrence.description,
				occurred_at: occurrence.occurred_at?.split(" ")[0],
				severity: occurrence.severity,
				images: []
			});
			existingImages.value = occurrence.images;
		}, { immediate: true });
		watch(open, (value) => {
			if (!value) {
				Object.keys(errors).forEach((key) => {
					delete errors[key];
				});
				if (selectedOccurrence?.value) {
					Object.assign(form, {
						title: selectedOccurrence.value.title,
						description: selectedOccurrence.value.description,
						occurred_at: selectedOccurrence.value.occurred_at?.split(" ")[0],
						severity: selectedOccurrence.value.severity,
						images: []
					});
					existingImages.value = selectedOccurrence.value.images;
				}
			}
		});
		async function handleSubmit() {
			if (!loading || !selectedOccurrence?.value) return;
			Object.keys(errors).forEach((key) => {
				delete errors[key];
			});
			const result = occurrenceSchema.safeParse(form);
			if (!result.success) {
				result.error.issues.forEach((issue) => {
					const field = issue.path[0];
					errors[field] = issue.message;
				});
				return;
			}
			try {
				loading.value = true;
				const data = new FormData();
				data.append("title", form.title);
				data.append("description", form.description);
				data.append("occurred_at", form.occurred_at);
				data.append("severity", form.severity);
				existingImages.value.forEach((image) => {
					data.append("existing_images[]", String(image.id));
				});
				form.images.forEach((image) => {
					data.append("images[]", image);
				});
				const response = await axios.put(`/occurrences/${selectedOccurrence.value.id}`, data, { headers: { "Content-Type": "multipart/form-data" } });
				l.success(response.data.message);
				const updatedOccurrence = response.data.data;
				if (occurrences?.value) {
					const index = occurrences.value.findIndex((item) => item.id === updatedOccurrence.id);
					if (index !== -1) {
						occurrences.value[index] = updatedOccurrence;
						occurrences.value = [...occurrences.value];
					}
				}
				open.value = false;
			} catch (error) {
				console.error(error);
				l.error(error.response?.data?.message || "Erro ao atualizar ocorrência.");
			} finally {
				loading.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Dialog_default, {
				open: open.value,
				"onUpdate:open": _cache[3] || (_cache[3] = ($event) => open.value = $event)
			}, {
				default: withCtx(() => [createVNode(DialogContent_default, { class: "sm:max-w-2xl" }, {
					default: withCtx(() => [
						createVNode(DialogHeader_default, null, {
							default: withCtx(() => [createVNode(DialogTitle_default, null, {
								default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode(" Editar ocorrência ", -1)])]),
								_: 1
							}), createVNode(DialogDescription_default, null, {
								default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode(" Altere os campos abaixo para atualizar a ocorrência. ", -1)])]),
								_: 1
							})]),
							_: 1
						}),
						_cache[7] || (_cache[7] = createBaseVNode("hr", null, null, -1)),
						createVNode(OccurrenceForm_default, {
							modelValue: unref(form),
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(form) ? form.value = $event : form = $event),
							errors,
							"existing-images": existingImages.value,
							onRemoveExistingImage: _cache[1] || (_cache[1] = ($event) => existingImages.value.splice($event, 1))
						}, null, 8, [
							"modelValue",
							"errors",
							"existing-images"
						]),
						createVNode(DialogFooter_default, null, {
							default: withCtx(() => [createVNode(Button_default, {
								variant: "outline",
								disabled: unref(loading),
								onClick: _cache[2] || (_cache[2] = ($event) => open.value = false)
							}, {
								default: withCtx(() => [createVNode(unref(X)), _cache[6] || (_cache[6] = createTextVNode(" Cancelar ", -1))]),
								_: 1
							}, 8, ["disabled"]), createVNode(Button_default, {
								variant: "indigo",
								disabled: unref(loading),
								onClick: handleSubmit
							}, {
								default: withCtx(() => [createVNode(unref(Save)), createTextVNode(" " + toDisplayString(unref(loading) ? "Salvando..." : "Salvar"), 1)]),
								_: 1
							}, 8, ["disabled"])]),
							_: 1
						})
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region resources/js/pages/occurrences/components/modals/OccurrencesEditModal.vue
var OccurrencesEditModal_exports = /* @__PURE__ */ __exportAll({ default: () => OccurrencesEditModal_default });
var OccurrencesEditModal_default = OccurrencesEditModal_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { OccurrencesEditModal_exports as n, OccurrencesEditModal_default as t };
