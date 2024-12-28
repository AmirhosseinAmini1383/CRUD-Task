import truncateText from "../utils/truncateText";
import toLocalDateShort from "../utils/toLocalDateShort";

function Article({ articles }) {
  return (
    <div className="grid grid-cols-3 items-center justify-between gap-x-8">
      {articles.map((article) => {
        return (
          <div
            key={article.id}
            className="bg-secondary-0 flex flex-col items-start p-4 rounded-xl h-full"
          >
            <div className="w-auto h-64 mx-auto rounded-lg overflow-hidden relative">
              <img
                className="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                src={article.imageUrl.url}
                alt={article.imageUrl.alt}
                style={{ transformOrigin: "center" }}
              />
            </div>

            <div className="mt-3 mb-5 flex items-center justify-center gap-x-2">
              {article.tags.map((tag) => (
                <span key={tag} className="badge badge--secondary text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <p className="text-base font-medium text-secondary-900 mb-2">
                {article.title}
              </p>
              <p className="text-sm text-secondary-400">
                {truncateText(article.description, 200)}
              </p>
            </div>
            <div className="grid grid-cols-[3rem_1fr] grid-rows-2 gap-x-3 mt-5">
              <div className="row-span-2">
                <img
                  className="rounded-full"
                  src={article.userImageUrl.url}
                  alt={article.userImageUrl.alt}
                />
              </div>
              <p className="text-secondary-900">{article.username}</p>
              <p className="text-secondary-500">
                {toLocalDateShort(new Date().toISOString())}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Article;
