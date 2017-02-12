import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { shallow } from 'enzyme';

import Tooltip from '.';

const wrap = (props = {}) => shallow(
  <Tooltip data-title="title" {...props} >
    <p>fafa</p>
  </Tooltip>
  ,
);

it('renders data-title', () => {
  const wrapper = wrap();
  expect(wrapper.find({ children: 'title' })).toHaveLength(1);
});
