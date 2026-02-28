//callback hell
//callback based asynchronous function calls
setTimeout(() => {
  console.log("hiii");
  setTimeout(() => {
    console.log("ewfwe")
    setTimeout(() => {
      console.log("ewfwe")
      setTimeout(() => {
        console.log("ewfwe")
        setTimeout(() => {
          console.log("ewfwe")
          setTimeout(() => {
            console.log("ewfwe")
            setTimeout(() => {
              console.log("ewfwe")
              setTimeout(() => {
                console.log("ewfwe")
                setTimeout(() => {
                  console.log("ewfwe")
                  setTimeout(() => {
                    console.log("ewfwe")
                    setTimeout(() => {
                      console.log("ewfwe")
                      setTimeout(() => {
                        console.log("ewfwe")
                        setTimeout(() => {
                          console.log("ewfwe")
                        }, 2000);
                      }, 2000);
                    }, 2000);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 1000);


//promise based asynchronous function call
//promisified version more readable,clean
function setTimeoutPromisified(delay) {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve("yoooo i am logged alteast " + delay + " milliseconds later");
    }, delay);
  });
}

setTimeoutPromisified(1000)
  .then((str) => {
    console.log(str);
    return setTimeoutPromisified(2000);
  })
  .then((str) => {
    console.log(str);
    return setTimeoutPromisified(2000);
  })
  .then((str) => {
    console.log(str);
    return setTimeoutPromisified(2000);
  })
  .then((str) => {
    console.log(str);
    return setTimeoutPromisified(2000);
  })
  .then((str) => {
    console.log(str);
    return setTimeoutPromisified(2000);
  })
  .then((str) => {
    console.log(str);
  })
  .finally(() => {
    console.log("I will run anyway")
  })
