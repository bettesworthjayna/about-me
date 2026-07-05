interface Props {
  title: string;
  company: string;
  description: string;
  keywords: string[];
}

export default function WorkCard({
  title,
  company,
  description,
  keywords,
}: Props) {
  return (
    <div className="bg-white/50 rounded-2xl p-4 shadow-lg sm:p-6">

      <h3 className="font-black text-xl sm:text-2xl">
        {title}
      </h3>

      <p className="mb-3 text-base text-gray-600 sm:mb-4 sm:text-xl">
        {company}
      </p>

      <p className="mt-2 py-2 text-base leading-relaxed sm:text-l text-black text-m ">
            {description}
          </p>

      <div className="mt-4 flex flex-wrap gap-2">
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
  );
}
