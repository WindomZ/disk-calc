/**
 * Created by WindomZ on 17-5-31.
 */
'use strict'

const test = require('ava')

const conv = require('../lib/conv')

test('conv fail', t => {
  try {
    conv('')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }
  try {
    conv('xx')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }
  try {
    conv('xx')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }
})

test('conv pass', t => {
  try {
    t.is(conv('10'), 10)
    t.is(conv('10g'), 10)
    t.is(conv('10G'), 10)
    t.is(conv('10gb'), 10)
    t.is(conv('10Gb'), 10)
    t.is(conv('10GB'), 10)

    t.is(conv('1024m'), 1)
    t.is(conv('1024M'), 1)
    t.is(conv('1024mb'), 1)
    t.is(conv('1024Mb'), 1)
    t.is(conv('1024MB'), 1)

    t.is(conv('1048576k'), 1)
    t.is(conv('1048576K'), 1)
    t.is(conv('1048576kb'), 1)
    t.is(conv('1048576Kb'), 1)
    t.is(conv('1048576KB'), 1)

    t.pass()
  } catch (e) {
    t.fail(e)
  }
})
