import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

/** 共通ヘッダーのコンポーネント */
export default function Header()
{
    return (
        <Navbar shouldHideOnScroll>
            <Link href="/">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Agiler</p>
                </NavbarBrand>
            </Link>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        機能
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        料金
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                <Button as={Link} color="primary" href="signup" variant="flat">
                    Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}