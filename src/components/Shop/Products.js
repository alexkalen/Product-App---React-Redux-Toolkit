import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: 1, title: "Slippers", price: 12, description: "Sleeping slippers" },
  { id: 2, title: "Pijamas", price: 25, description: "Sleeping Clothes" },
  { id: 3, title: "Blanket", price: 12, description: "Sleeping blanket" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products) => {
          return (
            <ProductItem
              key={products.id}
              id={products.id}
              title={products.title}
              price={products.price}
              description={products.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
