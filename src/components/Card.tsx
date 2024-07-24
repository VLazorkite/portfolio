import Link from "next/link";

export default function Card({ name, img }: { name: string; img: string }) {
  return (
    <div className=" relative grid h-[30rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden  bg-clip-border text-center text-gray-700 hover:-translate-y-2.5 ease-in-out duration-700">
      <Link href={`/Work/${name}`}>
        <div className="absolute inset-0 m-0 w- overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-black">
          <div className="absolute inset-0 w-full h-full "></div>
        </div>
        <div className="relative p-6 px-6 py-14 md:px-12 ">
          <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal antialiased">
            Some text
          </h2>
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            Project name
          </h5>
          {/* <img
          alt="Tania Andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center"
        /> */}
        </div>
      </Link>
    </div>
  );
}
