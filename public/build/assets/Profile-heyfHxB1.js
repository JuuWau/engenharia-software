import { A as mergeProps, G as useTemplateRef, I as openBlock, N as onMounted, Y as withCtx, _ as createElementBlock, b as createVNode, g as createCommentVNode, h as createBlock, ht as unref, m as createBaseVNode, p as computed, u as Fragment, x as defineComponent, y as createTextVNode, z as renderSlot } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { a as head_default, i as form_default, l as usePage, n as queryParams, o as link_default } from "./wayfinder-DBTLeCO_.js";
import { n as useId } from "./Presence-DwpF0WMp.js";
import { t as useForwardExpose } from "./useForwardExpose-BsmZrlm3.js";
import { t as Primitive } from "./Primitive-CLj4gEE3.js";
import { t as Label_default } from "./Label-Dugk_doq.js";
import { t as PasswordInput_default } from "./PasswordInput-DhDh15Vt.js";
import { t as Input_default } from "./Input-CyYI105W.js";
import { B as injectDialogRootContext, R as DialogClose_default$1, i as Heading_default, m as Button_default, n as edit$1 } from "./app-BF-ImWg4.js";
import { t as InputError_default } from "./InputError-D7zEBEwO.js";
import { t as send } from "./verification-CjI-kR2K.js";
import { a as Dialog_default, i as DialogContent_default, n as DialogHeader_default, r as DialogDescription_default, t as DialogTitle_default } from "./DialogTitle-e0kQ4xKh.js";
import { t as DialogFooter_default } from "./DialogFooter-Cl4LZ1vk.js";
//#region node_modules/reka-ui/dist/Dialog/DialogTrigger.js
var DialogTrigger_default$1 = /* @__PURE__ */ defineComponent({
	__name: "DialogTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectDialogRootContext();
		const { forwardRef, currentElement } = useForwardExpose();
		rootContext.contentId ||= useId(void 0, "reka-dialog-content");
		onMounted(() => {
			rootContext.triggerElement.value = currentElement.value;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				ref: unref(forwardRef),
				type: _ctx.as === "button" ? "button" : void 0,
				"aria-haspopup": "dialog",
				"aria-expanded": unref(rootContext).open.value || false,
				"aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
				"data-state": unref(rootContext).open.value ? "open" : "closed",
				onClick: unref(rootContext).onOpenToggle
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"type",
				"aria-expanded",
				"aria-controls",
				"data-state",
				"onClick"
			]);
		};
	}
});
//#endregion
//#region resources/js/actions/App/Http/Controllers/Settings/ProfileController.ts
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
var edit = (options) => ({
	url: edit.url(options),
	method: "get"
});
edit.definition = {
	methods: ["get", "head"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
edit.url = (options) => {
	return edit.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
edit.get = (options) => ({
	url: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
edit.head = (options) => ({
	url: edit.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
var editForm = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
editForm.get = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:20
* @route '/settings/profile'
*/
editForm.head = (options) => ({
	action: edit.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit.form = editForm;
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
var update = (options) => ({
	url: update.url(options),
	method: "patch"
});
update.definition = {
	methods: ["patch"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
update.url = (options) => {
	return update.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
update.patch = (options) => ({
	url: update.url(options),
	method: "patch"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
var updateForm = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:31
* @route '/settings/profile'
*/
updateForm.patch = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
update.form = updateForm;
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
var destroy = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
destroy.definition = {
	methods: ["delete"],
	url: "/settings/profile"
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
destroy.url = (options) => {
	return destroy.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
destroy.delete = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
var destroyForm = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:49
* @route '/settings/profile'
*/
destroyForm.delete = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy.form = destroyForm;
var ProfileController = {
	edit,
	update,
	destroy
};
//#endregion
//#region resources/js/components/ui/dialog/DialogClose.vue
var DialogClose_default = /* @__PURE__ */ defineComponent({
	__name: "DialogClose",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogClose_default$1), mergeProps({ "data-slot": "dialog-close" }, props), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region resources/js/components/ui/dialog/DialogTrigger.vue
var DialogTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "DialogTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DialogTrigger_default$1), mergeProps({ "data-slot": "dialog-trigger" }, props), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region resources/js/components/DeleteUser.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "space-y-6" };
var _hoisted_2$1 = { class: "space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10" };
var _hoisted_3$1 = { class: "grid gap-2" };
//#endregion
//#region resources/js/components/DeleteUser.vue
var DeleteUser_default = /* @__PURE__ */ defineComponent({
	__name: "DeleteUser",
	setup(__props) {
		const passwordInput = useTemplateRef("passwordInput");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(Heading_default, {
				variant: "small",
				title: "Delete account",
				description: "Delete your account and all of its resources"
			}), createBaseVNode("div", _hoisted_2$1, [_cache[7] || (_cache[7] = createBaseVNode("div", { class: "relative space-y-0.5 text-red-600 dark:text-red-100" }, [createBaseVNode("p", { class: "font-medium" }, "Warning"), createBaseVNode("p", { class: "text-sm" }, " Please proceed with caution, this cannot be undone. ")], -1)), createVNode(unref(Dialog_default), null, {
				default: withCtx(() => [createVNode(unref(DialogTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(unref(Button_default), {
						variant: "destructive",
						"data-test": "delete-user-button"
					}, {
						default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("Delete account", -1)])]),
						_: 1
					})]),
					_: 1
				}), createVNode(unref(DialogContent_default), null, {
					default: withCtx(() => [createVNode(unref(form_default), mergeProps(unref(ProfileController).destroy.form(), {
						"reset-on-success": "",
						onError: _cache[0] || (_cache[0] = () => passwordInput.value?.focus()),
						options: { preserveScroll: true },
						class: "space-y-6"
					}), {
						default: withCtx(({ errors, processing, reset, clearErrors }) => [
							createVNode(unref(DialogHeader_default), { class: "space-y-3" }, {
								default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
									default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("Are you sure you want to delete your account?", -1)])]),
									_: 1
								}), createVNode(unref(DialogDescription_default), null, {
									default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ", -1)])]),
									_: 1
								})]),
								_: 1
							}),
							createBaseVNode("div", _hoisted_3$1, [
								createVNode(unref(Label_default), {
									for: "password",
									class: "sr-only"
								}, {
									default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Password", -1)])]),
									_: 1
								}),
								createVNode(PasswordInput_default, {
									id: "password",
									name: "password",
									ref_key: "passwordInput",
									ref: passwordInput,
									placeholder: "Password"
								}, null, 512),
								createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
							]),
							createVNode(unref(DialogFooter_default), { class: "gap-2" }, {
								default: withCtx(() => [createVNode(unref(DialogClose_default), { "as-child": "" }, {
									default: withCtx(() => [createVNode(unref(Button_default), {
										variant: "secondary",
										onClick: () => {
											clearErrors();
											reset();
										}
									}, {
										default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode(" Cancel ", -1)])]),
										_: 1
									}, 8, ["onClick"])]),
									_: 2
								}, 1024), createVNode(unref(Button_default), {
									type: "submit",
									variant: "destructive",
									disabled: processing,
									"data-test": "confirm-delete-user-button"
								}, {
									default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode(" Delete account ", -1)])]),
									_: 1
								}, 8, ["disabled"])]),
								_: 2
							}, 1024)
						]),
						_: 1
					}, 16)]),
					_: 1
				})]),
				_: 1
			})])]);
		};
	}
});
//#endregion
//#region resources/js/pages/settings/Profile.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col space-y-6" };
var _hoisted_2 = { class: "grid gap-2" };
var _hoisted_3 = { class: "grid gap-2" };
var _hoisted_4 = { key: 0 };
var _hoisted_5 = { class: "-mt-4 text-sm text-muted-foreground" };
var _hoisted_6 = {
	key: 0,
	class: "mt-2 text-sm font-medium text-green-600"
};
var _hoisted_7 = { class: "flex items-center gap-4" };
//#endregion
//#region resources/js/pages/settings/Profile.vue
var Profile_default = /* @__PURE__ */ defineComponent({
	layout: { breadcrumbs: [{
		title: "Profile settings",
		href: edit$1()
	}] },
	__name: "Profile",
	props: {
		mustVerifyEmail: { type: Boolean },
		status: {}
	},
	setup(__props) {
		const page = usePage();
		const user = computed(() => page.props.auth.user);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(unref(head_default), { title: "Profile settings" }),
				_cache[5] || (_cache[5] = createBaseVNode("h1", { class: "sr-only" }, "Profile settings", -1)),
				createBaseVNode("div", _hoisted_1, [createVNode(Heading_default, {
					variant: "small",
					title: "Profile information",
					description: "Update your name and email address"
				}), createVNode(unref(form_default), mergeProps(unref(ProfileController).update.form(), { class: "space-y-6" }), {
					default: withCtx(({ errors, processing }) => [
						createBaseVNode("div", _hoisted_2, [
							createVNode(unref(Label_default), { for: "name" }, {
								default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Name", -1)])]),
								_: 1
							}),
							createVNode(unref(Input_default), {
								id: "name",
								class: "mt-1 block w-full",
								name: "name",
								"default-value": user.value.name,
								required: "",
								autocomplete: "name",
								placeholder: "Full name"
							}, null, 8, ["default-value"]),
							createVNode(InputError_default, {
								class: "mt-2",
								message: errors.name
							}, null, 8, ["message"])
						]),
						createBaseVNode("div", _hoisted_3, [
							createVNode(unref(Label_default), { for: "email" }, {
								default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("Email address", -1)])]),
								_: 1
							}),
							createVNode(unref(Input_default), {
								id: "email",
								type: "email",
								class: "mt-1 block w-full",
								name: "email",
								"default-value": user.value.email,
								required: "",
								autocomplete: "username",
								placeholder: "Email address"
							}, null, 8, ["default-value"]),
							createVNode(InputError_default, {
								class: "mt-2",
								message: errors.email
							}, null, 8, ["message"])
						]),
						__props.mustVerifyEmail && !user.value.email_verified_at ? (openBlock(), createElementBlock("div", _hoisted_4, [createBaseVNode("p", _hoisted_5, [_cache[3] || (_cache[3] = createTextVNode(" Your email address is unverified. ", -1)), createVNode(unref(link_default), {
							href: unref(send)(),
							as: "button",
							class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
						}, {
							default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" Click here to resend the verification email. ", -1)])]),
							_: 1
						}, 8, ["href"])]), __props.status === "verification-link-sent" ? (openBlock(), createElementBlock("div", _hoisted_6, " A new verification link has been sent to your email address. ")) : createCommentVNode("", true)])) : createCommentVNode("", true),
						createBaseVNode("div", _hoisted_7, [createVNode(unref(Button_default), {
							disabled: processing,
							"data-test": "update-profile-button"
						}, {
							default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Save", -1)])]),
							_: 1
						}, 8, ["disabled"])])
					]),
					_: 1
				}, 16)]),
				createVNode(DeleteUser_default)
			], 64);
		};
	}
});
//#endregion
export { Profile_default as default };
