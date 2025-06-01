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
} from "@/Components/ui/card"
import { ProductsShow } from "@/Components/ProductShow";
import { ProductBody } from "@/Components/ProductBody";
import { ProductsList } from "@/Components/ProductsList";


export default function Welcome({
}) {
    const productTab = [
        {
            productName: "television",
            oldPrice: "$800.00",
            newPrice: "$450.00",
            componentName: "fashion & beauty",
            tab1: "women",
            tab2: "watches",
            tab3: 'men',
            tab4: "accessories",
            tab5: "bags",
            tab6: "see all",
        }
    ];
    const productTab2 = [
        {
            productName: "television",
            oldPrice: "$800.00",
            newPrice: "$450.00",
            componentName: "technology",
            tab1: "electronics",
            tab2: "television",
            tab3: 'conditional',
            tab4: "laptop",
            tab5: "smartphone",
            tab6: "see all",
        }
    ];
    const productTab3 = [
        {
            productName: "television",
            oldPrice: "$800.00",
            newPrice: "$450.00",
            componentName: "furniture & decor",
            tab1: "chair",
            tab2: "wardrobe",
            tab3: 'coffie tables',
            tab4: "work place",
            tab5: "angene mafin",
            tab6: "see all",
        }
    ];
    const mainbody = [
        {
            salename: "new year sale",
            salecount: "flat 50% off",
            lgimage: "https://img.freepik.com/free-photo/laptop-near-smartphone-tags-tablet-packet_23-2147961975.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_hybrid&w=740",
            bestsaleon: "television",
            stimage: "/images/tv.png",
            previousPrice: "$800.00",
            currentPrice: "$450.00",
        }
    ];
     const mainbody2 = [
        {
            salename: "summer sale",
            salecount: "upto 70% off",
            lgimage: "https://img.freepik.com/free-psd/summer-background-template-composition-with-tropical-leaves-beach-objects-dark-scene_103373-1741.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740",
            bestsaleon: "laptops",
            stimage: "/images/laptop-img.png",
            previousPrice: "$600.00",
            currentPrice: "$350.00",
            productImage: "/images/laptop-img.png",
        }
    ];
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
                            ]}
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}>
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
                                    loop: true,
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
                                    loop: true,
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
                    <div className="w-[1300px] px-10">
                        <Carousel
                            plugins={[
                                Autoplay({ delay: 2000 }),
                            ]}
                            opts={{
                                align: "start",
                                loop: true,
                            }}>
                            <CarouselContent>
                                <CarouselItem className="basis-1/3">
                                    <Card className="w-full rounded-none shadow-none border-none group overflow-hidden cursor-pointer">
                                        <CardContent className="relative h-[15rem] bg-cover bg-center flex justify-center items-center bg-[url(https://img.freepik.com/free-psd/sales-discount-facebook-template_23-2149959351.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740)]">
                                            <div className="absolute left-0 top-0 w-full h-full bg-[#000000cf] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                            <div className="z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out text-center">
                                                <h2 className="text-white text-base uppercase font-bold">
                                                    latest mobile's & gadgets
                                                </h2>
                                                <div className="flex justify-center items-center">
                                                    <Button
                                                        variant="destructive"
                                                        className="capitalize text-white rounded-none px-4 py-2 text-sm mt-2 shadow-none"
                                                    >
                                                        shop now <i className="ri-shopping-bag-4-line"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="basis-1/3">
                                    <Card className="w-full rounded-none shadow-none border-none group overflow-hidden cursor-pointer">
                                        <CardContent className="bg-[url(https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_106176-4452.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740)] h-[15rem] bg-cover bg-center flex justify-center items-center relative">
                                            <div className="absolute left-0 top-0 w-full h-full bg-[#000000cf] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                            <div className="z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out text-center">
                                                <h2 className="text-white text-base uppercase font-bold">
                                                    laptop's accessories
                                                </h2>
                                                <div className="flex justify-center items-center">
                                                    <Button
                                                        variant="destructive"
                                                        className="capitalize text-white rounded-none px-4 py-2 text-sm mt-2 shadow-none"
                                                    >
                                                        shop now <i className="ri-shopping-bag-4-line"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="basis-1/3">
                                    <Card className="w-full rounded-none shadow-none border-none group overflow-hidden cursor-pointer">
                                        <CardContent className="bg-[url(https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_106176-1656.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740)] h-[15rem] bg-cover bg-center flex justify-center items-center relative">
                                            <div className="absolute left-0 top-0 w-full h-full bg-[#000000cf] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                            <div className="z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out text-center">
                                                <h2 className="text-white text-base uppercase font-bold">
                                                    home appliences & furniture
                                                </h2>
                                                <div className="flex justify-center items-center">
                                                    <Button
                                                        variant="destructive"
                                                        className="capitalize text-white rounded-none px-4 py-2 text-sm mt-2 shadow-none"
                                                    >
                                                        shop now <i className="ri-shopping-bag-4-line"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="basis-1/3">
                                    <Card className="w-full rounded-none shadow-none border-none group overflow-hidden cursor-pointer">
                                        <CardContent className="bg-[url(https://img.freepik.com/free-vector/fashion-sale-landing-page-with-photo_23-2148288151.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740)] h-[15rem] bg-cover bg-center flex justify-center items-center relative">
                                            <div className="absolute left-0 top-0 w-full h-full bg-[#000000cf] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                            <div className="z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out text-center">
                                                <h2 className="text-white text-base uppercase font-bold">
                                                    men's suits & fashion
                                                </h2>
                                                <div className="flex justify-center items-center">
                                                    <Button
                                                        variant="destructive"
                                                        className="capitalize text-white rounded-none px-4 py-2 text-sm mt-2 shadow-none"
                                                    >
                                                        shop now <i className="ri-shopping-bag-4-line"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="basis-1/3">
                                    <Card className="w-full rounded-none shadow-none border-none group overflow-hidden cursor-pointer">
                                        <CardContent className="bg-[url(https://img.freepik.com/free-psd/banner-template-fashion-sale-with-woman-shopping-bags_23-2148855870.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_items_boosted&w=740)] h-[15rem] bg-cover bg-center flex justify-center items-center relative">
                                            <div className="absolute left-0 top-0 w-full h-full bg-[#000000cf] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                            <div className="z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out text-center">
                                                <h2 className="text-white text-base uppercase font-bold">
                                                    women's fashion & accessories
                                                </h2>
                                                <div className="flex justify-center items-center">
                                                    <Button
                                                        variant="destructive"
                                                        className="capitalize text-white rounded-none px-4 py-2 text-sm mt-2 shadow-none"
                                                    >
                                                        shop now <i className="ri-shopping-bag-4-line"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                </section>
                <ProductsShow productsDetails={productTab} >
                    <ProductBody  productmainbody={mainbody} />
                    <ProductsList />
                </ProductsShow>
                <ProductsShow productsDetails={productTab2} >
                    <ProductBody  productmainbody={mainbody2} />
                    <ProductsList />
                </ProductsShow>
                <ProductsShow productsDetails={productTab3} >
                    <ProductBody  productmainbody={mainbody} />
                    <ProductsList />
                </ProductsShow>
            </MainLayout >
        </>
    );
}
