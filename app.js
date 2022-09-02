const mobiles = [
    {
        model: "14pro",
        ram: '123',
        rom: '32',
        price: '120000',
        company: "iphone"
    },
    {
        model: "12pro",
        ram: '123',
        rom: '32',
        price: '120000',
        company: "iphone"
    },
    {
        model: "10pro",
        ram: '123',
        rom: '32',
        price: '120000',
        company: "iphone"
    },
    {
        model: "s4",
        ram: '123',
        rom: '32',
        price: '230000',
        company: "infinix"
    },
    {
        model: "s6",
        ram: '123',
        rom: '32',
        price: '300000',
        company: "infinix"
    },
    {
        model: "s8",
        ram: '123',
        rom: '32',
        price: '320000',
        company: "infinix"
    },
    {
        model: "v13pro",
        ram: '123',
        rom: '32',
        price: '220000',
        company: "samsang"
    },
    {
        model: "v12pro",
        ram: '123',
        rom: '32',
        price: '220000',
        company: "samsang"
    },
    {
        model: "v11pro",
        ram: '123',
        rom: '32',
        price: '220000',
        company: "samsang"
    },
]


let mobilename = document.getElementById("mobilename");
let mobilemodel = document.getElementById("mobilemodel");

function option() {
    const campanies = mobiles.map((i) => i.company)
    const uniqCom = [...new Set(campanies)]
    console.log({ campanies, uniqCom })
    var mobilename = [];

    for (i = 0; i < uniqCom.length; i++) {
        mobilename += `<option value=${uniqCom[i]}>${uniqCom[i]}</option>`;
    }
    document.getElementById(`mobilename`).innerHTML = mobilename
}
option()

var mob = "";
var mod = "";
function search() {
    const findMob = mobiles.find((i) => i.model.includes(mod))
    console.log(findMob);
}

function myfunction(value) {
    mob = value;
    console.log("TRIIGER", value, mob)
    const company = mobiles.filter((i) => i.company.includes(value))
    let model = [];
    for (i = 0; i < company.length; i++) {
        model += `<option>${company[i].model}</option>`;
    }
    document.getElementById(`mobilemodel`).innerHTML = model;
}
function onMobileNameChange(e) {
    mob = e.value;
    myfunction(e.value)
}

console.log(mob, mod)

function onModelChange(e) {
    mod = e.value
    console.log(mod)
}
