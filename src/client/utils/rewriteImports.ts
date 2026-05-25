// Temporary copy to fix
// https://github.com/lukeed/rewrite-imports/issues/10

const UNNAMED = /import\s*['"]([^'"]+)['"];?/gi;
const NAMED = /import\s*(\*\s*as)?\s*(\w*?)\s*,?\s*(?:\{([\s\S]*?)\})?\s*from\s*['"]([^'"]+)['"];?/gi;

function alias(key: string): { key: string; name: string } {
    throw new Error("STUB");
}

let num: number;
function generate(keys: string[], dep: string, base: string, fn: string): string {
    throw new Error("STUB");
}

export default function(str: string, fn = 'require'): string {
    throw new Error("STUB");
}
