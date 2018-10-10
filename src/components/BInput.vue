<template>
  <div class="form-group">
    <input :class="className" :type="type" :name="name" :id="id" :value="value" :placeholder="placeholder">
    <i v-if="hasIcon" :class="classIcon"></i>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    className: {
      type: String,
      required: false,
      default: 'text-input' 
    },
    classIcon: {
      type: String,
      required: false,
      default: '' 
    },
    hasIcon: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: false,
      default: '' 
    },
    id: {
      type: String,
      required: false,
      default: '' 
    },
    value: {
      required: true
    }
  }
}
</script>

<style scoped>

.form-group {
  margin-right: 0;
  margin-left: 0;
}

.form-group i {
  position: relative;
  bottom: 42px;
  left: 15px;
  color:#1ED9BA;
}

.text-input {
  margin-bottom: 10px;
  height: 40px;
  border-width: 0;
  border-style: solid;
  background-color: #FDF3EA;
  width: 270px;
  padding-left: 35px;
  outline: 0;
  color: #A39C92;
}

.text-input:focus {
  border-color: #323031;
  border-left-width: 7px;
  padding-left: 28px;
}

</style>
