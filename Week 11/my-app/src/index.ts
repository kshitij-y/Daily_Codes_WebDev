export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			message: "You send a get request"
		})
	},
}

