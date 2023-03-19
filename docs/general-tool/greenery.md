---
sidebar_position: 13
---

import MCFont from '@site/src/components/minecraft-font'

# Greenery
![[Example of what this operation can look like]](img/operation_previews/greenery.png)

The Greenery menu can be found with the <MCFont color="green">[Greenery...]</MCFont> button in the [main General Tool menu](usage#main-menu). This operation places greenery from a selected biome source above blocks in the selection that can be planted on.
#
![[The Greenery menu]](img/greenery_menu.png)

## Plant Rate
The <MCFont>Plant rate</MCFont> option lets you set the percentage chance for each block to have greenery placed on it.

## Remove Current Greenery
If the <MCFont color="light_purple">[Remove Current Greenery]</MCFont> option is enabled, all greenery in the area is removed before new greenery is placed.

:::tip
Setting the <MCFont>Plant rate</MCFont> to 0 and enabling <MCFont color="light_purple">[Remove Current Greenery]</MCFont> lets you remove all greenery in the area without placing any.
:::

## Replace
The <MCFont color="gold">[Replace]</MCFont> option lets you choose which blocks to replace with greenery. Either choose a certain block to replace (<MCFont color="green">[Normal]</MCFont>), or a certain block to *not* replace (<MCFont color="gold">[Exclude]</MCFont>). Once the option is enabled, clicking the button again disables it.

## Plant Sources
Plant sources are different biomes you can select to get greenery from, with each source having different blocks with different spawn ratios. The <MCFont color="green">[Change...]</MCFont> button opens a menu where you can change what plant source to use.

### Base Blocks
The default supported base blocks are: **Grass Block**, **Dirt**, **Podzol**, and **Coarse Dirt**, but some plant sources have different base block requirements. The exceptions are as follows:
* Desert, which requires sand or red sand
* Ocean and Warm Ocean, which work with any block

### List of Plant Sources
* **Plains**<br></br>
  There is a 12.5% chance of the selected block being a flower. If that happens, one of these blocks is selected:<br></br>
  Dandelion, Poppy, Azure Bluet, Red Tulip, Orange Tulip, White Tulip, Pink Tulip, Oxeye Daisy, Cornflower
  #
  Otherwise, these are the blocks and their respective odds:
  * 75% - Grass
  * 25% - Tall Grass
* **Sunflower Plains**<br></br>
  There is a 12.5% chance of the selected block being a small flower. If that happens, one of these blocks is selected:<br></br>
  Dandelion, Poppy, Azure Bluet, Red Tulip, Orange Tulip, White Tulip, Pink Tulip, Oxeye Daisy, Cornflower
  #
  Otherwise, these are the blocks and their respective odds:
  * 64.3% - Grass
  * 21.4% - Tall Grass
  * 14.3% - Sunflower
* **Flower Forest**<br></br>
  * 62.5% (4.2% each) - Tall Grass, Dandelion, Poppy, Allium, Azure Bluet, Red Tulip, Orange Tulip, White Tulip, Pink Tulip, Oxeye Daisy, Cornflower, Lily of the Valley, Lilac, Rose Bush, Peony
  * 37.5% - Grass
* **Taiga**<br></br>
  * 33.3% - Grass
  * 33.3% - Fern
  * 12.5% - Large Fern
  * 12.5% (4.2% each) - Sweet Berry Bush (no berries), Dandelion, Poppy
  * 8.3% - Sweet Berry Bush (1-2 berries)
* **Desert**<br></br>
  * 52.9% - Dead Bush
  * 23.5% - Cactus (1 block tall)
  * 17.6% - Cactus (2 blocks tall)
  * 5.9% - Cactus (3 blocks tall)
* **Ocean**<br></br>
  * 52.9% - Seagrass
  * 29.4% - Kelp
  * 23.5% - Tall Seagrass
* **Warm Ocean**<br></br>
  There is a 25% chance of the selected block being a coral. If that happens, one of these blocks is selected:<br></br>
  Fire Coral, Horn Coral, Tube Coral, Brain Coral, Bubble Coral, Fire Coral Fan, Horn Coral Fan, Tube Coral Fan, Brain Coral Fan, Bubble Coral Fan
  #
  Otherwise, these are the blocks and their respective odds:
  * 57.1% - Seagrass
  * 21.4% - Tall Seagrass
  * 28.6% - Sea Pickle