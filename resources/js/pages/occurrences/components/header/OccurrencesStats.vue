<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';

defineProps<{
  total: number;
  high: number;
  medium: number;
  low: number;
}>();
</script>

<template>
  <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
    <Card>
      <CardContent class="p-6">
        <p class="text-sm text-muted-foreground">
          Total
        </p>

        <h2 class="text-2xl font-bold">
          {{ total }}
        </h2>
      </CardContent>
    </Card>

    <Card>
      <CardContent class="p-6">
        <p class="text-sm text-muted-foreground">
          Alta severidade
        </p>

        <h2 class="text-2xl font-bold">
          {{ high }}
        </h2>
      </CardContent>
    </Card>

    <Card>
      <CardContent class="p-6">
        <p class="text-sm text-muted-foreground">
          Média severidade
        </p>

        <h2 class="text-2xl font-bold">
          {{ medium }}
        </h2>
      </CardContent>
    </Card>

    <Card>
      <CardContent class="p-6">
        <p class="text-sm text-muted-foreground">
          Baixa severidade
        </p>

        <h2 class="text-2xl font-bold">
          {{ low }}
        </h2>
      </CardContent>
    </Card>
  </div>
</template>