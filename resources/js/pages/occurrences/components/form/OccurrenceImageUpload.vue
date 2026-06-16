<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue';
import Label from '@/components/ui/label/Label.vue';

const files = defineModel<File[]>();
</script>

<template>
  <div class="space-y-2">
    <Label>Imagens</Label>

    <Input
      type="file"
      multiple
      @change="
        files = Array.from(
          ($event.target as HTMLInputElement)
            .files || []
        )
      "
    />
  </div>
</template>