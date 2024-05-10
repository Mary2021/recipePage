import Category from "@/app/components/Category";

export async function generateStaticParams() {
const categories = ['Breakfast', 'Pasta', 'Starter', 'Seafood', 'Side', 'Meat', 'Vegetarian', 'Dessert']
return categories.map((category) => ({ categoryName: category }))
  // let i: number
  // let cat
  // for (i=0; i < categories.length; i++){
  //   console.log('Category',categories[i])
  //   cat = { categoryName: categories[i]}
  //   //categories.map((category) => {c = category;  console.log('Category',category[i])})
    
  // }
  // console.log('cat', cat)
  // return cat
}

export default function Page({ params }: { params: { categoryName: string }}) {
  return <Category params={params}/>;
}