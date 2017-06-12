import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import BudgetViewContainer from '../budget/view/BudgetViewContainer';
import Paper from 'material-ui/Paper';

const TabsExampleIconText = () => (
  <Tabs tabItemContainerStyle={{
    position: "fixed",
    height: "50px",
    top: "50px",
    zIndex: 1000
    }}>
    <Tab icon={<FontIcon className="material-icons">attach_money</FontIcon>}>
      <div style={{marginTop: "100px"}}>
        <Paper style={{
            padding: 20,
            display: 'inline-block',
            width: "100%"
          }} zDepth={2} >
          <BudgetViewContainer />
        </Paper>
      </div>
    </Tab>
    <Tab icon={<FontIcon className="material-icons">receipt</FontIcon>}>
      <div style={{marginTop: "100px"}}>
        <h3 style={{textAlign: "center"}}>Coming Soon - Transactions</h3>
      </div>
    </Tab>
    <Tab icon={<FontIcon className="material-icons">equalizer</FontIcon>}>
      <div style={{marginTop: "100px"}}>
        <h3 style={{textAlign: "center"}}>Coming Soon - Statistics</h3>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleIconText;