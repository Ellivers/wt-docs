---
sidebar_position: 2
---

import MCFont from '@site/src/components/minecraft-font'

# Hooks

A hook is a function tag under the path `worldtool:hooks/`. WorldTool has a lot of different hooks that allow you to enter your own code to add to or change various things.

If you have a request for a hook to add, please open an [issue](https://github.com/Ellivers/WorldTool/issues) on the GitHub page.

## Usage
To use a hook, first create a function file. Then, from the root of your data pack, make sure you have the folder `data/worldtool/tags/functions/hooks/` created. Inside that folder, then create a `.json` file with the path/file name of the hook name, and with the following content:

```json
{
    "values": [
        "myplugin:example_function"
    ]
}
```

With `myplugin:example_function` being replaced with the resource path to the function you created.

## List of Hooks
A list of all hooks and their potential uses, in alphabetical order. <span style={{ fontSize: '.3em' }}>Why do I do this to myself?</span><br></br>
Search for the hook paths within the WorldTool data pack to find more context on how to use them.

#### `check_cmd_processes`
This hook is called when the validity of the entered process data is checked.<br></br>
The process data is available through the storage `worldtool:storage`'s value `CmdProcess`.

#### `cmd/start`
This hook is called when a process not tied to a user is started.<br></br>
Set the `#commonStart worldtool` score to `0` to prevent the common start function from loading, allowing you to run your own function. The started process is available to read through the storage `worldtool:storage`'s value `Temp.Process`.

#### `drop_tool`
This hook is called when a tool is dropped.<br></br>
The dropped item is available through the storage `worldtool:storage`'s value `Temp.Item`.

#### `give_tools`
This hook is called when the WorldTool tools are given.

#### `greenery/brush/check_source`
This hook is called when the plant source selection menu is about to be opened with the Brush Tool.<br></br>
Here, you can add a tag corresponding to your custom plant source(s) if they are selected in order to display them as selected in the menu that is about to be opened.

#### `greenery/brush/display_current_source`
This hook is called when the selected plant source is displayed in the main Brush Tool menu.<br></br>
Here, you can check if your custom plant source(s) are selected, and if so, display them as selected.

#### `greenery/brush/select_brush`
This hook is called when the Greenery brush is selected.<br></br>
Here, you can re-apply your custom plant source(s) if they are currently selected.

#### `greenery/brush/set_source`
This hook is called when a new plant source for the Greenery brush is selected.<br></br>
Here, you can check if your custom plant source(s)'s tag(s) are selected, and if so, apply them to the Brush Tool.

#### `greenery/brush/setup_process`
This hook is called when the Greenery process is set up with the Brush Tool.<br></br>
Here, you can check if your custom plant source(s) are selected, and if so, add the corresponding process tag(s).

#### `greenery/display_current_source`
This hook is called when the selected plant source is displayed in the General Tool's Greenery menu.<br></br>
Here, you can check if your custom plant source(s) are selected, and if so, display them as selected.

#### `greenery/list_sources`
This hook is called when all plant sources all listed.<br></br>
Here, you can list your custom plant source(s), and if they are selected, display them as such. This hook applies to the General Tool, as well as the Brush Tool.

#### `greenery/remove_source`
This hook is called when the plant source tags are removed.<br></br>
Here, you can remove the tag(s) of your custom plant source(s).

#### `greenery/setup_process`
This hook is called when the Greenery process is started with the General Tool's Greenery operation.<br></br>
Here, you can check if your custom plant source(s)'s tag(s) are selected, and if so, add the corresponding process tag(s).

#### `init_dimensions/forceload`
This hook is called when the base chunks for all the dimensions are force loaded.<br></br>
If you have a custom dimension you want to automatically initiate when WorldTool is loaded, you can force load the base chunk (27450 19) for that dimension, wait for it to load, and then place WorldTool's base blocks using the function `worldtool:technical/load/set_base_blocks`.

#### `input/entity`
This hook is called when an entity is checked for as menu input.<br></br>
Here, you can add your own check for an entity input. This code is executed as and at the user.

#### `input/primary_block`
This hook is called when a block input for the primary block slot is checked for as a General Tool input.<br></br>
If you have a custom General Tool menu that uses a primary block input, you can add a check here for when the user has that menu's tag.

#### `input/secondary_block`
This hook is called when a block input for the secondary block slot is checked for as a General Tool input.<br></br>
If you have a custom General Tool menu that uses a secondary block input, you can add a check here for when the user has that menu's tag.

#### `language/en_us`
This hook is called when the translations for the language "English (US)" are loaded.<br></br>
Here, you can add any translations you want to add in this language.

#### `language/list`
This hook is called when available languages are listed.<br></br>
If you have a custom language added, put a button for it here.

#### `language/reload`
This hook is called when translations are reloaded.<br></br>
If your plugins adds a language, you can check if that lanuage is selected, and if so, load the translations for that language.

#### `list_plugins`
This hook is called when all plugins are listed.<br></br>
List your plugin's name and other quick info here.

#### `load`
This hook is called when plugins are loaded.<br></br>
Here, you can run whatever you want to run when your plugin is loaded. Add 1 to the `$plugins worldtool` score here.

#### `measure/area_done`
This hook is called when an area's size has been calculated.

#### `measure/distance_done`
This hook is called when the distance between two points has been calculated.

#### `particles/display`
This hook is called when particles are displayed.<br></br>
If you have entities to display particles from, you can start doing so here.

#### `particles/off`
This hook is called when a user disables particles.<br></br>
If you have a custom menu that called this function, you can return to that menu here.

#### `particles/off`
This hook is called when a user enables particles.<br></br>
If you have a custom menu that called this function, you can return to that menu here.

#### `particles/player`
This hook is called when particles are displayed as a user.<br></br>
Here, you can display your own particles.

#### `particles/shape_previews`
This hook is called when shape preview particles are displayed.<br></br>
If you have a custom shape, you can call a function to display a preview from here.

#### `pick_block/finish`
This hook is called when picking a block and putting it into data has been finished.<br></br>
If you have your own menu that starts the block picking, you can return to it from here.

#### `pick_block/remove_tags`
This hook is called when the tags for returning from picking a block and putting it into data are removed.<br></br>
If you add a tag to return from this function, you can remove it here.

#### `plugin_blocks_per_tick_list`
This hook is called when the blocks per tick values for plugin processes are listed.<br></br>
If you have a custom process with blocks per tick data, list it here.

#### `plugin_settings`
This hook is called when settings added by plugins are listed.<br></br>
If you have a custom setting, list it here.

#### `process/adjust_progress_bar_value`
This hook is called when the progress bar's value is updated.<br></br>
You can adjust the `#blocksChecked worldtool` score here to affect how much is added to the value.

#### `process/check_tags`
This hook is called when tags are checked for which process function to run.<br></br>
Here, you can check for the tags of and run any custom processes you've added.

#### `process/continue`
This hook is called when a process is continued instead of ending.<br></br>
Here, you can add commands to run when a process with the `wt.dont_end` tag continues.

#### `process/end`
This hook is called when a process is ended.

#### `process/final_code`
This hook is called before a process is either ended or continued.

#### `process/greenery/check_base`
This hook is called when the Greenery process checks if the base block is valid.<br></br>
If you have a custom greenery plant source with a non-standard base block requirement, you can check for it here.

#### `process/greenery/plant_tables`
This hook is called when the Greenery process checks what plant table to use.<br></br>
If you have a custom greenery plant source, you can call its plant table function here.

#### `process_message/display`
This hook is called when a process message is displayed before it either ends or continues.<br></br>
Here, you can display a custom message for your own process. If you add the `wt.message.custom_display` tag, you can disable all standard WorldTool messages that use plural for anything not 1, and singular for 1, in case you're working on translations for a language that does not follow those rules.

#### `process_start/brush/area/add_tags`
This hook is called when the type of area to select is decided.<br></br>
Here, you can remove the `wt.brush_area.flat` and `wt.brush_area.normal` tags and then add whichever tag you want.

#### `process_start/brush/area/remove_tags`
This hook is called when the tags that decide the type of area to select are removed.<br></br>
Here, you can call you own area selection and remove any custom area selection tags you have.

#### `process_start/brush/check`
This hook is called when the brush checks what start system to use.<br></br>
If you have a custom start system, you can call that here.

#### `process_start/brush/normal_start/processes`
This hook is called when the processes for the normal brush start system are set up.<br></br>
Here, you can set up your own custom process, if it's selected.

#### `process_start/brush/start`
This hook is called when the way the brush should be started is decided.<br></br>
If you have a custom brush, you check if it's selected here, and if so, call the appropriate function.

#### `process_start/common/continue1`
This hook is called when the common starting system is continued from the first continue point.

#### `process_start/common/continue2`
This hook is called when the common starting system is continued from the second continue point.

#### `process_start/common/load`
This hook is called when the common starting system is loaded, after the validity of the selected positions is checked.<br></br>
You might want to check if the `#success worldtool` score matches 1 before running any commands here, to ensure that the position validity check suceeded.

#### `process_start/common/setup_process.entity`
This hook is called when entities input data to the process being set up, in the common starting system.<br></br>
If you have an entity to get data from, you can do that here, with the entity being `@s`.

#### `process_start/common/setup_process`
This hook is called when processes are set up with the common starting system.<br></br>
If you have a custom process to set up, you can the appropriate function here if the correct tag is active.

#### `process_start/common/setup_progress_bar`
This hook is called when the progress bar is set up through the common starting system.<br></br>
If you have any custom values that should be applied to the progress bar, you can do so here.

#### `process_start/common/start`
This hook is called when the process is about to be started through the common starting system.

#### `process_start/from_queue`
This hook is called when a process start is continued after being queued.<br></br>
If you have a custom starting system, you can continue it from here.

#### `process_start/process_entity_setup`
This hook is called when the process entity is being set up.<br></br>
This code is executed as the process entity.

#### `process_start/secondary_process_entity_setup`
This hook is called when the secondary process entity is being set up.<br></br>
This code is executed as the secondary process entity.

#### `process_start/shapes/processes`
This hook is called when the processes for the Shape Generation Tool are set up.<br></br>
Here, you can call the appropriate function if you have to a custom shape to set up.

#### `process_start/variables`
This hook is called when variables to use in the process are set.<br></br>
If you have your own data or scores to set up, you can do so here.

#### `remove_player_tags`
This hook is called when all player tags are removed from `@s`.<br></br>
If you have any custom tags added to players that are not removed in other places, remove them here.

#### `save_load/area_loaded`
This hook is called when the Load Area process has been completed.<br></br>
If you have a custom purpose tag for a Load Area process, you can run your desired end-of-process commands here. If you loaded your own backup slots and are not planning on using them anymore, please restock them.

#### `save_load/area_saved`
This hook is called when the Save Area process has been completed.<br></br>
If you have a custom purpose tag for a Save Area process, you can run your desired end-of-process commands here.

#### `save_load/remove_load_tags`
This hook is called when purpose tags for the Load Area process are removed.<br></br>
If you have a custom purpose tag for the Load Area process, you can remove it here.

#### `save_load/remove_save_tags`
This hook is called when purpose tags for the Save Area process are removed.<br></br>
If you have a custom purpose tag for the Save Area process, you can remove it here.

#### `save_load/setup_load_process`
This hook is called when Load Area process is set up.<br></br>
If you have a custom purpose tag for the Load Area process and/or area data to load, you can add it to the process data here.

#### `save_load/setup_save_process`
This hook is called when Save Area process is set up.<br></br>
If you have a custom purpose tag for the Save Area process, you can add it to the process data here.

#### `setup_blocks_per_tick`
This hook is called when blocks per tick data is set up.<br></br>
If you have a custom process, you can add blocks per tick data for it here.

#### `ui/back_using_tags`
This hook is called when dynamically going to back to the menu before the current one.<br></br>
If you have a custom menu that you want to go back to another one, you can do that from here.

#### `ui/block_selected`
This hook is called when a new block is selected with either the Brush Tool or the Shape Generation Tool.

#### `ui/close`
This hook is called when a menu is closed.<br></br>
Here, you can remove anyting you want gone when closing a menu.

#### `ui/queue_leave`
This hook is called when leaving the queue.

#### `ui/remove_menu_tags`
This hook is called when UI menu tags are removed.<br></br>
If you have a tag to remove while moving between menus, you can do so here.

#### `ui/remove_return_tags`
This hook is called when tags used in menus that can be returned from are removed.<br></br>
If you have a tag to remove that was used in a returnable-from menu, you can do so here.

#### `ui/reopen_menu/after_error`
This hook is called when WorldTool attempts to reopen a menu (after an error).<br></br>
If you have a custom menu and want it to support reopening after errors, add a check for the menu's tag here.

#### `ui/reopen_menu/after_process`
This hook is called when WorldTool attempts to reopen a menu (after a process has been completed).<br></br>
If you have a custom menu and want it to support reopening after processes being completed, add a check for the menu's tag here.

#### `ui/reopen_menu/after_reload`
This hook is called when WorldTool attempts to reopen a menu (after WorldTool has been reloaded).<br></br>
If you have a custom menu and want it to reopen after the data pack has been reloaded, add a check for the menu's tag here.

#### `ui/reopen_menu/after_starting`
This hook is called when WorldTool attempts to reopen a menu (after starting a process).<br></br>
If you have a custom menu and want it to support reopening after processes starts, add a check for the menu's tag here.

#### `ui/reopen_menu/from_submenu`
This hook is called when WorldTool attempts to reopen a menu (from inside a submenu of that menu).<br></br>
If you have a custom menu that uses a non-menu-specific submenu and want it to support reopening the parent menu, add a check for the parent menu's tag here.

#### `ui/return.back`
This hook is called when the user backs out from a returnable-from menu.<br></br>
If you have a custom menu that opened a returnable-from menu, you can go back to that menu from here.

#### `ui/return`
This hook is called when succesfully returning from a returnable-from menu.<br></br>
If you have a custom menu that opened a returnable-from menu, you can run the commands for success here.

#### `ui/undo_redo/undo`
This hook is called after the last action has been undone.<br></br>
If you have a custom menu that uses the undo/redo buttons, you can return to that menu from here.

#### `ui/undo_redo/redo`
This hook is called after the last undone action has been redone.<br></br>
If you have a custom menu that uses the undo/redo buttons, you can return to that menu from here.

#### `ui_brush/brush_list`
This hook is called when all brushes are listed.<br></br>
Here, you can display any custom brushes as buttons.

#### `ui_brush/menu/add_tags`
This hook is called when the tags for which UI elements to display in the main Brush Tool menu are added.<br></br>
If you have a custom brush, you can add or remove the appropriate tags for it here.

#### `ui_brush/menu/display_brush`
This hook is called when the selected brush is displayed.<br></br>
If you have a custom brush, you can display it here when it's selected.

#### `ui_brush/menu/display_settings`
This hook is called when the brush settings are displayed.<br></br>
If you have a custom brush or custom brush setting, you can display the appropriate settings here.

#### `ui_brush/menu/remove_tags`
This hook is called when the tags for which UI elements to display in the main Brush Tool menu are removed.<br></br>
If you have any custom tags you've added, you can remove them here. You can also display custom buttons for the bottom of the menu here.

#### `ui_brush/remove_ui_tags`
This hook is called when all tags related to the Brush Tool are removed.<br></br>
Here, you can remove any custom brush tags you've added and not already removed.

#### `ui_general/plugin_page`
This hook is called when the plugin page of the General Tool menu is displayed.<br></br>
If you have a custom General Tool operation, you can display a button for it here.

#### `ui_general/remove_submenu_tags.mandatory`
This hook is called when tags used by submenus of the General Tool main menu that have to be removed are removed.<br></br>
If you have a custom menu with a tag that has to be removed when exiting the menu, remove it here.

#### `ui_general/remove_submenu_tags.other`
This hook is called when all tags used by submenus of the General Tool main menu are removed.<br></br>
Called only if the Keep Menu Options setting is off. Remove tags of your custom menu here.

#### `ui_general/remove_visited_tags`
This hook is called when tags storing which General Tool menus have been visited are removed.<br></br>
Called when the Keep Menu Options setting is switched off. If you have a custom menu that uses a tag to remember if users have visited that menu, remove the tag here.

#### `ui_general/toggle_keep`
This hook is called when the <MCFont color="#0aad02">[Keep]</MCFont> option is toggled.<br></br>
If you have a menu that displays this option, you can return to that menu from here.

#### `ui_general/two_block_query/display_1`
This hook is called when the secondary block selection of the two block query menu is displayed.<br></br>
If you have a custom message for this menu, you can display it here.

#### `ui_general/two_block_query/display_2`
This hook is called when the primary block selection of the two block query menu is displayed.<br></br>
If you have a custom message for this menu, you can display it here.

#### `ui_shapes/add_preview_tags`
This hook is called when tags are added to the entity responsible for the shape preview.<br></br>
If you have a custom shape, you can add the appropriate tags here. The Shape Generation Tool data is available through the storage `worldtool:storage`'s value `Temp.ShapeTool`.

#### `ui_shapes/menu/add_tags`
This hook is called when the tags for which UI elements to display in the main Shape Generation Tool menu.<br></br>
If you have a custom shape, you can add or remove the appropriate tags for it here.

#### `ui_shapes/menu/display_settings`
This hook is called when the shape settings are displayed.<br></br>
If you have a custom shape or custom shape setting, you can display the appropriate settings here.

#### `ui_shapes/menu/display_shape`
This hook is called when the selected shape is displayed.<br></br>
If you have a custom shape, you can display it here when it's selected.

#### `ui_shapes/menu/remove_tags`
This hook is called when the tags for which UI elements to display in the main Shape Generation Tool menu are removed.<br></br>
If you have any custom tags you've added, you can remove them here.

#### `ui_shapes/remove_preview_tags`
This hook is called before new tags are added to the entity responsible for the shape preview.<br></br>
If you have added any tags, you can remove them here.

#### `ui_shapes/remove_ui_tags`
This hook is called when all tags related to the Shape Generation Tool are removed.<br></br>
Here, you can remove any custom shape tags you've added and not already removed.

#### `ui_shapes/set_preview_axes`
This hook is called when the available axes are decided for the shape previe.

#### `ui_shapes/shape_lists`
This hook is called when all available shapes are listed.<br></br>
If you have a custom shape, you can list it here as a button.

#### `use_tool/add_tags`
This hook is called when tags for the right-clicked tool are added.<br></br>
The `wt.raycast_normal` and `wt.raycast_before` tags can be removed/added to decide which type of raycast to use.

#### `use_tool/ray_hit/all`
This hook is called when the raycasting of right-clicking a tool hits a block.

#### `use_tool/ray_hit/general`
This hook is called when the raycasting of right-clicking a General Tool hits a block.

#### `use_tool/remove_tags`
This hook is called when tags for the right-clicked tool are removed.<br></br>
If you have any custom tags added in the corresponding `add_tags` hook, you can remove them here.

#### `use_tool/update_block/add_tags`
This hook is called when tags for which blocks to update from data are added.<br></br>
Here, you can add or remove the `wt.block.primary` and `wt.block.secondary` tags. The blocks to place are availalable through the storage `worldtool:storage`'s value `Temp.Blocks`.

#### `use_tool/update_block/finish`
This hook is called when the loading of blocks from data is finished.

#### `use_tool/update_block/remove_tags`
This hook is called when tags for which blocks to update from data are removed.<br></br>
If you have any custom tags added in the corresponding `add_tags` hook, you can remove them here.
