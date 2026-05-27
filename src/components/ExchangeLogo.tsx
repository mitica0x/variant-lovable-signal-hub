export function ExchangeLogo({ domain, name, size = 32 }: { domain: string; name: string; size?: number }) {
  return (
    <div
      className="shrink-0 hairline rounded-[3px] bg-white/5 flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={`https://logo.clearbit.com/${domain}`}
        alt={`${name} logo`}
        width={size}
        height={size}
        loading="lazy"
        className="object-contain"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          (e.currentTarget.parentElement as HTMLElement).textContent = name.charAt(0);
          (e.currentTarget.parentElement as HTMLElement).classList.add("text-txt", "font-semibold", "text-sm");
        }}
      />
    </div>
  );
}
