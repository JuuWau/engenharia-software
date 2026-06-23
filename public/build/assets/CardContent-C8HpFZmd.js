import { I as openBlock, _ as createElementBlock, _t as normalizeClass, ht as unref, x as defineComponent, z as renderSlot } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as cn } from "./utils-C3GTyuW_.js";
//#endregion
//#region resources/js/components/ui/card/CardContent.vue
var CardContent_default = /* @__PURE__ */ defineComponent({
	__name: "CardContent",
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
				"data-slot": "card-content",
				class: normalizeClass(unref(cn)("px-6", props.class))
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
export { CardContent_default as t };
