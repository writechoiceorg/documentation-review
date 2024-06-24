import React, { useEffect, useState } from 'react';
import Layout from '@theme-original/Layout';
import Feedback from '@site/src/components/Feedback/Feedback'; 

export default function LayoutWrapper(props) {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.pathname;
    setIsHomePage(currentUrl === '/');
  }, []);

  return (
    <>
      <Layout {...props} />
      {!isHomePage && <Feedback />}
    </>
  );
}