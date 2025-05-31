import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/Components/ui/navigation-menu"
import { Link } from "@inertiajs/react"
import { Button } from "@/Components/ui/button"

export const Navbar = () => {
    return (
        <header className="fixed z-10 shadow-lg bg-white">
            <nav className="flex flex-row w-screen justify-between items-center px-14 bg-[#E1E1E1]">
                <div className="flex flex-row">
                    <div className="flex flex-row items-center me-3">
                        <h6 className="uppercase text-sm font-medium me-2">call us now</h6>
                        <a href="tel:+9163715179" className="text-sm font-medium text-[#DE3935]">+91 9163715179</a>
                    </div>
                    <div className="flex flex-row items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm bg-[#E1E1E1] px-0">English</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink className="text-sm">Link</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <span className="mx-2">|</span>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm bg-[#E1E1E1] px-0">USD</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink className="text-sm">Link</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-sm capitalize px-0 bg-[#E1E1E1]">my account</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink className="text-sm">Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <span className="mx-2">|</span>
                    <Link href='/my-wishlist' className="capitalize text-sm mb-0">my wishlist</Link>
                    <span className="mx-2">|</span>
                    <Link href='/checkout' className="capitalize text-sm mb-0">checkout</Link>
                </div>
            </nav>
            <nav className="flex flex-row w-screen justify-between items-center px-14 py-3">
                <Link href="/" className="font-bold">
                    <div className="flex flex-column items-center">
                        <img src="/images/logo.png" alt="website-logo" className="h-20 w-20" />
                        <div>
                            <h2 className="uppercase text-3xl">electro<span className="text-[red]">Stores</span></h2>
                            <p className="font-normal capitalize text-start text-base">order from everywhere<i className="ri-luggage-cart-line ms-2 text-lg text-orange-600"></i></p>
                        </div>
                    </div>
                </Link>
                <div className="border overflow-hidden w-[35%] flex flex-row justify-between">
                    <input type="text" className="border-none focus:outline-none focus:ring-0 focus:border-none shadow-none py-0 text-base" style={{ width: '-webkit-fill-available' }} />
                    <button className="bg-orange-600 py-2 px-2.5 text-base text-white"><i className="ri-search-2-line"></i></button>
                </div>
                <div className="flex flex-row">
                    <Button variant="secondary" className="text-xl bg-gray-100 rounded-full py-2.5 px-2"><i className="ri-shopping-bag-4-line"></i></Button>
                    <div className="flex flex-row items-center ms-10">
                        <i className="ri-user-line text-xl"></i>
                        <div className="ms-5">
                            <h5 className="capitalize text-sm mb-0">sign in / join free</h5>
                            <p className="mb-0 capitalize text-sm">welcome quest</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
