#!/usr/bin/env node
/**
 * Created by WindomZ on 2017/5/27.
 */
'use strict'

const program = require('commander')

const pkg = require('../package.json')

let noArgs = true

program
  .version(pkg.version)
  .description('Hard disk calculation.')

program
  .command('windows <size>')
  .alias('win')
  .action((size, options) => {
    noArgs = false
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
