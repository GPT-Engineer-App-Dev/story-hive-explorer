import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to HN Reader</h1>
      <p className="text-xl mb-8">Stay up-to-date with the latest tech news and discussions</p>
      <Button asChild className="bg-white text-blue-600 hover:bg-blue-100">
        <Link to="/app">Enter HN Reader</Link>
      </Button>
    </div>
  );
};

export default LandingPage;
