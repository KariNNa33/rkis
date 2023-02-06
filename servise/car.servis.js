const jsonfile = require('jsonfile');

const getCarDB = ()=>{
    let data = jsonfile.readFileSync('./models/car.json', (err, obj)=>{
        if(err){
            console.error(err);
            throw err;
    }
});
    return data;
};

const getCarOneDB = (id)=>{
    let data = jsonfile.readFileSync('./models/car.json', (err, obj)=>{
        if(err){
            console.error(err);
            throw err;
    }
});
if (!id) throw 'нет нужного парамтра';
    return data[id];
};


module.exports={getCarDB, getCarOneDB};