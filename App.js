const makeRandomTicketNo = () => {
    const Number = () => Math.floor(Math.random() * 10000000) + 100000000;
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = () => alphabet[Math.floor(Math.random() * alphabet.length)]
    let randomTicketNo = `#${randomCharacter().toUpperCase()}${randomCharacter().toUpperCase()}${Number()}`
    return randomTicketNo;
}
const myselect = document.querySelector("select");
const paymentForm = document.querySelector("#PaymentForm");
const loginPage = document.querySelector("#UserLogin");
const paymentInfo = document.querySelector(".page2");
const endPage = document.querySelector("#EndPage");
const profilePic = document.createElement("span");
const amount = 150;
myselect.addEventListener("change", () => {
    document.querySelector("#amount").innerHTML = `&#8377; ${amount * myselect.value}`
})
document.querySelector("#amount").innerHTML = `&#8377; ${amount * myselect.value}`

paymentForm.addEventListener("click", (e) => {
    e.preventDefault();
});
const endfunc = () => {
    loginPage.style.display = "flex"
    paymentInfo.style.display = "none";
    endPage.style.display = "none";
    profilePic.remove();
    document.querySelector("#signinbtn").textContent = "SIGN IN";
    document.querySelector("#signinbtn").style.marginTop = "0.4rem";
    reset();
    document.querySelector("#nextpagebtn").setAttribute("disabled", "");
    document.querySelector("#pay").setAttribute("disabled", "");
    document.querySelector("#profilelog").remove();
}
document.querySelector("#nextpagebtn").addEventListener("click", () => {
    paymentForm.style.display = "none";
    loginPage.style.display = "none"
    paymentInfo.style.display = "flex";
    endPage.style.display = "none";
    profilePic.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" enable-background="new 0 0 32 32" viewBox="0 0 32 32"><path fill="#263238" d="M16,31C7.729,31,1,24.271,1,16S7.729,1,16,1s15,6.729,15,15S24.271,31,16,31z M16,2C8.28,2,2,8.28,2,16
        s6.28,14,14,14s14-6.28,14-14S23.72,2,16,2z"/><path fill="#263238" d="M23.64 20.713l-4.762-1.652-.323-2.584c-.215.307-.523.546-.924.671l.293 2.345c.023.189.152.349.332.41l5.055 1.756c.9.314 1.689 1.427 1.689 2.381v-.007c0 .276.224.5.5.5.275 0 .499-.223.5-.498C25.997 22.656 24.94 21.168 23.64 20.713zM6.5 24.532c-.276 0-.5-.224-.5-.5v.007c0-1.379 1.059-2.871 2.359-3.326l4.762-1.641.012-.28c.034-.274.289-.465.559-.434.273.034.468.284.434.559l-.051.589c-.023.189-.153.348-.333.41l-5.054 1.742C7.789 21.973 7 23.086 7 24.039v-.007C7 24.309 6.776 24.532 6.5 24.532z"/><path fill="#263238" d="M16,18.039c-2.779,0-4.192-1.844-4.201-6.469c-0.002-1.174,0.123-2.363,1.227-3.469
                        C13.729,7.396,14.729,7.039,16,7.039s2.271,0.357,2.975,1.063c1.104,1.105,1.229,2.295,1.227,3.469
                        C20.192,16.195,18.779,18.039,16,18.039z M16,8.039c-1.009,0-1.75,0.252-2.267,0.769c-0.632,0.633-0.938,1.2-0.935,2.761
                        c0.008,4.018,1.055,5.471,3.201,5.471s3.193-1.453,3.201-5.471c0.003-1.561-0.303-2.128-0.935-2.761
                        C17.75,8.291,17.009,8.039,16,8.039z"/></svg>`;
    profilePic.firstChild.classList.add("profilepic");
    document.querySelector("#signinbtn").style.marginTop = "0.2rem";
    document.querySelector("#signinbtn").textContent = "";
    document.querySelector("#signinbtn").append(profilePic);
    document.querySelector("#ticketno").innerText = makeRandomTicketNo();
    const profilelog = document.createElement("button");
    profilelog.innerText = "Logout";
    profilelog.setAttribute("id", "profilelog");
    document.querySelector("header").insertBefore(profilelog, document.querySelector("#signinbtn"));
    document.querySelector("#profilelog").addEventListener("click", () => {
        paymentForm.style.display = "flex";
        endfunc();
    })
})
document.querySelector("#pay").addEventListener("click", () => {
    paymentForm.style.display = "flex";
    loginPage.style.display = "none"
    paymentInfo.style.display = "none";
    endPage.style.display = "flex";
})

document.querySelector("#endbtn").addEventListener("click", () => {
    endfunc();
})

document.querySelector("#email").addEventListener("input", () => {
    document.querySelector("#email-label").style.display = "inline-block";
    if (document.querySelector("#email").value === "") {
        document.querySelector("#email-label").style.display = "none";
        document.querySelector("#nextpagebtn").setAttribute("disabled", "");
    }
    else {
        if (document.querySelector("#password").value !== "")
            document.querySelector("#nextpagebtn").removeAttribute("disabled");
    }
})

