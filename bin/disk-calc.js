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
  .action((diskSize = 0, hideSize = 0, options) => {
    noArgs = false

    let sizes = diskSize.match(/[0-9.]+/i)
    if (!sizes || sizes.length <= 0) {
      process.stderr.write(util.format('ERROR DiskSize: "%j"', diskSize).red + os.EOL)
      return
    }
    diskSize = parseFloat(sizes[0])

    if (hideSize) {
      if (hideSize < 0) {
        process.stderr.write(util.format('ERROR HideSize: "%j"', hideSize).red + os.EOL)
      }
      hideSize = parseFloat(hideSize)
    }
    if (!hideSize) hideSize = 0

    let nftsSize = calc('Windows', 'NFTS', diskSize, hideSize)
    process.stdout.write('NFTS format size: ' + (nftsSize + ' MB').green + os.EOL)

    let fatSize = calc('Windows', 'FAT32', diskSize, hideSize)
    process.stdout.write('FAT32 format size: ' + (fatSize + ' MB').green + os.EOL)
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
