# disk-calc

[![Greenkeeper badge](https://badges.greenkeeper.io/WindomZ/disk-calc.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/WindomZ/disk-calc.svg?branch=master)](https://travis-ci.org/WindomZ/disk-calc)
[![License](https://img.shields.io/badge/license-Apache-green.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![Dependency](https://david-dm.org/WindomZ/disk-calc.svg)](https://david-dm.org/WindomZ/disk-calc)
[![Coverage Status](https://coveralls.io/repos/github/WindomZ/disk-calc/badge.svg?branch=dev)](https://coveralls.io/github/WindomZ/disk-calc?branch=dev)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)

> Hard disk calculation. 

> Easy to calculate integer hard disk partition.

[![NPM](https://nodei.co/npm/disk-calc.png)](https://nodei.co/npm/disk-calc/)

[![disk-calc](https://img.shields.io/npm/v/disk-calc.svg)](https://www.npmjs.com/package/disk-calc)
![status](https://img.shields.io/badge/status-stable-green.svg)

## Installation

```bash
npm install -g disk-calc
```

## Usage

```bash
$ disk-calc -h

  Usage: disk-calc [options] [command]


  Commands:

    usage|u [options]                  
    windows|win <disk_size> [hide_size]

  Hard disk calculation.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Example

```bash
$ disk-calc usage             # Display the program steps in English.
$ disk-calc usage -c          # Display the program steps in Chinese.
$ disk-calc windows 10        # Calculate the size of the 10G partition
$ disk-calc windows 10g       # Calculate the size of the 10G partition
$ disk-calc windows 10G       # Calculate the size of the 10G partition
$ disk-calc windows 10GB      # Calculate the size of the 10G partition
$ disk-calc windows 10G 566M  # Calculate the size of the 10G partition + 566MB hidden partition sizes
```

## License

The [Apache License 2.0](https://github.com/WindomZ/disk-calc/blob/master/LICENSE)
