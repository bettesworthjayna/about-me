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
      className="relative min-h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />

      <div className="absolute inset-0 bg-white/60 backdrop-brightness-75" />

      <div className="relative z-10 w-full max-w-7xl p-10">
        {children}
      </div>
    </section>
  );
}