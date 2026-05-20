<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import Input from '@/components/ui/input/Input.vue';
import Select from '@/components/ui/select/Select.vue';
import SelectContent from '@/components/ui/select/SelectContent.vue';
import SelectItem from '@/components/ui/select/SelectItem.vue';
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue';
import SelectValue from '@/components/ui/select/SelectValue.vue';

const search = defineModel<string>("search");
</script>

<template>
  <Card>
    <CardContent class="p-4">
      <div class="flex gap-4">
        <Input
          v-model="search"
          placeholder="Buscar ocorrência..."
        />

        <Select>
          <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Severidade" />
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
      </div>
    </CardContent>
  </Card>
</template>