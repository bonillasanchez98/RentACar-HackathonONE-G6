import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()

  console.log(data)

  const response = await fetch('http://localhost:8080/rentCar/admin/car', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const resText = await response.text()

  if (resText !== 'Car created successfully!') {
    return NextResponse.json({
      ok: false
    })
  }

  return NextResponse.json({
    ok: true
  })
}
