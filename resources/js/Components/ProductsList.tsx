import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import {
    Card,
    CardContent,
} from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"

export const ProductsList = () => {
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
                    <CarouselItem className="basis-1/5 ps-0">
                        <Card className="rounded-none shadow-none border h-[20rem] relative">
                            <CardContent className="p-2">
                                <p className="text-lg font-bold uppercase mt-2">best sale <span className="text-[red]">television</span></p>
                                <p className="text-lg"><span className="line-through text-gray-500">$800.00</span> $450.00</p>
                                <img src="/images/laptop-img.png" alt="laptop-sale" className="h-[11rem] w-full mt-3 " />
                                <Button className="capitalize bottom-2 rounded-none absolute" variant="destructive">shop now<i className="ms-2 ri-shopping-cart-line"></i></Button>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ps-0">
                        <Card className="rounded-none shadow-none border h-[20rem] relative">
                            <CardContent className="p-2">
                                <p className="text-lg font-bold uppercase mt-2">best sale <span className="text-[red]">television</span></p>
                                <p className="text-lg"><span className="line-through text-gray-500">$800.00</span> $450.00</p>
                                <img src="/images/laptop-img.png" alt="laptop-sale" className="h-[11rem] w-full mt-3 " />
                                <Button className="capitalize bottom-2 rounded-none absolute" variant="destructive">shop now<i className="ms-2 ri-shopping-cart-line"></i></Button>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ps-0">
                        <Card className="rounded-none shadow-none border h-[20rem] relative">
                            <CardContent className="p-2">
                                <p className="text-lg font-bold uppercase mt-2">best sale <span className="text-[red]">television</span></p>
                                <p className="text-lg"><span className="line-through text-gray-500">$800.00</span> $450.00</p>
                                <img src="/images/laptop-img.png" alt="laptop-sale" className="h-[11rem] w-full mt-3 " />
                                <Button className="capitalize bottom-2 rounded-none absolute" variant="destructive">shop now<i className="ms-2 ri-shopping-cart-line"></i></Button>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ps-0">
                        <Card className="rounded-none shadow-none border h-[20rem] relative">
                            <CardContent className="p-2">
                                <p className="text-lg font-bold uppercase mt-2">best sale <span className="text-[red]">television</span></p>
                                <p className="text-lg"><span className="line-through text-gray-500">$800.00</span> $450.00</p>
                                <img src="/images/laptop-img.png" alt="laptop-sale" className="h-[11rem] w-full mt-3 " />
                                <Button className="capitalize bottom-2 rounded-none absolute" variant="destructive">shop now<i className="ms-2 ri-shopping-cart-line"></i></Button>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ps-0">
                        <Card className="rounded-none shadow-none border h-[20rem] relative">
                            <CardContent className="p-2">
                                <p className="text-lg font-bold uppercase mt-2">best sale <span className="text-[red]">television</span></p>
                                <p className="text-lg"><span className="line-through text-gray-500">$800.00</span> $450.00</p>
                                <img src="/images/laptop-img.png" alt="laptop-sale" className="h-[11rem] w-full mt-3 " />
                                <Button className="capitalize bottom-2 rounded-none absolute" variant="destructive">shop now<i className="ms-2 ri-shopping-cart-line"></i></Button>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ps-0">
                        <Card className="rounded-none shadow-none border h-[20rem] relative">
                            <CardContent className="p-2">
                                <p className="text-lg font-bold uppercase mt-2">best sale <span className="text-[red]">television</span></p>
                                <p className="text-lg"><span className="line-through text-gray-500">$800.00</span> $450.00</p>
                                <img src="/images/laptop-img.png" alt="laptop-sale" className="h-[11rem] w-full mt-3 " />
                                <Button className="capitalize bottom-2 rounded-none absolute" variant="destructive">shop now<i className="ms-2 ri-shopping-cart-line"></i></Button>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ps-0">
                        <Card className="rounded-none shadow-none border h-[20rem] relative">
                            <CardContent className="p-2">
                                <p className="text-lg font-bold uppercase mt-2">best sale <span className="text-[red]">television</span></p>
                                <p className="text-lg"><span className="line-through text-gray-500">$800.00</span> $450.00</p>
                                <img src="/images/laptop-img.png" alt="laptop-sale" className="h-[11rem] w-full mt-3 " />
                                <Button className="capitalize bottom-2 rounded-none absolute" variant="destructive">shop now<i className="ms-2 ri-shopping-cart-line"></i></Button>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}
