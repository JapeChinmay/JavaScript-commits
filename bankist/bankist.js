"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = ` <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
};

createUserNames(accounts);

const createBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${balance}EUR`;
};
createBalance(account2.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(function (mov) {
      if (mov > 0) return mov;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    });
  labelSumIn.textContent = `${incomes}EUR`;

  const out = movements
    .filter(function (mov) {
      if (mov < 0) return mov;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  labelSumOut.textContent = `${Math.abs(out)}EUR`;

  const intrest = movements
    .filter(function (mov) {
      if (mov > 0) return mov;
    })
    .map(function (deposit) {
      return (deposit * 1.2) / 100;
    })
    .filter(function (int) {
      return int >= 1;
    })
    .reduce(function (acc, int) {
      return acc + int;
    }, 0);
  labelSumInterest.textContent = `${intrest}EUR`;
};
calcDisplaySummary(account2.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

///for Each for the map and sets

currencies.forEach(function (value, key) {
  console.log(`Your key : ${key} and value is ${value}`);
});

//set

const currenciesUnique = new Set(["USD", "EUR", "INR", "INR"]);
currenciesUnique.forEach(function (value, _) {
  console.log(`${value} : ${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

for (const mov of movements) {
  if (mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${mov}`);
  }
}

console.log("FOR EACH _____________");
// for each

movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} :You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${mov}`);
  }
});

/*
let arr = ["a", "v", " b", "g"];
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice());
console.log([...arr]);

console.log(arr.splice(1));
console.log(arr.splice(-1));
console.log(arr);

//
const arr2 = [23, 11, 45];
console.log(arr2.at(1));

//
console.log(arr2.slice(-1));

*/

const eurToUsd = 1.1;

const movementUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movementUsd);

const movementsDescription = movements.map(function (mov, i, arr) {
  console.log(
    `Movement ${i + 1}: you ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
  );
});

console.log(movementsDescription);

const user = "Steven Thomas Williams"; //stw

const deposits = movements.filter(function (mov) {
  if (mov > 0) console.log(`${mov}`);
});

const Withdrawlas = movements.filter(function (mov) {
  if (mov < 0) console.log(`${mov}`);
});

const summation = movements.reduce(function (accu, curr, index, arr) {
  console.log(accu + curr, `${index}, ${arr}`);
  return accu + curr;
}, 0);

console.log(summation);
////////////////

///chaining

const totalDeposits = movements
  .filter(function (mov) {
    if (mov > 0) return mov;
  })
  .map(function (mov) {
    return mov * eurToUsd;
  })
  .reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

console.log(totalDeposits);

const firstWithdrawl = movements.find(function (mov) {
  if (mov < 0) return mov;
});
console.log(firstWithdrawl);

const findacc = accounts.find(function (singleaccount) {
  if (singleaccount.owner === "Jessica Davis") return singleaccount;
});
console.log(findacc);
