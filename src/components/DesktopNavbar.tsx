import { currentUser } from "@clerk/nextjs/server";

async function DesktopNavbar() {
    const user = await currentUser();
    console.log('user', user);
  return (
    <div>DesktopNavbar</div>
  )
}

export default DesktopNavbar;