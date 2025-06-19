function compStringPrice(a: string, b: string): number {
	const strA = a.trim().split(".");
	const strB = b.trim().split(".");

	if (strA[0] === strB[0]) {
		return strA[1].localeCompare(strB[1]);
	}

	const dollarA = strA[0].replace("$", "");
	const dollarB = strB[0].replace("$", "");

	return Number(dollarA) - Number(dollarB);
}

export { compStringPrice };
