function FoodItems(){
    return (
        <ul className="list-group">
        {FoodItemsoodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    )
}
export default FoodItems;
