import { E as inject, K as watch, L as provide, p as computed, q as watchEffect, rt as markRaw, st as ref, w as h, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { r as injectConfigProviderContext } from "./Presence-DwpF0WMp.js";
import { i as unrefElement } from "./useForwardExpose-BsmZrlm3.js";
import { n as Slot } from "./Primitive-CLj4gEE3.js";
//#region node_modules/reka-ui/dist/shared/useDirection.js
/**
* The `useDirection` function provides a way to access the current direction in your application.
* @param {Ref<Direction | undefined>} [dir] - An optional ref containing the direction (ltr or rtl).
* @returns  computed value that combines with the resolved direction.
*/
function useDirection(dir) {
	const context = injectConfigProviderContext({ dir: ref("ltr") });
	return computed(() => dir?.value || context.dir?.value || "ltr");
}
//#endregion
//#region node_modules/reka-ui/dist/Primitive/usePrimitiveElement.js
function usePrimitiveElement() {
	const primitiveElement = ref();
	return {
		primitiveElement,
		currentElement: computed(() => ["#text", "#comment"].includes(primitiveElement.value?.$el.nodeName) ? primitiveElement.value?.$el.nextElementSibling : unrefElement(primitiveElement))
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Collection/Collection.js
var ITEM_DATA_ATTR = "data-reka-collection-item";
function useCollection(options = {}) {
	const { key = "", isProvider = false } = options;
	const injectionKey = `${key}CollectionProvider`;
	let context;
	if (isProvider) {
		const itemMap = ref(/* @__PURE__ */ new Map());
		context = {
			collectionRef: ref(),
			itemMap
		};
		provide(injectionKey, context);
	} else context = inject(injectionKey);
	const getItems = (includeDisabledItem = false) => {
		const collectionNode = context.collectionRef.value;
		if (!collectionNode) return [];
		const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
		const orderedItems = Array.from(context.itemMap.value.values()).sort((a, b) => orderedNodes.indexOf(a.ref) - orderedNodes.indexOf(b.ref));
		if (includeDisabledItem) return orderedItems;
		else return orderedItems.filter((i) => i.ref.dataset.disabled !== "");
	};
	const CollectionSlot = /* @__PURE__ */ defineComponent({
		name: "CollectionSlot",
		inheritAttrs: false,
		setup(_, { slots, attrs }) {
			const { primitiveElement, currentElement } = usePrimitiveElement();
			watch(currentElement, () => {
				context.collectionRef.value = currentElement.value;
			});
			return () => h(Slot, {
				ref: primitiveElement,
				...attrs
			}, slots);
		}
	});
	const CollectionItem = /* @__PURE__ */ defineComponent({
		name: "CollectionItem",
		inheritAttrs: false,
		props: { value: { validator: () => true } },
		setup(props, { slots, attrs }) {
			const { primitiveElement, currentElement } = usePrimitiveElement();
			watchEffect((cleanupFn) => {
				if (currentElement.value) {
					const key$1 = markRaw(currentElement.value);
					context.itemMap.value.set(key$1, {
						ref: currentElement.value,
						value: props.value
					});
					cleanupFn(() => context.itemMap.value.delete(key$1));
				}
			});
			return () => h(Slot, {
				...attrs,
				[ITEM_DATA_ATTR]: "",
				ref: primitiveElement
			}, slots);
		}
	});
	return {
		getItems,
		reactiveItems: computed(() => Array.from(context.itemMap.value.values())),
		itemMapSize: computed(() => context.itemMap.value.size),
		CollectionSlot,
		CollectionItem
	};
}
//#endregion
export { usePrimitiveElement as n, useDirection as r, useCollection as t };
