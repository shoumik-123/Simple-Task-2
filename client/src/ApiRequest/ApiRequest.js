const BASEURL = "http://localhost:7410/api/v1"
import axios from "axios"

export async function allUsers() {
    try {
        const result = await axios.get(BASEURL + "/allUsers");
        if (result && result.data ) {
            return result.data.data[0];
        } else {
            return [];
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export async function SingleUser(id) {
    try {
        const result = await axios.get(BASEURL + "/user/" + id);
        console.log(result, "API response");
        return result;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}
