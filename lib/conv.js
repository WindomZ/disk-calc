/**
 * Created by WindomZ on 17-5-31.
 */
'use strict'

/**
 * Convert GB/MB/KB size to GB size.
 *
 * @param {string} size
 * @return {int|float}
 * @api public
 */
function convert2GB (size) {
  if (!size || typeof size !== 'string') {
    throw new TypeError('"' + size + '" argument must not be empty!')
  }
  size = size.toLowerCase()

  let sizes = size.match(/[0-9.]+/i)
  if (!sizes || sizes.length <= 0) {
    throw new TypeError('"' + size + '" argument must include size number!')
  }
  let num = parseFloat(sizes[0])

  if (size.includes('g')) {
    return num
  } else if (size.includes('m')) {
    return num / 1024
  } else if (size.includes('k')) {
    return num / (1024 * 1024)
  }

  return num
}

module.exports = convert2GB
