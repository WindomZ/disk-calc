#!/usr/bin/env node
/**
 * Created by WindomZ on 2017/5/27.
 */
'use strict'

const os = require('os')
const util = require('util')

require('colors')
const program = require('commander')

const pkg = require('../package.json')
const calc = require('../lib/calc')
const conv = require('../lib/conv')

let noArgs = true

program
  .version(pkg.version)
  .description('Hard disk calculation.')

program
  .command('usage')
  .alias('u')
  .action(options => {
    noArgs = false

    console.log('Function is still under development...')
  })

program
  .command('windows <disk_size> [hide_size]')
  .alias('win')
  .action((diskSize, hideSize, options) => {
    noArgs = false

    try {
      diskSize = conv(diskSize)
    } catch (e) {
      process.stderr.write(util.format('ERROR: "%j"', e.message).red + os.EOL)
      return
    }

    if (hideSize) {
      try {
        hideSize = conv(hideSize)
      } catch (e) {
        process.stderr.write(util.format('ERROR: "%j"', e.message).red + os.EOL)
        return
      }
    } else {
      hideSize = 0
    }

    try {
      process.stdout.write('NFTS format size: ' + (calc('Windows', 'NFTS', diskSize, hideSize) + ' MB').green + os.EOL)
    } catch (e) {
      process.stderr.write(util.format('ERROR: "%j"', e.message).red + os.EOL)
      return
    }

    try {
      process.stdout.write('NFTS format size: ' + (calc('Windows', 'FAT32', diskSize, hideSize) + ' MB').green + os.EOL)
    } catch (e) {
      process.stderr.write(util.format('ERROR: "%j"', e.message).red + os.EOL)
    }
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
