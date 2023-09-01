export const initialState = {
	term: null,
};

export const actionTypes = {
	SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
	console.log(action);
 
	switch (action.type) {
		case actionTypes.SET_SEARCH_TERM:
		return {
			...state,
			term:action.term,
		};
		default:
		  return state;
	}
};

export default reducer; 

/*Making Decisions with the Reducer (reducer):

Imagine you have a special person, the "reducer," whose job is to look at something and decide what to do based on it.
In this code, the reducer is like that special person. It looks at an action and decides what to do next.
Looking at the Action (console.log(action)):

The reducer is curious and wants to see what's going on. So, the first thing it does is look at the action.
Just like you might read a note to know what someone wants, the reducer reads the action to understand what needs to be done.
Deciding What to Do (switch):

Now the reducer starts thinking about what to do based on what it read in the action.
It's like having a bunch of choices, and each choice has a label (like a case) on it.
The switch is like looking at all these choices and deciding which one to pick.
Picking a Choice (case actionTypes.SET_SEARCH_TERM):

The reducer reads the action.type to figure out which choice to pick.
In this case, if the action's type is SET_SEARCH_TERM, it knows what to do next.
Making a Change (return {...state, term: action.term}):

The reducer is helpful and wants to make things better. So, if it knows what to do, it starts making changes.
It takes the state (like a picture of what's happening) and changes a specific part of it.