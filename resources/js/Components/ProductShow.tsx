import { Button } from "@/Components/ui/button"
import { Separator } from "@radix-ui/react-dropdown-menu"
import {
  Card,
  CardContent,
} from "@/Components/ui/card"

export const ProductsShow = () => {
  return (
    <section className="py-5 h-full flex flex-row items-center justify-center">
      <div className="w-[1300px] px-10">
        <div className="bg-[#E8E8E8] flex flex-row items-center justify-between pe-5">
          <div className="flex flex-row items-center gap-3">
            <h3 className="uppercase text-lg font-bold text-white bg-orange-600 p-3 pe-10">fashion and beauty</h3>
            <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">women</Button>
            <Separator className="h-[15px] w-[1px] bg-gray-800" />
            <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">watches</Button>
            <Separator className="h-[15px] w-[1px] bg-gray-800" />
            <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">men</Button>
            <Separator className="h-[15px] w-[1px] bg-gray-800" />
            <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">accessories</Button>
            <Separator className="h-[15px] w-[1px] bg-gray-800" />
            <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">bags</Button>
          </div>
          <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">see all<i className="ri-arrow-right-s-fill"></i></Button>
        </div>
        <div className="flex flex-row items-center">
          <Card className="rounded-none shadow-none border-0 w-3/4 h-[20rem]">
            <CardContent className="pe-0 pb-0 flex flex-row items-center justify-center bg-[url(https://img.freepik.com/free-photo/laptop-near-smartphone-tags-tablet-packet_23-2147961975.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_hybrid&w=740)] h-full bg-center bg-cover bg-no-repeat">
              <div>
                <h2 className="text-3xl text-white uppercase font-bold mb-3 text-center">new year sale</h2>
                <h2 className="text-xl text-white uppercase font-bold items-center flex text-center">flat<span className="text-5xl text-white mx-3">50%</span>off</h2>
                <h2 className="text-7xl text-white uppercase font-black ms-5"></h2>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
