import { Button } from "@/Components/ui/button"
import { Separator } from "@radix-ui/react-dropdown-menu"

interface ProductDetailsItem {
  componentName: string;
  tab1: string;
  tab2: string;
  tab3: string;
  tab4: string;
  tab5: string;
  tab6: string;
}

interface ProductsShowProps {
  productsDetails: ProductDetailsItem[];
}

export const ProductsShow = ({ productsDetails, children }: ProductsShowProps & { children?: React.ReactNode }) => {
  return (
    <section className="py-5 h-full flex flex-row items-center justify-center">
      <div className="w-[1300px] px-10">
        {productsDetails.map((item, index) => (
          <div key={index} className="bg-[#E8E8E8] flex flex-row items-center justify-between pe-5">
            <div className="flex flex-row items-center gap-3">
              <h3 className="uppercase text-lg font-bold text-white bg-orange-600 p-3 pe-10">{item.componentName}</h3>
              <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">{item.tab1}</Button>
              <Separator className="h-[15px] w-[1px] bg-gray-800" />
              <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">{item.tab2}</Button>
              <Separator className="h-[15px] w-[1px] bg-gray-800" />
              <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">{item.tab3}</Button>
              <Separator className="h-[15px] w-[1px] bg-gray-800" />
              <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">{item.tab4}</Button>
              <Separator className="h-[15px] w-[1px] bg-gray-800" />
              <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">{item.tab5}</Button>
            </div>
            <Button className="capitalize text-base bg-transparent border-0 shadow-none text-black hover:bg-transparent px-1">{item.tab6}<i className="ri-arrow-right-s-fill"></i></Button>
          </div>
        ))}
        {children}
      </div>
    </section>
  )
}
