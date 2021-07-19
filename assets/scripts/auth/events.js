'use strict'
const pkg = 'auth.events'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const util = require('../util')

document.getElementById('sign-up').style.display = 'none'
document.getElementById('sign-in').style.display = 'none'
document.getElementById('change-password-btn').style.display = 'none'
document.getElementById('sign-out-btn').style.display = 'none'
document.getElementById('image-uploader').style.display = 'none'
document.getElementById('uploadButton').style.display = 'none'

/*
** onSignUp()
**    parameter: event
**    returns: nothing
*/
const onSignUp = (event) => {
  event.preventDefault()
  util.logMessage(`${pkg}.onSignUp()`)

  const formData = getFormFields(event.target)
  util.logObject(formData)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

/*
** onSignIn()
**    parameter: event
**    returns: nothing
*/
const onSignIn = (event) => {
  event.preventDefault()
  util.logMessage(`${pkg}.onSignIn()`)

  const formData = getFormFields(event.target)
  util.logObject(formData)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

/*
** onSignOut()
**    parameter: event
**    returns: nothing
*/
const onSignOut = (event) => {
  event.preventDefault()
  util.logMessage(`${pkg}.onSignOut()`)

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

/*
** onSignOut()
**    parameter: event
**    returns: nothing
*/
const onChangePassword = (event) => {
  event.preventDefault()
  util.logMessage(`${pkg}.onChangePassword()`)

  const formData = getFormFields(event.target)
  util.logObject(formData)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up-btn').on('click', function () {
    $('#sign-in').fadeOut('fast')
    $('.welcome-message').fadeOut('fast')
    $('#sign-up').delay(200).fadeIn('fast')
  })
  $('#sign-in-btn').on('click', function () {
    $('#sign-up').fadeOut('fast')
    $('.welcome-message').fadeOut('fast')
    $('#sign-in').delay(200).fadeIn('fast')
  })
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out-btn').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)

  $('#file-upload').on('change', function () {
    $('#file-chosen').text(this.files[0].name)
  })
  //
  // $('.content').on('show.bs.modal', '#exampleModal-' + $(this).data('id'), function (event) {
  //   const button = $(event.relatedTarget) // Button that triggered the modal
  //   const recipient = button.data('attribute') // Extract info from data-* attributes
  //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  //   const modal = $(this)
  //   modal.find('.modal-body input').val(recipient)
  // })
}

module.exports = {
  addHandlers
}
