import { E as inject, K as watch, L as provide, P as onUnmounted, S as getCurrentInstance, U as useId$1, ft as toRefs, j as nextTick, p as computed, st as ref, t as vue_runtime_esm_bundler_exports, w as h, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { i as unrefElement, n as defaultWindow, p as isClient } from "./useForwardExpose-BsmZrlm3.js";
import { r as renderSlotFragments } from "./Primitive-CLj4gEE3.js";
//#region node_modules/reka-ui/dist/shared/createContext.js
/**
* @param providerComponentName - The name(s) of the component(s) providing the context.
*
* There are situations where context can come from multiple components. In such cases, you might need to give an array of component names to provide your context, instead of just a single string.
*
* @param contextName The description for injection key symbol.
*/
function createContext(providerComponentName, contextName) {
	const symbolDescription = typeof providerComponentName === "string" && !contextName ? `${providerComponentName}Context` : contextName;
	const injectionKey = Symbol(symbolDescription);
	/**
	* @param fallback The context value to return if the injection fails.
	*
	* @throws When context injection failed and no fallback is specified.
	* This happens when the component injecting the context is not a child of the root component providing the context.
	*/
	const injectContext = (fallback) => {
		const context = inject(injectionKey, fallback);
		if (context) return context;
		if (context === null) return context;
		throw new Error(`Injection \`${injectionKey.toString()}\` not found. Component must be used within ${Array.isArray(providerComponentName) ? `one of the following components: ${providerComponentName.join(", ")}` : `\`${providerComponentName}\``}`);
	};
	const provideContext = (contextValue) => {
		provide(injectionKey, contextValue);
		return contextValue;
	};
	return [injectContext, provideContext];
}
//#endregion
//#region node_modules/reka-ui/dist/shared/getActiveElement.js
function getActiveElement() {
	let activeElement = document.activeElement;
	if (activeElement == null) return null;
	while (activeElement != null && activeElement.shadowRoot != null && activeElement.shadowRoot.activeElement != null) activeElement = activeElement.shadowRoot.activeElement;
	return activeElement;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/nullish.js
function isNullish(value) {
	return value === null || value === void 0;
}
//#endregion
//#region node_modules/reka-ui/dist/ConfigProvider/ConfigProvider.js
var [injectConfigProviderContext, provideConfigProviderContext] = /* @__PURE__ */ createContext("ConfigProvider");
//#endregion
//#region node_modules/reka-ui/dist/shared/useId.js
var count = 0;
/**
* The `useId` function generates a unique identifier using a provided deterministic ID or a default
* one prefixed with "reka-", or the provided one via `useId` props from `<ConfigProvider>`.
* @param {string | null | undefined} [deterministicId] - The `useId` function you provided takes an
* optional parameter `deterministicId`, which can be a string, null, or undefined. If
* `deterministicId` is provided, the function will return it. Otherwise, it will generate an id using
* the `useId` function obtained
*/
function useId(deterministicId, prefix = "reka") {
	if (deterministicId) return deterministicId;
	let id;
	if ("useId" in vue_runtime_esm_bundler_exports) id = useId$1?.();
	else id = injectConfigProviderContext({ useId: void 0 }).useId?.() ?? `${++count}`;
	return prefix ? `${prefix}-${id}` : id;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useStateMachine.js
/**
* The `useStateMachine` function is a TypeScript function that creates a state machine and returns the
* current state and a dispatch function to update the state based on events.
* @param initialState - The `initialState` parameter is the initial state of the state machine. It
* represents the starting point of the state machine's state.
* @param machine - The `machine` parameter is an object that represents a state machine. It should
* have keys that correspond to the possible states of the machine, and the values should be objects
* that represent the possible events and their corresponding next states.
* @returns The `useStateMachine` function returns an object with two properties: `state` and
* `dispatch`.
*/
function useStateMachine(initialState, machine) {
	const state = ref(initialState);
	function reducer(event) {
		return machine[state.value][event] ?? state.value;
	}
	const dispatch = (event) => {
		state.value = reducer(event);
	};
	return {
		state,
		dispatch
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Presence/usePresence.js
function usePresence(present, node) {
	const stylesRef = ref({});
	const prevAnimationNameRef = ref("none");
	const prevPresentRef = ref(present);
	const initialState = present.value ? "mounted" : "unmounted";
	let timeoutId;
	const ownerWindow = node.value?.ownerDocument.defaultView ?? defaultWindow;
	const { state, dispatch } = useStateMachine(initialState, {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	const dispatchCustomEvent = (name) => {
		if (isClient) {
			const customEvent = new CustomEvent(name, {
				bubbles: false,
				cancelable: false
			});
			node.value?.dispatchEvent(customEvent);
		}
	};
	watch(present, async (currentPresent, prevPresent) => {
		const hasPresentChanged = prevPresent !== currentPresent;
		await nextTick();
		if (hasPresentChanged) {
			const prevAnimationName = prevAnimationNameRef.value;
			const currentAnimationName = getAnimationName(node.value);
			if (currentPresent) {
				dispatch("MOUNT");
				dispatchCustomEvent("enter");
				if (currentAnimationName === "none") dispatchCustomEvent("after-enter");
			} else if (currentAnimationName === "none" || currentAnimationName === "undefined" || stylesRef.value?.display === "none") {
				dispatch("UNMOUNT");
				dispatchCustomEvent("leave");
				dispatchCustomEvent("after-leave");
			} else if (prevPresent && prevAnimationName !== currentAnimationName) {
				dispatch("ANIMATION_OUT");
				dispatchCustomEvent("leave");
			} else {
				dispatch("UNMOUNT");
				dispatchCustomEvent("after-leave");
			}
		}
	}, { immediate: true });
	/**
	* Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
	* event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
	* make sure we only trigger ANIMATION_END for the currently active animation.
	*/
	const handleAnimationEnd = (event) => {
		const currentAnimationName = getAnimationName(node.value);
		const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
		const directionName = state.value === "mounted" ? "enter" : "leave";
		if (event.target === node.value && isCurrentAnimation) {
			dispatchCustomEvent(`after-${directionName}`);
			dispatch("ANIMATION_END");
			if (!prevPresentRef.value) {
				const currentFillMode = node.value.style.animationFillMode;
				node.value.style.animationFillMode = "forwards";
				timeoutId = ownerWindow?.setTimeout(() => {
					if (node.value?.style.animationFillMode === "forwards") node.value.style.animationFillMode = currentFillMode;
				});
			}
		}
		if (event.target === node.value && currentAnimationName === "none") dispatch("ANIMATION_END");
	};
	const handleAnimationStart = (event) => {
		if (event.target === node.value) prevAnimationNameRef.value = getAnimationName(node.value);
	};
	const watcher = watch(node, (newNode, oldNode) => {
		if (newNode) {
			stylesRef.value = getComputedStyle(newNode);
			newNode.addEventListener("animationstart", handleAnimationStart);
			newNode.addEventListener("animationcancel", handleAnimationEnd);
			newNode.addEventListener("animationend", handleAnimationEnd);
		} else {
			dispatch("ANIMATION_END");
			if (timeoutId !== void 0) ownerWindow?.clearTimeout(timeoutId);
			oldNode?.removeEventListener("animationstart", handleAnimationStart);
			oldNode?.removeEventListener("animationcancel", handleAnimationEnd);
			oldNode?.removeEventListener("animationend", handleAnimationEnd);
		}
	}, { immediate: true });
	const stateWatcher = watch(state, () => {
		const currentAnimationName = getAnimationName(node.value);
		prevAnimationNameRef.value = state.value === "mounted" ? currentAnimationName : "none";
	});
	onUnmounted(() => {
		watcher();
		stateWatcher();
	});
	return { isPresent: computed(() => ["mounted", "unmountSuspended"].includes(state.value)) };
}
function getAnimationName(node) {
	return node ? getComputedStyle(node).animationName || "none" : "none";
}
//#endregion
//#region node_modules/reka-ui/dist/Presence/Presence.js
var Presence_default = /* @__PURE__ */ defineComponent({
	name: "Presence",
	props: {
		present: {
			type: Boolean,
			required: true
		},
		forceMount: { type: Boolean }
	},
	slots: {},
	setup(props, { slots, expose }) {
		const { present, forceMount } = toRefs(props);
		const node = ref();
		const { isPresent } = usePresence(present, node);
		expose({ present: isPresent });
		let children = slots.default({ present: isPresent.value });
		children = renderSlotFragments(children || []);
		const instance = getCurrentInstance();
		if (children && children?.length > 1) {
			const componentName = instance?.parent?.type.name ? `<${instance.parent.type.name} />` : "component";
			throw new Error([
				`Detected an invalid children for \`${componentName}\` for  \`Presence\` component.`,
				"",
				"Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
				"You can apply a few solutions:",
				["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((line) => `  - ${line}`).join("\n")
			].join("\n"));
		}
		return () => {
			if (forceMount.value || present.value || isPresent.value) return h(slots.default({ present: isPresent.value })[0], { ref: (v) => {
				const el = unrefElement(v);
				if (typeof el?.hasAttribute === "undefined") return el;
				if (el?.hasAttribute("data-reka-popper-content-wrapper")) node.value = el.firstElementChild;
				else node.value = el;
				return el;
			} });
			else return null;
		};
	}
});
//#endregion
export { getActiveElement as a, isNullish as i, useId as n, createContext as o, injectConfigProviderContext as r, Presence_default as t };
