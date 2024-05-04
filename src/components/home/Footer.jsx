export default function Footer() {
  return (
    <>
      <footer className="w-full bg-black text-gray-50 p-5 gap-x-5 flex flex-col items-center gap-y-4 lg:items-start sm:p-10 sm:flex-row">
        <div className="w-1/2 flex flex-col items-center gap-y-2  sm:self-auto">
          <h3 className="font-geologica font-extrabold text-xl lg:text-2xl">
            Tentang Kami
          </h3>
          <p className="text-xs text-center lg:w-4/5 lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            dolor sunt tempora harum eum dolorum ut quas earum reprehenderit
            voluptatem vel voluptas, numquam at maxime quidem, asperiores minima
            laboriosam minus.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-center font-light sm:self-auto">
          <h3 className="font-geologica font-extrabold text-xl mb-2 lg:text-2xl">
            Contact
          </h3>
          <p className="font-extralight">+628-1234-5678</p>
          <p className="font-extralight">johndoe@gmail.com</p>
        </div>
      </footer>
      <div className="border-t border-gray-600 text-center bg-black text-gray-400 text-sm py-1 sm:text-xs">
        <p>Copyright 2023</p>
      </div>
    </>
  );
}
