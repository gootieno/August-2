function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    // if not successful
    if (timeLeft < 1000) {
      reject(new Error("You dont have enough time to stretch"));
    } else {
      // if successful
      timeLeft -= 1000;
      setTimeout(() => {
        console.log("done stretching");
        resolve(timeLeft);
      }, 1000);
    }
  });
}

function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    // if not successful
    if (timeLeft < 500) {
      reject(new Error("You dont have enough time to run on treadmill"));
    } else {
      // if successful
      timeLeft -= 500;
      setTimeout(() => {
        console.log("done running");
        resolve(timeLeft);
      }, 500);
    }
  });
}

function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    // if not successful
    if (timeLeft < 2000) {
      reject(new Error("You dont have enough time to lift weights"));
    } else {
      // if successful
      timeLeft -= 2000;
      setTimeout(() => {
        console.log("done lifting");
        resolve(timeLeft);
      }, 2000);
    }
  });
}

function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime)
    .then((timeLeftAfterStretching) => runOnTreadmill(timeLeftAfterStretching))
    .then((timeAfterRunning) => liftWeights(timeAfterRunning))
    .then((remainingTime) =>
      console.log(`done working out ${remainingTime / 1000}`)
    )
    .catch((error) => console.log(error));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/

// workout(500);
// should print out the following:
// Error:  you dont have enough time to stretch

// workout(1000);
// should print out the following:
// done stretching
// Error:  you dont have enough time to run on treadmill

// workout(2000);
// should print out the following:
// done stretching
// done running on treadmill
// Error:  you dont have enough time to lift weights

workout(4000);
// should print out the following:
//   done stretching
//   done running on treadmill
//   done lifting weights
//   done working out with 0.5 seconds left
