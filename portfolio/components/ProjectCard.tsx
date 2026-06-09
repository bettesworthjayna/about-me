import Image from "next/image";

interface Props {
  video: string;
  title: string;
  description: string;
  keywords: string[];
}

export default function ProjectCard({
  video,
  title,
  description,
  keywords,
}: Props) {
  return (
    <div className="bg-white/50 rounded-2xl p-4 shadow-lg">

      <div className="flex gap-4">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            w-96
            
            object-cover
            rounded-xl
          "
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>

        <div className="px-2">

          <h3 className="font-black uppercase text-2xl">
            {title}
          </h3>

          <p className="mt-2 text-xl py-2">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword} 
                className="text-gray-400 text-m"
              >
                {keyword} |
              </span>
            ))}
          </div>

        </div>
         

      </div>
      
      

    </div>
  );
}