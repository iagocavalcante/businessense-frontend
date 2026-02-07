<script setup lang="ts">
import { watch } from 'vue'

interface Props {
  show: boolean
  fullscreen?: boolean
  size?: 'sm' | 'lg' | 'xl' | ''
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  fullscreen: false,
  size: '',
  title: ''
})

const emit = defineEmits<{
  'update:show': [value: boolean]
}>()

function close() {
  emit('update:show', false)
}

// Handle body scroll lock
watch(() => props.show, (isShow) => {
  if (isShow) {
    document.body.classList.add('modal-open')
  } else {
    document.body.classList.remove('modal-open')
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="modal-wrapper">
        <div class="modal-backdrop" @click="close"></div>
        <div
          class="modal d-block"
          tabindex="-1"
          role="dialog"
        >
          <div
            :class="[
              'modal-dialog',
              { 'modal-fullscreen': fullscreen },
              { [`modal-${size}`]: size }
            ]"
          >
            <div class="modal-content">
              <div class="modal-header">
                <slot name="header">
                  <h5 v-if="title" class="modal-title">{{ title }}</h5>
                </slot>
                <button
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                  @click="close"
                ></button>
              </div>
              <div class="modal-body">
                <slot></slot>
              </div>
              <div v-if="$slots.footer" class="modal-footer">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  inset: 0;
  z-index: 1050;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}

.modal {
  z-index: 1050;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-fullscreen {
  .modal-content {
    height: 100vh;
    border-radius: 0;
  }
}
</style>
