<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { Mail, ShieldCheck, ArrowLeft } from 'lucide-vue-next';
import InputError from '@/components/InputError.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { email } from '@/routes/password';

defineOptions({
    layout: {
        title: 'Recuperar senha',
        description: 'Digite seu email para receber o link de redefinição',
    },
});

defineProps<{
    status?: string;
}>();
</script>

<template>
    <Head title="Recuperar senha" />

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
                    Recupere o acesso à sua conta
                </p>
            </div>

            <div
                v-if="status"
                class="mb-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-600"
            >
                {{ status }}
            </div>

            <Form
                v-bind="email.form()"
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
                            name="email"
                            type="email"
                            required
                            autofocus
                            autocomplete="email"
                            placeholder="voce@email.com"
                            class="h-11 pl-10"
                        />
                    </div>

                    <InputError :message="errors.email" />
                </div>

                <Button
                    type="submit"
                    class="h-11 w-full bg-indigo-600 hover:bg-indigo-500"
                    :disabled="processing"
                    data-test="email-password-reset-link-button"
                >
                    <Spinner v-if="processing" />

                    <span v-else>
                        Enviar link de recuperação
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