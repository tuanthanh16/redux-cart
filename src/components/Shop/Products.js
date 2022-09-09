import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummItems = [
  {
    id: "p1",
    title: "Ipad Gen 9",
    description:
      "The iPad is a touchscreen tablet PC made by Apple. They run Apple's iOS mobile operating system and have Wi-Fi connectivity with optional 4G capabilities.",
    price: 9.9,
  },
  {
    id: "p2",
    title: "Iphone 14",
    description:
      "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface",
    price: 3.5,
  },
  {
    id: "p3",
    title: "Nintendo Switch",
    description:
      "The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers",
    price: 10,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummItems.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
