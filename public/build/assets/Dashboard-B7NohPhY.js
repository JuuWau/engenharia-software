import { I as openBlock, _ as createElementBlock, b as createVNode, ht as unref, m as createBaseVNode, u as Fragment, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { a as head_default, u as router } from "./wayfinder-DBTLeCO_.js";
import { t as createLucideIcon } from "./createLucideIcon-BEi0wWPe.js";
import { n as BellRing, t as FileWarning } from "./file-warning-B8-Pa1Me.js";
import { t as ShieldCheck } from "./shield-check-DRRcEC0L.js";
import { a as dashboard } from "./app-BF-ImWg4.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/arrow-right.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("ArrowRightIcon", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
//#endregion
//#region resources/js/pages/Dashboard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-1 flex-col gap-6 p-6" };
var _hoisted_2 = { class: "relative overflow-hidden rounded-3xl border bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-300 p-8 text-white shadow-2xl" };
var _hoisted_3 = { class: "relative z-10 max-w-3xl space-y-4" };
var _hoisted_4 = { class: "inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm backdrop-blur" };
var _hoisted_5 = { class: "flex flex-wrap gap-3 pt-2" };
var _hoisted_6 = { class: "grid gap-4 md:grid-cols-3" };
var _hoisted_7 = { class: "rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md" };
var _hoisted_8 = { class: "mb-4 flex size-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400" };
var _hoisted_9 = { class: "rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md" };
var _hoisted_10 = { class: "mb-4 flex size-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400" };
var _hoisted_11 = { class: "rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md" };
var _hoisted_12 = { class: "mb-4 flex size-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400" };
var _hoisted_13 = { class: "rounded-2xl border bg-background p-8 shadow-sm" };
var _hoisted_14 = { class: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between" };
var _hoisted_15 = { class: "flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg" };
//#endregion
//#region resources/js/pages/Dashboard.vue
var Dashboard_default = /* @__PURE__ */ defineComponent({
	layout: { breadcrumbs: [{
		title: "Bem-vindo",
		href: dashboard()
	}] },
	__name: "Dashboard",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Bem-vindo" }), createBaseVNode("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [_cache[5] || (_cache[5] = createBaseVNode("div", { class: "absolute inset-0 bg-black/10" }, null, -1)), createBaseVNode("div", _hoisted_3, [
					createBaseVNode("div", _hoisted_4, [createVNode(unref(ShieldCheck), { class: "size-4" }), _cache[1] || (_cache[1] = createTextVNode(" Plataforma de segurança corporativa ", -1))]),
					_cache[3] || (_cache[3] = createBaseVNode("h1", { class: "text-4xl font-bold tracking-tight md:text-5xl" }, " Bem-vindo ao Safe Voice ", -1)),
					_cache[4] || (_cache[4] = createBaseVNode("p", { class: "max-w-2xl text-lg text-white/90" }, " Centralize denúncias, ocorrências e registros de forma segura, rápida e organizada. ", -1)),
					createBaseVNode("div", _hoisted_5, [createBaseVNode("button", {
						onClick: _cache[0] || (_cache[0] = ($event) => unref(router).visit("/occurrences")),
						class: "inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-medium text-indigo-600 transition hover:bg-white/90 cursor-pointer"
					}, [_cache[2] || (_cache[2] = createTextVNode(" Nova ocorrência ", -1)), createVNode(unref(ArrowRight), { class: "size-4" })])])
				])]),
				createBaseVNode("div", _hoisted_6, [
					createBaseVNode("div", _hoisted_7, [
						createBaseVNode("div", _hoisted_8, [createVNode(unref(BellRing), { class: "size-6" })]),
						_cache[6] || (_cache[6] = createBaseVNode("h2", { class: "text-lg font-semibold" }, " Escreva como se sente ", -1)),
						_cache[7] || (_cache[7] = createBaseVNode("p", { class: "mt-2 text-sm text-muted-foreground" }, " Compartilhe suas preocupações de forma anônima e segura. ", -1))
					]),
					createBaseVNode("div", _hoisted_9, [
						createBaseVNode("div", _hoisted_10, [createVNode(unref(ShieldCheck), { class: "size-6" })]),
						_cache[8] || (_cache[8] = createBaseVNode("h2", { class: "text-lg font-semibold" }, " Segurança e privacidade ", -1)),
						_cache[9] || (_cache[9] = createBaseVNode("p", { class: "mt-2 text-sm text-muted-foreground" }, " Proteção de dados e gerenciamento seguro das informações registradas. ", -1))
					]),
					createBaseVNode("div", _hoisted_11, [
						createBaseVNode("div", _hoisted_12, [createVNode(unref(FileWarning), { class: "size-6" })]),
						_cache[10] || (_cache[10] = createBaseVNode("h2", { class: "text-lg font-semibold" }, " Gestão de ocorrências ", -1)),
						_cache[11] || (_cache[11] = createBaseVNode("p", { class: "mt-2 text-sm text-muted-foreground" }, " Organize registros, acompanhe status e mantenha histórico completo. ", -1))
					])
				]),
				createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [_cache[12] || (_cache[12] = createBaseVNode("div", { class: "space-y-2" }, [createBaseVNode("h2", { class: "text-2xl font-bold" }, " Esse espaço é seu! "), createBaseVNode("p", { class: "max-w-2xl text-muted-foreground" }, " Utilize o menu lateral para navegar entre ocorrências, denúncias, usuários e relatórios do sistema. ")], -1)), createBaseVNode("div", _hoisted_15, [createVNode(unref(ShieldCheck), { class: "size-12" })])])])
			])], 64);
		};
	}
});
//#endregion
export { Dashboard_default as default };
