<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import Button from '@/components/ui/button/Button.vue';

defineEmits<{
  create: [];
}>();
</script>

<template>
  <div
    class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
  >
    <div class="min-w-0">
      <h1
        class="text-2xl font-semibold sm:text-3xl"
      >
        Ocorrências
      </h1>

      <p
        class="mt-1 text-sm text-muted-foreground sm:text-base"
      >
        Registre e acompanhe eventos
        importantes com segurança.
      </p>
    </div>

    <Button
      variant="indigo"
      class="w-full sm:w-auto cursor-pointer"
      @click="$emit('create')"
    >
      <Plus class="h-4 w-4" />

      Nova ocorrência
    </Button>
  </div>
</template>