window.onload = () => {
    const htmlBar = document.getElementsByClassName("html")[0];
    const cssBar = document.getElementsByClassName("css")[0];
    const jsBar = document.getElementsByClassName("js")[0];
    const cppBar = document.getElementsByClassName("cpp")[0];

    htmlBar.style.width = htmlBar.innerText;
    cssBar.style.width = cssBar.innerText;
    jsBar.style.width = jsBar.innerText;
    cppBar.style.width = cppBar.innerText;
};