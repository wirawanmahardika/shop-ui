export function DeliveryItem({ photo, price, name, quantity }) {
  return (
    <div className='w-full flex justify-between  items-center text-sm sm:justify-around'>
      <img src={photo} alt='item' className='w-1/3 sm:w-1/5 lg:w-1/6' />
      <div className='flex flex-col items-center text-center p-4'>
        <p className='font-semibold md:font-bold md:text-lg'>
          {name} (x{quantity})
        </p>
        <p className='md:text-base'>{price && numberWithCommas(price)}</p>
      </div>
    </div>
  );
}

const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
