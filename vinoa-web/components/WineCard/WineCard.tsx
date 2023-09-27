"use client";
import Image from "next/image";
import Link from "next/link";
interface WineProps {
  wine: Wine;
}
const WineCard = ({
  wine: { name, imageUrl, country, region, colour, smell, taste, slug },
}: WineProps) => {
  return (
    <Link href={`/wines/${slug}`}>
      <div className="bg-violet-dark m-4 p-4 flex flex-row">
        <div>
          <Image
            width={160}
            height={160}
            alt="Image of a wine bottle"
            src={`${imageUrl}`}
          />

          <p>Rating</p>
          <p>1/5</p>
        </div>
        <div className="px-5">
          <h1 className="text-2xl pb-4">{name}</h1>
          <div className="flex flex-col grow h-auto">
            <p>Country: {country}</p>
            <p>Region: {region}</p>
            <p>Color: {colour}</p>
            <p>Smell: {smell}</p>
            <p>Taste: {taste}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default WineCard;
