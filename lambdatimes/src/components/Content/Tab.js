import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  
  // console.log(props.selectedTab)
  // console.log(props.tab)

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
     
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
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
}

export default Tab;




