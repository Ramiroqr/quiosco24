import ProductCard from "@/components/products/ProductCard"
import { prisma } from "@/src/lib/prisma"
import { Prosto_One } from "next/font/google"

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })

  return products
}


export default async function OrderPage({params}: {params: {category: string}}) {

  const {category} = await params
  const products = await getProducts(category)


  return (

    <>
      <h1 className="text-3xl my-10 font-semibold">
        Elige y personaliza tu pedido.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}
