class StyleguidistError extends Error {
	public extra: any;
	public constructor(message: string, extra?: any) {
        throw new Error("STUB");
    }
}

export default StyleguidistError;
