import React from 'react';
import { mount } from 'enzyme';
import Button from '..';
import mountTest from '../../../tests/shared/mountTest';

describe('Button', () => {
  mountTest(Button);
  mountTest(() => <Button size="large" />);
  mountTest(() => <Button size="small" />);

  it('renders correctly', () => {
    expect(<Button>Follow</Button>).toMatchRenderedSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mount(<Button>Follow</Button>)).not.toThrow();
  });
});
