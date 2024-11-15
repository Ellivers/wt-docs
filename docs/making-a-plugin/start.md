---
sidebar_position: 1
---

# Start

Guides and information on various parts of making a plugin for WorldTool. A plugin is another data pack that can be added to the same world as WorldTool and has the ability to add and change various functionality.

## Example

An example plugin can be found [here](https://github.com/Ellivers/worldtool-example-plugin/releases/latest/download/WorldTool-Example-Plugin.zip). This plugin adds a General Tool operation and Brush Tool brush that places snow on top of blocks.

## Getting Started

To get started, first create a new data pack with the following structure:

`pack.mcmeta` - Your [pack.mcmeta](https://minecraft.wiki/w/Data_pack#pack.mcmeta) file.<br></br>
`data`<br></br>
&emsp;&emsp;`namespace` - Your own namespace, you can call it whatever you want.<br></br>
&emsp;&emsp;&emsp;&emsp;`functions`<br></br>
&emsp;&emsp;`worldtool` - WorldTool's namespace, for [hook usage](hooks).<br></br>
&emsp;&emsp;&emsp;&emsp;`tags`<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`functions`<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`hooks`

Put your own files in your designated namespace. The `worldtool` namespace is only to be used for [hooks](hooks).

Now create a new function and use the [`load` hook](hooks#load). Inside this function, set up the appropriate plugin scores, as well as other things that you might want to set up.

In the function, first run this command:

```mcfunction
scoreboard players add $plugins worldtool 1
```

Then, choose which of the following types that apply to your plugin and add them with `scoreboard players add NAME worldtool 1`:

* `$generalToolPlugins`
* `$brushToolPlugins`
* `$shapeToolPlugins`
* `$settingPlugins`
* `$languagePlugins`
* `$greeneryPlugins`
* `$blocksPerTickPlugins`

It can also be a good idea to save some sort of version for your plugin.

```mcfunction
# Example of a plugin load function

scoreboard players add $plugins worldtool 1

# This plugin would affect or add to the General Tool
scoreboard players add $generalToolPlugins worldtool 1

# Set this plugin's translations, if they haven't been set before
execute unless score #plugin.example.version worldtool matches 1 run function worldtool:language/reload
scoreboard players set #plugin.example.version worldtool 1
```
