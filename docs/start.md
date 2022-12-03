---
sidebar_position: 1
title: Start
---

# <img src="../img/worldtool-icon.svg" style={{ width:'100px' }}></img> WorldTool Documentation

WorldTool is a world-editing data pack for Minecraft with a large variety of features to help your world editing needs.


## Setup

* [Download](https://datapackcenter.com/projects/worldtool.149/download) WorldTool. If you do not know how to install a data pack, refer to a guide such as [this one](https://minecraft.fandom.com/wiki/Tutorials/Installing_a_data_pack) (text) or [this one](https://youtu.be/C3zFd8pxFls) (video).
* Make sure you have cheats enabled (singleplayer) or are an operator (server). If you are using this on a server, make sure the `enable-command-block` server property is enabled.
* To finalize the installation of WorldTool, use the `/reload` command in-game, or restart the world.
* Run the command `/function worldtool:give` in-game to recieve all the necessary tools to start your world editing!


## Custom Dimensions

In order to be able to use WorldTool in a custom dimension, you need to:
1. Be in said dimension
2. Run the command `/forceload add 27450 19`
3. Wait a few seconds
4. Run the command `/function worldtool:technical/load/set_base_blocks`
5. Done!

## The Three Tools
[General Tool](category/general-tool) - Operations that involve an area made up of two corner points.<br></br>
[Brush Tool](category/brush-tool) - Quick operations that can be applied to a cube radius by simply right-clicking.<br></br>
[Shape Generation Tool](category/shape-generation-tool) - Slower operations that involve generating 3D shapes.

:::tip tool controls
You can see what actions you can perform with each tool's item by hovering over it in your inventory and looking at the tooltip.
:::

## Documentation Issues
If you feel something should be added to this documentation or if you find something you feel is incorrect, please open an issue [here](https://github.com/Ellivers/wt-docs/issues).
