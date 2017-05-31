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
  .description('Hard disk calculation.')

program
  .command('usage')
  .alias('u')
  .option('-c, --cn', 'chinese', undefined, undefined)
  .action(options => {
    noArgs = false

    if (options.cn) {
      process.stdout.write('1 >>> '.yellow + '当Windows位于第一个区域时，' +
        '它会自动创建一个额外的三个隐藏的分区。' + os.EOL)
      process.stdout.write('2 >>> '.yellow + '所以当计算第一个分区时，' +
        '应该首先删除所有隐藏的分区。' + os.EOL)
      process.stdout.write('3 >>> '.yellow + '尝试创建一个分区，' +
        '获取所有隐藏分区的总大小。' + os.EOL)
      process.stdout.write('4 >>> '.yellow + '再次删除全部重新创建，' +
        '然后C盘分区大小携带隐藏分区大小的总和。' + os.EOL)
      process.stdout.write('5 >>> '.yellow + '其他分区大小不需要携带隐藏分区大小的总和。' + os.EOL)
    } else {
      process.stdout.write('1 >>> '.yellow + 'When Windows is in the first area, ' +
        'it automatically creates an additional three hidden partitions.' + os.EOL)
      process.stdout.write('2 >>> '.yellow + 'So when calculating the first partition, ' +
        'you should first remove all hidden partitions.' + os.EOL)
      process.stdout.write('3 >>> '.yellow + 'Try to create a partition, ' +
        'get the total size of all hidden partitions.' + os.EOL)
      process.stdout.write('4 >>> '.yellow + 'Again delete all re-create, ' +
        'and then C drive partition size to carry the sum of the hidden partition size.' + os.EOL)
      process.stdout.write('5 >>> '.yellow + 'Other partition sizes ' +
        'do not need to carry the sum of the hidden partition sizes.' + os.EOL)
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
      process.stdout.write('NTFS format size: ' + (calc('Windows', 'NTFS', diskSize, hideSize) + ' MB').green + os.EOL)
    } catch (e) {
      process.stderr.write(e.message.red + os.EOL)
      return
    }

    try {
      process.stdout.write('FAT32 format size: ' + (calc('Windows', 'FAT32', diskSize, hideSize) + ' MB').green + os.EOL)
    } catch (e) {
      process.stderr.write(e.message.red + os.EOL)
    }
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
