import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface CircleAvatarProps {
  status?: "available" | "busy";
}

/**
 * This component is a custom circle avatar that can be used to display a profile picture.
 * It accepts a status, which will be displayed as a small circle at the bottom right.
 *
 * @param {"available" | "busy"} status - The status of the user.
 * @returns {React.ReactNode} The circle avatar.
 */
const CircleAvatar = ({ status }: CircleAvatarProps) => {
  return (
    <div className="relative w-[150px] h-[150px]">
      <Image
        src="/images/personal-image.png"
        className="object-cover object-top aspect-square rounded-full bg-background"
        alt="Personal Image Avatar"
        width={150}
        height={150}
      />
      {status && (
        <div
          className={twMerge(
            "absolute bottom-6 right-2 w-4 h-4 rounded-full ",
            status === "available" ? "bg-green" : "bg-red-500"
          )}
        />
      )}
    </div>
  );
};

export default CircleAvatar;
