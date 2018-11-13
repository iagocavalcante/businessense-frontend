<template>
  <!-- Modal content -->
  <div class="modal" :class="modalControl ? 'open' : 'close-modal'">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" @click="closeModal"><i class="fas fa-times-circle"></i></span>
        <h2>Modal Header</h2>
      </div>
      <div class="modal-body">
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
      <div class="modal-footer">
        <h3>Modal Footer</h3>
        <div class="center">
          <button class="btn-modal">ADD<br>this solution to your action plan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modalControl: {
      get () {
        return this.show
      },
      set (value) {
        this.$emit('update:show', value)
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.open {
  display: block;
}

.close-modal {
  display: none;
}
/* Modal Header */
.modal-header {
  font-family: Circularstd-book;
  font-weight: 100;
  padding: 2px 16px;
  background-color: #66cccc;
  color: #333333;
  border-bottom: 1px solid #fff;
  margin: 10px;
}

/* Modal Body */
.modal-body {
  font-family: Circularstd-book;
  font-weight: 100;
  padding: 2px 16px;
  color: #fff;
  border-bottom: 1px solid #fff;
  margin: 10px;
}

/* Modal Footer */
.modal-footer {
  font-family: Circularstd-book;
  font-weight: 100;
  padding: 2px 16px;
  background-color: #66cccc;
  color: #333333;
  margin: 10px;
}

/* Modal Content */
.modal-content {
  border-radius: 5px;
  position: relative;
  background-color: #66cccc;
  margin: auto;
  padding: 0;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  animation-name: animatetop;
  animation-duration: 0.4s
}

.close {
  color: #fff;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
    color: #333333;
    text-decoration: none;
    cursor: pointer;
}

.btn-modal {
  color: #fff;
  border: none;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  background-color: #669999;
}

.center {
  text-align: center;
}

/* Add Animation */
@keyframes animatetop {
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
}
</style>
