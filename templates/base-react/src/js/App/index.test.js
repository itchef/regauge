import React from 'react';
import App from '.';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should render successfully', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should contains logo', () => {
    expect(wrapper.find('.app__content img')).toBeDefined();
  });

  it('should have footer message', () => {
    expect(wrapper.find('.app__footer').text()).toEqual('Your app has been created. To know more visit regauge.');
  });
});
