import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', like: 10},
        {id: 2, message: 'It\'s my post', like: 5},
        {id: 3, message: 'Shalom aa__ha', like: 55}
    ],};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("Hi, how are you");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you', like: 10},
            {id: 2, message: 'It\'s my post', like: 5},
            {id: 3, message: 'Shalom aa__ha', like: 55}
        ],};
    let newState = profileReducer(state, action);

    expect( newState.posts.length === 5).toBe(5)

});

test('message of posts should be correct ', () => {
    let action = addPostActionCreator("Hi, how are you");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you', like: 10},
            {id: 2, message: 'It\'s my post', like: 5},
            {id: 3, message: 'Shalom aa__ha', like: 55}
        ],};
    let newState = profileReducer(state, action)

    //expect( newState.posts.length === 5).toBe(5)
    expect(newState.posts[0].message).toBe("Hi, how are you")
});

test('after deleting length of messages should be decrement ', () => {
    let action = addPostActionCreator(1);

    let newState = profileReducer(state, action);

    expect( newState.posts.length).toBe(3)
});
