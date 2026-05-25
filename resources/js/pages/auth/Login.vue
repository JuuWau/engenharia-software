<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import {
  LockKeyhole,
  Mail,
  ShieldCheck,
} from 'lucide-vue-next';

import InputError from '@/components/InputError.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import TextLink from '@/components/TextLink.vue';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

defineOptions({});

defineProps<{
  status?: string;
  canResetPassword: boolean;
  canRegister: boolean;
}>();
</script>

<template>
  <Head title="Login" />

  <div
    class="flex min-h-screen items-center justify-center px-4"
  >
    <div
      class="w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg"
    >
      <div class="mb-8 text-center">
        <div
          class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white"
        >
          <ShieldCheck class="h-8 w-8" />
        </div>

        <h1
          class="text-3xl font-bold text-gray-900"
        >
          Safe Voice
        </h1>

        <p
          class="mt-2 text-sm text-gray-500"
        >
          Faça login para acessar o sistema
        </p>
      </div>

      <div
        v-if="status"
        class="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
      >
        {{ status }}
      </div>

      <Form
        v-bind="store.form()"
        :reset-on-success="[
          'password',
        ]"
        v-slot="{
          errors,
          processing,
        }"
        class="space-y-5"
      >
        <div class="space-y-2">
          <Label for="email">
            Email
          </Label>

          <div class="relative">
            <Mail
              class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
            />

            <Input
              id="email"
              type="email"
              name="email"
              required
              autofocus
              autocomplete="email"
              placeholder="voce@email.com"
              class="h-11 pl-10"
            />
          </div>

          <InputError
            :message="errors.email"
          />
        </div>

        <div class="space-y-2">
          <div
            class="flex items-center justify-between"
          >
            <Label for="password">
              Senha
            </Label>

            <TextLink
              v-if="
                canResetPassword
              "
              :href="request()"
              class="text-sm"
            >
              Esqueceu a senha?
            </TextLink>
          </div>

          <div class="relative">
            <LockKeyhole
              class="absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-gray-400"
            />

            <PasswordInput
              id="password"
              name="password"
              required
              autocomplete="current-password"
              placeholder="••••••••"
              class="h-11 pl-10"
            />
          </div>

          <InputError
            :message="
              errors.password
            "
          />
        </div>

        <Label
          for="remember"
          class="flex items-center gap-3 text-sm font-normal"
        >
          <Checkbox
            id="remember"
            name="remember"
          />

          <span>
            Lembrar-me
          </span>
        </Label>

        <Button
          type="submit"
          class="h-11 w-full bg-indigo-600 hover:bg-indigo-500"
          :disabled="processing"
        >
          <Spinner
            v-if="processing"
          />

          <span v-else>
            Entrar
          </span>
        </Button>
      </Form>

      <div
        v-if="canRegister"
        class="mt-6 text-center text-sm text-gray-500"
      >
        Não possui conta?

        <TextLink
          :href="register()"
          class="font-medium"
        >
          Criar conta
        </TextLink>
      </div>
    </div>
  </div>
</template>