---
sidebar_position: 1
---

# Processes
A process is some code that repeats itself and is run every tick until it's done.

Processes can store blocks they use in the chunk at 27450 19.

## Process Data
A process is started by inputting a compound with some data.
#
**Manually set:**<br></br>
`ID` (String) - The process ID<br></br>
`DisplayName` (String) - A string containing JSON text of the process name.<br></br>
`Tags` (List) - Tags to add to the process entity.<br></br>
`SecondaryTags` (List, optional) - Tags to add to a secondary process entity.<br></br>
`Input` (Compound, optional) - Additional input data the process might want.<br></br>
`Output` (Compound, optional) - If the process provides output, this is where it is put.<br></br>
`BlocksPerTick` (Integer, optional (if not set, will default to maximum integer)) - The [blocks per tick](../configuration#blocks-per-tick) to use for this process.<br></br>
`Volume` (Integer, used by shape generation processes) - The rough size of the finished shape.<br></br>
**Automatically set:**<br></br>
`StartType` (String, default options are `worldtool:common`, `worldtool:general`, `worldtool:brush`, or `worldtool:shape`) - What system to use for starting the process.<br></br>
`Positions` (Compound, not used by single-position processes) - Some positions to use.<br></br>
&emsp;&emsp;`1` (List of 3 doubles) - The first corner.<br></br>
&emsp;&emsp;`2` (List of 3 doubles) - The second corner.<br></br>
&emsp;&emsp;`Secondary` (List of 3 doubles, optional) - Starting position for a secondary process entity.<br></br>
`BlockPositions` (Compound, used by most General Tool processes) - From which positions to grab process blocks.<br></br>
&emsp;&emsp;`Primary` (List of 3 doubles, optional) - From where to grab the primary block.<br></br>
&emsp;&emsp;`Secondary` (List of 3 doubles, optional) - From where to grab the secondary block.<br></br> 
`Position` (List of 3 doubles, used by single-position processes) - Starting position.<br></br>
`Blocks` (Compound, used by most Brush Tool and Shape Generation Tool processes) - Which blocks to use as process blocks.<br></br>
&emsp;&emsp;`Primary` (Compound, optional) - The primary block.<br></br>
&emsp;&emsp;&emsp;&emsp;`State` (Compound) - The block's state.<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`Name` (String) - The block's ID.<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(Other values)<br></br>
&emsp;&emsp;&emsp;&emsp;`Data` (Compound, optional) - The block's data.<br></br>
&emsp;&emsp;`Secondary` (Compound, optional) - The secondary block.<br></br>
&emsp;&emsp;&emsp;&emsp;`State` (Compound) - The block's state.<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`Name` (String) - The block's ID.<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(Other values)<br></br>
&emsp;&emsp;&emsp;&emsp;`Data` (Compound, optional) - The block's data.<br></br>
`AffectedArea` (Compound, optional) - Information to give to the backup process, if the affected area is not within the standard positions.<br></br>
&emsp;&emsp;`From` (List of 3 doubles) - The first corner.<br></br>
&emsp;&emsp;`To` (List of 3 doubles) - The second corner.<br></br>
`Owner` (Integer, optional) - The WorldTool ID of the user that started the process.

## List of Processes
A list of all processes and their most important data. In no particular order.

&lt;&gt; around a value denotes that the value is not always there.

### Fill
The process for filling an area. Used by the General Tool's [Fill operation](../general-tool/fill) and the Brush Tool's [Place brush](../brush_tool/place).<br></br>
`ID`: `worldtool:fill`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.fill`<br></br>
]

### Replace
The process for replacing blocks in an area. Used by the General Tool's [Replace operation](../general-tool/replace).<br></br>
`ID`: `worldtool:replace`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.replace`<br></br>
&emsp;&emsp;<`wt.process.replace.normal`><br></br>
&emsp;&emsp;<`wt.process.replace.exclude`><br></br>
]

