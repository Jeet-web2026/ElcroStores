import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ProductCard } from "./ProductCard"

interface ProductsListProps {
    star: any,
    product: string;
    previousPrice: string | number;
    currentPrice: string | number;
    image: string,
}

interface ProductsList {
    products: ProductsListProps[];
}

export const ProductsList = ({ products }: ProductsList) => {
    return (
        <div className="flex flex-row items-center">
            <Carousel
                plugins={[
                    Autoplay({ delay: 2000 }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}>
                <CarouselContent className="mx-[0.5px]">
                    {products.map((product, index) => (
                        <CarouselItem className="basis-1/5 ps-0">
                            <ProductCard
                                key={index}
                                details={product}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
