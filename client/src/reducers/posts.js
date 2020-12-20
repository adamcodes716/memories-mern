export default (posts = [], action) => {

    switch (posts= [], action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE': 
            return [...posts, action.payload];
        default: 
            return posts;
    }
}