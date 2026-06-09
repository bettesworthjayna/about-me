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

      <div className="flex gap-4">

        <div className="relative w-54 h-48 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div>

          <h3 className="font-black uppercase text-2xl">
            {title}
          </h3>

          <p className="mt-2 text-xl">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}