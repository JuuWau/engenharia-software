import { I as openBlock, W as useModel, Y as withCtx, _ as createElementBlock, b as createVNode, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as Label_default } from "./Label-Dugk_doq.js";
import { t as Input_default } from "./Input-CyYI105W.js";
//#region resources/js/pages/occurrences/components/form/OccurrenceImageUpload.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "space-y-2" };
//#endregion
//#region resources/js/pages/occurrences/components/form/OccurrenceImageUpload.vue
var OccurrenceImageUpload_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrenceImageUpload",
	props: {
		"modelValue": {},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const files = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(Label_default, null, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("Imagens", -1)])]),
				_: 1
			}), createVNode(Input_default, {
				type: "file",
				multiple: "",
				onChange: _cache[0] || (_cache[0] = ($event) => files.value = Array.from($event.target.files || []))
			})]);
		};
	}
});
//#endregion
export { OccurrenceImageUpload_default as default };
