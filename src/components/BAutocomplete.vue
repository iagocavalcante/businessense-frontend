<template>
  <div class="auto-complete">
    <vue-simple-suggest
      ref="simpleSuggestInstance"
      :min-length="0"
      @focus="$refs.simpleSuggestInstance.input.click()"
      @select="onSelect"
      @input="onInput"
      :list="getItems"
      :filter-by-query="true"
      display-attribute="name"
      value-attribute="id"
      class="suggestion">
      <template slot="misc-item-above" slot-scope="{ suggestions, query }">
        <!-- <div class="misc-item">
          <span>You're searching for '{{ query }}'.</span>
        </div> -->

        <!-- Sub-template if have any suggestions -->
        <template v-if="suggestions.length > 0">
          <div class="misc-item">
            <span>{{ suggestions.length }} suggestions are shown...</span>
          </div>
          <hr>
        </template>

        <!-- Show "No result" otherwise, if not loading new ones -->
        <div class="misc-item" v-else>
          <slot name="create-item"></slot>
        </div>
      </template>
      <input @input="onTextInput" v-model="text" />
      <button v-if="allowMultiple && onCustomText" @click="addCustomText()">+</button>
    </vue-simple-suggest>
  </div>
</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest'

export default {
  name: 'b-autocomplete',
  components: {
    VueSimpleSuggest
  },
  props: {
    value: {
      required: true
    },
    items: {
      type: Array,
      required: false,
      default: () => {
        return []
      }
    },
    itemsDataProvider: {
      type: Function,
      required: false
    },
    allowMultiple: {
      type: Boolean,
      default: false
    },
    onCustomText: {
      type: Function,
      required: false
    }
  },
  watch: {
    selectedValue: {
      handler(val) {
        this.$emit('input', this.selectedValue)
      }
    }
  },
  data() {
    return {
      selectedValue: null,
      text: null
    }
  },
  methods: {
    onTextInput() {
      if (!this.allowMultiple) {
        this.selectedValue = null
      }
    },
    addCustomText() {
      if (this.onCustomText) {
        Promise.resolve(this.onCustomText(this.text)).then(newItem => {
          this.onSelect(newItem)
        })
      }
    },
    onSelect(value) {
      if (!value) return

      if (this.allowMultiple) {
        this.selectedValue = this.selectedValue || []
        this.selectedValue.push(value)

        this.$nextTick(() => {
          console.log('in nexttick')
          this.text = ''
          this.$refs.simpleSuggestInstance.text = ''
          this.$refs.simpleSuggestInstance.research()
        })
      } else {
        this.selectedValue = value
      }
    },
    onInput(text) {
      this.text = text
    },
    getItems(text) {
      return Promise.resolve(
        this.items
      ).then(filteredItems => {
        return filteredItems
      })
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 10px
}

hr {
  border-top: 1px solid #000;
}

input {
  height: 35px;
  border-radius: 3px;
  border: 2px solid #888;
  padding: 5px 10px;
  transition: all 0.5s ease-out 0s;
  width: 224px;
}

input:focus {
  outline: none;
  border-color: #2196F3;
  border-radius: 0px;
}

.auto-complete input.has-error {
  border-color: #F44336;
}

.auto-complete .suggestion {
  position: absolute;
  width: 224px;
  background: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border-top: 0px;
  cursor: pointer;
  z-index: 1;
}

.auto-complete .suggest-item {
  background: white;
}

.auto-complete table tr td {
  padding: 10px
}

.auto-complete table tr:nth-child(even) {
  background: #EEE;
}

.auto-complete table tr:hover {
  background: #2196F3;
  color: white;
}
</style>
