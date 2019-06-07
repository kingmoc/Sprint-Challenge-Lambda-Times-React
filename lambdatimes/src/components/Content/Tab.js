import React from 'react';

const Tab = props => {
  
  console.log(props.selectedTab)
  console.log(props.tab)
  
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  //  let className = '';

  //  if(props.tab === props.selectedTab) {
  //    className = 'tab active-tab'
  //  } else {
  //    className = 'tab'
  //  } 
  
     
  return (
    <div
      id={props.tab}
      className={props.tab === props.selectedTab ? "tab active-tab" : "tab"}
      onClick={props.selectTabHandler}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;




// {() => {
//   /* Replace this dummy click handler function with your selectTabHandler function from props 
//    you'll need to pass the `tab` in as an argument to this handler. */
// }}