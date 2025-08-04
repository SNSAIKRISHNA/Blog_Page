const User = require('../models/user');
exports.handleUserLogin = async function(req, res)  {
    const {email,password} = req.body;
    try{
        if(!email || !password) throw new Error('email and password ');
        const user = await User.findOne({email })

        if(!user) throw new Error(`User with ${email} does not exist`);

        if((user.password !== password)) throw new Error(`Incorrect Password`);

        return res.render("login",{message: "Login Sucess"})

    } catch (error){
        res.render("login",{error})
    }
    
}

exports.handleUserSignUp = async function(req, res)  {
    const {fullName,email,password} = req.body;
    try{
        if(!fullName) throw new Error ("FullName is Required");
        if(!email) throw new Error ("email is Required");
        if(!password || password.length < 5) throw new Error (" password is requird andfd  min length is 5 characters");
        await User.create({fullName , email ,  password});
        return res.render('login' ,{ message: "Signup Succcess!"})
    }
    catch(error){
        res.render('signup' ,{
            error,
        });
    }
}