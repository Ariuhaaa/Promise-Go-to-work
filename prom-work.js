//Go to work


//Ornoosoo bosno.
//Nuuree ugaana.
//Huvtsasaa umsunu.
//Gerees garna.
//Unaand suuna.
//Ajil dree ochno.


function bed () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ornoosoo bosloo");
    }, 2000);
  });
}
function faceWash () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Nuur tseverhen bolloo");
      }, 2000);
    });
  }
  function putClothes () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Huvtsasaa umsluu");
      }, 2000);
    });
  }
  function homeOut () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Gerees garlaa");
      }, 2000);
    });
  }
  function car () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Unaand suulaa");
      }, 2000);
    });
  }
  function car () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Ajil dree irlee hoosh");
      }, 2000);
    });
  }

bed ()
  .then((result) => {
    console.log(result);
    return faceWash ();
  })
  .then((result) => {
    console.log(result);
    return putClothes();
  })
  .then((result) => {
    console.log(result);
    return homeOut();
  })
  .then((result) => {
    console.log(result);
    return car ();
  })
  .then((result) => {
    console.log(result);
    return Work ();
  })
  .then((res)=>console.log(res))

  .catch((error) => console.log(error))
  .finally(() => console.log("finally"));

