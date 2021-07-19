'use strict'

const splitEmail = (email) => {
  const newEmail = email.split('@')[0]
  return newEmail
}

module.exports = splitEmail
