<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';

</script>

<template>
  <Card>
    <CardContent
      class="flex flex-col items-center justify-center py-16"
    >
      <h3 class="text-lg font-medium">
        Nenhuma ocorrência encontrada
      </h3>

      <p class="text-muted-foreground mt-2 text-sm">
        Crie sua primeira ocorrência.
      </p>
    </CardContent>
  </Card>
</template>