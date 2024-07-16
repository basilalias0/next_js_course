import { Metadata } from "next";

type Props = {
  params:{
    productId:string
  }
}



export const generateMetadata = ({params}: Props): Metadata =>{
  return{
    title:` Product ${params.productId}`

    }
}


const page = ({params}:Props) => {
  return (
    <div>
      <h1>Product Details {params.productId}</h1>
    </div>
  );
}

export default page;
