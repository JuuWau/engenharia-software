<script setup lang="ts">
import { PencilIcon, X } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem.vue";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger.vue";

const props = defineProps<{
  params: {
    data: any;
    onEdit: (item: any) => void;
    onDelete: (item: any) => void;
  };
}>();

function handleEdit() {
  props.params.onEdit(
    props.params.data
  );
}

function handleDelete() {
  props.params.onDelete(
    props.params.data
  );
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        size="icon"
      >
        •••
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      <DropdownMenuItem
        @click="handleEdit"
      >
      <PencilIcon class="h-4 w-4" />
        Editar
      </DropdownMenuItem>
      <DropdownMenuItem
        @click="handleDelete"
      >
        <X class="h-4 w-4" />
        Excluir
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>