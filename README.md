# ExtJs Package Open Tooling Package Wrapper for HTML5 WebWorker

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://dev.azure.com/spmeesseman/extjs-pkg-webworker/_apis/build/status/spmeesseman.extjs-pkg-webworker?branchName=master)](https://dev.azure.com/spmeesseman/extjs-pkg-webworker/_build/latest?definitionId=2&branchName=master)
[![Known Vulnerabilities](https://snyk.io/test/github/spmeesseman/extjs-pkg-webworker/badge.svg)](https://snyk.io/test/github/spmeesseman/extjs-pkg-webworker)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/spmeesseman/extjs-pkg-webworker.svg)](https://isitmaintained.com/project/spmeesseman/extjs-pkg-webworker "Average time to resolve an issue")
[![Percentage of issues still open](https://isitmaintained.com/badge/open/spmeesseman/extjs-pkg-webworker.svg)](https://isitmaintained.com/project/spmeesseman/extjs-pkg-webworker "Percentage of issues still open") [![Greenkeeper badge](https://badges.greenkeeper.io/spmeesseman/extjs-pkg-webworker.svg)](https://greenkeeper.io/)

## Description

> This package provides an ExtJS package wrapper for the [webworker html5 media player](https://github.com/sampotts/webworker) by [Sam Potts](https://github.com/sampotts), available on [npmjs.org](https://www.npmjs.com/package/webworker).  The webworker package is used as a dependency and this package will include its distribution files into ExtJs client builds.

## Install

To install this package, run the following command:

    npm install @spmeesseman/extjs-pkg-webworker

## Usage

To include the package in an ExtJS application build, be sure to add the package name to the list of required packages in the app.json file:

    "requires": [
         "webworker",
        ...
    ]

For an open tooling build, also add the node_modules path to the workspace.json packages path array:

     "packages": {
        "dir": "...${package.dir}/node_modules/@spmeesseman/extjs-pkg-webworker"
    }

Simply include the control into any class file:

    require: [ 'Ext.ux.webworker' ],
    items: [
    {
        xtype: 'webworker'
    }]

## Feedback & Contributing

* Please report any bugs, suggestions or documentation requests via the
  [Issues](https://github.com/spmeesseman/extjs-pkg-webworker/issues)
* Feel free to submit
  [pull requests](https://github.com/spmeesseman/extjs-pkg-webworker/pulls)
* [Contributors](https://github.com/spmeesseman/extjs-pkg-webworker/graphs/contributors)

## Builds by spmeesseman

|Package|Use Case|Repository|Marketplace|
|-|-|-|-|
|code-package|Code Dev Environment|[GitHub](https://github.com/spmeesseman/code-package)|[GIthub Releases](https://github.com/spmeesseman/code-package/releases)|
|conventional-changelog-spm|Semantic-Release|[GitHub](https://github.com/spmeesseman/conventional-changelog-spm)|[Npmjs.org Registry](https://www.npmjs.com/package/conventional-changelog-spm)|
|extjs-pkg-fontawesome|ExtJS Open Tooling|[GitHub](https://github.com/spmeesseman/extjs-pkg-fontawesome)|[Npmjs.org Registry](https://www.npmjs.com/package/extjs-pkg-fontawesome)|
|extjs-pkg-fontawesome-pro|ExtJS Open Tooling|[GitHub](https://github.com/spmeesseman/extjs-pkg-fontawesome-pro)|[Npmjs.org Private Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-fontawesome-pro)|
|extjs-pkg-plyr|ExtJS Open Tooling|[GitHub](https://github.com/spmeesseman/extjs-pkg-plyr)|[Npmjs.org Registry](https://www.npmjs.com/package/extjs-pkg-plyr)|
|extjs-pkg-tinymce|ExtJS Open Tooling|[GitHub](https://github.com/spmeesseman/extjs-pkg-tinymce)|[Npmjs.org Registry](https://www.npmjs.com/package/extjs-pkg-tinymce)|
|extjs-pkg-websocket|ExtJS Open Tooling|[GitHub](https://github.com/spmeesseman/extjs-pkg-websocket)|[Npmjs.org Registry](https://www.npmjs.com/package/extjs-pkg-websocket)|
|extjs-pkg-webworker|ExtJS Open Tooling|[GitHub](https://github.com/spmeesseman/extjs-pkg-webworker)|[Npmjs.org Registry](https://www.npmjs.com/package/extjs-pkg-webworker)|
|extjs-server-net|ExtJS Open Tooling|SVN (Private)|Private|
|extjs-theme-graphite-small|ExtJS Open Tooling|[GitHub](https://github.com/spmeesseman/extjs-theme-graphite-small)|[Npmjs.org Private Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-graphite-small)|
|extjs-theme-amethyst|ExtJS Open Tooling|[GitHub](https://github.com/spmeesseman/extjs-theme-amethyst)|[Npmjs.org Registry](https://www.npmjs.com/package/extjs-theme-amethyst)|
|svn-scm-ext|Visual Studio Code|[GitHub](https://github.com/spmeesseman/svn-scm-ext)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.svn-scm-ext)|
|vscode-taskexplorer|Visual Studio Code|[GitHub](https://github.com/spmeesseman/vscode-taskexplorer)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.vscode-taskexplorer)|
|vscode-vslauncher|Visual Studio Code|[GitHub](https://github.com/spmeesseman/vscode-vslauncher)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.vscode-vslauncher)|
