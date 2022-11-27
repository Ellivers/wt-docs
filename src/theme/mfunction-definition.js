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
	var nbt = /([A-Z]("?[A-Za-z_]"?(\[((\d+)|(\{[A-Za-z_]+:\s?(["'][a-z:]*["'])\}))\])?\.?)+)|(\{.*\})/;
	var func = /#?[a-z_\-]+(:[a-z_\-/]+)?/;
	var selector = /@[apres](\[.*\])?/;

	Prism.languages.mcfunction = {
		'comment': [
			/^#.*/m
		],
		'command': [
			{
				'pattern': /^data ((modify ((storage [a-z_]+:[a-z_]+ (([A-Z]("?[A-Za-z_]"?(\[((\d+)|(\{[A-Za-z_]+:\s?(["'][a-z:]*["'])\}))\])?\.?)+)|(\{.*\})) (set|append) ((value "?.*"?)|(from storage [a-z_]+:[a-z_]+ (([A-Z]("?[A-Za-z_]"?(\[((\d+)|(\{[A-Za-z_]+:\s?(["'][a-z:]*["'])\}))\])?\.?)+)|(\{.*\}))))))))/m,
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
				'pattern': /^function #?[a-z_\-]+(:[a-z_\-/]+)?/m,
				'inside': {
					'function': /\bfunction\b/i,
					'string': func,
					// 'variable': variable,
					// 'number': number,
					// 'punctuation': /[()',]/
				}
			},
			{
				'pattern': /^tellraw @[apres](\[.*\])? [\[\{"].*/m,
				'inside': {
					'function': /\btellraw\b/i,
					'string': selector,
					'variable': /.*/,
					// 'number': number,
					// 'punctuation': /[()',]/
				}
			},
			{
				'pattern': /^tag @[apres](\[.*\])? (add|remove) [a-zA-Z_\.]+/m,
				'inside': {
					'function': /\btag\b/,
					'string': selector,
					'variable': /[a-zA-Z_\.]+$/
				}
			}
		]
	};
}(Prism));