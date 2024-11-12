---
sidebar_position: 5
---

# General Tool Operations

To add a button to either open your operation menu or start your operation, use the [`ui_general/plugin_page` hook](hooks#ui_generalplugin_page).

## Menu
A General Tool operation menu can look something like this:

```mcfunction
# Example starting menu for a General Tool operation

function worldtool:ui/clear_chat

# Don't forget to remove this tag with the "ui/remove_menu_tags" hook
tag @s add myplugin.menu.example

# Back button specifically for going back to the General Tool's main menu
# For non-specific back buttons, use worldtool:ui/back_button and the "ui/back_using_tags" hook
function worldtool:ui_general/back_button

# Display the menu itself
tellraw @s {"nbt":"Translation.\"myplugin.some_menu_text\"","storage":"worldtool:storage"}

# Display a close button
function worldtool:ui/close_button

# This makes the feedback message not show up for this function
function worldtool:ui/anti_feedback_chat_message/load
```

## Block Selection
If you want a [block selection menu](../chat-menu-system#block-selection) directly on your main menu, call the `primary`, `secondary` or `both` function inside `worldtool:ui_general/input/start/`, and then use the [`input/primary_block`](hooks#inputprimary_block) and/or [`input/secondary_block`](hooks#inputsecondary_block) hooks to run something when a block is selected.

## Start
General Tool operations are started with a function that adds a setup tag and runs the function `worldtool:process_start/general/load`. Make sure to remove the tag in the [`ui/remove_menu_tags` hook](hooks#uiremove_menu_tags).

```mcfunction
# Example of an operation starting function
tag @s add mplugin.setup.example
function worldtool:process_start/general/load
```

## Set Up Process
Use the [`process_start/common/setup_process` hook](hooks#process_startcommonsetup_process) to check for your setup and run a function to set up your process.

```mcfunction
# Example of a process setup function

# Tell the function that sets up all the processes that everything is alright
scoreboard players set #success worldtool 1

# Set the data for the process
data modify storage worldtool:storage Processes prepend value {ProcessName:'{"nbt":"Translation.\"myplugin.process.example\"","storage":"worldtool:storage"}',ID:"myplugin:example",Tags:["myplugin.process.example"]}
# If you have set up blocks per tick data for this process
data modify storage worldtool:storage Processes[0].BlocksPerTick set from storage worldtool:storage BlocksPerTick.Processes[{ID:"myplugin:example"}]

# General data that all processes share
function worldtool:process_start/general/set_process_values

# Remove the setup tag
tag @s remove myplugin.setup.example

# This last line is unneeded if your process does not affect any blocks
function worldtool:technical/save_load/backup/load
```

If you want your menu to re-open after the process has started, use the [`ui/reopen_menu/after_starting` hook](hooks#uireopen_menuafter_starting).

## Run Process
Main page: [Processes](processes).
