import { I as openBlock, _ as createElementBlock, _t as normalizeClass, ht as unref, x as defineComponent, z as renderSlot } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as cn } from "./utils-C3GTyuW_.js";
//#endregion
//#region resources/js/components/ui/dialog/DialogFooter.vue
var DialogFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DialogFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				"data-slot": "dialog-footer",
				class: normalizeClass(unref(cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class))
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
export { DialogFooter_default as t };
