import {
    Card,
    CardContent,
} from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"

type ProductDetails = {
    star: any,
    product: string;
    previousPrice: string | number;
    currentPrice: string | number;
    image: string;
};

interface ProductCardProps {
    details: ProductDetails;
}

export const ProductCard = ({ details }: ProductCardProps) => {
    const totalStars = 5;
    return (
        <Card className="rounded-none shadow-none border h-[21rem] relative">
            <CardContent className="p-2">
                {[...Array(totalStars)].map((_, i) => (
                    <i
                        key={i}
                        className={i < details.star ? "text-yellow-400 ri-star-fill" : "text-gray-300 ri-star-line"}
                    ></i>
                ))}
                <p className="text-lg font-bold uppercase mt-2">best sale <span className="text-[red]">{details.product}</span></p>
                <p className="text-lg"><span className="line-through text-gray-500">{details.previousPrice}</span> {details.currentPrice}</p>
                <img src={details.image} alt="laptop-sale" className="h-[11rem] w-full mt-3 " />
                <Button className="capitalize bottom-2 rounded-none absolute" variant="destructive">shop now<i className="ms-2 ri-shopping-cart-line"></i></Button>
            </CardContent>
        </Card>
    )
}
