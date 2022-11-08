import React from 'react'

function Theory() {
  return (
    <div>
      <div className='red'>
<h2>what is contex api ?</h2>
<p>advantages of Contex-API</p>
<p>1. Specifically designed for static data, that is not often refreshed or updated</p>
<p>2. UI logic and State Management Logic are in the same component</p>
<p>1. Initialize the Context
First, we need to create the context, which we can later use to create providers and consumers.  </p> 
<p>2.Create the Provider 
Once that’s done, we can import the context and use it to create our provider, which we’re calling MyProvider. In it, we initialize a state with some values, which you can share via value prop our provider component. Think of these methods as reducers in Redux.</p> 
<p> 
3. Create the Consumer
We need to import the context again and wrap our component with it which injects the context argument in the component. Afterward, it’s pretty straight forward. You use context, the same way you would use props. we just need to use it! 
</p> <hr></hr>

<h2>What is prop drilling?</h2>
Prop drilling is the process in a React app where props are passed from one part of a tree to another by going through other parts that do not need the data, but only help in passing it through the tree.
<p>There are three alternative solutions to solve the problem we encountered above:

<p>Redux:</p>  An external library that offers state management for React applications.
<p>Context:</p> An API that enables sharing inherently global data/state with components at different nesting levels.
<p>Component composition </p>: A technique which involves passing components to other components as props. It has two subcategories:
Container components
Specialized components</p>  <hr></hr>
<h2 className='red'>What is State Uplifting</h2>
<p>Lifting up the State: As we know, every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.

<p className='' >Time to use Lift up the State:</p> If the data in “parent and children components” or in “cousin components” is Not in Sync.

<p>Example 1</p> If we have 3 components in our App. A - B -C where, A is parent of B & C keeping the same data in both Component A and B might cause inconsistency of data. We simply pass the data to the A parent and then c can fetch the data from A instead of B </p> 
 </div>
 <hr></hr>
    </div>
  
  )
}

export default Theory