/// <reference path="../typings/main.d.ts" />

import * as fs from "fs";

class CheckError {
    word: string;
    lineIndex: number;
    wordIndex: number;
    constructor(word, lineIndex, wordIndex) {
        this.word = word;
        this.lineIndex = lineIndex;
        this.wordIndex = wordIndex;
    }
}
class Checker {
    // hash search is faster O(1) than array.indexOf O(n)
    private topWords: {[key: string]: boolean} = {};
    constructor(filename: string) {
        const file = fs.readFileSync(filename).toString();
        file.split("\n").forEach(word => {
            this.topWords[word] = true;
        });
    }
    contains(word: string): boolean {
        return this.topWords[word] === true;
    }
    validates(text: string) {
        let errors: CheckError[] = [];
        const lines = text.split("\n");
        lines.forEach((line, lineIndex) => {
            let wordIndex = 0;
            const words = line.split(" ");
            words.forEach(word => {
                wordIndex = line.indexOf(word, wordIndex);
                if (!this.contains(word)) {
                    errors.push(new CheckError(word, lineIndex, wordIndex));
                }
            });
        });
        return errors;
    }
}

let c = new Checker("./1-1000.txt");
const txt = "this document is an example for top  1000 words used in English";

