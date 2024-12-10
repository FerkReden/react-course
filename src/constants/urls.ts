const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users';

const urls = {
    users: {
        base: users,
        byId: (id: number) => `${users}/${id}`,
        getPostsById: (userId: number) => `${users}/${userId}/posts`
    }
}

export { baseURL, urls };