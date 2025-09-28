import Image from "next/image";

const venueDetailMap = new Map<string, { name: string; img: string }>([
  ["001", { name: "The Bloom Pavilion", img: "/img/bloom.jpg" }],
  ["002", { name: "Spark Space",       img: "/img/sparkspace.jpg" }],
  ["003", { name: "The Grand Table",   img: "/img/grandtable.jpg" }],
]);

export default async function VenueDetailPage({ params,}: { params: Promise<{ vid: string }>;}) {
  const { vid } = await Promise.resolve(params);
  const detail = venueDetailMap.get(vid);

  if (!detail) {
    return (
      <main className="max-w-3xl mx-auto p-10">
        <h1 className="text-2xl font-bold">Venue not found</h1>
        <p className="mt-2 text-gray-600">No venue with id: {vid}</p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6 text-black">{detail.name}</h1>
      <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
        <Image
          src={detail.img}
          alt={detail.name}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>
    </main>
  );
}
