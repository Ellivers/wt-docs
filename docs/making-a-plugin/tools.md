---
sidebar_position: 8
---

# Tools

Some useful tools to use in menus and various other places.

## Anti Feedback Chat Message

Not really menu-specific. Call the `worldtool:ui/anti_feedback_chat_message/load` function at the end of any function to remove the "Executed 12 commands from ..." message.

This function also causes a line break and plays a click sound. The line break can be disabled by adding the `wt.no_space` tag before running the function, and the sound can be disabled by adding the `wt.no_sound` tag before running the function.

## Two Block Query

Calling one of the `worldtool:ui_general/two_block_query/load/primary`, `worldtool:ui_general/two_block_query/load/secondary`, or `worldtool:ui_general/two_block_query/load/both` functions opens a menu which prompts the user to input the specified blocks (the primary block, the secondary block, or both blocks).

The additional tags to add before calling these functions are:
* `wt.dont_start_input` - Use this if you don't want the menu to start its own input.
* `wt.two_block_query.locked_rule` - Use this to manually set either the `wt.two_block_query.normal` or `wt.two_block_query.exclude` tag. To use this, you also need to set the `wt.two_block_query.primary`, `wt.two_block_query.secondary`, or `wt.two_block_query.both` tag beforehand.<br></br>
**Text (Secondary block):**
* `wt.two_block_query.text.replace` - "Select a Block to Replace" / "Select a Block to Not Replace".
* `wt.two_block_query.text.greenery_replace` - Same as regular `replace`, except it doesn't display an air button when the Normal mode is selected.
* `wt.two_block_query.text.filter` - "Select a Block to Filter With" / "Select a Block to Not Filter With".
* `wt.two_block_query.text.randomize_exclude` - "Select a Block to Exclude".
* `wt.two_block_query.text.standard` - "Select a Block".<br></br>
**Text (Primary block):**
* `wt.two_block_query.text.replace` - "Select a Block to Replace With".
* `wt.two_block_query.text.randomize_exclude` - "Select a Block to Exclude".

**Custom texts:** Add a custom tag and use the [`ui_general/two_block_query/display_1`](hooks#ui_generaltwo_block_querydisplay_1) (secondary block) and/or [`ui_general/two_block_query/display_2`](hooks#ui_generaltwo_block_querydisplay_2) (primary block) hooks to display your text.

Use the [`ui/return.back`](hooks#uireturnback) and [`ui/return`](hooks#uireturn) hooks to return to your desired menu/function.

## Back Button

The `worldtool:ui/back_button` can be used to display a back button and a line break.

The [`ui/back_using_tags` hook](hooks#uiback_using_tags) can be used to send the user to a specific menu when they click the back button, usually by checking for which menu tag they have.

## Common Folder

Everything inside the `worldtool:technical/common/` folder is meant for common use.
