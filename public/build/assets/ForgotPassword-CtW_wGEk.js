import { A as mergeProps, I as openBlock, Y as withCtx, _ as createElementBlock, b as createVNode, bt as toDisplayString, g as createCommentVNode, h as createBlock, ht as unref, m as createBaseVNode, u as Fragment, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { a as head_default, i as form_default } from "./wayfinder-DBTLeCO_.js";
import { t as Label_default } from "./Label-Dugk_doq.js";
import { t as ArrowLeft } from "./arrow-left-5yvr1PW8.js";
import { t as Spinner_default } from "./Spinner-DFXJ_AGW.js";
import { n as Mail, t as TextLink_default } from "./TextLink-mnuxNC3g.js";
import { t as ShieldCheck } from "./shield-check-DRRcEC0L.js";
import { t as Input_default } from "./Input-CyYI105W.js";
import { m as Button_default, o as login } from "./app-BF-ImWg4.js";
import { t as InputError_default } from "./InputError-D7zEBEwO.js";
import { t as email } from "./password-fLsczHKt.js";
//#region resources/js/pages/auth/ForgotPassword.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex min-h-screen items-center justify-center px-4" };
var _hoisted_2 = { class: "w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg" };
var _hoisted_3 = { class: "mb-8 text-center" };
var _hoisted_4 = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white" };
var _hoisted_5 = {
	key: 0,
	class: "mb-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-600"
};
var _hoisted_6 = { class: "space-y-2" };
var _hoisted_7 = { class: "relative" };
var _hoisted_8 = { key: 1 };
var _hoisted_9 = { class: "mt-6 text-center text-sm text-gray-500" };
var _hoisted_10 = { class: "mt-4 text-center" };
//#endregion
//#region resources/js/pages/auth/ForgotPassword.vue
var ForgotPassword_default = /* @__PURE__ */ defineComponent({
	layout: {
		title: "Recuperar senha",
		description: "Digite seu email para receber o link de redefinição"
	},
	__name: "ForgotPassword",
	props: { status: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Recuperar senha" }), createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [
					createBaseVNode("div", _hoisted_4, [createVNode(unref(ShieldCheck), { class: "h-8 w-8" })]),
					_cache[0] || (_cache[0] = createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, " Safe Voice ", -1)),
					_cache[1] || (_cache[1] = createBaseVNode("p", { class: "mt-2 text-sm text-gray-500" }, " Recupere o acesso à sua conta ", -1))
				]),
				__props.status ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
				createVNode(unref(form_default), mergeProps(unref(email).form(), { class: "space-y-5" }), {
					default: withCtx(({ errors, processing }) => [createBaseVNode("div", _hoisted_6, [
						createVNode(unref(Label_default), { for: "email" }, {
							default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" Email ", -1)])]),
							_: 1
						}),
						createBaseVNode("div", _hoisted_7, [createVNode(unref(Mail), { class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" }), createVNode(unref(Input_default), {
							id: "email",
							name: "email",
							type: "email",
							required: "",
							autofocus: "",
							autocomplete: "email",
							placeholder: "voce@email.com",
							class: "h-11 pl-10"
						})]),
						createVNode(InputError_default, { message: errors.email }, null, 8, ["message"])
					]), createVNode(unref(Button_default), {
						type: "submit",
						class: "h-11 w-full bg-indigo-600 hover:bg-indigo-500",
						disabled: processing,
						"data-test": "email-password-reset-link-button"
					}, {
						default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : (openBlock(), createElementBlock("span", _hoisted_8, " Enviar link de recuperação "))]),
						_: 2
					}, 1032, ["disabled"])]),
					_: 1
				}, 16),
				createBaseVNode("div", _hoisted_9, [_cache[4] || (_cache[4] = createBaseVNode("span", null, "Lembrou sua senha? ", -1)), createVNode(TextLink_default, {
					href: unref(login)(),
					class: "font-medium"
				}, {
					default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Voltar para o login ", -1)])]),
					_: 1
				}, 8, ["href"])]),
				createBaseVNode("div", _hoisted_10, [createVNode(TextLink_default, {
					href: unref(login)(),
					class: "inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600"
				}, {
					default: withCtx(() => [createVNode(unref(ArrowLeft), { class: "h-3 w-3" }), _cache[5] || (_cache[5] = createTextVNode(" Voltar ", -1))]),
					_: 1
				}, 8, ["href"])])
			])])], 64);
		};
	}
});
//#endregion
export { ForgotPassword_default as default };
