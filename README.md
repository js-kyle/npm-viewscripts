
<h1 align="center">
  <br>
  npm-viewscripts
  <br>
</h1>

<h4 align="center">Identify potentially malicious npm scripts in a project.</h4>
<p align="center">
    <img alt="GitHub" src="https://img.shields.io/github/license/js-kyle/npm-viewscripts.svg">
    <img alt="NPM" src="https://img.shields.io/npm/v/npm-viewscripts.svg">
</p>


## Overview

This project is a Node.js CLI tool to identify which of a project's existing dependencies are utilising npm lifecycle scripts, which _could_ be malicious.

The currently configured npm scripts the tool will identify are:
`preinstall`, `postintall`, `preuninstall`, `postuninstall`

**Note: This project is to educate, so should not be used as a complete npm security solution.**

## Installation

```
# install globally, using npm
$ npm install npm-viewscripts -g

# Run the cli on a project
$ cd my-node-project
$ npm install
$ npm-viewscripts
```

## Usage

```
$ npm-viewscripts

  Usage
    $ npm-viewscripts [path]

  Options
    path  Modules folder  [Default: node_modules]
```

## Understanding the result
Positive report example:
```
Potentially unsafe scripts found. These should be reviewed for safety
Module name: monorepo-symlink-test Type: postinstall
```
The above output informs us that the `monorepo-symlink-test` is running a `postinstall` script, so we should review that, and ensure that it is safe.

Negative report example:
```
No potentially unsafe scripts found.
```
No modules in the project are _currently_ using scripts which could be used maliciously.


