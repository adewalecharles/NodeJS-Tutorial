const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user'); 
const Cart = require("./models/cart");

const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', 'views');


// routes 
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");
const OrderItem = require("./models/order-item");


// making public folder accessible
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//middleware to get user
app.use((req, res, next) => {
    User.findByPk(1).then(user => {
        req.user = user;
        next();
    })
    .catch(err => {
        console.log(err);
    })
});

//routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// models relationship
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);
Cart.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasOne(Cart);
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});
User.hasMany(Order);
Order.belongsTo(User);
Order.belongsToMany(Product, {through: OrderItem});
Product.belongsToMany(Order, {through: OrderItem});


// sequelie sync for creating databse on app lauch and start server
sequelize
.sync()
.then(result => {
 return User.findByPk(1);
})
.then(user => {
    if(!user){
        return User.create({
            username: 'Adewale',
            email: 'shyprince1@gmail.com'
        })
    }

    return user;
})
.then(user => {
    // console.log(user);
    return user.createCart();
})
.then(cart => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});
