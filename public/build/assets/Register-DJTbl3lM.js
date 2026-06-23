import { A as mergeProps, B as resolveDynamicComponent, I as openBlock, Y as withCtx, _ as createElementBlock, _t as normalizeClass, b as createVNode, g as createCommentVNode, h as createBlock, ht as unref, m as createBaseVNode, p as computed, st as ref, u as Fragment, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { a as head_default, i as form_default, n as queryParams } from "./wayfinder-DBTLeCO_.js";
import { t as Label_default } from "./Label-Dugk_doq.js";
import { t as Check } from "./check-C_1ejoUj.js";
import { t as PasswordInput_default } from "./PasswordInput-DhDh15Vt.js";
import { t as Spinner_default } from "./Spinner-DFXJ_AGW.js";
import { t as LockKeyhole } from "./lock-keyhole-qdZQ5Hj6.js";
import { n as Mail, t as TextLink_default } from "./TextLink-mnuxNC3g.js";
import { t as ShieldCheck } from "./shield-check-DRRcEC0L.js";
import { t as Input_default } from "./Input-CyYI105W.js";
import { g as User, h as X, m as Button_default, o as login } from "./app-BF-ImWg4.js";
import { t as InputError_default } from "./InputError-D7zEBEwO.js";
import { a as string, i as object, o as ZodError } from "./schemas-D1AZt847.js";
//#region resources/js/routes/register/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/register"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
Object.assign(store, store);
//#endregion
//#region resources/js/pages/auth/Register.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex min-h-screen items-center justify-center px-4" };
var _hoisted_2 = { class: "w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg" };
var _hoisted_3 = { class: "mb-8 text-center" };
var _hoisted_4 = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white" };
var _hoisted_5 = { class: "space-y-2" };
var _hoisted_6 = { class: "relative" };
var _hoisted_7 = { class: "space-y-2" };
var _hoisted_8 = { class: "relative" };
var _hoisted_9 = { class: "space-y-2" };
var _hoisted_10 = { class: "relative" };
var _hoisted_11 = { class: "mt-3 space-y-1.5 text-sm" };
var _hoisted_12 = { class: "flex items-center gap-2" };
var _hoisted_13 = { class: "flex items-center gap-2" };
var _hoisted_14 = { class: "flex items-center gap-2" };
var _hoisted_15 = { class: "flex items-center gap-2" };
var _hoisted_16 = { class: "flex items-center gap-2" };
var _hoisted_17 = { class: "flex items-center gap-2" };
var _hoisted_18 = { class: "space-y-2" };
var _hoisted_19 = { class: "relative" };
var _hoisted_20 = {
	key: 0,
	class: "mt-1 text-sm"
};
var _hoisted_21 = {
	key: 0,
	class: "flex items-center gap-2 text-green-600"
};
var _hoisted_22 = {
	key: 1,
	class: "flex items-center gap-2 text-red-500"
};
var _hoisted_23 = { key: 1 };
var _hoisted_24 = { class: "mt-6 text-center text-sm text-gray-500" };
//#endregion
//#region resources/js/pages/auth/Register.vue
var Register_default = /* @__PURE__ */ defineComponent({
	__name: "Register",
	setup(__props) {
		const passwordSchema = string().min(12, "A senha deve ter pelo menos 12 caracteres").regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula").regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula").regex(/[0-9]/, "A senha deve conter pelo menos um número").regex(/[!@#$%^&*(),.?":{}|<>]/, "A senha deve conter pelo menos um caractere especial").regex(/^\S+$/, "A senha não pode conter espaços em branco");
		const registerSchema = object({
			name: string().min(1, "Nome é obrigatório"),
			email: string().email("Email inválido"),
			password: passwordSchema,
			password_confirmation: string()
		}).refine((data) => data.password === data.password_confirmation, {
			message: "As senhas não coincidem",
			path: ["password_confirmation"]
		});
		const name = ref("");
		const email = ref("");
		const password = ref("");
		const passwordConfirmation = ref("");
		const validationErrors = computed(() => {
			try {
				registerSchema.parse({
					name: name.value,
					email: email.value,
					password: password.value,
					password_confirmation: passwordConfirmation.value
				});
				return {};
			} catch (error) {
				if (error instanceof ZodError) {
					const errors = {};
					if (error.errors && Array.isArray(error.errors)) error.errors.forEach((err) => {
						if (err.path && err.path[0]) errors[err.path[0]] = err.message;
					});
					return errors;
				}
				return {};
			}
		});
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
		const isFormValid = computed(() => {
			return name.value && email.value && allValidationsPassed.value && password.value === passwordConfirmation.value;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Cadastro" }), createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [
					createBaseVNode("div", _hoisted_4, [createVNode(unref(ShieldCheck), { class: "h-8 w-8" })]),
					_cache[4] || (_cache[4] = createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, " Safe Voice ", -1)),
					_cache[5] || (_cache[5] = createBaseVNode("p", { class: "mt-2 text-sm text-gray-500" }, " Crie sua conta para acessar o sistema ", -1))
				]),
				createVNode(unref(form_default), mergeProps(unref(store).form(), {
					"reset-on-success": ["password", "password_confirmation"],
					class: "space-y-5"
				}), {
					default: withCtx(({ errors, processing }) => [
						createBaseVNode("div", _hoisted_5, [
							createVNode(unref(Label_default), { for: "name" }, {
								default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode(" Nome ", -1)])]),
								_: 1
							}),
							createBaseVNode("div", _hoisted_6, [createVNode(unref(User), { class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" }), createVNode(unref(Input_default), {
								id: "name",
								name: "name",
								type: "text",
								required: "",
								autofocus: "",
								autocomplete: "name",
								placeholder: "Seu nome completo",
								class: "h-11 pl-10",
								modelValue: name.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => name.value = $event)
							}, null, 8, ["modelValue"])]),
							createVNode(InputError_default, { message: errors.name || validationErrors.value.name }, null, 8, ["message"])
						]),
						createBaseVNode("div", _hoisted_7, [
							createVNode(unref(Label_default), { for: "email" }, {
								default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode(" Email ", -1)])]),
								_: 1
							}),
							createBaseVNode("div", _hoisted_8, [createVNode(unref(Mail), { class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" }), createVNode(unref(Input_default), {
								id: "email",
								name: "email",
								type: "email",
								required: "",
								autocomplete: "email",
								placeholder: "voce@email.com",
								class: "h-11 pl-10",
								modelValue: email.value,
								"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => email.value = $event)
							}, null, 8, ["modelValue"])]),
							createVNode(InputError_default, { message: errors.email || validationErrors.value.email }, null, 8, ["message"])
						]),
						createBaseVNode("div", _hoisted_9, [
							createVNode(unref(Label_default), { for: "password" }, {
								default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode(" Senha ", -1), createBaseVNode("span", { class: "text-xs text-gray-400 font-normal ml-1" }, " (mínimo 12 caracteres) ", -1)])]),
								_: 1
							}),
							createBaseVNode("div", _hoisted_10, [createVNode(unref(LockKeyhole), { class: "absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" }), createVNode(PasswordInput_default, {
								id: "password",
								name: "password",
								required: "",
								autocomplete: "new-password",
								placeholder: "••••••••",
								class: "h-11 pl-10",
								modelValue: password.value,
								"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => password.value = $event)
							}, null, 8, ["modelValue"])]),
							createVNode(InputError_default, { message: errors.password || validationErrors.value.password }, null, 8, ["message"]),
							createBaseVNode("div", _hoisted_11, [
								createBaseVNode("div", _hoisted_12, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.minLength)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.minLength)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.minLength ? "text-green-600" : "text-gray-500") }, " Mínimo de 12 caracteres ", 2)]),
								createBaseVNode("div", _hoisted_13, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.hasUpperCase)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.hasUpperCase)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.hasUpperCase ? "text-green-600" : "text-gray-500") }, " Pelo menos uma letra maiúscula (A-Z) ", 2)]),
								createBaseVNode("div", _hoisted_14, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.hasLowerCase)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.hasLowerCase)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.hasLowerCase ? "text-green-600" : "text-gray-500") }, " Pelo menos uma letra minúscula (a-z) ", 2)]),
								createBaseVNode("div", _hoisted_15, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.hasNumber)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.hasNumber)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.hasNumber ? "text-green-600" : "text-gray-500") }, " Pelo menos um número (0-9) ", 2)]),
								createBaseVNode("div", _hoisted_16, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.hasSpecialChar)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.hasSpecialChar)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.hasSpecialChar ? "text-green-600" : "text-gray-500") }, " Pelo menos um caractere especial (!@#$%^&*) ", 2)]),
								createBaseVNode("div", _hoisted_17, [(openBlock(), createBlock(resolveDynamicComponent(getValidationIcon(validations.value.hasNoSpaces)), { class: normalizeClass(["h-4 w-4", getValidationColor(validations.value.hasNoSpaces)]) }, null, 8, ["class"])), createBaseVNode("span", { class: normalizeClass(validations.value.hasNoSpaces ? "text-green-600" : "text-gray-500") }, " Sem espaços em branco ", 2)])
							])
						]),
						createBaseVNode("div", _hoisted_18, [
							createVNode(unref(Label_default), { for: "password_confirmation" }, {
								default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode(" Confirmar senha ", -1)])]),
								_: 1
							}),
							createBaseVNode("div", _hoisted_19, [createVNode(unref(LockKeyhole), { class: "absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" }), createVNode(PasswordInput_default, {
								id: "password_confirmation",
								name: "password_confirmation",
								required: "",
								autocomplete: "new-password",
								placeholder: "••••••••",
								class: "h-11 pl-10",
								modelValue: passwordConfirmation.value,
								"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => passwordConfirmation.value = $event)
							}, null, 8, ["modelValue"])]),
							createVNode(InputError_default, { message: errors.password_confirmation || validationErrors.value.password_confirmation }, null, 8, ["message"]),
							passwordConfirmation.value && password.value ? (openBlock(), createElementBlock("div", _hoisted_20, [password.value === passwordConfirmation.value ? (openBlock(), createElementBlock("div", _hoisted_21, [createVNode(unref(Check), { class: "h-4 w-4" }), _cache[10] || (_cache[10] = createTextVNode(" As senhas coincidem ", -1))])) : (openBlock(), createElementBlock("div", _hoisted_22, [createVNode(unref(X), { class: "h-4 w-4" }), _cache[11] || (_cache[11] = createTextVNode(" As senhas não coincidem ", -1))]))])) : createCommentVNode("", true)
						]),
						createVNode(unref(Button_default), {
							type: "submit",
							class: "h-11 w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-300",
							disabled: processing || !isFormValid.value
						}, {
							default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : (openBlock(), createElementBlock("span", _hoisted_23, " Criar conta "))]),
							_: 2
						}, 1032, ["disabled"])
					]),
					_: 1
				}, 16),
				createBaseVNode("div", _hoisted_24, [_cache[13] || (_cache[13] = createTextVNode(" Já possui uma conta? ", -1)), createVNode(TextLink_default, {
					href: unref(login)(),
					class: "font-medium"
				}, {
					default: withCtx(() => [..._cache[12] || (_cache[12] = [createTextVNode(" Entrar ", -1)])]),
					_: 1
				}, 8, ["href"])])
			])])], 64);
		};
	}
});
//#endregion
export { Register_default as default };
