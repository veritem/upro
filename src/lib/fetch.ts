export default async function fetcher<JSON = Record<any, unknown>>(
	input: RequestInfo,
	init?: RequestInit
): Promise<JSON> {
	const res = await fetch(input, init)
	return res.json()
}
