<template>
  <div class="auto-complete">
    <input type="text" v-model="input" @keydown.tab.prevent="complete()" @focus="focus(true)" @blur="focus(false)">
    <table v-if="focused">
      <tbody>
        <tr :key="i" v-for="(painPoint, i) in data" v-if="filter(painPoint)" @mousedown="complete(i)">
          <td>{{ painPoint[field] }}</td>
        </tr>
        <slot name="ultimo">
        </slot>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'autocomplete',
    props: {
      value: { type: String, required: false},
      data:  { type: Array, required: true},
      field: { type: String, required: true}
    },

    methods: {
      complete(i) {
        if (i == undefined) {
          for (let row of this.data) {
            if (this.filter(row)) {
              this.select(row)
              return
            }
          }
        }

        this.select(this.data[i])
      },

      select(row) {
        this.input = row[this.field]
        this.selected = true
      },

      filter(row) {
        return row[this.field].toLowerCase().indexOf(this.input.toLowerCase()) != -1
      },

      focus(f) {
        this.focused = f
      }
    },
      
    data() {
      return {
        input: '',
        focused: false
      }
    },

    created() {
      this.input = this.value || ''
    }
  };
</script>

<style>
  .form-group {
  margin-bottom: 10px
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

.auto-complete table {
  position: absolute;
  width: 224px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 2px solid #888;
  border-top: 0px;
  cursor: pointer;
  z-index: 2;
}

.auto-complete table tr {
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