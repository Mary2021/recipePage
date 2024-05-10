import MeatMeal from "@/app/components/MeatMeal";

export async function generateStaticParams() {
  const categories = ['Beef', 'Chicken', 'Lamb', 'Pork']
  let i: number
  let params = []
  let urls = []
  for (i = 0; i < categories.length; i++) {
    let result: any = []
    let category = categories[i]
    let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
    urls.push(url)
    const requests = urls.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const promises: any = responses.map((response) => response.json())
    await Promise.all(promises).then((values) => { values; result = values })
    let objArr = result[i]
    let mealsObjArr = objArr['meals']
    let strMeal: string 
    let j: number
    for (j = 0; j < mealsObjArr.length; j++) {
      const meals: string[] = []
      strMeal = mealsObjArr[j]['strMeal'].replace(/ /g, "_")
      let encode = encodeURI(strMeal)
      meals.push(encode)
      let mapArr = categories.map(() => meals.map((meals) => ({ categoryName: categories[i], mealName: meals })))
      let getArrFromArr = mapArr[0]
      let getObjFromArr = getArrFromArr[0]
      params.push(getObjFromArr)
    }
  }
  return params
}

export default function Page({ params }: { params: { categoryName: string, mealName: string } }) { 
  return <MeatMeal params={params} />;
}