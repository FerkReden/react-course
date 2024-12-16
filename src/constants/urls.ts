const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users'
const posts = '/posts'
const comments = '/comments'

const urls = {
    users: {
        base: users,
        byId: (id: number) =>  `${users}/${id}`
    },
    posts: {
        base: posts,
        byId: (userId: number) => `${posts}/${userId}`
    },
    comments: {
        base: comments,
    },
};

export { urls, baseURL }