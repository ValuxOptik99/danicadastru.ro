import { ArticleForm } from "../ArticleForm";

export default function NewArticlePage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="mb-6 text-2xl font-bold text-navy-ink">Articol nou</h1>
      <ArticleForm />
    </div>
  );
}
