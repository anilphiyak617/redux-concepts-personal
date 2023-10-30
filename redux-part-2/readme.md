# CREATE Reducer {

USER: userReducer =====> handles user DATA
POST: postReducer =====> handles posts DATA
}

# Combined Reducers to One 'ROOT reducer'

redux.combineReducer({reducer_1,reducer_2 .....})

# subscribed to thhe store

store.subscribe(fun1)

# dispatched actions

store.dispatch(action)
