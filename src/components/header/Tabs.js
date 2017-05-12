import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import BudgetPage from '../budget/BudgetPage';

const TabsExampleIconText = () => (
  <Tabs>
    <Tab icon={<FontIcon className="material-icons">attach_money</FontIcon>}>
        <BudgetPage />
    </Tab>
    <Tab icon={<FontIcon className="material-icons">receipt</FontIcon>}>
        Transactions
    </Tab>
    <Tab icon={<FontIcon className="material-icons">equalizer</FontIcon>}>
        Statistics
    </Tab>
  </Tabs>
);

export default TabsExampleIconText;