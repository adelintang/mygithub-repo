import { NextResponse } from "next/server";
import data from './data.json';

interface NewNote {
  id: number
  note: string
}

async function addNote (newNote: NewNote) {
  try {
    // const newData = [newNote, ...data]
    data.push(newNote)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
      return error.message
    }
  }
}

export async function GET (request: Request) {
  return NextResponse.json({ data })
}

export async function POST (request: Request) {
  const { note } = await request.json()
  
  const id = +new Date()
  const newNote = { id, note }

  addNote(newNote)

  return NextResponse.json({ data: newNote, message: 'note created' })
}