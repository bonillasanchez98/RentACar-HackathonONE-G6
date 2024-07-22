import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { AuthError } from 'next-auth'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const newData = {
      ...data,
      name: data.username,
      password: await bcrypt.hash(data.password, 10)
    }

    const response = await fetch('http://localhost:8080/rentCar/auth/signup', {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const newUser = await response.json()

    console.log(newUser, JSON.parse(JSON.stringify(newUser)))

    if (newUser['Status: '] === '401') {
      return NextResponse.json({
        message: 'El usuario ya existe',
        ok: false
      })
    }

    return NextResponse.json({
      data: newUser,
      ok: true
    })
  } catch (error) {
    if (error instanceof AuthError) {
      return NextResponse.json({
        ok: false,
        message: error.cause?.err?.message
      })
    } else {
      return NextResponse.json({
        status: 500,
        ok: false,
        message: 'Unexpected error'
      })
    }
  }
}
