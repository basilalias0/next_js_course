
import { Metadata } from 'next';
import { title } from 'process';


type Props = {
  params:{
    productId:string,
    reviewId:string
  }
}



const page = ({params}:Props) => {
  return (
    <div>
      <h1>Product id : {params.productId}</h1>
      <h2>ReviewId : {params.reviewId}</h2>
    </div>
  );
}

export default page;
