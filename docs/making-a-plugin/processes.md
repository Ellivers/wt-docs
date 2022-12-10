---
sidebar_position: 4
---

# Processes

[About processes and process data](../technical/processes).

## Setting up Blocks per Tick

A "blocks per tick" value is simply how many blocks the process handles every tick. This is not required, but can help for customizability.

All you need to do is add your blocks per tick configuration with the [`setup_blocks_per_tick` hook](hooks#setup_blocks_per_tick).

```mcfunction
# Sets the default blocks per tick value and different preset values for the "myplugin:example" process
execute unless data storage worldtool:storage BlocksPerTick.Processes[{ID:"myplugin:example"}] run data modify storage worldtool:storage BlocksPerTick.Processes append value {ID:"myplugin:example",Value:4000,Presets:{Low:600,Medium:2000,High:4000}}
```

You can then get the current value for your process with the `BlocksPerTick.Processes[{ID:"myplugin:example"}].Value` data.

## Setting Up Files

To follow these steps, you'll have to first have set up a process as a [General Tool operation](general-tool-operations), [brush](brushes) or [shape](shapes) (or perhaps through a custom start system?).

How to set up a basic process that iterates over an area:

1. Use the [process structure generator python script](https://github.com/Ellivers/WorldTool/blob/master/other%20stuff/scripts/process_folder_generator.py) to more easily create a base folder structure to work from. When running the script, enter your process name (for example: "example") and the path where it's supposed to be (for example "myplugin:processes"). Then, just copy the result folder inside the "output" folder and paste it where you want it to be.

2. When the process structure is in place, go to the `main` process function, delete the `# PROCESS-SPECIFIC COMMANDS HERE` line and replace it with whatever commands you want to run for every block. Use the `worldtool:process/place_block.primary` function to place the primary process block and the `worldtool:process/place_block.secondary` function to place the secondary process block. Before placing a block, make sure you're not replacing a block with the same block by checking `unless blocks ~ ~ ~ ~ ~ ~ 27451 1 19 all` (primary block) or `unless blocks ~ ~ ~ ~ ~ ~ 27449 1 19 all` (secondary block) before placing a block.
  ```mcfunction
  # The logic that the Fill process uses
  execute unless blocks ~ ~ ~ ~ ~ ~ 27451 1 19 all run function worldtool:process/place_block.primary
  ```

3. That's all for the logic itself. To make the process actually run, you need to add a check using the [`process/check_tags` hook](hooks#processcheck_tags). For example: `execute if entity @s[tag=myplugin.process.example] run function myplugin:processes/example/main`.

4. Your process is all ready to go!
