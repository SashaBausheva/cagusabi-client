'use strict'

const ifEquals = (createdAt, updatedAt, shortenedUpdatedAt) => {
  return (createdAt === updatedAt) ? '---' : shortenedUpdatedAt
}

module.exports = ifEquals
