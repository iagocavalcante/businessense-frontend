<script setup lang="ts">
interface Props {
  modelValue?: string
  type?: string
  placeholder?: string
  name?: string
  id?: string
  hasError?: boolean
  hasIcon?: boolean
  iconClass?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  name: '',
  id: '',
  hasError: false,
  hasIcon: false,
  iconClass: '',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="b-input-wrapper position-relative">
    <span v-if="hasIcon" class="input-icon position-absolute">
      <i :class="iconClass"></i>
    </span>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :name="name"
      :id="id"
      :disabled="disabled"
      :class="[
        'form-control',
        { 'is-invalid': hasError },
        { 'has-icon': hasIcon }
      ]"
      @input="onInput"
    />
  </div>
</template>

<style scoped lang="scss">
.b-input-wrapper {
  .input-icon {
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #6c757d;
    z-index: 2;
  }

  input.has-icon {
    padding-left: 40px;
  }

  input.form-control {
    border-radius: 8px;
    padding: 12px 16px;
    border: 1px solid #dee2e6;

    &:focus {
      border-color: #0d6efd;
      box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
    }
  }
}
</style>
