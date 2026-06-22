<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';

import { Mail } from 'lucide-vue-next';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

import { logout } from '@/routes';
import { send } from '@/routes/verification';

defineOptions({
  layout: {
    title: 'Verificação de email',
    description: 'Confirme seu email para continuar no sistema',
  },
});

defineProps<{
  status?: string;
}>();
</script>

<template>
  <Head title="Verificação de email" />

  <div class="flex min-h-screen items-center justify-center px-4">
    <div class="w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg">

      <div class="mb-8 text-center">
        <div
          class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white"
        >
          <Mail class="h-8 w-8" />
        </div>

        <h1 class="text-2xl font-bold text-gray-900">
          Verifique seu email
        </h1>

        <p class="mt-2 text-sm text-gray-500">
          Enviamos um link de verificação para seu email
        </p>
      </div>

      <div
        v-if="status === 'verification-link-sent'"
        class="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
      >
        Um novo link de verificação foi enviado para seu email.
      </div>

      <Form
        v-bind="send.form()"
        class="space-y-5"
        v-slot="{ processing }"
      >
        <Button
          class="h-11 w-full bg-indigo-600 hover:bg-indigo-500"
          :disabled="processing"
        >
          <Spinner v-if="processing" />
          <span v-else>Reenviar email de verificação</span>
        </Button>
      </Form>

      <div class="mt-6 text-center text-sm text-gray-500">
        Quer usar outro email?

        <TextLink
          :href="logout()"
          class="font-medium text-indigo-600"
        >
          Sair
        </TextLink>
      </div>

    </div>
  </div>
</template>