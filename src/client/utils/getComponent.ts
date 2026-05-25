type Module = DefaultExport | { [name: string]: any };

interface DefaultExport {
	default: any;
}

function isDefaultExport(module: Module): module is DefaultExport {
    throw new Error("STUB");
}

/**
 * Given a component module and a name,
 * return the appropriate export.
 * See /docs/Components.md
 */
export default function getComponent(module: Module, name?: string): Module {
    throw new Error("STUB");
}
