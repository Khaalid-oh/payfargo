import Image from "next/image";

type MapbaseSvgProps = {
  className?: string;
};

export const MapbaseSvg = ({ className }: MapbaseSvgProps) => {
  return (
    <div className="pointer-events-none relative z-0 h-full min-h-0 w-full overflow-hidden">
      <Image
        src="/images/map-base.svg"
        alt=""
        width={1152}
        height={374}
        className={["h-full w-full object-contain object-bottom", className]
          .filter(Boolean)
          .join(" ")}
        draggable={false}
        priority={true}
        quality={100}
        aria-hidden
        loading="eager"
      />
    </div>
  );
};

export default MapbaseSvg;
