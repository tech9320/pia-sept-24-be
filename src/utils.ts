import { createHash, randomBytes, pbkdf2Sync } from "crypto";
import fs from "fs";

const hashPassword = (password: string): string => {
    const hash = createHash("sha256").update(password).digest("hex");

    return hash.toString();
};

const encodeImageToBase64 = (path: string): string => {
    const imageBuffer = fs.readFileSync(path);
    const imageBitecode = imageBuffer.toString("base64");
    const fullBitecode = `data:image/png;base64,${imageBitecode}`;

    return fullBitecode;
};

const getSerbianTime = (
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number
): Date => {
    const dateUTC = new Date(
        Date.UTC(year, month - 1, day, hour, minute, second)
    );

    const offsetMiliseconds = 2 * 60 * 60 * 1000;

    const serbianDate = new Date(dateUTC.getTime() + offsetMiliseconds);

    return serbianDate;
};

const addDaysToDate = (date: Date, days: number): Date => {
    return new Date(date.setDate(date.getDate() + days));
};

const substractDaysToDate = (date: Date, days: number): Date => {
    return new Date(date.setDate(date.getDate() - days));
};

export default {
    hashPassword,
    encodeImageToBase64,
    getSerbianTime,
    addDaysToDate,
    substractDaysToDate,
};
