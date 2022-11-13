---
sidebar_position: 16
---

import MCFont from '@site/src/components/minecraft-font'

# Command Block Chain List

The <MCFont color="#76b297">[▶Command Block Chain List]</MCFont> button can be found in the [main General Tool menu](usage#main-menu)'s second page. This operation finds all command block chains in the selected area, makes a list of their content, and displays it in chat.

## Converting Lists

A small set of instructions on how to convert a command block chain list into a function file.
#
1. Firstly, you'll need to have access to Minecraft's **output log**. With the vanilla Minecraft launcher, you have to first [enable the log](https://cdn.discordapp.com/attachments/734106483104415856/854123107325575188/unknown.png), and then restart the game for it to show up.
2. Select the area with the starts of the command chains you want to copy from, then run the operation.
3. Copy the desired command block chain list from the output log.
4. Paste it into your prefered text editor. Something such as [Notepad++](https://notepad-plus-plus.org/) works fine for this. Just make sure the editor supports **Regular Expressions**.
5. Now, you want to enable Regular Expressions. Search for `WORLDTOOL_LINEBREAK\/?` and replace it with `\n`.
6. Done! Now, you can just save the file with the `.mcfunction` file extension and it's a fully working function.
