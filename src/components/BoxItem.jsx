import Star from "../svg/Star";

export default function BoxItem({ id, name, price, rating, image, setToggle }) {
  const numberWithCommas = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className='flex flex-col p-4 gap-y-6 border-2 pt-6 border-main-1 rounded-lg items-center bg-main-4 sm:w-4/5 mx-auto'>
      <img src={image} alt={id} className='w-4/5' />
      <div className='flex flex-col'>
        <p className='font-bold lg:text-xl capitalize'>{name}</p>
        <p className='font-bold lg:text-xl'>Rp {numberWithCommas(price)}</p>
        <div className='flex'>
          <Star className={"w-1/6 h-6"} />
          <Star className={"w-1/6 h-6"} />
          <Star className={"w-1/6 h-6"} />
          <Star className={"w-1/6 h-6"} />
          <Star className={"w-1/6 h-6"} />
          <p className='font-bold ml-1'>{rating}</p>
        </div>
        <button
          type='button'
          onClick={setToggle}
          className='px-2 py-0.5 text-sm mt-1 font-semibold w-fit rounded-xl mx-auto bg-main-1 lg:px-3 lg:py-1 lg:text-lg'>
          Checkout
        </button>
      </div>
    </div>
  );
}
