
import axiosApi from "./config/axios.tsx";

export const UserApi = {
	getUserById: async function (id) {
		const response = await axiosApi.get(`/user/${id}`);

		return response.data;
	}
}