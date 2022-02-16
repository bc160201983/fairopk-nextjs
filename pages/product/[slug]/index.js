import CategoryNav from "../../../components/CategoryNav/CategoryNav";
import { api } from "../../../lib/woo";

const product = ({ product, mainCat }) => {
  return (
    <div>
      <CategoryNav categoriesData={mainCat} />
      <h2>{product[0].name}</h2>
    </div>
  );
};

export default product;

export async function getServerSideProps(context) {
  const { params } = context;
  const [productRes, catRes] = await Promise.all([
    api.get(`products`, { slug: params.slug }),
    api.get("products/categories", { per_page: 200 }),
  ]);
  const [product, mainCat] = await Promise.all([
    productRes.data,
    catRes.data.filter((cat) => cat.display !== "subcategories"),
  ]);

  return {
    props: {
      product: product,
      mainCat,
    }, // will be passed to the page component as props
  };
}
