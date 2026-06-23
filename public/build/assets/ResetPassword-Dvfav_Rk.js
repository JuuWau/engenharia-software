import { A as mergeProps, B as resolveDynamicComponent, I as openBlock, Y as withCtx, _ as createElementBlock, _t as normalizeClass, b as createVNode, g as createCommentVNode, h as createBlock, ht as unref, m as createBaseVNode, p as computed, st as ref, u as Fragment, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { a as head_default, i as form_default } from "./wayfinder-DBTLeCO_.js";
import { t as Label_default } from "./Label-Dugk_doq.js";
import { t as ArrowLeft } from "./arrow-left-5yvr1PW8.js";
import { t as Check } from "./check-C_1ejoUj.js";
import { t as PasswordInput_default } from "./PasswordInput-DhDh15Vt.js";
import { t as Spinner_default } from "./Spinner-DFXJ_AGW.js";
import { t as LockKeyhole } from "./lock-keyhole-qdZQ5Hj6.js";
import { n as Mail, t as TextLink_default } from "./TextLink-mnuxNC3g.js";
import { t as ShieldCheck } from "./shield-check-DRRcEC0L.js";
import { t as Input_default } from "./Input-CyYI105W.js";
import { h as X, m as Button_default, o as login } from "./app-BF-ImWg4.js";
import { t as InputError_default } from "./InputError-D7zEBEwO.js";
import { r as update } from "./password-fLsczHKt.js";
//#region resources/js/pages/auth/ResetPassword.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex min-h-screen items-center justify-center px-4" };
var _hoisted_2 = { class: "w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg" };
var _hoisted_3 = { class: "mb-8 text-center" };
var _hoisted_4 = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white" };
var _hoisted_5 = { class: "space-y-2" };
var _hoisted_6 = { class: "relative" };
var _hoisted_7 = { class: "space-y-2" };
var _hoisted_8 = { class: "relative" };
var _hoisted_9 = { class: "mt-3 space-y-1.5 text-sm" };
var _hoisted_10 = { class: "flex items-center gap-2" };
var _hoisted_11 = { class: "flex items-center gap-2" };
var _hoisted_12 = { class: "flex items-center gap-2" };
var _hoisted_13 = { class: "flex items-center gap-2" };
var _hoisted_14 = { class: "flex items-center gap-2" };
var _hoisted_15 = { class: "flex items-center gap-2" };
var _hoisted_16 = { class: "space-y-2" };
var _hoisted_17 = { class: "relative" };
var _hoisted_18 = {
	key: 0,
	class: "mt-1 text-sm"
};
var _hoisted_19 = {
	key: 0,
	class: "flex items-center gap-2 text-green-600"
};
var _hoisted_20 = {
	key: 1,
	class: "flex items-center gap-2 text-red-500"
};
var _hoisted_21 = { key: 1 };
var _hoisted_22 = { class: "mt-6 text-center text-sm text-gray-500" };
var _hoisted_23 = { class: "mt-4 text-center" };
//#endregion
//#region resources/js/pages/auth/ResetPassword.vue
var ResetPassword_default = /* @__PURE__ */ defineComponent({
	layout: {
		title: "Redefinir senha",
		description: "Digite sua nova senha abaixo"
	},
	__name: "ResetPassword",
	props: {
		token: {},
		email: {}
	},
	setup(__props) {
		const inputEmail = ref(__props.email);
		const password = ref("");
		const passwordConfirmation = ref("");
		const validations = computed(() => {
			const pwd = password.value || "";
			return {
				minLength: pwd.length >= 12,
				hasUpperCase: /[A-Z]/.test(pwd),
				hasLowerCase: /[a-z]/.test(pwd),
				hasNumber: /[0-9]/.test(pwd),
				hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
				hasNoSpaces: !/\s/.test(pwd)
			};
		});
		const allValidationsPassed = computed(() => {
			const v = validations.value;
			return v.minLength && v.hasUpperCase && v.hasLowerCase && v.hasNumber && v.hasSpecialChar && v.hasNoSpaces;
		});
		const getValidationIcon = (isValid) => {
			return isValid ? Check : X;
		};
		const getValidationColor = (isValid) => {
			return isValid ? "text-green-500" : "text-gray-400";
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Redefinir senha" }), createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [
					createBaseVNode("div", _hoisted_4, [createVNode(unref(ShieldCheck), { class: "h-8 w-8" })]),
					_cache[3] || (_cache[3] = createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, " Safe Voice ", -1)),
					_cache[4] || (_cache[4] = createBaseVNode("p", { class: "mt-2 text-sm text-gray-500" }, " Crie uma nova senha para sua conta ", -1))
				]),
				createVNode(unref(form_default), mergeProps(unref(update).form(), {
					transform: (data) => ({
						...data,
						token: __props.token,
						email: __props.email
					}),
					"reset-on-success": ["password", "password_confirmation"],
					class: "space-y-5"
				}), {
					default: withCtx(({ errors, processing }) => [
						createBaseVNode("div", _hoisted_5, [
							createVNode(unref(Label_default), { for: "email" }, {
								default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode(" Email ", -1)])]),
								_: 1
							}),
							createBaseVNode("div", _hoisted_6, [createVNode(unref(Mail), { class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" }), createVNode(unref(Input_default), {
								id: "email",
								type: "email",
								name: "email",
								autocomplete: "email",
								modelValue: inputEmail.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputEmail.value = $event),
								class: "h-11 pl-10 cursor-not-allowed bg-gray-50",
								readonly: "",
								disabled: ""
							}, null, 8, ["modelValue"])]),
							createVNode(InputError_default, { message: errors.email }, null, 8, ["message"])
						]),
						createBaseVNode("div", _hoisted_7, [
							createVNode(unref(Label_default), { for: "password" }, {
								default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode(" Nova senha ", -1), createBaseVNode("span", { class: "text-xs text-gray-400 font-normal ml-1" }, " (mínimo 12 caracteres) ", -1)])]),
								_: 1
							}),
							createBaseVNode("div", _hoisted_8, [createVNode(unref(LockKeyhole), { class: "absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" }), createVNode(PasswordInput_default, {
								id: "password",
								name: "password",
								autocomplete: "new-password",
								class: "h-11 pl-10",
								autofocus: "",
								placeholder: "••••••••",
								modelValue: password.value,
								"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event)
							}, null, 8, ["modelValue"])]),
							createVNode(InputError_default, { message: errors.password }, null, 8, ["message"]),
							createBaseVNode("div", _hoisted_9, [
								createBaseVNode("div", _hoisted_10, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.minLength)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.minLength)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.minLength ? "text-green-600" : "text-gray-500") }, " Mínimo de 12 caracteres ", 2)]),
								createBaseVNode("div", _hoisted_11, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.hasUpperCase)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.hasUpperCase)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.hasUpperCase ? "text-green-600" : "text-gray-500") }, " Pelo menos uma letra maiúscula (A-Z) ", 2)]),
								createBaseVNode("div", _hoisted_12, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.hasLowerCase)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.hasLowerCase)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.hasLowerCase ? "text-green-600" : "text-gray-500") }, " Pelo menos uma letra minúscula (a-z) ", 2)]),
								createBaseVNode("div", _hoisted_13, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.hasNumber)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.hasNumber)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.hasNumber ? "text-green-600" : "text-gray-500") }, " Pelo menos um número (0-9) ", 2)]),
								createBaseVNode("div", _hoisted_14, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.hasSpecialChar)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.hasSpecialChar)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.hasSpecialChar ? "text-green-600" : "text-gray-500") }, " Pelo menos um caractere especial (!@#$%^&*) ", 2)]),
								createBaseVNode("div", _hoisted_15, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.hasNoSpaces)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.hasNoSpaces)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.hasNoSpaces ? "text-green-600" : "text-gray-500") }, " Sem espaços em branco ", 2)])
							])
						]),
						createBaseVNode("div", _hoisted_16, [
							createVNode(unref(Label_default), { for: "password_confirmation" }, {
								default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode(" Confirmar senha ", -1)])]),
								_: 1
							}),
							createBaseVNode("div", _hoisted_17, [createVNode(unref(LockKeyhole), { class: "absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" }), createVNode(PasswordInput_default, {
								id: "password_confirmation",
								name: "password_confirmation",
								autocomplete: "new-password",
								class: "h-11 pl-10",
								placeholder: "••••••••",
								modelValue: passwordConfirmation.value,
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => passwordConfirmation.value = $event)
							}, null, 8, ["modelValue"])]),
							createVNode(InputError_default, { message: errors.password_confirmation }, null, 8, ["message"]),
							passwordConfirmation.value && password.value ? (openBlock(), createElementBlock("div", _hoisted_18, [password.value === passwordConfirmation.value ? (openBlock(), createElementBlock("div", _hoisted_19, [createVNode(unref(Check), { class: "h-4 w-4" }), _cache[8] || (_cache[8] = createTextVNode(" As senhas coincidem ", -1))])) : (openBlock(), createElementBlock("div", _hoisted_20, [createVNode(unref(X), { class: "h-4 w-4" }), _cache[9] || (_cache[9] = createTextVNode(" As senhas não coincidem ", -1))]))])) : createCommentVNode("", true)
						]),
						createVNode(unref(Button_default), {
							type: "submit",
							class: "h-11 w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-300",
							disabled: processing || !allValidationsPassed.value || password.value !== passwordConfirmation.value,
							"data-test": "reset-password-button"
						}, {
							default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : (openBlock(), createElementBlock("span", _hoisted_21, " Redefinir senha "))]),
							_: 2
						}, 1032, ["disabled"])
					]),
					_: 1
				}, 16, ["transform"]),
				createBaseVNode("div", _hoisted_22, [_cache[11] || (_cache[11] = createBaseVNode("span", null, "Lembrou sua senha? ", -1)), createVNode(TextLink_default, {
					href: unref(login)(),
					class: "font-medium"
				}, {
					default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode(" Voltar para o login ", -1)])]),
					_: 1
				}, 8, ["href"])]),
				createBaseVNode("div", _hoisted_23, [createVNode(TextLink_default, {
					href: unref(login)(),
					class: "inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600"
				}, {
					default: withCtx(() => [createVNode(unref(ArrowLeft), { class: "h-3 w-3" }), _cache[12] || (_cache[12] = createTextVNode(" Voltar ", -1))]),
					_: 1
				}, 8, ["href"])])
			])])], 64);
		};
	}
});
//#endregion
export { ResetPassword_default as default };
