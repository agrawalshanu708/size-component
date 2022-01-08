import "./styles.css";
function SizeComponent() {
  const sizeList = ["S", "M", "L", "XL", "XXL"];
  return (
    <>
      <div className="size-box">
        <div className="size-tiitle-box">
          <div className="size-head"> SELECT SIZE </div>
          <a className="size-link" href="./">
            {" "}
            SIZE CHART
          </a>
        </div>
        <div className="size-name-box">
          {sizeList.map((item) => (
            <div className="size-name"> {item}</div>
          ))}
        </div>
      </div>
      <div className="button-box">
        <button className="cart-button"> ADD TO BAG </button>
        <button className="wish-button"> WISHLIST </button>
      </div>
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <SizeComponent />
    </div>
  );
}
