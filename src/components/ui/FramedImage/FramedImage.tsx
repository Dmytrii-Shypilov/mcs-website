import { div } from "framer-motion/client";
import s from "./framed.module.scss";

import Image from "next/image";

type FramedImageProps = {
  frame?: "left" | "right";
  src: string;
  width: number;
  height: number;
  alt: string;
};

const FramedImage: React.FC<FramedImageProps> = ({
  frame,
  src,
  width,
  height,
  alt,
}) => {
  const sign = frame == "right" ? "-" : "+";
  const transform = frame ? `translateX(${sign}20px) translateY(20px)` : "none";

  return (
    <div className={s.frame}>
      <Image
        className={s.image}
        width={width}
        height={height || 400}
        style={{
          width: width,
          height: "auto",
          objectFit: "cover",
          transform: transform,
        }}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

export default FramedImage;
