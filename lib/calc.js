/**
 * Created by WindomZ on 17-5-30.
 */
'use strict'

/**
 * Calculate the hard disk size.
 *
 * @param {string} type
 * @param {string} format
 * @param {int|float} diskSize
 * @param {int|float} [hideSize]
 * @return {int|float}
 * @api public
 */
function calc (type, format, diskSize, hideSize = 0) {
  if (typeof diskSize !== 'number' || diskSize <= 0) {
    throw new TypeError('"' + diskSize + '" argument must be a positive number!')
  }
  if (typeof hideSize !== 'number' || hideSize < 0) {
    throw new TypeError('"' + hideSize + '" argument must be a non-negative number!')
  }

  let result = 0
  switch (type.toLowerCase()) {
    case 'windows':
      switch (format.toLowerCase()) {
        case 'fat32':
          result = (diskSize - 1) * 4 + diskSize * 1024
          break
        case 'ntfs':
        default:
          const unitSize = (512 * 255 * 63) / (1024 * 1024)
          result = Math.ceil(Math.ceil((diskSize * 1024) / unitSize) * unitSize)
          break
      }
  }

  if (result < 0) result = 0

  return result + hideSize * 1024
}

module.exports = calc
