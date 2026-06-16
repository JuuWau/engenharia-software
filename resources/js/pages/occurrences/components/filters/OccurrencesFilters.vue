<script setup lang="ts">
import { FilterX } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import Card from "@/components/ui/card/Card.vue";
import CardContent from "@/components/ui/card/CardContent.vue";
import Input from "@/components/ui/input/Input.vue";
import Select from "@/components/ui/select/Select.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import type {
  OccurrenceSeverity,
} from "../../types/occurrence.types";

const search =
  defineModel<string>("search");

const severity =
  defineModel<
    OccurrenceSeverity | ""
  >("severity");

const date =
  defineModel<string>("date");

function clearFilters() {
  search.value = "";
  severity.value = "";
  date.value = "";
}
</script>

<template>
  <Card>
    <CardContent class="p-4">
      <div
        class="
          flex flex-col gap-4
          lg:flex-row
        "
      >
        <Input
          v-model="search"
          placeholder="
            Buscar ocorrência...
          "
          class="flex-1"
        />

        <Select
          v-model="severity"
        >
          <SelectTrigger
            class="
              w-full
              lg:w-[180px]
            "
          >
            <SelectValue
              placeholder="
                Severidade
              "
            />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="low">
              Baixa
            </SelectItem>

            <SelectItem value="medium">
              Média
            </SelectItem>

            <SelectItem value="high">
              Alta
            </SelectItem>
          </SelectContent>
        </Select>

        <Input
          v-model="date"
          type="date"
          class="
            w-full
            lg:w-[180px]
          "
        />

        <Button
          variant="outline"
          class="w-full lg:w-auto"
          @click="clearFilters"
        >
          <FilterX class="mr-2 h-4 w-4" />

          Limpar
        </Button>
      </div>
    </CardContent>
  </Card>
</template>