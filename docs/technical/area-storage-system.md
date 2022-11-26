---
sidebar_position: 2
---

# Area Storage System

WorldTool uses [structure blocks](https://minecraft.fandom.com/wiki/Structure_Block) to save areas with the [`save_area` process](processes#save-area) and load areas with the [`load_area` process](processes#load-area).
#
When used for purposes such as [undo/redo](../general-tool/options#undo-and-redo) and [copy/paste](../general-tool/options#copy-and-paste), the area data is stored on each indivual player using [PlayerDB](https://github.com/rx-modules/PlayerDB).

## Backup Slots

