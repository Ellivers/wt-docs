---
sidebar_position: 2
---

import MCFont from '@site/src/components/minecraft-font'

# Chat Menu System

WorldTool uses a chat-based menu system. Here's what you'll need to know:
#
To use the menus, open the chat (default key is `T`) and use your mouse cursor to interact. All buttons in all menus have **hover descriptions** to let you know what they do or what menu they're opening.

## Button Types
<MCFont>[Button...]</MCFont> - these buttons open another menu.
<br></br>
<MCFont>&lt;Button&gt;</MCFont> - these buttons prompt you to input something in chat.
<br></br>
<MCFont>[▶Button]</MCFont> - these buttons start an operation. Make sure you're done adjusting options before clicking these.
<br></br>
<MCFont>(Air)</MCFont> - these buttons select air in a block selection menu. These can also start an operation.

## Block Selection
A block selection menu typically looks something like this:
<MCFont color="aqua">&lt;Select a Block&gt; </MCFont><MCFont color="green">[Pick Block...] </MCFont><MCFont>(Air)</MCFont>

<br></br>
<br></br>
<MCFont color="aqua">&lt;Select a Block&gt;</MCFont> will have you enter a block ID in chat.
<br></br>
<MCFont color="green">[Pick Block...]</MCFont> allows you to right-click with your current tool on an existing block in the world to select it.
<br></br>
<MCFont>(Air)</MCFont> selects the air block, since this cannot be normally selected with the chat input button.
