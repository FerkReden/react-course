const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';

const urls = {
    users: {
        base: users,
        //@ts-ignore
        byId: (id) => `${users}/${id}`
    },
    posts: {
        base: posts,
        //@ts-ignore
        byId: (id) => `${posts}/${id}`
    }
}

export { baseURL, urls }