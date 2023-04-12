const express = require('express');
const App = express();
const mongoose = require('mongoose');
const cors = require('cors');

App.use(cors());

const url = 'mongodb+srv://admin:admin@cluster0.t6kz7is.mongodb.net/test'

mongoose.connect(url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 5000,
    // socketTimeoutMS: 45000,
    useNewUrlParser: true,
  useUnifiedTopology: true,

})
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log(err))

const responsesSchema = new mongoose.Schema({
    answer: String,
});
const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    responses: [{
      answer: String,
    }]
});

const User = new mongoose.model('User',userSchema);

App.use(express.json());
App.use(express.urlencoded({ extended: true }));


// App.post('/api/save-data', async(req, res) => {
//     // make the line below work on the backend
//   try{const { uid, answer } = req.body;
//   let user = await User.findOne({
//     uid : uid,
//   })
//   if(!user){
//     const newUser = new User({ uid, responses: [{answer : answer.name}] });
//     return res.json({
//       success: true
//     })
//   }
//   else{
//     user.responses.push({answer:answer.name})
//     await user.save()
//     return res.json({
//       success: true
//     })
//   }}
//   catch(error){
//     return res.json({
//       success: false
//     })
//   }
// });

App.post('/api/save-data', async (req, res) => {
  try {
    const { uid, answer } = req.body;
    let user = await User.findOne({
      uid: uid,
    });
    if (!user) {
      const newUser = new User({ uid, responses: [{ answer: answer }] });
      await newUser.save();
      return res.json({
        success: true,
      });
    } else {
      user.responses.push({ answer: answer.toString() });
      await user.save();
      return res.json({
        success: true,
      });
    }
  } catch (error) {
    return res.json({
      success: false,
    });
  }
});



const port = process.env.PORT || 4000;

App.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

