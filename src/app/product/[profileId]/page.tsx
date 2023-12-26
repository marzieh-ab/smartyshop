import Container from "@/components/Container";
import { getSingleProudct, getTrendingProducts } from "@/helpers";
import { Products } from "../../../../type";
import ProductsData from "@/components/ProductsData";
import SignleProduct from "@/components/SignleProduct";

type Props = {
  params: { [key: string]: string | string[] | undefined };
};

const ProuctPage = async ({params}: Props) => {
 
   const _idString = params.profileId;
  
  const _id = Number(_idString);
  const product = getSingleProudct(_id);
  const data = await getTrendingProducts();

  return (
    <div>
      <Container>
        <SignleProduct product={product} />
        <div>
          <p className="text-xl py-1 font-semibold">Tranding Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {data?.map((item: Products) => (
              <ProductsData key={item._id} item={item} />
            ))}
          </div>
        </div>
      </Container>
      <h1>nnnn</h1>
    </div>
  );
};

export default ProuctPage;
