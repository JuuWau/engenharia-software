<script setup lang="ts">
import Card from "@/components/ui/card/Card.vue";
import type { Occurrence }
from "../../types/occurrence.types";
import OccurrenceActions from "../shared/OccurrenceActions.vue";
import OccurrenceBadge from "../shared/OccurrenceBadge.vue";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

defineProps<{
  items: Occurrence[];
}>();
</script>

<template>
  <Card>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            Título
          </TableHead>

          <TableHead>
            Data
          </TableHead>

          <TableHead>
            Severidade
          </TableHead>

          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow
          v-for="item in items"
          :key="item.id"
        >
          <TableCell>
            <div>
              <p class="font-medium">
                {{ item.title }}
              </p>

              <p class="text-muted-foreground text-sm">
                {{ item.description }}
              </p>
            </div>
          </TableCell>

          <TableCell>
            {{ item.occurred_at }}
          </TableCell>

          <TableCell>
            <OccurrenceBadge
              :severity="item.severity"
            />
          </TableCell>

          <TableCell class="text-right">
            <OccurrenceActions />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
</template>