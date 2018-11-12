import VueNotifications from 'vue-notifications'

export const notification = {
  methods: {
    errorMsg (title, message) {
      this.showErrorMsg({title, message})
    },
    infoMsg (title, message) {
      this.showInfoMsg({title, message})
    },
    successMsg (title, message) {
      this.showSuccessMsg({title, message})
    },
    warnMsg (title, message) {
      this.showWarnMsg({title, message})
    }
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: 'Hello there',
      message: 'That\'s the success!'
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: 'Hey you',
      message: 'Here is some info for you'
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: 'Wow, man',
      message: 'That\'s the kind of warning'
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: 'Wow-wow',
      message: 'That\'s the error'
    }
  }
}