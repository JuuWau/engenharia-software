import { A as mergeProps, C as guardReactiveProps, E as inject, I as openBlock, N as onMounted, St as __exportAll, W as useModel, Y as withCtx, _ as createElementBlock, _t as normalizeClass, b as createVNode, bt as toDisplayString, c as withModifiers, h as createBlock, ht as unref, j as nextTick, st as ref, vt as normalizeProps, x as defineComponent, y as createTextVNode, z as renderSlot } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as cn } from "./utils-C3GTyuW_.js";
import { o as createContext } from "./Presence-DwpF0WMp.js";
import { t as Teleport_default } from "./Teleport-BxOLZRNx.js";
import { t as useForwardExpose } from "./useForwardExpose-BsmZrlm3.js";
import { r as useEmitAsProps, t as useForwardPropsEmits } from "./useForwardPropsEmits-mNRyLE7G.js";
import { t as createLucideIcon } from "./createLucideIcon-BEi0wWPe.js";
import { F as DialogOverlay_default, G as l, I as DialogDescription_default, L as DialogContent_default, N as DialogTitle_default, R as DialogClose_default, h as X, p as buttonVariants, w as reactiveOmit, z as DialogRoot_default } from "./app-BF-ImWg4.js";
import { t as axios } from "./axios-CQ4cH468.js";
import { t as LoadingKey } from "./loadingKey-D-Ewg4ng.js";
//#region node_modules/reka-ui/dist/AlertDialog/AlertDialogAction.js
var AlertDialogAction_default$1 = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogAction",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogClose_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/AlertDialog/AlertDialogContent.js
var [injectAlertDialogContentContext, provideAlertDialogContentContext] = /* @__PURE__ */ createContext("AlertDialogContent");
var AlertDialogContent_default$1 = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emitsAsProps = useEmitAsProps(__emit);
		useForwardExpose();
		const cancelElement = ref();
		provideAlertDialogContentContext({ onCancelElementChange: (el) => {
			cancelElement.value = el;
		} });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogContent_default), mergeProps({
				...props,
				...unref(emitsAsProps)
			}, {
				role: "alertdialog",
				onPointerDownOutside: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"])),
				onInteractOutside: _cache[1] || (_cache[1] = withModifiers(() => {}, ["prevent"])),
				onOpenAutoFocus: _cache[2] || (_cache[2] = () => {
					nextTick(() => {
						cancelElement.value?.focus({ preventScroll: true });
					});
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/AlertDialog/AlertDialogCancel.js
var AlertDialogCancel_default$1 = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogCancel",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const contentContext = injectAlertDialogContentContext();
		const { forwardRef, currentElement } = useForwardExpose();
		onMounted(() => {
			contentContext.onCancelElementChange(currentElement.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogClose_default), mergeProps(props, { ref: unref(forwardRef) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/AlertDialog/AlertDialogDescription.js
var AlertDialogDescription_default$1 = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogDescription",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "p"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogDescription_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/AlertDialog/AlertDialogOverlay.js
var AlertDialogOverlay_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogOverlay",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogOverlay_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/AlertDialog/AlertDialogPortal.js
var AlertDialogPortal_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogPortal",
	props: {
		to: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		defer: {
			type: Boolean,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/AlertDialog/AlertDialogRoot.js
var AlertDialogRoot_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogRoot",
	props: {
		open: {
			type: Boolean,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogRoot_default), mergeProps(unref(forwarded), { modal: true }), {
				default: withCtx((slotProps) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/AlertDialog/AlertDialogTitle.js
var AlertDialogTitle_default$1 = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogTitle",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "h2"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogTitle_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/icons/trash-2.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trash2 = createLucideIcon("Trash2Icon", [
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
		key: "4alrt4"
	}],
	["path", {
		d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
		key: "v07s0e"
	}],
	["line", {
		x1: "10",
		x2: "10",
		y1: "11",
		y2: "17",
		key: "1uufr5"
	}],
	["line", {
		x1: "14",
		x2: "14",
		y1: "11",
		y2: "17",
		key: "xtxkd"
	}]
]);
//#endregion
//#region resources/js/components/ui/alert-dialog/AlertDialog.vue
var AlertDialog_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean }
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialogRoot_default), mergeProps({ "data-slot": "alert-dialog" }, unref(forwarded)), {
				default: withCtx((slotProps) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region resources/js/components/ui/alert-dialog/AlertDialogAction.vue
var AlertDialogAction_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogAction",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(__props) {
		const props = __props;
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialogAction_default$1), mergeProps(unref(delegatedProps), { class: unref(cn)(unref(buttonVariants)(), props.class) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region resources/js/components/ui/alert-dialog/AlertDialogCancel.vue
var AlertDialogCancel_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogCancel",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(__props) {
		const props = __props;
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialogCancel_default$1), mergeProps(unref(delegatedProps), { class: unref(cn)(unref(buttonVariants)({ variant: "outline" }), "mt-2 sm:mt-0", props.class) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region resources/js/components/ui/alert-dialog/AlertDialogContent.vue
var AlertDialogContent_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "AlertDialogContent",
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialogPortal_default), null, {
				default: withCtx(() => [createVNode(unref(AlertDialogOverlay_default), {
					"data-slot": "alert-dialog-overlay",
					class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
				}), createVNode(unref(AlertDialogContent_default$1), mergeProps({ "data-slot": "alert-dialog-content" }, {
					..._ctx.$attrs,
					...unref(forwarded)
				}, { class: unref(cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", props.class) }), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["class"])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region resources/js/components/ui/alert-dialog/AlertDialogDescription.vue
var AlertDialogDescription_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(__props) {
		const props = __props;
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialogDescription_default$1), mergeProps({ "data-slot": "alert-dialog-description" }, unref(delegatedProps), { class: unref(cn)("text-muted-foreground text-sm", props.class) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region resources/js/components/ui/alert-dialog/AlertDialogFooter.vue
var AlertDialogFooter_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogFooter",
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
				"data-slot": "alert-dialog-footer",
				class: normalizeClass(unref(cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class))
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region resources/js/components/ui/alert-dialog/AlertDialogHeader.vue
var AlertDialogHeader_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogHeader",
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
				"data-slot": "alert-dialog-header",
				class: normalizeClass(unref(cn)("flex flex-col gap-2 text-center sm:text-left", props.class))
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region resources/js/components/ui/alert-dialog/AlertDialogTitle.vue
var AlertDialogTitle_default = /* @__PURE__ */ defineComponent({
	__name: "AlertDialogTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(__props) {
		const props = __props;
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialogTitle_default$1), mergeProps({ "data-slot": "alert-dialog-title" }, unref(delegatedProps), { class: unref(cn)("text-lg font-semibold", props.class) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region resources/js/pages/occurrences/components/modals/OccurrencesDeleteModal.vue?vue&type=script&setup=true&lang.ts
var OccurrencesDeleteModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OccurrencesDeleteModal",
	props: {
		"modelValue": {
			type: Boolean,
			required: true
		},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const open = useModel(__props, "modelValue");
		const loading = inject(LoadingKey, ref(false));
		const selectedOccurrence = inject("selectedOccurrence");
		const occurrences = inject("occurrences");
		async function handleDelete() {
			if (!selectedOccurrence?.value || !occurrences?.value || !loading) return;
			try {
				loading.value = true;
				await axios.delete(`/occurrences/${selectedOccurrence.value.id}`);
				occurrences.value = occurrences.value.filter((occurrence) => occurrence.id !== selectedOccurrence.value?.id);
				l.success("Ocorrência excluída com sucesso.");
				open.value = false;
				selectedOccurrence.value = null;
			} catch (error) {
				console.error(error);
				l.error(error.response?.data?.message || "Erro ao excluir ocorrência.");
			} finally {
				loading.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AlertDialog_default, {
				open: open.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => open.value = $event)
			}, {
				default: withCtx(() => [createVNode(AlertDialogContent_default, null, {
					default: withCtx(() => [createVNode(AlertDialogHeader_default, null, {
						default: withCtx(() => [createVNode(AlertDialogTitle_default, null, {
							default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode(" Excluir ocorrência ", -1)])]),
							_: 1
						}), createVNode(AlertDialogDescription_default, null, {
							default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" Essa ação não poderá ser desfeita. ", -1)])]),
							_: 1
						})]),
						_: 1
					}), createVNode(AlertDialogFooter_default, null, {
						default: withCtx(() => [createVNode(AlertDialogCancel_default, { disabled: unref(loading) }, {
							default: withCtx(() => [createVNode(unref(X), { class: "h-4 w-4" }), _cache[3] || (_cache[3] = createTextVNode(" Cancelar ", -1))]),
							_: 1
						}, 8, ["disabled"]), createVNode(AlertDialogAction_default, {
							class: "bg-red-600 text-whitehover:bg-red-700focus:ring-red-500",
							disabled: unref(loading),
							onClick: withModifiers(handleDelete, ["prevent"])
						}, {
							default: withCtx(() => [createVNode(unref(Trash2), { class: "h-4 w-4" }), createTextVNode(" " + toDisplayString(unref(loading) ? "Excluindo..." : "Excluir"), 1)]),
							_: 1
						}, 8, ["disabled", "onClick"])]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region resources/js/pages/occurrences/components/modals/OccurrencesDeleteModal.vue
var OccurrencesDeleteModal_exports = /* @__PURE__ */ __exportAll({ default: () => OccurrencesDeleteModal_default });
var OccurrencesDeleteModal_default = OccurrencesDeleteModal_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { OccurrencesDeleteModal_exports as n, OccurrencesDeleteModal_default as t };
