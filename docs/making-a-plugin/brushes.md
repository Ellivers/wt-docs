---
sidebar_position: 6
---

# Brushes

Step-by-step instructions on how to make a brush for the Brush Tool:

1. Make a new item modifier for selecting your brush.
    
    Example of a brush item modifier:
    
    ```json
    [
        {
            "function": "minecraft:set_nbt",
            "tag": "{WorldTool:{Brush:\"myplugin:example\",BrushSettings:{Requires:[\"block\",\"area\"],MaxSize:39}}}"
        },
        {
            "function": "minecraft:set_lore",
            "lore": [
                {"nbt":"Translation.\"myplugin.lore.selected_brush.example\"","storage": "worldtool:storage","color": "yellow","italic":   false},
                {"nbt":"Translation.\"lore.selected_block\"","storage": "worldtool:storage","color": "light_purple","italic": false},
                {"nbt":"SelectedItem.tag.WorldTool.PrimaryBlock.State.Name", "entity": "@s","italic": false},
                "",
                {"nbt":"Translation.\"lore.brush.1\"","storage": "worldtool:storage","interpret": true,"italic": false},
                {"nbt":"Translation.\"lore.brush.2\"","storage": "worldtool:storage","interpret": true,"italic": false}
            ],
            "entity": "this",
            "replace": true
        }
    ]
    ```

    The parts you need to pay attention to are:

    * The `Brush` ID.
    * The `Requires` list, which specifies what the brush needs to use. The available requirements are `block` and `area`.
    * The first [translation](translations#adding-translations-to-existing-languages) in the `"lore"` list.

2. Make a new function for running when your brush is selected.
    
    Example of a brush selection function:

    ```mcfunction
    # Called by worldtool:ui_brush/select_brush/menu
    # Example of a brush selection function

    # This is used to make sure the user is holding the Brush Tool
    function worldtool:ui_brush/check_tool

    # Call your item modifier
    item modify entity @s weapon.mainhand myplugin:example_brush
    function worldtool:ui/sound.change_item

    # Options you want to change when your brush is selected
    item modify entity @s weapon.mainhand worldtool:brush_tool/settings/before_block/off
    #(...)

    # Go back to the main Brush Tool menu
    function worldtool:ui_brush/menu
    ```

3. Make a new predicate for checking when your brush is selected.

    Example of a brush predicate:

    ```json
    {
        "condition": "minecraft:entity_properties",

        "entity": "this",
        "predicate": {
            "equipment": {
                "mainhand": {
                    "nbt": "{WorldTool:{Brush:\"myplugin:example\"}}"
                }
            }
        }
    }
    ```

4. Use the [`ui_brush/brush_list` hook](hooks#ui_brushbrush_list) to display a button for your brush, which when clicked calls the function you made for it. Use the predicate you made to display a grayed out button when the brush is already selected.

5. Use the [`ui_brush/menu/add_tags` hook](hooks#ui_brushmenuadd_tags) to remove or add the settings you want to have available in the menu. The full list of tags is:
  
  `wt.setting.brush_size` (Default = available)<br></br>
  `wt.setting.hollow` (Default = unavailable)<br></br>
  `wt.setting.overwrite` (Default = unavailable)<br></br>
  `wt.setting.structure` (Default = unavailable)<br></br>
  `wt.setting.before_block` (Default = available)<br></br>
  `wt.setting.structure` (Default = unavailable)<br></br>
  `wt.setting.structure_rotation` (Default = unavailable)<br></br>
  `wt.setting.structure_mirror` (Default = unavailable)<br></br>
  `wt.setting.structure_offset` (Default = unavailable)<br></br>
  `wt.setting.greenery_rate` (Default = unavailable)<br></br>
  `wt.setting.remove_current_greenery` (Default = unavailable)<br></br>
  `wt.setting.flat` (Default = unavailable)<br></br>
  `wt.setting.axis` (Default = unavailable)<br></br>
  `wt.setting.update_block` (Default = available)<br></br><br></br>
  `wt.brush_selections.normal` (Default = available)<br></br>

6. Use the [`process_start/brush/start` hook](hooks#process_startbrushstart) to check if your brush is selected with its predicate, and if so, run a function to use the brush. If you want to use a process for it, call the `worldtool:process_start/brush/start/normal/start` function and proceed to the next step. If not, this is the end of the instructions.

7. Make another function, to set up your brush process.

    ```mcfunction
    # Example of a process setup function

    # Tell the function that sets up all the processes that everything is alright
    scoreboard players set #success worldtool 1

    data modify storage worldtool:storage Processes prepend value {DisplayName:'{"nbt":"Translation.\\"myplugin.process.brush.example\\"","storage":"worldtool:storage"}',ID:"myplugin:example",Tags:["myplugin.process.example","wt.no_message"]}
    # If you have set up blocks per tick data for this process
    data modify storage worldtool:storage Processes[0].BlocksPerTick set from storage worldtool:storage BlocksPerTick.Processes[{ID:"worldtool:paint"}].Value

    function worldtool:process_start/brush/start/normal/setup_process/set_process_values
    ```

8. Use the [`process_start/brush/normal_start/processes` hook](hooks#process_startbrushnormal_startprocesses) to check if your brush is selected with its predicate, and if so, run your process setup function.

9. [Follow these steps to make your process work](processes#setting-up-files), and you're all set!
