import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  image,
  title,
  description,
}: Props) {
  return (
    <div className="bg-white/50 rounded-2xl p-4 shadow-lg">

      <div className="flex flex-col gap-4 sm:flex-row">

        <div className="relative h-40 w-full flex-shrink-0 sm:h-44 sm:w-48 md:h-48 md:w-54 short-media">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div>

          <h3 className="font-black uppercase text-xl sm:text-2xl">
            {title}
          </h3>

          <p className="mt-2 text-base leading-relaxed sm:text-xl">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}
