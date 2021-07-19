'use strict'
const pkg = 'loader.ui'

const indexHandlebarTemplate = require('../templates/uploads-listing.handlebars')
const util = require('../util')

const resetModalBackdrop = () => {
  $('.modal-backdrop').remove()
}

const onIndexSuccess = responseData => {
  util.logMessage(`${pkg}.onIndexSuccess()`)
  util.logObject(responseData)
  const uploadedImages = responseData.uploads
  const sortUploads = uploadedImages.sort(function (a) {
    if (a.editable === true) return -1
    if (a.editable === false) return 1
  })
  const indexUploadsHandlebars = indexHandlebarTemplate({ uploads: sortUploads })
  $('.content').html(indexUploadsHandlebars)
  populateHandlebarsFields(uploadedImages)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const populateHandlebarsFields = images => {
  $('.modal-edit').each(function () {
    $(this).on('shown.bs.modal', function () {
      const image = images.find(x => x._id === $(this).data('id'))
      $('#edit-submission-name-' + $(this).data('id')).val(image.name)
      $('#edit-submission-description-' + $(this).data('id')).val(image.description)
      $('#edit-submission-tags-' + $(this).data('id')).val(image.tags)
    })
  })
}

const onIndexFailure = responseData => {
  util.displayMessageModal(`${pkg}.onIndexFailure()`, 'onIndex', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageUploadSuccess = () => {
  util.displayMessageModal(`${pkg}.onImageUploadSuccess()`, 'onImageUpload', true)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageUploadFailure = () => {
  util.displayMessageModal(`${pkg}.onImageUploadFailure()`, 'onImageUpload', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageUpdateSuccess = () => {
  util.displayMessageModal(`${pkg}.onImageUpdateSuccess()`, 'onImageUpdate', true)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageUpdateFailure = () => {
  util.displayMessageModal(`${pkg}.onImageUpdateFailure()`, 'onImageUpdate', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageRemoveSuccess = () => {
  util.displayMessageModal(`${pkg}.onImageRemoveSuccess()`, 'onImageRemove', true)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageRemoveFailure = () => {
  util.displayMessageModal(`${pkg}.onImageRemoveFailure()`, 'onImageRemove', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

module.exports = {
  resetModalBackdrop,
  onIndexSuccess,
  onIndexFailure,
  onImageUploadSuccess,
  onImageUploadFailure,
  onImageUpdateSuccess,
  onImageUpdateFailure,
  onImageRemoveSuccess,
  onImageRemoveFailure
}
