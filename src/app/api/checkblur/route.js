/* import {createWorker} from 'tesseract.js';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const worker = await createWorker('eng');
    const data = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    console.log(data.text);
    await worker.terminate();
    return NextResponse.json({ text }, { status: 200 });
  } catch (error) {
    console.error('Error extracting text:', error);
    return NextResponse.json({ message: 'Error extracting text' }, { status: 500 });
  }
}
 */