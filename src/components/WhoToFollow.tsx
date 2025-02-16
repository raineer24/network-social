import { getRandomUsers } from "@/actions/user.actions";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
//import FollowButton from "./FollowButton";

async function WhoToFollow() {
    const users = await getRandomUsers();

    if (users?.length === 0) return null;


  return (
    <Card>
        <CardHeader>
            <CardTitle>Who to Follow</CardTitle>
        </CardHeader>
    </Card>
  )
}

export default WhoToFollow