import { I as openBlock, St as __exportAll, Y as withCtx, b as createVNode, h as createBlock, ht as unref, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as createLucideIcon } from "./createLucideIcon-BEi0wWPe.js";
import { d as DropdownMenuContent_default, f as DropdownMenu_default, h as X, l as DropdownMenuTrigger_default, m as Button_default, u as DropdownMenuItem_default } from "./app-BF-ImWg4.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/pencil.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pencil = createLucideIcon("PencilIcon", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]);
//#endregion
//#region resources/js/pages/occurrences/components/shared/OccurrenceActions.vue?vue&type=script&setup=true&lang.ts
var OccurrenceActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrenceActions",
	props: { params: {} },
	setup(__props) {
		const props = __props;
		function handleEdit() {
			props.params.onEdit(props.params.data);
		}
		function handleDelete() {
			props.params.onDelete(props.params.data);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(DropdownMenu_default, null, {
				default: withCtx(() => [createVNode(DropdownMenuTrigger_default, { "as-child": "" }, {
					default: withCtx(() => [createVNode(Button_default, {
						variant: "ghost",
						size: "icon"
					}, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode(" ••• ", -1)])]),
						_: 1
					})]),
					_: 1
				}), createVNode(DropdownMenuContent_default, null, {
					default: withCtx(() => [createVNode(DropdownMenuItem_default, { onClick: handleEdit }, {
						default: withCtx(() => [createVNode(unref(Pencil), { class: "h-4 w-4" }), _cache[1] || (_cache[1] = createTextVNode(" Editar ", -1))]),
						_: 1
					}), createVNode(DropdownMenuItem_default, { onClick: handleDelete }, {
						default: withCtx(() => [createVNode(unref(X), { class: "h-4 w-4" }), _cache[2] || (_cache[2] = createTextVNode(" Excluir ", -1))]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			});
		};
	}
});
//#endregion
//#region resources/js/pages/occurrences/components/shared/OccurrenceActions.vue
var OccurrenceActions_exports = /* @__PURE__ */ __exportAll({ default: () => OccurrenceActions_default });
var OccurrenceActions_default = OccurrenceActions_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { OccurrenceActions_exports as n, OccurrenceActions_default as t };
