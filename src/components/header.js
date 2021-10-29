const Header = (title, date, temp) => {
    const header = document.createElement("div");
    const dates = document.createElement("span");
    const titles = document.createElement("h1");
    const temps = document.createElement("span");

    header.classList.add("header")
    dates.textContent = date;
    dates.classList.add("date");
    titles.textContent = title;
    temps.textContent = temp;
    temps.classList.add("temp");

    header.append(dates, titles, temps);

    return header;


}

const headerAppender = (selector) => {
        const head_append = document.querySelector(`${selector}`);
        return head_append.appendChild(Header("SPRINT!!!", "Today", "Hot as HELL!!"));
}

export { Header, headerAppender }



// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//
// TASK 2
//   // ---------------------
//   // Implement this function taking a css selector as its only argument.
//   // It should create a header using the Header component above, passing arguments of your choosing.
//   // It should append the header to the element in the DOM that matches the given selector.
//   //