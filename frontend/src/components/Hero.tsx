import heroImg from "./../assets/THALI3.png";
const Hero = () => {
  return (
    <div className=" bg-red-500">
      <img
        className=" mx-auto max-h-[600px] w-3/5  object-cover"
        src={heroImg}
      />
    </div>
  );
};

export default Hero;
