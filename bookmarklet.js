(function(){

  let followers = document.querySelectorAll("section.follows-recommendation-card__content");

  let followers = document.querySelectorAll("ul.reusable-search__entity-result-list.list-style-none li.reusable-search__result-container");

  let result = [];
  
  followers.forEach(f => {

    let linkElem =  f.querySelector(".follows-recommendation-card__avatar-link");
    let link = linkElem.href;
    let image = linkElem.querySelector("img").src;
    let name = f.querySelector(".follows-recommendation-card__name").innerText;
    let subheadline = f.querySelector(".follows-recommendation-card__headline").innerText;
    let details = f.querySelector(".follows-recommendation-card__subtext") ? f.querySelector(".follows-recommendation-card__subtext").innerText : "";

    let name = f.querySelector(".entity-result__title-text a")?.innerText;
    console.log(name);
    
    let linkElem =  f.querySelector(".app-aware-link");
    let link = linkElem.href;
    let image = f.querySelector("img.presence-entity__image")?.src;
    
    let subheadline = f.querySelector(".entity-result__primary-subtitle")?.innerText;
    //let details = f.querySelector(".follows-recommendation-card__subtext") ? f.querySelector(".follows-recommendation-card__subtext").innerText : "";

    result.push({
      name: name,
      image: image,
      link: link,
      subheadline: subheadline,
      details: null
    });
  });
  scraperesult=result;
  tab = window.open("about:blank", "_blank");
  downloadLink = tab.document.createElement('a');
  downloadLink.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(scraperesult)));
  downloadLink.setAttribute('download', 'followers.json');
  downloadLink.style.display = 'none';
  tab.document.body.appendChild(downloadLink);
  downloadLink.click();
  tab.document.body.removeChild(downloadLink);
})();