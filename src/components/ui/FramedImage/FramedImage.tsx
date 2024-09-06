import s from "./framed.module.scss";

import Image from "next/image";

type FramedImageProps = {
  frame?: "left" | "right";
  src: string;
  width: number;
  alt: string;
};

const FramedImage: React.FC<FramedImageProps> = ({
  frame,
  src,
  width,
  alt,
}) => {
  const sign = frame == "right" ? "-" : "+";
  const transform = frame ? `translateX(${sign}20px) translateY(20px)` : 'none'

  return (
    <div className={s.frame}>
      <Image
        className={s.image}
        width={width}
        height={width}
        style={{
          width: width,
          height: "auto",
          transform: transform,
        }}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default FramedImage;
