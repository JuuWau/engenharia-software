import { A as mergeProps, B as resolveDynamicComponent, C as guardReactiveProps, I as openBlock, K as watch, N as onMounted, P as onUnmounted, R as renderList, Y as withCtx, _ as createElementBlock, b as createVNode, bt as toDisplayString, c as withModifiers, g as createCommentVNode, h as createBlock, ht as unref, j as nextTick, m as createBaseVNode, p as computed, s as withKeys, u as Fragment, vt as normalizeProps, x as defineComponent, y as createTextVNode, z as renderSlot } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { a as head_default, i as form_default, n as queryParams } from "./wayfinder-DBTLeCO_.js";
import { t as cn } from "./utils-C3GTyuW_.js";
import { n as isEqual, t as useFormControl } from "./useFormControl-DNQ6-3e1.js";
import { i as isNullish, n as useId, o as createContext, t as Presence_default } from "./Presence-DwpF0WMp.js";
import { c as useVModel, t as useForwardExpose } from "./useForwardExpose-BsmZrlm3.js";
import { t as Primitive } from "./Primitive-CLj4gEE3.js";
import { n as usePrimitiveElement, t as useCollection } from "./Collection-CvaHH-UR.js";
import { t as useForwardPropsEmits } from "./useForwardPropsEmits-mNRyLE7G.js";
import { t as Label_default } from "./Label-Dugk_doq.js";
import { t as Check } from "./check-C_1ejoUj.js";
import { t as PasswordInput_default } from "./PasswordInput-DhDh15Vt.js";
import { t as Spinner_default } from "./Spinner-DFXJ_AGW.js";
import { t as LockKeyhole } from "./lock-keyhole-qdZQ5Hj6.js";
import { n as Mail, t as TextLink_default } from "./TextLink-mnuxNC3g.js";
import { t as ShieldCheck } from "./shield-check-DRRcEC0L.js";
import { t as Input_default } from "./Input-CyYI105W.js";
import { A as getFocusIntent, M as VisuallyHidden_default, T as injectRovingFocusGroupContext, c as register, j as wrapArray, k as focusFirst, m as Button_default, w as reactiveOmit } from "./app-BF-ImWg4.js";
import { t as InputError_default } from "./InputError-D7zEBEwO.js";
import { n as request } from "./password-fLsczHKt.js";
//#region node_modules/reka-ui/dist/shared/isValueEqualOrExist.js
/**
* The function `isValueEqualOrExist` checks if a value is equal to or exists in another value or
* array.
* @param {T | T[] | undefined} base - It represents the base value that you want to compare with the `current` value.
* @param {T | T[] | undefined} current - The `current` parameter represents the current value that you want to compare with the `base` value or values.
* @returns The `isValueEqualOrExist` function returns a boolean value. It checks if the `base` value
* is equal to the `current` value or if the `current` value exists within the `base` value. The
* function handles cases where `base` can be a single value, an array of values, or undefined.
*/
function isValueEqualOrExist(base, current) {
	if (isNullish(base)) return false;
	if (Array.isArray(base)) return base.some((val) => isEqual(val, current));
	else return isEqual(base, current);
}
//#endregion
//#region node_modules/reka-ui/dist/VisuallyHidden/VisuallyHiddenInputBubble.js
var VisuallyHiddenInputBubble_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "VisuallyHiddenInputBubble",
	props: {
		name: {
			type: String,
			required: true
		},
		value: {
			type: null,
			required: true
		},
		checked: {
			type: Boolean,
			required: false,
			default: void 0
		},
		required: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		feature: {
			type: String,
			required: false,
			default: "fully-hidden"
		}
	},
	setup(__props) {
		const props = __props;
		const { primitiveElement, currentElement } = usePrimitiveElement();
		watch(computed(() => props.checked ?? props.value), (cur, prev) => {
			if (!currentElement.value) return;
			const input = currentElement.value;
			const inputProto = window.HTMLInputElement.prototype;
			const setValue = Object.getOwnPropertyDescriptor(inputProto, "value").set;
			if (setValue && cur !== prev) {
				const inputEvent = new Event("input", { bubbles: true });
				const changeEvent = new Event("change", { bubbles: true });
				setValue.call(input, cur);
				input.dispatchEvent(inputEvent);
				input.dispatchEvent(changeEvent);
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(VisuallyHidden_default, mergeProps({
				ref_key: "primitiveElement",
				ref: primitiveElement
			}, {
				...props,
				..._ctx.$attrs
			}, { as: "input" }), null, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/VisuallyHidden/VisuallyHiddenInput.js
var VisuallyHiddenInput_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "VisuallyHiddenInput",
	props: {
		name: {
			type: String,
			required: true
		},
		value: {
			type: null,
			required: true
		},
		checked: {
			type: Boolean,
			required: false,
			default: void 0
		},
		required: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		feature: {
			type: String,
			required: false,
			default: "fully-hidden"
		}
	},
	setup(__props) {
		const props = __props;
		const isFormArrayEmptyAndRequired = computed(() => typeof props.value === "object" && Array.isArray(props.value) && props.value.length === 0 && props.required);
		const parsedValue = computed(() => {
			if (typeof props.value === "string" || typeof props.value === "number" || typeof props.value === "boolean" || props.value === null || props.value === void 0) return [{
				name: props.name,
				value: props.value
			}];
			else if (typeof props.value === "object" && Array.isArray(props.value)) return props.value.flatMap((obj, index) => {
				if (typeof obj === "object") return Object.entries(obj).map(([key, value]) => ({
					name: `${props.name}[${index}][${key}]`,
					value
				}));
				else return {
					name: `${props.name}[${index}]`,
					value: obj
				};
			});
			else if (props.value !== null && typeof props.value === "object" && !Array.isArray(props.value)) return Object.entries(props.value).map(([key, value]) => ({
				name: `${props.name}[${key}]`,
				value
			}));
			return [];
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" We render single input if it's required "), isFormArrayEmptyAndRequired.value ? (openBlock(), createBlock(VisuallyHiddenInputBubble_default, mergeProps({ key: _ctx.name }, {
				...props,
				..._ctx.$attrs
			}, {
				name: _ctx.name,
				value: _ctx.value
			}), null, 16, ["name", "value"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(parsedValue.value, (parsed) => {
				return openBlock(), createBlock(VisuallyHiddenInputBubble_default, mergeProps({ key: parsed.name }, { ref_for: true }, {
					...props,
					..._ctx.$attrs
				}, {
					name: parsed.name,
					value: parsed.value
				}), null, 16, ["name", "value"]);
			}), 128))], 2112);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/RovingFocus/RovingFocusItem.js
var RovingFocusItem_default = /* @__PURE__ */ defineComponent({
	__name: "RovingFocusItem",
	props: {
		tabStopId: {
			type: String,
			required: false
		},
		focusable: {
			type: Boolean,
			required: false,
			default: true
		},
		active: {
			type: Boolean,
			required: false
		},
		allowShiftKey: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const props = __props;
		const context = injectRovingFocusGroupContext();
		const randomId = useId();
		const id = computed(() => props.tabStopId || randomId);
		const isCurrentTabStop = computed(() => context.currentTabStopId.value === id.value);
		const { getItems, CollectionItem } = useCollection();
		onMounted(() => {
			if (props.focusable) context.onFocusableItemAdd();
		});
		onUnmounted(() => {
			if (props.focusable) context.onFocusableItemRemove();
		});
		function handleKeydown(event) {
			if (event.key === "Tab" && event.shiftKey) {
				context.onItemShiftTab();
				return;
			}
			if (event.target !== event.currentTarget) return;
			const focusIntent = getFocusIntent(event, context.orientation.value, context.dir.value);
			if (focusIntent !== void 0) {
				if (event.metaKey || event.ctrlKey || event.altKey || (props.allowShiftKey ? false : event.shiftKey)) return;
				event.preventDefault();
				let candidateNodes = [...getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "")];
				if (focusIntent === "last") candidateNodes.reverse();
				else if (focusIntent === "prev" || focusIntent === "next") {
					if (focusIntent === "prev") candidateNodes.reverse();
					const currentIndex = candidateNodes.indexOf(event.currentTarget);
					candidateNodes = context.loop.value ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
				}
				nextTick(() => focusFirst(candidateNodes));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionItem), null, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					tabindex: isCurrentTabStop.value ? 0 : -1,
					"data-orientation": unref(context).orientation.value,
					"data-active": _ctx.active ? "" : void 0,
					"data-disabled": !_ctx.focusable ? "" : void 0,
					as: _ctx.as,
					"as-child": _ctx.asChild,
					onMousedown: _cache[0] || (_cache[0] = (event) => {
						if (!_ctx.focusable) event.preventDefault();
						else unref(context).onItemFocus(id.value);
					}),
					onFocus: _cache[1] || (_cache[1] = ($event) => unref(context).onItemFocus(id.value)),
					onKeydown: handleKeydown
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"tabindex",
					"data-orientation",
					"data-active",
					"data-disabled",
					"as",
					"as-child"
				])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Checkbox/CheckboxGroupRoot.js
var [injectCheckboxGroupRootContext, provideCheckboxGroupRootContext] = /* @__PURE__ */ createContext("CheckboxGroupRoot");
//#endregion
//#region node_modules/reka-ui/dist/Checkbox/utils.js
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
function getState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
//#endregion
//#region node_modules/reka-ui/dist/Checkbox/CheckboxRoot.js
var [injectCheckboxRootContext, provideCheckboxRootContext] = /* @__PURE__ */ createContext("CheckboxRoot");
var CheckboxRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "CheckboxRoot",
	props: {
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: false
		},
		value: {
			type: null,
			required: false,
			default: "on"
		},
		id: {
			type: String,
			required: false
		},
		trueValue: {
			type: null,
			required: false,
			default: () => true
		},
		falseValue: {
			type: null,
			required: false,
			default: () => false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { forwardRef, currentElement } = useForwardExpose();
		const checkboxGroupContext = injectCheckboxGroupRootContext(null);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? props.falseValue,
			passive: props.modelValue === void 0
		});
		const disabled = computed(() => checkboxGroupContext?.disabled.value || props.disabled);
		const isChecked = computed(() => isEqual(modelValue.value, props.trueValue));
		const checkboxState = computed(() => {
			if (!isNullish(checkboxGroupContext?.modelValue.value)) return isValueEqualOrExist(checkboxGroupContext.modelValue.value, props.value);
			else {
				if (modelValue.value === "indeterminate") return "indeterminate";
				return isChecked.value;
			}
		});
		function handleClick() {
			if (!isNullish(checkboxGroupContext?.modelValue.value)) {
				const modelValueArray = [...checkboxGroupContext.modelValue.value || []];
				if (isValueEqualOrExist(modelValueArray, props.value)) {
					const index = modelValueArray.findIndex((i) => isEqual(i, props.value));
					modelValueArray.splice(index, 1);
				} else modelValueArray.push(props.value);
				checkboxGroupContext.modelValue.value = modelValueArray;
			} else if (modelValue.value === "indeterminate") modelValue.value = props.trueValue;
			else modelValue.value = isChecked.value ? props.falseValue : props.trueValue;
		}
		const isFormControl = useFormControl(currentElement);
		const ariaLabel = computed(() => props.id && currentElement.value ? document.querySelector(`[for="${props.id}"]`)?.innerText : void 0);
		provideCheckboxRootContext({
			disabled,
			state: checkboxState
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(unref(checkboxGroupContext)?.rovingFocus.value ? unref(RovingFocusItem_default) : unref(Primitive)), mergeProps(_ctx.$attrs, {
				id: _ctx.id,
				ref: unref(forwardRef),
				role: "checkbox",
				"as-child": _ctx.asChild,
				as: _ctx.as,
				type: _ctx.as === "button" ? "button" : void 0,
				"aria-checked": unref(isIndeterminate)(checkboxState.value) ? "mixed" : checkboxState.value,
				"aria-required": _ctx.required,
				"aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
				"data-state": unref(getState)(checkboxState.value),
				"data-disabled": disabled.value ? "" : void 0,
				disabled: disabled.value,
				focusable: unref(checkboxGroupContext)?.rovingFocus.value ? !disabled.value : void 0,
				onKeydown: withKeys(withModifiers(() => {}, ["prevent"]), ["enter"]),
				onClick: handleClick
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					state: checkboxState.value
				}), unref(isFormControl) && _ctx.name && !unref(checkboxGroupContext) ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
					key: 0,
					type: "checkbox",
					checked: !!checkboxState.value,
					name: _ctx.name,
					value: _ctx.value,
					disabled: disabled.value,
					required: _ctx.required
				}, null, 8, [
					"checked",
					"name",
					"value",
					"disabled",
					"required"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			}, 16, [
				"id",
				"as-child",
				"as",
				"type",
				"aria-checked",
				"aria-required",
				"aria-label",
				"data-state",
				"data-disabled",
				"disabled",
				"focusable",
				"onKeydown"
			]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Checkbox/CheckboxIndicator.js
var CheckboxIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "CheckboxIndicator",
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
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const { forwardRef } = useForwardExpose();
		const rootContext = injectCheckboxRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(isIndeterminate)(unref(rootContext).state.value) || unref(rootContext).state.value === true }, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					"data-state": unref(getState)(unref(rootContext).state.value),
					"data-disabled": unref(rootContext).disabled.value ? "" : void 0,
					style: { pointerEvents: "none" },
					"as-child": _ctx.asChild,
					as: _ctx.as
				}, _ctx.$attrs), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"data-state",
					"data-disabled",
					"as-child",
					"as"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region resources/js/components/ui/checkbox/Checkbox.vue
var Checkbox_default = /* @__PURE__ */ defineComponent({
	__name: "Checkbox",
	props: {
		defaultValue: {},
		modelValue: {},
		disabled: { type: Boolean },
		value: {},
		id: {},
		trueValue: {},
		falseValue: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
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
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CheckboxRoot_default), mergeProps({ "data-slot": "checkbox" }, unref(forwarded), { class: unref(cn)("peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", props.class) }), {
				default: withCtx((slotProps) => [createVNode(unref(CheckboxIndicator_default), {
					"data-slot": "checkbox-indicator",
					class: "grid place-content-center text-current transition-none"
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)), () => [createVNode(unref(Check), { class: "size-3.5" })])]),
					_: 2
				}, 1024)]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region resources/js/routes/login/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/login"
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
Object.assign(store, store);
//#endregion
//#region resources/js/pages/auth/Login.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex min-h-screen items-center justify-center px-4" };
var _hoisted_2 = { class: "w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg" };
var _hoisted_3 = { class: "mb-8 text-center" };
var _hoisted_4 = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white" };
var _hoisted_5 = {
	key: 0,
	class: "mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
};
var _hoisted_6 = { class: "space-y-2" };
var _hoisted_7 = { class: "relative" };
var _hoisted_8 = { class: "space-y-2" };
var _hoisted_9 = { class: "flex items-center justify-between" };
var _hoisted_10 = { class: "relative" };
var _hoisted_11 = { key: 1 };
var _hoisted_12 = {
	key: 1,
	class: "mt-6 text-center text-sm text-gray-500"
};
//#endregion
//#region resources/js/pages/auth/Login.vue
var Login_default = /* @__PURE__ */ defineComponent({
	__name: "Login",
	props: {
		status: {},
		canResetPassword: { type: Boolean },
		canRegister: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Login" }), createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [
					createBaseVNode("div", _hoisted_4, [createVNode(unref(ShieldCheck), { class: "h-8 w-8" })]),
					_cache[0] || (_cache[0] = createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, " Safe Voice ", -1)),
					_cache[1] || (_cache[1] = createBaseVNode("p", { class: "mt-2 text-sm text-gray-500" }, " Faça login para acessar o sistema ", -1))
				]),
				__props.status ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
				createVNode(unref(form_default), mergeProps(unref(store).form(), {
					"reset-on-success": ["password"],
					class: "space-y-5"
				}), {
					default: withCtx(({ errors, processing }) => [
						createBaseVNode("div", _hoisted_6, [
							createVNode(unref(Label_default), { for: "email" }, {
								default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" Email ", -1)])]),
								_: 1
							}),
							createBaseVNode("div", _hoisted_7, [createVNode(unref(Mail), { class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" }), createVNode(unref(Input_default), {
								id: "email",
								type: "email",
								name: "email",
								required: "",
								autofocus: "",
								autocomplete: "email",
								placeholder: "voce@email.com",
								class: "h-11 pl-10"
							})]),
							createVNode(InputError_default, { message: errors.email }, null, 8, ["message"])
						]),
						createBaseVNode("div", _hoisted_8, [
							createBaseVNode("div", _hoisted_9, [createVNode(unref(Label_default), { for: "password" }, {
								default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Senha ", -1)])]),
								_: 1
							}), __props.canResetPassword ? (openBlock(), createBlock(TextLink_default, {
								key: 0,
								href: unref(request)(),
								class: "text-sm"
							}, {
								default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode(" Esqueceu a senha? ", -1)])]),
								_: 1
							}, 8, ["href"])) : createCommentVNode("", true)]),
							createBaseVNode("div", _hoisted_10, [createVNode(unref(LockKeyhole), { class: "absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" }), createVNode(PasswordInput_default, {
								id: "password",
								name: "password",
								required: "",
								autocomplete: "current-password",
								placeholder: "••••••••",
								class: "h-11 pl-10"
							})]),
							createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
						]),
						createVNode(unref(Label_default), {
							for: "remember",
							class: "flex items-center gap-3 text-sm font-normal"
						}, {
							default: withCtx(() => [createVNode(unref(Checkbox_default), {
								id: "remember",
								name: "remember"
							}), _cache[5] || (_cache[5] = createBaseVNode("span", null, " Lembrar-me ", -1))]),
							_: 1
						}),
						createVNode(unref(Button_default), {
							type: "submit",
							class: "h-11 w-full bg-indigo-600 hover:bg-indigo-500",
							disabled: processing
						}, {
							default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : (openBlock(), createElementBlock("span", _hoisted_11, " Entrar "))]),
							_: 2
						}, 1032, ["disabled"])
					]),
					_: 1
				}, 16),
				__props.canRegister ? (openBlock(), createElementBlock("div", _hoisted_12, [_cache[7] || (_cache[7] = createTextVNode(" Não possui conta? ", -1)), createVNode(TextLink_default, {
					href: unref(register)(),
					class: "font-medium"
				}, {
					default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode(" Criar conta ", -1)])]),
					_: 1
				}, 8, ["href"])])) : createCommentVNode("", true)
			])])], 64);
		};
	}
});
//#endregion
export { Login_default as default };
