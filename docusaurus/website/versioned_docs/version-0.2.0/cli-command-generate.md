---
id: version-0.2.0-cli-command-generate
title: rg generate
original_id: cli-command-generate
---

Generates and/or modifies files based on a task.

rg **generate** `<task>` `<name>`

rg **g** `<task>` `<name>`

## Description

It generates the required element based on the task name.

> Note that, for now we are only supporting **component** generating task.

## Arguments

Argument | Description |
---------|----------|
 _task_ | The task or collection of tasks to generate. Check the [currently supported tasks](#task-commands). |

---

## Task commands

### Component

rg generate **component** `<name>`

rg g **component** `<name>`

#### Description

Creates a new generic component definition in the given or default project.

The component will be created in the current working directory.

#### Arguments

Argument | Description |
---------|----------|
 _name_ | The name of the component. |
