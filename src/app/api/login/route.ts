import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/database";
import User from "@/models/user";
import { jwt } from '@/utils';
import { cookies } from 'next/headers'

type Data =
  | { message: string }
  | { token: string; user: { email: string; role: string; name: string } };

  export async function POST(
  req: NextRequest ,
  res: NextResponse
) {
    const {email,passwordHash} = await req.json()
    const cookieStore = cookies()
    
    await db.connect();
    const user = await User.findOne({ email }).lean();
    db.disconnect();
  
    if (!user) {
        return NextResponse.json({ message: "Invalid credentials"},{status:400});
    }
  
    if (!bcrypt.compareSync(passwordHash, user.passwordHash!)) {
        return NextResponse.json({ message: "Invalid credentials failed"},{status:400});
    }
  
    const { role, name, _id } = user;
  
    const token = jwt.signToken(_id, email);

    await cookieStore.set('token', token)
  
  return NextResponse.json({ 
    token, // token: token
    user: { email, role, name },
   });
}


