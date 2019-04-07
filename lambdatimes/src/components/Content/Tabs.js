import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import styled from 'styled-components';

const TabsDiv = styled.div`
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
height: 47px;
background-color: #fff;
@media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Topics = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
span {
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
}
Tab {  
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
}
`;


const Tabs = props => {
  return (
    <div className='tabs'>
      <div className='topics'>
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, i) => (
          <Tab
            tab={tab}
            key={i}
            selectedTab={props.selectedTab}
            selectTabHandler={props.selectTabHandler}
          />
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tabs;
