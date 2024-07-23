

//support

$("#sup").click(() => {
  let name = $("#name").val();
  let email = $("#email").val();
  let phone = $("#phone").val();
  let message = $("#message").val();
  let issue = $("#type").val();

  if (phone > 9999999999 || phone < 1000000000) {
    alert("Invalid Phone Number");
  }

  if (name == "" || email == "" || phone == "" || message == "") {
    alert("Fill out all inputs to submit your message for our support team");
    return;
  } else {
    let mess = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
      Issue: issue,
    };

    localStorage.setItem("Support", JSON.stringify(mess));
    location.reload();
  }
});


let allMonths = new Array();
allMonths[0] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[1] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[2] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[3] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[4] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[5] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[6] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[7] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[8] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[9] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[10] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};
allMonths[11] = {
    month: "Pending...",
    water: "Pending...",
    electricity: "Pending...",
    car: "Pending...",
    insurence: "Pending...",
    phone: "Pending...",
    RM: "Pending...",
};

$("#mreg").click(() => {
  let re = document.getElementById("re");
  re.style.display = "block";
  let lo = document.getElementById("lo");
  lo.style.display = "none";
});

$("#mlog").click(() => {
  let lo = document.getElementById("lo");
  lo.style.display = "block";
  let re = document.getElementById("re");
  re.style.display = "none";
});

let user = [];

$("#rsc").click(() => {
  if (localStorage.getItem("User") !== null) {
    user = JSON.parse(localStorage.getItem("User"));
  }
  let rname = $("#rname").val();
  let remail = $("#remail").val();
  let rphone = $("#rphone").val();
  let rpass = $("#rpass").val();
  let marital = $("#marital").val();
  let random = Math.floor(Math.random() * 1000 + 9999);

  if (rname == "" || remail == "" || rphone == "" || rpass == "") {
    alert("To register fill out all parts of the application");
    return;
  }
  if (rphone > 9999999999 || rphone < 1000000000) {
    alert("Invalid phone number");
    return;
  }
  let info = {
    Name: rname,
    Email: remail,
    Phone: rphone,
    Pass: rpass,
    Status: marital,
    Accountid: random,
    Months: allMonths
  };

  user.push(info);
  localStorage.setItem("User", JSON.stringify(user));
});

$("#msub").click(() => {
  let info = JSON.parse(localStorage.getItem("User"));
  let em = $("#lemail").val();
  let pa = $("#lpass").val();
  if (em == "" || pa == "") {
    alert("Enter your email or password");
    return;
  } else {
    for (i in info) {
      if (em == info[i].Email && pa == info[i].Pass) {
        localStorage.setItem("Current", JSON.stringify(info[i]));
        alert(`This is your five digit account number: ${info[i].Accountid}`);

        location.reload();
      }
    }
  }
});

$(document).ready(() => {
  if (localStorage.getItem("Current") !== null) {
    let curuser = JSON.parse(localStorage.getItem("Current"));
    document.getElementById(
      "b"
    ).innerHTML = `<span id="welcome">You are logged in as: <span class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="usersname" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${curuser.Name} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
        </svg>
        </a>
      
        <div class="dropdown-menu" aria-labelledby="usersname">
          <a class="dropdown-item" href="Payments.html">Payments</a>
          <a class="dropdown-item" href="Data.html">Data</a>
          <a role = "button" class="dropdown-item" onclick = "logout()">Logout</a>
          <a class="dropdown-item">ID: ${curuser.Accountid}</a>
        </div>
      </span> </span>`;
  }
});

$("#sb").click(() => {
  location.assign("Support.html");
});

function logout() {
  localStorage.removeItem("Current");
  location.reload();
  location.assign("Home.html");
}

//paybuttons

$("#water").click(() => {
  $("#elecdiv").css("display", "none");
  $("#phonediv").css("display", "none");
  $("#rmdiv").css("display", "none");
  $("#indiv").css("display", "none");
  $("#cardiv").css("display", "none");
  $("#waterdiv").css("display", "block");
});

$("#elec").click(() => {
  $("#waterdiv").css("display", "none");
  $("#phonediv").css("display", "none");
  $("#rmdiv").css("display", "none");
  $("#indiv").css("display", "none");
  $("#cardiv").css("display", "none");
  $("#elecdiv").css("display", "block");
});

$("#pho").click(() => {
  $("#waterdiv").css("display", "none");
  $("#elecdiv").css("display", "none");
  $("#rmdiv").css("display", "none");
  $("#indiv").css("display", "none");
  $("#cardiv").css("display", "none");
  $("#phonediv").css("display", "block");
});

$("#rm").click(() => {
  $("#waterdiv").css("display", "none");
  $("#phonediv").css("display", "none");
  $("#elecdiv").css("display", "none");
  $("#indiv").css("display", "none");
  $("#cardiv").css("display", "none");
  $("#rmdiv").css("display", "block");
});

$("#insur").click(() => {
  $("#waterdiv").css("display", "none");
  $("#phonediv").css("display", "none");
  $("#rmdiv").css("display", "none");
  $("#elecdiv").css("display", "none");
  $("#cardiv").css("display", "none");
  $("#indiv").css("display", "block");
});

