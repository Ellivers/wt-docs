---
sidebar_position: 7
---

# Shapes

Shapes are generated with specified properties using the Shape Generation Tool

## Making a Shape

Step-by step instructions on how to make a new shape for the Shape Generation Tool.

1. Make a new item modifier for selecting your shape.
    
    Example of a shape item modifier:
    
    ```json
    [
        {
            "function": "minecraft:set_nbt",
            "tag": "{WorldTool:{Shape:\"myplugin:example\"}}"
        },
        {
            "function": "minecraft:set_lore",
            "lore": [
                {"nbt":"Translation.\"myplugin.info.selected_shape.example\"","storage": "worldtool:storage","color": "yellow","italic": false},
                {"nbt":"Translation.\"lore.selected_block\"","storage": "worldtool:storage","color": "light_purple","italic": false},
                {"nbt":"SelectedItem.tag.WorldTool.PrimaryBlock.State.Name", "entity": "@s","color": "aqua","italic": false},
                "",
                {"nbt":"Translation.\"lore.shape_tool.normal.1\"","storage": "worldtool:storage","interpret": true,"italic": false},
                {"nbt":"Translation.\"lore.shape_tool.normal.2\"","storage": "worldtool:storage","interpret": true,"italic": false},
                {"nbt":"Translation.\"lore.shape_tool.normal.3\"","storage": "worldtool:storage","interpret": true,"italic": false}
            ],
            "entity": "this",
            "replace": true
        }
    ]
    ```

    The parts you need to pay attention to are:

    * The `Shape` ID.
    * The first [translation](translations#adding-translations-to-existing-languages) in the `"lore"` list.

2. Make a new function for running when your shape is selected.
    
    Example of a shape selection function:

    ```mcfunction
    # Called by worldtool:ui_shapes/select_shape/menu
    # Example of a shape selection function

    # This is used to make sure the user is holding the Shape Generation Tool
    function worldtool:ui_shapes/check_tool

    # Call your item modifier
    item modify entity @s weapon.mainhand myplugin:example_shape

    # Go back to the main Shape Generation Tool menu
    function worldtool:ui_shapes/menu
    ```

3. Make a new predicate for checking when your shape is selected.

    Example of a shape predicate:

    ```json
    {
        "condition": "minecraft:entity_properties",

        "entity": "this",
        "predicate": {
            "equipment": {
                "mainhand": {
                    "nbt": "{WorldTool:{Shape:\"myplugin:example\"}}"
                }
            }
        }
    }
    ```

4. Use the [`ui_shapes/shape_list` hook](hooks#ui_shapesshape_list) to display a button for your shape, which when clicked calls the function you made for it. Use the predicate you made to display a grayed out button when the shape is already selected.

5. Use the [`ui_shapes/menu/add_tags` hook](hooks#ui_shapesmenuadd_tags) to remove or add the settings you want to have available in the menu. The full list of tags is:
  
  `wt.setting.diameter` (Default = available)<br></br>
  `wt.setting.precision` (Default = available)<br></br>
  `wt.setting.orientation` (Default = available)<br></br>
  `wt.setting.degrees` (Default = available)<br></br>
  `wt.setting.length` (Default = unavailable)<br></br>
  `wt.setting.y_rotation` (Default = available)<br></br>
  `wt.setting.x_rotation` (Default = available, depends on orientation)<br></br>
  `wt.setting.z_rotation` (Default = available, depends on orientation)<br></br>
  `wt.setting.hollow` (Default = available)<br></br>
  `wt.setting.keep` (Default = available)<br></br>
  `wt.setting.continuous` (Default = available)<br></br>
  `wt.setting.secondary_degrees` (Default = unavailable)<br></br>

6. Make another function, to set up your shape process.

    ```mcfunction
    # Example of a process setup function

    # Tell the function that sets up all the processes that everything is alright
    scoreboard players set #success worldtool 1

    data modify storage worldtool:storage Processes prepend value {DisplayName:'{"nbt":"Translation.\\"myplugin.process.brush.example\\"","storage":"worldtool:storage"}',ID:"myplugin:example",Tags:["myplugin.process.example","wt.no_message"]}
    # If you have set up blocks per tick data for this process
    data modify storage worldtool:storage Processes[0].BlocksPerTick set from storage worldtool:storage BlocksPerTick.Processes[{ID:"worldtool:paint"}].Value

    function worldtool:process_start/brush/start/normal/setup_process/set_process_values
    ```

7. Use the [`process_start/shapes/processes` hook](hooks#process_startshapesprocesses) to check if your shape is selected with its predicate, and if so, run your process setup function.

8. [Follow these steps to make your process work](processes#setting-up-files), and you're all set!

## Extra: Making a Preview

Instructions on how to make a preview with particles for your shape.

1. Use the [`ui_shapes/add_preview_tags` hook](hooks#ui_shapesadd_preview_tags) to add the preview tags you need. For example:

    ```mcfunction word-wrap
    # Example preview tags to add

    execute if data storage worldtool:storage Temp.ShapeTool{Shape:"myplugin:example",ShapeSettings:{Orientation:"up"}} run tag @s add myplugin.shape.example.up
    execute if data storage worldtool:storage Temp.ShapeTool{Shape:"myplugin:example",ShapeSettings:{Orientation:"down"}} run tag @s add myplugin.shape.example.down
    execute if data storage worldtool:storage Temp.ShapeTool{Shape:"myplugin:example"} unless data storage worldtool:storage Temp.ShapeTool.ShapeSettings{Orientation:"up"} unless data storage worldtool:storage Temp.ShapeTool.ShapeSettings{Orientation:"down"} run tag @s add myplugin.shape.example.horizontal
    ```

2. Use the [`ui_shapes/remove_preview_tags` hook](hooks#ui_shapesremove_preview_tags) to remove all possible tags you added in the previous step.

3. Use the [`particles/shape_previews` hook](hooks#particlesshape_previews) to check for your tag(s) and run your preview functions based off that.

    You can use the `particle minecraft:dust 0.671 0.161 0.875 1.5 ~ ~ ~ 0 .3 0 2 3 force @a[tag=wt.shape_preview_temp]` command to display particles.
    
    There are also useful functions to aid you with displaying a shape, such as `worldtool:particles/shape_preview/circle_horizontal/line/load`, `worldtool:particles/shape_preview/circle_horizontal/rotation/load`, and `worldtool:particles/shape_preview/circle_vertical/load`.
    
    The shape settings are available through `@s`'s `data.WorldTool.ShapeSettings` data.
