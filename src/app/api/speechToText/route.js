import { NextResponse } from "next/server";
import fs from "fs";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
    apiKey: 'sk-proj-0CwNwWN0Po6pi6EU857tT3BlbkFJNHIJrbixJn5QZZbHo0LJ',
});

export async function POST(req) {
    const body = await req.json();
    const base64Audio = body.audio;
    const audio = Buffer.from(base64Audio, "base64");
    const filePath = "tmp/input.wav";

    try {
        fs.writeFileSync(filePath, audio);
        const readStream = fs.createReadStream(filePath);
        const data = await openai.audio.transcriptions.create({
            file: readStream,
            model: "whisper-1",
        });
        // Remove the file after use
        fs.unlinkSync(filePath);

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error processing audio:", error);
        return NextResponse.error();
    }
}