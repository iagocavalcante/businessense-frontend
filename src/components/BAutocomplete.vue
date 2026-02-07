<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  items: Record<string, unknown>[]
  modelValue?: string
  placeholder?: string
  displayKey?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Search...',
  displayKey: 'Name',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'select': [item: Record<string, unknown>]
}>()

const inputValue = ref(props.modelValue)
const showSuggestions = ref(false)
const highlightedIndex = ref(-1)

const filteredItems = computed(() => {
  if (!inputValue.value) return []
  const search = inputValue.value.toLowerCase()
  return props.items.filter(item => {
    const displayValue = String(item[props.displayKey] || '')
    return displayValue.toLowerCase().includes(search)
  })
})

watch(() => props.modelValue, (newVal) => {
  inputValue.value = newVal
})

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  inputValue.value = target.value
  emit('update:modelValue', target.value)
  showSuggestions.value = true
  highlightedIndex.value = -1
}

function selectItem(item: Record<string, unknown>) {
  inputValue.value = String(item[props.displayKey] || '')
  emit('update:modelValue', inputValue.value)
  emit('select', item)
  showSuggestions.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (!showSuggestions.value || filteredItems.value.length === 0) return

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      highlightedIndex.value = Math.min(
        highlightedIndex.value + 1,
        filteredItems.value.length - 1
      )
      break
    case 'ArrowUp':
      event.preventDefault()
      highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
      break
    case 'Enter': {
      event.preventDefault()
      const selectedItem = filteredItems.value[highlightedIndex.value]
      if (highlightedIndex.value >= 0 && selectedItem) {
        selectItem(selectedItem)
      }
      break
    }
    case 'Escape':
      showSuggestions.value = false
      break
  }
}

function onBlur() {
  // Delay to allow click event on suggestion
  setTimeout(() => {
    showSuggestions.value = false
  }, 200)
}
</script>

<template>
  <div class="b-autocomplete position-relative">
    <input
      type="text"
      :value="inputValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="form-control"
      @input="onInput"
      @keydown="onKeydown"
      @focus="showSuggestions = true"
      @blur="onBlur"
    />
    <ul
      v-if="showSuggestions && filteredItems.length > 0"
      class="suggestions-list list-group position-absolute w-100"
    >
      <li
        v-for="(item, index) in filteredItems"
        :key="index"
        :class="[
          'suggestion-item list-group-item list-group-item-action',
          { 'active': index === highlightedIndex }
        ]"
        @click="selectItem(item)"
      >
        {{ item[displayKey] }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.b-autocomplete {
  .suggestions-list {
    z-index: 1000;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #dee2e6;
    border-top: none;
  }

  .suggestion-item {
    cursor: pointer;

    &:hover,
    &.active {
      background-color: #0d6efd;
      color: white;
    }
  }
}
</style>
