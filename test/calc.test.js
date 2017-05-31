/**
 * Created by WindomZ on 17-5-31.
 */
'use strict'

const test = require('ava')

const calc = require('../lib/calc')

test('calc fail', t => {
  try {
    calc('Windows', 'NTFS', -1)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }
  try {
    calc('Windows', 'NTFS', 0)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }
  try {
    calc('Windows', 'NTFS', 1, -1)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }
})

test('calc pass', t => {
  try {
    t.is(calc('Windows', 'NTFS', 0.00001), 8)
    t.is(calc('Windows', 'FAT32', 0.00001), 0)

    t.is(calc('Windows', 'NTFS', 0.001), 8)
    t.is(calc('Windows', 'FAT32', 0.001), 0)

    t.is(calc('Windows', 'NTFS', 10), 10245)
    t.is(calc('Windows', 'FAT32', 10), 10276)

    t.is(calc('windows', 'NTFS', 20), 20482)
    t.is(calc('windows', 'FAT32', 20), 20556)

    t.is(calc('windows', 'ntfs', 50), 51208)
    t.is(calc('windows', 'fat32', 50), 51396)

    t.is(calc('WINDOWS', 'NTFS', 100), 102407)
    t.is(calc('WINDOWS', 'FAT32', 100), 102796)

    t.is(calc('Windows', 'NTFS', 10, 10 / 1024), 10255)
    t.is(calc('Windows', 'FAT32', 10, 20 / 1024), 10296)
    t.pass()
  } catch (e) {
    t.fail(e)
  }
})
