<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { Plus } from 'lucide-vue-next';

defineEmits<{
  create: [];
}>();
</script>

<template>
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-3xl font-semibold">
        Ocorrências
      </h1>

      <p class="text-muted-foreground mt-1">
        Registre e acompanhe eventos
        importantes com segurança.
      </p>
    </div>

    <Button variant="indigo" @click="$emit('create')">
      <Plus />
      Nova ocorrência
    </Button> 
  </div>
</template>