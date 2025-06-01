import {
    Card,
    CardContent,
} from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { ReactNode } from "react";

interface ProductBodyProps {
    lgimage: any;
    salename: ReactNode;
    salecount: ReactNode;
    bestsaleon: ReactNode;
    previousPrice: ReactNode;
    currentPrice: ReactNode;
    stimage: string | undefined;
}

interface ProductBodyComponentProps {
    productmainbody: ProductBodyProps[];
}

export const ProductBody = ({ productmainbody }: ProductBodyComponentProps) => {
    return (
        <div className="flex flex-row items-center">
            {productmainbody.map((item, index) => (
                <>
                    <Card className="rounded-none shadow-none border-0 w-3/4 h-[20rem]">
                        <CardContent className="p-0 flex flex-row items-center justify-center h-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item.lgimage})` }}>
                            <div className="w-full">
                                <h2 className="text-5xl text-white uppercase font-bold mb-3 text-center">{item.salename}</h2>
                                <h2 className="text-5xl text-white uppercase font-bold mb-3 text-center">{item.salecount}</h2>
                                <p className="text-white text-base text-center uppercase">on all products</p>
                                <div className="flex justify-center items-center mt-5">
                                    <Button className="capitalize rounded-none shadow" variant="destructive">explore more<i className="ri-menu-search-line"></i></Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-none shadow-none border w-1/4 h-[20rem] relative">
                        <CardContent className="p-2">
                            <p className="text-lg font-bold uppercase mt-2">best sale <span className="text-[red]">{item.bestsaleon}</span></p>
                            <p className="text-lg"><span className="line-through text-gray-500">{item.previousPrice}</span> {item.currentPrice}</p>
                            <img src={item.stimage} alt="laptop-sale" className="h-[11rem] w-full mt-3 " />
                            <Button className="capitalize bottom-2 rounded-none absolute" variant="destructive">shop now<i className="ms-2 ri-shopping-cart-line"></i></Button>
                        </CardContent>
                    </Card>
                </>
            ))}
        </div>
    )
}
