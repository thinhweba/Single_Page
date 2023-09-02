import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';


const Brand = () => (
  <div className=" flex-wrap  flex-1 max-w-150 min-w-120 m-4 flex justify-center items-center">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
