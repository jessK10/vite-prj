export async function deleteUser(userId) {
	try {
		// Construct the DELETE request URL
		const url = `http://localhost:3000/api/users/${userId}`;
		
		// Define request options
		const options = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json", // Add headers only if needed
			},
		};
		
		// Make the DELETE request
		const res = await fetch(url, options);

		// Handle non-OK responses
		if (!res.ok) {
			throw new Error(`Error with the connection: ${res.status} ${res.statusText}`);
		}

		// Parse and return the response
		const data = await res.json();
		console.log("User deleted successfully:", data);
		return data;

	} catch (error) {
		// Log the error message
		console.error("Error:", error.message);

		// Return a meaningful response for error handling
		return { success: false, message: error.message };
	}
}
