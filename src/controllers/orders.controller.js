const ordersService = require("../services/order.service");
const { catchAsync } = require("../utils/error");

const createOrders = catchAsync(async (req, res) => {
  const {orderStatusId} = req.body;
  const userId = req.user.id;

  if (!orderStatusId) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }

  await ordersService.createOrders(orderStatusId, userId);

  return res.status(201).json({
    message: "SIGNUP_SUCCESS",
  });
});

// const getOrders = catchAsync(async (req, res) => {
//   const userId = req.user.id;

//   if (!userId ) {
//     const err = new Error("KEY_ERROR");
//     err.statusCode = 400;
//     throw err;
//   }
  
//   return res.status(201).json(await cartsService.getCarts(userId));
// });

// const updateCarts = catchAsync(async (req, res) => {
//   const { cartsId, quantity } = req.body;

//   if (!cartsId || !quantity ) {
//     const err = new Error("KEY_ERROR");
//     err.statusCode = 400;
//     throw err;
//   }

//   await cartsService.updateCarts(cartsId, quantity);

//   return res.status(201).json({
//     message: "UPDATE_SUCCESS",
//   });
// });

// const deleteCarts = catchAsync(async (req, res) => {
//   const { cartsId } = req.body;

//   if (!cartsId) {
//     const err = new Error("KEY_ERROR");
//     err.statusCode = 400;
//     throw err;
//   }

//   await cartsService.deleteCarts(cartsId);

//   return res.status(201).json({
//     message: "DELETE_SUCCESS",
//   });
// });

module.exports = { createOrders };
