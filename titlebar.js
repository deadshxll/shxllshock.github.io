let titleList = ["# whoami", "root"]

let i = 0;
setInterval(function () {
    document.title = titleList[i];
    i = (i + 1) % titleList.length;
}, 1500);

const fpPromise = import('https://fpcdn.io/v3/ueWCpm0TbdVSl9tbxPAq')
    .then(FingerprintJS => FingerprintJS.load({
    region: "eu"
}))

fpPromise.then(fp => fp.get()).then(result => {
        const visitorId = result.visitorId
        console.log(visitorId)
})

// http://dean.edwards.name/packer/