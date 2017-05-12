import React from 'react';
import Header from './Header';
import '../styles/Page.css';

const Page = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default Page;