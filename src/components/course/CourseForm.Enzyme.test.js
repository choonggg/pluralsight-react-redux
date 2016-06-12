import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  
  return shallow(<CourseForm {...props} />);
}

describe('Test CourseForm with Enzyme', () => {
  it('renders form and H1', () => {
    const wrapper = setup(false);

    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button text is "Save" when not saving form', () => {
    const wrapper = setup(false);

    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button text is "Saving" when saving form', () => {
    const wrapper = setup(true);

    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
