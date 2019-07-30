---
id: cli-command-new
title: rg new
---

Creates a new workspace and an initial React App along with webpack bundled with it.

rg **new** `<app_name>`

## Description

It creates and initializes a new React application that is a default project of the new workspace.

Also it provides interactive prompts for the initial _(Optional)_ configuration, such as *Author Name*. All prompt can be allowed to default.

* The workspace folder is given the specified project name and contain other configuration files on the same level. _(We are going to refer this as root)_

* By default the files which gets generates in the workspace directory can be found on [folder structure](./folder-structure-for-new-app.md).

## Arguments

Argument | Description |
---------|----------|
 _name_ | The name of the new workspace and initial project. |
