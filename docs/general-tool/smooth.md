---
sidebar_position: 11
---

import MCFont from '@site/src/components/minecraft-font'

# Smooth

The Smooth menu can be found with the <MCFont color="#fc8003">[Smooth...]</MCFont> button in the [main General Tool menu](usage#main-menu). This operation smooths bumps and corners in the selected area.
#
![[The Smooth menu]](img/smooth_menu.png)

## Filter
With the <MCFont color="gold">[Filter]</MCFont> option, you can choose what blocks to be affected by the operation's adjustments. You can choose to only affect a certain block (<MCFont color="green">[Normal]</MCFont>) or to affect all blocks *except* a certain block (<MCFont color="gold">[Exclude]</MCFont>).

## Settings
The <MCFont color="aqua">[Settings...]</MCFont> button opens another menu:<br></br>
![[The Smooth settings menu]](img/smooth_settings_menu.png)

The <MCFont>Edge detection limit</MCFont> option controls the maximum blocks along a corner that it searches to find out how big the corner is.

The <MCFont>Intensity</MCFont> option controls how aggressively corners are rounded, with a value of 1-5.
#
The direction options toggle which directions it smooths relative to. For example, if you were to only have <MCFont color="yellow">[Up]</MCFont> selected, it would only smooth out the sides of vertical upwards-facing bumps. The <MCFont color="yellow">[Down]</MCFont> direction is disabled by default, as it can cause some unwanted behavior.
