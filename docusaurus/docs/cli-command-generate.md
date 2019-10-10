---
id: cli-command-generate
title: regauge generate
---

Generates and/or modifies files based on a task.

regauge **generate** `<task>` `<name>` [_options_]

regauge **g** `<task>` `<name>` [_options_]

## Description

It generates the required element based on the task name.

> Note that, for now we are only supporting **component, style** generating task.

## Arguments

Argument | Description |
---------|----------|
 _task_ | The task or collection of tasks to generate. Check the [currently supported tasks](#task-commands). |

## Options

Argument | Description |
---------|----------|
--style=scss | Generates specific stylesheet file along with the component. NOTE THAT: WE ARE ONLY SUPPORTING SCSS FILE FOR NOW. |
--help | Shows a help message for this command in the console. |

---

## Task commands

### Component

regauge generate **component** `<name>` [_options_]

regauge g **component** `<name>` [_options_]

#### Description

Creates a new generic component definition in the given or default project.

The component will be created in the current working directory.

#### Arguments

Argument | Description |
---------|----------|
 _name_ | The name of the component. |

### Style

regauge generate **style** `<name>` [_options_]

regauge g **style** `<name>` [_options_]

#### Description

Creates a new stylesheet file in the given or default project.

The stylesheet will be created in the current working directory.

> WE ARE ONLY SUPPORTING `SCSS` FILE FOR NOW.

#### Arguments

Argument | Description |
---------|----------|
 _name_ | The name of the stylesheet. |
