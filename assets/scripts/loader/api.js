'use strict'
const pkg = 'loader.api'

const config = require('../config')
const store = require('../store')
const util = require('../util')

const imageUpload = formData => {
  util.logMessage(`${pkg}.imageUpload()`)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/uploads',
    contentType: false,
    processData: false,
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const imageUpdate = function (id, formData) {
  util.logMessage(`${pkg}.imageUpdate()`)
  util.logMessage(`${pkg}.imageUpdate()`, `ID = ${id}`)
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    url: config.apiUrl + '/uploads/' + id,
    data: formData
  })
}

const imageIndex = function () {
  util.logMessage(`${pkg}.imageIndex()`)
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET',
    url: config.apiUrl + '/uploads'
  })
}

const imageRemove = function (id) {
  util.logMessage(`${pkg}.imageRemove()`)
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE',
    url: config.apiUrl + '/uploads/' + id
  })
}

module.exports = {
  imageUpload,
  imageUpdate,
  imageIndex,
  imageRemove
}
