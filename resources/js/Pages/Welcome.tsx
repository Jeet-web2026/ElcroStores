import { MainLayout } from "@/Layout/MainLayout";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


export default function Welcome({
}) {

    return (
        <>
            <MainLayout>
                <main className="flex pt-[8rem] flex-row justify-center items-center h-screen">
                    <div className="flex flex-column bg-[#3B3B3B] h-[30rem]">
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
                            <li className="text-left text-lg font-medium pt-2 pe-[7rem] ps-2">all categories</li>
                        </ul>
                    </div>
                    <div className="w-[35rem] h-[30rem] overflow-hidden">
                        <Carousel plugins={[
                            Autoplay({ delay: 2000 }),
                        ]}>
                            <CarouselContent>
                                <CarouselItem>
                                    <img src="https://img.freepik.com/free-vector/modern-diwali-sale-composition-with-flat-design_23-2147939786.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740" alt="diwali bonus" className="w-[35rem] h-[30rem] object-cover object-top" />
                                </CarouselItem>
                                <CarouselItem>
                                    <img src="https://i.pinimg.com/736x/e4/80/72/e4807274e80a9b0d028d3c495fa273bd.jpg" alt="diwali bonus" className="w-[35rem] h-[30rem] object-cover object-top" />
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className="flex flex-row">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            plugins={[
                                Autoplay({ delay: 2000 }),
                            ]}
                            orientation="vertical"
                            className="w-full max-w-xs h-[30rem]"
                        >
                            <CarouselContent className="h-[30rem]">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem className="md:basis-1/2">
                                        <img src="https://i.pinimg.com/736x/e4/80/72/e4807274e80a9b0d028d3c495fa273bd.jpg" alt="diwali bonus" className="w-[35rem] h-[15rem] object-cover object-top" />
                                        <img src="https://img.freepik.com/free-vector/modern-diwali-sale-composition-with-flat-design_23-2147939786.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740" alt="diwali bonus" className="w-[35rem] h-[15rem] object-cover object-top" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </main>
            </MainLayout>
        </>
    );
}
