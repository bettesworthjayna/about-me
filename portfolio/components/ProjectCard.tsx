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

      <div className="flex flex-col gap-4 md:flex-row">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            aspect-video
            w-full
            max-h-44
            rounded-xl
            object-cover
            sm:max-h-56
            md:w-80
            md:max-h-none
            lg:w-96
            short-media
          "
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>

        <div className="px-2">

          <h3 className="font-black text-xl sm:text-2xl">
            {title}
          </h3>

          <p className="mt-2 py-1 leading-relaxed text-l text-black">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword} 
                className="text-sm text-gray-400 sm:text-base"
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
