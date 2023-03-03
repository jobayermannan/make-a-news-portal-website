const fetchCatagories=() => {
    fetch('https://openapi.programming-hero.com/api/news/categories').then((res) =>res.json())
    .then((data) => showCatagories(data.data));

}
const showCatagories= data  => {
//   console.log(data)
// capture  catagories container to append all the category links
  const categoriesContainer=document.getElementById("categories")
  data.news_category.forEach(singleCategory => {
 
    // // advance method
    // categoriesContainer.innerHTML+=`<a>${singleCategory.category_name}</a>`

    // normal method
    const  linkContainer=document.createElement("div");
    linkContainer.innerHTML=`<a onclick="fetchCatagoriesNews('${singleCategory.category_id}','${singleCategory.category_name}')">${singleCategory.category_name}</a>`;
    categoriesContainer.appendChild(linkContainer);
  })
}
// fetch all newses available in a category

 const fetchCatagoriesNews= (category_id,category_name)=>{
        const url=`https://openapi.programming-hero.com/api/news/category/${category_id}`;
        fetch(url).then(response => response.json()).then(data =>showCatagoriesNews(data.data,category_name));

 }

 const showCatagoriesNews =(data,category_name)=> {
    
  document.getElementById("news-count").innerText=data.length
  document.getElementById("category-name").innerText=category_name
  console.log(data.length,category_name)
 }

