import {
    BellIcon,
    HomeIcon,
    LogOutIcon,
    MenuIcon,
    MoonIcon,
    SunIcon,
    UserIcon,
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
  import { useState } from "react";
  import { useAuth, SignInButton, SignOutButton } from "@clerk/nextjs";
  import { useTheme } from "next-themes";
  import Link from "next/link";


  import React from 'react'
  
  function MobileNavbar() {
    return (
    <div>
        <Button></Button>
        <span>Toggle theme</span>
    </div>
    )
  }
  
  export default MobileNavbar