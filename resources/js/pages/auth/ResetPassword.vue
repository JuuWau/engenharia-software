<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { ShieldCheck, LockKeyhole, Mail, ArrowLeft, Check, X } from 'lucide-vue-next';
import { ref, computed } from 'vue';
import InputError from '@/components/InputError.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { update } from '@/routes/password';

defineOptions({
    layout: {
        title: 'Redefinir senha',
        description: 'Digite sua nova senha abaixo',
    },
});

const props = defineProps<{
    token: string;
    email: string;
}>();

const inputEmail = ref(props.email);
const password = ref('');
const passwordConfirmation = ref('');

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
</script>

<template>
    <Head title="Redefinir senha" />

    <div class="flex min-h-screen items-center justify-center px-4">
        <div class="w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg">
            <div class="mb-8 text-center">
                <div
                    class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white"
                >
                    <ShieldCheck class="h-8 w-8" />
                </div>

                <h1 class="text-3xl font-bold text-gray-900">
                    Safe Voice
                </h1>

                <p class="mt-2 text-sm text-gray-500">
                    Crie uma nova senha para sua conta
                </p>
            </div>

            <Form
                v-bind="update.form()"
                :transform="(data) => ({ ...data, token, email })"
                :reset-on-success="['password', 'password_confirmation']"
                v-slot="{ errors, processing }"
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
                            autocomplete="email"
                            v-model="inputEmail"
                            class="h-11 pl-10 cursor-not-allowed bg-gray-50"
                            readonly
                            disabled
                        />
                    </div>

                    <InputError :message="errors.email" />
                </div>

                <div class="space-y-2">
                    <Label for="password">
                        Nova senha
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
                            autocomplete="new-password"
                            class="h-11 pl-10"
                            autofocus
                            placeholder="••••••••"
                            v-model="password"
                        />
                    </div>

                    <InputError :message="errors.password" />

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
                    <Label for="password_confirmation">
                        Confirmar senha
                    </Label>

                    <div class="relative">
                        <LockKeyhole
                            class="absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-gray-400"
                        />

                        <PasswordInput
                            id="password_confirmation"
                            name="password_confirmation"
                            autocomplete="new-password"
                            class="h-11 pl-10"
                            placeholder="••••••••"
                            v-model="passwordConfirmation"
                        />
                    </div>

                    <InputError :message="errors.password_confirmation" />
                    
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
                    :disabled="processing || !allValidationsPassed || password !== passwordConfirmation"
                    data-test="reset-password-button"
                >
                    <Spinner v-if="processing" />

                    <span v-else>
                        Redefinir senha
                    </span>
                </Button>
            </Form>

            <div class="mt-6 text-center text-sm text-gray-500">
                <span>Lembrou sua senha? </span>

                <TextLink
                    :href="login()"
                    class="font-medium"
                >
                    Voltar para o login
                </TextLink>
            </div>

            <div class="mt-4 text-center">
                <TextLink
                    :href="login()"
                    class="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600"
                >
                    <ArrowLeft class="h-3 w-3" />
                    Voltar
                </TextLink>
            </div>
        </div>
    </div>
</template>