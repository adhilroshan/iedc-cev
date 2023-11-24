import Image from "next/image";

const HeroImg = () => {
  return (
    <div className="">
      <Image
        className="w-full rounded-lg h-full object-cover"
        src="https://assets.website-files.com/64ae767417b9b300d1f932fa/64b42e4cfb16b8a6075048d0_home_02-p-500.jpg"
        alt=""
        width={300}
        height={300}
      />
    </div>
  );
};

export default HeroImg;
