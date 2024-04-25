
import axiosApi from "./config/axios.tsx";

export const UserApi = {
	getUserById: async function (id) {
		const response = await axiosApi.get(`/user/${id}`);

		return response.data;
	},

	getUserActivity: async function (id) {
		const response = await axiosApi.get(`/user/${id}/activity`);

		return response.data;
	},

	getUserAverageSession: async function(id) {
		const response = await axiosApi.get(`/user/${id}/average-sessions`);

		return response.data;
	}
}