const jsonfile = require("jsonfile");

const getCarDB = () => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  return data;
};

const getCarOneDB = (id) => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  if (!id) throw "нет нужного парамтра";
  return data[id];
};

const postCarDB = (obj) => {
  let data = jsonfile.readFileSync("./models/car.json", (err, file) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  let arr = [...data];
  arr.push(obj);
  jsonfile.writeFileSync("./models/car.json", arr, (err) =>{
    if (err) {
        console.error(err);
        throw err;
      }
  });

  return true;
};

const updateCarDB = (id, name, model, years, price) =>{
    let data = jsonfile.readFileSync("./models/car.json", (error, file) => {
        if (err) {
          console.error(1, error);
          throw "1";
        };
    });
    let result = data[id];
    result.name = name;
    result.model = model;
    result.years = years;
    result.name = name;

    result.name = 1;
        return result;
};


module.exports = { getCarDB, getCarOneDB, postCarDB, updateCarDB };
