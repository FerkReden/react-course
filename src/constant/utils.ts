const baseURL = 'https://jsonplaceholder.typicode.com/';

const posts = '/posts'

const urls = {
    posts: {
        base: posts,
        //@ts-ignore
        byId: (id) => `${posts}/${id}`,
    }
}

export { baseURL, urls }