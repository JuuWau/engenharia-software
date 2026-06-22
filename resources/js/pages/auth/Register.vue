<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import {
  User,
  Mail,
  LockKeyhole,
  ShieldCheck,
  Check,
  X,
} from 'lucide-vue-next';
import { ref, computed } from 'vue';
import { z } from 'zod';
import InputError from '@/components/InputError.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

const passwordSchema = z.string()
  .min(12, 'A senha deve ter pelo menos 12 caracteres')
  .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
  .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
  .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
  .regex(/[!@#$%^&*(),.?":{}|<>]/, 'A senha deve conter pelo menos um caractere especial')
  .regex(/^\S+$/, 'A senha não pode conter espaços em branco');

const registerSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  password: passwordSchema,
  password_confirmation: z.string(),
}).refine((data) => data.password === data.password_confirmation, {
  message: 'As senhas não coincidem',
  path: ['password_confirmation'],
});

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');

const validationErrors = computed(() => {
  try {
    registerSchema.parse({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    });
    return {};
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {}

      if (error.errors && Array.isArray(error.errors)) {
        error.errors.forEach((err) => {
          if (err.path && err.path[0]) {
            errors[err.path[0] as string] = err.message;
          }
        });
      }
      return errors;
    }
    return {};
  }
});

const validations = computed(() => {
    const pwd = password.value || '';
    
    return {
        minLength: pwd.length >= 12,
        hasUpperCase: /[A-Z]/.test(pwd),
        hasLowerCase: /[a-z]/.test(pwd),
        hasNumber: /[0-9]/.test(pwd),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
        hasNoSpaces: !/\s/.test(pwd),
    };
});

const allValidationsPassed = computed(() => {
    const v = validations.value;
    return v.minLength && v.hasUpperCase && v.hasLowerCase && 
           v.hasNumber && v.hasSpecialChar && v.hasNoSpaces;
});

const getValidationIcon = (isValid: boolean) => {
    return isValid ? Check : X;
};

const getValidationColor = (isValid: boolean) => {
    return isValid ? 'text-green-500' : 'text-gray-400';
};

const isFormValid = computed(() => {
  return name.value && 
         email.value && 
         allValidationsPassed.value && 
         password.value === passwordConfirmation.value;
});
</script>

<template>
  <Head title="Cadastro" />

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
          Crie sua conta para acessar o sistema
        </p>
      </div>

      <Form
        v-bind="store.form()"
        :reset-on-success="[
          'password',
          'password_confirmation',
        ]"
        v-slot="{
          errors,
          processing,
        }"
        class="space-y-5"
      >
        <div class="space-y-2">
          <Label for="name">
            Nome
          </Label>

          <div class="relative">
            <User
              class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
            />

            <Input
              id="name"
              name="name"
              type="text"
              required
              autofocus
              autocomplete="name"
              placeholder="Seu nome completo"
              class="h-11 pl-10"
              v-model="name"
            />
          </div>

          <InputError
            :message="errors.name || validationErrors.name"
          />
        </div>

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
              name="email"
              type="email"
              required
              autocomplete="email"
              placeholder="voce@email.com"
              class="h-11 pl-10"
              v-model="email"
            />
          </div>

          <InputError
            :message="errors.email || validationErrors.email"
          />
        </div>

        <div class="space-y-2">
          <Label for="password">
            Senha
            <span class="text-xs text-gray-400 font-normal ml-1">
              (mínimo 12 caracteres)
            </span>
          </Label>

          <div class="relative">
            <LockKeyhole
              class="absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-gray-400"
            />

            <PasswordInput
              id="password"
              name="password"
              required
              autocomplete="new-password"
              placeholder="••••••••"
              class="h-11 pl-10"
              v-model="password"
            />
          </div>

          <InputError
            :message="errors.password || validationErrors.password"
          />

          <!-- Requisitos da senha -->
          <div class="mt-3 space-y-1.5 text-sm">
            <div class="flex items-center gap-2">
              <component 
                :is="getValidationIcon(validations.minLength)"
                :class="['h-4 w-4', getValidationColor(validations.minLength)]"
              />
              <span :class="validations.minLength ? 'text-green-600' : 'text-gray-500'">
                Mínimo de 12 caracteres
              </span>
            </div>

            <div class="flex items-center gap-2">
              <component 
                :is="getValidationIcon(validations.hasUpperCase)"
                :class="['h-4 w-4', getValidationColor(validations.hasUpperCase)]"
              />
              <span :class="validations.hasUpperCase ? 'text-green-600' : 'text-gray-500'">
                Pelo menos uma letra maiúscula (A-Z)
              </span>
            </div>

            <div class="flex items-center gap-2">
              <component 
                :is="getValidationIcon(validations.hasLowerCase)"
                :class="['h-4 w-4', getValidationColor(validations.hasLowerCase)]"
              />
              <span :class="validations.hasLowerCase ? 'text-green-600' : 'text-gray-500'">
                Pelo menos uma letra minúscula (a-z)
              </span>
            </div>

            <div class="flex items-center gap-2">
              <component 
                :is="getValidationIcon(validations.hasNumber)"
                :class="['h-4 w-4', getValidationColor(validations.hasNumber)]"
              />
              <span :class="validations.hasNumber ? 'text-green-600' : 'text-gray-500'">
                Pelo menos um número (0-9)
              </span>
            </div>

            <div class="flex items-center gap-2">
              <component 
                :is="getValidationIcon(validations.hasSpecialChar)"
                :class="['h-4 w-4', getValidationColor(validations.hasSpecialChar)]"
              />
              <span :class="validations.hasSpecialChar ? 'text-green-600' : 'text-gray-500'">
                Pelo menos um caractere especial (!@#$%^&*)
              </span>
            </div>

            <div class="flex items-center gap-2">
              <component 
                :is="getValidationIcon(validations.hasNoSpaces)"
                :class="['h-4 w-4', getValidationColor(validations.hasNoSpaces)]"
              />
              <span :class="validations.hasNoSpaces ? 'text-green-600' : 'text-gray-500'">
                Sem espaços em branco
              </span>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <Label
            for="password_confirmation"
          >
            Confirmar senha
          </Label>

          <div class="relative">
            <LockKeyhole
              class="absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-gray-400"
            />

            <PasswordInput
              id="password_confirmation"
              name="password_confirmation"
              required
              autocomplete="new-password"
              placeholder="••••••••"
              class="h-11 pl-10"
              v-model="passwordConfirmation"
            />
          </div>

          <InputError
            :message="errors.password_confirmation || validationErrors.password_confirmation"
          />

          <!-- Mensagem de confirmação -->
          <div v-if="passwordConfirmation && password" class="mt-1 text-sm">
            <div 
              v-if="password === passwordConfirmation"
              class="flex items-center gap-2 text-green-600"
            >
              <Check class="h-4 w-4" />
              As senhas coincidem
            </div>
            <div 
              v-else
              class="flex items-center gap-2 text-red-500"
            >
              <X class="h-4 w-4" />
              As senhas não coincidem
            </div>
          </div>
        </div>

        <Button
          type="submit"
          class="h-11 w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-300"
          :disabled="processing || !isFormValid"
        >
          <Spinner
            v-if="processing"
          />

          <span v-else>
            Criar conta
          </span>
        </Button>
      </Form>

      <div
        class="mt-6 text-center text-sm text-gray-500"
      >
        Já possui uma conta?

        <TextLink
          :href="login()"
          class="font-medium"
        >
          Entrar
        </TextLink>
      </div>
    </div>
  </div>
</template>