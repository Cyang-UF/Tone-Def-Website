export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH-ALL':
            return action.payload;
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case 'CREATE':
            return [...posts, action.payload];
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}