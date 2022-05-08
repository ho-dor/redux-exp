import { connect } from "react-redux";

const Home = ({ count, increaseBy1 }) => {
  const handleClick = () => {
    increaseBy1();
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>+</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseBy1: () => {
      dispatch({
        type: 1
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
