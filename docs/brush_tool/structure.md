---
sidebar_position: 7
---

import MCFont from '@site/src/components/minecraft-font'

# Structure
The Structure brush places a specified structure.
#
By default, no structure is selected. To view the currently selected structure or select a new one, use the <MCFont color="aqua">[Select New Structure...]</MCFont> button in the main Brush Tool menu.

## Options
* [Placement](usage#brush-options)
* ­<MCFont color="gold">Structure Rotation</MCFont> - `0°`, `90°`, `180°`, or `-90°`. Cycles the possible structure Y axis rotations.
* ­<MCFont color="dark_purple">Structure Mirror</MCFont> - `None`, `Front↔Back`, or `Left↔Right`. Cycles the possible structure mirror directions. `Front↔Back` mirrors on the Z axis, while `Left↔Right` mirrors on the X axis.
* ­<MCFont color="dark_green">[Structure Offset...]</MCFont> - Opens the [structure offset](#offset) menu (see below).

## Offset
The Structure Offset menu can be reached through the main Brush Tool menu.<br></br>
![[The Structure Offset menu]](img/structure_offset_menu.png)

The offset decides where the bottom northwest corner of the structure is placed, relative to the block you use the Brush Tool on. At the top of the menu you can see the current offset.
#
­<MCFont color="gold">[-X]</MCFont><MCFont color="gold">[+X]</MCFont><br></br>
­<MCFont color="gold">[-Y]</MCFont><MCFont color="gold">[+Y]</MCFont><br></br>
­<MCFont color="gold">[-Z]</MCFont><MCFont color="gold">[+Z]</MCFont><br></br>
These buttons adjust the offset, one block at a time.
#
To set all axis values at once, use the <MCFont color="aqua">&lt;Set Structure Offset&gt;</MCFont> button and enter all three values.
