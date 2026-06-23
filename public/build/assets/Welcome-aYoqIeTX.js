import { I as openBlock, _ as createElementBlock, b as createVNode, ht as unref, m as createBaseVNode, v as createStaticVNode, x as defineComponent, y as createTextVNode } from "./vue.runtime.esm-bundler-B_pudHEa.js";
import { n as BellRing, t as FileWarning } from "./file-warning-B8-Pa1Me.js";
import { t as ShieldCheck } from "./shield-check-DRRcEC0L.js";
//#region resources/js/pages/Welcome.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "min-h-screen bg-slate-50 text-slate-900" };
var _hoisted_2 = { class: "bg-white border-b border-slate-200" };
var _hoisted_3 = { class: "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center" };
var _hoisted_4 = { class: "flex items-center gap-3" };
var _hoisted_5 = { class: "w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold" };
var _hoisted_6 = { class: "max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center" };
var _hoisted_7 = { class: "bg-white border border-slate-200 rounded-3xl p-8 shadow-sm max-h-[600px] overflow-y-auto" };
var _hoisted_8 = { class: "space-y-4" };
var _hoisted_9 = { class: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-300 p-6 text-white shadow-lg" };
var _hoisted_10 = { class: "relative z-10 space-y-3" };
var _hoisted_11 = { class: "inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur" };
var _hoisted_12 = { class: "grid grid-cols-3 gap-3" };
var _hoisted_13 = { class: "rounded-xl border bg-background p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md" };
var _hoisted_14 = { class: "mb-2 flex size-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400" };
var _hoisted_15 = { class: "rounded-xl border bg-background p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md" };
var _hoisted_16 = { class: "mb-2 flex size-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400" };
var _hoisted_17 = { class: "rounded-xl border bg-background p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md" };
var _hoisted_18 = { class: "mb-2 flex size-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400" };
var _hoisted_19 = { class: "rounded-xl border bg-background p-4 shadow-sm" };
var _hoisted_20 = { class: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between" };
var _hoisted_21 = { class: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg" };
//#endregion
//#region resources/js/pages/Welcome.vue
var Welcome_default = /* @__PURE__ */ defineComponent({
	__name: "Welcome",
	props: { canRegister: {
		type: Boolean,
		default: true
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("header", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createVNode(unref(ShieldCheck), { class: "h-6 w-6" })]), _cache[0] || (_cache[0] = createBaseVNode("div", null, [createBaseVNode("h1", { class: "font-bold" }, "Safe Voice"), createBaseVNode("p", { class: "text-xs text-slate-500" }, "Ambiente seguro e confidencial")], -1))]), _cache[1] || (_cache[1] = createBaseVNode("a", {
					href: "/login",
					class: "px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
				}, " Entrar ", -1))])]),
				createBaseVNode("section", _hoisted_6, [_cache[14] || (_cache[14] = createStaticVNode("<div><span class=\"inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm mb-6\"> Apoio e proteção </span><h2 class=\"text-4xl lg:text-5xl font-bold leading-tight mb-6\"> Um espaço seguro para registrar e acompanhar informações importantes </h2><p class=\"text-slate-600 text-lg mb-8\"> O Safe Voice foi desenvolvido para apoiar mulheres em situação de violência doméstica, oferecendo um ambiente seguro, organizado e confidencial para registros e acompanhamento. </p><div class=\"flex gap-4\"><a href=\"/login\" class=\"px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition\"> Acessar sistema </a><button class=\"px-6 py-3 border border-slate-300 rounded-xl hover:bg-slate-100 transition\"> Saiba mais </button></div></div>", 1)), createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [
					createBaseVNode("div", _hoisted_9, [_cache[5] || (_cache[5] = createBaseVNode("div", { class: "absolute inset-0 bg-black/10" }, null, -1)), createBaseVNode("div", _hoisted_10, [
						createBaseVNode("div", _hoisted_11, [createVNode(unref(ShieldCheck), { class: "size-3" }), _cache[2] || (_cache[2] = createTextVNode(" Plataforma de segurança ", -1))]),
						_cache[3] || (_cache[3] = createBaseVNode("h3", { class: "text-xl font-bold tracking-tight" }, " Bem-vindo ao Safe Voice ", -1)),
						_cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-sm text-white/90" }, " Centralize denúncias, ocorrências e registros de forma segura, rápida e organizada. ", -1))
					])]),
					createBaseVNode("div", _hoisted_12, [
						createBaseVNode("div", _hoisted_13, [
							createBaseVNode("div", _hoisted_14, [createVNode(unref(BellRing), { class: "size-4" })]),
							_cache[6] || (_cache[6] = createBaseVNode("h4", { class: "text-xs font-semibold" }, " Escreva como se sente ", -1)),
							_cache[7] || (_cache[7] = createBaseVNode("p", { class: "mt-1 text-xs text-muted-foreground" }, " Compartilhe suas preocupações de forma anônima e segura. ", -1))
						]),
						createBaseVNode("div", _hoisted_15, [
							createBaseVNode("div", _hoisted_16, [createVNode(unref(ShieldCheck), { class: "size-4" })]),
							_cache[8] || (_cache[8] = createBaseVNode("h4", { class: "text-xs font-semibold" }, " Segurança e privacidade ", -1)),
							_cache[9] || (_cache[9] = createBaseVNode("p", { class: "mt-1 text-xs text-muted-foreground" }, " Proteção de dados e gerenciamento seguro. ", -1))
						]),
						createBaseVNode("div", _hoisted_17, [
							createBaseVNode("div", _hoisted_18, [createVNode(unref(FileWarning), { class: "size-4" })]),
							_cache[10] || (_cache[10] = createBaseVNode("h4", { class: "text-xs font-semibold" }, " Gestão de ocorrências ", -1)),
							_cache[11] || (_cache[11] = createBaseVNode("p", { class: "mt-1 text-xs text-muted-foreground" }, " Organize registros e mantenha histórico completo. ", -1))
						])
					]),
					createBaseVNode("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, [_cache[12] || (_cache[12] = createBaseVNode("div", { class: "space-y-1" }, [createBaseVNode("h4", { class: "text-sm font-bold" }, " Esse espaço é seu! "), createBaseVNode("p", { class: "text-xs text-muted-foreground" }, " Utilize o menu lateral para navegar entre ocorrências, denúncias, usuários e relatórios. ")], -1)), createBaseVNode("div", _hoisted_21, [createVNode(unref(ShieldCheck), { class: "size-7" })])])])
				]), _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-xs text-slate-500 mt-6 text-center" }, " Dados protegidos com acesso restrito e confidencialidade. ", -1))])]),
				_cache[15] || (_cache[15] = createStaticVNode("<section class=\"max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6\"><div class=\"bg-white border border-slate-200 rounded-2xl p-6\"><h3 class=\"font-semibold mb-2\">🔒 Segurança</h3><p class=\"text-slate-600 text-sm\"> Controle de acesso e proteção das informações sensíveis. </p></div><div class=\"bg-white border border-slate-200 rounded-2xl p-6\"><h3 class=\"font-semibold mb-2\">📝 Registro seguro</h3><p class=\"text-slate-600 text-sm\"> Organização de relatos, evidências e histórico. </p></div><div class=\"bg-white border border-slate-200 rounded-2xl p-6\"><h3 class=\"font-semibold mb-2\">🤝 Apoio</h3><p class=\"text-slate-600 text-sm\"> Compartilhamento controlado com profissionais autorizados. </p></div></section><footer class=\"border-t border-slate-200 bg-white\"><div class=\"max-w-7xl mx-auto px-6 py-6 text-sm text-slate-500\"><p>Safe Voice © 2026</p><p class=\"mt-1\"> Em caso de emergência: 190 | Central da Mulher: 180 </p></div></footer>", 2))
			]);
		};
	}
});
//#endregion
export { Welcome_default as default };
