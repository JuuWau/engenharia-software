import { I as openBlock, X as withDirectives, _ as createElementBlock, _t as normalizeClass, a as vModelText, ht as unref, nt as isRef, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as cn } from "./utils-C3GTyuW_.js";
import { C as useVModel } from "./app-BF-ImWg4.js";
//#endregion
//#region resources/js/components/ui/textarea/Textarea.vue
var Textarea_default = /* @__PURE__ */ defineComponent({
	__name: "Textarea",
	props: {
		defaultValue: {},
		modelValue: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const modelValue = useVModel(props, "modelValue", __emit, {
			passive: true,
			defaultValue: props.defaultValue
		});
		return (_ctx, _cache) => {
			return withDirectives((openBlock(), createElementBlock("textarea", {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
				"data-slot": "textarea",
				class: normalizeClass(unref(cn)("border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-indigo-400 focus-visible:ring-indigo-400/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", props.class))
			}, null, 2)), [[vModelText, unref(modelValue)]]);
		};
	}
});
//#endregion
export { Textarea_default as t };
