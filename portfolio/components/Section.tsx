interface Props {
  id: string;
  background: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  background,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="relative min-h-svh flex items-start justify-center overflow-hidden py-24 sm:items-center sm:py-28"
    >
      <div
        className="section-background absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />

      <div className="absolute inset-0 bg-white/60 backdrop-brightness-75" />

      <div className="relative z-10 w-full max-w-7xl px-4 py-4 sm:px-8 lg:p-10">
        {children}
      </div>
    </section>
  );
}
