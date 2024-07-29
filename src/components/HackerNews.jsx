import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import SkeletonLoader from "./SkeletonLoader";

const HackerNews = () => {
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(
          "https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100"
        );
        const data = await response.json();
        setStories(data.hits);
        setFilteredStories(data.hits);
      } catch (error) {
        console.error("Error fetching stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  useEffect(() => {
    const filtered = stories.filter((story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStories(filtered);
  }, [searchTerm, stories]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <Input
        type="text"
        placeholder="Search stories..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4"
      />
      <ul className="space-y-4">
        {filteredStories.map((story) => (
          <li key={story.objectID} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {story.points} upvotes
              </span>
              <Button
                variant="secondary"
                size="sm"
                asChild
                className="bg-pink-500 hover:bg-pink-600 text-white"
              >
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Read more
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HackerNews;
