import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import BudgetListContainer from '../budget/BudgetListContainer';
import './Tabs.css';

const arr = [];
for (var i = 0; i < 1000; i++) {
    arr.push(i);
}

const TabsExampleIconText = () => (
  <Tabs tabItemContainerStyle={{
    position: "fixed",
    height: "7vh",
    top: "7vh",
    zIndex: 10000
    }}>
    <Tab icon={<FontIcon className="material-icons">attach_money</FontIcon>}>
      <div className={"tabContent"}>
        <BudgetListContainer />
        {arr.map(i => ' '+i)}
      </div>
    </Tab>
    <Tab icon={<FontIcon className="material-icons">receipt</FontIcon>}>
      <div className={"tabContent"}>
        Transactions
      </div>
    </Tab>
    <Tab icon={<FontIcon className="material-icons">equalizer</FontIcon>}>
      <div className={"tabContent"}>
        Statistics
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleIconText;