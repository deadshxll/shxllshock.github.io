let titleList = ["# whoami", "root"]

let i = 0;
setInterval(function () {
    document.title = titleList[i];
    i = (i + 1) % titleList.length;
}, 1500);