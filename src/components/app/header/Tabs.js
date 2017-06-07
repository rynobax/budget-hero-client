import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import BudgetViewContainer from '../budget/view/BudgetViewContainer';
import Paper from 'material-ui/Paper';
import './Tabs.css';

const TabsExampleIconText = () => (
  <Tabs tabItemContainerStyle={{
    position: "fixed",
    height: "50px",
    top: "50px",
    zIndex: 1000
    }}>
    <Tab icon={<FontIcon className="material-icons">attach_money</FontIcon>}>
      <div className={"tabContent"}>
        <Paper style={{
            padding: 20,
            margin: 20,
            display: 'inline-block',
          }} zDepth={2} >
          <BudgetViewContainer />
        </Paper>
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