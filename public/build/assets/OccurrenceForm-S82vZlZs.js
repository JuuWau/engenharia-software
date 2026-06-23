import { I as openBlock, R as renderList, St as __exportAll, W as useModel, Y as withCtx, _ as createElementBlock, b as createVNode, bt as toDisplayString, g as createCommentVNode, k as mergeModels, m as createBaseVNode, p as computed, u as Fragment, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { a as Select_default, i as SelectItem_default, n as SelectValue_default, r as SelectTrigger_default, t as SelectContent_default } from "./SelectContent-CWJYWzmP.js";
import { t as Label_default } from "./Label-Dugk_doq.js";
import { t as Input_default } from "./Input-CyYI105W.js";
import { t as Textarea_default } from "./Textarea-Dx7fErvW.js";
//#region resources/js/pages/occurrences/components/form/OccurrenceForm.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "space-y-4" };
var _hoisted_2 = { class: "space-y-2" };
var _hoisted_3 = {
	key: 0,
	class: "text-sm text-red-500"
};
var _hoisted_4 = { class: "space-y-2" };
var _hoisted_5 = {
	key: 0,
	class: "text-sm text-red-500"
};
var _hoisted_6 = { class: "grid grid-cols-2 gap-4" };
var _hoisted_7 = { class: "space-y-2" };
var _hoisted_8 = {
	key: 0,
	class: "text-sm text-red-500"
};
var _hoisted_9 = { class: "space-y-2" };
var _hoisted_10 = {
	key: 0,
	class: "text-sm text-red-500"
};
var _hoisted_11 = { class: "space-y-2" };
var _hoisted_12 = {
	key: 0,
	class: "text-sm text-red-500"
};
var _hoisted_13 = { class: "text-muted-foreground text-sm" };
var _hoisted_14 = {
	key: 1,
	class: "grid max-h-[320px] grid-cols-2 gap-4 overflow-y-auto pt-2 md:grid-cols-4"
};
var _hoisted_15 = ["onClick"];
var _hoisted_16 = { class: "overflow-hidden rounded-md border" };
var _hoisted_17 = ["src", "alt"];
var OccurrenceForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrenceForm",
	props: /* @__PURE__ */ mergeModels({
		errors: {},
		existingImages: {}
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["removeExistingImage"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const form = useModel(__props, "modelValue");
		const props = __props;
		const totalImages = computed(() => {
			return (props.existingImages?.length ?? 0) + (form.value.images?.length ?? 0);
		});
		const emit = __emit;
		const allImages = computed(() => {
			const existing = props.existingImages?.map((image) => ({
				type: "existing",
				image,
				url: image.url
			})) ?? [];
			const uploaded = form.value.images?.map((file) => ({
				type: "new",
				file,
				url: URL.createObjectURL(file)
			})) ?? [];
			return [...existing, ...uploaded];
		});
		function handleImages(event) {
			const target = event.target;
			if (!target.files) return;
			const newFiles = Array.from(target.files);
			form.value.images = [...form.value.images, ...newFiles].slice(0, 10);
		}
		function removeImage(image, index) {
			if (image.type === "existing") {
				emit("removeExistingImage", index);
				return;
			}
			const existingLength = props.existingImages?.length ?? 0;
			form.value.images.splice(index - existingLength, 1);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [
					createVNode(Label_default, null, {
						default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Título", -1)])]),
						_: 1
					}),
					createVNode(Input_default, {
						modelValue: form.value.title,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.title = $event)
					}, null, 8, ["modelValue"]),
					props.errors?.title ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(props.errors.title), 1)) : createCommentVNode("", true)
				]),
				createBaseVNode("div", _hoisted_4, [
					createVNode(Label_default, null, {
						default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Descrição", -1)])]),
						_: 1
					}),
					createVNode(Textarea_default, {
						modelValue: form.value.description,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.description = $event)
					}, null, 8, ["modelValue"]),
					props.errors?.description ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(props.errors.description), 1)) : createCommentVNode("", true)
				]),
				createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [
					createVNode(Label_default, null, {
						default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("Data", -1)])]),
						_: 1
					}),
					createVNode(Input_default, {
						modelValue: form.value.occurred_at,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.occurred_at = $event),
						type: "date"
					}, null, 8, ["modelValue"]),
					props.errors?.occurred_at ? (openBlock(), createElementBlock("p", _hoisted_8, toDisplayString(props.errors.occurred_at), 1)) : createCommentVNode("", true)
				]), createBaseVNode("div", _hoisted_9, [
					createVNode(Label_default, null, {
						default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("Severidade", -1)])]),
						_: 1
					}),
					createVNode(Select_default, {
						modelValue: form.value.severity,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.severity = $event)
					}, {
						default: withCtx(() => [createVNode(SelectTrigger_default, { class: "w-full" }, {
							default: withCtx(() => [createVNode(SelectValue_default)]),
							_: 1
						}), createVNode(SelectContent_default, null, {
							default: withCtx(() => [
								createVNode(SelectItem_default, { value: "low" }, {
									default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode(" Baixa ", -1)])]),
									_: 1
								}),
								createVNode(SelectItem_default, { value: "medium" }, {
									default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode(" Média ", -1)])]),
									_: 1
								}),
								createVNode(SelectItem_default, { value: "high" }, {
									default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode(" Alta ", -1)])]),
									_: 1
								})
							]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue"]),
					props.errors?.severity ? (openBlock(), createElementBlock("p", _hoisted_10, toDisplayString(props.errors.severity), 1)) : createCommentVNode("", true)
				])]),
				createBaseVNode("div", _hoisted_11, [
					createVNode(Label_default, null, {
						default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("Imagens", -1)])]),
						_: 1
					}),
					createVNode(Input_default, {
						type: "file",
						multiple: "",
						accept: "image/*",
						onChange: handleImages
					}),
					props.errors?.images ? (openBlock(), createElementBlock("p", _hoisted_12, toDisplayString(props.errors.images), 1)) : createCommentVNode("", true),
					createBaseVNode("p", _hoisted_13, toDisplayString(totalImages.value) + "/10 imagens ", 1),
					allImages.value.length ? (openBlock(), createElementBlock("div", _hoisted_14, [(openBlock(true), createElementBlock(Fragment, null, renderList(allImages.value, (image, index) => {
						return openBlock(), createElementBlock("div", {
							key: image.url,
							class: "relative overflow-visible rounded-md"
						}, [createBaseVNode("button", {
							type: "button",
							class: "absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm text-white shadow-md transition hover:bg-red-600 hover:scale-105",
							onClick: ($event) => removeImage(image, index)
						}, " × ", 8, _hoisted_15), createBaseVNode("div", _hoisted_16, [createBaseVNode("img", {
							src: image.url,
							alt: `Imagem ${index + 1}`,
							class: "h-32 w-full object-cover"
						}, null, 8, _hoisted_17)])]);
					}), 128))])) : createCommentVNode("", true)
				])
			]);
		};
	}
});
//#endregion
//#region resources/js/pages/occurrences/components/form/OccurrenceForm.vue
var OccurrenceForm_exports = /* @__PURE__ */ __exportAll({ default: () => OccurrenceForm_default });
var OccurrenceForm_default = OccurrenceForm_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { OccurrenceForm_exports as n, OccurrenceForm_default as t };
