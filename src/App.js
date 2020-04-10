import React, { useEffect } from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import Title from 'components/Title';
import { addTitle } from 'reduxFlow/reducers/title/action-creators';

const App = ({ text, changeTitle }) => {
  useEffect(() => {
    changeTitle('React with Webpack and Babel!');
  }, []);

  return (
    <Title title={text} />
  );
};

const mapStateProps = (state) => ({
  text: state.title.title,
});

const mapDispatchToProps = (dispatch) => ({
  changeTitle: (value) => {
    dispatch(addTitle(value));
  },
});

App.defaultProps = {
  text: '',
  changeTitle: () => {},
};

App.propTypes = {
  text: string,
  changeTitle: func,
};

export default connect(mapStateProps, mapDispatchToProps)(App);
