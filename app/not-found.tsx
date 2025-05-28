import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primary/70 transition">
          Go back home
        </Link>
      </div>
    </div>
  );
}
