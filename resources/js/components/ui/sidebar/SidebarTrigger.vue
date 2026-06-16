<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { PanelLeftClose, PanelLeftOpen } from "lucide-vue-next"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import { useSidebar } from "./utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { isMobile, state, toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon"
    class="bg-indigo-100 text-gray-700 hover:bg-indigo-200 focus:ring-indigo-500 focus:ring-offset-indigo-100 disabled:bg-transparent disabled:text-gray-400 disabled:hover:bg-transparent data-[state=open]:bg-transparent dark:bg-indigo-900 dark:text-indigo-400 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400 dark:focus:ring-offset-indigo-900 dark:data-[state=open]:bg-transparent"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeftOpen v-if="isMobile || state === 'collapsed'" />
    <PanelLeftClose v-else />
    <span class="sr-only">Toggle sidebar</span>
  </Button>
</template>
