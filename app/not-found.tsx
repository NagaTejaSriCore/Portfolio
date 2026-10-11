import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 text-center font-sans">
      <span className="text-xs font-mono font-bold tracking-[0.3em] text-accent-blue uppercase mb-4">
        404 / PAGE NOT FOUND
      </span>

      <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
        OUT OF BOUNDS<span className="text-accent-blue">.</span>
      </h1>

      <p className="text-text-secondary text-base max-w-md mb-8">
        The requested page does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-accent-blue hover:bg-accent-blueHover text-white text-xs font-bold uppercase tracking-wider transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
