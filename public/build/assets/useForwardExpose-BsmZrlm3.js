import { $ as getCurrentScope, F as onUpdated, K as watch, M as onBeforeUnmount, N as onMounted, Q as effectScope, S as getCurrentInstance, Z as customRef, ct as shallowReadonly, ht as unref, it as onScopeDispose, j as nextTick, lt as shallowRef, mt as triggerRef, ot as readonly, p as computed, pt as toValue, q as watchEffect, st as ref } from "./vue.runtime.esm-bundler-B_pudHEa.js";
//#region node_modules/reka-ui/node_modules/@vueuse/shared/dist/index.js
/**
*
* @deprecated This function will be removed in future version.
*
* Note: If you are using Vue 3.4+, you can straight use computed instead.
* Because in Vue 3.4+, if computed new value does not change,
* computed, effect, watch, watchEffect, render dependencies will not be triggered.
* refer: https://github.com/vuejs/core/pull/5912
*
* @param fn effect function
* @param options WatchOptionsBase
* @returns readonly shallowRef
*/
function computedEager(fn, options) {
	var _options$flush;
	const result = shallowRef();
	watchEffect(() => {
		result.value = fn();
	}, {
		...options,
		flush: (_options$flush = options === null || options === void 0 ? void 0 : options.flush) !== null && _options$flush !== void 0 ? _options$flush : "sync"
	});
	return readonly(result);
}
/**
* Call onScopeDispose() if it's inside an effect scope lifecycle, if not, do nothing
*
* @param fn
*/
function tryOnScopeDispose(fn, failSilently) {
	if (getCurrentScope()) {
		onScopeDispose(fn, failSilently);
		return true;
	}
	return false;
}
/**
* Utility for creating event hooks
*
* @see https://vueuse.org/createEventHook
*
* @__NO_SIDE_EFFECTS__
*/
function createEventHook() {
	const fns = /* @__PURE__ */ new Set();
	const off = (fn) => {
		fns.delete(fn);
	};
	const clear = () => {
		fns.clear();
	};
	const on = (fn) => {
		fns.add(fn);
		const offFn = () => off(fn);
		tryOnScopeDispose(offFn);
		return { off: offFn };
	};
	const trigger = (...args) => {
		return Promise.all(Array.from(fns).map((fn) => fn(...args)));
	};
	return {
		on,
		off,
		trigger,
		clear
	};
}
/**
* Keep states in the global scope to be reusable across Vue instances.
*
* @see https://vueuse.org/createGlobalState
* @param stateFactory A factory function to create the state
*
* @__NO_SIDE_EFFECTS__
*/
function createGlobalState(stateFactory) {
	let initialized = false;
	let state;
	const scope = effectScope(true);
	return ((...args) => {
		if (!initialized) {
			state = scope.run(() => stateFactory(...args));
			initialized = true;
		}
		return state;
	});
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var isDef = (val) => typeof val !== "undefined";
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
	var _window, _window2, _window3;
	return isClient && !!((_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 ? void 0 : _window.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.maxTouchPoints) > 2 && /iPad|Macintosh/.test((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.navigator.userAgent));
}
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
	return target || getCurrentInstance();
}
/**
* Make a composable function usable with multiple Vue instances.
*
* @see https://vueuse.org/createSharedComposable
*
* @__NO_SIDE_EFFECTS__
*/
function createSharedComposable(composable) {
	if (!isClient) return composable;
	let subscribers = 0;
	let state;
	let scope;
	const dispose = () => {
		subscribers -= 1;
		if (scope && subscribers <= 0) {
			scope.stop();
			state = void 0;
			scope = void 0;
		}
	};
	return ((...args) => {
		subscribers += 1;
		if (!scope) {
			scope = effectScope(true);
			state = scope.run(() => composable(...args));
		}
		tryOnScopeDispose(dispose);
		return state;
	});
}
/**
* Create a ref which will be reset to the default value after some time.
*
* @see https://vueuse.org/refAutoReset
* @param defaultValue The value which will be set.
* @param afterMs      A zero-or-greater delay in milliseconds.
*/
function refAutoReset(defaultValue, afterMs = 1e4) {
	return customRef((track, trigger) => {
		let value = toValue(defaultValue);
		let timer;
		const resetAfter = () => setTimeout(() => {
			value = toValue(defaultValue);
			trigger();
		}, toValue(afterMs));
		tryOnScopeDispose(() => {
			clearTimeout(timer);
		});
		return {
			get() {
				track();
				return value;
			},
			set(newValue) {
				value = newValue;
				trigger();
				clearTimeout(timer);
				timer = resetAfter();
			}
		};
	});
}
/**
* Call onBeforeUnmount() if it's inside a component lifecycle, if not, do nothing
*
* @param fn
* @param target
*/
function tryOnBeforeUnmount(fn, target) {
	if (getLifeCycleTarget(target)) onBeforeUnmount(fn, target);
}
/**
* Wrapper for `setTimeout` with controls.
*
* @param cb
* @param interval
* @param options
*/
function useTimeoutFn(cb, interval, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	const isPending = shallowRef(false);
	let timer;
	function clear() {
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
		}
	}
	function stop() {
		isPending.value = false;
		clear();
	}
	function start(...args) {
		if (immediateCallback) cb();
		clear();
		isPending.value = true;
		timer = setTimeout(() => {
			isPending.value = false;
			timer = void 0;
			cb(...args);
		}, toValue(interval));
	}
	if (immediate) {
		isPending.value = true;
		if (isClient) start();
	}
	tryOnScopeDispose(stop);
	return {
		isPending: shallowReadonly(isPending),
		start,
		stop
	};
}
/**
* Shorthand for watching value with {immediate: true}
*
* @see https://vueuse.org/watchImmediate
*/
function watchImmediate(source, cb, options) {
	return watch(source, cb, {
		...options,
		immediate: true
	});
}
//#endregion
//#region node_modules/reka-ui/node_modules/@vueuse/core/dist/index.js
var defaultWindow = isClient ? window : void 0;
isClient && window.document;
isClient && window.navigator;
isClient && window.location;
/**
* Get the dom element of a ref of element or Vue component instance
*
* @param elRef
*/
function unrefElement(elRef) {
	var _$el;
	const plain = toValue(elRef);
	return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener(...args) {
	const register = (el, event, listener, options) => {
		el.addEventListener(event, listener, options);
		return () => el.removeEventListener(event, listener, options);
	};
	const firstParamTargets = computed(() => {
		const test = toArray(toValue(args[0])).filter((e) => e != null);
		return test.every((e) => typeof e !== "string") ? test : void 0;
	});
	return watchImmediate(() => {
		var _firstParamTargets$va, _firstParamTargets$va2;
		return [
			(_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
			toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
			toArray(unref(firstParamTargets.value ? args[2] : args[1])),
			toValue(firstParamTargets.value ? args[3] : args[2])
		];
	}, ([raw_targets, raw_events, raw_listeners, raw_options], _, onCleanup) => {
		if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
		const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
		const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
		onCleanup(() => {
			cleanups.forEach((fn) => fn());
		});
	}, { flush: "post" });
}
/**
* Mounted state in ref.
*
* @see https://vueuse.org/useMounted
*
* @__NO_SIDE_EFFECTS__
*/
function useMounted() {
	const isMounted = shallowRef(false);
	const instance = getCurrentInstance();
	if (instance) onMounted(() => {
		isMounted.value = true;
	}, instance);
	return isMounted;
}
/* @__NO_SIDE_EFFECTS__ */
function useSupported(callback) {
	const isMounted = useMounted();
	return computed(() => {
		isMounted.value;
		return Boolean(callback());
	});
}
function createKeyPredicate(keyFilter) {
	if (typeof keyFilter === "function") return keyFilter;
	else if (typeof keyFilter === "string") return (event) => event.key === keyFilter;
	else if (Array.isArray(keyFilter)) return (event) => keyFilter.includes(event.key);
	return () => true;
}
function onKeyStroke(...args) {
	let key;
	let handler;
	let options = {};
	if (args.length === 3) {
		key = args[0];
		handler = args[1];
		options = args[2];
	} else if (args.length === 2) if (typeof args[1] === "object") {
		key = true;
		handler = args[0];
		options = args[1];
	} else {
		key = args[0];
		handler = args[1];
	}
	else {
		key = true;
		handler = args[0];
	}
	const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
	const predicate = createKeyPredicate(key);
	const listener = (e) => {
		if (e.repeat && toValue(dedupe)) return;
		if (predicate(e)) handler(e);
	};
	return useEventListener(target, eventName, listener, passive);
}
function cloneFnJSON(source) {
	return JSON.parse(JSON.stringify(source));
}
/**
* Reports changes to the dimensions of an Element's content or the border-box
*
* @see https://vueuse.org/useResizeObserver
* @param target
* @param callback
* @param options
*/
function useResizeObserver(target, callback, options = {}) {
	const { window = defaultWindow, ...observerOptions } = options;
	let observer;
	const isSupported = /* @__PURE__ */ useSupported(() => window && "ResizeObserver" in window);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => {
		const _targets = toValue(target);
		return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
	}), (els) => {
		cleanup();
		if (isSupported.value && window) {
			observer = new ResizeObserver(callback);
			for (const _el of els) if (_el) observer.observe(_el, observerOptions);
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop
	};
}
Number.POSITIVE_INFINITY;
/**
* Shorthand for v-model binding, props + emit -> ref
*
* @see https://vueuse.org/useVModel
* @param props
* @param key (default 'modelValue')
* @param emit
* @param options
*
* @__NO_SIDE_EFFECTS__
*/
function useVModel(props, key, emit, options = {}) {
	var _vm$$emit, _vm$proxy;
	const { clone = false, passive = false, eventName, deep = false, defaultValue, shouldEmit } = options;
	const vm = getCurrentInstance();
	const _emit = emit || (vm === null || vm === void 0 ? void 0 : vm.emit) || (vm === null || vm === void 0 || (_vm$$emit = vm.$emit) === null || _vm$$emit === void 0 ? void 0 : _vm$$emit.bind(vm)) || (vm === null || vm === void 0 || (_vm$proxy = vm.proxy) === null || _vm$proxy === void 0 || (_vm$proxy = _vm$proxy.$emit) === null || _vm$proxy === void 0 ? void 0 : _vm$proxy.bind(vm === null || vm === void 0 ? void 0 : vm.proxy));
	let event = eventName;
	if (!key) key = "modelValue";
	event = event || `update:${key.toString()}`;
	const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
	const getValue = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
	const triggerEmit = (value) => {
		if (shouldEmit) {
			if (shouldEmit(value)) _emit(event, value);
		} else _emit(event, value);
	};
	if (passive) {
		const proxy = ref(getValue());
		let isUpdating = false;
		watch(() => props[key], (v) => {
			if (!isUpdating) {
				isUpdating = true;
				proxy.value = cloneFn(v);
				nextTick(() => isUpdating = false);
			}
		});
		watch(proxy, (v) => {
			if (!isUpdating && (v !== props[key] || deep)) triggerEmit(v);
		}, { deep });
		return proxy;
	} else return computed({
		get() {
			return getValue();
		},
		set(value) {
			triggerEmit(value);
		}
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useForwardExpose.js
function useForwardExpose() {
	const instance = getCurrentInstance();
	const currentRef = ref();
	const currentElement = computed(() => resolveCurrentElement());
	onUpdated(() => {
		if (currentElement.value !== resolveCurrentElement()) triggerRef(currentRef);
	});
	function resolveCurrentElement() {
		return currentRef.value && "$el" in currentRef.value && ["#text", "#comment"].includes(currentRef.value.$el.nodeName) ? currentRef.value.$el.nextElementSibling : unrefElement(currentRef);
	}
	const localExpose = Object.assign({}, instance.exposed);
	const ret = {};
	for (const key in instance.props) Object.defineProperty(ret, key, {
		enumerable: true,
		configurable: true,
		get: () => instance.props[key]
	});
	if (Object.keys(localExpose).length > 0) for (const key in localExpose) Object.defineProperty(ret, key, {
		enumerable: true,
		configurable: true,
		get: () => localExpose[key]
	});
	Object.defineProperty(ret, "$el", {
		enumerable: true,
		configurable: true,
		get: () => instance.vnode.el
	});
	instance.exposed = ret;
	function forwardRef(ref$1) {
		currentRef.value = ref$1;
		if (!ref$1) return;
		Object.defineProperty(ret, "$el", {
			enumerable: true,
			configurable: true,
			get: () => ref$1 instanceof Element ? ref$1 : ref$1.$el
		});
		if (!(ref$1 instanceof Element) && !Object.hasOwn(ref$1, "$el")) {
			const childExposed = ref$1.$.exposed;
			const merged = Object.assign({}, ret);
			for (const key in childExposed) Object.defineProperty(merged, key, {
				enumerable: true,
				configurable: true,
				get: () => childExposed[key]
			});
			instance.exposed = merged;
		}
	}
	return {
		forwardRef,
		currentRef,
		currentElement
	};
}
//#endregion
export { tryOnScopeDispose as _, useEventListener as a, useVModel as c, createGlobalState as d, createSharedComposable as f, tryOnBeforeUnmount as g, refAutoReset as h, unrefElement as i, computedEager as l, isIOS as m, defaultWindow as n, useMounted as o, isClient as p, onKeyStroke as r, useResizeObserver as s, useForwardExpose as t, createEventHook as u, useTimeoutFn as v };
