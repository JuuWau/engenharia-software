import { A as mergeProps, C as guardReactiveProps, I as openBlock, Y as withCtx, _ as createElementBlock, _t as normalizeClass, b as createVNode, g as createCommentVNode, h as createBlock, ht as unref, m as createBaseVNode, vt as normalizeProps, x as defineComponent, z as renderSlot } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { t as cn } from "./utils-C3GTyuW_.js";
import { n as useForwardProps, t as useForwardPropsEmits } from "./useForwardPropsEmits-mNRyLE7G.js";
import { F as DialogOverlay_default$1, I as DialogDescription_default$1, L as DialogContent_default$1, N as DialogTitle_default$1, P as DialogPortal_default, R as DialogClose_default, h as X, w as reactiveOmit, z as DialogRoot_default } from "./app-BF-ImWg4.js";
//#endregion
//#region resources/js/components/ui/dialog/Dialog.vue
var Dialog_default = /* @__PURE__ */ defineComponent({
	__name: "Dialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogRoot_default), mergeProps({ "data-slot": "dialog" }, unref(forwarded)), {
				default: withCtx((slotProps) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region resources/js/components/ui/dialog/DialogOverlay.vue
var DialogOverlay_default = /* @__PURE__ */ defineComponent({
	__name: "DialogOverlay",
	props: {
		forceMount: { type: Boolean },
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
			return openBlock(), createBlock(unref(DialogOverlay_default$1), mergeProps({ "data-slot": "dialog-overlay" }, unref(delegatedProps), { class: unref(cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", props.class) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region resources/js/components/ui/dialog/DialogContent.vue
var DialogContent_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DialogContent",
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
		] },
		showCloseButton: {
			type: Boolean,
			default: true
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
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogPortal_default), null, {
				default: withCtx(() => [createVNode(DialogOverlay_default), createVNode(unref(DialogContent_default$1), mergeProps({ "data-slot": "dialog-content" }, {
					..._ctx.$attrs,
					...unref(forwarded)
				}, { class: unref(cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", props.class) }), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default"), __props.showCloseButton ? (openBlock(), createBlock(unref(DialogClose_default), {
						key: 0,
						"data-slot": "dialog-close",
						class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
					}, {
						default: withCtx(() => [createVNode(unref(X)), _cache[0] || (_cache[0] = createBaseVNode("span", { class: "sr-only" }, "Close", -1))]),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 3
				}, 16, ["class"])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region resources/js/components/ui/dialog/DialogDescription.vue
var DialogDescription_default = /* @__PURE__ */ defineComponent({
	__name: "DialogDescription",
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
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogDescription_default$1), mergeProps({ "data-slot": "dialog-description" }, unref(forwardedProps), { class: unref(cn)("text-muted-foreground text-sm", props.class) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region resources/js/components/ui/dialog/DialogHeader.vue
var DialogHeader_default = /* @__PURE__ */ defineComponent({
	__name: "DialogHeader",
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
				"data-slot": "dialog-header",
				class: normalizeClass(unref(cn)("flex flex-col gap-2 text-center sm:text-left", props.class))
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region resources/js/components/ui/dialog/DialogTitle.vue
var DialogTitle_default = /* @__PURE__ */ defineComponent({
	__name: "DialogTitle",
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
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogTitle_default$1), mergeProps({ "data-slot": "dialog-title" }, unref(forwardedProps), { class: unref(cn)("text-lg leading-none font-semibold", props.class) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
export { Dialog_default as a, DialogContent_default as i, DialogHeader_default as n, DialogDescription_default as r, DialogTitle_default as t };
