import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Input from './index';
import Theme from '../../utils/theme';

describe('Input Test Suite', () => {
  it('Should have an input', () => {
    const wrapper = mount(<Theme><Input handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input')).to.have.lengthOf(1);
  });
  it('It should return the type of the input equal to that passed in the prop type', () => {
    const wrapper = mount(<Theme><Input type='text' handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().type).to.equal('text');
  });
  it('It should return the type of the input equal to that passed in the prop type', () => {
    const wrapper = mount(<Theme><Input type='search' handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().type).to.equal('search');
  });
  it('It should return the type of the input equal to text if it does not pass the prop type', () => {
    const wrapper = mount(<Theme><Input handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().type).to.equal('text');
  });

  it('It should return the id of the input equal to that passed in the prop type', () => {
    const wrapper = mount(<Theme><Input name='search' handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().id).to.equal('search');
  });
  it('It should return the id of the input equal to that passed in the prop type', () => {
    const wrapper = mount(<Theme><Input name='token' handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().id).to.equal('token');
  });
  it('It should return the id of the input equal to text if it does not pass the prop type', () => {
    const wrapper = mount(<Theme><Input handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().id).to.equal('text');
  });

  it('It should return the placeholder of the input equal to that passed in the prop type', () => {
    const wrapper = mount(<Theme><Input placeholder='Start writing' handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().placeholder).to.equal('Start writing');
  });
  it('It should return the placeholder of the input equal to that passed in the prop type', () => {
    const wrapper = mount(<Theme><Input placeholder='Type it' handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().placeholder).to.equal('Type it');
  });
  it('It should return the placeholder of the input equal to text if it does not pass the prop type', () => {
    const wrapper = mount(<Theme><Input handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().placeholder).to.equal('Digite...');
  });

  it('It should return the value of the input equal to that passed in the prop type', () => {
    const wrapper = mount(<Theme><Input value='Dead Fish' handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().value).to.equal('Dead Fish');
  });
  it('It should return the value of the input equal to that passed in the prop type', () => {
    const wrapper = mount(<Theme><Input value='Foo Fighters' handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().value).to.equal('Foo Fighters');
  });
  it('It should return the value of the input equal to text if it does not pass the prop type', () => {
    const wrapper = mount(<Theme><Input handleChange={() => {}} /></Theme>);
    expect(wrapper.find('input').props().value).to.equal('');
  });
  
  it('Should have an label', () => {
    const wrapper = mount(<Theme><Input handleChange={() => {}} /></Theme>);
    expect(wrapper.find('label')).to.have.lengthOf(1);
  });
  it('It should return the htmlFor of the label equal to that passed in the prop type', () => {
    const wrapper = mount(<Theme><Input name='search' handleChange={() => {}} /></Theme>);
    expect(wrapper.find('label').props().htmlFor).to.equal('search');
  });
  it('It should return the htmlFor of the label equal to text if it does not pass the prop type', () => {
    const wrapper = mount(<Theme><Input handleChange={() => {}} /></Theme>);
    expect(wrapper.find('label').props().htmlFor).to.equal('text');
  });
  it('It should return the text of the label equal to that passed in the prop type', () => {
    const wrapper = mount(<Theme><Input text='Search' handleChange={() => {}} /></Theme>);
    expect(wrapper.find('label').text()).to.equal('Search');
  });
  it('It should return the text of the label equal to text if it does not pass the prop type', () => {
    const wrapper = mount(<Theme><Input handleChange={() => {}} /></Theme>);
    expect(wrapper.find('label').text()).to.equal('text');
  });
});