<script setup lang="ts">
import { BellRing, FileWarning, ShieldCheck } from 'lucide-vue-next';

withDefaults(
    defineProps<{
        canRegister: boolean;
    }>(),
    {
        canRegister: true,
    },
);
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">

    <header class="bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
            <ShieldCheck class="h-6 w-6" />
          </div>

          <div>
            <h1 class="font-bold">Safe Voice</h1>
            <p class="text-xs text-slate-500">Ambiente seguro e confidencial</p>
          </div>
        </div>

        <a
          href="/login"
          class="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
        >
          Entrar
        </a>
      </div>
    </header>

    <section class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

      <div>
        <span class="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm mb-6">
          Apoio e proteção
        </span>

        <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Um espaço seguro para registrar e acompanhar informações importantes
        </h2>

        <p class="text-slate-600 text-lg mb-8">
          O Safe Voice foi desenvolvido para apoiar mulheres em situação de violência doméstica,
          oferecendo um ambiente seguro, organizado e confidencial para registros e acompanhamento.
        </p>

        <div class="flex gap-4">
          <a
            href="/login"
            class="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            Acessar sistema
          </a>

          <button
            class="px-6 py-3 border border-slate-300 rounded-xl hover:bg-slate-100 transition"
          >
            Saiba mais
          </button>
        </div>
      </div>

      <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm max-h-[600px] overflow-y-auto">

        <div class="space-y-4">
          <div
            class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-300 p-6 text-white shadow-lg"
          >
            <div class="absolute inset-0 bg-black/10" />

            <div class="relative z-10 space-y-3">
              <div
                class="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur"
              >
                <ShieldCheck class="size-3" />
                Plataforma de segurança
              </div>

              <h3 class="text-xl font-bold tracking-tight">
                Bem-vindo ao Safe Voice
              </h3>

              <p class="text-sm text-white/90">
                Centralize denúncias, ocorrências e registros de forma segura, rápida e organizada.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <div
              class="rounded-xl border bg-background p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                class="mb-2 flex size-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
              >
                <BellRing class="size-4" />
              </div>

              <h4 class="text-xs font-semibold">
                Escreva como se sente
              </h4>

              <p class="mt-1 text-xs text-muted-foreground">
                Compartilhe suas preocupações de forma anônima e segura.
              </p>
            </div>

            <div
              class="rounded-xl border bg-background p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                class="mb-2 flex size-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400"
              >
                <ShieldCheck class="size-4" />
              </div>

              <h4 class="text-xs font-semibold">
                Segurança e privacidade
              </h4>

              <p class="mt-1 text-xs text-muted-foreground">
                Proteção de dados e gerenciamento seguro.
              </p>
            </div>

            <div
              class="rounded-xl border bg-background p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                class="mb-2 flex size-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400"
              >
                <FileWarning class="size-4" />
              </div>

              <h4 class="text-xs font-semibold">
                Gestão de ocorrências
              </h4>

              <p class="mt-1 text-xs text-muted-foreground">
                Organize registros e mantenha histórico completo.
              </p>
            </div>
          </div>

          <div
            class="rounded-xl border bg-background p-4 shadow-sm"
          >
            <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div class="space-y-1">
                <h4 class="text-sm font-bold">
                  Esse espaço é seu!
                </h4>

                <p class="text-xs text-muted-foreground">
                  Utilize o menu lateral para navegar entre ocorrências, denúncias, usuários e relatórios.
                </p>
              </div>

              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg"
              >
                <ShieldCheck class="size-7" />
              </div>
            </div>
          </div>
        </div>

        <p class="text-xs text-slate-500 mt-6 text-center">
          Dados protegidos com acesso restrito e confidencialidade.
        </p>
      </div>

    </section>

    <section class="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">

      <div class="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 class="font-semibold mb-2">🔒 Segurança</h3>
        <p class="text-slate-600 text-sm">
          Controle de acesso e proteção das informações sensíveis.
        </p>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 class="font-semibold mb-2">📝 Registro seguro</h3>
        <p class="text-slate-600 text-sm">
          Organização de relatos, evidências e histórico.
        </p>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 class="font-semibold mb-2">🤝 Apoio</h3>
        <p class="text-slate-600 text-sm">
          Compartilhamento controlado com profissionais autorizados.
        </p>
      </div>

    </section>

    <footer class="border-t border-slate-200 bg-white">
      <div class="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-500">
        <p>Safe Voice © 2026</p>
        <p class="mt-1">
          Em caso de emergência: 190 | Central da Mulher: 180
        </p>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
</script>
