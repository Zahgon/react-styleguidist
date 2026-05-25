type Module = { [name: string]: any } | (() => any);
type RequireMap = { [filepath: string]: Module };

/**
 * Return module from a given map (like {react: require('react')}) or throw.
 * We allow to require modules only from Markdown examples (won’t work dynamically because we need to know all required
 * modules in advance to be able to bundle them with the code).
 */
export default function requireInRuntime(requireMap: RequireMap, filepath: string): Module {
    throw new Error("STUB");
}
