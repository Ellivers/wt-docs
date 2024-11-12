---
sidebar_position: 15
---

import MCFont from '@site/src/components/minecraft-font'

# Command List

The <MCFont color="#76b297">[▶Command List]</MCFont> button can be found in the [main General Tool menu](usage#main-menu). This operation finds all command block chains that start in the selected area (this includes singular regular command blocks as well), makes a list of their content, and displays it in chat.

## Converting Lists

A small set of instructions on how to convert a command block chain list into a function file.
#
1. Firstly, you'll need to have access to Minecraft's **output log**. With the vanilla Minecraft launcher, you have to first [enable the log](img/output_log.png), and then restart the game for it to show up.
2. Select the area with the starts of the command chains you want to copy from, then run the operation.
3. Copy the desired command block chain list from the output log.
4. Paste it into your preferred text editor. Something such as [Notepad++](https://notepad-plus-plus.org/) works fine for this. Just make sure the editor supports **Regular Expressions**.
5. Now, you want to enable Regular Expressions. Search for `WORLDTOOL_LINEBREAK\/?` and replace it with `\n`.
6. Done! Now, you can just save the file with the `.mcfunction` file extension and it's a fully working function.
