import Image from "next/image";
import Link from "next/link";
import InteractiveCard from "./InteractiveCard";
import RatingControl from "./RatingControl";

interface CardProps {
  venueName: string;
  imgSrc: string;
  href?: string;
}

export default function Card({ venueName, imgSrc, href }: CardProps) {
  return (
    <InteractiveCard>
      <div className="w-64 h-80 flex flex-col overflow-hidden rounded-lg">
        {href ? (
          <Link href={href} className="group block cursor-pointer">
            <div className="relative w-full h-40">
              <Image
                src={imgSrc}
                alt={venueName}
                fill
                sizes="(max-width: 768px) 100vw, 250px"
                className="object-cover"
              />
            </div>
            <div className="px-4 pt-3 text-center">
              <p className="text-lg font-semibold text-gray-800 group-hover:underline">
                {venueName}
              </p>
            </div>
          </Link>
        ) : (
          <div className="block">
            <div className="relative w-full h-40">
              <Image
                src={imgSrc}
                alt={venueName}
                fill
                sizes="(max-width: 768px) 100vw, 250px"
                className="object-cover"
              />
            </div>
            <div className="px-4 pt-3 text-center">
              <p className="text-lg font-semibold text-gray-800">
                {venueName}
              </p>
            </div>
          </div>
        )}

        <div className="mt-auto">
          <RatingControl venueName={venueName} />
        </div>
      </div>
    </InteractiveCard>
  );
}
