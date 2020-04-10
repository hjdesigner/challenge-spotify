import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import Token from 'components/Token';
import Loading from 'components/Loading';
import Theme from 'utils/theme';
import { statusToken } from 'reduxFlow/reducers/token/action-creators';
import { falseLoader } from 'reduxFlow/reducers/loader/action-creators';

const App = ({
  viewToken,
  loading,
  showToken,
  hiddenToken,
}) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === '' || token === null) {
      return showToken();
    }
    return hiddenToken();
  }, []);

  return (
    <Theme>
      {loading && <Loading />}
      {!viewToken && !loading && <Token />}
    </Theme>
  );
};

const mapStateProps = (state) => ({
  viewToken: state.token.status,
  loading: state.loader.status,
});

const mapDispatchToProps = (dispatch) => ({
  showToken: () => {
    dispatch(statusToken(false));
    dispatch(falseLoader());
  },
  hiddenToken: () => {
    dispatch(statusToken(true));
    dispatch(falseLoader());
  },
});

App.propTypes = {
  viewToken: bool.isRequired,
  loading: bool.isRequired,
  showToken: func.isRequired,
  hiddenToken: func.isRequired,
};

export default connect(mapStateProps, mapDispatchToProps)(App);