### Filter Measure
The process for counting specific blocks in an area. Used by the General Tool's [Measure > Filter operation](../general-tool/measure).<br></br>
`ID`: `worldtool:filter_measure`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.filter_measure`<br></br>
&emsp;&emsp;<`wt.process.filter_measure.normal`><br></br>
&emsp;&emsp;<`wt.process.filter_measure.exclude`><br></br>
]

### Clone
The process for cloning an area to another place. Used by the General Tool's [Clone operation](../general-tool/clone) with the [Standard mode](../general-tool/clone#modes).<br></br>
`ID`: `worldtool:clone`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.clone`<br></br>
&emsp;&emsp;`wt.message.clone`<br></br>
&emsp;&emsp;`wt.message.non_default`<br></br>
&emsp;&emsp;`wt.secondary_process_entity`<br></br>
&emsp;&emsp;<`wt.process.clone.move`><br></br>
&emsp;&emsp;<`wt.process.clone.normal`><br></br>
&emsp;&emsp;<`wt.process.clone.rotate`><br></br>
&emsp;&emsp;<`wt.process.clone.filter.normal`><br></br>
&emsp;&emsp;<`wt.process.clone.filter.exclude`><br></br>
&emsp;&emsp;<`wt.process.clone.mirror.x`><br></br>
&emsp;&emsp;<`wt.process.clone.mirror.y`><br></br>
&emsp;&emsp;<`wt.process.clone.mirror.z`><br></br>
]<br></br>
`SecondaryTags`: [<br></br>
&emsp;&emsp;<`wt.process.clone.filter.normal`><br></br>
&emsp;&emsp;<`wt.process.clone.filter.exclude`><br></br>
]<br></br>
`Input`: {<br></br>
&emsp;&emsp;`Rotation`: {<br></br>
&emsp;&emsp;&emsp;&emsp;`X` (Integer) - Rotation around the X axis<br></br>
&emsp;&emsp;&emsp;&emsp;`Y` (Integer) - Rotation around the Y axis<br></br>
&emsp;&emsp;&emsp;&emsp;`Z` (Integer) - Rotation around the Z axis<br></br>
}

### Randomization Source
The process for selecting a source for randomization. Used by the General Tool's [Randomize operation](../general-tool/randomize#select-source).<br></br>
`ID`: `worldtool:randomization_source`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.randomization_source`<br></br>
&emsp;&emsp;`wt.no_message`<br></br>
&emsp;&emsp;<`wt.process.randomization_source.exclude`><br></br>
]

### Randomize
The process for picking random blocks. Used by the General Tool's [Randomize operation](../general-tool/randomize).<br></br>
`ID`: `worldtool:randomize`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.randomize`<br></br>
&emsp;&emsp;<`wt.process.randomize.replace.normal`><br></br>
&emsp;&emsp;<`wt.process.randomize.replace.exclude`><br></br>
]

### Save Area
The process for saving an area to data. Used for backups, as well as by the General Tool's [Copy operation](../general-tool/options#copy-and-paste), and [Clone operation](../general-tool/clone) with the [Template mode](../general-tool/clone#modes).<br></br>
`ID`: `worldtool:save_area`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.save_area`<br></br>
&emsp;&emsp;`wt.no_message`<br></br>
&emsp;&emsp;`wt.dont_reopen_menu`<br></br>
&emsp;&emsp;<`wt.process.save_area.back_up`><br></br>
&emsp;&emsp;<`wt.process.save_area.copy`><br></br>
&emsp;&emsp;<`wt.process.save_area.clone`><br></br>
]<br></br>
`Input`: {<br></br>
&emsp;&emsp;`BackupSlots` (List of strings) - The backup slots (template names) to use.<br></br>
&emsp;&emsp;`NextPositions`: [ (List) - Lists of position pairs, which make up areas to also also save.<br></br>
&emsp;&emsp;&emsp;&emsp;{<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`1` (List of 3 doubles) - The first corner.<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`2` (List of 3 doubles) - The second corner.<br></br>
&emsp;&emsp;&emsp;&emsp;}<br></br>
&emsp;&emsp;&emsp;&emsp;{...}<br></br>
&emsp;&emsp;]<br></br>
}<br></br>
`Output`: {<br></br>
&emsp;&emsp;`SavedAreas`: [ (List) - The areas that have been saved.<br></br>
&emsp;&emsp;&emsp;&emsp;{<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`TemplateList`: [ (List) - The templates that have been saved, and their relative positions.<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`Slot` (String) - The backup slot (template name).<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`Pos` (List of 3 integers) - The template position relative to the process' starting position.<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;]<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`Positions`: { (Compound) - The corners (area).<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`1` (List of 3 doubles) - The first corner.<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`2` (List of 3 doubles) - The second corner.<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}<br></br>
&emsp;&emsp;&emsp;&emsp;}<br></br>
&emsp;&emsp;]<br></br>
}

### Load Area
The process for loading an area from data. Used by [undo](../general-tool/options#undo-and-redo), [redo](../general-tool/options#undo-and-redo), as well as by the General Tool's [Paste operation](../general-tool/options#copy-and-paste), and [Clone operation](../general-tool/clone) with the [Template mode](../general-tool/clone#modes).<br></br>
`ID`: `worldtool:load_area`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.load_area`<br></br>
&emsp;&emsp;`wt.no_message`<br></br>
&emsp;&emsp;`wt.dont_reopen_menu`<br></br>
]<br></br>
`Input`: {<br></br>
&emsp;&emsp;`AreaList`: [ (List) - List of areas to load.<br></br>
&emsp;&emsp;&emsp;&emsp;`TemplateList`: [ (List) - The templates that have been saved, and their relative positions.<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`Slot` (String) - The backup slot (template name).<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`Pos` (List of 3 integers) - The template position relative to the process' starting position.<br></br>
&emsp;&emsp;&emsp;&emsp;]<br></br>
&emsp;&emsp;&emsp;&emsp;`Pos` (List of 3 doubles, optional) - The starting position for this area.<br></br>
&emsp;&emsp;]<br></br>
}

