function Child(props) {
  const counter = 10;
  props.onFetch(counter);
  return <h2>I am child</h2>;
}

export default Child;
