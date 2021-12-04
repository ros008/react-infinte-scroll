const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();

router.get("/fetch-paginated-data", (req, res) => {
  // offet : 시작 index
  // limit : 가져올 데이터 개수
  // order : 정렬 방법
  let offset = parseInt(req.query.offset);
  let limit = parseInt(req.query.limit);
  let order = req.query.order;

  console.log(offset, limit, order);

  if (offset < 0) {
    let response = {
      success: false,
      message: "Invalid offset Number",
    };
    return res.status(200).json(response);
  } else {
    const fs = require("fs");
    const jsonFile = fs.readFileSync("./data-random.json", "utf8");
    const jsonData = JSON.parse(jsonFile);
    const count = jsonData.length;

    let list = [];
    for (let i = 0; i < limit; i++) {
      list.push(jsonData[offset + i]);
    }

    let response = {
      success: true,
      count,
      list: list,
    };
    return res.status(200).json(response);
  }
});

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed Origin!"));
    }
  },
};

app.use(cors(corsOptions));
app.use("/", router);
app.listen(3050);