### Checkered
The process for placing an every-other-block pattern. Used by the General Tool's [Checkered operation](../general-tool/checkered).<br></br>
`ID`: `worldtool:checkered`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.checkered`<br></br>
&emsp;&emsp;<`wt.process.checkered.replace.normal`><br></br>
&emsp;&emsp;<`wt.process.checkered.replace.exclude`><br></br>
&emsp;&emsp;<`wt.start_with_block`><br></br>
&emsp;&emsp;<`wt.process.checkered.alternate.x`><br></br>
&emsp;&emsp;<`wt.process.checkered.alternate.y`><br></br>
&emsp;&emsp;<`wt.process.checkered.alternate.z`><br></br>
]

### Shell
The process for placing a shell around the inside of the area. Used by the General Tool's [Shell operation](../general-tool/shell).<br></br>
`ID`: `worldtool:shell`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.shell`<br></br>
&emsp;&emsp;<`wt.process.shell.inner_block`><br></br>
&emsp;&emsp;<`wt.process.shell.side.up`><br></br>
&emsp;&emsp;<`wt.process.shell.side.down`><br></br>
&emsp;&emsp;<`wt.process.shell.side.north`><br></br>
&emsp;&emsp;<`wt.process.shell.side.south`><br></br>
&emsp;&emsp;<`wt.process.shell.side.east`><br></br>
&emsp;&emsp;<`wt.process.shell.side.west`><br></br>
]<br></br>
`Input`: [<br></br>
&emsp;&emsp;`SideSize` (Integer) - The size of the sides.<br></br>
]

### Outline
The process for outlining an area. Used by the General Tool's [Outline operation](../general-tool/outline).<br></br>
`ID`: `worldtool:outline`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.outline`<br></br>
]<br></br>
`Input`: [<br></br>
&emsp;&emsp;`Size` (Integer) - The size of the outlines.<br></br>
]

### Greenery
The process for placing greenery. Used by the General Tool's [Greenery operation](../general-tool/greenery) and the Brush Tool's [Greenery brush](../brush_tool/greenery).<br></br>
`ID`: `worldtool:greenery`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.greenery`<br></br>
&emsp;&emsp;<`wt.process.greenery.remove_current`><br></br>
&emsp;&emsp;<`wt.process.greenery.replace.normal`><br></br>
&emsp;&emsp;<`wt.process.greenery.replace.exclude`><br></br>
&emsp;&emsp;<`wt.process.greenery.plant_table.plains`><br></br>
&emsp;&emsp;<`wt.process.greenery.plant_table.sunflower_plains`><br></br>
&emsp;&emsp;<`wt.process.greenery.plant_table.flower_forest`><br></br>
&emsp;&emsp;<`wt.process.greenery.plant_table.taiga`><br></br>
&emsp;&emsp;<`wt.process.greenery.plant_table.desert`><br></br>
&emsp;&emsp;<`wt.process.greenery.plant_table.ocean`><br></br>
&emsp;&emsp;<`wt.process.greenery.plant_table.warm_ocean`><br></br>
&emsp;&emsp;<`wt.process.greenery.base.standard`><br></br>
&emsp;&emsp;<`wt.process.greenery.base.desert`><br></br>
&emsp;&emsp;<`wt.process.greenery.base.ocean`><br></br>
]<br></br>
`Input`: [<br></br>
&emsp;&emsp;`Rate` (Integer) - The percentage chance to place greenery on a block.<br></br>
]

