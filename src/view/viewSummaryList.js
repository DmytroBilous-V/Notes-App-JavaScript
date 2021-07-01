const summaryList = document.getElementById("summary-list");

export const initSummaryList = (data) => {
    const className ="summary-list_item";
    let dataHtml = [];
    for (let item in data) {
        let itemHtml = `<div class="${className}"}">
            <span class="${data[item].icon}"></span>
            <span>${data[item].name}</span>
            <span>${data[item].activeCount}</span>
            <span>${data[item].unactiveCount}</span>
        </div>`;
        dataHtml.push(itemHtml);
    }
    showList(dataHtml);
}

function showList (elements) {
    let outHtml = '';
    for (let key in elements) {
        outHtml += elements[key];
    }
    summaryList.innerHTML = outHtml;
}