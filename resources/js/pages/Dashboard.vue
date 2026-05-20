<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import { ShieldCheck, BellRing, FileWarning, ArrowRight } from "lucide-vue-next";

import { dashboard } from "@/routes";

defineOptions({
  layout: {
    breadcrumbs: [
      {
        title: "Bem-vindo",
        href: dashboard(),
      },
    ],
  },
});
</script>

<template>
  <Head title="Bem-vindo" />

  <div class="flex flex-1 flex-col gap-6 p-6">
    <div
      class="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-300 p-8 text-white shadow-2xl"
    >
      <div class="absolute inset-0 bg-black/10" />

      <div class="relative z-10 max-w-3xl space-y-4">
        <div
          class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm backdrop-blur"
        >
          <ShieldCheck class="size-4" />
          Plataforma de segurança corporativa
        </div>

        <h1 class="text-4xl font-bold tracking-tight md:text-5xl">
          Bem-vindo ao Safe Voice
        </h1>

        <p class="max-w-2xl text-lg text-white/90">
          Centralize denúncias, ocorrências e registros de forma segura,
          rápida e organizada.
        </p>

        <div class="flex flex-wrap gap-3 pt-2">
          <button
            class="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-medium text-indigo-600 transition hover:bg-white/90"
          >
            Nova ocorrência
            <ArrowRight class="size-4" />
          </button>

          <button
            class="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 font-medium backdrop-blur transition hover:bg-white/20"
          >
            Ver relatórios
          </button>
        </div>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div
        class="rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <div
          class="mb-4 flex size-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
        >
          <BellRing class="size-6" />
        </div>

        <h2 class="text-lg font-semibold">
          Escreva como se sente
        </h2>

        <p class="mt-2 text-sm text-muted-foreground">
          Compartilhe suas preocupações de forma anônima e segura.
        </p>
      </div>

      <div
        class="rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <div
          class="mb-4 flex size-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400"
        >
          <ShieldCheck class="size-6" />
        </div>

        <h2 class="text-lg font-semibold">
          Segurança e privacidade
        </h2>

        <p class="mt-2 text-sm text-muted-foreground">
          Proteção de dados e gerenciamento seguro das informações registradas.
        </p>
      </div>

      <div
        class="rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <div
          class="mb-4 flex size-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400"
        >
          <FileWarning class="size-6" />
        </div>

        <h2 class="text-lg font-semibold">
          Gestão de ocorrências
        </h2>

        <p class="mt-2 text-sm text-muted-foreground">
          Organize registros, acompanhe status e mantenha histórico completo.
        </p>
      </div>
    </div>

    <div
      class="rounded-2xl border bg-background p-8 shadow-sm"
    >
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="space-y-2">
          <h2 class="text-2xl font-bold">
            Esse espaço é seu!
          </h2>

          <p class="max-w-2xl text-muted-foreground">
            Utilize o menu lateral para navegar entre ocorrências,
            denúncias, usuários e relatórios do sistema.
          </p>
        </div>

        <div
          class="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg"
        >
          <ShieldCheck class="size-12" />
        </div>
      </div>
    </div>
  </div>
</template>