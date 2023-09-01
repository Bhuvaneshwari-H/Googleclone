 import React, { createContext, ueContext, useReducer } from
"react";

//Preparing the datalink layer
export const StateContext=createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
<StateContext.Provider value={useReducer(reducer,initialState)}>
{children}
</StateContext.Provider>

);

export const useStateValue = () => useContext(StateContext);
  


/*To make sure the data is organized and updated properly, you need a "manager" that controls this special box.
The StateProvider function sets up this manager. It takes three things:
reducer: This is like a set of rules for how to update the data in the box.
initialState: This is the starting data that goes into the box.
children: This is whatever parts of your app will use this shared data.

Using the Shared Data (useStateValue):

Now, whenever a part of your app wants to use this shared data, it just needs to ask the "manager".
The useStateValue function is like a phone that connects to the "manager". When you call this function, it connects you to the data in the box.
So, in simpler terms, this code helps create a space where different parts of your app can put data they want to share and use. It also sets up a way to manage and update that data. When your app's different parts need to use that shared data, they can easily access it using a special function. This makes it easier to keep things organized and make sure everyone in your app is on the same page about what data is being used.




