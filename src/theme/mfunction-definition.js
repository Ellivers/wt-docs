(function (Prism) {
	var variable = /%%?[~:\w]+%?|!\S+!/;
	var parameter = {
		pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
		alias: 'attr-name',
		inside: {
			'punctuation': /:/
		}
	};
	var string = /"(?:[\\"]"|[^"])*"(?!["])/;
	var number = /(?:\b|-)\d+\b/;
	var storage = /[a-z_]+:[a-z_]+/;
	var nbtcontent = new RegExp(`\\{(\\s*"?[a-zA-Z]+"?:\\s*(${string.source}|\\d+\\.?\\d*[dfs]?|(.*)),?)*\\}`);
	var nbt = new RegExp(`(([A-Za-z_]+|${string.source})(\\[(\\d*|${nbtcontent.source})\\])?\\.?)+(${nbtcontent.source})?|${nbtcontent.source}`);
	var resourcePath = /#?[a-z_\-\.0-9]+(:[a-z_\-/\.0-9]+)?/;
	var selector = /@[apres](\[.*\])?/;

	Prism.languages.mcfunction = {
		'comment': [
			/^#.*/m
		],
		'command': [
			{
				'pattern': new RegExp(`^execute( (if|unless) ((blocks${' [~\\.\\d]+'.repeat(9)} (all|masked))|(data storage ${storage.source} ${nbt.source})|(score (${selector.source}|(\\$|#)[a-zA-Z_\\.]*) [a-zA-z_\\.]+ matches \\d+)))*( run)?`, 'm'),
				'inside': {
					'function': /\bexecute/,
					'variable': new RegExp(`( [~\\.\\d]+)|((?<=${storage.source} )(${nbt.source}))`),
					'string': new RegExp(` ${storage.source}|(${selector.source}|(\\$|#)[a-zA-Z_\\.]*)`)
				}
			},
			{
				'pattern': new RegExp(`^\\s*data ((modify ((storage ${storage.source} (${nbt.source}) (set|append|prepend) ((value (${string.source}|.*))|(from storage ${storage.source} (${nbt.source})))))))`, 'm'),
				'inside': {
					'function': /\bdata/,
					'variable': new RegExp(`(((?<=${storage.source} )(${nbt.source})|[^ ]*$)|${string.source}$)`),
					'string': new RegExp(` ${storage.source}|${string.source}`)
					// 'variable': variable,
					// 'number': number,
					// 'punctuation': /[()',]/
				}
			},
			{
				'pattern': /^\s*function #?[a-z_\-\.0-9]+(:[a-z_\-/\.0-9]+)?/m,
				'inside': {
					'function': /\bfunction/,
					'string': resourcePath,
					// 'variable': variable,
					// 'number': number,
					// 'punctuation': /[()',]/
				}
			},
			{
				'pattern': /^\s*tellraw @[apres](\[.*\])? [\[\{"].*/m,
				'inside': {
					'function': /\btellraw/,
					'string': selector,
					'variable': /[^ ]+$/,
					// 'number': number,
					// 'punctuation': /[()',]/
				}
			},
			{
				'pattern': /^\s*tag @[apres](\[.*\])? (add|remove) [a-zA-Z_\.]+/m,
				'inside': {
					'function': /\btag/,
					'string': selector,
					'variable': /[a-zA-Z_\.]+$/
				}
			},
			{
				'pattern': /^\s*item modify entity @[apres](\[.*\])? (([a-z]+\.[a-z0-9]+)|weapon) #?[a-z_\-\.0-9]+(:[a-z_\-/\.0-9]+)?/m,
				'inside': {
					'function': /\bitem/,
					'string': new RegExp(`(${selector.source})|(${resourcePath.source}$)`),
					'variable': /([a-z]+\.[a-z0-9]+)|weapon/
				}
			},
			{
				'pattern': /^\s*scoreboard ((players ((set|add) (@[apres](\[.*\])?|(\$|#)[a-zA-Z_\.]*) [a-zA-Z_\.]+ \d+))|objectives add )/m,
				'inside': {
					'function': /\bscoreboard/,
					'string': new RegExp(`${selector.source}|(\\$|#)[a-zA-Z_\\.]*`),
					'variable': /[^ ]+$/
				}
			}
		]
	};
}(Prism));