### Shatter
The process for shattering blocks in an area. Used by the General Tool's [Shatter operation](../general-tool/shatter).<br></br>
`ID`: `worldtool:shatter`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.shatter`<br></br>
&emsp;&emsp;<`wt.process.shatter.drop_items`><br></br>
&emsp;&emsp;<`wt.process.shatter.replace.normal`><br></br>
&emsp;&emsp;<`wt.process.shatter.replace.exclude`><br></br>
]

### Repeat
The process for repeating an area multiple times. Used by the General Tool's [Repeat operation](../general-tool/repeat).<br></br>
`ID`: `worldtool:repeat`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.repeat`<br></br>
&emsp;&emsp;<`wt.process.repeat.filter.normal`><br></br>
&emsp;&emsp;<`wt.process.repeat.filter.exclude`><br></br>
]<br></br>
`SecondaryTags`: [<br></br>
&emsp;&emsp;<`wt.process.repeat.filter.normal`><br></br>
&emsp;&emsp;<`wt.process.repeat.filter.exclude`><br></br>
]<br></br>
`Input`: {<br></br>
&emsp;&emsp;`Amount`: {<br></br>
&emsp;&emsp;&emsp;&emsp;`X` (Integer) - The amount/direction to repeat along the X axis.<br></br>
&emsp;&emsp;&emsp;&emsp;`Y` (Integer) - The amount/direction to repeat along the Y axis.<br></br>
&emsp;&emsp;&emsp;&emsp;`Z` (Integer) - The amount/direction to repeat along the Z axis.<br></br>
&emsp;&emsp;}<br></br>
&emsp;&emsp;`Spacing` (Integer) - The amount of blocks between each copy.<br></br>
}

### Smooth
The process for smoothing an area. Used by the General Tool's [Smooth operation](../general-tool/smooth).<br></br>
`ID`: `worldtool:smooth`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.smooth`<br></br>
&emsp;&emsp;`wt.message.non_default`<br></br>
&emsp;&emsp;`wt.message.smooth`<br></br>
&emsp;&emsp;<`wt.process.smooth.filter.normal`><br></br>
&emsp;&emsp;<`wt.process.smooth.filter.exclude`><br></br>
&emsp;&emsp;<`wt.process.smooth.direction.up`><br></br>
&emsp;&emsp;<`wt.process.smooth.direction.down`><br></br>
&emsp;&emsp;<`wt.process.smooth.direction.east`><br></br>
&emsp;&emsp;<`wt.process.smooth.direction.west`><br></br>
&emsp;&emsp;<`wt.process.smooth.direction.north`><br></br>
&emsp;&emsp;<`wt.process.smooth.direction.south`><br></br>
]<br></br>
`Input`: {<br></br>
&emsp;&emsp;`Threshold` (Integer) - The maximum distance in blocks to check for an edge's size.<br></br>
}

### Command List
The process for finding commands from command blocks. Used by the General Tool's [Command List operation](../general-tool/command-list).<br></br>
`ID`: `worldtool:command_list`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.command_list`<br></br>
]

### Paint
The process for painting blocks. Used by the Brush Tool's [Paint brush](../brush_tool/paint).<br></br>
`ID`: `worldtool:paint`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.paint`<br></br>
&emsp;&emsp;`wt.no_message`<br></br>
]

### Replace (Brush)
Another process for replacing blocks in an area. Used by the Brush Tool's [Replace brush](../brush_tool/replace).<br></br>
`ID`: `worldtool:replace_brush`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.replace_brush`<br></br>
&emsp;&emsp;`wt.no_message`<br></br>
&emsp;&emsp;<`wt.process.replace_brush.normal`><br></br>
&emsp;&emsp;<`wt.process.replace_brush.exclude`><br></br>
]

### Cylinder
The process for generating a cylinder shape. Used by the Shape Generation Tool's [Cylinder shape](../shape-generation-tool/cylinder).<br></br>
`ID`: `worldtool:cylinder`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;<`wt.process.cylinder.vertical`><br></br>
&emsp;&emsp;<`wt.process.cylinder.horizontal`><br></br>
]

### Cone
The process for generating a cone shape. Used by the Shape Generation Tool's [Cone shape](../shape-generation-tool/cone).<br></br>
`ID`: `worldtool:cone`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;<`wt.process.cone.vertical`><br></br>
&emsp;&emsp;<`wt.process.cone.horizontal`><br></br>
]

### Sphere
The process for generating a sphere shape. Used by the Shape Generation Tool's [Sphere shape](../shape-generation-tool/sphere).<br></br>
`ID`: `worldtool:sphere`<br></br>
`Tags`: [<br></br>
&emsp;&emsp;`wt.process.sphere`<br></br>
]

## Log

The log logs various happenings related to processes not started by players. The log can be viewed with the command `/function worldtool:cmd/view_log` and cleared with the command `/function worldtool:cmd/clear_log`.
