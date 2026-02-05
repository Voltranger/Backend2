import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../model/user.model.js"

const registerUser = asyncHandler(async (req, res) => {
   //get user details from frontend
   //validation-non empty
   //check if user already exists
   //check for images,check for avatar
   //upload them to cloudinary,avatar
   //create user object-create entry in db
   //remove password and referesh token from response
   //check for user creation
   //return res

    const { fullName, email, username, password } = req.body; // form or json format accepted
    console.log("register body:", req.body);
    console.log("email:", email);

    // if(fullName===""){
    //   throw new ApiError(400,"full name is required")
    // }

    //empty data check
    if(
      [fullName ,email,username,password].some((field)=>
      field?.trim()==="")
    )
    {
      throw new ApiError(400,"All fields are required")
    }

    //check if user exists

    const existedUser=User.findOne({
      $or:[{username},{email}]

    })

    if(existedUser)
    {//409 multiple users
      throw new ApiError(409,"user with email or username already exists")
    }





    return res.status(201).json({
      message: "ok",
      received: { fullName, email, username, password },
    });
}) // <-- Added closing parenthesis

export {
    registerUser,
}