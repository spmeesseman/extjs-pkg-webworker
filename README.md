# ExtJs Package Open Tooling Package Wrapper for HTML5 WebWorker

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![app-publisher](https://app1.development.pjats.com/res/img/app-publisher-badge.svg)](https://npm.development.pjats.com/-/web/detail/@perryjohnson/app-publisher)

## Description

> This package provides an ExtJS package wrapper for a html5 webworker.

## Install

To install this package, run the following command:

    npm install @perryjohnson/extjs-pkg-webworker

## Usage

To include the package in an ExtJS application build, be sure to add the package name to the list of required packages in the app.json file:

    "requires": [
         "webworker",
        ...
    ]

For an open tooling build, also add the node_modules path to the workspace.json packages path array:

     "packages": {
        "dir": "...${package.dir}/node_modules/@perryjohnson/extjs-pkg-webworker"
    }

Simply include the control into any class file:

    require: [ 'Ext.ux.webworker' ],
    items: [
    {
        xtype: 'webworker'
    }]
