(function (Prism) {
	var variable = /%%?[~:\w]+%?|!\S+!/;
	var parameter = {
		pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
		alias: 'attr-name',
		inside: {
			'punctuation': /:/
		}
	};
	var string = /"(?:[\\"]"|[^"])*"(?!")/;
	var number = /(?:\b|-)\d+\b/;
	var storageorstring = /( ([a-z_]+:[a-z_]+)|( ["'].*["']))/;
	var nbt = /([A-Z]("?[A-Za-z_]"?(\[((\d+)|(\{[A-Za-z_]+:\s*(["'][a-z:]*["'])\}))\])?\.?)+)|(\{.*\})/;
	var resourcePath = /#?[a-z_\-\.0-9]+(:[a-z_\-/\.0-9]+)?/;
	var selector = /@[apres](\[.*\])?/;

	Prism.languages.mcfunction = {
		'comment': [
			/^#.*/m
		],
		'command': [
			{
				'pattern': /^execute( (if|unless) blocks [~\.\d]+ [~\.\d]+ [~\.\d]+ [~\.\d]+ [~\.\d]+ [~\.\d]+ [~\.\d]+ [~\.\d]+ [~\.\d]+ (all|masked))*( run)?/m,
				'inside': {
					'function': /\bexecute\b/i,
					'variable': / [~\.\d]+/
				}
			},
			{
				'pattern': /^\s*data ((modify ((storage [a-z_]+:[a-z_]+ (([A-Z]("?[A-Za-z_]"?(\[((\d+)|(\{[A-Za-z_]+:\s*(["'][a-z:]*["'])\}))\])?\.?)+)|(\{.*\})) (set|append|prepend) ((value "?.*"?)|(from storage [a-z_]+:[a-z_]+ (([A-Z]("?[A-Za-z_]"?(\[((\d+)|(\{[A-Za-z_]+:\s*(["'][a-z:]*["'])\}))\])?\.?)+)|(\{.*\}))))))))/m,
				'inside': {
					'function': /\bdata\b/i,
					'string': storageorstring,
					'variable': nbt,
					// 'variable': variable,
					// 'number': number,
					// 'punctuation': /[()',]/
				}
			},
			{
				'pattern': /^\s*function #?[a-z_\-\.0-9]+(:[a-z_\-/\.0-9]+)?/m,
				'inside': {
					'function': /\bfunction\b/i,
					'string': resourcePath,
					// 'variable': variable,
					// 'number': number,
					// 'punctuation': /[()',]/
				}
			},
			{
				'pattern': /^\s*tellraw @[apres](\[.*\])? [\[\{"].*/m,
				'inside': {
					'function': /\btellraw\b/i,
					'string': selector,
					'variable': /[^ ]+$/,
					// 'number': number,
					// 'punctuation': /[()',]/
				}
			},
			{
				'pattern': /^\s*tag @[apres](\[.*\])? (add|remove) [a-zA-Z_\.]+/m,
				'inside': {
					'function': /\btag\b/i,
					'string': selector,
					'variable': /[a-zA-Z_\.]+$/
				}
			},
			{
				'pattern': /^\s*item modify entity @[apres](\[.*\])? (([a-z]+\.[a-z0-9]+)|weapon) #?[a-z_\-\.0-9]+(:[a-z_\-/\.0-9]+)?/m,
				'inside': {
					'function': /\bitem\b/i,
					'string': new RegExp(`(${selector.source})|(${resourcePath.source}$)`),
					'variable': /([a-z]+\.[a-z0-9]+)|weapon/
				}
			},
			{
				'pattern': /^\s*scoreboard ((players (set (@[apres](\[.*\])?|(\$|#)[a-zA-z_\.]*) [a-zA-z_\.]+ \d+))|objectives add )/m,
				'inside': {
					'function': /\bscoreboard\b/i,
					'string': new RegExp(`${selector.source}|(\$|#)[a-zA-z_\.]*`),
					'variable': /[^ ]+$/
				}
			}
		]
	};
}(Prism));