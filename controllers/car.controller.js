const { getCarDB, getCarOneDB } = require("../servise/car.servis");

const getCar = (req, res) => {
  const data = getCarDB();
  res.status(200).json(data);
};

const getCarOne = (req, res) => {
  const id = req.params.id;
  const data = getCarOneDB(id);
  res.status(200).json(data);
};


const postCar = (req, res) => {
  console.log(req);
  res.status(200).json("создали машину");
};



const updateCar = (req, res) => {
  res.status(200).json("обновили машину");
};



const daleteCar = (req, res) => {
  res.status(200).json("удалили машину");
};


module.exports = {
  getCar,
  postCar,
  updateCar,
  daleteCar,
  getCarOne,
};
