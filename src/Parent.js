import Child from "./Child";
function Parent() {
  const fetchFromChildHandler = (count) => {
    console.log("count in parent", count);
  };
  return (
    <div>
      <h1>I am parent</h1>
      <Child onFetch={fetchFromChildHandler} />
    </div>
  );
}

export default Parent;
