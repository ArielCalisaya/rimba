const Clothes = require("../models/clothes");
const express = require("express");
const router = express.Router();

let response = {};

// Show All Clothes
router.get("/all", (req, res) => {
  Clothes.find({}, (err, data) => {
    if (err) {
      response = { error: true, msg: "Error fetching data, try your best ;D" };
    } else {
      response = { error: false,  result: data };
    }
    res.json(response);
  });
});

// Get Clothe details
router.get("/get/:id", (req, res) => {
  let id = req.params.id;
  Clothes.findById(id, (err, data) => {
    if (err) {
      response = { error: true, msg: "Clothes doesn't exist" };
    } else {
      response = { error: false, result: data };
    }
    res.json(response);
  });
});

// Create New Clothes
router.post("/new",(req, res) => {
  let db = new Clothes();
  db.tipo = req.body.tipo;
  db.color = req.body.color;
  db.precio = req.body.precio;
  db.imagen = req.body.imagen;
  db.img_sides = req.body.img_sides;
  db.talla_S = req.body.talla_S;
  db.talla_M = req.body.talla_M;
  db.talla_L = req.body.talla_L;

  db.save((err, data) => {
    if (err) {
      response = { error: true, msg: err };
    } else {
      response = { error: false, msg: "New clothe Succesfully created", output: data};
    }
    res.json(response);
  });
});

// Edit Clothe Details
router.put("/edit/:id", (req, res) => {
  let id = req.params.id
  Clothes.findById(id, (err, data) => {
    if(err){
      response = {error: true, msg: `Clothe with: ${id} doesn't exist`}
    }
    
    if (req.body.tipo !== undefined) {
      data.tipo = req.body.tipo;
    }
    if (req.body.color !== undefined) {
      data.color = req.body.color;
    }
    if (req.body.precio !== undefined) {
      data.precio = req.body.precio;
    }
    if (req.body.imagen !== undefined) {
      data.imagen = req.body.imagen;
    }
    if (req.body.img_sides !== undefined) {
      data.img_sides = req.body.img_sides;
    }
    if (req.body.talla_S !== undefined) {
      data.talla_S = req.body.talla_S;
    }
    if (req.body.talla_M !== undefined) {
      data.talla_M = req.body.talla_M;
    }
    if (req.body.talla_L !== undefined) {
      data.talla_L = req.body.talla_L;
    }

    data.save((err, data) => {

      if (err) {
        response = {error: true, msg:"Something was wrong with:", id}
      } else {
        response = {error: false, msg: `Clothe with id:${id}, has been Succesfully saved :D`, output: data}
      }
      res.json(response)
    })
  })
});


// Delete Clothe object
router.delete("/delete/:id", (req, res) => {
  let id = req.params.id
  Clothes.findById(id, (err, data) => {
    if(err) {
      response = { error: true, msg: "Error fetching data, try your best ;D" };
    } else {
      Clothes.remove({_id : id}, (err) => {
        if(err) {
          response = { error: true, msg: "Error deleting data :C" };
        } else {
          response = { error: false, msg: `Clothe with id:${id} has been removed`, output: data };
        }
        res.json(response)
      })
    }
  })
});


// Create Example Clothe on DB
router.get("/make/new", async (req, res) => {
  try {
    const clothes = new Clothes({
      tipo: "Poleron",
      color: "Celeste",
      precio: 7000,
      imagen: "etc/noimg",
      // img_sides: {
      //   img_R: "Right_Img",
      //   img_L: "Left_Img"
      // },
      talla_S: {
        talla: "S",
        cantidad: 10,
      },
      talla_M: {
        talla: "M",
        cantidad: 12,
      },
      talla_L: {
        talla: "L",
        cantidad: 1,
      },
    });
     const createClothe = await clothes.save();
    res.send(createClothe);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = router;