if (document.querySelector("#email").value === "" || document.querySelector("#password").value === "") {
    document.querySelector("#nextpagebtn").setAttribute("disabled", "");
}

document.querySelector("#password").addEventListener("input", () => {
    document.querySelector("#password-label").style.display = "inline-block";
    if (document.querySelector("#password").value === "") {
        document.querySelector("#password-label").style.display = "none";
        document.querySelector("#nextpagebtn").setAttribute("disabled", "");
    } else {
        if (document.querySelector("#email").value !== "")
            document.querySelector("#nextpagebtn").removeAttribute("disabled");
    }
})


const UPIform = () => {
    const UPIcontainer = document.createElement("div");
    const UPIlabel = document.createElement("label");
    UPIlabel.innerText = "Enter your UPI ID ";
    UPIlabel.setAttribute("for", "inputUPI");
    UPIlabel.setAttribute("class", "paylabel");
    const inputUPI = document.createElement("input");
    inputUPI.setAttribute("type", "text");
    inputUPI.setAttribute("id", "inputUPI");
    inputUPI.setAttribute("name", "inputUPI");
    UPIcontainer.classList.add("UPIcontainer");
    UPIcontainer.append(UPIlabel);
    UPIcontainer.append(inputUPI);
    document.querySelector(".paymethod").append(UPIcontainer);
    document.querySelector("#inputUPI").addEventListener("input", () => {
        if (document.querySelector("#inputUPI").value === "")
            document.querySelector("#pay").setAttribute("disabled", "");
    })
    document.querySelector("#inputUPI").addEventListener("input", () => {
        if (document.querySelector("#inputUPI").value !== "")
            document.querySelector("#pay").removeAttribute("disabled");
    })
};

const MobileWalletForm = () => {
    const radioInput = [];
    const radioLabel = [];
    const radioDiv = [];
    const Radiocontainer = document.createElement("div");
    Radiocontainer.classList.add("Radiocontainer");
    for (let i = 0; i < 3; i++) {
        radioInput.push(document.createElement("input"));
        radioLabel.push(document.createElement("label"));
        radioDiv.push(document.createElement("div"));
    }
    for (let i = 0; i < 3; i++) {
        radioInput[i].setAttribute("type", "radio")
        radioInput[i].setAttribute("name", "wallet");
        radioInput[i].setAttribute("class", "payradio");
        radioLabel[i].setAttribute("class", "paylabel");
        radioDiv[i].setAttribute("class", "options");
    }
    radioInput[0].setAttribute("id", "paytm");
    radioInput[0].setAttribute("value", "paytm")
    radioInput[1].setAttribute("id", "amazon");
    radioInput[1].setAttribute("value", "amazon");
    radioInput[2].setAttribute("id", "phonepe");
    radioInput[2].setAttribute("value", "phonepe");

    radioLabel[0].setAttribute("for", "paytm");
    radioLabel[1].setAttribute("for", "amazon");
    radioLabel[2].setAttribute("for", "phonepe");

    radioLabel[0].innerText = "Paytm";
    radioLabel[1].innerText = "Amazon Pay";
    radioLabel[2].innerText = "Phonepe"

    for (let i = 0; i < 3; i++) {
        radioDiv[i].append(radioInput[i], radioLabel[i]);
        Radiocontainer.append(radioDiv[i]);
    }
    document.querySelector(".paymethod").append(Radiocontainer);
    for (let i = 0; radioInput.length; i++) {
        radioInput[i].addEventListener("click", () => {
            document.querySelector("#pay").removeAttribute("disabled");
        })
    }
}

