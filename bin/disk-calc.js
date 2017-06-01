#!/usr/bin/env node
/**
 * Created by WindomZ on 2017/5/27.
 */
'use strict'

const os = require('os')

require('colors')
const program = require('commander')

const pkg = require('../package.json')

const calc = require('../lib/calc')
const conv = require('../lib/conv')

let noArgs = true

program
  .version(pkg.version)
  .description(pkg.description)

program
  .command('usage')
  .alias('u')
  .option('-c, --cn', 'chinese', undefined, undefined)
  .action(options => {
    noArgs = false

    if (options.cn) {
      require('../asset/usage-cn.json').usage.forEach((v, i) => {
        process.stdout.write(i + ' >>> '.yellow + v + os.EOL)
      })
    } else {
      require('../asset/usage-en.json').usage.forEach((v, i) => {
        process.stdout.write(i + ' >>> '.yellow + v + os.EOL)
      })
    }
  })

program
  .command('windows <disk_size> [hide_size]')
  .alias('win')
  .action((diskSize, hideSize, options) => {
    noArgs = false

    try {
      diskSize = conv(diskSize)
    } catch (e) {
      process.stderr.write(e.message.red + os.EOL)
      return
    }

    if (hideSize) {
      try {
        hideSize = conv(hideSize)
      } catch (e) {
        process.stderr.write(e.message.red + os.EOL)
        return
      }
    } else {
      hideSize = 0
    }

    try {
      process.stdout.write('NTFS format size: ' +
        (calc('Windows', 'NTFS', diskSize, hideSize) + ' MB').green + os.EOL)
    } catch (e) {
      process.stderr.write(e.message.red + os.EOL)
      return
    }

    try {
      process.stdout.write('FAT32 format size: ' +
        (calc('Windows', 'FAT32', diskSize, hideSize) + ' MB').green + os.EOL)
    } catch (e) {
      process.stderr.write(e.message.red + os.EOL)
    }
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