$("#car").click(() => {
  $("#waterdiv").css("display", "none");
  $("#phonediv").css("display", "none");
  $("#rmdiv").css("display", "none");
  $("#indiv").css("display", "none");
  $("#elecdiv").css("display", "none");
  $("#cardiv").css("display", "block");
});

//submitbuttons
let nd = new Date();
let d = nd.getDate() < 10 ? "0" + nd.getDate() : nd.getDate();
let m = nd.getMonth() + 1 < 10 ? "0" + (nd.getMonth() + 1) : nd.getMonth() + 1;
let y = nd.getFullYear();
let today = `${y}-${m}-${d}`;
$('input[type = "date"]').val(today);
$('input[type = "date"]').attr("min", today);
let months = new Array();
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

$('#watersub').click(() => {
    let wp = $('#waterpay').val();
    let wa = $('#waccount').val();
    let wd = $("#waterdate").val()
    let wm = months[new Date(wd).getMonth()];
    let wi = new Date(wd).getMonth();
    let cu = JSON.parse(localStorage.getItem("Current"));
    let um = cu.Months;

    if(wa != cu.Accountid){
      alert("You can find your account ID by clicking your name")
      return;
    }

    if(wp == ''){
        alert("If your leave your payment input blank, your data chart will show the payment as pending")
    }

    um[wi].water = wp;
    um[wi].month = wm;
    cu.Months = um;
    localStorage.setItem('Current', JSON.stringify(cu));
})

$('#elecsub').click(() => {
    let ep = $('#elecpay').val();
    let ea = $('#eaccount').val();
    let ed = $('#elecdate').val()
    let em = months[new Date(ed).getMonth()];
    let ei = new Date(ed).getMonth();
    let cu = JSON.parse(localStorage.getItem("Current"));
    let um = cu.Months;

    if(ea != cu.Accountid){
        alert("You can find your account ID by clicking your name")
        return;
    }

    if(ep == ''){
        alert("If your leave your payment input blank, your data chart will show the payment as pending")
    }

    um[ei].electricity = ep;
    um[ei].month = em;
    cu.Months = um;
    localStorage.setItem('Current', JSON.stringify(cu));
})

$('#phonesub').click(() => {
    let pp = $('#phonepay').val();
    let pd = $('#phonedate').val()
    let pm = months[new Date(pd).getMonth()];
    let pi = new Date(pd).getMonth();
    let cu = JSON.parse(localStorage.getItem("Current"));
    let um = cu.Months;


    if(pp == ''){
        alert("If your leave your payment input blank, your data chart will show the payment as pending")
    }

    um[pi].phone = pp;
    um[pi].month = pm;
    cu.Months = um;
    localStorage.setItem('Current', JSON.stringify(cu));
})

$('#rmsub').click(() => {
    let rmp = $('#rmpay').val();
    let rma = $('#rmaccount').val();
    let rmd = $('#rmdate').val()
    let rmm = months[new Date(rmd).getMonth()];
    let rmi = new Date(rmd).getMonth();
    let cu = JSON.parse(localStorage.getItem("Current"));
    let um = cu.Months;

    if(rma != cu.Accountid){
        alert("You can find your account ID by clicking your name")
        return;
    }

    if(rmp == ''){
        alert("If your leave your payment input blank, your data chart will show the payment as pending")
    }

    um[rmi].RM = rmp;
    um[rmw].month = rmm;
    cu.Months = um;
    localStorage.setItem('Current', JSON.stringify(cu));
})

$('#insub').click(() => {
    let inp = $('#inpay').val();
    let ina = $('#inaccount').val();
    let ind = $('#indate').val()
    let inm = months[new Date(ind).getMonth()];
    let ini = new Date(ind).getMonth();
    let cu = JSON.parse(localStorage.getItem("Current"));
    let um = cu.Months;

    if(ina != cu.Accountid){
        alert("You can find your account ID by clicking your name")
        return;
    }

    if(inp == ''){
        alert("If your leave your payment input blank, your data chart will show the payment as pending")
    }

    um[ini].insurence = inp;
    um[ini].month = inm;
    cu.Months = um;
    localStorage.setItem('Current', JSON.stringify(cu));
})

$('#carsub').click(() => {
    let cp = $('#carpay').val();
    let ca = $('#caraccount').val();
    let cd = $('#cardate').val()
    let cm = months[new Date(cd).getMonth()];
    let ci = new Date(cd).getMonth();
    let cu = JSON.parse(localStorage.getItem("Current"));
    let um = cu.Months;

    if(ca != cu.Accountid){
        alert("You can find your account ID by clicking your name")
        return;
    }

    if(cp == ''){
        alert("If your leave your payment input blank, your data chart will show the payment as pending")
    }

    um[ci].car = cp;
    um[ci].month = cm;
    cu.Months = um;
    localStorage.setItem('Current', JSON.stringify(cu));
})

function tableload(){
    let cu = JSON.parse(localStorage.getItem('Current'));
    let pay = cu.Months

    let t = ''

    for(i in pay){
        if (pay[i].month !== 'Pending...') {
          t += `<tr>
            <td>${pay[i].month}</td>
            <td>$${pay[i].water}</td>
            <td>$${pay[i].electricity}</td>
            <td>$${pay[i].phone}</td>
            <td>$${pay[i].RM}</td>
            <td>$${pay[i].insurence}</td>
            <td>$${pay[i].car}</td>
        </tr>`
        }
    }

    $('#payments').html(t)
}