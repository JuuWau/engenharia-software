import { I as openBlock, _ as createElementBlock, _t as normalizeClass, ht as unref, x as defineComponent, z as renderSlot } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as cn } from "./utils-C3GTyuW_.js";
//#endregion
//#region resources/js/components/ui/card/Card.vue
var Card_default = /* @__PURE__ */ defineComponent({
	__name: "Card",
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
				"data-slot": "card",
				class: normalizeClass(unref(cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", props.class))
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
export { Card_default as t };
