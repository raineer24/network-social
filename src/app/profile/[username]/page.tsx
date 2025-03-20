import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

export async function generateMetadata({
    params,
  }: {
    params: { username: string };
  }) {
    const user = await getProfileByUsername(params.username);

    if (!user) notFound();
}

async function ProfilePageServer({
    params,
  }: {
    params: { username: string };
  }) {
    const user = await getProfileByUsername(params.username);

    if (!user) notFound();
  
    const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
      getUserPosts(user.id),
      getUserLikedPosts(user.id),
      isFollowing(user.id),
    ]);
  }

export default ProfilePageServer;
