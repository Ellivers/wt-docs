---
sidebar_position: 2
---

# Area Storage System

WorldTool uses [structure blocks](https://minecraft.wiki/w/Structure_Block) to save areas with the [`save_area` process](processes#save-area) and load areas with the [`load_area` process](processes#load-area).
#
When used for purposes such as [undo/redo](../general-tool/options#undo-and-redo) and [copy/paste](../general-tool/options#copy-and-paste), the area data is stored on each indivual player using [PlayerDB](https://github.com/rx-modules/PlayerDB).

## Backup Slots

In order to use structure blocks to save an area, you need structure names. And since strings such as these cannot be generated, I had to make a list of available strings, which I call "backup slots". Backup slots are named `worldtool:n`, with `n` being a number from 1 to 1000.

To get a backup slot for use, just get `AvailableBackupSlots[0]` from the storage `worldtool:storage`.

To get a certain amount of slots, set the `#amount worldtool` score to the desired number and run the function `worldtool:technical/common/save_load/get_slots`. The backup slots will then appear in the `Temp.BackupSlots` list inside the `worldtool:storage` storage. Before doing this, make sure to remove `Temp.BackupSlots` and set the `#temp worldtool` score to 0.

:::info important: returning slots
Once you no longer have any use for a slot, make sure to return it to the `AvailableBackupSlots` list inside the `worldtool:storage` storage.
:::
