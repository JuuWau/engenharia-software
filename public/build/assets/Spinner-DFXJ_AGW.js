import { I as openBlock, _t as normalizeClass, h as createBlock, ht as unref, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as cn } from "./utils-C3GTyuW_.js";
import { t as createLucideIcon } from "./createLucideIcon-BEi0wWPe.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/loader-circle.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LoaderCircle = createLucideIcon("LoaderCircleIcon", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
//#endregion
//#region resources/js/components/ui/spinner/Spinner.vue
var Spinner_default = /* @__PURE__ */ defineComponent({
	__name: "Spinner",
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
			return openBlock(), createBlock(unref(LoaderCircle), {
				role: "status",
				"aria-label": "Loading",
				class: normalizeClass(unref(cn)("size-4 animate-spin", props.class))
			}, null, 8, ["class"]);
		};
	}
});
//#endregion
export { Spinner_default as t };
