import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

interface dataType {
  img: string;
  rame: string;
  title: string;
  color: string;
  brand: string;
  price: string;
  id: number;
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  const res = await fetch(
    `https://market-backend-zeta.vercel.app/phones/${id}`
  );
  const data: dataType = await res.json();

  const metaDeta: Metadata = {
    title: data.title,
    description: data.brand,
    openGraph: {
      images: [data.img],
    },
  };
  return metaDeta;
}

const SingleUser = () => {
  return <div>SingleUser</div>;
};

export default SingleUser;
