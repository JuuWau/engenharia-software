<script setup lang="ts">
import { User } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {
    user: User;
    showEmail?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    showEmail: false,
});
// Compute whether we should show
</script>

<template>
    <Avatar class="h-8 w-8 overflow-hidden rounded-lg bg-indigo-100">
    <AvatarFallback class="rounded-lg bg-indigo-100 text-indigo-600">
      <User class="h-4 w-4" />
    </AvatarFallback>
  </Avatar>

    <div class="grid flex-1 text-left text-sm leading-tight">
        <span class="truncate font-medium">{{ user.name }}</span>
        <span v-if="showEmail" class="truncate text-xs text-muted-foreground">{{
            user.email
        }}</span>
    </div>
</template>
