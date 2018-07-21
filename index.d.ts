/// <reference types="node"/>

declare function detector(buf: Buffer): detector.DetectingResult;

declare namespace detector {
  interface DetectingResult {
    encoding: string;
    confidence: number;
  }
}

export = detector;
