import {
    Card,
    CardContent,
} from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"

export const ProductBody = () => {
    return (
        <div className="flex flex-row items-center">
            <Card className="rounded-none shadow-none border-0 w-3/4 h-[20rem]">
                <CardContent className="p-0 flex flex-row items-center justify-center bg-[url(https://img.freepik.com/free-photo/laptop-near-smartphone-tags-tablet-packet_23-2147961975.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_hybrid&w=740)] h-full bg-center bg-cover bg-no-repeat">
                    <div className="w-full">
                        <h2 className="text-5xl text-white uppercase font-bold mb-3 text-center">new year sale</h2>
                        <h2 className="text-5xl text-white uppercase font-bold mb-3 text-center">flat 50% off</h2>
                        <p className="text-white text-base text-center uppercase">on all products</p>
                        <div className="flex justify-center items-center mt-5">
                            <Button className="capitalize rounded-none shadow" variant="destructive">explore more<i className="ri-menu-search-line"></i></Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="rounded-none shadow-none border w-1/4 h-[20rem] relative">
                <CardContent className="p-2">
                    <p className="text-lg font-bold uppercase mt-2">best sale <span className="text-[red]">television</span></p>
                    <p className="text-lg"><span className="line-through text-gray-500">$800.00</span> $450.00</p>
                    <img src="/images/laptop-img.png" alt="laptop-sale" className="h-[11rem] w-full mt-3 " />
                    <Button className="capitalize bottom-2 rounded-none absolute" variant="destructive">shop now<i className="ms-2 ri-shopping-cart-line"></i></Button>
                </CardContent>
            </Card>
        </div>
    )
}
