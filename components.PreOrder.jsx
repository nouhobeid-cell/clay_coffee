export default function PreOrder() {
  return (
    <div>
      <h2>Pre Order</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Order Sent ☕");
      }}>
        <input placeholder="Name" />
        <br />
        <input placeholder="Order" />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
