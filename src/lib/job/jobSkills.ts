export const languages = [
	"HTML", "CSS", 
	"Python", "Ruby", "JavaScript", "C++", "Java", "PHP", "C#", "Rust", "Go", "Swift",
	"Kotlin", "Dart", "Scala", "R", "Objective-C", "C", "TypeScript", "Haskell", "Elixir", "Erlang", "F#",
];

export const frameworks = [
	"React",
	"Angular",
	"Vue",
	"Svelte",
	"Ember",
	"Backbone",
	"Django",
	"Flask",
	"Rails",
	"Laravel",
	"Symfony",
	"Express",
	"Next.js",
	"Nuxt.js",
	"Vite",
	"Flexbox",
	"Node"
];

/**
 * Join all skills
 * 
 * @returns 
 */
export function allSkills() {
	return [...languages, ...frameworks];
}
