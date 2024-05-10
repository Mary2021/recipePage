import MeatCategory from "@/app/components/MeatCategory";

export async function generateStaticParams() {
const categories = ['Beef', 'Chicken', 'Lamb', 'Pork']
  return categories.map((category) => ({ categoryName: category }))
}

export default function Page({ params }: { params: { categoryName: string }}) {
  return <MeatCategory params={params}/>;
}