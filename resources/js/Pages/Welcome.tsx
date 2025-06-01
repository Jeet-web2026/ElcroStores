import { MainLayout } from "@/Layout/MainLayout";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"


export default function Welcome({
}) {

    return (
        <>
            <MainLayout>
                <main className="flex pt-[10rem] pb-5 flex-row justify-center items-center h-screen w-full bg-gray-100">
                    <div className="flex flex-row justify-center items-center h-full w-[1300px]">
                        <div className="flex flex-column bg-orange-600 h-[29rem]">
                            <ul className="text-white capitalize cursor-pointer">
                                <li className="text-left text-base font-medium py-2 border-b pe-[7rem] ps-2 bg-[#E83433]">hot deals</li>
                                <li className="text-left text-base font-medium py-2 border-b pe-[7rem] ps-2">smartphones</li>
                                <li className="text-left text-base font-medium py-2 border-b pe-[7rem] ps-2 relative">computer& laptops<span className="absolute right-2"><i className="ri-arrow-right-s-line"></i></span></li>
                                <li className="text-left text-base font-medium py-2 border-b pe-[7rem] ps-2">electronics</li>
                                <li className="text-left text-base font-medium py-2 border-b pe-[7rem] ps-2">gaming gear</li>
                                <li className="text-left text-base font-medium py-2 border-b pe-[7rem] ps-2">home furniture</li>
                                <li className="text-left text-base font-medium py-2 border-b pe-[7rem] ps-2">sport cloths</li>
                                <li className="text-left text-base font-medium py-2 border-b pe-[7rem] ps-2">home appliances</li>
                                <li className="text-left text-base font-medium py-2 border-b pe-[7rem] ps-2">beauty & healthy</li>
                                <li className="text-left text-base font-medium py-2 border-b pe-[7rem] ps-2">organic food</li>
                                <li className="text-left text-lg font-medium pt-2 pe-[7rem] ps-2 text-white relative">all categories<span className="absolute right-2"><i className="ri-arrow-right-s-fill text-2xl"></i></span></li>
                            </ul>
                        </div>
                        <div className="h-[29rem] overflow-hidden flex-3 w-1/3">
                            <Carousel plugins={[
                                Autoplay({ delay: 2000 }),
                            ]}>
                                <CarouselContent>
                                    <CarouselItem className="bg-[url(https://img.freepik.com/free-vector/modern-diwali-sale-composition-with-flat-design_23-2147939786.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740)]  bg-cover bg-center flex justify-center items-center relative">
                                        <div className="absolute bottom-5">
                                            <h2 className="text-white text-2xl text-center capitalize text-wrap font-bold">sale 50% off on all products</h2>
                                            <p className="text-sm text-white text-center">be quick only 100 products available</p>
                                            <div className="flex justify-center items-center mt-4">
                                                <Button className="uppercase text-center rounded-none px-5 py-2" variant="destructive">shop now<i className="ri-arrow-right-s-line"></i></Button>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src="https://i.pinimg.com/736x/e4/80/72/e4807274e80a9b0d028d3c495fa273bd.jpg" alt="diwali bonus" className="w-full h-[30rem] object-cover object-top" />
                                    </CarouselItem>
                                </CarouselContent>
                            </Carousel>
                        </div>
                        <div className="flex flex-row w-1/5">
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                plugins={[
                                    Autoplay({ delay: 1500 }),
                                ]}
                                orientation="vertical"
                                className="w-full max-w-xs h-[29rem]"
                            >
                                <CarouselContent className="h-[30rem]">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem className="md:basis-1/2">
                                            <img src="https://i.pinimg.com/736x/e4/80/72/e4807274e80a9b0d028d3c495fa273bd.jpg" alt="diwali bonus" className="w-full h-[15rem] object-cover object-top" />
                                            <img src="https://img.freepik.com/free-vector/modern-diwali-sale-composition-with-flat-design_23-2147939786.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740" alt="diwali bonus" className="w-full h-[15rem] object-cover object-top" />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                        <div className="flex flex-row w-1/5">
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                plugins={[
                                    Autoplay({ delay: 2000 }),
                                ]}
                                orientation="vertical"
                                className="w-full max-w-xs h-[29rem]"
                            >
                                <CarouselContent className="h-[30rem]">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem className="md:basis-1/2">
                                            <img src="https://i.pinimg.com/736x/e4/80/72/e4807274e80a9b0d028d3c495fa273bd.jpg" alt="diwali bonus" className="w-full h-[15rem] object-cover object-top" />
                                            <img src="https://img.freepik.com/free-vector/modern-diwali-sale-composition-with-flat-design_23-2147939786.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740" alt="diwali bonus" className="w-full h-[15rem] object-cover object-top" />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </main>
                <section className="py-5 h-full flex flex-row items-center justify-center bg-gray-100">
                    <div className="flex flex-row items-center w-[1300px] gap-6 px-10">
                        <Card className="w-full rounded-none shadow-none border-none">
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                        <Card className="w-full rounded-none shadow-none border-none">
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                        <Card className="w-full rounded-none shadow-none border-none">
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </div>
                </section>
            </MainLayout>
        </>
    );
}
