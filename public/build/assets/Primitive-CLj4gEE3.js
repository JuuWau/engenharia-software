import { A as mergeProps, f as cloneVNode, l as Comment, u as Fragment, w as h, x as defineComponent } from "./vue.runtime.esm-bundler-B_pudHEa.js";
//#region node_modules/reka-ui/dist/shared/renderSlotFragments.js
function renderSlotFragments(children) {
	if (!children) return [];
	return children.flatMap((child) => {
		if (child.type === Fragment) return renderSlotFragments(child.children);
		return [child];
	});
}
//#endregion
//#region node_modules/reka-ui/dist/Primitive/Slot.js
var Slot = /* @__PURE__ */ defineComponent({
	name: "PrimitiveSlot",
	inheritAttrs: false,
	setup(_, { attrs, slots }) {
		return () => {
			if (!slots.default) return null;
			const children = renderSlotFragments(slots.default());
			const firstNonCommentChildrenIndex = children.findIndex((child) => child.type !== Comment);
			if (firstNonCommentChildrenIndex === -1) return children;
			const firstNonCommentChildren = children[firstNonCommentChildrenIndex];
			delete firstNonCommentChildren.props?.ref;
			const mergedProps = firstNonCommentChildren.props ? mergeProps(attrs, firstNonCommentChildren.props) : attrs;
			const cloned = cloneVNode({
				...firstNonCommentChildren,
				props: {}
			}, mergedProps);
			if (children.length === 1) return cloned;
			children[firstNonCommentChildrenIndex] = cloned;
			return children;
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Primitive/Primitive.js
var SELF_CLOSING_TAGS = [
	"area",
	"img",
	"input"
];
var Primitive = /* @__PURE__ */ defineComponent({
	name: "Primitive",
	inheritAttrs: false,
	props: {
		asChild: {
			type: Boolean,
			default: false
		},
		as: {
			type: [String, Object],
			default: "div"
		}
	},
	setup(props, { attrs, slots }) {
		const asTag = props.asChild ? "template" : props.as;
		if (typeof asTag === "string" && SELF_CLOSING_TAGS.includes(asTag)) return () => h(asTag, attrs);
		if (asTag !== "template") return () => h(props.as, attrs, { default: slots.default });
		return () => h(Slot, attrs, { default: slots.default });
	}
});
//#endregion
export { Slot as n, renderSlotFragments as r, Primitive as t };
