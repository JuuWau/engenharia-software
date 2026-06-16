<script setup lang="ts">
import { AlertTriangle, BarChart3, ShieldAlert, ShieldCheck, } from "lucide-vue-next";
import Card from "@/components/ui/card/Card.vue";
import CardContent from "@/components/ui/card/CardContent.vue";

defineProps<{
  total: number;
  high: number;
  medium: number;
  low: number;
}>();

const cards = [
  {
    title: "Total",
    valueKey: "total",
    icon: BarChart3,
    iconClass:
      "bg-indigo-100 text-indigo-700",
  },

  {
    title: "Alta severidade",
    valueKey: "high",
    icon: ShieldAlert,
    iconClass:
      "bg-red-100 text-red-700",
  },

  {
    title: "Média severidade",
    valueKey: "medium",
    icon: AlertTriangle,
    iconClass:
      "bg-amber-100 text-amber-700",
  },

  {
    title: "Baixa severidade",
    valueKey: "low",
    icon: ShieldCheck,
    iconClass:
      "bg-emerald-100 text-emerald-700",
  },
];
</script>

<template>
  <div
    class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
  >
    <Card
      v-for="card in cards"
      :key="card.title"
      class="border-border/50 overflow-hidden border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <CardContent
        class="flex items-center justify-between p-6"
      >
        <div class="space-y-2">
          <p
            class="text-muted-foreground text-sm font-medium"
          >
            {{ card.title }}
          </p>

          <h2
            class="text-3xl font-bold tracking-tight"
          >
            {{ $props[card.valueKey] }}
          </h2>
        </div>

        <div
          class="flex h-12 w-12 items-center justify-center rounded-2xl"
          :class="card.iconClass"
        >
          <component
            :is="card.icon"
            class="h-6 w-6"
          />
        </div>
      </CardContent>
    </Card>
  </div>
</template>