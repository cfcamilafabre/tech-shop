export async function registerUser(userData: any) {

    const apiRegister = process.env.NEXT_PUBLIC_API_REGISTER
    try {
        const response = await fetch(`${apiRegister}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Failed to register user');
        }

        return await response.json();
    } catch (error:any) {
        throw new Error(error.message);
    }
}

export default registerUser;