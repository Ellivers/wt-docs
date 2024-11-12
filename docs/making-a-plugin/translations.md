---
sidebar_position: 3
---

# Translations

WorldTool's translations are stored in function files, which set storage values in the `worldtool:storage` storage:

`Language` - ID string of the current language. Default is `worldtool:en_us`.

`Translation."translation_key"` - Translation with the key "translation_key".

Text is then displayed as such: `{"nbt":"Translation.\"translation_key\"","storage":"worldtool:storage"}`.<br></br>
If the translation is stored as a JSON string, you can add `"interpret":true` to display it.

## Adding Translations to Existing Languages

The [`language/en_us` hook](hooks#languageen_us) can be used to add translations to the existing language: `English (US)`.<br></br>
For the sake of compatibility and future-proofing, please either add a prefix to custom translation keys, or use your own storage for them.

```mcfunction
# Adds the translation "myplugin.info.example_translation"
data modify storage worldtool:storage Translation."myplugin.info.example_translation" set value "Example translation!"
```

## Adding a Language

:::note
If you have a language that you would like to add to WorldTool, please contact me on [Discord](https://discord.gg/jn8d4zb) about it. Languages are available to translate to on [Crowdin](https://crowdin.com/project/worldtool).

If you already have completed the language as a plugin, you can also open a [pull request](https://github.com/Ellivers/WorldTool/pulls).
:::

To begin, make a function file that sets the `Language` value to an appropriate ID, copy-paste all translations from the default `worldtool:language/en_us` function and translate them.

To allow other plugins to utilize your language, add a function tag to your plugin and call it at the bottom of the function. To ensure that custom translations added by other plugins are displayed correctly, call the [hook](hooks#languageen_us) for the default WorldTool `en_us` language above your own function tag.

```mcfunction
# Example language

data modify storage worldtool:storage Language set value "myplugin:example"

data modify storage worldtool:storage Translation."translation_key" set value "Example translation!"
#(More translations...)

function #worldtool:hooks/language/en_us
function #myplugin:example_language
```
