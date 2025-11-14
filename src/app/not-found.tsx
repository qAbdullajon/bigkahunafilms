export default function NotFound() {
  return (
    <div className="w-full min-h-screen text-black">
      <div className="w-[90%] mx-auto py-[5%]">
        <p>404</p>
        <div className="py-[60px]">
          <h1 className="font-bold text-4xl md:text-[50px] pb-5">Page not found</h1>
          <p className="text-base md:text-lg">The page you are looking for doesn't exist or has been moved.</p>
        </div>
      </div>
    </div>
  )
}
