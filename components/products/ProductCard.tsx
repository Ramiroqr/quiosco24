import { formatCurrency } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  return (
    <div className="border border-slate-300 bg-white">
        <Image 
            width={400}
            height={500}
            src={`/products/${product.image}.jpg`}
            alt={`Image platillo ${product.name}`}
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatCurrency(product.price)}
            </p>

            <AddProductButton 
                product={product}
            />
        </div>
    </div>
  )
}
