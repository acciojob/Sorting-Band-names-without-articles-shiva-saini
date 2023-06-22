//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

const excludedArticles = ["the", "an","a"];


function compareStrings(str1, str2) {
  // Check if either string starts with an excluded article
  const str1StartsWithArticle = excludedArticles.some(article => str1.toLowerCase().startsWith(article));
  const str2StartsWithArticle = excludedArticles.some(article => str2.toLowerCase().startsWith(article));

  if (str1StartsWithArticle && str2StartsWithArticle) {
    // Both strings start with an excluded article, compare without the article
    const str1WithoutArticle = str1.slice(str1.indexOf(" ") + 1);
    const str2WithoutArticle = str2.slice(str2.indexOf(" ") + 1);
    return str1WithoutArticle.localeCompare(str2WithoutArticle);
  } else if (str1StartsWithArticle) {
    // Only str1 starts with an excluded article, str2 comes first
    return 1;
  } else if (str2StartsWithArticle) {
    // Only str2 starts with an excluded article, str1 comes first
    return -1;
  } else {
    // Neither string starts with an excluded article, compare as-is
    return str1.localeCompare(str2);
  }
}


touristSpots.sort(compareStrings)
let ulElement = document.getElementById('bands');
touristSpots.forEach((element) => {
	let liElement = document.createElement('li');
	liElement.innerHtml = `
                ${element}
        `
	ulElement.appendChild(liElement);
})
console.log(touristSpots);







