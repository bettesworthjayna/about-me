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
    <div className="bg-white/50 rounded-2xl p-6 shadow-lg">

      <h3 className="font-black text-2xl uppercase">
        {title}
      </h3>

      <p className="text-gray-400 text-xl mb-4">
        {company}
      </p>

      <p className="mt-2 py-2 text-xl">
            {description}
          </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <span
            key={keyword}
            className="text-m text-gray-400"
          >
            {keyword} |
          </span>
        ))}
      </div>

    </div>
  );
}