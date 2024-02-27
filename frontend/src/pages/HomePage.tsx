import landingImg from "./../assets/landing.png";
import downloadImg from "./../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* search card  */}
      <div className="-mt-16 flex flex-col gap-5 rounded-lg bg-white py-8 text-center shadow-md">
        <h1 className="text-5xl font-bold tracking-tight text-red-500">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl ">Food is just a click away</span>
        <div>
          <input
            type="text"
            className="w-4/5 rounded-lg border p-1 text-xl"
            placeholder="Search a city or town"
          />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <img src={landingImg} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="text-3xl font-bold tracking-tighter">
            Order takeway even faster!
          </span>
          <span>
            Download our FoodDeliveryApp on mobile for personalised
            recommendation
          </span>
          <img src={downloadImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
