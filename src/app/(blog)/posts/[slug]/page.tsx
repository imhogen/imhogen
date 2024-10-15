export default async function DynamicBlogDetailPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <div className="flex flex-col  gap-3 mb-20 w-11/12 overflow-x-hidden  lg:w-3/5 items-center mx-auto relative top-24 prose prose-md lg:prose-xl prose-invert prose-a:text-gray-300 md:top-36">
      <h1>Blog Detail Page</h1>
    </div>
  );
}