const NetBankingForm = () => {
    const radioInput = [];
    const radioLabel = [];
    const radioDiv = [];
    const Radiocontainer = document.createElement("div");
    Radiocontainer.classList.add("Radiocontainer");
    for (let i = 0; i < 4; i++) {
        radioInput.push(document.createElement("input"));
        radioLabel.push(document.createElement("label"));
        radioDiv.push(document.createElement("div"));
    }
    for (let i = 0; i < 4; i++) {
        radioInput[i].setAttribute("type", "radio")
        radioInput[i].setAttribute("name", "wallet");
        radioInput[i].setAttribute("class", "payradio");
        radioLabel[i].setAttribute("class", "paylabel");
        radioDiv[i].setAttribute("class", "options");
    }
    radioInput[0].setAttribute("id", "kotakbank");
    radioInput[0].setAttribute("value", "kotakbank")
    radioInput[1].setAttribute("id", "axisbank");
    radioInput[1].setAttribute("value", "axisbank");
    radioInput[2].setAttribute("id", "sbibank");
    radioInput[2].setAttribute("value", "sbibank");
    radioInput[3].setAttribute("id", "hdfcbank");
    radioInput[3].setAttribute("value", "hdfcbank");

    radioLabel[0].setAttribute("for", "kotakbank");
    radioLabel[1].setAttribute("for", "axisbank");
    radioLabel[2].setAttribute("for", "sbibank");
    radioLabel[3].setAttribute("for", "hdfcbank");

    radioLabel[0].innerText = "Kotak Bank";
    radioLabel[1].innerText = "Axis Bank";
    radioLabel[2].innerText = "SBI Bank";
    radioLabel[3].innerText = "HDFC Bank";

    for (let i = 0; i < 4; i++) {
        radioDiv[i].append(radioInput[i], radioLabel[i]);
        Radiocontainer.append(radioDiv[i]);
    }
    document.querySelector(".paymethod").append(Radiocontainer);
    for (let i = 0; radioInput.length; i++) {
        radioInput[i].addEventListener("click", () => {
            document.querySelector("#pay").removeAttribute("disabled");
        })
    }
}
const DebitCardForm = () => {
    const Card = document.createElement("div");
    Card.setAttribute("id", "Card");
    const CardNo = document.createElement("input");
    CardNo.setAttribute("type", "number");
    CardNo.setAttribute("placeholder", "Card Number : ");
    CardNo.setAttribute("id", "CardNo");
    const CVVbox = document.createElement("div");
    CVVbox.setAttribute("id", "CVVbox");
    const bar = document.createElement("span");
    bar.setAttribute("id", "bar");
    const CVV = document.createElement("input");
    CVV.setAttribute("type", "password");
    CVV.setAttribute("placeholder", "CVV");
    CVV.setAttribute("id", "CVV");
    CVV.addEventListener("input", () => {
        if (typeof (parseInt(CVV.value)) === "number") {
            if (CVV.value.length > 3) {
                let a = parseInt(CVV.value);
                a = a / 10;
                CVV.value = parseInt(a);
            }
        }
        else
            CVV.value = "";
    })
    const ExpiryDate = document.createElement("input");
    ExpiryDate.setAttribute("type", "month");
    ExpiryDate.setAttribute("id", "ExpiryDate");
    Card.append(CardNo);
    CVVbox.append(bar);
    CVVbox.append(CVV);
    Card.append(CVVbox);
    Card.append(ExpiryDate);
    document.querySelector(".paymethod").append(Card);
    //SPAM INPUT
    CardNo.addEventListener("input", () => {
        if (CardNo.value === "" || CVV.value === "" || ExpiryDate.value === "")
            document.querySelector("#pay").setAttribute("disabled", "");
    })
    CVV.addEventListener("input", () => {
        if (CardNo.value === "" || CVV.value === "" || ExpiryDate.value === "")
            document.querySelector("#pay").setAttribute("disabled", "");
    })
    ExpiryDate.addEventListener("input", () => {
        if (CardNo.value === "" || CVV.value === "" || ExpiryDate.value === "")
            document.querySelector("#pay").setAttribute("disabled", "");
    })
    //ORIGINAL INPUT
    CardNo.addEventListener("input", () => {
        if (CardNo.value !== "" && CVV.value !== "" && ExpiryDate.value !== "")
            document.querySelector("#pay").removeAttribute("disabled");
    })
    CVV.addEventListener("input", () => {
        if (CardNo.value !== "" && CVV.value !== "" && ExpiryDate.value !== "")
            document.querySelector("#pay").removeAttribute("disabled");
    })
    ExpiryDate.addEventListener("input", () => {
        if (CardNo.value !== "" && CVV.value !== "" && ExpiryDate.value !== "")
            document.querySelector("#pay").removeAttribute("disabled");
    })
}

UPIform();
const radioOptions = document.querySelectorAll(".radioOpt");
for (let i = 0; i < 4; i++) {
    radioOptions[i].addEventListener("click", () => {
        if (i === 0) {
            while (document.querySelector(".paymethod").lastElementChild)
                document.querySelector(".paymethod").removeChild(document.querySelector(".paymethod").lastElementChild);
            UPIform();
        }
        else if (i === 1) {
            while (document.querySelector(".paymethod").lastElementChild)
                document.querySelector(".paymethod").removeChild(document.querySelector(".paymethod").lastElementChild);
            MobileWalletForm();
        }
        else if (i === 2) {
            while (document.querySelector(".paymethod").lastElementChild)
                document.querySelector(".paymethod").removeChild(document.querySelector(".paymethod").lastElementChild);
            NetBankingForm();
        }
        else {
            while (document.querySelector(".paymethod").lastElementChild)
                document.querySelector(".paymethod").removeChild(document.querySelector(".paymethod").lastElementChild);
            DebitCardForm();
        }
    })
}

function reset() {
    document.querySelector("#email").value = "";
    document.querySelector("#email-label").style.display = "none";
    document.querySelector("#password").value = "";
    document.querySelector("#password-label").style.display = "none";
    document.querySelector("#UPI").checked = "true";
    while (document.querySelector(".paymethod").lastElementChild)
        document.querySelector(".paymethod").removeChild(document.querySelector(".paymethod").lastElementChild);
    UPIform();
    try {
        document.querySelector("#inputUPI").value = "";
    } catch { }
    try {
        const wallets = document.getElementsByName("wallet");
        for (let i = 0; i < wallets.length; i++) {
            const element = wallets[i];
            element.default
        }
    } catch { }
    myselect.value = 1;
    document.querySelector("#amount").innerHTML = `&#8377; ${amount * myselect.value}`
}