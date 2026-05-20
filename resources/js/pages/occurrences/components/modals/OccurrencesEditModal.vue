<script setup lang="ts">
import { reactive } from 'vue';
import Button from '@/components/ui/button/Button.vue';
import Dialog from '@/components/ui/dialog/Dialog.vue';
import DialogContent from '@/components/ui/dialog/DialogContent.vue';
import DialogFooter from '@/components/ui/dialog/DialogFooter.vue';
import DialogHeader from '@/components/ui/dialog/DialogHeader.vue';
import DialogTitle from '@/components/ui/dialog/DialogTitle.vue';
import OccurrenceForm from '../form/OccurrenceForm.vue';

const open = defineModel<boolean>({
  required: true,
});

const form = reactive({
  title: "",
  description: "",
  occurred_at: "",
  severity: "medium" as const,
  location: null,
});
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          Editar ocorrência
        </DialogTitle>
      </DialogHeader>

      <OccurrenceForm v-model="form" />

      <DialogFooter>
        <Button>
          Atualizar
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>