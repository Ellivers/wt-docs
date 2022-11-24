---
sidebar_position: 2
---

# Hooks

A hook is a function tag under the path `worldtool:hooks/`. WorldTool has a lot of different hooks that allow you to enter your own code to add to or change various things.

## List of Hooks
A list of all hooks and their potential uses, in alphabetical order. <span style={{ fontSize: '.3em' }}>Why do I do this to myself?</span><br></br>
Search for the hook paths within the WorldTool data pack to find more context on how to use them.

#### `cmd/start`
This hook is called when a process not tied to a user is started.<br></br>
Set the `#commonStart worldtool` score to `0` to prevent the common start function from loading, allowing you to run your own function. The started process is available to read through the storage `worldtool:storage`'s value `Temp.Process`.

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

#### `language/reload`
This hook is called when translations are reloaded.<br></br>
If your plugins adds a language, you can check if that lanuage is selected, and if so, load the translations for that language.

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

#### `process/greenery/check_base`
This hook is called when the Greenery process checks if the base block is valid.<br></br>
If you have a custom greenery plant source with a non-standard base block requirement, you can check for it here.

#### `process/greenery/plant_tables`
This hook is called when the Greenery process checks what plant table to use.<br></br>
If you have a custom greenery plant source, you can call its plant table function here.

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

#### `process_message/display`
This hook is called when a process message is displayed before it either ends or continues.<br></br>
Here, you can display a custom message for your own process. If you add the `wt.message.custom_display` tag, you can disable all standard WorldTool messages that use plural for anything not 1, and singular for 1, in case you're working on translations for a language that does not follow those rules.

#### `process_start/brush/area/add_tags`
This hook is called when the type of area to select is decided.<br></br>
Here, you can remove the `wt.brush_area.flat` and `wt.brush_area.normal` tags and then add whichever tag you want.

#### `process_start/brush/area/remove_tags`
This hook is called when the tags that decide the type of area to select are removed.<br></br>
Here, you can call you own area selection and remove any custom area selection tags you have.

#### `process_start/brush/normal_start/processes`
This hook is called when the processes for the normal brush start system are set up.<br></br>
Here, you can set up your own custom process, if it's selected.

#### `process_start/brush/check`
This hook is called when the brush checks what start system to use.<br></br>
If you have a custom start system, you can call that here.

#### `process_start/brush/start`
This hook is called when the way the brush should be started is decided.<br></br>
If you have a custom brush, you check if it's selected here, and if so, call the appropriate function.

#### `process_start/shapes/processes`
This hook is called when the processes for the Shape Generation Tool are set up.<br></br>
Here, you can call the appropriate function if you have to a custom shape to set up.

#### `process_start/common_load`
This hook is called when the common starting system is loaded.
