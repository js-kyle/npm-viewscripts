#!/usr/bin/env node
'use strict';

const { walkModules } = require('./index');

const args = process.argv.slice(2);
const path = args[0];

walkModules(path);
