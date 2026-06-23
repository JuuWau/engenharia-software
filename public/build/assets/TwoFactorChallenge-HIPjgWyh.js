import { A as mergeProps, I as openBlock, R as renderList, Y as withCtx, _ as createElementBlock, b as createVNode, bt as toDisplayString, h as createBlock, ht as unref, m as createBaseVNode, p as computed, q as watchEffect, st as ref, u as Fragment, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { a as head_default, i as form_default, s as setLayoutProps } from "./wayfinder-DBTLeCO_.js";
import { t as Input_default } from "./Input-CyYI105W.js";
import { m as Button_default } from "./app-BF-ImWg4.js";
import { t as InputError_default } from "./InputError-D7zEBEwO.js";
import { a as InputOTP_default, i as InputOTPGroup_default, n as store, r as InputOTPSlot_default } from "./login-DT1XyydG.js";
//#region resources/js/pages/auth/TwoFactorChallenge.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "space-y-6" };
var _hoisted_2 = ["value"];
var _hoisted_3 = { class: "flex flex-col items-center justify-center space-y-3 text-center" };
var _hoisted_4 = { class: "flex w-full items-center justify-center" };
var _hoisted_5 = { class: "text-center text-sm text-muted-foreground" };
var _hoisted_6 = ["onClick"];
var _hoisted_7 = { class: "text-center text-sm text-muted-foreground" };
var _hoisted_8 = ["onClick"];
//#endregion
//#region resources/js/pages/auth/TwoFactorChallenge.vue
var TwoFactorChallenge_default = /* @__PURE__ */ defineComponent({
	__name: "TwoFactorChallenge",
	setup(__props) {
		const authConfigContent = computed(() => {
			if (showRecoveryInput.value) return {
				title: "Recovery code",
				description: "Please confirm access to your account by entering one of your emergency recovery codes.",
				buttonText: "login using an authentication code"
			};
			return {
				title: "Authentication code",
				description: "Enter the authentication code provided by your authenticator application.",
				buttonText: "login using a recovery code"
			};
		});
		watchEffect(() => {
			setLayoutProps({
				title: authConfigContent.value.title,
				description: authConfigContent.value.description
			});
		});
		const showRecoveryInput = ref(false);
		const toggleRecoveryMode = (clearErrors) => {
			showRecoveryInput.value = !showRecoveryInput.value;
			clearErrors();
			code.value = "";
		};
		const code = ref("");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Two-factor authentication" }), createBaseVNode("div", _hoisted_1, [!showRecoveryInput.value ? (openBlock(), createBlock(unref(form_default), mergeProps({ key: 0 }, unref(store).form(), {
				class: "space-y-4",
				"reset-on-error": "",
				onError: _cache[1] || (_cache[1] = ($event) => code.value = "")
			}), {
				default: withCtx(({ errors, processing, clearErrors }) => [
					createBaseVNode("input", {
						type: "hidden",
						name: "code",
						value: code.value
					}, null, 8, _hoisted_2),
					createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createVNode(unref(InputOTP_default), {
						id: "otp",
						modelValue: code.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => code.value = $event),
						maxlength: 6,
						disabled: processing,
						autofocus: ""
					}, {
						default: withCtx(() => [createVNode(unref(InputOTPGroup_default), null, {
							default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(6, (index) => {
								return createVNode(unref(InputOTPSlot_default), {
									key: index,
									index: index - 1
								}, null, 8, ["index"]);
							}), 64))]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue", "disabled"])]), createVNode(InputError_default, { message: errors.code }, null, 8, ["message"])]),
					createVNode(unref(Button_default), {
						type: "submit",
						class: "w-full",
						disabled: processing
					}, {
						default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("Continue", -1)])]),
						_: 1
					}, 8, ["disabled"]),
					createBaseVNode("div", _hoisted_5, [_cache[3] || (_cache[3] = createBaseVNode("span", null, "or you can ", -1)), createBaseVNode("button", {
						type: "button",
						class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
						onClick: () => toggleRecoveryMode(clearErrors)
					}, toDisplayString(authConfigContent.value.buttonText), 9, _hoisted_6)])
				]),
				_: 1
			}, 16)) : (openBlock(), createBlock(unref(form_default), mergeProps({ key: 1 }, unref(store).form(), {
				class: "space-y-4",
				"reset-on-error": ""
			}), {
				default: withCtx(({ errors, processing, clearErrors }) => [
					createVNode(unref(Input_default), {
						name: "recovery_code",
						type: "text",
						placeholder: "Enter recovery code",
						autofocus: showRecoveryInput.value,
						required: ""
					}, null, 8, ["autofocus"]),
					createVNode(InputError_default, { message: errors.recovery_code }, null, 8, ["message"]),
					createVNode(unref(Button_default), {
						type: "submit",
						class: "w-full",
						disabled: processing
					}, {
						default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Continue", -1)])]),
						_: 1
					}, 8, ["disabled"]),
					createBaseVNode("div", _hoisted_7, [_cache[5] || (_cache[5] = createBaseVNode("span", null, "or you can ", -1)), createBaseVNode("button", {
						type: "button",
						class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
						onClick: () => toggleRecoveryMode(clearErrors)
					}, toDisplayString(authConfigContent.value.buttonText), 9, _hoisted_8)])
				]),
				_: 1
			}, 16))])], 64);
		};
	}
});
//#endregion
export { TwoFactorChallenge_default as default };
