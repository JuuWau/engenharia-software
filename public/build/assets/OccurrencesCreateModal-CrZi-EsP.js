import { E as inject, I as openBlock, St as __exportAll, W as useModel, Y as withCtx, at as reactive, b as createVNode, bt as toDisplayString, h as createBlock, ht as unref, m as createBaseVNode, nt as isRef, st as ref, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as Save } from "./save-CNwRDMOU.js";
import { G as l, h as X, m as Button_default } from "./app-BF-ImWg4.js";
import { t as axios } from "./axios-CQ4cH468.js";
import { a as Dialog_default, i as DialogContent_default, n as DialogHeader_default, r as DialogDescription_default, t as DialogTitle_default } from "./DialogTitle-e0kQ4xKh.js";
import { t as DialogFooter_default } from "./DialogFooter-Cl4LZ1vk.js";
import { t as LoadingKey } from "./loadingKey-D-Ewg4ng.js";
import { t as occurrenceSchema } from "./occurrence.schema-DEPhPDCX.js";
import { t as OccurrenceForm_default } from "./OccurrenceForm-S82vZlZs.js";
//#region resources/js/pages/occurrences/components/modals/OccurrencesCreateModal.vue?vue&type=script&setup=true&lang.ts
var OccurrencesCreateModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrencesCreateModal",
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
		const occurrences = inject("occurrences");
		let form = reactive({
			title: "",
			description: "",
			occurred_at: "",
			severity: "medium",
			images: []
		});
		async function handleSubmit() {
			if (!loading) return;
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
				form.images.forEach((image) => {
					data.append("images[]", image);
				});
				const response = await axios.post("/occurrences", data, { headers: { "Content-Type": "multipart/form-data" } });
				l.success(response.data.message);
				const newOccurrence = response.data.data;
				occurrences?.value.unshift(newOccurrence);
				occurrences.value = [...occurrences.value];
				Object.assign(form, {
					title: "",
					description: "",
					occurred_at: "",
					severity: "medium",
					images: []
				});
				open.value = false;
			} catch (error) {
				console.error(error);
			} finally {
				loading.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Dialog_default, {
				open: open.value,
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => open.value = $event)
			}, {
				default: withCtx(() => [createVNode(DialogContent_default, { class: "sm:max-w-2xl" }, {
					default: withCtx(() => [
						createVNode(DialogHeader_default, null, {
							default: withCtx(() => [createVNode(DialogTitle_default, null, {
								default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Nova ocorrência ", -1)])]),
								_: 1
							}), createVNode(DialogDescription_default, null, {
								default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode(" Preencha os campos abaixo para criar uma nova ocorrência. ", -1)])]),
								_: 1
							})]),
							_: 1
						}),
						_cache[6] || (_cache[6] = createBaseVNode("hr", null, null, -1)),
						createVNode(OccurrenceForm_default, {
							modelValue: unref(form),
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(form) ? form.value = $event : form = $event),
							errors
						}, null, 8, ["modelValue", "errors"]),
						createVNode(DialogFooter_default, null, {
							default: withCtx(() => [createVNode(Button_default, {
								variant: "outline",
								disabled: unref(loading),
								onClick: _cache[1] || (_cache[1] = ($event) => open.value = false)
							}, {
								default: withCtx(() => [createVNode(unref(X)), _cache[5] || (_cache[5] = createTextVNode(" Cancelar ", -1))]),
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
//#region resources/js/pages/occurrences/components/modals/OccurrencesCreateModal.vue
var OccurrencesCreateModal_exports = /* @__PURE__ */ __exportAll({ default: () => OccurrencesCreateModal_default });
var OccurrencesCreateModal_default = OccurrencesCreateModal_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { OccurrencesCreateModal_exports as n, OccurrencesCreateModal_default as t };
