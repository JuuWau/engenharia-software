import { A as mergeProps, I as openBlock, Y as withCtx, _ as createElementBlock, b as createVNode, g as createCommentVNode, h as createBlock, ht as unref, m as createBaseVNode, u as Fragment, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { a as head_default, i as form_default } from "./wayfinder-DBTLeCO_.js";
import { t as Spinner_default } from "./Spinner-DFXJ_AGW.js";
import { n as Mail, t as TextLink_default } from "./TextLink-mnuxNC3g.js";
import { m as Button_default, s as logout } from "./app-BF-ImWg4.js";
import { t as send } from "./verification-CjI-kR2K.js";
//#region resources/js/pages/auth/VerifyEmail.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex min-h-screen items-center justify-center px-4" };
var _hoisted_2 = { class: "w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg" };
var _hoisted_3 = { class: "mb-8 text-center" };
var _hoisted_4 = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white" };
var _hoisted_5 = {
	key: 0,
	class: "mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
};
var _hoisted_6 = { key: 1 };
var _hoisted_7 = { class: "mt-6 text-center text-sm text-gray-500" };
//#endregion
//#region resources/js/pages/auth/VerifyEmail.vue
var VerifyEmail_default = /* @__PURE__ */ defineComponent({
	layout: {
		title: "Verificação de email",
		description: "Confirme seu email para continuar no sistema"
	},
	__name: "VerifyEmail",
	props: { status: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Verificação de email" }), createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [
					createBaseVNode("div", _hoisted_4, [createVNode(unref(Mail), { class: "h-8 w-8" })]),
					_cache[0] || (_cache[0] = createBaseVNode("h1", { class: "text-2xl font-bold text-gray-900" }, " Verifique seu email ", -1)),
					_cache[1] || (_cache[1] = createBaseVNode("p", { class: "mt-2 text-sm text-gray-500" }, " Enviamos um link de verificação para seu email ", -1))
				]),
				__props.status === "verification-link-sent" ? (openBlock(), createElementBlock("div", _hoisted_5, " Um novo link de verificação foi enviado para seu email. ")) : createCommentVNode("", true),
				createVNode(unref(form_default), mergeProps(unref(send).form(), { class: "space-y-5" }), {
					default: withCtx(({ processing }) => [createVNode(unref(Button_default), {
						class: "h-11 w-full bg-indigo-600 hover:bg-indigo-500",
						disabled: processing
					}, {
						default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : (openBlock(), createElementBlock("span", _hoisted_6, "Reenviar email de verificação"))]),
						_: 2
					}, 1032, ["disabled"])]),
					_: 1
				}, 16),
				createBaseVNode("div", _hoisted_7, [_cache[3] || (_cache[3] = createTextVNode(" Quer usar outro email? ", -1)), createVNode(TextLink_default, {
					href: unref(logout)(),
					class: "font-medium text-indigo-600"
				}, {
					default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" Sair ", -1)])]),
					_: 1
				}, 8, ["href"])])
			])])], 64);
		};
	}
});
//#endregion
export { VerifyEmail_default as default };
