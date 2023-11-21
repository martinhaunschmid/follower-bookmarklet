javascript:(function(){ let followers = document.querySelectorAll(".reusable-search__result-container div.entity-result");    let result = [];    followers.forEach(f => {       let linkElem =  f.querySelector(".app-aware-link");      let link = linkElem.href;         let imageElem = f.querySelector("img");   let image = imageElem === null ? "" : imageElem.src;            let nameElem = f.querySelector(".entity-result__title-line a");      let name = nameElem === null ? "N/A" : nameElem.innerText;   let subheadline = f.querySelector(".entity-result__primary-subtitle").innerText;      let detailsElem = f.querySelector(".entity-result__insights div");     let details = detailsElem === null ? "" :  detailsElem.innerText;       result.push({       name: name,       image: image,       link: link,       subheadline: subheadline,       details: details     });     });    scraperesult=result;    tab = window.open("about:blank", "_blank");    downloadLink = tab.document.createElement('a');    downloadLink.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(scraperesult)));    downloadLink.setAttribute('download', 'followers.json');    downloadLink.style.display = 'none';    tab.document.body.appendChild(downloadLink);    downloadLink.click();    tab.document.body.removeChild(downloadLink);  })()