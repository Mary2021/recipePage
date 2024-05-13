import Category from "@/app/components/Category";

export async function generateStaticParams() {
const categories = ['Breakfast', 'Pasta', 'Starter', 'Seafood', 'Side', 'Meat', 'Vegetarian', 'Dessert']
return categories.map((category) => ({ categoryName: category }))
}

export default function Page({ params }: { params: { categoryName: string }}) {
  return <Category params={params}/>;
}